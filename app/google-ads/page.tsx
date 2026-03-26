import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import HeroIllustration from "@/components/HeroIllustration";
import PricingCard from "@/components/PricingCard";
import CTASection from "@/components/CTASection";
import {
  Settings,
  Monitor,
  TrendingUp,
  FileText,
} from "lucide-react";

const CALENDLY_URL = "https://calendly.com/avantevisibility";

export const metadata: Metadata = {
  title: "Google Ads & Landing Page Optimization — Stop Wasting Ad Spend",
  description:
    "20+ years of Google Ads expertise combined with AI-powered analysis. Find and fix what's costing you money.",
  openGraph: {
    title: "Google Ads & Landing Page Optimization — Stop Wasting Ad Spend",
    description:
      "20+ years of Google Ads expertise combined with AI-powered analysis. Find and fix what's costing you money.",
  },
};

const features = [
  {
    icon: Settings,
    title: "Full Google Ads Account Audit",
    text: "Campaign structure, bidding, keywords, negative keywords, audience targeting, geo-targeting, search partners, conversion tracking",
  },
  {
    icon: Monitor,
    title: "Landing Page Analysis",
    text: "Load speed, mobile experience, message match, form/CTA functionality, conversion killers",
  },
  {
    icon: TrendingUp,
    title: "Monthly Optimization & Monitoring",
    text: "Ongoing campaign improvements based on performance data and market changes",
  },
  {
    icon: FileText,
    title: "Client-Ready Reporting",
    text: "Clear, actionable reports showing what changed, what improved, and what's next",
  },
];

export default function GoogleAdsPage() {
  return (
    <>
      <Hero
        headline="Google Ads & Landing Page Optimization"
        subheadline="Stop Wasting Ad Spend. Start Converting."
        primaryCTA={{ text: "Get Your Ads Audit", href: CALENDLY_URL }}
        secondaryCTA={{
          text: "Book a Free Strategy Call",
          href: CALENDLY_URL,
        }}
        illustration={<HeroIllustration className="w-full h-full" />}
      />

      {/* Key Messaging with image */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="relative h-[350px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=600&fit=crop&q=80"
                alt="Marketing team analyzing ad campaign performance data"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">
                20+ Years of Google Ads Expertise
              </h2>
              <p className="text-lg text-text-muted leading-relaxed">
                Even if AI is sending you visibility, your landing pages and ad
                campaigns need to convert that attention into customers. We bring
                20+ years of Google Ads expertise combined with AI-powered analysis
                to find and fix what&apos;s costing you money.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-12">
            What&apos;s Included
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {features.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6 border border-gray-200"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-secondary">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-text-muted leading-relaxed">
                  {item.text}
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
            Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <PricingCard
              title="One-Time Audit"
              price="$997"
              description="Google Ads + Landing Page, delivered in 5-7 business days"
              features={[
                "Full Google Ads account audit",
                "Landing page conversion analysis",
                "Prioritized recommendations",
                "30-minute walkthrough call",
              ]}
              ctaText="Get Your Ads Audit"
            />
            <PricingCard
              title="Monthly Management"
              price="$1,497"
              period="month"
              description="Ongoing optimization, reporting, strategy calls"
              features={[
                "Everything in One-Time Audit",
                "Monthly campaign optimization",
                "Landing page improvements",
                "Regular strategy calls",
                "Client-ready reporting",
              ]}
              ctaText="Get Started"
              badge="Best Value"
              highlighted
            />
          </div>
        </div>
      </section>

      <CTASection
        headline="Ready to Stop Wasting Ad Spend?"
        buttonText="Get Your Ads Audit"
      />
    </>
  );
}
