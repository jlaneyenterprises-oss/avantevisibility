import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import HeroIllustration from "@/components/HeroIllustration";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import {
  Search,
  FileText,
  PenLine,
  BarChart3,
  Settings,
  XCircle,
  Target,
  MousePointerClick,
  EyeOff,
  TrendingDown,
  CheckCircle,
} from "lucide-react";

const BOOKING_URL = "https://cal.com/provemyads/15min";

export const metadata: Metadata = {
  title: "Google Ads & Landing Pages for Local Business",
  description:
    "Google Ads campaigns and conversion-optimized landing pages built for local businesses. Setup from $497, management from $397/mo. No wasted budget.",
  openGraph: {
    title: "Google Ads & Landing Pages for Local Business",
    description:
      "Google Ads campaigns and conversion-optimized landing pages built for local businesses. Setup from $497, management from $397/mo. No wasted budget.",
    images: [
      {
        url: "https://avantevisibility.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Google Ads & Landing Pages for Local Business",
      },
    ],
  },
};

const problemItems = [
  {
    icon: MousePointerClick,
    text: "Campaigns send traffic to your homepage instead of a dedicated landing page &mdash; so visitors leave without converting.",
  },
  {
    icon: Target,
    text: "Broad match keywords eat your budget on irrelevant clicks that will never turn into customers.",
  },
  {
    icon: EyeOff,
    text: "Ad copy doesn&apos;t speak to local intent, so you attract the wrong audience or get ignored entirely.",
  },
  {
    icon: TrendingDown,
    text: "No conversion tracking means you have no idea which clicks are actually producing leads or calls.",
  },
  {
    icon: XCircle,
    text: "Set-and-forget management &mdash; campaigns launched and never optimized, slowly bleeding budget month after month.",
  },
];

const featureBlocks = [
  {
    icon: Search,
    title: "Keyword Strategy for Local Intent",
    description:
      "We research and target the exact phrases your local customers use when they&apos;re ready to buy. No broad match budget drain &mdash; just high-intent, geo-targeted keywords that bring qualified leads to your door.",
  },
  {
    icon: FileText,
    title: "Conversion-Optimized Landing Pages",
    description:
      "Every campaign gets a dedicated landing page built to convert. Not your homepage &mdash; a focused page designed for one goal: turning clicks into customers.",
    subItems: [
      "Headline that matches the ad and search intent",
      "Social proof (reviews, trust badges, results)",
      "One clear CTA &mdash; call, form, or book",
      "Mobile-first design that works on every device",
      "Fast load speed so you don&apos;t lose visitors before they see your offer",
    ],
  },
  {
    icon: PenLine,
    title: "Ad Copy That Matches Search Intent",
    description:
      "We write ad copy that speaks directly to what your customer is searching for. The result: higher click-through rates, better quality scores, and lower cost per click.",
  },
  {
    icon: BarChart3,
    title: "Conversion Tracking Setup",
    description:
      "We set up proper tracking so you know exactly which keywords, ads, and landing pages are producing calls, form submissions, and customers &mdash; not just clicks.",
  },
  {
    icon: Settings,
    title: "Ongoing Campaign Management",
    description:
      "We monitor, test, and optimize your campaigns every month. That means adjusting bids, pausing underperformers, testing new ad copy, expanding negative keywords, and making sure every dollar works harder than the last.",
  },
];

const whoItems = [
  "Are spending money on Google Ads but aren&apos;t sure what&apos;s working",
  "Have tried Google Ads before and felt like it was a waste",
  "Are sending ad traffic to their homepage and wondering why leads are low",
  "Want a dedicated landing page that actually converts paid traffic",
  "Need someone to manage campaigns so they can focus on running the business",
];

