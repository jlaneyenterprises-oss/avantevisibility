import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import HeroIllustration from "@/components/HeroIllustration";
import Breadcrumb from "@/components/Breadcrumb";
import FAQAccordion from "@/components/FAQAccordion";
import PricingCard from "@/components/PricingCard";
import CTASection from "@/components/CTASection";
import {
  FileSearch,
  BarChart3,
  MessageSquare,
  Users,
  Globe,
  Reply,
  TrendingUp,
  ClipboardList,
  Star,
  Check,
  UtensilsCrossed,
  Stethoscope,
  Scale,
  Wrench,
  ShoppingBag,
} from "lucide-react";

const BOOKING_URL = "https://cal.com/provemyads/15min";

const STRIPE_LINKS = {
  reviewIntelligence: "https://buy.stripe.com/28E9AT2Oa3cYbED0jZgjC01",
  aiReviewBundle: "https://buy.stripe.com/3cIdR960m14Q7on3wbgjC05",
  fullPackage: "https://buy.stripe.com/5kQcN560m3cY8sraYDgjC07",
};

export const metadata: Metadata = {
  title: "Review Intelligence Audit | Online Review Analysis",
  description:
    "Stop guessing what your reviews say. Our Review Intelligence Audit reveals patterns, competitor gaps, and the fixes that move your star rating. $197.",
  openGraph: {
    title: "Review Intelligence Audit | Online Review Analysis",
    description:
      "Stop guessing what your reviews say. Our Review Intelligence Audit reveals patterns, competitor gaps, and the fixes that move your star rating. $197.",
    images: [
      {
        url: "https://avantevisibility.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Review Intelligence Audit | Online Review Analysis",
      },
    ],
  },
};

const auditIncludes = [
  {
    icon: FileSearch,
    title: "Full Review Corpus Analysis",
    description:
      "We read every review across every platform -- Google, Yelp, Facebook, industry-specific sites. Not a sample. Every single one. We catalog volume, recency, platform distribution, and rating breakdown to give you a complete picture of your review landscape.",
  },
  {
    icon: BarChart3,
    title: "Sentiment Analysis by Category",
    description:
      "We categorize every review by topic -- service quality, pricing, wait times, cleanliness, staff friendliness, product quality, and more. You will see exactly which categories are driving positive sentiment and which are dragging your rating down.",
  },
  {
    icon: MessageSquare,
    title: "Keyword Extraction -- Your Customers&apos; Own Language",
    description:
      "We extract the exact words and phrases your customers use repeatedly. This language is gold for your marketing copy, your Google Business Profile, and your website content. When customers say it, search engines and AI systems listen.",
  },
  {
    icon: Users,
    title: "Competitor Review Benchmarking",
    description:
      "We run the same analysis on your top 3-5 competitors. You will see where they are weak (your opportunity) and where they are strong (your threat). This competitive intelligence alone is worth the price of the audit.",
  },
  {
    icon: Globe,
    title: "Review Platform Distribution Audit",
    description:
      "Are your reviews concentrated on one platform while competitors dominate another? We map where your reviews live versus where your potential customers are actually looking, and identify platform gaps that are costing you visibility.",
  },
  {
    icon: Reply,
    title: "Response Rate & Quality Assessment",
    description:
      "We evaluate how you are responding to reviews -- response rate, response time, tone, and effectiveness. A business that responds thoughtfully to reviews signals to both customers and AI systems that it is engaged and trustworthy.",
  },
  {
    icon: TrendingUp,
    title: "Rating Trajectory Analysis",
    description:
      "Is your rating trending up, down, or stagnant? We plot your rating over time and identify inflection points. Often a rating drop correlates with a specific operational change, staffing shift, or seasonal pattern that you can address directly.",
  },
  {
    icon: ClipboardList,
    title: "Actionable Improvement Roadmap",
    description:
      "Every finding comes with a specific, prioritized action item. Not vague suggestions -- concrete steps ranked by impact and effort. You will know exactly what to fix first, what to fix next, and what quick wins you can implement today.",
  },
];

