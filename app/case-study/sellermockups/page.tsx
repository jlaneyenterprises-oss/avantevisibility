import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import { CheckCircle, ArrowRight, TrendingUp, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Study: SellerMockups GEO Implementation — +940% Schema Integrity",
  description:
    "How Avante Visibility took SellerMockups.com from a 5/100 to 52/100 schema integrity score in 24 hours with a comprehensive GEO implementation across 159 pages.",
  openGraph: {
    title: "Case Study: +940% Schema Integrity in 24 Hours | Avante Visibility",
    description:
      "See how Avante Visibility transformed SellerMockups.com from invisible to AI platforms to fully discoverable — with measurable before-and-after results.",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "SellerMockups GEO Implementation: +940% Schema Integrity in 24 Hours",
    author: {
      "@type": "Organization",
      name: "Avante Visibility",
      url: "https://avantevisibility.com",
    },
    datePublished: "2026-04-02",
    description:
      "How Avante Visibility took SellerMockups.com from a 5/100 to 52/100 schema integrity score in 24 hours.",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://avantevisibility.com" },
      {
        "@type": "ListItem",
        position: 2,
        name: "Case Study: SellerMockups",
        item: "https://avantevisibility.com/case-study/sellermockups",
      },
    ],
  },
];

const scorecard = [
  { metric: "Schema Integrity Score", before: "5 / 100", after: "52 / 100", change: "+47 pts (+940%)", positive: true },
  { metric: "Pages with Structured Data", before: "0 / 159", after: "159 / 159", change: "+159 pages", positive: true },
  { metric: "Schema Types Deployed", before: "0", after: "6", change: "+6 types", positive: true },
  { metric: "llms.txt Score", before: "Not detected", after: "92 / 100", change: "+92 pts (NEW)", positive: true },
  { metric: "llms-full.txt", before: "Not detected", after: "22KB deployed", change: "NEW", positive: true },
  { metric: "ai-plugin.json", before: "Not detected", after: "Live", change: "NEW", positive: true },
  { metric: "AI Crawler Access", before: "98 / 100", after: "98 / 100", change: "Maintained", positive: false },
  { metric: "Indexability", before: "97.5 / 100", after: "97.5 / 100", change: "Maintained", positive: false },
  { metric: "Snippet Controls", before: "100 / 100", after: "100 / 100", change: "Perfect", positive: false },
  { metric: "FAQ Sections Active", before: "110 (no markup)", after: "110 (with schema)", change: "Activated", positive: true },
  { metric: "Question Headings", before: "970 (no markup)", after: "970 (structured)", change: "Activated", positive: true },
  { metric: "Contact Page", before: "Missing", after: "Live", change: "Added", positive: true },
];

const citations = [
  { category: "Branded", queries: 5, cited: 4, rate: "80%", status: "WINNING", color: "text-green-600" },
  { category: "Comparison", queries: 5, cited: 3, rate: "60%", status: "STRONG", color: "text-primary" },
  { category: "Commercial Intent", queries: 10, cited: 0, rate: "0%", status: "GAP", color: "text-red-500" },
  { category: "Informational", queries: 8, cited: 0, rate: "0%", status: "GAP", color: "text-red-500" },
];

const competitors = [
  { site: "SellerMockups", branded: "80%", commercial: "0%", info: "0%", compare: "60%", overall: "25%", highlight: true },
  { site: "Dynamic Mockups", branded: "20%", commercial: "70%", info: "25%", compare: "80%", overall: "50%", highlight: false },
  { site: "Mockey", branded: "20%", commercial: "70%", info: "25%", compare: "20%", overall: "39.3%", highlight: false },
  { site: "Placeit", branded: "0%", commercial: "0%", info: "0%", compare: "0%", overall: "0%", highlight: false },
];

const trafficFollowUp = [
  { metric: "Total Sessions", before: "264", after: "551", change: "+108.71%", positive: true },
  { metric: "Engaged Sessions", before: "246", after: "518", change: "+110.57%", positive: true },
  { metric: "Engagement Rate", before: "93.18%", after: "94.01%", change: "+0.89%", positive: true },
  { metric: "Organic Search Sessions", before: "89", after: "195", change: "+119.10%", positive: true },
  { metric: "Organic Search — Engaged", before: "78", after: "177", change: "+126.92%", positive: true },
  { metric: "Referral Channel Sessions", before: "21", after: "60", change: "+185.71%", positive: true },
];

