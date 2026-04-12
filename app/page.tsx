import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
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
  CheckCircle,
  BarChart3,
  ShieldCheck,
  Clock,
} from "lucide-react";

const BOOKING_URL = "https://cal.com/provemyads/15min";

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
  monitorAdvise: "https://buy.stripe.com/6oU7sL4WiaFq8sraYDgjC0g",
  monitorImplement: "https://buy.stripe.com/aFa7sLbkGfZKbED2s7gjC0h",
  fullProgram: "https://buy.stripe.com/eVq9ATcoKbJufUT5EjgjC0i",
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
      "The simplest first check is to ask tools like ChatGPT, Perplexity, Claude, or Google Gemini the kind of question a customer would ask. But a true GEO audit goes further: it tests multiple prompts across platforms, reviews whether your site can be crawled and parsed correctly, and identifies the technical and content signals affecting whether your business is cited or ignored.",
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
  {
    question: "How accurate is the GEO audit?",
    answer:
      "Our GEO audits are designed to be evidence-based, point-in-time evaluations — not black-box guesses or secret ranking formulas. We combine live AI query testing, technical crawl analysis, structured data review, and documented platform guidance to identify what is helping or hurting your visibility. Because AI platforms change over time, the audit should be understood as a defensible snapshot built from observable evidence and repeatable methods.",
  },
  {
    question: "Can another SEO team verify the findings?",
    answer:
      "Yes. Our reports are built so another experienced SEO or technical team can independently verify the main findings using public tools and live tests. Depending on the issue, that may include PageSpeed Insights, schema validation tools, robots.txt and sitemap checks, and manually re-running a subset of the AI prompts we used in the audit.",
  },
];

const jsonLd = [
  {
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
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://avantevisibility.com/#business",
    name: "Avante Visibility",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "3",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Restaurant Owner" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody:
          "I had no idea my Google Business Profile had the wrong primary category. That one fix alone changed our local search ranking within a week. The audit paid for itself before I even finished implementing everything.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Service Business Owner" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody:
          "The Review Intelligence Audit was eye-opening. We thought we had great reviews, but the audit showed us exactly what language was hurting us in AI recommendations.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Healthcare Professional" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody:
          "Finally an agency that speaks in plain English. No fluff, no 60-page report I'll never read. Just 'here's what's wrong, here's how to fix it, here's what to do first.'",
      },
    ],
  },
];

