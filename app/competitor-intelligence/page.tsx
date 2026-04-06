import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import HeroIllustration from "@/components/HeroIllustration";
import Breadcrumb from "@/components/Breadcrumb";
import FAQAccordion from "@/components/FAQAccordion";
import PricingCard from "@/components/PricingCard";
import CTASection from "@/components/CTASection";
import {
  Brain,
  TrendingUp,
  FileText,
  Search,
  Link2,
  DollarSign,
  Target,
  Check,
  Shield,
  Crosshair,
  BarChart3,
} from "lucide-react";

const BOOKING_URL = "https://cal.com/provemyads/15min";

const STRIPE_LINKS = {
  competitorIntel: "https://buy.stripe.com/fZu4gzbkGbJucIH1o3gjC0b",
  competitiveEdge: "https://buy.stripe.com/dRm4gz9cycNy387eaPgjC0d",
};

export const metadata: Metadata = {
  title: "Competitor Intelligence Report | Competitive Analysis Service",
  description:
    "Know exactly what your competitors are doing and where they're vulnerable. AI citations, traffic sources, content gaps, keyword opportunities, and a strategic opportunity map. $797.",
  openGraph: {
    title: "Competitor Intelligence Report | Competitive Analysis Service",
    description:
      "Know exactly what your competitors are doing and where they're vulnerable. AI citations, traffic sources, content gaps, keyword opportunities, and a strategic opportunity map. $797.",
    images: [
      {
        url: "https://avantevisibility.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Competitor Intelligence Report | Competitive Analysis Service",
      },
    ],
  },
};

const reportItems = [
  {
    number: 1,
    icon: Brain,
    title: "AI Citation Comparison",
    description:
      "Who gets cited by ChatGPT, Perplexity, and Google AI for the queries that matter most to your business.",
  },
  {
    number: 2,
    icon: TrendingUp,
    title: "Traffic & Visibility Analysis",
    description:
      "Estimated traffic comparison, top-performing pages, and which channels drive their visitors.",
  },
  {
    number: 3,
    icon: FileText,
    title: "Content Strategy Breakdown",
    description:
      "What they publish, how often, what topics perform best, and content gaps you can exploit.",
  },
  {
    number: 4,
    icon: Search,
    title: "Keyword Gap Analysis",
    description:
      "Keywords and queries they rank for that you don&apos;t &mdash; the low-hanging fruit for your content strategy.",
  },
  {
    number: 5,
    icon: Link2,
    title: "Backlink & Authority Comparison",
    description:
      "Domain authority, referring domains, and link-building strategies they&apos;re using.",
  },
  {
    number: 6,
    icon: DollarSign,
    title: "Pricing & Positioning Analysis",
    description:
      "How they position their offerings, pricing tiers, and messaging compared to yours.",
  },
  {
    number: 7,
    icon: Target,
    title: "Opportunity Map",
    description:
      "Specific opportunities they&apos;re missing that you can own &mdash; the gaps in their strategy that become your advantage.",
  },
];

const whyItMatters = [
  {
    icon: Crosshair,
    title: "Stop Guessing, Start Knowing",
    description:
      "Most businesses operate on assumptions about their competitors. Assumptions are expensive. Data is not.",
  },
  {
    icon: Shield,
    title: "Defend Your Strengths",
    description:
      "Know where competitors are gaining ground so you can protect the advantages you already have before they erode.",
  },
  {
    icon: Target,
    title: "Attack Their Weaknesses",
    description:
      "Every competitor has gaps in their strategy. This report finds them and shows you exactly how to exploit them.",
  },
  {
    icon: BarChart3,
    title: "Allocate Resources Smarter",
    description:
      "Stop spreading your budget evenly across everything. Focus your time and money where the competitive opportunity is greatest.",
  },
];

