import type { Metadata } from "next";
import Hero from "@/components/Hero";
import HeroIllustration from "@/components/HeroIllustration";
import Breadcrumb from "@/components/Breadcrumb";
import FAQAccordion from "@/components/FAQAccordion";
import PricingCard from "@/components/PricingCard";
import CTASection from "@/components/CTASection";
import {
  MapPin,
  Building2,
  FileSearch,
  Camera,
  Star,
  Megaphone,
  Users,
  Globe,
  LocateFixed,
  ListChecks,
  AlertTriangle,
  TrendingUp,
} from "lucide-react";

const CALENDLY_URL = "https://calendly.com/avantevisibility";

export const metadata: Metadata = {
  title: "Google Business Profile Audit | GBP Audit Service",
  description:
    "Is your Google Business Profile costing you customers? Our GBP audit finds every ranking gap, wrong category, and missed opportunity. Starting at $197.",
};

const faqItems = [
  {
    question: "What is a Google Business Profile audit?",
    answer:
      "A Google Business Profile audit is a systematic review of every element of your GBP listing — from your primary and secondary categories to your photos, reviews, posts, NAP consistency, and service area configuration. The goal is to identify the specific gaps, errors, and missed opportunities that are keeping you out of the Google Map Pack and costing you customers. You receive a prioritized report with exactly what to fix and in what order.",
  },
  {
    question: "Why am I not showing up on Google Maps?",
    answer:
      "There are several common reasons businesses don\u2019t appear in Google Maps results. The most frequent culprits are choosing the wrong primary category (or not using secondary categories at all), having incomplete business information, NAP inconsistencies across the web, a lack of recent photos or Google Posts, and having too few or too many negative reviews. Our GBP audit identifies exactly which of these factors are affecting your listing and gives you a step-by-step plan to fix them.",
  },
  {
    question: "How important is NAP consistency for local SEO?",
    answer:
      "NAP (Name, Address, Phone number) consistency is one of the top local ranking factors. When Google finds conflicting information about your business across different directories, websites, and social profiles, it reduces confidence in your listing\u2019s accuracy. That uncertainty translates directly into lower rankings. Even small differences \u2014 like \u201cSt\u201d vs \u201cStreet\u201d or a missing suite number \u2014 can create issues. Our audit checks your NAP across major directories and flags every inconsistency.",
  },
  {
    question:
      "Does my Google Business Profile category really matter that much?",
    answer:
      "Yes. Your primary GBP category is the single most important local ranking factor, according to the Whitespark 2026 Local Search Ranking Factors study. The difference between choosing \u201cRestaurant\u201d and \u201cMexican Restaurant\u201d can mean the difference between appearing on page one of the Map Pack or not appearing at all. Many businesses are using a generic category when a more specific one would dramatically improve their visibility. Our audit reviews your categories against competitor data and industry best practices.",
  },
  {
    question:
      "How many photos should my Google Business Profile have?",
    answer:
      "Google recommends at least 25\u201330 photos on your Business Profile, and the data supports this: businesses with more than 100 photos receive 42% more requests for directions and 35% more website clicks than the average business. But it\u2019s not just about quantity \u2014 photo quality, variety (interior, exterior, team, products), and recency all matter. Our audit evaluates your visual content against your competitors and gives you specific recommendations.",
  },
  {
    question:
      "How long does it take to see results after fixing GBP issues?",
    answer:
      "It depends on the type of fix. Category changes can show ranking improvements within days. NAP consistency corrections typically take 4\u20138 weeks as Google recrawls and revalidates your information across the web. Review-related improvements are more gradual, usually 4\u201312 weeks depending on your strategy. The good news is that many GBP fixes are quick wins with outsized impact \u2014 our audit prioritizes these so you see results as fast as possible.",
  },
];