const faqItems = [
  {
    question: "How much should I spend on Google Ads as a local business?",
    answer:
      "There's no universal answer, but most local businesses see meaningful results starting at $1,000-$2,000/month in ad spend. The key is not budget size — it's efficiency. A well-structured campaign with tight keyword targeting and a strong landing page will outperform a high-budget campaign with poor structure every time. We'll recommend a starting budget based on your market and competition.",
  },
  {
    question: "How long does it take to see results from Google Ads?",
    answer:
      "You can start seeing clicks and leads within the first week. However, it typically takes 30-60 days to gather enough data to fully optimize a campaign. During that period, we're testing ad copy, refining keywords, and adjusting bids to find the combination that delivers the best cost per lead for your business.",
  },
  {
    question: "Why do I need a landing page? Can't I just send traffic to my website?",
    answer:
      "Your website is designed to serve multiple purposes — information, branding, navigation. A landing page is designed to do one thing: convert the specific visitor who clicked your ad. Landing pages consistently convert 2-5x better than generic website pages because they match the exact intent of the search query and remove distractions.",
  },
  {
    question: "What's the difference between your service and managing ads myself?",
    answer:
      "Most local business owners who manage their own ads are unknowingly wasting 30-60% of their budget on broad keywords, poor match types, or missing negative keywords. We bring campaign structure expertise, ongoing optimization, and conversion tracking that turns ad spend into measurable ROI — not just clicks.",
  },
  {
    question: "Do you work with businesses outside of Las Vegas?",
    answer:
      "Yes. While we're based in Las Vegas, Google Ads management is done remotely. We work with local businesses across the US. What matters is understanding your market, your customers, and your competition — and we do that through research and strategy calls, not geography.",
  },
  {
    question: "What happens if I want to cancel?",
    answer:
      "There are no long-term contracts. Monthly management is month-to-month. If you decide to pause or stop, you keep your Google Ads account, your campaigns, and your landing page. We believe in earning your business every month, not locking you in.",
  },
];

