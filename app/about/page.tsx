import type { Metadata } from "next";
import Image from "next/image";
import CTASection from "@/components/CTASection";
import HeroIllustration from "@/components/HeroIllustration";
import { Briefcase, Cpu, MessageCircle, BarChart3 } from "lucide-react";

export const metadata: Metadata = {
  title: "About Avante Visibility — 20 Years of Digital Marketing Expertise",
  description:
    "Founded by a 20-year digital marketing veteran who saw AI search coming and built the tools to keep businesses visible.",
  openGraph: {
    title: "About Avante Visibility — 20 Years of Digital Marketing Expertise",
    description:
      "Founded by a 20-year digital marketing veteran who saw AI search coming and built the tools to keep businesses visible.",
  },
};

const values = [
  {
    icon: Briefcase,
    title: "We've been in the trenches",
    description: "Not theory, real agency experience",
  },
  {
    icon: Cpu,
    title: "AI-powered, human-guided",
    description: "Automation for speed, expertise for strategy",
  },
  {
    icon: MessageCircle,
    title: "Plain English, always",
    description: "No jargon, no dashboards you'll never check",
  },
  {
    icon: BarChart3,
    title: "Results you can see",
    description: "Every report shows exactly what changed and why",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-secondary to-primary text-white overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-40 pointer-events-none">
          <HeroIllustration className="w-full h-full" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Built by a 20-Year Digital Marketing Veteran
            </h1>
          </div>
        </div>
      </section>

      {/* Story */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            {/* Photo Placeholder */}
            <div className="flex justify-center">
              <div className="relative w-72 h-80 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/jolyn.jpg"
                  alt="JoLyn Laney — Founder of Avante Visibility"
                  fill
                  className="object-cover"
                  sizes="300px"
                />
              </div>
            </div>

            {/* Story Text */}
            <div>
              <h2 className="text-2xl font-bold text-secondary mb-6">
                The Story
              </h2>
              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>
                  20+ years in Google Ads and digital marketing. Managed millions
                  in ad spend. Saw the shift to AI search early.
                </p>
                <p>
                  Built custom AI automation tools (Claude Code + Google Ads API)
                  to diagnose problems faster than any human could.
                </p>
                <p>
                  Founded Avante Visibility to help local businesses stay visible
                  as AI reshapes how customers find and choose businesses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Image Banner */}
      <section className="relative h-[300px]">
        <Image
          src="https://images.unsplash.com/photo-1497215842964-222b430dc094?w=1600&h=600&fit=crop&q=80"
          alt="Modern office workspace representing forward-thinking digital strategy"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-secondary/70 flex items-center justify-center">
          <p className="text-2xl md:text-3xl font-bold text-white text-center max-w-3xl px-4">
            Helping local businesses stay visible as AI reshapes search.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-12">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-xl p-6 border border-gray-200"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-secondary">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-text-muted">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Ready to work together?"
        buttonText="Book a Free Strategy Call"
      />
    </>
  );
}