const aiReferrals = [
  { source: "chatgpt.com / referral", before: "7", after: "41", change: "+485.71%", highlight: true },
  { source: "chatgpt.com / (not set)", before: "4", after: "26", change: "+550.00%", highlight: true },
  { source: "claude.ai / referral", before: "1", after: "7", change: "+600.00%", highlight: true },
  { source: "chatgpt.com / (none)", before: "0", after: "2", change: "NEW", highlight: true },
  { source: "perplexity.ai / referral", before: "0", after: "1", change: "NEW (first citation)", highlight: true },
  { source: "bing / organic (powers ChatGPT Search + Copilot)", before: "52", after: "100", change: "+92.31%", highlight: false },
  { source: "Combined AI-attributed traffic", before: "64", after: "177", change: "+176.56%", highlight: false, isTotal: true },
];

export default function SellerMockupsCaseStudy() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Case Study: SellerMockups" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              Case Study
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              +940% Schema Integrity in 24 Hours
            </h1>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              How Avante Visibility transformed SellerMockups.com from invisible
              to AI platforms to fully discoverable — deploying 6 schema types
              across 159 pages in a single day.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4 text-sm text-gray-400">
              <span>Client: SellerMockups</span>
              <span className="w-1 h-1 bg-gray-500 rounded-full" />
              <span>Industry: E-commerce / SaaS</span>
              <span className="w-1 h-1 bg-gray-500 rounded-full" />
              <span>April 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Hero Stat */}
      <section className="bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="bg-white border-2 border-red-200 rounded-2xl px-10 py-8 text-center shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-red-600 mb-2">
                Before
              </p>
              <p className="text-6xl font-bold text-red-600">5</p>
              <p className="text-sm text-text-muted mt-2">/ 100 Schema Integrity</p>
            </div>
            <div className="text-4xl font-bold text-text-muted">&rarr;</div>
            <div className="bg-white border-2 border-green-200 rounded-2xl px-10 py-8 text-center shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-green-600 mb-2">
                After
              </p>
              <p className="text-6xl font-bold text-green-600">52</p>
              <p className="text-sm text-text-muted mt-2">/ 100 Schema Integrity</p>
            </div>
          </div>
          <p className="text-center mt-6 text-sm text-text-muted">
            Baseline: Avante Visibility GEO Audit v3.0 (April 1, 2026). Post-implementation: Claude GEO Audit (April 2, 2026).
          </p>
        </div>
      </section>

      {/* The Challenge */}
      <section>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-secondary mb-6">The Challenge</h2>
          <p className="text-text-muted leading-relaxed mb-4">
            SellerMockups.com is an AI-powered mockup generation platform with 159
            pages, 79 blog posts, and thousands of product listings. Despite strong
            content, the site had <strong className="text-secondary">zero machine-readable structured data</strong> — meaning
            AI platforms like ChatGPT, Perplexity, and Google Gemini could not
            understand its purpose, products, or credibility.
          </p>
          <p className="text-text-muted leading-relaxed">
            The result: 0% citation rate on commercial-intent queries like
            &quot;best AI mockup generator for Etsy sellers&quot; — the exact
            queries where new customers search. Competitors Dynamic Mockups and
            Mockey dominated at 70% citation rates each.
          </p>
        </div>
      </section>

      {/* What Was Implemented */}
      <section className="bg-bg-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-secondary mb-8">What We Implemented</h2>
          <div className="space-y-6">
            {[
              {
                title: "Schema Markup (6 Types)",
                desc: "Deployed structured data across all 159 pages. Schema types include: WebSite, Organization, SoftwareApplication, FAQPage, BreadcrumbList, and VideoObject. This allows AI platforms to understand the site's purpose, products, pricing, and FAQ content in machine-readable format.",
              },
              {
                title: "llms.txt + llms-full.txt",
                desc: "Created llms.txt (4KB) providing AI models a concise overview of the site's purpose and structure. Created llms-full.txt (22KB) with comprehensive product details, competitor comparisons, garment databases, blog index, and technical specifications. Both follow the emerging standard for AI discoverability.",
              },
              {
                title: "ai-plugin.json",
                desc: "Deployed an AI plugin manifest file with schema_version, name_for_model, and description_for_model fields. This file helps AI assistants like ChatGPT understand the tool's capabilities and recommend it to users asking about mockup generation.",
              },
              {
                title: "AI Crawler Access Configuration",
                desc: "Configured robots.txt to explicitly allow all 12+ AI crawlers including GPTBot, ClaudeBot, Claude-SearchBot, PerplexityBot, OAI-SearchBot, Google-Extended, Bytespider, Cohere-AI, and Applebot-Extended.",
              },
              {
                title: "FAQ Content Architecture",
                desc: "Structured 110 FAQ sections with 970 question headings across the site in a format optimized for AI extraction. Added FAQPage schema markup to make this content machine-readable.",
              },
              {
                title: "Contact Page & E-E-A-T Signals",
                desc: "Created a dedicated contact page to strengthen E-E-A-T trust signals. Provides users and AI evaluation systems a way to verify the business is reachable.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white border border-gray-200 rounded-xl p-6"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-secondary">{item.title}</h3>
                    <p className="mt-1 text-sm text-text-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Scorecard */}
      <section>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-secondary mb-8">
            Before &amp; After Scorecard
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-primary">
                  <th className="text-left py-3 pr-4 font-bold text-secondary">
                    Metric
                  </th>
                  <th className="text-left py-3 px-4 font-bold text-secondary">
                    Before
                  </th>
                  <th className="text-left py-3 px-4 font-bold text-secondary">
                    After
                  </th>
                  <th className="text-left py-3 pl-4 font-bold text-secondary">
                    Change
                  </th>
                </tr>
              </thead>
              <tbody>
                {scorecard.map((row) => (
                  <tr
                    key={row.metric}
                    className="border-b border-gray-100 hover:bg-bg-alt transition-colors"
                  >
                    <td className="py-3 pr-4 font-medium text-text-primary">
                      {row.metric}
                    </td>
                    <td className="py-3 px-4 text-text-muted">{row.before}</td>
                    <td className="py-3 px-4 text-text-primary font-medium">
                      {row.after}
                    </td>
                    <td
                      className={`py-3 pl-4 font-semibold ${
                        row.positive ? "text-green-600" : "text-text-muted"
                      }`}
                    >
                      {row.change}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-green-50 border border-green-200 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <TrendingUp className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-secondary">Key Takeaway</p>
                <p className="mt-1 text-sm text-text-muted leading-relaxed">
                  Schema Integrity saw the single largest improvement: from 5/100
                  to 52/100 (+940%). The site went from zero machine-readable
                  structured data to 6 active schema types across all 159 pages.
                  Combined with the new llms.txt (92/100) and ai-plugin.json,
                  SellerMockups now has a complete AI discovery infrastructure
                  that did not exist before this engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Citation Analysis */}
      <section className="bg-bg-alt">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-secondary mb-8">
            AI Citation Rate Analysis
          </h2>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-primary">
                  <th className="text-left py-3 pr-4 font-bold text-secondary">
                    Query Category
                  </th>
                  <th className="text-center py-3 px-4 font-bold text-secondary">
                    Queries
                  </th>
                  <th className="text-center py-3 px-4 font-bold text-secondary">
                    Cited
                  </th>
                  <th className="text-center py-3 px-4 font-bold text-secondary">
                    Rate
                  </th>
                  <th className="text-left py-3 pl-4 font-bold text-secondary">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {citations.map((row) => (
                  <tr
                    key={row.category}
                    className="border-b border-gray-200 bg-white"
                  >
                    <td className="py-3 pr-4 font-medium text-text-primary">
                      {row.category}
                    </td>
                    <td className="py-3 px-4 text-center text-text-muted">
                      {row.queries}
                    </td>
                    <td className="py-3 px-4 text-center text-text-muted">
                      {row.cited}
                    </td>
                    <td className="py-3 px-4 text-center font-semibold text-text-primary">
                      {row.rate}
                    </td>
                    <td className={`py-3 pl-4 font-bold ${row.color}`}>
                      {row.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-text-muted leading-relaxed mb-8">
            SellerMockups is cited on 80% of branded queries and 60% of
            comparison queries — confirming AI platforms recognize the brand. The
            gap is in commercial-intent and informational queries, where
            competitors Dynamic Mockups and Mockey dominate.
          </p>

          {/* Competitive Comparison */}
          <h3 className="text-xl font-bold text-secondary mb-4">
            Competitive Citation Comparison
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-primary">
                  <th className="text-left py-3 pr-4 font-bold text-secondary">
                    Site
                  </th>
                  <th className="text-center py-3 px-3 font-bold text-secondary">
                    Branded
                  </th>
                  <th className="text-center py-3 px-3 font-bold text-secondary">
                    Commercial
                  </th>
                  <th className="text-center py-3 px-3 font-bold text-secondary">
                    Info
                  </th>
                  <th className="text-center py-3 px-3 font-bold text-secondary">
                    Compare
                  </th>
                  <th className="text-center py-3 pl-3 font-bold text-secondary">
                    Overall
                  </th>
                </tr>
              </thead>
              <tbody>
                {competitors.map((row) => (
                  <tr
                    key={row.site}
                    className={`border-b border-gray-200 ${
                      row.highlight ? "bg-primary/5 font-semibold" : "bg-white"
                    }`}
                  >
                    <td className="py-3 pr-4 font-medium text-text-primary">
                      {row.site}
                    </td>
                    <td className="py-3 px-3 text-center">{row.branded}</td>
                    <td className="py-3 px-3 text-center">{row.commercial}</td>
                    <td className="py-3 px-3 text-center">{row.info}</td>
                    <td className="py-3 px-3 text-center">{row.compare}</td>
                    <td className="py-3 pl-3 text-center font-bold">
                      {row.overall}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 18-Day Follow-Up — The GA4 Data */}
      <section>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            18-Day Follow-Up
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            The Data Tells the Story
          </h2>
          <p className="text-text-muted leading-relaxed mb-10 max-w-3xl">
            The 24-hour citation snapshot above was captured the day the
            implementation went live. To measure real downstream impact, we
            pulled GA4 data for the 18 days before the audit (Mar 12&ndash;29,
            2026) versus the 18 days after (Apr 2&ndash;19, 2026). Same
            methodology, clean apples-to-apples comparison, no additional
            marketing spend. Here is exactly what happened.
          </p>

          {/* Hero stat row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            <div className="bg-white border-2 border-green-200 rounded-2xl p-6 text-center shadow-sm">
              <p className="text-4xl md:text-5xl font-bold text-green-600">+108.71%</p>
              <p className="text-sm text-text-muted mt-2">Total sessions</p>
              <p className="text-xs text-text-muted mt-1">264 &rarr; 551</p>
            </div>
            <div className="bg-white border-2 border-green-200 rounded-2xl p-6 text-center shadow-sm">
              <p className="text-4xl md:text-5xl font-bold text-green-600">+485.71%</p>
              <p className="text-sm text-text-muted mt-2">ChatGPT referrals</p>
              <p className="text-xs text-text-muted mt-1">7 &rarr; 41 sessions</p>
            </div>
            <div className="bg-white border-2 border-green-200 rounded-2xl p-6 text-center shadow-sm">
              <p className="text-4xl md:text-5xl font-bold text-green-600">+600.00%</p>
              <p className="text-sm text-text-muted mt-2">Claude.ai referrals</p>
              <p className="text-xs text-text-muted mt-1">1 &rarr; 7 sessions</p>
            </div>
          </div>

          {/* GA Anomaly screenshot */}
          <div className="rounded-xl overflow-hidden border border-gray-200 shadow-lg mb-3">
            <Image
              src="/images/sellermockups/ga4-home-anomaly.png"
              alt="Google Analytics 4 home screen for SellerMockups showing a 783% spike beyond projection on April 12, 2026 — GA4's own anomaly detection flagged a Direct-channel user count of 53 against a forecasted range of 1-25"
              width={1201}
              height={720}
              className="w-full h-auto"
            />
          </div>
          <p className="text-sm text-text-muted mb-10">
            <strong className="text-secondary">GA4&apos;s own anomaly detection</strong> flagged
            a <strong>+783% spike beyond projection</strong> on April 12, 2026 &mdash; ten days
            after the GEO implementation went live. GA forecasted 1&ndash;25 users
            for the Direct channel; actual was 53.
          </p>

          {/* Traffic comparison table */}
          <h3 className="text-2xl font-bold text-secondary mb-4">
            Overall Traffic &mdash; Before vs After
          </h3>
          <p className="text-sm text-text-muted mb-4">
            Apr 2&ndash;19, 2026 (post-audit) compared to Mar 12&ndash;29, 2026
            (pre-audit) &mdash; 18 days each, matched day-of-week.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-primary">
                  <th className="text-left py-3 pr-4 font-bold text-secondary">Metric</th>
                  <th className="text-left py-3 px-4 font-bold text-secondary">Before (Mar 12&ndash;29)</th>
                  <th className="text-left py-3 px-4 font-bold text-secondary">After (Apr 2&ndash;19)</th>
                  <th className="text-left py-3 pl-4 font-bold text-secondary">Change</th>
                </tr>
              </thead>
              <tbody>
                {trafficFollowUp.map((row) => (
                  <tr
                    key={row.metric}
                    className="border-b border-gray-100 hover:bg-bg-alt transition-colors"
                  >
                    <td className="py-3 pr-4 font-medium text-text-primary">{row.metric}</td>
                    <td className="py-3 px-4 text-text-muted">{row.before}</td>
                    <td className="py-3 px-4 text-text-primary font-medium">{row.after}</td>
                    <td className={`py-3 pl-4 font-semibold ${row.positive ? "text-green-600" : "text-text-muted"}`}>
                      {row.change}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="rounded-xl overflow-hidden border border-gray-200 shadow-lg mb-10">
            <Image
              src="/images/sellermockups/ga4-traffic-comparison.png"
              alt="GA4 Traffic Acquisition comparison report — 18 days before audit vs 18 days after — showing total sessions going from 264 to 551 (+108.71%), engaged sessions from 246 to 518 (+110.57%), organic search from 89 to 195 (+119.1%), and direct from 115 to 153 (+33.04%)"
              width={1201}
              height={720}
              className="w-full h-auto"
            />
          </div>

          {/* AI referrals breakdown — the money shot */}
          <h3 className="text-2xl font-bold text-secondary mb-4">
            AI Platform Referrals &mdash; Where the Citations Actually Landed
          </h3>
          <p className="text-sm text-text-muted mb-4">
            The 24-hour snapshot above showed a 0% commercial-intent citation
            rate because AI hadn&apos;t re-crawled yet. This is what happened
            once the crawlers caught up. Source &#47; medium data pulled directly
            from GA4 &mdash; no sampling, no modeling.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-primary">
                  <th className="text-left py-3 pr-4 font-bold text-secondary">Source &#47; Medium</th>
                  <th className="text-left py-3 px-4 font-bold text-secondary">Before</th>
                  <th className="text-left py-3 px-4 font-bold text-secondary">After</th>
                  <th className="text-left py-3 pl-4 font-bold text-secondary">Change</th>
                </tr>
              </thead>
              <tbody>
                {aiReferrals.map((row) => (
                  <tr
                    key={row.source}
                    className={`border-b border-gray-100 ${
                      row.isTotal
                        ? "bg-green-50 font-bold"
                        : row.highlight
                        ? "bg-primary/5"
                        : ""
                    }`}
                  >
                    <td className="py-3 pr-4 font-medium text-text-primary">{row.source}</td>
                    <td className="py-3 px-4 text-text-muted">{row.before}</td>
                    <td className="py-3 px-4 text-text-primary font-medium">{row.after}</td>
                    <td className="py-3 pl-4 font-semibold text-green-600">{row.change}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="rounded-xl overflow-hidden border border-gray-200 shadow-lg mb-3">
            <Image
              src="/images/sellermockups/ga4-ai-referrals-claude.png"
              alt="GA4 Source / Medium report showing chatgpt.com / referral at row 4 with +485.71% change (7 to 41 sessions) and claude.ai / referral at row 11 with +600% change (1 to 7 sessions)"
              width={1201}
              height={720}
              className="w-full h-auto"
            />
          </div>
          <p className="text-sm text-text-muted mb-10">
            The <code className="text-xs bg-bg-alt px-1.5 py-0.5 rounded">chatgpt.com / referral</code> row
            shows the +485.71% change. Further down, <code className="text-xs bg-bg-alt px-1.5 py-0.5 rounded">claude.ai / referral</code>
            {" "}shows +600%, and <code className="text-xs bg-bg-alt px-1.5 py-0.5 rounded">perplexity.ai / referral</code>
            {" "}produced its first-ever citation. 77 direct AI sessions in 18
            days, up from 12.
          </p>

          {/* Takeaway */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <TrendingUp className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-secondary">Why This Matters</p>
                <p className="mt-1 text-sm text-text-muted leading-relaxed">
                  Between April 2 and April 19, 2026, with no new ad spend or
                  content marketing campaigns, the schema markup, llms.txt, and
                  AI crawler configuration produced a <strong>+176.56%</strong> lift in
                  combined AI-attributed sessions (64 &rarr; 177). The 0%
                  commercial-intent citation rate from the 24-hour snapshot
                  resolved through real AI platform referrals: 77 direct
                  sessions from ChatGPT, Claude, and Perplexity in 18 days, up
                  from 12. The technical foundation paid off before Phase 2
                  ever began.
                </p>
                <p className="mt-3 text-xs text-text-muted">
                  Data source: Google Analytics 4 property 518992634
                  (SellerMockups). Date ranges: Mar 12&ndash;29, 2026 vs Apr
                  2&ndash;19, 2026 (18 days each, matched day-of-week). Screenshots
                  captured 2026-04-19.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 2 / What's Next */}
      <section>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-secondary mb-4">
            What&apos;s Next: Phase 2
          </h2>
          <p className="text-text-muted leading-relaxed mb-8">
            The on-site technical foundation is now complete. Phase 2 focuses on
            the off-site brand authority signals that AI models require before
            they will cite SellerMockups on competitive, commercial-intent
            queries — the queries where new customers search.
          </p>

          <div className="bg-accent/10 border border-accent/30 rounded-xl p-6 mb-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-secondary">
                  Projected Impact of Phase 2
                </p>
                <p className="mt-1 text-sm text-text-muted leading-relaxed">
                  GEO Score projected to increase from 65.9 to 78+ (C+ to B+).
                  Commercial-intent citation rate projected to move from 0% to
                  30&ndash;40%, unlocking an estimated 200&ndash;500 incremental
                  AI-referred visits per month and $225&ndash;$750/month in new
                  revenue from AI search traffic alone.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Brand Authority", score: "40/100", items: ["LinkedIn company page", "G2, Trustpilot, Capterra profiles", "10+ genuine customer reviews"] },
              { title: "E-E-A-T Signals", score: "42/100", items: ["Founder bio with credentials", "Author bylines on 79 pages", "External source links in blog posts"] },
              { title: "Trust Signals", score: "45/100", items: ["Customer case studies", "AggregateRating schema", "Trust badges on conversion pages"] },
              { title: "Community Presence", score: "0/100", items: ["Reddit engagement in niche subs", "Blogger outreach for roundups", "YouTube tutorial content"] },
            ].map((section) => (
              <div
                key={section.title}
                className="bg-bg-alt border border-gray-200 rounded-xl p-6"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-secondary">{section.title}</h3>
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {section.score}
                  </span>
                </div>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-text-muted"
                    >
                      <ArrowRight className="w-3 h-3 text-primary shrink-0 mt-1" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Want Results Like These for Your Business?"
        description="Every audit comes with a clear, prioritized roadmap — not a 60-page PDF. Find out exactly where your business stands in AI search and what to fix first."
        buttonText="Get Your AI Visibility Audit"
        buttonHref="https://calendly.com/avantevisibility"
        secondaryButtonText="Book a Free Strategy Call"
        secondaryButtonHref="https://calendly.com/avantevisibility"
        showContact
      />
    </>
  );
}
