import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import HeroIllustration from "@/components/HeroIllustration";
import Breadcrumb from "@/components/Breadcrumb";
import FAQAccordion from "@/components/FAQAccordion";
import PricingCard from "@/components/PricingCard";
import CTASection from "@/components/CTASection";
import {
  BarChart3,
  FileSearch,
  ImageIcon,
  Code,
  Server,
  TrendingUp,
  Zap,
  Smartphone,
  Clock,
  AlertTriangle,
} from "lucide-react";

const CALENDLY_URL = "https://calendly.com/avantevisibility";

const STRIPE_LINKS = {
  speedAudit: "https://buy.stripe.com/fZu9ATewS8xi6kj2s7gjC09",
  growthStarter: "https://buy.stripe.com/28E7sL0G2eVGeQPc2HgjC0e",
};

export const metadata: Metadata = {
  title: "Speed & Core Web Vitals Audit | Site Performance Analysis",
  description:
    "A slow site loses customers and AI citations. Our Speed Audit analyzes Core Web Vitals, page-by-page performance, and render-blocking resources. $497 with 2-3 day turnaround.",
  openGraph: {
    title: "Speed & Core Web Vitals Audit | Site Performance Analysis",
    description:
      "A slow site loses customers and AI citations. Our Speed Audit analyzes Core Web Vitals, page-by-page performance, and render-blocking resources. $497 with 2-3 day turnaround.",
  },
};

const faqItems = [
  {
    question: "What are Core Web Vitals?",
    answer:
      "Core Web Vitals are three specific metrics Google uses to measure user experience: LCP (Largest Contentful Paint) measures loading speed, CLS (Cumulative Layout Shift) measures visual stability, and INP (Interaction to Next Paint) measures responsiveness. Google uses these as ranking factors, and AI platforms also consider site performance when selecting sources to cite.",
  },
  {
    question: "My site seems fast enough. Do I still need this?",
    answer:
      "What feels fast to you on WiFi may be slow on a mobile connection. Google measures your site on mobile by default, and over 60% of web traffic is mobile. Many sites that score well on desktop fail Google's mobile performance thresholds. Our audit tests both and shows you the real numbers.",
  },
  {
    question: "How quickly can I see improvements?",
    answer:
      "Speed fixes often show immediate results. Image optimization, caching changes, and render-blocking fixes can improve load times within hours of implementation. Most clients see measurable Core Web Vitals improvements within 1-2 weeks of implementing our recommendations.",
  },
  {
    question: "What do I receive?",
    answer:
      "A detailed speed report covering your top 20 pages with specific fix instructions for each issue, projected before/after scores, and recommendations prioritized by impact. Delivered within 2-3 business days with a 30-minute walkthrough call.",
  },
];