const industries = [
  {
    icon: UtensilsCrossed,
    name: "Restaurants & Hospitality",
    description:
      "Food quality, service speed, ambiance, and value are the categories that make or break restaurant reviews. We identify which of these is your strongest asset and which is silently driving customers to competitors.",
  },
  {
    icon: Stethoscope,
    name: "Dental & Medical Practices",
    description:
      "Patients review bedside manner, wait times, billing transparency, and staff friendliness. We extract the specific complaints that are preventing new patient acquisition and the praise you should amplify.",
  },
  {
    icon: Scale,
    name: "Legal Services",
    description:
      "Communication, responsiveness, and outcome satisfaction dominate legal reviews. We identify whether your reviews signal expertise and trustworthiness -- the two factors that drive legal service selection.",
  },
  {
    icon: Wrench,
    name: "Home Services",
    description:
      "Punctuality, pricing transparency, quality of work, and cleanup are the review categories that separate top-rated contractors from the rest. We show you exactly where you stand on each.",
  },
  {
    icon: ShoppingBag,
    name: "Retail & E-Commerce",
    description:
      "Product quality, customer service, return experience, and shipping speed drive retail reviews. We identify which operational areas are generating the most friction and the most loyalty.",
  },
];

const stats = [
  {
    value: "5-9%",
    label: "revenue increase per one-star rating improvement",
    source: "Harvard Business School / Michael Luca",
  },
  {
    value: "68%",
    label: "of consumers will only use a business rated 4 stars or higher",
    source: "BrightLocal",
  },
  {
    value: "71%",
    label: "of consumers use Google Reviews when evaluating local businesses",
    source: "BrightLocal",
  },
  {
    value: "~15%",
    label: "of local pack ranking factors are review signals",
    source: "Moz / Whitespark",
  },
  {
    value: "88%",
    label: "of consumers would use a business that responds to all reviews",
    source: "BrightLocal",
  },
];

