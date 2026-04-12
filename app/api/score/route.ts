import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

interface ScoreRequest {
  businessName: string;
  websiteUrl: string;
  city: string;
  email: string;
  industry: string;
}

interface PlatformResult {
  platform: string;
  found: boolean;
  details: string;
}

async function queryPerplexity(query: string): Promise<string> {
  const res = await fetch("https://api.perplexity.ai/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.PERPLEXITY_API_KEY}`,
    },
    body: JSON.stringify({
      model: "sonar",
      messages: [{ role: "user", content: query }],
      max_tokens: 500,
    }),
  });

  if (!res.ok) {
    const errorText = await res.text().catch(() => "unknown");
    console.error(`Perplexity API error: ${res.status} - ${errorText}`);
    throw new Error(`Perplexity API error: ${res.status}`);
  }

  const data = await res.json();
  const content = data.choices?.[0]?.message?.content || "";
  if (!content) {
    console.error("Perplexity returned empty content for query:", query);
    throw new Error("Empty response from Perplexity");
  }
  return content;
}

function checkMention(response: string, businessName: string): boolean {
  const lower = response.toLowerCase();
  const nameLower = businessName.toLowerCase();
  // Check for the full name or significant partial match
  if (lower.includes(nameLower)) return true;
  // Check individual words (at least 2 words must match for multi-word names)
  const words = nameLower.split(/\s+/).filter((w) => w.length > 2);
  if (words.length <= 1) return lower.includes(nameLower);
  const matches = words.filter((w) => lower.includes(w));
  return matches.length >= Math.ceil(words.length * 0.6);
}

function checkWebsiteMention(response: string, websiteUrl: string): boolean {
  const lower = response.toLowerCase();
  // Extract domain from URL
  try {
    const domain = new URL(websiteUrl).hostname.replace("www.", "");
    return lower.includes(domain);
  } catch {
    return false;
  }
}

