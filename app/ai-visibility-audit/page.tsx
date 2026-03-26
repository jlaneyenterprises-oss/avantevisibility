import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import HeroIllustration from "@/components/HeroIllustration";
import Breadcrumb from "@/components/Breadcrumb";
import FAQAccordion from "@/components/FAQAccordion";
import PricingCard from "@/components/PricingCard";
import CTASection from "@/components/CTASection";
import {
  Check,
  Search,
  Fingerprint,
  FileText,
  Code,
  Bot,
  BarChart3,
  Monitor,
  ListChecks,
  AlertTriangle,
  ShieldOff,
  FileQuestion,
  Braces,
  Trophy,
} from "lucide-react";

const CALENDLY_URL = "https://calendly.com/avantevisibility";

export const metadata: Metadata = {
  title: "AI Visibility Audit | GEO & AEO Audit Service",
  description:
    "Find out why your business isn't showing up in ChatGPT, Perplexity, or Google AI Overviews — and get a clear roadmap to fix it. Starting at $297.",
  openGraph: {
    title: "AI Visibility Audit | GEO & AEO Audit Service",
    description:
      "Find out why your business isn't showing up in ChatGPT, Perplexity, or Google AI Overviews — and get a clear roadmap to fix it. Starting at $297.",
  },
};

const auditItems = [
  {
    number: 1,
    icon: Search,
    title: "AI Platform Presence Testing",
    description:
      "We query ChatGPT, Perplexity, Google Gemini, Microsoft Copilot, and Google AI Overviews with the exact questions your potential customers are asking. You&apos;ll see screenshots of whether you appear, how you&apos;re described, and who shows up instead.",
  },
  {
    number: 2,
    icon: Fingerprint,
    title: "Entity Clarity Analysis",
    description:
      "AI systems need to understand what your business is, what you do, and where you operate before they can recommend you. We analyze whether your online presence creates a clear, consistent entity that AI can confidently reference.",
  },
  {
    number: 3,
    icon: FileText,
    title: "Content Authority & Citation Gap Analysis",
    description:
      "We evaluate whether your content is structured in a way that AI systems can extract and cite. This includes analyzing your topical authority, content depth, and whether you&apos;re creating the type of content AI platforms prefer to reference.",
  },
  {
    number: 4,
    icon: Code,
    title: "Structured Data / Schema Markup Review",
    description:
      "Schema markup helps AI systems understand your content programmatically. We audit your current implementation and identify the specific schema types that would improve your AI visibility.",
  },
  {
    number: 5,
    icon: Bot,
    title: "AI Crawler Access Audit",
    description:
      "Some businesses are accidentally blocking AI crawlers through robots.txt rules, server configurations, or rendering issues. We check whether ChatGPT&apos;s crawler (GPTBot), Google&apos;s AI systems, and other AI agents can actually access your content.",
  },
  {
    number: 6,
    icon: BarChart3,
    title: "Competitive AI Visibility Benchmark",
    description:
      "We test your top competitors with the same queries and compare results. You&apos;ll see exactly who AI is recommending instead of you and what they&apos;re doing differently.",
  },
  {
    number: 7,
    icon: Monitor,
    title: "Google AI Overviews Optimization Assessment",
    description:
      "Google AI Overviews appear in over 50% of search results. We analyze your positioning in these AI-generated summaries and identify specific opportunities to earn placement.",
  },
  {
    number: 8,
    icon: ListChecks,
    title: "Prioritized Action Plan",
    description:
      "Every finding comes with a clear, prioritized action plan. Items are ranked by impact and effort so you know exactly what to tackle first for the fastest improvement in AI visibility.",
  },
];

const clientFindings = [
  {
    icon: AlertTriangle,
    text: "Content structured for humans but unreadable by AI systems — missing the clear question-and-answer patterns that AI platforms prefer to cite.",
  },
  {
    icon: ShieldOff,
    text: "AI crawlers blocked entirely by outdated robots.txt rules that were written before GPTBot and other AI agents existed.",
  },
  {
    icon: FileQuestion,
    text: "No entity documentation — the business has no clear, machine-readable description of what it does, where it operates, or what makes it different.",
  },
  {
    icon: Braces,
    text: "Schema markup either missing or using generic types that don&apos;t help AI systems understand the business&apos;s specific services and service areas.",
  },
  {
    icon: Trophy,
    text: "Competitors with weaker actual offerings ranking higher in AI recommendations because they&apos;ve structured their online presence for AI readability.",
  },
];