const faqItems = [
  {
    question: "How do reviews affect my local SEO ranking?",
    answer:
      "Review signals account for approximately 15% of the factors that determine your position in Google\u2019s local pack (the map results). This includes your overall star rating, review volume, review velocity (how quickly you\u2019re getting new reviews), and the keywords that appear in your reviews. A business with 200 reviews averaging 4.5 stars will consistently outrank a business with 30 reviews averaging 4.7 stars. Our audit quantifies exactly where your review signals stand relative to competitors who are outranking you.",
  },
  {
    question: "What is review sentiment analysis?",
    answer:
      "Review sentiment analysis is the systematic reading and categorization of every review to identify recurring themes, positive and negative patterns, and specific topics that drive customer satisfaction or dissatisfaction. Rather than just counting stars, we analyze what customers are actually saying -- extracting the specific words, phrases, and topics that appear across dozens or hundreds of reviews. This reveals patterns that are invisible when reading reviews one at a time.",
  },
  {
    question:
      "How many reviews do I need to reach a 4.5-star rating?",
    answer:
      "It depends on your current rating, total review count, and the rating of new reviews coming in. For example, if you have 100 reviews averaging 3.8 stars, you would need approximately 60-80 new five-star reviews (with zero new negative reviews) to reach 4.5 stars. Our audit calculates your specific path to your target rating and identifies the operational changes most likely to shift new reviews from negative to positive.",
  },
  {
    question:
      "What is \u201Creview velocity\u201D and why does it matter?",
    answer:
      "Review velocity is how quickly your business is generating new reviews. Google and AI systems both weight recency heavily -- a business with 10 reviews in the last month signals more relevance than a business with 200 reviews but none in the last 90 days. Our audit measures your review velocity against your competitors and identifies whether you have a recency problem that\u2019s costing you visibility.",
  },
  {
    question: "Should I respond to negative reviews?",
    answer:
      "Yes. 88% of consumers say they would use a business that responds to all of its reviews, both positive and negative. A thoughtful response to a negative review demonstrates accountability and customer focus. It also signals to Google and AI systems that the business is actively engaged. Our audit evaluates your current response rate and quality, and provides templates and strategies for responding effectively to every type of negative review.",
  },
  {
    question:
      "Can you help me get more reviews, not just analyze existing ones?",
    answer:
      "The audit focuses on analysis and strategy, but the actionable roadmap includes specific review generation strategies tailored to your business type and customer journey. We identify the optimal moments to ask for reviews, the channels most likely to generate responses, and the language that increases conversion from request to published review. For businesses that want ongoing review generation and monitoring, we offer that as a separate service.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Review Intelligence Audit",
      alternateName: [
        "Online Review Audit",
        "Review Sentiment Analysis Service",
        "Review Analysis Service",
      ],
      description:
        "Comprehensive review analysis that reveals patterns, competitor gaps, and actionable fixes to improve your star rating and online reputation.",
      url: "https://avantevisibility.com/review-audit",
      provider: {
        "@type": "Organization",
        name: "Avante Visibility",
        url: "https://avantevisibility.com",
      },
      offers: {
        "@type": "Offer",
        price: "197",
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
          name: "Review Intelligence Audit",
          item: "https://avantevisibility.com/review-audit",
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

export default function ReviewAuditPage() {
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
          { label: "Review Intelligence Audit" },
        ]}
      />

      {/* Hero */}
      <Hero
        headline="Review Intelligence Audit: What Your Reviews Are Really Telling You"
        subheadline="Most business owners check their star rating and move on. But buried inside your reviews — and your competitors&apos; reviews — is a detailed map of exactly what&apos;s driving customers away and what&apos;s bringing them back. Our Review Intelligence Audit extracts that map and hands it to you with a clear action plan."
        primaryCTA={{
          text: "Get My Review Intelligence Audit \u2014 $197",
          href: STRIPE_LINKS.reviewIntelligence,
        }}
        secondaryCTA={{
          text: "Book a Free Strategy Call First",
          href: BOOKING_URL,
        }}
        illustration={<HeroIllustration className="w-full h-full" />}
        lastUpdated="March 18, 2026"
      />

      {/* Definition Block */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl mx-auto bg-primary/5 border border-primary/15 rounded-xl p-6 md:p-8">
            <h2 className="text-lg font-bold text-secondary mb-2">What is a Review Intelligence Audit?</h2>
            <p className="text-text-muted leading-relaxed">
              A <strong>review intelligence audit</strong> is a deep analysis of your online reviews and your competitors&apos; reviews that extracts actionable business intelligence. It goes beyond star ratings to identify recurring complaint themes, sentiment patterns, competitive gaps, and the specific language customers use &mdash; giving you a data-driven action plan to improve ratings, respond strategically, and win the trust signals that AI platforms use when making recommendations.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8 text-center">
              Your Star Rating Is a Number. Your Reviews Are a Business
              Intelligence Report.
            </h2>
            <p className="text-text-muted leading-relaxed text-lg mb-8">
              A <strong>review intelligence audit</strong> goes far beyond your
              star rating. Looking only at that number is like reading only the
              final score of a game &mdash; it tells you whether you won or
              lost, but nothing about why. Our{" "}
              <strong>review audit</strong> extracts the operational intelligence
              hidden in your reviews that most business owners never see:
            </p>
            <ul className="space-y-3 mb-12">
              {[
                "Recurring patterns that reveal systemic issues (or systemic strengths)",
                "Service-specific complaints that pinpoint exactly where you are losing customers",
                "Competitor weaknesses that represent your biggest growth opportunities",
                "The exact language your customers use — language you should be using in your marketing",
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

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            {stats.map((stat) => (
              <div
                key={stat.value}
                className="bg-bg-alt rounded-xl p-6 text-center"
              >
                <p className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-text-primary leading-relaxed mb-2">
                  {stat.label}
                </p>
                <p className="text-xs text-text-muted italic">
                  Source: {stat.source}
                </p>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-text-muted leading-relaxed text-lg text-center">
              The data is clear: reviews directly impact your revenue, your
              search rankings, and your ability to attract new customers. The
              question is whether you are leveraging that data or ignoring it.
            </p>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                What Review Intelligence Looks Like in Action
              </h2>
              <p className="text-text-muted leading-relaxed mb-6">
                A restaurant came to us with a 3.7-star rating and declining
                foot traffic. They assumed food quality was the issue and were
                considering a menu overhaul. Our Review Intelligence Audit told
                a different story.
              </p>
              <p className="text-text-muted leading-relaxed mb-6">
                After analyzing every review, we discovered that 60% of negative
                reviews mentioned service speed -- not food quality. Food was
                actually a strength. The problem was staffing during peak hours.
                They restructured their staffing schedule instead of changing
                their menu.
              </p>
              <p className="text-text-muted leading-relaxed mb-8">
                The results:
              </p>
              <div className="space-y-4">
                {[
                  {
                    label: "Rating",
                    detail: "3.7 \u2192 4.1 in 6 weeks",
                  },
                  {
                    label: "Negative review velocity",
                    detail: "dropped 70%",
                  },
                  {
                    label: "New positive language",
                    detail:
                      "appearing organically (\u201Cfast service,\u201D \u201Cdidn\u2019t have to wait\u201D)",
                  },
                ].map((result) => (
                  <div
                    key={result.label}
                    className="flex items-start gap-3 bg-white rounded-lg p-4"
                  >
                    <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <Star className="w-4 h-4 text-accent" />
                    </div>
                    <p className="text-text-primary leading-relaxed">
                      <strong>{result.label}:</strong> {result.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop&q=80"
                alt="Restaurant interior with happy diners representing improved review ratings"
                width={800}
                height={600}
                className="absolute inset-0 w-full h-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What the Audit Includes */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-4">
            What Your Review Intelligence Audit Includes
          </h2>
          <p className="text-text-muted text-center mb-12 max-w-2xl mx-auto">
            A comprehensive, data-driven analysis of your online reviews and
            your competitors&apos; reviews, delivered as a clear report with
            actionable next steps.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {auditIncludes.map((item) => (
              <div
                key={item.title}
                className="bg-bg-alt rounded-xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry-Specific Section */}
      <section className="bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-4">
            Industry-Specific Review Intelligence
          </h2>
          <p className="text-text-muted text-center mb-12 max-w-2xl mx-auto">
            Every industry has different review dynamics. We tailor the audit to
            the categories and patterns that matter most in your space.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="bg-white rounded-xl p-6"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <industry.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-secondary mb-2">
                  {industry.name}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-12">
            Investment
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard
              title="Review Intelligence Audit (Solo)"
              price="$197"
              description="Standalone review analysis for one business location"
              features={[
                "Full review corpus analysis",
                "Sentiment analysis by category",
                "Competitor benchmarking (3-5 competitors)",
                "Improvement roadmap with prioritized actions",
                "30-min walkthrough call",
              ]}
              ctaText="Get My Review Audit"
              ctaHref={STRIPE_LINKS.reviewIntelligence}
            />
            <PricingCard
              title="AI + Review Bundle"
              price="$447"
              description="Save $47 -- both audits together"
              features={[
                "AI Visibility Audit",
                "Review Intelligence Audit",
                "Both reports + action plans",
                "30-min walkthrough call",
              ]}
              ctaText="Get the Bundle"
              ctaHref={STRIPE_LINKS.aiReviewBundle}
            />
            <PricingCard
              title="Full Digital Visibility"
              price="$597"
              description="Save $94 -- all three audits in one package"
              features={[
                "AI Visibility Audit",
                "Review Intelligence Audit",
                "GBP Optimization Audit",
                "Complete reports + action plans",
                "Priority delivery",
                "30-min walkthrough call",
              ]}
              ctaText="Get Full Visibility"
              ctaHref={STRIPE_LINKS.fullPackage}
              badge="Most Popular"
              highlighted
            />
          </div>
          <p className="text-center text-text-muted mt-8 text-sm">
            Delivery: 3&ndash;5 business days.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-12">
            Frequently Asked Questions About Review Intelligence
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
            Complete Your Visibility Picture
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link href="/ai-visibility-audit" className="group block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all">
              <h3 className="text-lg font-bold text-secondary group-hover:text-primary transition-colors">AI Visibility Audit</h3>
              <p className="mt-2 text-sm text-text-muted">Reviews feed AI recommendations. See if those platforms are recommending you.</p>
            </Link>
            <Link href="/gbp-audit" className="group block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all">
              <h3 className="text-lg font-bold text-secondary group-hover:text-primary transition-colors">Google Business Profile Audit</h3>
              <p className="mt-2 text-sm text-text-muted">Your GBP hosts your reviews. Make sure the full profile is optimized.</p>
            </Link>
            <Link href="/packages" className="group block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all">
              <h3 className="text-lg font-bold text-secondary group-hover:text-primary transition-colors">Full Digital Visibility Package</h3>
              <p className="mt-2 text-sm text-text-muted">Bundle all three audits and save $94 with our most popular package.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        headline="Stop Guessing. Start Knowing."
        description="Your reviews contain more operational intelligence than most business owners realize. Let us extract it, organize it, and hand you a clear plan to turn that intelligence into higher ratings, better rankings, and more customers."
        buttonText="Get My Review Intelligence Audit &mdash; $197"
        buttonHref={STRIPE_LINKS.reviewIntelligence}
        secondaryButtonText="Book a Free Strategy Call First"
        showContact
      />
    </>
  );
}