export async function POST(req: NextRequest) {
  // Rate limit: check cookie
  const rateCookie = req.cookies.get("ai_score_check");
  if (rateCookie) {
    return NextResponse.json(
      { error: "You have already checked your score recently. Please try again later." },
      { status: 429 }
    );
  }

  let body: ScoreRequest;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { businessName, websiteUrl, city, email, industry } = body;

  if (!businessName || !websiteUrl || !city || !email || !industry) {
    return NextResponse.json(
      { error: "All fields are required." },
      { status: 400 }
    );
  }

  if (!process.env.PERPLEXITY_API_KEY) {
    return NextResponse.json(
      { error: "Service temporarily unavailable. Please try again later." },
      { status: 503 }
    );
  }

  // Build smarter queries based on business type
  const industryLabel = industry === "Other" ? "business" : industry;

  // 3 query categories that mirror a real GEO audit:
  // 1. Branded query - does AI know who you are?
  // 2. Commercial intent - do you show up when people search for your service?
  // 3. Comparison/recommendation - are you recommended alongside competitors?
  const queryCategories = [
    {
      label: "Brand Recognition",
      query: `What is ${businessName}? Tell me about this company and what they offer.`,
    },
    {
      label: "Commercial Discovery",
      query: `What is the best ${industryLabel} in ${city}? Recommend specific businesses by name with their websites.`,
    },
    {
      label: "AI Recommendation",
      query: `Can you recommend a top-rated ${industryLabel} near ${city}? List specific business names and why you recommend them.`,
    },
  ];

  try {
    const results = await Promise.allSettled(
      queryCategories.map((q) => queryPerplexity(q.query))
    );

    // Check if ALL queries failed
    const allFailed = results.every((r) => r.status === "rejected");
    if (allFailed) {
      console.error("All Perplexity queries failed:", results.map((r) => r.status === "rejected" ? (r as PromiseRejectedResult).reason?.message : "ok"));
      return NextResponse.json(
        { error: "AI platforms are temporarily unavailable. Please try again in a few minutes." },
        { status: 503 }
      );
    }

    const platformResults: PlatformResult[] = queryCategories.map((q) => ({
      platform: q.label,
      found: false,
      details: "",
    }));

    let brandFound = false;
    let commercialFound = false;
    let recommendationFound = false;
    let successCount = 0;

    results.forEach((result, i) => {
      if (result.status === "fulfilled") {
        successCount++;
        const nameMentioned = checkMention(result.value, businessName);
        const siteMentioned = checkWebsiteMention(result.value, websiteUrl);
        const found = nameMentioned || siteMentioned;

        platformResults[i].found = found;

        if (i === 0) {
          // Brand Recognition
          brandFound = found;
          platformResults[i].details = found
            ? "AI platforms recognize your brand and can describe your business."
            : "AI platforms do not recognize your brand. This is the most critical gap.";
        } else if (i === 1) {
          // Commercial Discovery
          commercialFound = found;
          platformResults[i].details = found
            ? "Your business appears in commercial search results for your industry."
            : "Your business was not found. AI recommended other businesses instead.";
        } else {
          // Recommendation
          recommendationFound = found;
          platformResults[i].details = found
            ? "AI platforms actively recommend your business to potential customers."
            : "AI is recommending your competitors instead of your business.";
        }
      } else {
        platformResults[i].details =
          "Unable to test this query. Try again later.";
      }
    });

    // Smarter scoring that aligns with GEO audit methodology
    // Brand recognition is weighted heaviest (it's the foundation)
    let score = 0;

    if (successCount === 0) {
      score = 0;
    } else {
      // Brand Recognition: 0-40 points
      if (brandFound) {
        score += 40;
      }

      // Commercial Discovery: 0-30 points
      if (commercialFound) {
        score += 30;
      }

      // AI Recommendation: 0-30 points
      if (recommendationFound) {
        score += 30;
      }

      // If brand is recognized but not showing in commercial/recommendation,
      // give partial credit -- the business exists in AI knowledge but needs
      // optimization to appear in non-branded queries
      if (brandFound && !commercialFound && !recommendationFound) {
        score += 10; // partial credit for having brand presence
      }
    }

    // Determine score level
    let level: "critical" | "needs-work" | "good";
    let recommendations: string[];
    const foundCount = [brandFound, commercialFound, recommendationFound].filter(Boolean).length;

    if (score <= 30) {
      level = "critical";
      recommendations = [
        "AI platforms do not recognize your business -- potential customers using ChatGPT, Perplexity, or Google AI will not find you.",
        "Add structured data (schema markup) to your website so AI can extract your business information accurately.",
        "Create clear, factual content on your website with FAQ sections that AI can easily quote and cite.",
        "Build your presence on review platforms and business directories that AI platforms reference.",
        "Ensure your website has About and Contact pages with complete business details.",
      ];
    } else if (score <= 60) {
      level = "needs-work";
      recommendations = [
        "AI recognizes your brand but does not recommend you for non-branded searches -- you are missing potential customers.",
        "Create dedicated landing pages for each service you offer, optimized with the questions your customers ask.",
        "Add comparison content showing how you stack up against competitors -- AI platforms heavily cite these.",
        "Publish educational content targeting the specific queries where your competitors are being cited.",
        "Build authority through reviews, third-party mentions, and industry directory listings.",
      ];
    } else {
      level = "good";
      recommendations = [
        "Your business has strong AI visibility -- you are being found across multiple query types.",
        "Monitor your AI visibility monthly to maintain your competitive position.",
        "Expand to more long-tail queries specific to your services and specialties.",
        "Build authority through local press mentions and industry directory listings.",
        "Consider ongoing AI visibility monitoring to stay ahead of competitors.",
      ];
    }

    // Send lead notification email
    try {
      await getResend().emails.send({
        from: "Avante Visibility <onboarding@resend.dev>",
        to: "jolyn@avante.agency",
        replyTo: email,
        subject: `New AI Score Lead: ${businessName} (Score: ${score}/100)`,
        html: `
          <h2>New AI Visibility Score Lead</h2>
          <table style="border-collapse:collapse;width:100%;max-width:600px;">
            <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Business</td><td style="padding:8px;border-bottom:1px solid #eee;">${businessName}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Website</td><td style="padding:8px;border-bottom:1px solid #eee;"><a href="${websiteUrl}">${websiteUrl}</a></td></tr>
            <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">City</td><td style="padding:8px;border-bottom:1px solid #eee;">${city}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Industry</td><td style="padding:8px;border-bottom:1px solid #eee;">${industry}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Email</td><td style="padding:8px;border-bottom:1px solid #eee;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Score</td><td style="padding:8px;border-bottom:1px solid #eee;"><strong>${score}/100 (${level})</strong></td></tr>
            <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Brand Recognition</td><td style="padding:8px;border-bottom:1px solid #eee;">${brandFound ? "Yes" : "No"}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Commercial Discovery</td><td style="padding:8px;border-bottom:1px solid #eee;">${commercialFound ? "Yes" : "No"}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">AI Recommendation</td><td style="padding:8px;border-bottom:1px solid #eee;">${recommendationFound ? "Yes" : "No"}</td></tr>
          </table>
        `,
      });
    } catch {
      // Don't fail the request if email fails
    }

    const response = NextResponse.json({
      score,
      level,
      platformResults,
      recommendations,
      businessName,
    });

    // Set cookie to rate limit (24 hours)
    response.cookies.set("ai_score_check", "1", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24,
    });

    return response;
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
