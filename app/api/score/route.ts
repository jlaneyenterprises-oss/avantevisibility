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

  // Handle "Other" industry -- use a generic term instead
  const industryLabel = industry === "Other" ? "local business" : industry;

  const queries = [
    `What is the best ${industryLabel} in ${city}? Recommend specific businesses by name.`,
    `Can you recommend a top-rated ${industryLabel} near ${city}? List specific business names.`,
    `Who are the most recommended ${industryLabel} in ${city}? Name specific businesses.`,
  ];

  try {
    const results = await Promise.allSettled(
      queries.map((q) => queryPerplexity(q))
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

    const platformResults: PlatformResult[] = [
      {
        platform: "AI Recommendation Query",
        found: false,
        details: "",
      },
      {
        platform: "AI Local Search Query",
        found: false,
        details: "",
      },
      {
        platform: "AI Provider Directory Query",
        found: false,
        details: "",
      },
    ];

    let foundCount = 0;
    let successCount = 0;

    results.forEach((result, i) => {
      if (result.status === "fulfilled") {
        successCount++;
        const found = checkMention(result.value, businessName);
        platformResults[i].found = found;
        platformResults[i].details = found
          ? `Your business was mentioned in AI search results for this query.`
          : `Your business was not found. AI recommended other businesses instead.`;
        if (found) foundCount++;
      } else {
        platformResults[i].details =
          "Unable to test this query. Try again later.";
      }
    });

    // Calculate score (0-100) -- only count queries that actually ran
    const baseScore = successCount > 0 ? Math.round((foundCount / successCount) * 70) : 0;
    // Bonus points for having a website URL (up to 15) and being in a known industry (up to 15)
    const websiteBonus = websiteUrl.startsWith("http") ? 15 : 5;
    const industryBonus = industry && industry !== "Other" ? 15 : 5;
    const score = Math.min(100, baseScore + websiteBonus + industryBonus);

    // Determine score level
    let level: "critical" | "needs-work" | "good";
    let recommendations: string[];

    if (foundCount === 0) {
      level = "critical";
      recommendations = [
        "Your business is not appearing in any AI search results -- this means potential customers using ChatGPT, Perplexity, or Google AI will never find you.",
        "Start with a complete Google Business Profile -- this is the #1 data source AI platforms reference.",
        "Build your review profile to 50+ Google reviews with detailed, service-specific feedback.",
        "Add schema markup to your website so AI can accurately extract your business information.",
        "Create clear, factual content on your website that AI can easily quote and cite.",
      ];
    } else if (foundCount < queries.length) {
      level = "needs-work";
      recommendations = [
        "Your business appears in some AI results but not consistently -- you are losing potential customers on queries where you do not show up.",
        "Improve review volume and recency across Google, Yelp, and industry-specific platforms.",
        "Add FAQ sections with detailed answers to common customer questions.",
        "Ensure your NAP (name, address, phone) is identical across all online directories.",
        "Publish fresh content monthly to signal to AI that your business is active and current.",
      ];
    } else {
      level = "good";
      recommendations = [
        "Your business is appearing across AI search results -- great foundation.",
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
            <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Found In</td><td style="padding:8px;border-bottom:1px solid #eee;">${foundCount} of ${queries.length} AI queries</td></tr>
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
