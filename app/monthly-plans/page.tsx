import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import HeroIllustration from "@/components/HeroIllustration";
import Breadcrumb from "@/components/Breadcrumb";
import PricingCard from "@/components/PricingCard";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import {
  Check,
  BarChart3,
  Wrench,
  Rocket,
  ArrowRight,
  TrendingUp,
  FileText,
  Shield,
  Users,
  Zap,
  Target,
  Globe,
} from "lucide-react";

const CALENDLY_URL = "https://calendly.com/avantevisibility";

const STRIPE_LINKS: Record<string, string> = {
  "Monitor + Advise": "https://buy.stripe.com/6oU7sL4WiaFq8sraYDgjC0g",
  "Monitor + Implement": "https://buy.stripe.com/aFa7sLbkGfZKbED2s7gjC0h",
  "Full AI Visibility Program": "https://buy.stripe.com/eVq9ATcoKbJufUT5EjgjC0i",
};

export const metadata: Metadata = {
  title: "Monthly AI Visibility Plans | Ongoing GEO Optimization",
  description:
    "Monthly AI visibility monitoring and optimization plans. Track your AI citations, implement fixes, and grow your presence across ChatGPT, Perplexity, and Google AI. Starting at $1,500/mo.",
  openGraph: {
    title: "Monthly AI Visibility Plans | Ongoing GEO Optimization",
    description:
      "Monthly AI visibility monitoring and optimization plans. Track your AI citations, implement fixes, and grow your presence across ChatGPT, Perplexity, and Google AI. Starting at $1,500/mo.",
    images: [
      {
        url: "https://avantevisibility.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Monthly AI Visibility Plans | Ongoing GEO Optimization",
      },
    ],
  },
};

const tiers = [
  {
    icon: BarChart3,
    name: "Monitor + Advise",
    price: "$1,500",
    subtitle: "Know where you stand every month",
    description:
      "Monthly tracking and expert recommendations. Your team implements.",
    features: [
      "Monthly AI citation tracking across ChatGPT, Perplexity, Google AI, Gemini",
      "Citation rate trend report (gained, lost, held \u2014 with proof)",
      "Competitor citation movement alerts",
      "Updated GEO score comparison vs. previous month",
      "Monthly priority recommendations",
      "Email summary report",
      "30-minute monthly check-in call",
    ],
    bestFor: "Businesses with their own dev team who need expert direction",
  },
  {
    icon: Wrench,
    name: "Monitor + Implement",
    price: "$3,500",
    subtitle: "We find the problems and fix them",
    description:
      "Everything in Monitor, plus we do the implementation work every month.",
    features: [
      "Everything in Monitor + Advise",
      "Schema markup implementation and updates",
      "Content optimization for AI citability (2\u20133 pages/mo)",
      "New content targeting gap queries (1\u20132 articles/mo)",
      "E-E-A-T signal improvements (author bios, trust pages)",
      "Technical fixes as identified in monthly tracking",
      "OG image creation for key pages",
      "Freshness date management",
      "Monthly implementation report",
    ],
    bestFor: "Businesses that want results without managing the work",
    highlighted: true,
  },
  {
    icon: Rocket,
    name: "Full AI Visibility Program",
    price: "$5,000\u2013$7,500",
    subtitle: "Own the AI answer in your industry",
    description:
      "Complete AI visibility domination. We build, execute, and defend your position.",
    features: [
      "Everything in Monitor + Implement",
      "Brand authority building (G2, Capterra, Product Hunt, directories)",
      "Integration/use-case landing pages (2\u20133/mo)",
      "Educational content strategy (3\u20134 articles/mo)",
      "Competitive counter-moves when rivals gain your citations",
      "New query discovery and expansion each month",
      "Reddit and community presence strategy",
      "Quarterly strategic review with updated roadmap",
      "Priority response time",
    ],
    bestFor:
      "Businesses serious about dominating AI search in their category",
  },
];

const monthlyTimeline = [
  {
    week: "Week 1",
    icon: BarChart3,
    title: "Track & Report",
    description:
      "Re-run citation tracking across all AI platforms. Generate comparison report showing what moved, what held, and what changed competitively.",
  },
  {
    week: "Week 2",
    icon: Wrench,
    title: "Implement",
    description:
      "Execute that month\u2019s technical and structural fixes \u2014 schema updates, page optimizations, new content deployment.",
  },
  {
    week: "Week 3",
    icon: FileText,
    title: "Create & Optimize",
    description:
      "Write and optimize content targeting AI citation gaps. Build authority signals and update existing pages for freshness.",
  },
  {
    week: "Week 4",
    icon: Target,
    title: "Review & Plan",
    description:
      "QA all work, deliver your monthly report, conduct check-in call, and plan next month\u2019s priorities.",
  },
];

