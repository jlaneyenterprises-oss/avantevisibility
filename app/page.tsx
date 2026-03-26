import Image from "next/image";
import Hero from "@/components/Hero";
import HeroIllustration from "@/components/HeroIllustration";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { Search, Star, MousePointerClick, Building2 } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/avantevisibility";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Hero
        headline="Your Business Is Invisible to AI. We Fix That."
        subheadline="When customers ask ChatGPT, Perplexity, or Google AI for recommendations, is your business showing up? If not, you're losing customers to competitors who are."
        primaryCTA={{ text: "Get Your AI Visibility Score", href: CALENDLY_URL }}
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
              The Search Game Changed. Did You?
            </h2>
            <p className="mt-6 text-text-muted leading-relaxed">
              AI search (ChatGPT, Google AI Overviews, Perplexity) now influences
              68% of local searches. Traditional SEO alone isn&apos;t enough. When
              someone asks &quot;best [service] near me&quot; to an AI, your
              competitors show up and you don&apos;t. The AI decides based on
              reviews, content structure, authority signals, and brand clarity —
              most local business websites aren&apos;t optimized for any of this.
            </p>
          </div>

          {/* Before/After Cards */}
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
                    recommend <span className="text-primary font-bold">Smith &amp; Co Plumbing</span>.
                    They have 4.9 stars across 200+ reviews, offer 24/7 emergency
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
            How We Make You Visible
          </h2>
          <p className="text-text-muted text-center mb-12 max-w-2xl mx-auto">
            Four core services designed to get your business recommended by AI search engines.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              icon={Search}
              title="AI Visibility Audit"
              description="Find out exactly where you stand across ChatGPT, Google AI, Perplexity, and more."
              href="/audit"
            />
            <ServiceCard
              icon={Star}
              title="Reputation & Review Engine"
              description="Become the business AI recommends with automated review management."
              href="/reputation"
            />
            <ServiceCard
              icon={MousePointerClick}
              title="Google Ads & Landing Pages"
              description="Convert the traffic once you're visible with optimized campaigns."
              href="/google-ads"
            />
            <ServiceCard
              icon={Building2}
              title="Agency White-Label"
              description="Add AI visibility services to your agency's menu."
              href="/partners"
            />
          </div>
        </div>
      </section>

      {/* How It Works - with image */}
      <section className="bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-4">
            How It Works
          </h2>
          <p className="text-text-muted text-center mb-16 max-w-2xl mx-auto">
            A simple three-step process to make your business the one AI recommends.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "We Audit",
                desc: "We check how your business appears across ChatGPT, Google AI, Perplexity, and 5+ AI platforms. You get a clear report showing where you're visible, where you're invisible, and why.",
                img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80",
                alt: "Data analytics dashboard showing search visibility metrics",
              },
              {
                step: "02",
                title: "We Fix",
                desc: "We optimize your digital presence — reviews, content structure, authority signals, local listings — so AI systems confidently recommend you.",
                img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80",
                alt: "Digital marketing optimization workflow on screen",
              },
              {
                step: "03",
                title: "You Grow",
                desc: "More visibility = more recommendations = more customers. We monitor and optimize monthly to keep you ahead.",
                img: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=600&h=400&fit=crop&q=80",
                alt: "Business growth chart trending upward",
              },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
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

      {/* Social Proof */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-bg-alt rounded-full" />
                  <div>
                    <p className="text-sm font-medium text-secondary">
                      Client Name
                    </p>
                    <p className="text-xs text-text-muted">Business Name</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm text-text-muted italic leading-relaxed">
                  &quot;Client testimonials coming soon — launching March
                  2026&quot;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        headline="Ready to See What AI Says About Your Business?"
        buttonText="Get Your Free AI Visibility Score"
      />
    </>
  );
}
