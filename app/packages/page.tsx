import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import HeroIllustration from "@/components/HeroIllustration";
import Breadcrumb from "@/components/Breadcrumb";
import PricingCard from "@/components/PricingCard";
import CTASection from "@/components/CTASection";
import {
  Check,
  ArrowRight,
  Brain,
  Star,
  MapPin,
  Megaphone,
  Globe,
  Code,
  Zap,
  GitBranch,
  Users,
  RotateCcw,
} from "lucide-react";

const CALENDLY_URL = "https://calendly.com/avantevisibility";

const STRIPE_LINKS = {
  aiVisibility: "https://buy.stripe.com/fZudR99cy5l67on0jZgjC00",
  reviewIntelligence: "https://buy.stripe.com/28E9AT2Oa3cYbED0jZgjC01",
  gbpAudit: "https://buy.stripe.com/aFa14n88u28U6kj5EjgjC02",
  googleAds: "https://buy.stripe.com/14A5kDdsOfZKfUT4AfgjC03",
  aiGbpBundle: "https://buy.stripe.com/cNi9AT9cy8xi5gf0jZgjC04",
  aiReviewBundle: "https://buy.stripe.com/3cIdR960m14Q7on3wbgjC05",
  reviewGbpBundle: "https://buy.stripe.com/00w7sL9cy3cY5gfaYDgjC06",
  fullPackage: "https://buy.stripe.com/5kQcN560m3cY8sraYDgjC07",
  geoAudit: "https://buy.stripe.com/14AcN52Oa4h25gf2s7gjC0j",
  technicalSeo: "https://buy.stripe.com/eVqeVd0G200MaAz0jZgjC08",
  speedAudit: "https://buy.stripe.com/fZu9ATewS8xi6kj2s7gjC09",
  conversionAudit: "https://buy.stripe.com/dRm14nagC3cYdMLc2HgjC0a",
  competitorIntel: "https://buy.stripe.com/fZu4gzbkGbJucIH1o3gjC0b",
  algorithmRecovery: "https://buy.stripe.com/9B6eVd60maFqdML3wbgjC0c",
  competitiveEdge: "https://buy.stripe.com/dRm4gz9cycNy387eaPgjC0d",
  growthStarter: "https://buy.stripe.com/28E7sL0G2eVGeQPc2HgjC0e",
  fullBusiness: "https://buy.stripe.com/28E5kD4WieVGfUTfeTgjC0f",
  recoveryGeoBundle: "https://buy.stripe.com/cNi4gzcoKcNy4cbaYDgjC0k",
};

export const metadata: Metadata = {
  title: "Digital Visibility Packages & Pricing | All Audits & Bundles",
  description:
    "Complete catalog of AI visibility audits, technical SEO, conversion optimization, and competitor intelligence services. Individual audits from $197. Bundle packages save up to $791. Monthly plans from $1,500/mo.",
  openGraph: {
    title: "Digital Visibility Packages & Pricing | All Audits & Bundles",
    description:
      "Complete catalog of AI visibility audits, technical SEO, conversion optimization, and competitor intelligence services. Individual audits from $197. Bundle packages save up to $791.",
    images: [
      {
        url: "https://avantevisibility.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Digital Visibility Packages & Pricing | All Audits & Bundles",
      },
    ],
  },
};

const starterAudits = [
  {
    icon: Brain,
    title: "AI Visibility Audit",
    price: "$297",
    description:
      "Find out why AI isn&apos;t recommending your business &mdash; and get a clear roadmap to fix it.",
    href: "/ai-visibility-audit",
  },
  {
    icon: Star,
    title: "Review Intelligence Audit",
    price: "$197",
    description:
      "Understand what your reviews are really saying and how they&apos;re shaping customer decisions.",
    href: "/review-audit",
  },
  {
    icon: MapPin,
    title: "Google Business Profile Audit",
    price: "$197",
    description:
      "Optimize your GBP to show up in local search and Google Maps when it matters most.",
    href: "/gbp-audit",
  },
  {
    icon: Megaphone,
    title: "Google Ads Setup + Landing Page",
    price: "$497",
    description:
      "Stop wasting ad spend with expert campaign setup and landing page optimization.",
    href: "/google-ads",
  },
];

