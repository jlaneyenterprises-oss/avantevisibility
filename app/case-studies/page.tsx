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
  title: "Case Study: 4,200% AI Search Traffic Growth in 30 Days",
  description:
    "See how Avante Visibility grew SellerMockups AI search traffic from 1 session to 43 sessions in 30 days — making ChatGPT, Perplexity, and Copilot their #3 traffic source.",
  openGraph: {
    title: "Case Study: 4,200% AI Search Traffic Growth in 30 Days",
    description:
      "See how Avante Visibility grew SellerMockups AI search traffic from 1 session to 43 sessions in 30 days — making ChatGPT, Perplexity, and Copilot their #3 traffic source.",
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
    name: "ChatGPT",
    sessions: "26",
    duration: "1m 11s",
    events: "7.5",
    quality: "High",
  },
  {
    name: "Copilot",
    sessions: "8",
    duration: "5m 02s",
    events: "12.5",
    quality: "Highest on site",
  },
  {
    name: "Perplexity",
    sessions: "5",
    duration: "2m 30s",
    events: "6.2",
    quality: "Above average",
  },
  {
    name: "Claude",
    sessions: "4",
    duration: "1m 45s",
    events: "5.8",
    quality: "Above average",
  },
];

const rippleEffects = [
  { label: "Bing organic", change: "+825%" },
  { label: "Yahoo organic", change: "+3,200%" },
  { label: "DuckDuckGo organic", change: "+1,400%" },
  { label: "Engagement rate", change: "83.6% \u2192 90.5%" },
  { label: "Key events (conversions)", change: "+20.8%" },
];