const faqItems = [
  {
    question: "Do I need to do an audit first before starting a monthly plan?",
    answer:
      "We strongly recommend starting with a GEO Audit ($2,500) to establish your baseline scores, identify all issues, and create the initial roadmap. The monthly plan then executes against that roadmap. If you sign up for a monthly plan, we\u2019ll apply $500 off your first month as a bridge from the audit.",
  },
  {
    question: "What\u2019s the minimum commitment?",
    answer:
      "We ask for a 3-month minimum commitment. AI visibility improvements take time to compound \u2014 the first month is implementation, the second month is when changes start registering with AI platforms, and the third month is where you typically see measurable citation improvements. After 3 months, plans continue month-to-month with 30 days notice to cancel.",
  },
  {
    question: "How do you prove it\u2019s working?",
    answer:
      "Every month you receive a citation tracking report showing exactly which queries you\u2019re now cited for, which ones you gained or lost, how your GEO score changed, and what competitors are doing. It\u2019s the same methodology as the initial audit, re-run monthly so you can see the trendline. No vanity metrics \u2014 just real AI citation data.",
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer:
      "Yes. You can move between tiers at any time with 30 days notice. Most clients start with Monitor + Implement and either stay or upgrade to the Full Program once they see results and want to accelerate.",
  },
  {
    question: "What if I already have an SEO agency?",
    answer:
      "Our monthly plans focus specifically on AI visibility \u2014 a discipline most traditional SEO agencies don\u2019t cover yet. We complement your existing SEO work rather than replace it. We\u2019re happy to coordinate with your SEO team to ensure our efforts align.",
  },
  {
    question:
      "What\u2019s the difference between this and your one-time audits?",
    answer:
      "One-time audits tell you what\u2019s wrong and give you the roadmap. Monthly plans execute the roadmap, track progress, and continuously optimize. AI search results change every month \u2014 new competitors appear, platforms update their models, and citation patterns shift. Monthly plans keep you ahead of those changes instead of falling behind.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
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
          name: "Monthly Plans",
          item: "https://avantevisibility.com/monthly-plans",
        },
      ],
    },
    {
      "@type": "Service",
      name: "AI Visibility Monthly Plans",
      description:
        "Ongoing AI visibility monitoring and optimization services. Monthly citation tracking, implementation, and growth across ChatGPT, Perplexity, Google AI, and Gemini.",
      url: "https://avantevisibility.com/monthly-plans",
      provider: {
        "@id": "https://avantevisibility.com/#organization",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Monthly AI Visibility Plans",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Monitor + Advise",
            price: "1500",
            priceCurrency: "USD",
            description:
              "Monthly AI citation tracking, competitor alerts, and expert recommendations.",
          },
          {
            "@type": "Offer",
            name: "Monitor + Implement",
            price: "3500",
            priceCurrency: "USD",
            description:
              "Monthly tracking plus hands-on implementation of schema, content, and technical fixes.",
          },
          {
            "@type": "Offer",
            name: "Full AI Visibility Program",
            price: "5000",
            priceCurrency: "USD",
            description:
              "Complete AI visibility domination including brand authority building, content strategy, and competitive defense.",
          },
        ],
      },
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

