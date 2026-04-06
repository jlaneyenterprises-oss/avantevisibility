import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import HeroIllustration from "@/components/HeroIllustration";
import Breadcrumb from "@/components/Breadcrumb";
import FAQAccordion from "@/components/FAQAccordion";
import PricingCard from "@/components/PricingCard";
import CTASection from "@/components/CTASection";
import {
  Search,
  Users,
  Gauge,
  Braces,
  FileText,
  Bot,
  Globe,
  CalendarRange,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const BOOKING_URL = "https://cal.com/provemyads/15min";

const STRIPE_LINKS = {
  geoAudit: "https://buy.stripe.com/14AcN52Oa4h25gf2s7gjC0j",
  competitiveEdge: "https://buy.stripe.com/dRm4gz9cycNy387eaPgjC0d",
  growthStarter: "https://buy.stripe.com/28E7sL0G2eVGeQPc2HgjC0e",
};

export const metadata: Metadata = {
  title: "GEO Audit | Generative Engine Optimization Audit for SaaS & E-Commerce",
  description:
    "See exactly what AI says when customers search for what you sell. Our GEO Audit tests 28+ real AI queries, benchmarks competitors, and delivers a full roadmap to get cited. $2,500.",
  openGraph: {
    title: "GEO Audit | Generative Engine Optimization Audit for SaaS & E-Commerce",
    description:
      "See exactly what AI says when customers search for what you sell. Our GEO Audit tests 28+ real AI queries, benchmarks competitors, and delivers a full roadmap to get cited. $2,500.",
    images: [
      {
        url: "https://avantevisibility.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "GEO Audit | Generative Engine Optimization Audit for SaaS & E-Commerce",
      },
    ],
  },
};

const auditItems = [
  {
    number: 1,
    icon: Search,
    title: "Live AI Citation Testing",
    description:
      "We test 28+ real queries across Perplexity, ChatGPT, and Gemini to see if your site gets cited. You get actual AI responses as proof.",
  },
  {
    number: 2,
    icon: Users,
    title: "Competitive Benchmarking",
    description:
      "Side-by-side comparison against 3&ndash;4 direct competitors showing who AI recommends and why.",
  },
  {
    number: 3,
    icon: Gauge,
    title: "12-Point GEO Score",
    description:
      "Comprehensive scoring across Indexability, Crawl Access, Schema Integrity, Freshness, Technical Health, Answer Architecture, Content Depth, E-E-A-T Signals, Brand Authority, Citability Format, and Trust Signals.",
  },
  {
    number: 4,
    icon: Braces,
    title: "Schema & Structured Data Audit",
    description:
      "Full validation of existing markup and identification of missing schema types that would improve AI discoverability.",
  },
  {
    number: 5,
    icon: FileText,
    title: "Content Citability Analysis",
    description:
      "Page-by-page assessment of how quotable your content is for AI systems, with specific rewrite suggestions.",
  },
  {
    number: 6,
    icon: Bot,
    title: "AI Crawler Access Check",
    description:
      "Verify that GPTBot, ClaudeBot, PerplexityBot, and other AI crawlers can actually access your content.",
  },
  {
    number: 7,
    icon: Globe,
    title: "Brand Authority Assessment",
    description:
      "Evaluate your brand presence across platforms AI models rely on for entity recognition and recommendations.",
  },
  {
    number: 8,
    icon: CalendarRange,
    title: "30/60/90 Day Roadmap",
    description:
      "Prioritized action plan with projected GEO score improvement and specific implementation steps.",
  },
];

const faqItems = [
  {
    question: "How is this different from the $297 AI Visibility Audit?",
    answer:
      "The AI Visibility Audit checks whether your business appears in AI search results and provides a general action plan. The GEO Audit goes much deeper: we test 28+ real search queries, score your site across 12 technical and content dimensions, benchmark you against 3-4 direct competitors with actual AI responses as proof, and deliver a 30/60/90 day implementation roadmap with projected score improvements. It's the difference between a checkup and a full diagnostic.",
  },
  {
    question: "What kind of businesses is this for?",
    answer:
      "The GEO Audit is designed for SaaS companies, e-commerce brands, and national businesses that compete for AI citations beyond local search. If your customers are searching for products, tools, or services (not just local businesses), and you want to appear when AI recommends solutions in your category, this audit is for you.",
  },
  {
    question: "What do I get when it's done?",
    answer:
      "You receive a professionally branded PDF report (typically 15-20 pages) with your overall GEO Score, 12 subcategory scores, live AI citation test results with actual AI responses, competitive benchmarking, and a prioritized 30/60/90 day roadmap. This is followed by a 45-minute strategy call to review findings and discuss implementation.",
  },
  {
    question: "Can you also implement the fixes?",
    answer:
      "Yes. Many clients use the GEO Audit as the starting point, then move to one of our monthly plans where we implement the fixes and track progress month over month. The audit gives you the full picture; the monthly plan executes it.",
  },
];

export default function GEOAuditPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "GEO Audit",
        alternateName: [
          "Generative Engine Optimization Audit",
          "AI Citation Audit",
          "GEO Score Audit",
        ],
        description:
          "In-depth generative engine optimization audit that tests 28+ real AI queries, benchmarks competitors, scores your site across 12 dimensions, and delivers a 30/60/90 day implementation roadmap.",
        url: "https://avantevisibility.com/geo-audit",
        provider: {
          "@id": "https://avantevisibility.com/#organization",
        },
        offers: {
          "@type": "Offer",
          price: "2500",
          priceCurrency: "USD",
          url: "https://avantevisibility.com/geo-audit",
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
            name: "GEO Audit",
            item: "https://avantevisibility.com/geo-audit",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
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
          { label: "GEO Audit" },
        ]}
      />

      <Hero
        headline="See Exactly What AI Says When Customers Search for What You Sell"
        subheadline="When someone asks ChatGPT, Perplexity, or Google AI for the best tool, product, or service in your space &mdash; are you in the answer? Our GEO Audit tests your site against 28+ real AI search queries, benchmarks you against competitors, and gives you the exact roadmap to get cited. This isn&apos;t theory. It&apos;s data."
        primaryCTA={{
          text: "Order GEO Audit \u2014 $2,500",
          href: STRIPE_LINKS.geoAudit,
        }}
        secondaryCTA={{
          text: "See What's Included",
          href: "#what-it-covers",
        }}
        illustration={<HeroIllustration className="w-full h-full" />}
        lastUpdated="March 25, 2026"
      />

      {/* Definition Block */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl mx-auto bg-primary/5 border border-primary/15 rounded-xl p-6 md:p-8">
            <h2 className="text-lg font-bold text-secondary mb-2">What is a GEO Audit?</h2>
            <p className="text-text-muted leading-relaxed">
              A <strong>GEO audit</strong> (Generative Engine Optimization audit) is a structured analysis that tests whether your business appears in AI-generated search results from platforms like ChatGPT, Perplexity, Google AI Overviews, and Claude. Unlike traditional SEO audits that focus on keyword rankings, a GEO audit evaluates citation frequency, answer inclusion, entity recognition, and structured data readiness across every major AI search platform &mdash; then delivers a prioritized action plan to get your business recommended.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem / Stats Section */}
      <section className="bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              AI Is Already Deciding Who Gets the Customer
            </h2>
            <p className="text-text-muted leading-relaxed text-lg mb-8">
              Your prospects are asking AI for recommendations before they ever
              open Google. If you&apos;re not in those answers, you&apos;re not
              in the consideration set. A <strong>GEO audit</strong> reveals
              exactly where you stand &mdash; and what it takes to get cited.
            </p>
            <div className="space-y-4 mb-8">
              {[
                {
                  stat: "44% of users now use AI chat as their primary search",
                  detail:
                    "surpassing Google (31%) as the first place people look for answers",
                },
                {
                  stat: "0% citation rate is common",
                  detail:
                    "even for well-known brands that rank well in traditional search",
                },
                {
                  stat: "~4x higher conversion rate",
                  detail:
                    "for AI-referred traffic compared to traditional organic search",
                },
                {
                  stat: "First-mover advantage is real",
                  detail:
                    "AI models reinforce what they already cite &mdash; getting in early compounds over time",
                },
              ].map((item) => (
                <div
                  key={item.stat}
                  className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200"
                >
                  <div className="w-2 h-2 bg-accent rounded-full shrink-0 mt-2.5" />
                  <p className="text-text-primary leading-relaxed">
                    <span className="font-bold text-secondary">
                      {item.stat}
                    </span>{" "}
                    &mdash;{" "}
                    <span
                      dangerouslySetInnerHTML={{ __html: item.detail }}
                    />
                  </p>
                </div>
              ))}
            </div>
            <p className="text-text-muted leading-relaxed text-lg">
              The GEO Audit doesn&apos;t just tell you whether you show up. It
              tells you <em>why</em> you don&apos;t, scores every dimension that
              matters, and gives you a clear path to fix it.
            </p>
          </div>
        </div>
      </section>

      {/* What the Audit Covers */}
      <section id="what-it-covers">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-4">
            What Your GEO Audit Covers
          </h2>
          <p className="text-text-muted text-center mb-12 max-w-2xl mx-auto">
            A deep technical and content analysis across every factor that
            determines whether AI systems cite your business.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {auditItems.map((item) => (
              <div
                key={item.number}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-primary text-white rounded-lg font-bold text-sm shrink-0">
                    {item.number}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary mb-2">
                      {item.title}
                    </h3>
                    <p
                      className="text-sm text-text-muted leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How This Differs from the $297 Audit */}
      <section className="bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-4">
              AI Visibility Audit vs. GEO Audit
            </h2>
            <p className="text-text-muted text-center mb-12 max-w-2xl mx-auto">
              Both are valuable &mdash; but they serve different needs. Here&apos;s
              how to decide which is right for you.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* $297 Column */}
              <div className="bg-white border border-gray-200 rounded-xl p-8">
                <div className="mb-6">
                  <p className="text-sm font-medium text-text-muted uppercase tracking-wider mb-1">
                    Starting Point
                  </p>
                  <h3 className="text-xl font-bold text-secondary">
                    AI Visibility Audit
                  </h3>
                  <p className="text-3xl font-bold text-text-primary mt-2">
                    $297
                  </p>
                </div>
                <ul className="space-y-3">
                  {[
                    "Checks IF you show up (yes/no)",
                    "Tests across major AI platforms",
                    "General action plan",
                    "Competitive snapshot",
                    "30-min walkthrough call",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-text-primary">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-sm text-text-muted">
                    Best for: Local businesses and companies that want a quick
                    health check on their AI presence.
                  </p>
                </div>
                <Link
                  href="/ai-visibility-audit"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-dark transition-colors"
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* $2,500 Column */}
              <div className="bg-white border-2 border-primary rounded-xl p-8 shadow-xl ring-1 ring-primary/10 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center px-4 py-1 bg-accent text-white text-xs font-bold rounded-full uppercase tracking-wider">
                    Full Diagnostic
                  </span>
                </div>
                <div className="mb-6">
                  <p className="text-sm font-medium text-text-muted uppercase tracking-wider mb-1">
                    Deep Analysis
                  </p>
                  <h3 className="text-xl font-bold text-secondary">
                    GEO Audit
                  </h3>
                  <p className="text-3xl font-bold text-text-primary mt-2">
                    $2,500
                  </p>
                </div>
                <ul className="space-y-3">
                  {[
                    "Shows WHY with 12 subcategory scores",
                    "Tests 28+ real queries with evidence",
                    "Benchmarks 3-4 direct competitors",
                    "Full technical + content roadmap",
                    "15-20 page branded PDF report",
                    "45-min strategy call",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-text-primary">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-sm text-text-muted">
                    Best for: SaaS, e-commerce, and national businesses that
                    need a full diagnostic with implementation roadmap.
                  </p>
                </div>
                <a
                  href={STRIPE_LINKS.geoAudit}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-dark transition-colors"
                >
                  Order GEO Audit <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-4">
            Investment
          </h2>
          <p className="text-text-muted text-center mb-12 max-w-2xl mx-auto">
            Choose the GEO Audit on its own or bundle with complementary audits
            and save. Every option includes a strategy call.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard
              title="GEO Audit"
              price="$2,500"
              description="Complete generative engine optimization audit"
              features={[
                "28+ live AI citation tests",
                "12-point GEO Score",
                "Competitive benchmarking (3-4 competitors)",
                "Schema & structured data audit",
                "Content citability analysis",
                "AI crawler access check",
                "Brand authority assessment",
                "30/60/90 day roadmap",
                "15-20 page branded PDF report",
                "45-min strategy call",
              ]}
              ctaText="Order GEO Audit \u2014 $2,500"
              ctaHref={STRIPE_LINKS.geoAudit}
              highlighted
              badge="Most Popular"
            />
            <PricingCard
              title="Competitive Edge Bundle"
              price="$2,997"
              description="GEO + Competitor Intelligence &mdash; Save $300"
              features={[
                "Everything in the GEO Audit",
                "Extended competitor deep-dive",
                "Gap analysis across all 12 dimensions",
                "Competitor content strategy teardown",
                "Priority delivery",
                "45-min strategy call",
              ]}
              ctaText="Order Bundle \u2014 $2,997"
              ctaHref={STRIPE_LINKS.competitiveEdge}
            />
            <PricingCard
              title="Growth Starter Bundle"
              price="$3,997"
              description="GEO + Technical SEO + Speed Audit &mdash; Save $500"
              features={[
                "Everything in the GEO Audit",
                "Full technical SEO audit",
                "Site speed & Core Web Vitals audit",
                "Combined implementation roadmap",
                "Priority delivery",
                "45-min strategy call",
              ]}
              ctaText="Order Bundle \u2014 $3,997"
              ctaHref={STRIPE_LINKS.growthStarter}
            />
          </div>
          <p className="text-center text-sm text-text-muted mt-8">
            Delivery: 5&ndash;7 business days. All options include a 45-minute
            strategy call to review findings.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold text-secondary text-center mb-8">
            Related Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link
              href="/ai-visibility-audit"
              className="group block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all"
            >
              <h3 className="text-lg font-bold text-secondary group-hover:text-primary transition-colors">
                AI Visibility Audit
              </h3>
              <p className="mt-2 text-sm text-text-muted">
                Quick health check on whether AI platforms are recommending your
                business. Starting at $297.
              </p>
            </Link>
            <Link
              href="/review-audit"
              className="group block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all"
            >
              <h3 className="text-lg font-bold text-secondary group-hover:text-primary transition-colors">
                Review Intelligence Audit
              </h3>
              <p className="mt-2 text-sm text-text-muted">
                Your reviews shape AI recommendations. Find out what
                they&apos;re really saying.
              </p>
            </Link>
            <Link
              href="/packages"
              className="group block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all"
            >
              <h3 className="text-lg font-bold text-secondary group-hover:text-primary transition-colors">
                All Audit Packages
              </h3>
              <p className="mt-2 text-sm text-text-muted">
                Compare all audit options and find the right fit for your
                business.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        headline="Ready to See What AI Really Says About You?"
        description="Get a complete diagnostic of your AI visibility with 28+ real query tests, competitive benchmarking, and a clear roadmap to start getting cited."
        buttonText="Order GEO Audit \u2014 $2,500"
        buttonHref={STRIPE_LINKS.geoAudit}
        secondaryButtonText="Learn About the $297 AI Visibility Audit"
        secondaryButtonHref="/ai-visibility-audit"
        showContact
      />
    </>
  );
}
