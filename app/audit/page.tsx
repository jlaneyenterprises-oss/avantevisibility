import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import HeroIllustration from "@/components/HeroIllustration";
import PricingCard from "@/components/PricingCard";
import CTASection from "@/components/CTASection";
import {
  MessageSquare,
  Users,
  FileCode,
  Star,
  MapPin,
  Monitor,
  Check,
} from "lucide-react";

const CALENDLY_URL = "https://calendly.com/avantevisibility";

export const metadata: Metadata = {
  title: "AI Visibility Audit — See Where You Stand in AI Search",
  description:
    "Find out if ChatGPT, Google AI, and Perplexity are recommending your business or your competitors. Get a clear report in 3-5 days.",
  openGraph: {
    title: "AI Visibility Audit — See Where You Stand in AI Search",
    description:
      "Find out if ChatGPT, Google AI, and Perplexity are recommending your business or your competitors. Get a clear report in 3-5 days.",
  },
};

const auditCovers = [
  {
    icon: MessageSquare,
    text: "Brand mentions across ChatGPT, Google AI Overviews, Perplexity, Gemini, Copilot",
  },
  {
    icon: Users,
    text: "Competitor comparison — who's showing up for your key service queries",
  },
  {
    icon: FileCode,
    text: "Content structure analysis — can AI systems understand your website?",
  },
  {
    icon: Star,
    text: "Review and reputation signal check — are your reviews helping or hurting AI recommendations?",
  },
  {
    icon: MapPin,
    text: "Local listing accuracy — are your business details consistent across platforms?",
  },
  {
    icon: Monitor,
    text: "Landing page AI-readiness check",
  },
];

const whatYouGet = [
  "Plain-English report with screenshots showing exactly where you appear (or don't)",
  "Competitor gap analysis",
  "Prioritized action plan ranked by impact",
  "30-minute walkthrough call to review findings",
];

export default function AuditPage() {
  return (
    <>
      <Hero
        headline="AI Visibility Audit"
        subheadline="Find Out If AI Is Recommending Your Business — Or Your Competitors"
        primaryCTA={{ text: "Book Your Audit", href: CALENDLY_URL }}
        secondaryCTA={{
          text: "Have Questions? Book a Free 15-Min Call",
          href: CALENDLY_URL,
        }}
        illustration={<HeroIllustration className="w-full h-full" />}
      />

      {/* What the Audit Covers */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8">
                What the Audit Covers
              </h2>
              <div className="space-y-4">
                {auditCovers.map((item) => (
                  <div
                    key={item.text}
                    className="flex items-start gap-4 bg-bg-alt rounded-xl p-4"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-sm text-text-primary leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80"
                alt="Analytics dashboard showing AI visibility data"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[350px] rounded-2xl overflow-hidden shadow-lg order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop&q=80"
                alt="Professional reviewing a detailed business report"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8">
                What You Get
              </h2>
              <ul className="space-y-4">
                {whatYouGet.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-text-primary leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-12">
            Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <PricingCard
              title="Standard Audit"
              price="$997"
              description="Single location, delivered in 3-5 business days"
              features={[
                "AI visibility check across all major platforms",
                "Competitor comparison",
                "Content structure analysis",
                "Prioritized action plan",
                "30-minute walkthrough call",
              ]}
              ctaText="Book Your Audit"
            />
            <PricingCard
              title="Comprehensive Audit"
              price="$1,997"
              description="Multi-platform deep dive with competitor mapping, 5-7 business days"
              features={[
                "Everything in Standard Audit",
                "Deep competitor mapping across all AI platforms",
                "Full local listing audit",
                "Landing page AI-readiness assessment",
                "Detailed action plan with priority ranking",
                "30-minute walkthrough call",
              ]}
              ctaText="Book Your Audit"
              badge="Most Popular"
              highlighted
            />
          </div>
        </div>
      </section>

      <CTASection
        headline="Ready to See Where You Stand?"
        buttonText="Book Your Audit"
      />
    </>
  );
}
