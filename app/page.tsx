import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import HeroIllustration from "@/components/HeroIllustration";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import PricingCard from "@/components/PricingCard";
import {
  Search,
  Star,
  MapPin,
  MousePointerClick,
  Quote,
  Brain,
  Monitor,
  Zap,
  GitBranch,
  Users,
  RotateCcw,
  TrendingUp,
  ArrowRight,
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
};

const faqItems = [
  {
    question: "What is AI search visibility and why does it matter for my business?",
    answer:
      "AI search visibility refers to whether your business appears when someone asks an AI tool — like ChatGPT, Google Gemini, or Perplexity — for a recommendation. These platforms are rapidly replacing traditional search for millions of consumers. If your business isn't structured in a way that AI systems can read, trust, and recommend, you simply won't appear. And if you don't appear, your competitor will.",
  },
  {
    question: "What is a GEO audit?",
    answer:
      "GEO stands for Generative Engine Optimization. It's the practice of optimizing your online presence so that AI-powered search engines — not just Google, but ChatGPT, Perplexity, Gemini, and others — can find, understand, and recommend your business. A GEO audit evaluates how well your business is positioned for these generative AI platforms and gives you a specific action plan to improve.",
  },
  {
    question: "What is AEO — answer engine optimization?",
    answer:
      "AEO (Answer Engine Optimization) focuses on getting your business featured as the direct answer to a user's question. When someone asks an AI assistant 'What's the best Italian restaurant in Henderson?' or 'Who should I call for emergency plumbing in Las Vegas?', AEO is what determines whether your business is the one that gets recommended. It involves optimizing your content, reviews, structured data, and authority signals so AI systems see you as the most credible answer.",
  },
  {
    question: "How do I know if my business is showing up in ChatGPT or Perplexity?",
    answer:
      "The simplest way is to ask. Open ChatGPT, Perplexity, or Google Gemini and type a question a customer would ask — like 'best [your service] in [your city].' If your business doesn't appear in the response, you have a visibility problem. Our AI Visibility Audit goes much deeper, testing your presence across multiple AI platforms, analyzing why you're being included or excluded, and giving you a specific plan to fix it.",
  },
  {
    question: "Will fixing these things really bring in more customers?",
    answer:
      "Yes. The data is clear: 88% of consumers who search for a local business on mobile visit or call within 24 hours. AI search is quickly becoming the primary way people find businesses. If you're not visible in AI search results, you're invisible to a growing segment of your potential customers. Our audits identify the specific gaps that are costing you visibility — and customers — and give you a clear path to fix them.",
  },
  {
    question: "Do I need all three audits?",
    answer:
      "It depends on your situation. If you're not sure where to start, the AI Visibility Audit is the best first step — it gives you a complete picture of how AI platforms see your business. If you already know your reviews need work or your Google Business Profile is outdated, you can start with those individual audits. For the most comprehensive view and the biggest savings, our Full Digital Visibility bundle includes all three audits at a significant discount.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <Hero
        headline="Your Business Is Invisible to AI. We Fix That."
        subheadline="When a customer asks ChatGPT &quot;best dentist near me&quot; or searches Google AI for &quot;top-rated restaurant in Henderson,&quot; is your business in the answer? If not, you're losing customers to competitors who are. Avante Visibility finds the gaps and closes them."
        primaryCTA={{ text: "Get Your Free AI Visibility Score", href: CALENDLY_URL }}
        secondaryCTA={{ text: "Book a Free Strategy Call", href: CALENDLY_URL }}
        trustBadges={[
          "20+ Years Digital Marketing Experience",
          "AI-Powered Diagnostics",
          "Results in Days, Not Months",
        ]}
        illustration={<HeroIllustration className="w-full h-full" />}
      />

      {/* Problem Section */}
      <section className="bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">
              AI Search Changed the Game. Most Businesses Missed the Memo.
            </h2>
            <p className="mt-6 text-text-muted leading-relaxed">
              An AI visibility audit reveals whether your business shows up when
              customers ask ChatGPT, Google AI Overviews, or Perplexity for
              recommendations. These AI platforms are fundamentally changing how
              consumers find and choose local businesses. Without a GEO audit or
              AEO audit to identify your gaps, you&apos;re invisible to a growing
              share of your market.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto mb-12">
            {[
              {
                stat: "25%",
                text: "Gartner predicts that 25% of traditional search volume will decline by 2026",
              },
              {
                stat: "50%+",
                text: "Google AI Overviews now appear in over 50% of search results",
              },
              {
                stat: "88%",
                text: "88% of consumers who search for a local business on mobile visit or call within 24 hours",
              },
              {
                stat: "71%",
                text: "71% of consumers now use Google Reviews to evaluate local businesses",
              },
            ].map((item) => (
              <div
                key={item.stat}
                className="bg-white rounded-xl border border-gray-200 p-6 text-center"
              >
                <p className="text-3xl font-bold text-primary mb-2">{item.stat}</p>
                <p className="text-sm text-text-muted leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          <p className="text-text-muted text-center max-w-2xl mx-auto mb-12 leading-relaxed">
            If your business isn&apos;t optimized for how AI reads, evaluates, and
            recommends — you&apos;re not just behind. You&apos;re invisible.
          </p>

          {/* Before/After AI Comparison Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl border-2 border-primary/40 p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-4">
                What AI says about your competitor
              </p>
              <div className="bg-bg-alt rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Search className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-sm font-medium text-secondary">
                    &quot;Based on reviews, services, and online presence, I
                    recommend{" "}
                    <span className="text-primary font-bold">
                      Smith &amp; Co Plumbing
                    </span>
                    . They have 4.9 stars across 200+ reviews, offer 24/7 emergency
                    service, and consistently receive praise for transparent
                    pricing...&quot;
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl border-2 border-gray-300 p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-4">
                What AI says about you
              </p>
              <div className="bg-bg-alt rounded-lg p-4 min-h-[80px] flex items-center justify-center">
                <p className="text-sm text-text-muted italic">
                  [No results found]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-4">
            AI Visibility, Review, &amp; GBP Audits — Total Visibility
          </h2>
          <p className="text-text-muted text-center mb-12 max-w-2xl mx-auto leading-relaxed">
            Every Avante Visibility audit delivers a clear written report with
            specific, prioritized fixes. No jargon. No 60-page PDF you&apos;ll
            never read. Just exactly what&apos;s wrong and what to do about it.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <ServiceCard
                icon={Search}
                title="AI Visibility Audit"
                description="Find out if ChatGPT, Perplexity, and Google AI are recommending your business — and why they aren't."
                href="/ai-visibility-audit"
              />
              <p className="mt-2 text-center text-sm font-semibold text-primary">
                Starting at $297
              </p>
            </div>
            <div>
              <ServiceCard
                icon={Star}
                title="Review Intelligence Audit"
                description="Your star rating tells part of the story. Your reviews tell all of it."
                href="/review-audit"
              />
              <p className="mt-2 text-center text-sm font-semibold text-primary">
                Starting at $197
              </p>
            </div>
            <div>
              <ServiceCard
                icon={MapPin}
                title="Google Business Profile Audit"
                description="Your GBP may be the most important page about your business that you didn't write."
                href="/gbp-audit"
              />
              <p className="mt-2 text-center text-sm font-semibold text-primary">
                Starting at $197
              </p>
            </div>
            <div>
              <ServiceCard
                icon={MousePointerClick}
                title="Google Ads & Landing Pages"
                description="Every dollar you spend on Google Ads should be working harder."
                href="/google-ads"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Growth Audits */}
      <section className="bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-4">
            Growth &amp; Performance Audits
          </h2>
          <p className="text-text-muted text-center mb-12 max-w-2xl mx-auto leading-relaxed">
            For SaaS companies, e-commerce brands, and businesses ready to
            dominate their market. Deep-dive audits with data-backed roadmaps.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Brain,
                title: "GEO Audit",
                price: "$2,500",
                description:
                  "28+ live AI query tests, 12-point scoring, competitive benchmarking, and a 90-day roadmap.",
                href: "/geo-audit",
              },
              {
                icon: Monitor,
                title: "Technical SEO Audit",
                price: "$997",
                description:
                  "Full crawl analysis, Core Web Vitals, schema validation, and prioritized technical fixes.",
                href: "/technical-seo-audit",
              },
              {
                icon: Zap,
                title: "Speed & Core Web Vitals",
                price: "$497",
                description:
                  "Page-by-page speed analysis for your top 20 pages with projected improvement scores.",
                href: "/speed-audit",
              },
              {
                icon: GitBranch,
                title: "Conversion Funnel Audit",
                price: "$997",
                description:
                  "Full funnel analysis from landing page to conversion with A/B test recommendations.",
                href: "/conversion-audit",
              },
              {
                icon: Users,
                title: "Competitor Intelligence",
                price: "$797",
                description:
                  "Deep analysis of 3-5 competitors including AI citations, traffic, content, and positioning gaps.",
                href: "/competitor-intelligence",
              },
              {
                icon: RotateCcw,
                title: "Algorithm Recovery",
                price: "$1,497",
                description:
                  "Pinpoint which update hit you, which pages were affected, and the exact recovery plan.",
                href: "/algorithm-recovery",
              },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-secondary group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="mt-1 text-xl font-bold text-primary">
                  {item.price}
                </p>
                <p className="mt-2 text-sm text-text-muted leading-relaxed">
                  {item.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Learn More{" "}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Plans Callout */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="bg-secondary rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                  Monthly Plans
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Don&apos;t Just Audit. Grow Every Month.
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Our monthly plans track your AI citations, implement fixes, and
                grow your visibility with data proving it&apos;s working. Starting
                at $1,500/mo.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/monthly-plans"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors text-base"
              >
                View Monthly Plans <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-16">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Order Your Audit",
                desc: "Choose the audit or bundle that matches your biggest visibility challenge. You'll complete a short intake form so we understand your business, your market, and your goals.",
                img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80",
                alt: "Data analytics dashboard showing search visibility metrics",
              },
              {
                step: "02",
                title: "We Do the Deep Dive",
                desc: "Using a combination of AI-powered tools and expert human analysis, we examine your digital presence across all relevant platforms. Most audits are delivered within 3\u20135 business days.",
                img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80",
                alt: "Digital marketing optimization workflow on screen",
              },
              {
                step: "03",
                title: "You Get a Roadmap, Not a Report",
                desc: "Your audit arrives as a clear, prioritized action plan. Every finding is explained in plain language. Every recommendation is ranked by impact.",
                img: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=600&h=400&fit=crop&q=80",
                alt: "Business growth chart trending upward",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={item.img}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-4 left-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-white">
                      {item.step}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-secondary">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-text-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bundle Section */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-4">
            Bundle Your Audits and Save
          </h2>
          <p className="text-text-muted text-center mb-4 max-w-2xl mx-auto leading-relaxed">
            Most visibility problems don&apos;t live in just one place. Your
            reviews affect your AI visibility. Your Google Business Profile
            affects your reviews. Everything is connected. Our bundles give you
            the complete picture — at a better price.
          </p>
          <p className="text-center mb-12">
            <Link
              href="/packages"
              className="text-primary font-medium hover:underline"
            >
              View all packages &rarr;
            </Link>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard
              title="AI + GBP Bundle"
              price="$447"
              description="AI Visibility Audit + Google Business Profile Audit (save $47)"
              features={[
                "Full AI Visibility Audit",
                "Complete GBP Audit",
                "Cross-platform recommendations",
                "Prioritized action plan",
              ]}
              ctaText="Get Started"
              ctaHref={STRIPE_LINKS.aiGbpBundle}
            />
            <PricingCard
              title="AI + Review Bundle"
              price="$447"
              description="AI Visibility Audit + Review Intelligence Audit (save $47)"
              features={[
                "Full AI Visibility Audit",
                "Complete Review Intelligence Audit",
                "Sentiment analysis & insights",
                "Prioritized action plan",
              ]}
              ctaText="Get Started"
              ctaHref={STRIPE_LINKS.aiReviewBundle}
            />
            <PricingCard
              title="Full Digital Visibility"
              price="$597"
              description="All 3 Audits — AI Visibility + Review Intelligence + GBP (save $94)"
              features={[
                "Full AI Visibility Audit",
                "Complete Review Intelligence Audit",
                "Complete GBP Audit",
                "Unified strategy & action plan",
                "Priority delivery",
              ]}
              ctaText="Get Started"
              ctaHref={STRIPE_LINKS.fullPackage}
              badge="Most Popular"
              highlighted
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-12">
            What Business Owners Are Saying
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "I had no idea my Google Business Profile had the wrong primary category. That one fix alone changed our local search ranking within a week. The audit paid for itself before I even finished implementing everything.",
                name: "Restaurant Owner",
                location: "",
              },
              {
                quote:
                  "The Review Intelligence Audit was eye-opening. We thought we had great reviews, but the audit showed us exactly what language was hurting us in AI recommendations and what our competitors were doing differently. It was like seeing behind the curtain.",
                name: "Service Business Owner",
                location: "",
              },
              {
                quote:
                  "Finally an agency that speaks in plain English. No fluff, no 60-page report I'll never read. Just 'here's what's wrong, here's how to fix it, here's what to do first.' That's what I needed.",
                name: "Healthcare Professional",
                location: "",
              },
            ].map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white border border-gray-200 rounded-xl p-6"
              >
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                <p className="text-sm text-text-muted italic leading-relaxed mb-6">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-secondary">
                      {testimonial.name}
                    </p>
                    {testimonial.location && (
                      <p className="text-xs text-text-muted">
                        {testimonial.location}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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

      {/* Final CTA */}
      <CTASection
        headline="Ready to Stop Being Invisible?"
        description="Every day your business doesn't appear in AI search results is a day your competitors get the recommendation instead. Let's find out exactly what's holding you back — and fix it."
        buttonText="Get Your Free AI Visibility Score"
        secondaryButtonText="Book a Free Strategy Call"
        showContact
      />
    </>
  );
}