const faqItems = [
  {
    question: "How many competitors do you analyze?",
    answer:
      "We deep-dive into 3-5 direct competitors. You can specify which competitors you want analyzed, or we can identify them based on your industry and target keywords. We recommend including both your obvious competitors and any emerging players you\u2019ve noticed gaining ground.",
  },
  {
    question: "Will this show me what they\u2019re spending on ads?",
    answer:
      "We provide estimated traffic data and visibility metrics, but we cannot access competitors\u2019 actual ad spend. What we can show you is which keywords they\u2019re bidding on, what their landing pages look like, and how their paid strategy compares to their organic and AI visibility approach.",
  },
  {
    question: "How often should I run this?",
    answer:
      "We recommend a full competitor intelligence report quarterly. Markets shift, competitors launch new content, and AI citation patterns change. Our monthly plans include ongoing competitive monitoring so you\u2019re always aware of competitive movements.",
  },
  {
    question: "What do I receive?",
    answer:
      "A comprehensive intelligence report covering all 7 analysis areas for each competitor, with specific strategic recommendations and an opportunity map highlighting your biggest advantages. Delivered within 3-5 business days with a 30-minute strategy call.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Competitor Intelligence Report",
      alternateName: [
        "Competitive Analysis Report",
        "Competitor Analysis Service",
        "Competitive Intelligence Service",
      ],
      description:
        "A comprehensive competitor intelligence report that reverse-engineers what\u2019s working for your top competitors \u2014 their content, AI citations, traffic sources, and positioning gaps \u2014 and shows you exactly where to attack.",
      url: "https://avantevisibility.com/competitor-intelligence",
      provider: {
        "@type": "Organization",
        name: "Avante Visibility",
        url: "https://avantevisibility.com",
      },
      offers: {
        "@type": "Offer",
        price: "797",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
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
          name: "Competitor Intelligence Report",
          item: "https://avantevisibility.com/competitor-intelligence",
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

export default function CompetitorIntelligencePage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Competitor Intelligence Report" },
        ]}
      />

      {/* Hero */}
      <Hero
        headline="Know Exactly What Your Competitors Are Doing &mdash; and Where They&apos;re Vulnerable"
        subheadline="You can&apos;t beat competitors you don&apos;t understand. Our Competitor Intelligence Report reverse-engineers what&apos;s working for the top players in your space &mdash; their content, their AI citations, their traffic sources, their positioning gaps &mdash; and shows you exactly where to attack."
        primaryCTA={{
          text: "Get My Competitor Intelligence Report \u2014 $797",
          href: STRIPE_LINKS.competitorIntel,
        }}
        secondaryCTA={{
          text: "Book a Free Strategy Call First",
          href: BOOKING_URL,
        }}
        illustration={<HeroIllustration className="w-full h-full" />}
        lastUpdated="March 10, 2026"
      />

      {/* Definition Block */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl mx-auto bg-primary/5 border border-primary/15 rounded-xl p-6 md:p-8">
            <h2 className="text-lg font-bold text-secondary mb-2">What is a Competitor Intelligence Report?</h2>
            <p className="text-text-muted leading-relaxed">
              A <strong>competitor intelligence report</strong> is a data-driven analysis that reverse-engineers your top competitors&apos; digital strategies &mdash; their content, traffic sources, AI citation presence, keyword positioning, and reputation signals. It identifies where they&apos;re strong, where they&apos;re vulnerable, and the specific opportunities you can exploit to gain market share in both traditional search and AI-powered recommendations.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              Your Competitors Have a Strategy. Do You Know What It Is?
            </h2>
            <p className="text-text-muted leading-relaxed text-lg mb-8">
              Every business operates with blind spots about their competition.
              You might know who they are, but do you know{" "}
              <strong>why they&apos;re winning</strong> the customers you&apos;re
              losing? A <strong>competitor intelligence report</strong> eliminates
              the guesswork and replaces it with data:
            </p>
            <div className="space-y-4 mb-8">
              {[
                {
                  stat: "Which competitors AI platforms recommend",
                  detail:
                    "when your potential customers ask questions about your industry",
                },
                {
                  stat: "What content is driving their traffic",
                  detail:
                    "and which topics they own that you haven\u2019t touched yet",
                },
                {
                  stat: "Which keywords they rank for that you don\u2019t",
                  detail:
                    "representing immediate opportunities for your content strategy",
                },
                {
                  stat: "Where their strategy has gaps",
                  detail:
                    "that you can exploit before they notice and close them",
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
                    &mdash; {item.detail}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-text-muted leading-relaxed text-lg">
              The businesses that consistently win market share aren&apos;t just
              better at what they do &mdash; they&apos;re better informed about
              what everyone else is doing. This report gives you that edge.
            </p>
          </div>
        </div>
      </section>

      {/* What the Report Covers */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-4">
            What Your Competitor Intelligence Report Covers
          </h2>
          <p className="text-text-muted text-center mb-12 max-w-2xl mx-auto">
            Seven areas of analysis that give you a complete picture of your
            competitive landscape &mdash; and a clear map of where to focus.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {reportItems.map((item) => (
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

      {/* Why It Matters */}
      <section className="bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">
              Why Competitor Intelligence Changes Everything
            </h2>
            <p className="mt-4 text-text-muted leading-relaxed">
              The difference between businesses that grow and businesses that
              stagnate often comes down to one thing: information.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {whyItMatters.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl border border-gray-200 p-6"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-secondary mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Walk Away With */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8">
              What You Walk Away With
            </h2>
            <p className="text-text-muted leading-relaxed mb-8">
              This isn&apos;t a generic industry overview. It&apos;s a
              custom-built intelligence briefing specific to your business, your
              market, and your competitors. Here&apos;s what&apos;s included:
            </p>
            <ul className="space-y-4">
              {[
                "A side-by-side comparison of your AI visibility vs. each competitor across ChatGPT, Perplexity, and Google AI Overviews",
                "A traffic and channel analysis showing where their visitors come from and which pages drive the most engagement",
                "A content audit identifying their top-performing topics, publishing frequency, and the content gaps you can exploit",
                "A keyword gap report with the exact queries they rank for that you don\u2019t \u2014 sorted by opportunity and difficulty",
                "A backlink and authority comparison showing their link-building strategies and your opportunities to close the gap",
                "A pricing and positioning teardown of how they present their offerings compared to yours",
                "An opportunity map highlighting the specific strategic gaps you can own before they do",
                "A 30-minute strategy call to walk through every finding and prioritize your next moves",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-text-primary leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-4">
            Investment
          </h2>
          <p className="text-text-muted text-center mb-12 max-w-2xl mx-auto">
            Choose the option that fits your needs. Every option includes a
            comprehensive written report and a 30-minute strategy call.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <PricingCard
              title="Competitor Intelligence Report (Solo)"
              price="$797"
              description="Full competitive analysis for your business and 3-5 competitors"
              features={[
                "AI citation comparison",
                "Traffic & visibility analysis",
                "Content strategy breakdown",
                "Keyword gap analysis",
                "Backlink & authority comparison",
                "Pricing & positioning analysis",
                "Strategic opportunity map",
                "30-min strategy call",
              ]}
              ctaText="Order Report \u2014 $797"
              ctaHref={STRIPE_LINKS.competitorIntel}
            />
            <PricingCard
              title="Competitive Edge Bundle"
              price="$2,997"
              description="GEO Audit + Competitor Intelligence Report &mdash; save $300"
              features={[
                "Full AI Visibility / GEO Audit",
                "Complete Competitor Intelligence Report",
                "Unified strategy across both reports",
                "Priority delivery",
                "30-min strategy call",
              ]}
              ctaText="Order Bundle \u2014 $2,997"
              ctaHref={STRIPE_LINKS.competitiveEdge}
              badge="Save $300"
              highlighted
            />
          </div>
          <p className="text-center text-sm text-text-muted mt-8">
            Delivery: 3&ndash;5 business days. Includes a 30-minute strategy
            call.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-12">
            Frequently Asked Questions About Competitor Intelligence
          </h2>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold text-secondary text-center mb-8">
            Complete Your Competitive Picture
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
                Find out why AI isn&apos;t recommending you &mdash; and get a
                clear roadmap to fix it.
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
                Full Digital Visibility Package
              </h3>
              <p className="mt-2 text-sm text-text-muted">
                Bundle multiple audits together and save with our most popular
                packages.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        headline="Stop Competing Blind"
        description="The businesses that win market share aren&apos;t just better at what they do &mdash; they&apos;re better informed about what everyone else is doing. Get the intelligence you need to compete strategically."
        buttonText="Get My Competitor Intelligence Report &mdash; $797"
        buttonHref={STRIPE_LINKS.competitorIntel}
        secondaryButtonText="Book a Free Strategy Call First"
        secondaryButtonHref={BOOKING_URL}
        showContact
      />
    </>
  );
}
