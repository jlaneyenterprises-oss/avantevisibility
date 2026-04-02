import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import HeroIllustration from "@/components/HeroIllustration";
import Breadcrumb from "@/components/Breadcrumb";
import FAQAccordion from "@/components/FAQAccordion";
import PricingCard from "@/components/PricingCard";
import CTASection from "@/components/CTASection";
import {
  GitBranch,
  Layout,
  MousePointerClick,
  ShieldCheck,
  Smartphone,
  Users,
  FlaskConical,
  TrendingUp,
  Target,
  DollarSign,
  ArrowRight,
} from "lucide-react";

const CALENDLY_URL = "https://calendly.com/avantevisibility";

export const metadata: Metadata = {
  title: "Conversion Funnel Audit | Increase Your Website Conversion Rate",
  description:
    "You're getting traffic but they're not buying. Our Conversion Funnel Audit traces every step from landing page to conversion and identifies where you're losing customers. $997.",
  openGraph: {
    title: "Conversion Funnel Audit | Increase Your Website Conversion Rate",
    description:
      "You're getting traffic but they're not buying. Our Conversion Funnel Audit traces every step from landing page to conversion and identifies where you're losing customers. $997.",
  },
};

const auditItems = [
  {
    number: 1,
    icon: GitBranch,
    title: "Full Funnel Mapping",
    description:
      "We trace every step from landing page to conversion, identifying where visitors drop off and why.",
  },
  {
    number: 2,
    icon: Layout,
    title: "Landing Page Effectiveness",
    description:
      "Above-the-fold analysis, headline clarity, value proposition positioning, and first-impression scoring.",
  },
  {
    number: 3,
    icon: MousePointerClick,
    title: "CTA & Form Analysis",
    description:
      "Button placement, copy effectiveness, form length optimization, and friction point identification.",
  },
  {
    number: 4,
    icon: ShieldCheck,
    title: "Trust Signal Assessment",
    description:
      "Testimonials, reviews, security badges, guarantees, and social proof placement evaluation.",
  },
  {
    number: 5,
    icon: Smartphone,
    title: "Mobile Conversion Path",
    description:
      "Separate analysis of the mobile user journey since mobile visitors convert differently than desktop.",
  },
  {
    number: 6,
    icon: Users,
    title: "Competitor Conversion Comparison",
    description:
      "How your conversion elements stack up against 2&ndash;3 direct competitors.",
  },
  {
    number: 7,
    icon: FlaskConical,
    title: "A/B Test Recommendations",
    description:
      "Specific, prioritized test ideas ranked by estimated revenue impact.",
  },
];

const faqItems = [
  {
    question: "What data do you need from me?",
    answer:
      "We need access to your Google Analytics (or similar analytics platform) to see actual traffic and conversion data. We also need to know your primary conversion goals \u2014 whether that\u2019s form submissions, purchases, phone calls, or bookings. The more data we have, the more specific our recommendations.",
  },
  {
    question: "Will this tell me why my ads aren\u2019t converting?",
    answer:
      "Yes. If you\u2019re running paid ads, we trace the full journey from ad click to conversion. We often find that the ads are fine but the landing page experience is where conversions break down \u2014 unclear value props, too much friction, weak trust signals, or poor mobile experience.",
  },
  {
    question:
      "How much can conversion rate improvements actually impact revenue?",
    answer:
      "Even small conversion rate improvements have outsized effects. If your site converts at 2% and we help you reach 3%, that\u2019s a 50% increase in revenue from the same traffic. For most businesses, improving conversions is the fastest path to more revenue without spending more on ads.",
  },
  {
    question: "What do I receive?",
    answer:
      "A detailed conversion audit report with annotated screenshots of your funnel, specific fix recommendations for each drop-off point, competitor comparisons, and prioritized A/B test ideas with estimated revenue impact. Delivered within 3\u20135 business days with a 30-minute walkthrough call.",
  },
];

