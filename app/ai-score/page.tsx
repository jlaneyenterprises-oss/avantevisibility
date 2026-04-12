import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import Hero from "@/components/Hero";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import ScoreForm from "./ScoreForm";

const BOOKING_URL = "https://cal.com/provemyads/15min";

export const metadata: Metadata = {
  title:
    "Free AI Visibility Score | Check If AI Recommends Your Business | Avante Visibility",
  description:
    "Find out if ChatGPT, Perplexity, and Google AI recommend your business. Get your free AI Visibility Score in 15 seconds -- no obligation, instant results.",
  openGraph: {
    title: "Free AI Visibility Score | Avante Visibility",
    description:
      "Find out if AI search platforms recommend your business. Get your free score in 15 seconds.",
    url: "https://avantevisibility.com/ai-score",
    images: [
      {
        url: "https://avantevisibility.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Free AI Visibility Score | Avante Visibility",
      },
    ],
  },
};

const faqItems = [
  {
    question: "What does the AI Visibility Score measure?",
    answer:
      "The AI Visibility Score checks whether your business appears when AI platforms like ChatGPT, Perplexity, and Google AI are asked to recommend businesses in your industry and city. We run 3 real-time queries against AI search platforms and check if your business is mentioned in the responses. The score (0-100) reflects how visible your business is to the growing number of consumers who use AI instead of Google to find local businesses.",
  },
  {
    question: "Is this really free? What's the catch?",
    answer:
      "Yes, it is completely free. There is no credit card required, no obligation, and no hard sell. We built this tool because most business owners have no idea whether AI platforms recommend them or not. The tool gives you a quick snapshot. If you want a deeper analysis (28+ queries, competitive benchmarking, full action plan), that is what our paid AI Visibility Audit provides -- but the free score stands on its own.",
  },
  {
    question: "How accurate is the score?",
    answer:
      "The free score gives you a directional snapshot based on 3 AI queries. It is a reliable indicator of whether AI platforms know about your business, but it is not a comprehensive audit. AI search results can vary by session, phrasing, and timing. Our full AI Visibility Audit tests 28+ queries across all major AI platforms and provides a much more detailed and reliable assessment.",
  },
  {
    question: "What happens with my email address?",
    answer:
      "We send your results to your email and may follow up once to see if you have questions. That is it. We do not sell your information, we do not add you to a marketing blast list, and we do not share your data with anyone. If you want to hear from us, you will need to reach out.",
  },
  {
    question: "My score is low. What should I do?",
    answer:
      "A low score means AI platforms are not finding or recommending your business -- which means you are invisible to a growing share of your market. The most impactful first steps are: complete your Google Business Profile, build your review count to 50+ on Google, add schema markup to your website, and create clear service-specific content. For a full roadmap, book a free strategy call and we will walk you through exactly what to prioritize.",
  },
  {
    question: "Can I run the check more than once?",
    answer:
      "To ensure fair usage, we limit checks to one per visitor per day. If you want to test a different business or run a more comprehensive analysis, book a free strategy call and we will run a live AI search test during the call.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Free AI Visibility Score Tool",
    description:
      "Check if AI search platforms like ChatGPT, Perplexity, and Google AI recommend your business. Get your free score in 15 seconds.",
    url: "https://avantevisibility.com/ai-score",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    provider: {
      "@id": "https://avantevisibility.com/#organization",
    },
  },
  {
    "@context": "https://schema.org",
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
        name: "Free AI Visibility Score",
        item: "https://avantevisibility.com/ai-score",
      },
    ],
  },
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
];

export default function AIScorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Free AI Visibility Score" },
        ]}
      />

      <Hero
        headline="Is AI Recommending Your Business? Find Out in 15 Seconds."
        subheadline="44% of consumers now use AI chat as their primary search tool. When someone asks ChatGPT or Perplexity for the best business in your industry, do you show up? Enter your details below and we will check for you -- free, instant, no obligation."
        primaryCTA={{
          text: "Check My Score Below",
          href: "#score-form",
        }}
        secondaryCTA={{
          text: "Book a Free Strategy Call",
          href: BOOKING_URL,
        }}
        trustBadges={[
          "Free -- No Credit Card Required",
          "Results in 15 Seconds",
          "3 AI Platforms Tested",
          "Instant Recommendations",
        ]}
      />

      {/* Score Form Section */}
      <section id="score-form" className="bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">
              Get Your Free AI Visibility Score
            </h2>
            <p className="mt-4 text-text-muted leading-relaxed">
              We will query 3 major AI platforms with the questions your
              customers actually ask and check if your business appears in the
              answers.
            </p>
          </div>
          <ScoreForm />
        </div>
      </section>

      {/* How It Works */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-16">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "01",
                title: "Enter Your Details",
                desc: "Tell us your business name, website, city, and industry. We use this to craft the exact queries your potential customers are asking AI platforms.",
              },
              {
                step: "02",
                title: "We Query AI Platforms",
                desc: "We run 3 real-time queries against major AI search platforms, checking if your business appears when someone asks for recommendations in your industry and city.",
              },
              {
                step: "03",
                title: "Get Your Score & Recommendations",
                desc: "See your score (0-100), a platform-by-platform breakdown of where you appear (and where you do not), and specific recommendations to improve your AI visibility.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-white">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-secondary mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
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

      <CTASection
        headline="Want the Full Picture? Book a Free Strategy Call."
        description="The free score is a snapshot. During a strategy call, we run a live AI search test across all major platforms, show you exactly who AI recommends instead of you, and walk you through the specific steps to fix it."
        buttonText="Book a Free Strategy Call"
        secondaryButtonText="Learn About Our AI Visibility Audit"
        secondaryButtonHref="/ai-visibility-audit"
        showContact
      />
    </>
  );
}