export default function CaseStudiesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline:
          "Case Study: How We Grew AI Search Traffic 4,200% in 30 Days",
        author: {
          "@type": "Person",
          name: "JoLyn Laney",
        },
        publisher: {
          "@id": "https://avantevisibility.com/#organization",
        },
        datePublished: "2026-04-09",
        description:
          "SellerMockups went from 1 LLM session to 43 in 30 days. Here\u2019s the exact GEO strategy that made AI search their #3 traffic source.",
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
              Case Study &mdash; SellerMockups.com
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              How We Grew AI Search Traffic{" "}
              <span className="text-white underline decoration-primary decoration-4 underline-offset-4">4,200%</span> in 30 Days
            </h1>
            <p className="mt-6 text-gray-300 text-lg leading-relaxed">
              SellerMockups went from 1 LLM session to 43 &mdash; making
              ChatGPT, Perplexity, Copilot, and Claude their{" "}
              <strong className="text-white">#3 traffic source</strong>, ahead
              of Google organic and paid ads.
            </p>
          </div>

          {/* Hero Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { value: "4,200%", label: "AI traffic growth" },
              { value: "43", label: "LLM sessions/month" },
              { value: "#3", label: "Traffic source" },
              { value: "8.2%", label: "AI referral share" },
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
                Feb 4 &ndash; Mar 3, 2026
              </span>
            </div>
            <div className="rounded-xl overflow-hidden border border-gray-200 shadow-lg">
              <Image
                src="/images/case-study-before.png"
                alt="GA4 Traffic Acquisition report before GEO — Feb 4 to Mar 3 2026 showing zero LLM traffic sources, 82.48% engagement rate, and no ChatGPT, Perplexity, or Copilot sessions"
                width={1920}
                height={1080}
                className="w-full h-auto"
              />
            </div>
            <p className="text-sm text-text-muted mt-3">
              Zero AI traffic sources in the top 10. Engagement rate at 82.48%.
              Bing organic at #9 with just 7 sessions.
            </p>
          </div>

          {/* After */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider rounded-full">
                After
              </span>
              <span className="text-sm text-text-muted">
                Mar 4 &ndash; Apr 8, 2026
              </span>
            </div>
            <div className="rounded-xl overflow-hidden border border-gray-200 shadow-lg">
              <Image
                src="/images/case-study-after.png"
                alt="GA4 Traffic Acquisition report after GEO — Mar 4 to Apr 8 2026 showing ChatGPT at #6 with 26 sessions, 88.46% engagement rate, 7.54 events per session, and overall engagement rate up to 90.39%"
                width={1920}
                height={1080}
                className="w-full h-auto"
              />
            </div>
            <p className="text-sm text-text-muted mt-3">
              ChatGPT appears at #6 with 26 sessions and 88.46% engagement.
              Overall engagement rate jumped to 90.39%.
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
              The Challenge
            </h2>
            <p className="text-text-muted leading-relaxed text-lg mb-8">
              SellerMockups had strong product-market fit but near-zero AI
              visibility. The site was effectively invisible to every generative
              engine on the market.
            </p>
            <div className="space-y-4">
              {[
                "1 total LLM session in the prior 30-day period",
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
              The Approach
            </h2>
            <p className="text-text-muted text-center mb-12 max-w-2xl mx-auto">
              A three-phase GEO strategy executed over 30 days, each phase
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
            The Results
          </h2>
          <p className="text-text-muted text-center mb-12 max-w-2xl mx-auto">
            Industry average is less than 1% AI referral traffic.
            SellerMockups hit 8.2% &mdash; more than 8x the benchmark.
          </p>

          {/* Headline Results */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
              <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-3xl font-bold text-secondary">1 &rarr; 43</p>
              <p className="text-sm text-text-muted mt-1">
                LLM sessions per month
              </p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
              <BarChart3 className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-3xl font-bold text-secondary">#3</p>
              <p className="text-sm text-text-muted mt-1">
                Traffic source (ahead of Google organic)
              </p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
              <Users className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-3xl font-bold text-secondary">90.5%</p>
              <p className="text-sm text-text-muted mt-1">
                Engagement rate (up from 83.6%)
              </p>
            </div>
          </div>

          {/* Platform Breakdown */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-secondary mb-6">
              Per-Platform Breakdown
            </h3>
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="hidden sm:grid grid-cols-5 gap-4 px-6 py-3 bg-bg-alt border-b border-gray-200 text-xs font-semibold text-text-muted uppercase tracking-wider">
                <span>Platform</span>
                <span>Sessions</span>
                <span>Avg. Duration</span>
                <span>Events/Session</span>
                <span>Quality</span>
              </div>
              {platformResults.map((platform) => (
                <div
                  key={platform.name}
                  className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-4 px-6 py-4 border-b border-gray-100 last:border-0"
                >
                  <span className="font-semibold text-secondary col-span-2 sm:col-span-1">
                    {platform.name}
                  </span>
                  <span className="text-text-muted">
                    <span className="sm:hidden text-xs text-text-muted/60">
                      Sessions:{" "}
                    </span>
                    {platform.sessions}
                  </span>
                  <span className="text-text-muted">
                    <span className="sm:hidden text-xs text-text-muted/60">
                      Duration:{" "}
                    </span>
                    {platform.duration}
                  </span>
                  <span className="text-text-muted">
                    <span className="sm:hidden text-xs text-text-muted/60">
                      Events:{" "}
                    </span>
                    {platform.events}
                  </span>
                  <span className="text-text-muted">
                    <span className="sm:hidden text-xs text-text-muted/60">
                      Quality:{" "}
                    </span>
                    {platform.quality}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-text-muted">
              <strong>Copilot visitors averaged 5 minutes and 2 seconds</strong>{" "}
              per session with 12.5 events &mdash; the highest-quality traffic
              source on the entire site.
            </p>
          </div>

        </div>
      </section>

      {/* Ripple Effects */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              The Ripple Effect
            </h2>
            <p className="text-text-muted leading-relaxed text-lg mb-8">
              GEO improvements didn&apos;t just lift AI traffic &mdash; they
              boosted traditional search performance across the board. The same
              structured data, authorship signals, and content depth that help AI
              platforms also help search engines.
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
                SellerMockups acquired its first paying customer during this
                30-day period. The combined lift in visibility and engagement
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
              What Made It Work
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
                    "43 sessions from 4 different AI platforms in 30 days, with engagement metrics that exceed most traditional channels.",
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
                    "GEO improvements lifted Bing (+825%), Yahoo (+3,200%), and DuckDuckGo (+1,400%) in addition to AI platforms. One investment, multiple returns.",
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
