import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import HeroIllustration from "@/components/HeroIllustration";
import Breadcrumb from "@/components/Breadcrumb";
import FAQAccordion from "@/components/FAQAccordion";
import PricingCard from "@/components/PricingCard";
import CTASection from "@/components/CTASection";
import {
  Calendar,
  FileWarning,
  FileText,
  Copy,
  Link2,
  Users,
  Route,
} from "lucide-react";

const CALENDLY_URL = "https://calendly.com/avantevisibility";

const STRIPE_LINKS = {
  algorithmRecovery: "https://buy.stripe.com/9B6eVd60maFqdML3wbgjC0c",
  recoveryGeoBundle: "https://buy.stripe.com/cNi4gzcoKcNy4cbaYDgjC0k",
};

export const metadata: Metadata = {
  title: "Algorithm Recovery Audit | Recover Lost Traffic After a Google Update",
  description:
    "Lost traffic after a Google algorithm update? Our Algorithm Recovery Audit pinpoints what changed, which pages were affected, and delivers a prioritized recovery plan. $1,497.",
  openGraph: {
    title: "Algorithm Recovery Audit | Recover Lost Traffic After a Google Update",
    description:
      "Lost traffic after a Google algorithm update? Our Algorithm Recovery Audit pinpoints what changed, which pages were affected, and delivers a prioritized recovery plan. $1,497.",
    images: [
      {
        url: "https://avantevisibility.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Algorithm Recovery Audit | Recover Lost Traffic After a Google Update",
      },
    ],
  },
};

const auditItems = [
  {
    number: 1,
    icon: Calendar,
    title: "Timeline Impact Analysis",
    description:
      "Map every traffic drop to the specific Google update that caused it, with before/after data for each event.",
  },
  {
    number: 2,
    icon: FileWarning,
    title: "Page-Level Damage Assessment",
    description:
      "Identify exactly which pages lost traffic, how much they lost, and what they had in common.",
  },
  {
    number: 3,
    icon: FileText,
    title: "Content Quality Evaluation",
    description:
      "Assess affected content against current Google Helpful Content and E-E-A-T guidelines to find quality gaps.",
  },
  {
    number: 4,
    icon: Copy,
    title: "Thin & Duplicate Content Detection",
    description:
      "Identify pages with insufficient depth, duplicate content, or auto-generated patterns that trigger quality filters.",
  },
  {
    number: 5,
    icon: Link2,
    title: "Link Profile Health Check",
    description:
      "Analyze your backlink profile for toxic links, unnatural patterns, or lost high-value links that may have contributed to the drop.",
  },
  {
    number: 6,
    icon: Users,
    title: "Competitor Gap Analysis",
    description:
      "Compare your affected pages against competitors who gained the traffic you lost &mdash; what are they doing differently?",
  },
  {
    number: 7,
    icon: Route,
    title: "Recovery Roadmap",
    description:
      "Step-by-step recovery plan prioritized by expected impact, with projected recovery timeline.",
  },
];

const faqItems = [
  {
    question: "How do I know if I was hit by an algorithm update?",
    answer:
      "The clearest sign is a sudden, significant drop in organic traffic that coincides with a known Google update date. If your traffic dropped 20%+ within a few days and hasn\u2019t recovered, it\u2019s very likely algorithm-related. Our audit maps your traffic patterns against every major update to confirm exactly which update affected you.",
  },
  {
    question: "How long does recovery take?",
    answer:
      "It depends on the severity and type of penalty. Content quality issues typically take 2-4 months to recover from once fixes are implemented. Technical issues can recover faster \u2014 sometimes within weeks. Link-related penalties often take 3-6 months. Our audit gives you a realistic timeline based on your specific situation.",
  },
  {
    question: "Can you guarantee I'll recover my traffic?",
    answer:
      "We cannot guarantee specific traffic numbers because Google\u2019s algorithms are complex and continuously evolving. What we guarantee is a thorough diagnosis of what went wrong and a proven recovery methodology. Most clients who fully implement our recommendations see significant traffic recovery within 3-6 months.",
  },
  {
    question: "What do I receive?",
    answer:
      "A comprehensive recovery audit with timeline analysis, page-level impact data, content quality assessments, link profile analysis, competitor comparison, and a prioritized recovery roadmap with projected timelines. Delivered within 5-7 business days with a 45-minute strategy call.",
  },
];

