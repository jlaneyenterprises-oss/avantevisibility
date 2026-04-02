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
  BarChart3,
  Code,
  FileText,
  Smartphone,
  Shield,
  Link2,
  ListChecks,
  Check,
  Gauge,
  Bug,
  ServerCrash,
} from "lucide-react";

const CALENDLY_URL = "https://calendly.com/avantevisibility";

export const metadata: Metadata = {
  title: "Technical SEO Audit | Site Speed, Schema & Crawl Error Analysis",
  description:
    "Comprehensive technical SEO audit covering site crawl analysis, Core Web Vitals, schema markup, mobile optimization, security headers, and internal linking. $997 with 3-5 day turnaround.",
  openGraph: {
    title: "Technical SEO Audit | Site Speed, Schema & Crawl Error Analysis",
    description:
      "Comprehensive technical SEO audit covering site crawl analysis, Core Web Vitals, schema markup, mobile optimization, security headers, and internal linking. $997 with 3-5 day turnaround.",
  },
};

const auditItems = [
  {
    number: 1,
    icon: Search,
    title: "Full Site Crawl Analysis",
    description:
      "Indexability check, crawl errors, broken links, redirect chains, and orphaned pages across your entire site.",
  },
  {
    number: 2,
    icon: BarChart3,
    title: "Core Web Vitals Assessment",
    description:
      "LCP, CLS, and INP scores for both mobile and desktop with specific optimization recommendations.",
  },
  {
    number: 3,
    icon: Code,
    title: "Schema Markup Validation",
    description:
      "Audit of all existing structured data plus identification of missing schema types for your business.",
  },
  {
    number: 4,
    icon: FileText,
    title: "Sitemap & Robots.txt Review",
    description:
      "Verify your sitemap is complete, properly formatted, and that robots.txt isn&apos;t blocking important content.",
  },
  {
    number: 5,
    icon: Smartphone,
    title: "Mobile Optimization",
    description:
      "Mobile-first analysis covering responsive design, touch targets, viewport settings, and mobile page speed.",
  },
  {
    number: 6,
    icon: Shield,
    title: "Security & Headers Check",
    description:
      "HTTPS verification, mixed content detection, security headers, and content security policy review.",
  },
  {
    number: 7,
    icon: Link2,
    title: "Internal Linking Analysis",
    description:
      "Site architecture assessment, link equity distribution, and opportunities to strengthen page authority.",
  },
  {
    number: 8,
    icon: ListChecks,
    title: "Prioritized Fix List",
    description:
      "Every issue ranked by impact and effort so you know exactly what to tackle first.",
  },
];

const whyItMatters = [
  {
    icon: Gauge,
    text: "A 1-second delay in page load time reduces conversions by 7%. Core Web Vitals are now a confirmed ranking factor for both Google Search and AI Overviews.",
  },
  {
    icon: Bug,
    text: "Crawl errors and broken links silently erode your site&apos;s authority. Search engines and AI crawlers can&apos;t recommend pages they can&apos;t reach.",
  },
  {
    icon: Code,
    text: "Missing or invalid schema markup means search engines and AI platforms are guessing about your business instead of understanding it with certainty.",
  },
  {
    icon: ServerCrash,
    text: "Security issues and missing headers don&apos;t just put your visitors at risk &mdash; they send negative trust signals to every search algorithm that evaluates your site.",
  },
  {
    icon: Smartphone,
    text: "Over 60% of web traffic is mobile. A site that isn&apos;t fully optimized for mobile is invisible to the majority of your potential customers.",
  },
];

const faqItems = [
  {
    question:
      "What's the difference between this and a regular SEO audit?",
    answer:
      "Most SEO audits focus on keywords and content. Our Technical SEO Audit focuses on the infrastructure — the crawlability, speed, security, and structure that determine whether search engines and AI platforms can even access and understand your content. Think of it as the foundation inspection before you renovate.",
  },
  {
    question: "Do I need this if I already have good rankings?",
    answer:
      "Rankings can mask technical debt. Sites with strong content often have underlying technical issues that limit their full potential — slow mobile speed, broken schema, crawl inefficiencies, or security gaps. These issues become critical as AI platforms increasingly factor technical signals into citation decisions.",
  },
  {
    question: "What do I receive?",
    answer:
      "A comprehensive written report covering every technical dimension of your site, with specific fix instructions prioritized by impact. Delivered within 3-5 business days, followed by a 30-minute walkthrough call.",
  },
  {
    question: "Can you implement the fixes too?",
    answer:
      "Yes. After the audit, you can move to one of our monthly plans where we implement the technical fixes and monitor ongoing performance. Many clients start with the audit to understand the full scope, then engage us for implementation.",
  },
];

