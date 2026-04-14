// Email templates for AI Score lead nurture sequence
// NOTE: Sending to leads requires a verified custom domain in Resend.
// Current setup uses onboarding@resend.dev (sandbox) which only sends to jolyn@avante.agency.
// To activate lead emails: add avantevisibility.com domain in Resend dashboard,
// then change FROM_EMAIL below.

export const FROM_EMAIL = "Avante Visibility <onboarding@resend.dev>";
export const INTERNAL_EMAIL = "jolyn@avante.agency";
export const BOOKING_URL = "https://cal.com/provemyads/15min";

interface ScoreEmailData {
  businessName: string;
  email: string;
  score: number;
  level: "critical" | "needs-work" | "good";
  industry: string;
  city: string;
  brandFound: boolean;
  commercialFound: boolean;
  recommendationFound: boolean;
}

function scoreColor(level: string): string {
  if (level === "critical") return "#dc2626";
  if (level === "needs-work") return "#f59e0b";
  return "#16a34a";
}

function scoreBadge(found: boolean): string {
  return found
    ? '<span style="color:#16a34a;font-weight:bold;">Found</span>'
    : '<span style="color:#dc2626;font-weight:bold;">Not Found</span>';
}

export function buildLeadResultsEmail(data: ScoreEmailData): string {
  const color = scoreColor(data.level);
  const levelLabel =
    data.level === "critical"
      ? "Critical"
      : data.level === "needs-work"
        ? "Needs Work"
        : "Good";

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f8fafc;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;padding:40px 20px;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1);">

<!-- Header -->
<tr><td style="background:#0f172a;padding:32px 40px;text-align:center;">
  <h1 style="color:#ffffff;margin:0;font-size:24px;">Your AI Visibility Score</h1>
  <p style="color:#94a3b8;margin:8px 0 0;font-size:14px;">for ${data.businessName}</p>
</td></tr>

<!-- Score -->
<tr><td style="padding:40px;text-align:center;">
  <div style="display:inline-block;width:120px;height:120px;border-radius:50%;border:6px solid ${color};line-height:120px;font-size:48px;font-weight:bold;color:${color};">
    ${data.score}
  </div>
  <p style="font-size:18px;font-weight:600;color:${color};margin:16px 0 4px;">${levelLabel}</p>
  <p style="color:#64748b;font-size:14px;margin:0;">out of 100 points</p>
</td></tr>

<!-- Breakdown -->
<tr><td style="padding:0 40px 32px;">
  <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e2e8f0;border-radius:8px;overflow:hidden;">
    <tr style="background:#f8fafc;">
      <td style="padding:12px 16px;font-weight:600;font-size:14px;color:#334155;">Category</td>
      <td style="padding:12px 16px;font-weight:600;font-size:14px;color:#334155;">Points</td>
      <td style="padding:12px 16px;font-weight:600;font-size:14px;color:#334155;">Status</td>
    </tr>
    <tr>
      <td style="padding:12px 16px;font-size:14px;border-top:1px solid #e2e8f0;">Brand Recognition</td>
      <td style="padding:12px 16px;font-size:14px;border-top:1px solid #e2e8f0;">${data.brandFound ? "40" : "0"}/40</td>
      <td style="padding:12px 16px;font-size:14px;border-top:1px solid #e2e8f0;">${scoreBadge(data.brandFound)}</td>
    </tr>
    <tr>
      <td style="padding:12px 16px;font-size:14px;border-top:1px solid #e2e8f0;">Commercial Discovery</td>
      <td style="padding:12px 16px;font-size:14px;border-top:1px solid #e2e8f0;">${data.commercialFound ? "30" : "0"}/30</td>
      <td style="padding:12px 16px;font-size:14px;border-top:1px solid #e2e8f0;">${scoreBadge(data.commercialFound)}</td>
    </tr>
    <tr>
      <td style="padding:12px 16px;font-size:14px;border-top:1px solid #e2e8f0;">AI Recommendation</td>
      <td style="padding:12px 16px;font-size:14px;border-top:1px solid #e2e8f0;">${data.recommendationFound ? "30" : "0"}/30</td>
      <td style="padding:12px 16px;font-size:14px;border-top:1px solid #e2e8f0;">${scoreBadge(data.recommendationFound)}</td>
    </tr>
  </table>