export default function AlgorithmRecoveryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Algorithm Recovery Audit",
        alternateName: [
          "Google Algorithm Recovery Audit",
          "SEO Recovery Audit",
          "Google Update Recovery",
        ],
        description:
          "In-depth algorithm recovery audit that maps traffic drops to specific Google updates, identifies affected pages, evaluates content quality, and delivers a prioritized recovery roadmap.",
        url: "https://avantevisibility.com/algorithm-recovery",
        provider: {
          "@id": "https://avantevisibility.com/#organization",
        },
        offers: {
          "@type": "Offer",
          price: "1497",
          priceCurrency: "USD",
          url: "https://avantevisibility.com/algorithm-recovery",
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
            name: "Algorithm Recovery Audit",
            item: "https://avantevisibility.com/algorithm-recovery",
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
          { label: "Algorithm Recovery Audit" },
        ]}
      />

      <Hero
        headline="Lost Traffic After a Google Update? Here&apos;s How to Get It Back."
        subheadline="Google algorithm updates can wipe out months of growth overnight. Our Algorithm Recovery Audit pinpoints exactly what changed, which pages were affected, and why. Then we give you the specific recovery plan &mdash; prioritized by impact &mdash; to rebuild your traffic."
        primaryCTA={{
          text: "Order Recovery Audit \u2014 $1,497",
          href: STRIPE_LINKS.algorithmRecovery,
        }}
        secondaryCTA={{
          text: "See What's Included",
          href: "#what-it-covers",
        }}
        illustration={<HeroIllustration className="w-full h-full" />}
        lastUpdated="March 10, 2026"
      />

      {/* Definition Block */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl mx-auto bg-primary/5 border border-primary/15 rounded-xl p-6 md:p-8">
            <h2 className="text-lg font-bold text-secondary mb-2">What is an Algorithm Recovery Audit?</h2>
            <p className="text-text-muted leading-relaxed">
              An <strong>algorithm recovery audit</strong> is a forensic analysis of your website&apos;s traffic and ranking data following a Google core update. It identifies which pages were affected, what quality signals triggered the decline, and whether the issue is content-related, technical, or link-based &mdash; then delivers a prioritized recovery plan to restore your rankings and traffic.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem / Stats Section */}
      <section className="bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              Algorithm Updates Don&apos;t Have to Be a Death Sentence
            </h2>
            <p className="text-text-muted leading-relaxed text-lg mb-8">
              Google rolls out core updates multiple times a year, and each one
              can reshape rankings overnight. But most traffic losses are
              recoverable &mdash; if you diagnose the problem correctly. The
              issue is that most businesses guess at what went wrong instead of
              running the data.
            </p>
            <div className="space-y-4 mb-8">
              {[
                {
                  stat: "Google ships 4-6 major core updates per year",
                  detail:
                    "each one capable of reshaping rankings across entire industries",
                },
                {
                  stat: "Most affected sites never fully recover",
                  detail:
                    "not because recovery is impossible, but because they never identify the real cause",
                },
                {
                  stat: "The window to recover shrinks over time",
                  detail:
                    "each subsequent update can compound losses if the root issues aren&apos;t addressed",
                },
                {
                  stat: "Recovery is fastest with a data-driven plan",
                  detail:
                    "sites that map losses to specific causes and prioritize fixes by impact recover 2&ndash;3x faster",
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
              Our Algorithm Recovery Audit eliminates the guesswork. We map
              every drop to the specific update, identify exactly which pages
              were hit and why, and give you a prioritized plan to rebuild.
            </p>
          </div>
        </div>
      </section>

      {/* What the Audit Covers */}
      <section id="what-it-covers">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-4">
            What Your Algorithm Recovery Audit Covers
          </h2>
          <p className="text-text-muted text-center mb-12 max-w-2xl mx-auto">
            A comprehensive analysis of every factor that may have contributed
            to your traffic loss, with a clear path to recovery.
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

      {/* How It Works */}
      <section className="bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8">
              How the Recovery Process Works
            </h2>
            <p className="text-text-muted leading-relaxed mb-8">
              We follow a proven diagnostic methodology that treats algorithm
              recovery like a root-cause investigation, not a guessing game.
            </p>
            <div className="space-y-4">
              {[
                {
                  number: 1,
                  title: "Map the Timeline",
                  description:
                    "We overlay your traffic data with every Google update to pinpoint exactly when and where the drops occurred.",
                },
                {
                  number: 2,
                  title: "Identify the Pattern",
                  description:
                    "We analyze which pages were affected and what they have in common \u2014 content type, topic, link profile, or technical issues.",
                },
                {
                  number: 3,
                  title: "Diagnose the Cause",
                  description:
                    "Using the pattern data, we determine whether the drop was caused by content quality, thin content, link issues, technical problems, or a combination.",
                },
                {
                  number: 4,
                  title: "Build the Recovery Plan",
                  description:
                    "Every fix is prioritized by expected impact and effort, so you know exactly what to tackle first for the fastest recovery.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200"
                >
                  <div className="flex items-center justify-center w-8 h-8 bg-accent text-white rounded-full font-bold text-sm shrink-0">
                    {item.number}
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
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
            Choose the standalone audit or bundle with our GEO Audit to recover
            and get ahead of AI search at the same time.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <PricingCard
              title="Algorithm Recovery Audit"
              price="$1,497"
              description="Complete algorithm recovery diagnostic"
              features={[
                "Timeline impact analysis",
                "Page-level damage assessment",
                "Content quality evaluation",
                "Thin & duplicate content detection",
                "Link profile health check",
                "Competitor gap analysis",
                "Prioritized recovery roadmap",
                "Delivered in 5-7 business days",
                "45-min strategy call",
              ]}
              ctaText="Order Recovery Audit \u2014 $1,497"
              ctaHref={STRIPE_LINKS.algorithmRecovery}
              highlighted
              badge="Most Popular"
            />
            <PricingCard
              title="Recovery + GEO Bundle"
              price="$3,497"
              description="Algorithm Recovery + GEO Audit &mdash; Save $500"
              features={[
                "Everything in the Recovery Audit",
                "Full GEO Audit (28+ AI query tests)",
                "12-point GEO Score",
                "AI citation benchmarking",
                "Combined recovery + AI visibility roadmap",
                "Priority delivery",
                "45-min strategy call",
              ]}
              ctaText="Order Bundle \u2014 $3,497"
              ctaHref={STRIPE_LINKS.recoveryGeoBundle}
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
              href="/geo-audit"
              className="group block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all"
            >
              <h3 className="text-lg font-bold text-secondary group-hover:text-primary transition-colors">
                GEO Audit
              </h3>
              <p className="mt-2 text-sm text-text-muted">
                See what AI says when customers search for what you sell. Full
                generative engine optimization diagnostic. $2,500.
              </p>
            </Link>
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
        headline="Ready to Recover Your Lost Traffic?"
        description="Stop guessing why your traffic dropped. Get a data-driven diagnosis and a prioritized recovery plan built for your specific situation."
        buttonText="Order Recovery Audit \u2014 $1,497"
        buttonHref={STRIPE_LINKS.algorithmRecovery}
        secondaryButtonText="Learn About the GEO Audit"
        secondaryButtonHref="/geo-audit"
        showContact
      />
    </>
  );
}