const auditItems = [
  {
    icon: Building2,
    title: "Primary & Secondary Category Audit",
    description:
      "We verify your primary category is the most specific match for your business and that you\u2019re using every relevant secondary category to maximize visibility.",
  },
  {
    icon: FileSearch,
    title: "Business Information Completeness Check",
    description:
      "Every field on your profile is reviewed \u2014 hours, description, attributes, services, appointment links, and more \u2014 to ensure nothing is missing or outdated.",
  },
  {
    icon: MapPin,
    title: "NAP Consistency Audit",
    description:
      "We check your Name, Address, and Phone number across major directories and citation sources to flag inconsistencies that erode Google\u2019s trust in your listing.",
  },
  {
    icon: Camera,
    title: "Photo & Visual Content Assessment",
    description:
      "We evaluate your photo count, quality, variety, and recency against competitor benchmarks and Google\u2019s best practices.",
  },
  {
    icon: Star,
    title: "Review Signals Overview",
    description:
      "We analyze your review count, average rating, response rate, recency, and keyword signals to identify how your reviews are helping or hurting your rankings.",
  },
  {
    icon: Megaphone,
    title: "Google Posts Activity Audit",
    description:
      "We review your posting frequency, content types, and engagement to determine if you\u2019re using Google Posts to their full potential.",
  },
  {
    icon: Users,
    title: "Competitor GBP Benchmarking",
    description:
      "We compare your profile against the top 3\u20135 competitors in your market to show exactly where you\u2019re ahead and where you\u2019re falling behind.",
  },
  {
    icon: Globe,
    title: "Website Landing Page Alignment",
    description:
      "We check that the landing page linked from your GBP matches your listing\u2019s categories, services, and location data for maximum relevance.",
  },
  {
    icon: LocateFixed,
    title: "Service Area & Location Configuration",
    description:
      "We verify your service area settings, location pins, and multi-location configurations are correct and optimized for the areas you serve.",
  },
  {
    icon: ListChecks,
    title: "Prioritized Fix List",
    description:
      "Every finding is ranked by impact so you know exactly what to fix first. No guesswork, no 60-page PDF you\u2019ll never read \u2014 just a clear action plan.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Google Business Profile Audit",
      alternateName: [
        "GBP Audit",
        "GBP Optimization Service",
        "Local SEO Audit",
      ],
      description:
        "A comprehensive audit of your Google Business Profile that identifies ranking gaps, wrong categories, NAP inconsistencies, and missed opportunities costing you customers.",
      provider: {
        "@type": "Organization",
        name: "Avante Visibility",
        url: "https://avantevisibility.com",
      },
      offers: {
        "@type": "Offer",
        price: "197",
        priceCurrency: "USD",
      },
      url: "https://avantevisibility.com/gbp-audit",
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
          name: "Google Business Profile Audit",
          item: "https://avantevisibility.com/gbp-audit",
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

export default function GBPAuditPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Google Business Profile Audit" },
        ]}
      />

      {/* Hero */}
      <Hero
        headline="Google Business Profile Audit: Stop Losing Customers You Can&apos;t See"
        subheadline="Your Google Business Profile may be the most important page about your business that you didn&apos;t write. It controls how you appear in Maps, local search, and AI recommendations. Our GBP audit finds every gap, wrong category, and missed opportunity that&apos;s costing you customers &mdash; and tells you exactly how to fix it."
        primaryCTA={{
          text: "Get My GBP Audit \u2014 $197",
          href: CALENDLY_URL,
        }}
        secondaryCTA={{
          text: "Book a Free Strategy Call First",
          href: CALENDLY_URL,
        }}
        illustration={<HeroIllustration className="w-full h-full" />}
      />

      {/* Problem Section */}
      <section className="bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">
              Most Google Business Profiles Are Quietly Costing Businesses
              Customers
            </h2>
            <p className="mt-6 text-text-muted leading-relaxed">
              Your Google Business Profile is often the first thing a potential
              customer sees &mdash; before your website, before your social
              media, before anything else. If it&apos;s incomplete, miscategorized,
              or inconsistent, you&apos;re not just missing opportunities.
              You&apos;re handing them to your competitors.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-12">
            {[
              {
                stat: "88%",
                text: "of consumers who search for a local business on mobile visit or call within 24 hours",
                source: "HubSpot",
              },
              {
                stat: "42%",
                text: "of all local search clicks go to the Google Map Pack",
                source: "Backlinko",
              },
              {
                stat: "#1",
                text: "local ranking factor: your primary GBP category",
                source: "Whitespark 2026",
              },
              {
                stat: "126%",
                text: "more traffic for businesses that appear in the local pack vs. those that don\u2019t",
                source: "SOCi",
              },
              {
                stat: "68%",
                text: "of consumers will only use businesses with a 4-star rating or higher",
                source: "BrightLocal",
              },
            ].map((item) => (
              <div
                key={item.stat}
                className="bg-white rounded-xl border border-gray-200 p-6 text-center"
              >
                <p className="text-3xl font-bold text-primary mb-2">
                  {item.stat}
                </p>
                <p className="text-sm text-text-muted leading-relaxed">
                  {item.text}
                </p>
                <p className="mt-2 text-xs text-text-muted/60">
                  Source: {item.source}
                </p>
              </div>
            ))}
          </div>

          <p className="text-text-muted text-center max-w-2xl mx-auto leading-relaxed">
            The businesses showing up in the Map Pack aren&apos;t there by
            accident. They&apos;ve optimized every detail of their Google Business
            Profile. The ones who haven&apos;t are invisible to 42% of local
            searchers.
          </p>
        </div>
      </section>

      {/* Sample Finding */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-12">
              The Mistake That&apos;s More Common Than You Think
            </h2>
            <div className="bg-bg-alt rounded-2xl border border-gray-200 p-8 md:p-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-secondary text-lg">
                    Real Finding: Wrong Primary Category
                  </p>
                  <p className="text-sm text-text-muted mt-1">
                    From an actual GBP audit
                  </p>
                </div>
              </div>
              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>
                  A restaurant owner couldn&apos;t figure out why they weren&apos;t
                  showing up when people searched &quot;Mexican food near me.&quot;
                  Their food was great, their reviews were strong, and their
                  location was prime.
                </p>
                <p>
                  The problem? Their primary Google Business Profile category
                  was set to <strong className="text-secondary">&quot;Restaurant&quot;</strong>{" "}
                  instead of{" "}
                  <strong className="text-primary">&quot;Mexican Restaurant.&quot;</strong>
                </p>
                <p>
                  That single field &mdash; one dropdown menu &mdash; was the
                  reason they weren&apos;t appearing in the Map Pack for their most
                  valuable search terms. Google uses your primary category as the
                  strongest signal for which searches to show your business in.
                  &quot;Restaurant&quot; is one of the most competitive, generic
                  categories possible. &quot;Mexican Restaurant&quot; is specific,
                  relevant, and far less crowded.
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                  <TrendingUp className="w-5 h-5 text-primary shrink-0" />
                  <p className="text-sm font-medium text-secondary">
                    After changing their primary category, they appeared in the
                    Map Pack within days &mdash; and saw a measurable increase in
                    calls and direction requests within the first week.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What the Audit Covers */}
      <section className="bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">
              What Your GBP Audit Includes
            </h2>
            <p className="mt-4 text-text-muted max-w-2xl mx-auto leading-relaxed">
              Every audit covers 10 critical areas of your Google Business
              Profile. Nothing is skipped. Nothing is surface-level.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {auditItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-xl border border-gray-200 p-6 flex items-start gap-4"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary">
                      <span className="text-primary mr-2">
                        {String(index + 1).padStart(2, "0")}.
                      </span>
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-text-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-4">
            Investment
          </h2>
          <p className="text-text-muted text-center mb-12 max-w-2xl mx-auto leading-relaxed">
            Choose the option that fits your needs. Every option includes a
            30-minute walkthrough call to review your findings and answer
            questions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard
              title="GBP Audit (Solo)"
              price="$197"
              description="A comprehensive audit of your Google Business Profile with a prioritized fix list."
              features={[
                "Full GBP field review",
                "NAP consistency check",
                "Competitor benchmarking",
                "Prioritized fix list",
                "30-min walkthrough call",
              ]}
              ctaText="Get My GBP Audit"
            />
            <PricingCard
              title="AI + GBP Bundle"
              price="$447"
              description="Combine your AI Visibility Audit and GBP Audit for a complete local + AI search picture."
              badge="Save $47"
              features={[
                "AI Visibility Audit",
                "GBP Audit",
                "Both full reports",
                "Cross-platform recommendations",
                "30-min walkthrough call",
              ]}
              ctaText="Get the Bundle"
            />
            <PricingCard
              title="Full Digital Visibility"
              price="$597"
              description="All three audits — AI Visibility, Review Intelligence, and GBP — for the complete picture."
              badge="Most Popular"
              highlighted
              features={[
                "All 3 audits included",
                "Complete reports for each",
                "Unified strategy & action plan",
                "Priority delivery",
                "30-min walkthrough call",
              ]}
              ctaText="Get Full Visibility"
            />
          </div>

          <p className="text-center text-sm text-text-muted mt-8">
            Delivery: 3&ndash;5 business days. All prices in USD.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-12">
            Frequently Asked Questions About Google Business Profile Audits
          </h2>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        headline="Find Out What Your GBP Is Costing You"
        description="The customers who can&apos;t find you on Google Maps are going to your competitors instead. A GBP audit shows you exactly what&apos;s wrong and how to fix it."
        buttonText="Get My GBP Audit &mdash; $197"
        secondaryButtonText="Book a Free Strategy Call First"
        showContact
      />
    </>
  );
}