const faqItems = [
  {
    question: "What exactly is a GEO audit?",
    answer:
      "GEO stands for Generative Engine Optimization. A GEO audit evaluates how well your business is positioned to appear in AI-generated search results — the answers produced by ChatGPT, Perplexity, Google AI Overviews, and similar platforms. Unlike traditional SEO, which focuses on ranking in blue-link results, GEO focuses on whether AI systems can find, understand, and confidently recommend your business when users ask relevant questions.",
  },
  {
    question: "What is answer engine optimization (AEO)?",
    answer:
      "AEO focuses on structuring your online presence so that AI-powered answer engines can extract and present your business information directly to users. This includes optimizing for featured snippets, voice search results, and AI-generated answers. AEO and GEO overlap significantly — both aim to make your business the answer that AI systems provide. Our audit covers both disciplines comprehensively.",
  },
  {
    question: "How do I get my business to show up in ChatGPT?",
    answer:
      "ChatGPT draws on training data plus real-time web browsing to generate recommendations. To appear in ChatGPT responses, your business needs a strong, consistent online presence with clear entity information, authoritative content that answers common questions in your industry, proper technical setup that allows AI crawlers to access your site, and citations from trusted third-party sources. Our audit identifies exactly which of these factors are missing or underperforming for your specific business.",
  },
  {
    question: "How do I show up in Google AI Overviews?",
    answer:
      "Google AI Overviews favor businesses with strong E-E-A-T signals (Experience, Expertise, Authoritativeness, and Trustworthiness). This means having well-structured content that directly answers search queries, proper schema markup, strong review profiles, and consistent business information across the web. Our audit specifically assesses your Google AI Overviews positioning and provides actionable steps to improve it.",
  },
  {
    question: "Is this different from a regular SEO audit?",
    answer:
      "Yes, meaningfully so. Traditional SEO audits focus on blue-link rankings, backlink profiles, keyword density, and page speed — all important for conventional search. An AI visibility audit examines an entirely different layer: whether AI systems can understand your business entity, whether your content is structured for AI extraction, whether AI crawlers can access your site, and how you compare to competitors specifically in AI-generated results. Many businesses with strong traditional SEO still have poor AI visibility because these are fundamentally different optimization targets.",
  },
  {
    question: "How long does the audit take and what do I get?",
    answer:
      "The audit is delivered within 3-5 business days. You receive a comprehensive written report with screenshots showing your current AI visibility across all major platforms, a competitive comparison, and a prioritized action plan. The report is followed by a 30-minute walkthrough call where we review every finding together and answer your questions about implementation.",
  },
];

