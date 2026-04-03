import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import HeroIllustration from "@/components/HeroIllustration";
import Breadcrumb from "@/components/Breadcrumb";
import PricingCard from "@/components/PricingCard";
import CTASection from "@/components/CTASection";
import { Check, ArrowRight, Brain, Star, MapPin, Megaphone } from "lucide-react";

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
};

export const metadata: Metadata = {
  title: "Digital Visibility Packages & Pricing",
  description:
    "Bundle AI visibility, review intelligence, and GBP audits to save up to $94. Full Digital Visibility Package starts at $597. See all audit packages and pricing.",
  openGraph: {
    title: "Digital Visibility Packages & Pricing",
    description:
      "Bundle AI visibility, review intelligence, and GBP audits to save up to $94. Full Digital Visibility Package starts at $597. See all audit packages and pricing.",
  },
};

const individualAudits = [
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

const recommendationBlocks = [
  {
    audit: "AI Visibility Audit",
    href: "/ai-visibility-audit",
    condition:
      "you&apos;re concerned about the shift to AI-powered search and want to know whether ChatGPT, Perplexity, or Google AI Overviews are recommending your competitors instead of you.",
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
        name: "Full Digital Visibility Package",
        description:
          "Complete digital visibility audit bundle including AI Visibility Audit, Review Intelligence Audit, and Google Business Profile Audit with priority delivery and walkthrough calls.",
        url: "https://avantevisibility.com/packages",
        provider: {
          "@id": "https://avantevisibility.com/#organization",
        },
        offers: {
          "@type": "Offer",
          price: "597",
          priceCurrency: "USD",
          url: "https://avantevisibility.com/packages",
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
        headline="Digital Visibility Packages: Everything Your Business Needs to Get Found"
        subheadline="Your online visibility is a system, not a single thing. AI search, Google reviews, and your Google Business Profile are interconnected &mdash; a weakness in one limits the performance of all three. Our bundle packages address your entire digital presence in one coordinated effort, at a price that reflects the full picture."
        primaryCTA={{
          text: "Order Full Digital Visibility Package \u2014 $597",
          href: STRIPE_LINKS.fullPackage,
        }}
        secondaryCTA={{
          text: "Book a Free Strategy Call",
          href: CALENDLY_URL,
        }}
        illustration={<HeroIllustration className="w-full h-full" />}
      />

      {/* Individual Audits */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-4">
            Individual Audits
          </h2>
          <p className="text-text-muted text-center mb-12 max-w-2xl mx-auto">
            Need just one audit? Each service stands on its own with a
            comprehensive report and action plan.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {individualAudits.map((audit) => (
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
      <section className="bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-4">
            Bundle Packages
          </h2>
          <p className="text-text-muted text-center mb-12 max-w-2xl mx-auto">
            Save when you combine audits. Every bundle includes full reports,
            action plans, and a walkthrough call.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <PricingCard
              title="AI + GBP Bundle"
              price="$447"
              description="Combined value $494"
              features={[
                "AI Visibility Audit",
                "GBP Audit",
                "Both reports + action plans",
                "30-min walkthrough call",
              ]}
              ctaText="Order AI + GBP Bundle"
              ctaHref={STRIPE_LINKS.aiGbpBundle}
            />
            <PricingCard
              title="AI + Review Bundle"
              price="$447"
              description="Combined value $494"
              features={[
                "AI Visibility Audit",
                "Review Intelligence Audit",
                "Both reports + action plans",
                "30-min walkthrough call",
              ]}
              ctaText="Order AI + Review Bundle"
              ctaHref={STRIPE_LINKS.aiReviewBundle}
            />
            <PricingCard
              title="Review + GBP Bundle"
              price="$347"
              description="Combined value $394"
              features={[
                "Review Intelligence Audit",
                "GBP Audit",
                "Both reports + action plans",
                "30-min walkthrough call",
              ]}
              ctaText="Order Review + GBP Bundle"
              ctaHref={STRIPE_LINKS.reviewGbpBundle}
            />
            <PricingCard
              title="Full Digital Visibility Package"
              price="$597"
              description="Combined value $691"
              features={[
                "All 3 Audits (AI + Review + GBP)",
                "Complete reports + action plans",
                "Priority delivery 3\u20135 days",
                "30-min walkthrough call per audit",
              ]}
              ctaText="Order Full Package \u2014 $597"
              ctaHref={STRIPE_LINKS.fullPackage}
              badge="Most Popular"
              highlighted
            />
          </div>
        </div>
      </section>

      {/* Featured Package */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              Most Popular: Full Digital Visibility Package &mdash; $597
            </h2>
            <p className="text-text-muted leading-relaxed text-lg mb-4">
              Most visibility problems don&apos;t live in just one place. A weak
              Google Business Profile drags down your local search rankings. Poor
              reviews erode the trust signals that AI platforms rely on when
              deciding who to recommend. And if AI systems can&apos;t find or
              understand your business, you&apos;re invisible to a growing share of
              your potential customers.
            </p>
            <p className="text-text-muted leading-relaxed text-lg mb-8">
              The Full Digital Visibility Package addresses all three layers at
              once, so the improvements compound rather than compete. You get a
              complete picture of your digital presence &mdash; and a single,
              coordinated plan to fix it.
            </p>
            <div className="bg-white border border-gray-200 rounded-xl p-8 mb-8">
              <h3 className="text-xl font-bold text-secondary mb-6">
                What&apos;s Included
              </h3>
              <ul className="space-y-4">
                {[
                  "AI Visibility Audit",
                  "Review Intelligence Audit",
                  "Google Business Profile Audit",
                  "30-Minute Walkthrough Call for each audit",
                  "Priority delivery \u2014 3\u20135 business days",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-text-primary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
              <p className="text-text-primary leading-relaxed text-lg">
                <span className="font-bold text-secondary">Total value: $691.</span>{" "}
                Your investment:{" "}
                <span className="font-bold text-secondary">$597.</span>{" "}
                You save{" "}
                <span className="font-bold text-accent">$94.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Not Sure Which Audit */}
      <section className="bg-bg-alt">
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
        buttonText="Order Full Digital Visibility Package &mdash; $597"
        buttonHref={STRIPE_LINKS.fullPackage}
        secondaryButtonText="Book a Free Strategy Call"
        secondaryButtonHref={CALENDLY_URL}
        showContact
      />
    </>
  );
}