export default function TechnicalSEOAuditPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Technical SEO Audit",
        description:
          "Comprehensive technical SEO audit covering full site crawl analysis, Core Web Vitals, schema markup validation, mobile optimization, security headers, internal linking, and a prioritized fix list.",
        url: "https://avantevisibility.com/technical-seo-audit",
        provider: {
          "@id": "https://avantevisibility.com/#organization",
        },
        offers: {
          "@type": "Offer",
          price: "997",
          priceCurrency: "USD",
          url: "https://avantevisibility.com/technical-seo-audit",
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
            name: "Technical SEO Audit",
            item: "https://avantevisibility.com/technical-seo-audit",
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
          { label: "Technical SEO Audit" },
        ]}
      />

      <Hero
        headline="The Technical Foundation That Makes Everything Else Work"
        subheadline="AI visibility, rankings, and conversions all depend on a technically sound website. Our Technical SEO Audit crawls your entire site and identifies every issue holding you back &mdash; from slow page speed to broken schema to crawl errors that search engines and AI platforms can&apos;t get past."
        primaryCTA={{
          text: "Book a Strategy Call \u2014 $997",
          href: CALENDLY_URL,
        }}
        secondaryCTA={{
          text: "See What\u2019s Included",
          href: "#what-the-audit-covers",
        }}
        illustration={<HeroIllustration className="w-full h-full" />}
      />

      {/* Why Technical SEO Matters */}
      <section className="bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              Why Technical SEO Is the Foundation
            </h2>
            <p className="text-text-muted leading-relaxed text-lg mb-8">
              You can have the best content, the strongest brand, and the most
              compelling offer in your market &mdash; but if search engines and
              AI platforms can&apos;t crawl, render, and understand your site,
              none of it matters. Technical SEO is the infrastructure layer that
              everything else depends on.
            </p>
            <ul className="space-y-4">
              {whyItMatters.map((item) => (
                <li
                  key={item.text}
                  className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p
                    className="text-text-primary leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: item.text }}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* What the Audit Covers */}
      <section id="what-the-audit-covers">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-4">
            What Your Technical SEO Audit Covers
          </h2>
          <p className="text-text-muted text-center mb-12 max-w-2xl mx-auto">
            A complete examination of every technical factor that affects your
            search visibility and AI discoverability.
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

      {/* What You Get */}
      <section className="bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              What You Receive
            </h2>
            <p className="text-text-muted leading-relaxed text-lg mb-8">
              This isn&apos;t a generic scan. Every finding is manually reviewed
              and contextualized for your specific business and goals.
            </p>
            <div className="bg-white border border-gray-200 rounded-xl p-8 mb-8">
              <ul className="space-y-4">
                {[
                  "Comprehensive written report covering all 8 audit dimensions",
                  "Specific fix instructions for every issue identified",
                  "Issues prioritized by impact and implementation effort",
                  "Core Web Vitals scores with before/after optimization targets",
                  "Schema markup recommendations tailored to your business type",
                  "30-minute walkthrough call to review findings together",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-text-primary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
              <p className="text-text-primary leading-relaxed">
                <span className="font-bold text-secondary">
                  Turnaround: 3&ndash;5 business days.
                </span>{" "}
                Your report is followed by a 30-minute walkthrough call where we
                review every finding and answer your questions about
                implementation priorities.
              </p>
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
            Choose the option that fits your needs. Every option starts with a
            strategy call to scope the work for your site.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard
              title="Technical SEO Audit (Solo)"
              price="$997"
              description="Full audit + written report + action plan"
              features={[
                "Full site crawl analysis",
                "Core Web Vitals assessment",
                "Schema markup validation",
                "Mobile optimization review",
                "Security & headers check",
                "Internal linking analysis",
                "Prioritized fix list",
                "30-min walkthrough call",
              ]}
              ctaText="Book a Strategy Call"
              ctaHref={CALENDLY_URL}
            />
            <PricingCard
              title="Growth Starter Bundle"
              price="$3,997"
              description="GEO + Technical SEO + Speed Optimization (save $500)"
              features={[
                "GEO Audit (AI visibility)",
                "Technical SEO Audit",
                "Speed Optimization",
                "All reports + action plans",
                "Walkthrough call per audit",
                "Priority delivery",
              ]}
              ctaText="Book a Strategy Call"
              ctaHref={CALENDLY_URL}
              badge="Best Value"
              highlighted
            />
            <PricingCard
              title="Full Business Intelligence"
              price="$4,997"
              description="GEO + Technical SEO + Competitor Intel + Conversion Audit (save $791)"
              features={[
                "GEO Audit (AI visibility)",
                "Technical SEO Audit",
                "Competitor Intelligence Audit",
                "Conversion Audit",
                "All reports + action plans",
                "Walkthrough call per audit",
                "Priority delivery",
              ]}
              ctaText="Book a Strategy Call"
              ctaHref={CALENDLY_URL}
            />
          </div>
          <p className="text-center text-sm text-text-muted mt-8">
            All engagements begin with a free strategy call to scope the work
            for your specific site.
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
                Find out why AI platforms aren&apos;t recommending your business
                and get a roadmap to fix it.
              </p>
            </Link>
            <Link
              href="/gbp-audit"
              className="group block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all"
            >
              <h3 className="text-lg font-bold text-secondary group-hover:text-primary transition-colors">
                Google Business Profile Audit
              </h3>
              <p className="mt-2 text-sm text-text-muted">
                Optimize your GBP to show up in local search and Google Maps
                when it matters most.
              </p>
            </Link>
            <Link
              href="/packages"
              className="group block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all"
            >
              <h3 className="text-lg font-bold text-secondary group-hover:text-primary transition-colors">
                All Packages & Pricing
              </h3>
              <p className="mt-2 text-sm text-text-muted">
                See all audit options and bundle packages to save on your full
                digital visibility strategy.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        headline="Ready to Fix What's Holding Your Site Back?"
        description="Technical issues are silent killers of rankings and conversions. Get a complete picture of your site's technical health and a clear plan to fix every issue."
        buttonText="Book a Strategy Call"
        buttonHref={CALENDLY_URL}
        secondaryButtonText="See All Packages"
        secondaryButtonHref="/packages"
        showContact
      />
    </>
  );
}