const advancedAudits = [
  {
    icon: Zap,
    title: "Speed & Core Web Vitals Audit",
    price: "$497",
    description:
      "Pinpoint exactly what&apos;s slowing your site down and costing you customers and AI citations.",
    href: "/speed-audit",
  },
  {
    icon: Users,
    title: "Competitor Intelligence Report",
    price: "$797",
    description:
      "Reverse-engineer what&apos;s working for the top players in your space and find where to attack.",
    href: "/competitor-intelligence",
  },
  {
    icon: Code,
    title: "Technical SEO Audit",
    price: "$997",
    description:
      "Full-site crawl identifying every technical issue holding back your rankings and AI visibility.",
    href: "/technical-seo-audit",
  },
  {
    icon: GitBranch,
    title: "Conversion Funnel Audit",
    price: "$997",
    description:
      "Follow the exact path your visitors take and find every point where you&apos;re losing them.",
    href: "/conversion-audit",
  },
  {
    icon: RotateCcw,
    title: "Algorithm Recovery Audit",
    price: "$1,497",
    description:
      "Lost traffic after a Google update? We pinpoint what changed and deliver a prioritized recovery plan.",
    href: "/algorithm-recovery",
  },
  {
    icon: Globe,
    title: "GEO Audit",
    price: "$2,500",
    description:
      "See exactly what AI says when customers search for what you sell. 28+ live AI citation tests with full roadmap.",
    href: "/geo-audit",
  },
];

const recommendationBlocks = [
  {
    audit: "AI Visibility Audit",
    href: "/ai-visibility-audit",
    condition:
      "you&apos;re concerned about the shift to AI-powered search and want to know whether ChatGPT, Perplexity, or Google AI Overviews are recommending your competitors instead of you.",
  },
  {
    audit: "GEO Audit",
    href: "/geo-audit",
    condition:
      "you&apos;re a SaaS, e-commerce, or national business that needs a comprehensive AI visibility diagnostic with competitive benchmarking and a full implementation roadmap.",
  },
  {
    audit: "Technical SEO Audit",
    href: "/technical-seo-audit",
    condition:
      "your site has crawl errors, slow load times, broken schema, or other technical issues that are hurting both your rankings and your ability to get cited by AI platforms.",
  },
  {
    audit: "GBP Audit",
    href: "/gbp-audit",
    condition:
      "your business isn&apos;t showing up on Google Maps or in local pack results, or your Google Business Profile feels incomplete and underperforming.",
  },
  {
    audit: "Review Intelligence Audit",
    href: "/review-audit",
    condition:
      "your star rating is below 4.2, you&apos;re getting negative reviews you don&apos;t know how to address, or you suspect your reviews are hurting conversions.",
  },
  {
    audit: "Conversion Funnel Audit",
    href: "/conversion-audit",
    condition:
      "you&apos;re getting traffic but it&apos;s not converting &mdash; visitors are leaving before they buy, book, or sign up.",
  },
];