const conversionMath = [
  {
    icon: TrendingUp,
    label: "Current: 2% conversion rate",
    detail: "100 visitors = 2 customers",
  },
  {
    icon: Target,
    label: "After audit fixes: 3% conversion rate",
    detail: "100 visitors = 3 customers",
  },
  {
    icon: DollarSign,
    label: "Result: 50% more revenue",
    detail: "Same traffic. Same ad spend. More customers.",
  },
];

export default function ConversionAuditPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Conversion Funnel Audit",
        alternateName: [
          "Conversion Rate Optimization Audit",
          "CRO Audit",
          "Website Conversion Audit",
        ],
        description:
          "Comprehensive conversion funnel audit that traces every step from landing page to conversion, identifies drop-off points, and delivers prioritized fixes to improve your conversion rate.",
        url: "https://avantevisibility.com/conversion-audit",
        provider: {
          "@type": "Organization",
          name: "Avante Visibility",
          url: "https://avantevisibility.com",
        },
        offers: {
          "@type": "Offer",
          price: "997",
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
            name: "Conversion Funnel Audit",
            item: "https://avantevisibility.com/conversion-audit",
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
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Conversion Funnel Audit" },
        ]}
      />

      {/* Hero */}
      <Hero
        headline="You&apos;re Getting Traffic. Why Aren&apos;t They Buying?"
        subheadline="Traffic without conversions is just expensive window shopping. Our Conversion Funnel Audit follows the exact path your visitors take &mdash; from first click to final action &mdash; and identifies every point where you&apos;re losing them. Most businesses find 3&ndash;5 quick fixes that immediately improve conversion rates."
        primaryCTA={{
          text: "Get My Conversion Audit \u2014 $997",
          href: CALENDLY_URL,
        }}
        secondaryCTA={{
          text: "Book a Free Strategy Call First",
          href: CALENDLY_URL,
        }}
        illustration={<HeroIllustration className="w-full h-full" />}
      />

      {/* The Problem Section */}
      <section className="bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              The Most Expensive Problem in Digital Marketing
            </h2>
            <p className="text-text-muted leading-relaxed text-lg mb-8">
              You&apos;re spending money to drive traffic to your website. SEO,
              paid ads, social media &mdash; it&apos;s all working. People are
              landing on your site. But then they leave without buying, without
              filling out a form, without calling. The traffic is there. The
              conversions are not.
            </p>
            <p className="text-text-muted leading-relaxed text-lg mb-8">
              A <strong>conversion funnel audit</strong> answers the question
              every business owner asks: &ldquo;Why am I getting traffic but not
              sales?&rdquo; The answer is almost always the same &mdash;
              something in the journey between &ldquo;landing on your site&rdquo;
              and &ldquo;becoming a customer&rdquo; is broken. Our job is to find
              exactly where it breaks and tell you how to fix it.
            </p>
            <div className="space-y-4">
              {conversionMath.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-secondary">{item.label}</p>
                    <p className="text-sm text-text-muted">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What the Audit Covers */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-4">
            What Your Conversion Funnel Audit Covers
          </h2>
          <p className="text-text-muted text-center mb-12 max-w-2xl mx-auto">
            A systematic examination of every step in your conversion path,
            from first impression to final action.
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

      {/* Why Conversions Break */}
      <section className="bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8">
              The 5 Most Common Reasons Conversions Break
            </h2>
            <p className="text-text-muted leading-relaxed mb-8">
              After auditing hundreds of conversion funnels, we see the same
              patterns over and over. Most businesses have at least 2&ndash;3
              of these issues:
            </p>
            <div className="space-y-4">
              {[
                {
                  number: 1,
                  title: "Unclear Value Proposition",
                  description:
                    "Visitors land on your page and can't immediately understand what you offer, who it's for, or why they should care. If they don't get it in 5 seconds, they leave.",
                },
                {
                  number: 2,
                  title: "Too Much Friction",
                  description:
                    "Long forms, required account creation, confusing navigation, too many steps between interest and action. Every extra click is another chance to lose them.",
                },
                {
                  number: 3,
                  title: "Weak or Missing Trust Signals",
                  description:
                    "No testimonials, no reviews, no security badges, no guarantees. Visitors need to trust you before they hand over their information or money.",
                },
                {
                  number: 4,
                  title: "Broken Mobile Experience",
                  description:
                    "Your site looks great on desktop but the mobile experience is frustrating. Over 60% of traffic is mobile, and mobile users have even less patience for friction.",
                },
                {
                  number: 5,
                  title: "Mismatched Expectations",
                  description:
                    "What your ad or search listing promises doesn't match what the landing page delivers. This disconnect kills trust instantly and sends visitors straight to the back button.",
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

      {/* What You Get */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              What You Get in Your Audit Report
            </h2>
            <p className="text-text-muted leading-relaxed text-lg mb-8">
              This isn&apos;t a generic checklist. Every audit is custom to your
              specific funnel, your traffic sources, and your conversion goals.
              Here&apos;s what the final deliverable includes:
            </p>
            <div className="space-y-4">
              {[
                "Annotated screenshots of every step in your conversion funnel with specific issues highlighted",
                "Drop-off analysis showing exactly where and why visitors are leaving",
                "Side-by-side competitor comparison of conversion elements",
                "Prioritized fix list ranked by estimated revenue impact (quick wins first)",
                "A/B test roadmap with specific hypotheses, variations, and expected outcomes",
                "Mobile-specific recommendations separate from desktop findings",
                "30-minute video walkthrough call to review every finding together",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <ArrowRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-text-primary leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
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
            written report and a 30-minute walkthrough call.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <PricingCard
              title="Conversion Funnel Audit (Solo)"
              price="$997"
              description="Full conversion audit for one website or funnel"
              features={[
                "Full funnel mapping and drop-off analysis",
                "Landing page effectiveness review",
                "CTA and form friction audit",
                "Trust signal assessment",
                "Mobile conversion path analysis",
                "Competitor conversion comparison",
                "Prioritized A/B test recommendations",
                "30-min walkthrough call",
              ]}
              ctaText="Get My Conversion Audit"
              ctaHref={CALENDLY_URL}
            />
            <PricingCard
              title="Full Business Intelligence Bundle"
              price="$4,997"
              description="GEO + Technical SEO + Competitor Intel + Conversion Audit &mdash; save $791"
              features={[
                "AI Visibility (GEO) Audit",
                "Technical SEO Audit",
                "Competitor Intelligence Report",
                "Conversion Funnel Audit",
                "All reports + action plans",
                "Priority delivery",
                "30-min walkthrough call",
              ]}
              ctaText="Get the Full Bundle"
              ctaHref={CALENDLY_URL}
              badge="Best Value"
              highlighted
            />
          </div>
          <p className="text-center text-sm text-text-muted mt-8">
            Delivery: 3&ndash;5 business days. Includes a 30-minute
            walkthrough call.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-12">
            Frequently Asked Questions About Conversion Audits
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
            Strengthen Your Full Digital Presence
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
                Find out if AI platforms are recommending you &mdash; or sending
                customers to your competitors.
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
                Your reviews shape trust signals. Discover what they&apos;re
                really telling potential customers.
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
                Bundle all audits together and save with our most comprehensive
                package.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        headline="Stop Losing Customers at the Finish Line"
        description="Your traffic is proof that people are interested. The conversion funnel audit shows you exactly where that interest dies and how to keep it alive all the way to the sale."
        buttonText="Get My Conversion Audit &mdash; $997"
        buttonHref={CALENDLY_URL}
        secondaryButtonText="Book a Free Strategy Call First"
        secondaryButtonHref={CALENDLY_URL}
        showContact
      />
    </>
  );
}