export default function HomePage() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Hero */}
      <Hero
        headline="Your Business Is Invisible to AI. We Fix That."
        subheadline="When customers ask ChatGPT, Perplexity, Google AI, or Claude for recommendations, does your business show up — and if not, why not? Avante Visibility delivers evidence-based GEO audits built from live AI query testing, observable site data, and clear technical analysis so you know exactly what's holding you back."
        primaryCTA={{ text: "Get Your Free AI Visibility Score", href: BOOKING_URL }}
        secondaryCTA={{ text: "Book a Free Strategy Call", href: BOOKING_URL }}
        trustBadges={[
          "Point-in-time, independently verifiable findings",
          "Live AI query testing across major platforms",
          "Structured technical, schema, and entity analysis",
          "Prioritized roadmap tied to observable evidence",
        ]}
        showBanner
      />

      {/* Problem Section */}
      <section className="bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">
              AI Search Changed the Game. Most Businesses Missed the Memo.
            </h2>
            <p className="mt-6 text-text-muted leading-relaxed">
              An AI visibility audit shows whether your business appears when
              customers ask tools like ChatGPT, Google AI Overviews, Perplexity,
              or Claude for recommendations. Our audits go beyond surface-level
              screenshots: we test live prompts, review how your site is crawled
              and structured, and identify the evidence-based gaps affecting
              whether AI systems can find, understand, and cite your business.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto mb-12 stagger">
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

          <p className="text-text-muted text-center text-sm max-w-2xl mx-auto mb-4 leading-relaxed">
            AI visibility changes over time as platforms, models, and interfaces
            evolve. Our audits are designed as defensible, point-in-time
            evaluations using repeatable testing methods.
          </p>

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
                What AI says about you — before
              </p>
              <div className="bg-bg-alt rounded-lg p-4 min-h-[80px] flex items-center justify-center">
                <p className="text-sm text-text-muted italic">
                  [No results found]
                </p>
              </div>
            </div>
          </div>

          {/* After Card */}
          <div className="max-w-4xl mx-auto mt-6">
            <div className="bg-white rounded-xl border-2 border-accent p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">
                What AI says about you — after working with Avante Visibility
              </p>
              <div className="bg-bg-alt rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Search className="w-4 h-4 text-accent" />
                  </div>
                  <p className="text-sm font-medium text-secondary">
                    &quot;Based on reviews, service quality, and online
                    presence, I recommend{" "}
                    <span className="text-accent font-bold">
                      Your Business Name
                    </span>
                    . They have 4.8 stars across 150+ reviews, specialize in
                    [your core service], and customers consistently mention
                    fast response times and clear communication. Their Google
                    Business Profile is well-maintained and they&apos;re
                    active across multiple review platforms.&quot;
                  </p>
                </div>
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
            prioritized fixes, supporting evidence, and practical next steps. We
            keep the language plain, but the analysis is rigorous — so business
            owners can act on it and technical teams can verify it.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger">
            <div className="animate-fade-in-up">
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
            <div className="animate-fade-in-up">
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
            <div className="animate-fade-in-up">
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
            <div className="animate-fade-in-up">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
            {[
              {
                icon: Brain,
                title: "GEO Audit",
                price: "$2,500",
                description:
                  "28+ live AI query tests, structured technical and schema analysis, competitor benchmarking, evidence-backed scoring, and a prioritized 90-day roadmap.",
                support:
                  "Built as a premium, defensible snapshot — not a black-box score or vague AI promise.",
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
                {"support" in item && item.support && (
                  <p className="mt-1.5 text-xs text-primary/70 font-medium italic leading-relaxed">
                    {item.support}
                  </p>
                )}
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
          <div className="bg-gradient-to-br from-secondary to-secondary-light rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
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
                Our monthly plans track AI visibility trends, implement
                prioritized fixes, and monitor whether the evidence is moving in
                the right direction over time. Because AI platforms change
                constantly, ongoing measurement matters as much as the initial
                audit. Starting at $1,500/mo.
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
                desc: "We run live AI visibility tests, review technical crawlability, analyze structured data and entity signals, and compare your presence against competitors. Then we separate what is verified, what is inferred, and what needs confirmation before we finalize the report.",
                img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80",
                alt: "Digital marketing optimization workflow on screen",
              },
              {
                step: "03",
                title: "You Get a Roadmap, Not a Report",
                desc: "Your audit arrives as a prioritized roadmap supported by observable evidence. Every finding is explained in plain language, and every major recommendation is tied to a specific issue affecting your AI visibility.",
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
                    width={600}
                    height={400}
                    className="absolute inset-0 w-full h-full object-cover"
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

      {/* 48-Hour Delivery Guarantee */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary/10 via-white to-accent/10 border-2 border-primary/30 rounded-2xl p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="shrink-0 w-20 h-20 bg-primary/15 rounded-full flex items-center justify-center">
                <ShieldCheck className="w-10 h-10 text-primary" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full mb-3">
                  <Clock className="w-3.5 h-3.5 text-primary" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                    48-Hour Delivery Guarantee
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">
                  Your Initial Technical Findings in 48 Hours — Guaranteed
                </h2>
                <p className="text-text-muted leading-relaxed">
                  Order any audit and we&apos;ll deliver your initial technical
                  findings — including critical schema gaps, crawler access
                  issues, and major blockers — within 48 hours. Your full audit
                  follows in 3&ndash;5 business days with evidence,
                  prioritization, and recommended next steps. If we miss the
                  48-hour deadline for initial findings, your audit is free.
                </p>
                <div className="mt-5 flex flex-wrap gap-4 justify-center md:justify-start text-sm">
                  <div className="flex items-center gap-1.5 text-secondary">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="font-medium">Initial findings in 48 hours</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-secondary">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="font-medium">Full audit in 3&ndash;5 business days</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-secondary">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="font-medium">Or it&apos;s free</span>
                  </div>
                </div>
              </div>
            </div>
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

      {/* Case Study Section */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Case Study
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">
              +940% Schema Integrity in 24 Hours
            </h2>
            <p className="mt-4 text-text-muted max-w-2xl mx-auto leading-relaxed">
              See how we improved SellerMockups.com&apos;s structured data
              coverage and AI discoverability signals in 24 hours — with
              measurable, documented changes.
            </p>
          </div>

          {/* Before/After Hero Stat */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
            <div className="bg-red-50 border border-red-200 rounded-xl px-8 py-6 text-center min-w-[180px]">
              <p className="text-xs font-semibold uppercase tracking-wider text-red-600 mb-2">
                Before
              </p>
              <p className="text-5xl font-bold text-red-600">5</p>
              <p className="text-sm text-text-muted mt-1">/ 100 Schema Score</p>
            </div>
            <div className="text-3xl font-bold text-text-muted">
              &rarr;
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl px-8 py-6 text-center min-w-[180px]">
              <p className="text-xs font-semibold uppercase tracking-wider text-green-600 mb-2">
                After
              </p>
              <p className="text-5xl font-bold text-green-600">52</p>
              <p className="text-sm text-text-muted mt-1">/ 100 Schema Score</p>
            </div>
          </div>

          {/* Key Results Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-5xl mx-auto">
            {[
              { stat: "159", label: "Pages with structured data (from 0)" },
              { stat: "6", label: "Schema types deployed" },
              { stat: "92/100", label: "llms.txt AI discoverability score" },
              { stat: "80%", label: "Branded AI citation rate" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-bg-alt rounded-xl p-5 text-center"
              >
                <p className="text-2xl font-bold text-primary">{item.stat}</p>
                <p className="text-xs text-text-muted mt-1 leading-snug">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* What Was Done */}
          <div className="bg-bg-alt rounded-2xl p-8 max-w-4xl mx-auto mb-8">
            <h3 className="text-lg font-bold text-secondary mb-4 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-primary" />
              What We Implemented
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Schema markup across all 159 pages (6 types)",
                "llms.txt + llms-full.txt as low-cost experimental AI discoverability files, alongside higher-priority schema and entity improvements",
                "ai-plugin.json for ChatGPT recognition",
                "Robots and crawler access review for major search and AI user agents",
                "970 FAQ headings with structured markup",
                "Contact page for E-E-A-T trust signals",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-text-primary">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/case-study/sellermockups"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors text-base"
            >
              Read the Full Case Study <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How We Validate Section */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-8">
              How We Validate Every GEO Audit
            </h2>
            <p className="text-text-muted leading-relaxed mb-6">
              Every GEO audit is built from a repeatable review process:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Live AI query testing across major platforms",
                "Technical crawlability and indexation checks",
                "Schema and entity signal analysis",
                "Competitor comparison across citation patterns and content structure",
                "Evidence-backed prioritization with clear next steps",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-text-muted leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-text-muted leading-relaxed">
              We do not present GEO scores as secret platform formulas. We use
              them as a structured, defensible way to prioritize the fixes most
              likely to improve AI visibility.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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

      {/* Final CTA */}
      <CTASection
        headline="Ready to Stop Being Invisible?"
        description="If your business is missing from AI-driven recommendations, there is usually a reason — and usually a fix. We'll show you what the evidence says, what matters most, and what to do next."
        buttonText="Get Your Free AI Visibility Score"
        secondaryButtonText="Book a Free Strategy Call"
        showContact
      />
    </>
  );
}