export default function MonthlyPlansPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Breadcrumb
        items={[{ label: "Home", href: "/" }, { label: "Monthly Plans" }]}
      />

      <Hero
        headline="Stop Guessing. Start Growing. Every Month."
        subheadline="AI search results change every month. A citation you earn today can disappear tomorrow if a competitor publishes better content or a platform updates its model. Our monthly plans track your AI visibility, implement fixes, and grow your citations &mdash; with data proving it&apos;s working."
        primaryCTA={{
          text: "See Plans & Pricing",
          href: "#choose-plan",
        }}
        secondaryCTA={{
          text: "View One-Time Audits",
          href: "/packages",
        }}
        illustration={<HeroIllustration className="w-full h-full" />}
        lastUpdated="March 22, 2026"
      />

      {/* Why Monthly */}
      <section className="bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">
              Why Monthly Matters for AI Visibility
            </h2>
            <p className="mt-6 text-text-muted leading-relaxed text-lg">
              Unlike traditional SEO where rankings shift gradually, AI citation
              patterns can change overnight. A platform model update, a
              competitor&apos;s new content, or a shift in training data can move
              you from cited to invisible in a single refresh.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: TrendingUp,
                title: "Citations Compound",
                text: "Each month of optimization builds on the last. Schema, content, and authority signals strengthen over time.",
              },
              {
                icon: Shield,
                title: "Defend Your Position",
                text: "Competitors are optimizing too. Monthly monitoring catches competitive movements before they cost you citations.",
              },
              {
                icon: Users,
                title: "Platforms Evolve",
                text: "ChatGPT, Perplexity, and Google AI update constantly. What works today may not work next quarter.",
              },
              {
                icon: Zap,
                title: "Prove the ROI",
                text: "Monthly reports show exactly which citations you gained, lost, or held \u2014 with real AI responses as proof.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl border border-gray-200 p-6"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-secondary mb-2">{item.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 id="choose-plan" className="text-3xl md:text-4xl font-bold text-secondary text-center mb-4">
            Choose Your Plan
          </h2>
          <p className="text-text-muted text-center mb-12 max-w-2xl mx-auto">
            Every plan includes monthly AI citation tracking with real data. The
            difference is how much implementation we handle for you.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tiers.map((tier) => (
              <PricingCard
                key={tier.name}
                title={tier.name}
                price={tier.price}
                period="mo"
                description={tier.description}
                features={tier.features}
                ctaText={`Get Started \u2014 ${tier.price}/mo`}
                ctaHref={STRIPE_LINKS[tier.name] || CALENDLY_URL}
                badge={tier.highlighted ? "Most Popular" : undefined}
                highlighted={tier.highlighted}
              />
            ))}
          </div>
          <p className="text-center text-sm text-text-muted mt-8">
            3-month minimum commitment. Month-to-month after that with 30 days
            notice.
          </p>
        </div>
      </section>

      {/* What a Typical Month Looks Like */}
      <section className="bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-4">
            What a Typical Month Looks Like
          </h2>
          <p className="text-text-muted text-center mb-12 max-w-2xl mx-auto">
            Every month follows a structured cycle: track, implement, create,
            review. You always know what we&apos;re doing and why.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {monthlyTimeline.map((item) => (
              <div
                key={item.week}
                className="bg-white rounded-xl border border-gray-200 p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-bold text-primary uppercase tracking-wider">
                    {item.week}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-secondary mb-2">
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

      {/* Best For Section */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-12">
            Which Plan Is Right for You?
          </h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`bg-white border rounded-xl p-6 ${
                  tier.highlighted
                    ? "border-primary/30 shadow-md"
                    : "border-gray-200"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <tier.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-secondary">
                      {tier.name}{" "}
                      <span className="text-primary">{tier.price}/mo</span>
                    </h3>
                    <p className="mt-1 text-text-muted leading-relaxed">
                      <span className="font-medium text-text-primary">
                        Best for:
                      </span>{" "}
                      {tier.bestFor}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-text-muted mb-6">
              Not sure which plan fits? Book a free call and we&apos;ll
              recommend based on your situation.
            </p>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3.5 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors text-base"
            >
              Book a Free Strategy Call
            </a>
          </div>
        </div>
      </section>

      {/* Audit Bridge Offer */}
      <section className="bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white border-2 border-primary/20 rounded-xl p-8 text-center">
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-3">
                Start with an Audit, Save on Your First Month
              </h3>
              <p className="text-text-muted leading-relaxed mb-6">
                Purchase any one-time audit and get{" "}
                <span className="font-bold text-primary">
                  $500 off your first month
                </span>{" "}
                of any monthly plan. The audit establishes your baseline; the
                monthly plan executes the roadmap.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/geo-audit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
                >
                  Start with a GEO Audit{" "}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/packages"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 text-text-primary font-medium rounded-lg hover:border-primary hover:text-primary transition-colors"
                >
                  View All Audits
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>

      <CTASection
        headline="Ready to Grow Your AI Visibility Every Month?"
        description="The longer you wait, the further ahead your competitors get. Let&apos;s talk about which plan makes sense for your business."
        buttonText="Get Started \u2014 $1,500/mo"
        buttonHref={STRIPE_LINKS["Monitor + Advise"]}
        secondaryButtonText="View One-Time Audits"
        secondaryButtonHref="/packages"
        showContact
      />
    </>
  );
}