export default function AIVisibilityAuditPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "AI Visibility Audit",
        alternateName: [
          "GEO Audit",
          "AEO Audit",
          "Generative Engine Optimization Audit",
        ],
        description:
          "Comprehensive audit of your business visibility across AI search platforms including ChatGPT, Perplexity, Google AI Overviews, and more.",
        url: "https://avantevisibility.com/ai-visibility-audit",
        provider: {
          "@id": "https://avantevisibility.com/#organization",
        },
        offers: {
          "@type": "Offer",
          price: "297",
          priceCurrency: "USD",
          url: "https://avantevisibility.com/ai-visibility-audit",
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
            name: "AI Visibility Audit",
            item: "https://avantevisibility.com/ai-visibility-audit",
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
          { label: "AI Visibility Audit" },
        ]}
      />

      <Hero
        headline="AI Visibility Audit: Find Out Why AI Isn&apos;t Recommending You"
        subheadline="ChatGPT is answering questions about businesses like yours right now. So is Perplexity. And Google AI Overviews. The AI recommendations your potential customers see are shaping decisions before those customers ever visit a website. If your business isn&apos;t showing up in those answers, this audit tells you exactly why &mdash; and exactly what to change."
        primaryCTA={{
          text: "Get My AI Visibility Audit \u2014 $297",
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
              The Shift to AI Search Is Already Here
            </h2>
            <p className="text-text-muted leading-relaxed text-lg mb-8">
              An <strong>AI visibility audit</strong> reveals whether your
              business is being recommended &mdash; or ignored &mdash; by
              ChatGPT, Perplexity, Google AI Overviews, and other generative
              engines. Also known as a <strong>GEO audit</strong> or{" "}
              <strong>AEO audit</strong>, this analysis shows exactly where you
              stand in the new AI-driven search landscape. The data makes the
              shift clear:
            </p>
            <div className="space-y-4 mb-8">
              {[
                {
                  stat: "25% decline in traditional organic traffic",
                  detail:
                    "projected by Gartner by 2026 as AI search takes over",
                },
                {
                  stat: "50%+ of Google search results",
                  detail:
                    "now include AI Overviews, pushing traditional results below the fold",
                },
                {
                  stat: "58% of local results",
                  detail:
                    "in ChatGPT reference specific business websites, making AI a direct referral channel",
                },
                {
                  stat: "~4x higher conversion rate",
                  detail:
                    "for AI-referred traffic compared to traditional organic search",
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
                    &mdash; {item.detail}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-text-muted leading-relaxed text-lg">
              Businesses that aren&apos;t visible in AI search aren&apos;t just
              missing a marketing channel &mdash; they&apos;re becoming
              invisible to a growing segment of their market. This audit shows
              you exactly where you stand and what to do about it.
            </p>
          </div>
        </div>
      </section>

      {/* What the Audit Covers */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-4">
            What Your AI Visibility Audit Includes
          </h2>
          <p className="text-text-muted text-center mb-12 max-w-2xl mx-auto">
            A thorough examination of every factor that determines whether AI
            systems recommend your business.
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

      {/* What Clients Find */}
      <section className="bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8">
              What Our Clients Typically Find
            </h2>
            <p className="text-text-muted leading-relaxed mb-8">
              Most businesses we audit are surprised by how much low-hanging
              fruit exists. Here are the most common findings:
            </p>
            <ul className="space-y-4">
              {clientFindings.map((item) => (
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

      {/* Sample Finding / Case Study */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              A Real Example of What We Find
            </h2>
            <p className="text-text-muted leading-relaxed mb-8">
              A home services company came to us ranking well in traditional
              Google search but getting zero mentions in ChatGPT or Perplexity
              for their core services. Our audit uncovered three critical
              issues:
            </p>
            <div className="space-y-4 mb-8">
              {[
                {
                  number: 1,
                  title: "AI Crawlers Were Blocked",
                  description:
                    "Their robots.txt file, last updated in 2019, was blocking GPTBot and other AI crawlers entirely. AI platforms couldn\u2019t access any of their content.",
                },
                {
                  number: 2,
                  title: "No Entity Clarity",
                  description:
                    "Their website described their services in marketing language but never clearly stated what they do, where they operate, or what differentiates them in a format AI could parse.",
                },
                {
                  number: 3,
                  title: "Zero Structured Data",
                  description:
                    "No schema markup on any page. AI systems had no machine-readable signals to understand their business type, service area, or offerings.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="flex items-start gap-4 bg-bg-alt rounded-xl p-5"
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
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
              <p className="text-text-primary leading-relaxed">
                <span className="font-bold text-secondary">The result:</span>{" "}
                After implementing the audit&apos;s recommendations, the
                company began appearing in ChatGPT responses for their primary
                service queries within 6 weeks. They now receive measurable
                referral traffic from AI platforms &mdash; a channel that
                didn&apos;t exist for them before the audit.
              </p>
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
            Choose the audit that fits your needs. Every option includes a
            written report and a 30-minute walkthrough call.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <PricingCard
              title="AI Visibility Audit (Solo)"
              price="$297"
              description="Full audit + written report + action plan"
              features={[
                "Full AI visibility audit",
                "Written report with screenshots",
                "Competitor comparison",
                "Prioritized action plan",
                "30-min walkthrough call",
              ]}
              ctaText="Get Started"
              ctaHref={CALENDLY_URL}
            />
            <PricingCard
              title="AI + GBP Bundle"
              price="$447"
              description="Save $47"
              features={[
                "AI Visibility Audit",
                "GBP Audit",
                "Both reports + action plans",
                "30-min walkthrough call",
              ]}
              ctaText="Get Started"
              ctaHref={CALENDLY_URL}
            />
            <PricingCard
              title="AI + Review Bundle"
              price="$447"
              description="Save $47"
              features={[
                "AI Visibility Audit",
                "Review Intelligence Audit",
                "Both reports + action plans",
                "30-min walkthrough call",
              ]}
              ctaText="Get Started"
              ctaHref={CALENDLY_URL}
            />
            <PricingCard
              title="Full Digital Visibility"
              price="$597"
              description="Save $94"
              features={[
                "All 3 audits",
                "Complete reports + action plans",
                "Priority delivery",
                "30-min walkthrough call",
              ]}
              ctaText="Get Started"
              ctaHref={CALENDLY_URL}
              badge="Most Popular"
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
            Frequently Asked Questions About AI Visibility
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
            <Link href="/review-audit" className="group block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all">
              <h3 className="text-lg font-bold text-secondary group-hover:text-primary transition-colors">Review Intelligence Audit</h3>
              <p className="mt-2 text-sm text-text-muted">Your reviews shape AI recommendations. Find out what they&apos;re really saying.</p>
            </Link>
            <Link href="/gbp-audit" className="group block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all">
              <h3 className="text-lg font-bold text-secondary group-hover:text-primary transition-colors">Google Business Profile Audit</h3>
              <p className="mt-2 text-sm text-text-muted">AI platforms pull data from your GBP. Make sure it&apos;s accurate and complete.</p>
            </Link>
            <Link href="/packages" className="group block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all">
              <h3 className="text-lg font-bold text-secondary group-hover:text-primary transition-colors">Full Digital Visibility Package</h3>
              <p className="mt-2 text-sm text-text-muted">Bundle all three audits and save $94 with our most popular package.</p>
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        headline="Ready to Find Out Where You Stand?"
        description="Businesses that optimize for AI search now are building an early advantage that will compound as AI-driven traffic grows."
        buttonText="Get My AI Visibility Audit &mdash; $297"
        buttonHref={CALENDLY_URL}
        secondaryButtonText="Book a Free Strategy Call First"
        secondaryButtonHref={CALENDLY_URL}
        showContact
      />
    </>
  );
}
