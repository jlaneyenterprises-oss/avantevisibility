import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import {
  TrendingUp,
  Clock,
  MousePointerClick,
  BarChart3,
  Bot,
  FileText,
  Code,
  Search,
  Users,
} from "lucide-react";

const BOOKING_URL = "https://cal.com/provemyads/15min";

export const metadata: Metadata = {
  title:
    "GEO Case Study: +485% ChatGPT Referrals in 18 Days | Generative Engine Optimization Results",
  description:
    "Real GA4 data: generative engine optimization (GEO) grew SellerMockups ChatGPT referrals +485.71%, Claude.ai +600%, and combined AI traffic +176.56% in the 18 days after implementation — measured apples-to-apples against the 18 days before.",
  openGraph: {
    title:
      "GEO Case Study: +485% ChatGPT Referrals in 18 Days",
    description:
      "Apples-to-apples GA4 comparison — ChatGPT referrals +485.71%, Claude.ai +600%, total sessions +108.71% in 18 days after GEO implementation.",
  },
};

const phases = [
  {
    number: 1,
    date: "March 4",
    title: "AI Discovery Foundation",
    icon: Bot,
    items: [
      "Created llms.txt \u2014 a structured plain-text file describing the product, use cases, and key pages in a format optimized for LLM ingestion",
      "Added ai-plugin.json \u2014 metadata file following the emerging AI plugin specification",
      "Updated robots.txt to explicitly allow 8 AI crawlers: GPTBot, ChatGPT-User, Claude-Web, PerplexityBot, Bytespider, GoogleOther, Applebot-Extended, and cohere-ai",
      "Implemented schema markup across key pages (Product, SoftwareApplication, FAQPage)",
      'Built comparison pages targeting queries like "SellerMockups vs Placeit" and "best AI mockup generator"',
    ],
  },
  {
    number: 2,
    date: "March 25",
    title: "GEO Audit & Authority Signals",
    icon: FileText,
    items: [
      "Added Organization, WebSite, and BlogPosting schema across the entire site",
      "Added real author attribution to all 64 blog posts with Person schema",
      "Built a comprehensive About page with Person schema, professional background, and sameAs social links",
      "Expanded llms-full.txt to 5,500 words covering product features, pricing, technical architecture, and use cases",
    ],
  },
  {
    number: 3,
    date: "April 2",
    title: "Freshness & E-E-A-T Reinforcement",
    icon: Code,
    items: [
      "Added sameAs social links across all schema markup \u2014 connecting brand identity across platforms",
      "Implemented dateModified and wordCount in BlogPosting schema \u2014 freshness signals with a 3.2x citation multiplier",
      "Added AuthorByline component to 25+ pages \u2014 visible authorship reinforcing structured data",
      "Generated branded OG images for social sharing \u2014 improving click-through from AI platform links",
    ],
  },
];

const platformResults = [
  {
    name: "ChatGPT (all variants)",
    before: "11",
    after: "69",
    change: "+527.27%",
  },
  {
    name: "Claude.ai",
    before: "1",
    after: "7",
    change: "+600.00%",
  },
  {
    name: "Perplexity.ai",
    before: "0",
    after: "1",
    change: "NEW (first citation)",
  },
  {
    name: "Bing organic (powers ChatGPT Search + Copilot)",
    before: "52",
    after: "100",
    change: "+92.31%",
  },
];

const rippleEffects = [
  { label: "Total sessions", change: "+108.71%" },
  { label: "Organic Search sessions", change: "+119.10%" },
  { label: "Referral channel sessions", change: "+185.71%" },
  { label: "Engagement rate", change: "93.18% \u2192 94.01%" },
  { label: "Bing organic", change: "+92.31%" },
  { label: "Yahoo organic", change: "+114.29%" },
];