export default function PackagesPage() {
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
            name: "Packages",
            item: "https://avantevisibility.com/packages",
          },
        ],
      },
      {
        "@type": "Service",
        name: "Digital Visibility Audits & Packages",
        description:
          "Complete catalog of AI visibility, technical SEO, conversion, and competitor intelligence audit services with bundle savings.",
        url: "https://avantevisibility.com/packages",
        provider: {
          "@id": "https://avantevisibility.com/#organization",
        },
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
          { label: "Packages" },
        ]}
      />

      <Hero
        headline="Every Audit & Package We Offer &mdash; All in One Place"
        subheadline="From a quick AI visibility check to a full business intelligence suite, find the right diagnostic for where your business is today. Every audit includes a comprehensive report, prioritized action plan, and a walkthrough call."
        primaryCTA={{
          text: "View Bundle Packages",
          href: "#bundles",
        }}
        secondaryCTA={{
          text: "Book a Free Strategy Call",
          href: CALENDLY_URL,
        }}
        illustration={<HeroIllustration className="w-full h-full" />}
        lastUpdated="March 22, 2026"
      />

      {/* Starter Audits */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-4">
            Starter Audits
          </h2>
          <p className="text-text-muted text-center mb-12 max-w-2xl mx-auto">
            Focused diagnostics for specific visibility challenges. Each stands
            on its own with a comprehensive report and action plan.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {starterAudits.map((audit) => (
              <Link
                key={audit.title}
                href={audit.href}
                className="group block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <audit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-secondary group-hover:text-primary transition-colors">
                  {audit.title}
                </h3>
                <div className="mt-2 text-2xl font-bold text-text-primary">
                  {audit.price}
                </div>
                <p
                  className="mt-2 text-sm text-text-muted leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: audit.description }}
                />
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Learn More{" "}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Audits */}
      <section className="bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-4">
            Advanced Audits
          </h2>
          <p className="text-text-muted text-center mb-12 max-w-2xl mx-auto">
            Deeper diagnostics for businesses ready to invest in comprehensive
            analysis. Full reports with strategic roadmaps and strategy calls.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {advancedAudits.map((audit) => (
              <Link
                key={audit.title}
                href={audit.href}
                className="group block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <audit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-secondary group-hover:text-primary transition-colors">
                  {audit.title}
                </h3>
                <div className="mt-2 text-2xl font-bold text-text-primary">
                  {audit.price}
                </div>
                <p
                  className="mt-2 text-sm text-text-muted leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: audit.description }}
                />
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Learn More{" "}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bundle Packages */}
      <section id="bundles">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-4">
            Bundle Packages &mdash; Save Up to $791
          </h2>
          <p className="text-text-muted text-center mb-12 max-w-2xl mx-auto">
            Combine audits for a more complete picture and save. Every bundle
            includes full reports, action plans, and walkthrough calls.
          </p>

          {/* Starter Bundles */}
          <h3 className="text-xl font-bold text-secondary mb-6 max-w-6xl mx-auto">
            Starter Bundles
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
            <PricingCard
              title="AI + GBP Bundle"
              price="$447"
              description="Combined value $494 &mdash; Save $47"
              features={[
                "AI Visibility Audit",
                "GBP Audit",
                "Both reports + action plans",
                "30-min walkthrough call",
              ]}
              ctaText="Order Bundle"
              ctaHref={STRIPE_LINKS.aiGbpBundle}
            />
            <PricingCard
              title="AI + Review Bundle"
              price="$447"
              description="Combined value $494 &mdash; Save $47"
              features={[
                "AI Visibility Audit",
                "Review Intelligence Audit",
                "Both reports + action plans",
                "30-min walkthrough call",
              ]}
              ctaText="Order Bundle"
              ctaHref={STRIPE_LINKS.aiReviewBundle}
            />
            <PricingCard
              title="Review + GBP Bundle"
              price="$347"
              description="Combined value $394 &mdash; Save $47"
              features={[
                "Review Intelligence Audit",
                "GBP Audit",
                "Both reports + action plans",
                "30-min walkthrough call",
              ]}
              ctaText="Order Bundle"
              ctaHref={STRIPE_LINKS.reviewGbpBundle}
            />
            <PricingCard
              title="Full Digital Visibility"
              price="$597"
              description="Combined value $691 &mdash; Save $94"
              features={[
                "All 3 Audits (AI + Review + GBP)",
                "Complete reports + action plans",
                "Priority delivery 3\u20135 days",
                "30-min walkthrough call per audit",
              ]}
              ctaText="Order Package \u2014 $597"
              ctaHref={STRIPE_LINKS.fullPackage}
              badge="Most Popular"
              highlighted
            />
          </div>

          {/* Advanced Bundles */}
          <h3 className="text-xl font-bold text-secondary mb-6 max-w-6xl mx-auto">
            Advanced Bundles
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <PricingCard
              title="Competitive Edge"
              price="$2,997"
              description="GEO + Competitor Intel &mdash; Save $300"
              features={[
                "Full GEO Audit (28+ AI tests)",
                "Competitor Intelligence Report",
                "Unified strategy across both",
                "Priority delivery",
                "45-min strategy call",
              ]}
              ctaText="Order Bundle"
              ctaHref={STRIPE_LINKS.competitiveEdge}
            />
            <PricingCard
              title="Recovery + GEO"
              price="$3,497"
              description="Algorithm Recovery + GEO &mdash; Save $500"
              features={[
                "Algorithm Recovery Audit",
                "Full GEO Audit (28+ AI tests)",
                "12-point GEO Score",
                "Combined recovery + AI roadmap",
                "Priority delivery",
                "45-min strategy call",
              ]}
              ctaText="Order Bundle"
              ctaHref={STRIPE_LINKS.recoveryGeoBundle}
            />
            <PricingCard
              title="Growth Starter"
              price="$3,997"
              description="GEO + Technical SEO + Speed &mdash; Save $500"
              features={[
                "Full GEO Audit",
                "Technical SEO Audit",
                "Speed & Core Web Vitals Audit",
                "Combined implementation roadmap",
                "Priority delivery",
              ]}
              ctaText="Order Bundle"
              ctaHref={STRIPE_LINKS.growthStarter}
              badge="Best Value"
              highlighted
            />
            <PricingCard
              title="Full Business Intelligence"
              price="$4,997"
              description="GEO + Tech SEO + Competitor + Conversion &mdash; Save $791"
              features={[
                "GEO Audit (AI visibility)",
                "Technical SEO Audit",
                "Competitor Intelligence Report",
                "Conversion Funnel Audit",
                "All reports + action plans",
                "Priority delivery",
              ]}
              ctaText="Order Bundle"
              ctaHref={STRIPE_LINKS.fullBusiness}
            />
          </div>
        </div>
      </section>

      {/* Monthly Plans Teaser */}
      <section className="bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              Need Ongoing AI Visibility? We Have Monthly Plans.
            </h2>
            <p className="text-text-muted leading-relaxed text-lg mb-8">
              AI search results change every month. Our monthly plans track your
              citations, implement fixes, and grow your visibility with data
              proving it&apos;s working. Starting at $1,500/mo with a 3-month
              minimum.
            </p>
            <Link
              href="/monthly-plans"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors text-base"
            >
              View Monthly Plans <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Not Sure Which Audit */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8 text-center">
              Not Sure Which Audit to Start With?
            </h2>
            <div className="space-y-6 mb-10">
              {recommendationBlocks.map((block) => (
                <div
                  key={block.audit}
                  className="bg-white border border-gray-200 rounded-xl p-6"
                >
                  <h3 className="text-lg font-bold text-secondary mb-2">
                    Start with the{" "}
                    <Link
                      href={block.href}
                      className="text-primary hover:underline"
                    >
                      {block.audit}
                    </Link>{" "}
                    if&hellip;
                  </h3>
                  <p
                    className="text-text-muted leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: block.condition }}
                  />
                </div>
              ))}
            </div>
            <div className="text-center">
              <p className="text-text-muted leading-relaxed text-lg mb-6">
                Not sure? Book a free 20-minute strategy call and we&apos;ll
                help you figure out where to start based on your specific
                situation.
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
        </div>
      </section>

      <CTASection
        headline="Ready to Get Completely Visible?"
        buttonText="Order Full Business Intelligence Bundle &mdash; $4,997"
        buttonHref={STRIPE_LINKS.fullBusiness}
        secondaryButtonText="Book a Free Strategy Call"
        secondaryButtonHref={CALENDLY_URL}
        showContact
      />
    </>
  );
}