const auditItems = [
  {
    icon: BarChart3,
    title: "Core Web Vitals Report",
    description:
      "Full LCP, CLS, and INP analysis for both mobile and desktop with pass/fail status against Google's thresholds.",
  },
  {
    icon: FileSearch,
    title: "Page-by-Page Speed Analysis",
    description:
      "Performance breakdown for your top 20 highest-traffic pages, not just a homepage-only test.",
  },
  {
    icon: ImageIcon,
    title: "Image Optimization",
    description:
      "Format analysis (WebP, AVIF opportunities), compression levels, lazy loading implementation, and responsive image sizing.",
  },
  {
    icon: Code,
    title: "Render-Blocking Resources",
    description:
      "JavaScript and CSS audit identifying scripts and stylesheets that delay page rendering.",
  },
  {
    icon: Server,
    title: "Server & Caching Review",
    description:
      "Server response times, CDN configuration, browser caching policies, and compression settings.",
  },
  {
    icon: TrendingUp,
    title: "Projected Improvements",
    description:
      "Before/after estimated scores showing the expected impact of each recommended fix.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Speed & Core Web Vitals Audit",
      alternateName: [
        "Site Speed Audit",
        "Core Web Vitals Analysis",
        "Website Performance Audit",
      ],
      description:
        "A comprehensive speed and Core Web Vitals audit that identifies performance bottlenecks across your top 20 pages with projected improvements and prioritized fix instructions.",
      provider: {
        "@type": "Organization",
        name: "Avante Visibility",
        url: "https://avantevisibility.com",
      },
      offers: {
        "@type": "Offer",
        price: "497",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
      url: "https://avantevisibility.com/speed-audit",
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
          name: "Speed & Core Web Vitals Audit",
          item: "https://avantevisibility.com/speed-audit",
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

export default function SpeedAuditPage() {
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
          { label: "Speed & Core Web Vitals Audit" },
        ]}
      />

      {/* Hero */}
      <Hero
        headline="A Slow Site Loses Customers and AI Citations"
        subheadline="Google uses Core Web Vitals as a ranking factor. AI platforms deprioritize slow-loading sites. And 53% of mobile users abandon sites that take more than 3 seconds to load. Our Speed Audit identifies exactly what&apos;s slowing you down and the fastest path to fix it."
        primaryCTA={{
          text: "Get My Speed Audit \u2014 $497",
          href: STRIPE_LINKS.speedAudit,
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
              Speed Is No Longer Optional &mdash; It&apos;s a Ranking Factor
            </h2>
            <p className="mt-6 text-text-muted leading-relaxed">
              Google confirmed that <strong>Core Web Vitals</strong> are a
              direct ranking signal. AI platforms like ChatGPT, Perplexity, and
              Gemini favor fast-loading, well-structured sources when selecting
              content to cite. And your customers have already decided: if your
              site doesn&apos;t load in under 3 seconds, they&apos;re gone.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-12">
            {[
              {
                icon: Clock,
                stat: "53%",
                text: "of mobile users abandon sites that take more than 3 seconds to load",
                source: "Google",
              },
              {
                icon: Zap,
                stat: "70%",
                text: "of consumers say page speed influences their decision to buy from an online retailer",
                source: "Unbounce",
              },
              {
                icon: Smartphone,
                stat: "61%",
                text: "of all web traffic comes from mobile devices where speed matters most",
                source: "Statista",
              },
              {
                icon: BarChart3,
                stat: "3x",
                text: "higher bounce rate when page load goes from 1 second to 5 seconds",
                source: "Google",
              },
              {
                icon: TrendingUp,
                stat: "25%",
                text: "improvement in Core Web Vitals correlates with 15% fewer page abandonments",
                source: "Web.dev",
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
            The sites that rank highest and get cited by AI aren&apos;t just
            well-written &mdash; they&apos;re fast. If your pages fail Core Web
            Vitals, you&apos;re leaving traffic, conversions, and AI visibility
            on the table.
          </p>
        </div>
      </section>

      {/* Sample Finding */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-12">
              The Performance Problem Hiding in Plain Sight
            </h2>
            <div className="bg-bg-alt rounded-2xl border border-gray-200 p-8 md:p-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-secondary text-lg">
                    Real Finding: Unoptimized Images on Key Pages
                  </p>
                  <p className="text-sm text-text-muted mt-1">
                    From an actual Speed Audit
                  </p>
                </div>
              </div>
              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>
                  A service business was spending $3,000/month on Google Ads
                  driving traffic to a landing page that took{" "}
                  <strong className="text-secondary">7.2 seconds</strong> to
                  load on mobile. Their bounce rate was 72%. They assumed
                  the ads weren&apos;t working.
                </p>
                <p>
                  The real problem? Their hero image was a 4.5MB uncompressed
                  PNG. Below the fold, they had 12 portfolio images served as
                  full-resolution JPEGs with no lazy loading. The page was
                  loading{" "}
                  <strong className="text-secondary">28MB of images</strong>{" "}
                  before the user could even scroll.
                </p>
                <p>
                  These weren&apos;t code problems. They were configuration
                  problems &mdash; the kind a speed audit catches in minutes
                  but that cost businesses months of wasted ad spend.
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                  <TrendingUp className="w-5 h-5 text-primary shrink-0" />
                  <p className="text-sm font-medium text-secondary">
                    After converting to WebP, adding lazy loading, and
                    implementing responsive sizing, load time dropped to 1.8
                    seconds &mdash; and their conversion rate doubled within two
                    weeks.
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
              What Your Speed Audit Covers
            </h2>
            <p className="mt-4 text-text-muted max-w-2xl mx-auto leading-relaxed">
              A complete performance analysis of your site &mdash; not a
              one-page Lighthouse screenshot, but a thorough audit of your top
              20 pages with actionable fix instructions.
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

      {/* Why Speed Matters for AI */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">
              Why AI Platforms Care About Your Site Speed
            </h2>
            <p className="mt-6 text-text-muted leading-relaxed">
              AI search engines like ChatGPT, Perplexity, and Google AI
              Overviews crawl and index web pages to generate answers. When
              their crawlers encounter a slow-loading page, they move on.
              Fast, well-structured sites get crawled more frequently, indexed
              more completely, and cited more often.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Zap,
                title: "Faster Crawling",
                description:
                  "AI crawlers have time budgets. Faster pages mean more of your content gets indexed. Slow pages get partially crawled or skipped entirely.",
              },
              {
                icon: Server,
                title: "Better Rendering",
                description:
                  "AI systems need to render your page to understand its content. Render-blocking resources and JavaScript-heavy pages often produce incomplete or empty content for AI crawlers.",
              },
              {
                icon: TrendingUp,
                title: "Higher Citation Rates",
                description:
                  "Sites that pass Core Web Vitals and load quickly are more likely to be selected as sources by AI platforms. Speed is a trust signal for both users and machines.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-bg-alt rounded-xl p-6 text-center"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-secondary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-4">
            Investment
          </h2>
          <p className="text-text-muted text-center mb-12 max-w-2xl mx-auto leading-relaxed">
            Choose the option that fits your needs. Every option includes a
            30-minute walkthrough call to review your findings and answer
            questions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <PricingCard
              title="Speed Audit (Solo)"
              price="$497"
              description="A comprehensive speed and Core Web Vitals audit for your site with prioritized fix instructions."
              features={[
                "Core Web Vitals analysis (mobile + desktop)",
                "Top 20 page performance breakdown",
                "Image optimization audit",
                "Render-blocking resource identification",
                "Server & caching review",
                "Projected before/after scores",
                "30-min walkthrough call",
              ]}
              ctaText="Order Speed Audit \u2014 $497"
              ctaHref={STRIPE_LINKS.speedAudit}
            />
            <PricingCard
              title="Growth Starter Bundle"
              price="$3,997"
              description="GEO Audit + Technical SEO Audit + Speed Audit -- everything you need to rank and get cited."
              badge="Save $500"
              highlighted
              features={[
                "Full GEO Audit",
                "Technical SEO Audit",
                "Speed & Core Web Vitals Audit",
                "All three complete reports",
                "Unified strategy & action plan",
                "Priority delivery",
                "30-min walkthrough call",
              ]}
              ctaText="Order Bundle \u2014 $3,997"
              ctaHref={STRIPE_LINKS.growthStarter}
            />
          </div>

          <p className="text-center text-sm text-text-muted mt-8">
            Delivery: 2&ndash;3 business days. All prices in USD.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-12">
            Frequently Asked Questions About Speed Audits
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
            Complete Your Performance Picture
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
                Speed affects AI citations. Find out if AI platforms are
                recommending you &mdash; and why they might not be.
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
                Your GBP links to your website. Make sure the page it lands on
                actually loads fast enough to convert.
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
                See all available audits and bundles to find the right fit for
                your business.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        headline="Find Out What&apos;s Slowing You Down"
        description="Every second of load time costs you customers, rankings, and AI citations. Our Speed Audit shows you exactly what to fix and the impact each fix will have."
        buttonText="Get My Speed Audit &mdash; $497"
        buttonHref={STRIPE_LINKS.speedAudit}
        secondaryButtonText="Book a Free Strategy Call First"
        showContact
      />
    </>
  );
}