export default function CaseStudiesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline:
          "GEO Case Study: +485% ChatGPT Referrals and +600% Claude.ai Referrals in 18 Days",
        author: {
          "@type": "Person",
          name: "JoLyn Laney",
        },
        publisher: {
          "@id": "https://avantevisibility.com/#organization",
        },
        datePublished: "2026-04-09",
        dateModified: "2026-04-19",
        description:
          "Apples-to-apples GA4 comparison of SellerMockups.com for the 18 days before vs the 18 days after GEO implementation: ChatGPT referrals +485.71%, Claude.ai referrals +600%, combined AI traffic +176.56%, total sessions +108.71%.",
        url: "https://avantevisibility.com/case-studies",
        about: {
          "@type": "Service",
          name: "GEO Audit",
          provider: {
            "@id": "https://avantevisibility.com/#organization",
          },
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://avantevisibility.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Case Studies",
            item: "https://avantevisibility.com/case-studies",
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Case Studies" },
        ]}
      />

      {/* Hero */}
      <section className="bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              GEO Case Study &mdash; SellerMockups.com
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              How Generative Engine Optimization Grew ChatGPT Referrals{" "}
              <span className="text-white underline decoration-primary decoration-4 underline-offset-4">+485%</span> in 18 Days
            </h1>
            <p className="mt-6 text-gray-300 text-lg leading-relaxed">
              Apples-to-apples GA4 comparison: in the 18 days after GEO
              implementation, SellerMockups saw{" "}
              <strong className="text-white">ChatGPT referrals grow +485.71%</strong>,{" "}
              <strong className="text-white">Claude.ai +600%</strong>, and{" "}
              total sessions double &mdash; all without additional ad spend.
            </p>
          </div>

          {/* Hero Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { value: "+108.71%", label: "Total sessions" },
              { value: "+485.71%", label: "ChatGPT referrals" },
              { value: "+600%", label: "Claude.ai referrals" },
              { value: "+176.56%", label: "Combined AI traffic" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/10 rounded-xl p-5 text-center border border-white/10"
              >
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After GA4 Screenshots */}
      <section>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold text-secondary text-center mb-2">
            The Proof: Before &amp; After
          </h2>
          <p className="text-text-muted text-center mb-10 max-w-2xl mx-auto">
            Real GA4 Traffic Acquisition data &mdash; no cherry-picking, no
            filters. Just the raw numbers.
          </p>

          {/* Before */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-flex items-center px-3 py-1 bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider rounded-full">
                Before
              </span>
              <span className="text-sm text-text-muted">
                Mar 12 &ndash; Mar 29, 2026 &middot; 18 days pre-audit
              </span>
            </div>
            <div className="rounded-xl overflow-hidden border border-gray-200 shadow-lg">
              <Image
                src="/images/sellermockups/ga4-home-anomaly.png"
                alt="GA4 home screen for SellerMockups showing a 783% spike beyond projection on April 12, 2026 — GA4's own anomaly detection flagged a Direct-channel user count of 53 against a forecasted range of 1-25"
                width={1920}
                height={1080}
                className="w-full h-auto"
              />
            </div>
            <p className="text-sm text-text-muted mt-3">
              GA4&apos;s own anomaly detection flagged a <strong>+783% spike
              beyond projection</strong> ten days after implementation went
              live &mdash; a Direct-channel surge GA forecasted at 1&ndash;25 users
              but delivered 53.
            </p>
          </div>

          {/* After */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider rounded-full">
                After
              </span>
              <span className="text-sm text-text-muted">
                Apr 2 &ndash; Apr 19, 2026 &middot; 18 days post-audit
              </span>
            </div>
            <div className="rounded-xl overflow-hidden border border-gray-200 shadow-lg">
              <Image
                src="/images/sellermockups/ga4-traffic-comparison.png"
                alt="GA4 Traffic Acquisition comparison — 18 days before vs 18 days after GEO implementation — total sessions 264 to 551 (+108.71%), engaged sessions 246 to 518 (+110.57%), organic search 89 to 195 (+119.1%)"
                width={1920}
                height={1080}
                className="w-full h-auto"
              />
            </div>
            <p className="text-sm text-text-muted mt-3">
              Total sessions doubled (264 &rarr; 551, <strong>+108.71%</strong>).
              Organic search grew <strong>+119.1%</strong> and the Referral
              channel grew <strong>+185.71%</strong> &mdash; with no additional
              ad spend.
            </p>
          </div>

          {/* AI referrals close-up */}
          <div className="mt-10">
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full">
                AI Referrals &mdash; Close-Up
              </span>
            </div>
            <div className="rounded-xl overflow-hidden border border-gray-200 shadow-lg">
              <Image
                src="/images/sellermockups/ga4-ai-referrals.png"
                alt="GA4 Source / Medium report showing chatgpt.com / referral at +485.71% (7 to 41 sessions) and google / organic at +310% and bing / organic at +92.31% after GEO implementation"
                width={1920}
                height={1080}
                className="w-full h-auto"
              />
            </div>
            <p className="text-sm text-text-muted mt-3">
              <code className="text-xs bg-bg-alt px-1.5 py-0.5 rounded">chatgpt.com / referral</code>
              {" "}grew <strong>+485.71%</strong> (7 &rarr; 41 sessions) in 18 days.
              <code className="text-xs bg-bg-alt px-1.5 py-0.5 rounded ml-1">claude.ai / referral</code>
              {" "}grew <strong>+600%</strong> (1 &rarr; 7 sessions).
              <code className="text-xs bg-bg-alt px-1.5 py-0.5 rounded ml-1">perplexity.ai / referral</code>
              {" "}produced its first-ever citation.
            </p>
          </div>
        </div>
      </section>

      {/* The Client */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              The Client
            </h2>
            <p className="text-text-muted leading-relaxed text-lg mb-4">
              <strong className="text-secondary">SellerMockups</strong> (
              <a
                href="https://sellermockups.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                sellermockups.com
              </a>
              ) is an AI-powered mockup generator built for print-on-demand
              sellers. Sellers upload their artwork, and the app places it onto
              photorealistic product mockups &mdash; ready for Amazon, Etsy, and
              other marketplaces.
            </p>
            <p className="text-text-muted leading-relaxed text-lg">
              It&apos;s a SaaS product in a competitive niche where
              discoverability is everything.
            </p>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              The Challenge: Zero AI Search Visibility
            </h2>
            <p className="text-text-muted leading-relaxed text-lg mb-8">
              SellerMockups had strong product-market fit but near-zero AI
              search visibility. The site was effectively invisible to every generative
              AI search engine on the market &mdash; no ChatGPT visibility, no Perplexity citations, no structured data for AI crawlers to parse.
            </p>
            <div className="space-y-4">
              {[
                "Effectively zero AI referral traffic — the site was invisible to ChatGPT, Claude, Perplexity, and Copilot",
                "Not appearing in ChatGPT or Perplexity recommendations for any relevant queries",
                "No structured data, no AI-specific discovery files, no schema markup",
                "64 blog posts existed but lacked authorship signals and structured metadata",
                "AI crawlers were not explicitly permitted or guided",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200"
                >
                  <div className="w-2 h-2 bg-red-500 rounded-full shrink-0 mt-2.5" />
                  <p className="text-text-primary leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Approach */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-4">
              The GEO Strategy
            </h2>
            <p className="text-text-muted text-center mb-12 max-w-2xl mx-auto">
              A three-phase generative engine optimization strategy executed
              between early March and April 2, 2026 &mdash; llms.txt, structured
              data, E-E-A-T signals, and AI-specific content &mdash; each phase
              building on the last.
            </p>

            <div className="space-y-8">
              {phases.map((phase) => (
                <div
                  key={phase.number}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden"
                >
                  <div className="bg-bg-alt px-6 py-4 flex items-center gap-4 border-b border-gray-200">
                    <div className="flex items-center justify-center w-10 h-10 bg-primary text-white rounded-lg font-bold text-sm shrink-0">
                      {phase.number}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-secondary">
                        {phase.title}
                      </h3>
                      <p className="text-sm text-text-muted">{phase.date}</p>
                    </div>
                  </div>
                  <ul className="p-6 space-y-3">
                    {phase.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-text-muted leading-relaxed"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full shrink-0 mt-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Results */}
      <section className="bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-4">
            AI Search Traffic Results
          </h2>
          <p className="text-text-muted text-center mb-12 max-w-2xl mx-auto">
            Industry average is under 1% AI referral traffic. In the 18 days
            after GEO implementation, SellerMockups pulled in 77 direct AI
            platform referrals &mdash; up from 12 in the equivalent 18-day pre-audit
            window.
          </p>

          {/* Headline Results */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
              <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-3xl font-bold text-secondary">12 &rarr; 77</p>
              <p className="text-sm text-text-muted mt-1">
                Direct AI referral sessions (18 days)
              </p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
              <BarChart3 className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-3xl font-bold text-secondary">264 &rarr; 551</p>
              <p className="text-sm text-text-muted mt-1">
                Total sessions (+108.71%)
              </p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
              <Users className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-3xl font-bold text-secondary">93.18% &rarr; 94.01%</p>
              <p className="text-sm text-text-muted mt-1">
                Engagement rate
              </p>
            </div>
          </div>

          {/* Platform Breakdown */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-secondary mb-6">
              Per-Platform Breakdown
            </h3>
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="hidden sm:grid grid-cols-4 gap-4 px-6 py-3 bg-bg-alt border-b border-gray-200 text-xs font-semibold text-text-muted uppercase tracking-wider">
                <span>Platform</span>
                <span>Before (Mar 12&ndash;29)</span>
                <span>After (Apr 2&ndash;19)</span>
                <span>Change</span>
              </div>
              {platformResults.map((platform) => (
                <div
                  key={platform.name}
                  className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 px-6 py-4 border-b border-gray-100 last:border-0"
                >
                  <span className="font-semibold text-secondary col-span-2 sm:col-span-1">
                    {platform.name}
                  </span>
                  <span className="text-text-muted">
                    <span className="sm:hidden text-xs text-text-muted/60">
                      Before:{" "}
                    </span>
                    {platform.before}
                  </span>
                  <span className="text-text-muted">
                    <span className="sm:hidden text-xs text-text-muted/60">
                      After:{" "}
                    </span>
                    {platform.after}
                  </span>
                  <span className="text-green-600 font-semibold">
                    <span className="sm:hidden text-xs text-text-muted/60 font-normal">
                      Change:{" "}
                    </span>
                    {platform.change}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-text-muted">
              <strong>ChatGPT is the largest AI source</strong> at 69 sessions
              across all chatgpt.com variants &mdash; up from 11 in the pre-audit
              window. Bing is included because ChatGPT Search and Microsoft
              Copilot both index from Bing.
            </p>
          </div>

        </div>
      </section>

      {/* Ripple Effects */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              The Ripple Effect: GEO Lifts All Search
            </h2>
            <p className="text-text-muted leading-relaxed text-lg mb-8">
              Generative engine optimization didn&apos;t just lift AI referral traffic &mdash; it
              boosted traditional search performance across the board. The same
              structured data, E-E-A-T signals, and content depth that improve AI search visibility also improve rankings on Bing, Yahoo, and DuckDuckGo.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {rippleEffects.map((effect) => (
                <div
                  key={effect.label}
                  className="bg-bg-alt rounded-xl p-5 border border-gray-200"
                >
                  <p className="text-sm text-text-muted">{effect.label}</p>
                  <p className="text-2xl font-bold text-primary mt-1">
                    {effect.change}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
              <p className="text-text-primary leading-relaxed">
                <span className="font-bold text-secondary">
                  Business impact:
                </span>{" "}
                SellerMockups acquired its first paying customer during the
                GEO engagement. The combined lift in visibility and engagement
                across all sources created the conditions for conversion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Made It Work */}
      <section className="bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-12">
              Why This GEO Strategy Worked
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: Code,
                  title: "Structured Data",
                  stat: "61% of cited pages use schema",
                  description:
                    "Before our work, SellerMockups had zero schema markup. After: Organization, WebSite, Person, BlogPosting, Product, SoftwareApplication, and FAQPage schema across the entire site.",
                },
                {
                  icon: Clock,
                  title: "Freshness Signals",
                  stat: "3.2x citation multiplier",
                  description:
                    "Pages with recent dateModified signals see a 3.2x citation multiplier in generative engines. Adding dateModified to all content gave AI platforms a reason to prefer SellerMockups over competitors.",
                },
                {
                  icon: Search,
                  title: "Content Depth",
                  stat: "4.3x citation multiplier",
                  description:
                    "Longer, more comprehensive content sees a 4.3x citation multiplier in AI responses. The expanded llms-full.txt (5,500 words) gave LLMs substantive material to cite.",
                },
                {
                  icon: MousePointerClick,
                  title: "E-E-A-T Signals",
                  stat: "64 posts given real authorship",
                  description:
                    "Named authors, About pages, social proof, and verifiable credentials influence AI recommendation engines just as they influence traditional search.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white border border-gray-200 rounded-xl p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-secondary">{item.title}</h3>
                      <p className="text-xs text-primary font-semibold">
                        {item.stat}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8">
              Key Takeaways
            </h2>
            <div className="space-y-4">
              {[
                {
                  number: 1,
                  title: "GEO is a real, measurable channel.",
                  description:
                    "77 direct sessions from ChatGPT, Claude, and Perplexity in the 18-day post-audit window — up from 12 in the equivalent pre-audit window. Verifiable in GA4, apples-to-apples.",
                },
                {
                  number: 2,
                  title: "The technical foundation matters most.",
                  description:
                    "The single biggest unlock was making the site discoverable and parseable by AI crawlers. Without llms.txt, proper robots.txt permissions, and schema markup, nothing else works.",
                },
                {
                  number: 3,
                  title: "Quality over quantity.",
                  description:
                    "We didn\u2019t create hundreds of new pages. We made existing content machine-readable, authoritative, and fresh. The 64 existing blog posts just needed proper attribution and structured data.",
                },
                {
                  number: 4,
                  title: "The halo effect is real.",
                  description:
                    "GEO improvements lifted Bing (+92.31%), Yahoo (+114.29%), and organic search overall (+119.10%) in addition to AI platforms. One investment, multiple returns.",
                },
                {
                  number: 5,
                  title: "AI traffic is high-intent traffic.",
                  description:
                    "Users who arrive via AI recommendations have already been pre-qualified by the AI\u2019s response. They know what the product does and why it was recommended.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="flex items-start gap-4 bg-bg-alt rounded-xl p-5"
                >
                  <div className="flex items-center justify-center w-8 h-8 bg-primary text-white rounded-full font-bold text-sm shrink-0">
                    {item.number}
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary">
                      {item.title}
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="Want Results Like These?"
        description="Our GEO Audit shows you exactly where your business stands in AI search &mdash; and gives you a prioritized action plan to start showing up in ChatGPT, Perplexity, and Google AI recommendations."
        buttonText="Get Your GEO Audit &mdash; $497"
        buttonHref={BOOKING_URL}
        secondaryButtonText="Book a Free Strategy Call"
        secondaryButtonHref={BOOKING_URL}
        showContact
      />
    </>
  );
}
