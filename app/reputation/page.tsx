import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import HeroIllustration from "@/components/HeroIllustration";
import PricingCard from "@/components/PricingCard";
import CTASection from "@/components/CTASection";
import {
  Mail,
  Eye,
  Bot,
  BarChart3,
  Bell,
  RefreshCw,
} from "lucide-react";

const CALENDLY_URL = "https://calendly.com/avantevisibility";

export const metadata: Metadata = {
  title: "Reputation & Review Engine — Become the Business AI Recommends",
  description:
    "Automated review generation, monitoring, and AI-powered response drafting. Build the reputation that makes AI recommend you first.",
  openGraph: {
    title: "Reputation & Review Engine — Become the Business AI Recommends",
    description:
      "Automated review generation, monitoring, and AI-powered response drafting. Build the reputation that makes AI recommend you first.",
  },
};

const features = [
  {
    icon: Mail,
    text: "Automated review request campaigns (email + SMS)",
  },
  {
    icon: Eye,
    text: "Review monitoring across Google, Yelp, Facebook, industry-specific platforms",
  },
  {
    icon: Bot,
    text: "AI-powered response drafting for every review",
  },
  {
    icon: BarChart3,
    text: "Monthly reputation score tracking",
  },
  {
    icon: Bell,
    text: "Negative review alerts (instant)",
  },
  {
    icon: RefreshCw,
    text: "Monthly AI visibility re-check — are your reviews moving the needle in AI search?",
  },
];

export default function ReputationPage() {
  return (
    <>
      <Hero
        headline="Reputation & Review Engine"
        subheadline="Become the Business AI Recommends First"
        primaryCTA={{
          text: "Start Building Your Reputation Engine",
          href: CALENDLY_URL,
        }}
        secondaryCTA={{
          text: "Book a Free Strategy Call",
          href: CALENDLY_URL,
        }}
        illustration={<HeroIllustration className="w-full h-full" />}
      />

      {/* Key Stat */}
      <section className="bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-secondary">
              <span className="text-accent">67%</span> of consumers don&apos;t
              fact-check AI recommendations
            </p>
          </div>
        </div>
      </section>

      {/* The Connection — with image */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                Why Reviews Matter More Than Ever
              </h2>
              <p className="text-text-muted leading-relaxed text-lg">
                AI systems prioritize businesses with strong, recent, authentic
                reviews. If AI recommends your competitor because they have fresher
                reviews, you lose that customer before you ever had a chance.
              </p>
            </div>
            <div className="relative h-[320px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop&q=80"
                alt="Person reading reviews on a smartphone"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((item) => (
              <div
                key={item.text}
                className="flex items-start gap-4 bg-white rounded-xl p-5"
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
      </section>

      {/* Pricing */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-12">
            Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard
              title="Essential"
              price="$297"
              period="month"
              description="Single location"
              features={[
                "Review monitoring",
                "Automated review requests",
                "Monthly report",
              ]}
              ctaText="Get Started"
            />
            <PricingCard
              title="Growth"
              price="$497"
              period="month"
              description="Everything in Essential, plus more"
              features={[
                "Everything in Essential",
                "AI response drafting",
                "Competitor review tracking",
                "Bi-weekly AI visibility check",
              ]}
              ctaText="Get Started"
              badge="Most Popular"
              highlighted
            />
            <PricingCard
              title="Multi-Location"
              price="$397"
              period="month per location"
              description="3+ locations, includes everything in Growth"
              features={[
                "Everything in Growth",
                "Per-location dashboards",
                "Volume pricing for 3+ locations",
                "Dedicated account support",
              ]}
              ctaText="Get Started"
              badge="Best Value"
            />
          </div>
        </div>
      </section>

      <CTASection
        headline="Ready to Build Your Reputation Engine?"
        buttonText="Start Building Your Reputation Engine"
      />
    </>
  );
}