export default function GoogleAdsPage() {
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
            name: "Google Ads & Landing Pages",
            item: "https://avantevisibility.com/google-ads",
          },
        ],
      },
      {
        "@type": "Service",
        name: "Google Ads & Landing Pages for Local Business",
        description:
          "Google Ads campaigns and conversion-optimized landing pages built specifically for local businesses. No wasted budget. Just qualified leads.",
        url: "https://avantevisibility.com/google-ads",
        provider: {
          "@id": "https://avantevisibility.com/#organization",
        },
        offers: [
          {
            "@type": "Offer",
            name: "Campaign Setup + Landing Page",
            price: "497",
            priceCurrency: "USD",
            description:
              "One-time Google Ads campaign setup with a conversion-optimized landing page.",
            url: "https://avantevisibility.com/google-ads",
          },
          {
            "@type": "Offer",
            name: "Monthly Campaign Management",
            price: "397",
            priceCurrency: "USD",
            description:
              "Ongoing monthly Google Ads campaign management, optimization, and reporting.",
            url: "https://avantevisibility.com/google-ads",
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
          { label: "Google Ads & Landing Pages" },
        ]}
      />

      <Hero
        headline="Google Ads & Landing Pages That Convert Local Customers"
        subheadline="Google Ads is still one of the fastest ways to put your business in front of customers who are actively searching for what you offer. But most local businesses either waste budget on traffic that doesn&apos;t convert or spend on campaigns that were built to launch, not to perform. We build and manage campaigns designed for local results."
        primaryCTA={{
          text: "Get a Custom Google Ads Proposal",
          href: BOOKING_URL,
        }}
        secondaryCTA={{
          text: "Book a Free Strategy Call",
          href: BOOKING_URL,
        }}
        illustration={<HeroIllustration className="w-full h-full" />}
        lastUpdated="March 10, 2026"
      />

      {/* Definition Block */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl mx-auto bg-primary/5 border border-primary/15 rounded-xl p-6 md:p-8">
            <h2 className="text-lg font-bold text-secondary mb-2">What is Google Ads Management for Local Businesses?</h2>
            <p className="text-text-muted leading-relaxed">
              <strong>Google Ads management</strong> for local businesses is the strategic setup, optimization, and ongoing management of paid search campaigns designed to drive local customers &mdash; not just clicks. It includes keyword research focused on buying intent, ad copy tailored to local search behavior, landing page alignment, bid strategy optimization, and continuous performance monitoring to maximize your return on ad spend.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8">
              Why Most Local Google Ads Don&apos;t Work
            </h2>
            <div className="space-y-4 mb-8">
              {problemItems.map((item) => (
                <div
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
                </div>
              ))}
            </div>
            <p className="text-lg font-semibold text-secondary">
              We fix all of this.
            </p>
          </div>
        </div>
      </section>

      {/* What We Build Section */}
      <section className="bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-4">
            What a Local Google Ads Campaign from Avante Visibility Includes
          </h2>
          <p className="text-text-muted text-center mb-12 max-w-2xl mx-auto">
            Every piece is built to work together &mdash; from keyword strategy
            to landing page to ongoing optimization.
          </p>
          <div className="space-y-8 max-w-4xl mx-auto">
            {featureBlocks.map((block) => (
              <div
                key={block.title}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <block.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-secondary mb-2">
                      {block.title}
                    </h3>
                    <p
                      className="text-text-muted leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: block.description }}
                    />
                    {block.subItems && (
                      <ul className="mt-4 space-y-2">
                        {block.subItems.map((sub) => (
                          <li key={sub} className="flex items-start gap-3">
                            <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                            <span
                              className="text-sm text-text-muted leading-relaxed"
                              dangerouslySetInnerHTML={{ __html: sub }}
                            />
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image + Context Section */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="relative h-[350px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=600&fit=crop&q=80"
                alt="Marketing team analyzing ad campaign performance data"
                width={800}
                height={600}
                className="absolute inset-0 w-full h-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">
                This Service Is Built for Local Businesses That:
              </h2>
              <ul className="space-y-3">
                {whoItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span
                      className="text-text-muted leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-12">
            Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Campaign Setup + Landing Page */}
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-secondary mb-2">
                Campaign Setup + Landing Page
              </h3>
              <p className="text-sm text-text-muted mb-4">One-time</p>
              <p className="text-4xl font-bold text-primary mb-1">
                $497
              </p>
              <p className="text-sm text-text-muted mb-6">Starting price</p>
              <ul className="space-y-3">
                {[
                  "Keyword research and strategy",
                  "Campaign build and configuration",
                  "Conversion-optimized landing page",
                  "Conversion tracking setup",
                  "Ad copy written and tested",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-text-primary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Monthly Management */}
            <div className="bg-white border-2 border-primary rounded-xl p-8 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-primary text-white text-xs font-bold px-4 py-1 rounded-full">
                  Ongoing Growth
                </span>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-2">
                Monthly Management
              </h3>
              <p className="text-sm text-text-muted mb-4">Recurring</p>
              <p className="text-4xl font-bold text-primary mb-1">
                $397
                <span className="text-lg font-normal text-text-muted">
                  /month
                </span>
              </p>
              <p className="text-sm text-text-muted mb-6">Starting price</p>
              <ul className="space-y-3">
                {[
                  "Ongoing bid and budget optimization",
                  "Negative keyword management",
                  "Ad copy testing and refresh",
                  "Landing page improvements",
                  "Monthly performance reporting",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-text-primary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-center text-text-muted mt-8">
            Every business is different.{" "}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium hover:underline"
            >
              Contact us for a custom proposal.
            </a>
          </p>
        </div>
      </section>

      {/* Related Services */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold text-secondary text-center mb-8">
            Maximize Your Full Digital Visibility
          </h2>
          <p className="text-text-muted text-center mb-8 max-w-2xl mx-auto">
            Google Ads drive traffic, but your visibility ecosystem determines whether that traffic converts. These audits ensure the rest of your digital presence is working just as hard.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link href="/ai-visibility-audit" className="group block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all">
              <h3 className="text-lg font-bold text-secondary group-hover:text-primary transition-colors">AI Visibility Audit</h3>
              <p className="mt-2 text-sm text-text-muted">See if AI search platforms are recommending your business alongside your paid ads.</p>
            </Link>
            <Link href="/review-audit" className="group block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all">
              <h3 className="text-lg font-bold text-secondary group-hover:text-primary transition-colors">Review Intelligence Audit</h3>
              <p className="mt-2 text-sm text-text-muted">Reviews impact ad quality score and conversions. Understand what yours are saying.</p>
            </Link>
            <Link href="/gbp-audit" className="group block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all">
              <h3 className="text-lg font-bold text-secondary group-hover:text-primary transition-colors">Google Business Profile Audit</h3>
              <p className="mt-2 text-sm text-text-muted">Your GBP drives local search visibility that compounds your paid traffic.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 text-center">
              Frequently Asked Questions
            </h2>
            <p className="text-text-muted text-center mb-10">
              Common questions about Google Ads management for local businesses.
            </p>
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>

      <CTASection
        headline="Ready to Stop Wasting Ad Spend?"
        buttonText="Get a Custom Google Ads Proposal"
        buttonHref={BOOKING_URL}
        secondaryButtonText="Book a Free Strategy Call"
        secondaryButtonHref={BOOKING_URL}
        showContact
      />
    </>
  );
}
