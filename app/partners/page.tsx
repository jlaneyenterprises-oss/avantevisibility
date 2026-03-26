import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import HeroIllustration from "@/components/HeroIllustration";
import PricingCard from "@/components/PricingCard";
import CTASection from "@/components/CTASection";
import {
  FileCheck,
  BarChart3,
  DollarSign,
  Headphones,
  Palette,
} from "lucide-react";

const CALENDLY_URL = "https://calendly.com/avantevisibility";

export const metadata: Metadata = {
  title: "White-Label AI Visibility for Agencies — Partner Program",
  description:
    "Add AI search visibility services to your agency's menu. We do the work, your brand gets the credit. Wholesale pricing available.",
  openGraph: {
    title: "White-Label AI Visibility for Agencies — Partner Program",
    description:
      "Add AI search visibility services to your agency's menu. We do the work, your brand gets the credit. Wholesale pricing available.",
  },
};

const agencyBenefits = [
  {
    icon: FileCheck,
    text: "White-label AI visibility audits (your branding, your reports)",
  },
  {
    icon: BarChart3,
    text: "White-label reputation management (your client-facing dashboard)",
  },
  {
    icon: DollarSign,
    text: "Wholesale pricing — significant margin for your agency to mark up",
  },
  {
    icon: Headphones,
    text: "Dedicated partner support",
  },
  {
    icon: Palette,
    text: "Co-branded or fully white-labeled deliverables",
  },
];

export default function PartnersPage() {
  return (
    <>
      <Hero
        headline="White-Label AI Visibility for Agencies"
        subheadline="Add AI Search Visibility to Your Service Menu — Without Building It Yourself"
        primaryCTA={{
          text: "Apply for Partner Program",
          href: CALENDLY_URL,
        }}
        secondaryCTA={{ text: "Book a Partner Call", href: CALENDLY_URL }}
        illustration={<HeroIllustration className="w-full h-full" />}
      />

      {/* Key Messaging — dark exclusive section */}
      <section className="bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <p className="text-lg text-gray-300 leading-relaxed">
                Your agency clients are asking about AI search. Their traffic is
                dropping. They&apos;re reading about GEO and AEO. You need an
                answer — <span className="text-white font-semibold">we are that answer</span>.
                We do the work, your brand gets the credit.
              </p>
            </div>
            <div className="relative h-[280px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop&q=80"
                alt="Agency team collaborating on a client project"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What Agencies Get */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-12">
            What Your Agency Gets
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {agencyBenefits.map((item) => (
              <div
                key={item.text}
                className="flex items-start gap-4 bg-bg-alt rounded-xl p-5"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-text-primary leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-12">
            Partner Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <PricingCard
              title="Partner Audit"
              price="$497"
              period="audit"
              description="Your agency resells at $997–$1,997+"
              features={[
                "Full AI visibility audit",
                "White-labeled report with your branding",
                "Competitor analysis included",
                "Client-ready deliverable",
              ]}
              ctaText="Apply Now"
            />
            <PricingCard
              title="Partner Reputation Engine"
              price="$197"
              period="month per client"
              description="Your agency resells at $297–$597+"
              features={[
                "Full reputation management suite",
                "White-labeled dashboard",
                "Automated review requests",
                "AI response drafting",
                "Monthly AI visibility re-check",
              ]}
              ctaText="Apply Now"
              highlighted
            />
          </div>
          <p className="mt-8 text-center text-sm text-text-muted">
            Volume discounts available for 10+ clients.{" "}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Let&apos;s talk
            </a>
            .
          </p>
        </div>
      </section>

      <CTASection
        headline="Ready to Add AI Visibility to Your Agency?"
        buttonText="Apply for Partner Program"
      />
    </>
  );
}