</td></tr>

<!-- Context -->
<tr><td style="padding:0 40px 32px;">
  <div style="background:#fef3c7;border:1px solid #fbbf24;border-radius:8px;padding:20px;">
    <p style="margin:0 0 8px;font-weight:600;color:#92400e;font-size:15px;">What this means:</p>
    <p style="margin:0;color:#78350f;font-size:14px;line-height:1.6;">
      ${data.score <= 30
        ? "AI platforms like ChatGPT, Perplexity, and Google AI do not recognize your business. When potential customers in " + data.city + " ask AI for " + data.industry + " recommendations, your competitors are being named instead of you."
        : data.score <= 60
          ? "AI recognizes your brand, but when customers search for " + data.industry + " services in " + data.city + " without using your name, competitors are showing up instead. There is a gap between your brand presence and your commercial visibility."
          : "AI platforms recognize and recommend your business. But this only tested 3 queries. A full audit tests 28+ queries and often reveals blind spots -- specific searches where competitors are being cited instead of you."}
    </p>
  </div>
</td></tr>

<!-- Limitation Note -->
<tr><td style="padding:0 40px 32px;">
  <p style="color:#64748b;font-size:13px;line-height:1.6;margin:0;">
    <strong>Important:</strong> This free tool tested only 3 AI queries. A full AI Visibility Audit tests 28+ queries across branded, commercial, informational, and comparison searches -- plus technical analysis, schema markup review, competitor benchmarking, and a prioritized 90-day action plan.
  </p>
</td></tr>

<!-- CTA -->
<tr><td style="padding:0 40px 40px;text-align:center;">
  <a href="${BOOKING_URL}" style="display:inline-block;background:#2563eb;color:#ffffff;text-decoration:none;padding:16px 40px;border-radius:8px;font-size:16px;font-weight:600;">Book a Free 15-Minute Strategy Call</a>
  <p style="color:#64748b;font-size:13px;margin:12px 0 0;">No pitch. We will walk through your results and show you what a full audit would uncover.</p>
</td></tr>

<!-- Footer -->
<tr><td style="background:#f8fafc;padding:24px 40px;text-align:center;border-top:1px solid #e2e8f0;">
  <p style="color:#94a3b8;font-size:12px;margin:0;">Avante Visibility | AI Visibility Audits & GEO for Local Businesses</p>
  <p style="color:#94a3b8;font-size:12px;margin:4px 0 0;">Las Vegas, NV | <a href="https://avantevisibility.com" style="color:#64748b;">avantevisibility.com</a></p>
</td></tr>

</table>
</td></tr>
</table>
</body>
</html>`;
}

export function buildEnhancedInternalEmail(data: ScoreEmailData): string {
  const color = scoreColor(data.level);
  const levelLabel =
    data.level === "critical"
      ? "Critical"
      : data.level === "needs-work"
        ? "Needs Work"
        : "Good";

  const followUpScript =
    data.score <= 30
      ? `<h3 style="margin:16px 0 8px;color:#1e293b;">Suggested Follow-Up (High Priority)</h3>
<p style="font-size:14px;color:#475569;line-height:1.6;">This lead scored 0-30 -- they have zero AI visibility. They are the ideal audit candidate.</p>
<div style="background:#f1f5f9;padding:16px;border-radius:8px;margin:8px 0;">
<p style="font-size:13px;color:#334155;margin:0;line-height:1.8;">
<strong>Subject:</strong> ${data.businessName} -- Your AI Visibility Results + Quick Question<br><br>
Hi [Name],<br><br>
I saw your AI visibility score came back at ${data.score}/100 -- which means AI platforms like ChatGPT and Google AI currently have no idea ${data.businessName} exists. When someone in ${data.city} asks AI for a ${data.industry} recommendation, your competitors are the ones getting named.<br><br>
The free tool only tests 3 queries. Our full audit tests 28+ and I can almost guarantee there are specific high-value searches where your competitors are already being recommended.<br><br>
Would 15 minutes be worth seeing exactly which competitors are winning and what it would take to change that?<br><br>
<a href="${BOOKING_URL}">Book a time here</a> or just reply to this email.
</p>
</div>`
      : data.score <= 60
        ? `<h3 style="margin:16px 0 8px;color:#1e293b;">Suggested Follow-Up (Medium Priority)</h3>
<p style="font-size:14px;color:#475569;line-height:1.6;">This lead has some brand presence but is losing commercial queries. Good upsell potential.</p>
<div style="background:#f1f5f9;padding:16px;border-radius:8px;margin:8px 0;">
<p style="font-size:13px;color:#334155;margin:0;line-height:1.8;">
<strong>Subject:</strong> ${data.businessName} -- AI knows you exist, but isn't recommending you<br><br>
Hi [Name],<br><br>
Your AI visibility score of ${data.score}/100 tells an interesting story: AI platforms recognize ${data.businessName}, but when customers search for ${data.industry} services in ${data.city} without using your name, competitors are getting the recommendation instead of you.<br><br>
That gap between brand recognition and commercial visibility is exactly what our full audit digs into -- 28+ queries showing exactly which searches your competitors are winning and why.<br><br>
Would a quick 15-minute walkthrough be helpful?<br><br>
<a href="${BOOKING_URL}">Book a time here</a> or reply to this email.
</p>
</div>`
        : `<h3 style="margin:16px 0 8px;color:#1e293b;">Suggested Follow-Up (Nurture)</h3>
<p style="font-size:14px;color:#475569;line-height:1.6;">This lead scored well. Position the full audit as finding blind spots and locking in their advantage.</p>
<div style="background:#f1f5f9;padding:16px;border-radius:8px;margin:8px 0;">
<p style="font-size:13px;color:#334155;margin:0;line-height:1.8;">
<strong>Subject:</strong> ${data.businessName} -- Strong AI visibility, but there may be blind spots<br><br>
Hi [Name],<br><br>
Nice work -- your AI visibility score of ${data.score}/100 puts you ahead of most ${data.industry} businesses in ${data.city}. AI platforms recognize and recommend you on the basic queries we tested.<br><br>
That said, 3 queries only scratches the surface. Our full audit tests 28+ and usually reveals specific searches where even strong businesses are losing ground to competitors. Want to see which ones?<br><br>
<a href="${BOOKING_URL}">Book 15 minutes here</a> -- I'll walk through what the full audit would cover.
</p>
</div>`;

  return `
<h2>New AI Score Lead</h2>
<table style="border-collapse:collapse;width:100%;max-width:600px;">
  <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Business</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.businessName}</td></tr>
  <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Website</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.businessName}</td></tr>
  <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">City</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.city}</td></tr>
  <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Industry</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.industry}</td></tr>
  <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Email</td><td style="padding:8px;border-bottom:1px solid #eee;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
  <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Score</td><td style="padding:8px;border-bottom:1px solid #eee;"><strong style="color:${color};">${data.score}/100 (${levelLabel})</strong></td></tr>
  <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Brand Recognition</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.brandFound ? "Yes (40pts)" : "No (0pts)"}</td></tr>
  <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Commercial Discovery</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.commercialFound ? "Yes (30pts)" : "No (0pts)"}</td></tr>
  <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">AI Recommendation</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.recommendationFound ? "Yes (30pts)" : "No (0pts)"}</td></tr>
</table>

${followUpScript}

<hr style="border:none;border-top:1px solid #e2e8f0;margin:24px 0;">
<p style="font-size:12px;color:#94a3b8;">Auto-reply email was sent to the lead with their score results and a CTA to book a call.</p>
`;
}
