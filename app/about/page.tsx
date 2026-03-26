import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import HeroIllustration from "@/components/HeroIllustration";
import { MessageCircle, Target, RefreshCw, User, MapPin } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/avantevisibility";

export const metadata: Metadata = {
  title: "About Avante Visibility | Jolyn — Digital Marketing Expert",
  description:
    "20+ years in digital marketing, Google Ads specialist, and pioneer in AI visibility audits. Meet Jolyn and learn why Avante Visibility exists.",
  openGraph: {
    title: "About Avante Visibility | Jolyn — Digital Marketing Expert",
    description:
      "20+ years in digital marketing, Google Ads specialist, and pioneer in AI visibility audits. Meet Jolyn and learn why Avante Visibility exists.",
  },
};

const values = [
  {
    icon: MessageCircle,
    title: "We speak plainly.",
    description:
      "No glossary needed. Every report, recommendation, and conversation is written for business owners, not SEO technicians.",
  },
  {
    icon: Target,
    title: "We prioritize impact.",
    description:
      "Every finding in our audits is ranked by expected impact so you know what to fix first and what can wait.",
  },
  {
    icon: RefreshCw,
    title: "We stay current.",
    description:
      "AI search is evolving fast. We continuously update our methodology, tools, and benchmarks so our audits reflect how AI platforms work right now.",
  },
  {
    icon: User,
    title: "We&apos;re small on purpose.",
    description:
      "Avante Visibility is a boutique practice, not a volume agency. Jolyn is personally involved in every engagement.",
  },
  {
    icon: MapPin,
    title: "We&apos;re Las Vegas-based and nationally focused.",
    description:
      "Our office is in Las Vegas, but our clients span the country. Local expertise, national reach.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jolyn",
    jobTitle: "Founder, Avante Visibility",
    description:
      "20+ year digital marketing veteran specializing in Google Ads strategy, local search optimization, and AI visibility audits for local businesses.",
    worksFor: {
      "@type": "Organization",
      name: "Avante Visibility",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Avante Visibility",
    url: "https://avantevisibility.com",
    description:
      "AI visibility audits, review intelligence, and GBP optimization for local businesses and agencies.",
    founder: {
      "@type": "Person",
      name: "Jolyn",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Las Vegas",
      addressRegion: "NV",
      addressCountry: "US",
    },
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-secondary to-primary text-white overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-40 pointer-events-none">
          <HeroIllustration className="w-full h-full" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              We Built the Tools We Wished Existed
            </h1>
          </div>
        </div>
      </section>

      {/* Jolyn&apos;s Story */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-12">
            20+ Years In. Still Building What&apos;s Next.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            {/* Photo */}
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
            <div className="space-y-4 text-text-muted leading-relaxed">
              <p>
                I&apos;ve spent more than two decades in digital marketing &mdash;
                long enough to have watched search change in ways most people
                didn&apos;t see coming.
              </p>
              <p>
                I started in Google Ads when &quot;pay-per-click&quot; was still a
                new concept and most businesses didn&apos;t believe search
                advertising would outlast banner ads. I built campaigns for local
                businesses &mdash; restaurants, medical practices, service
                companies, retailers &mdash; and watched those campaigns drive real
                revenue when they were built right and bleed budget when they
                weren&apos;t.
              </p>
              <p>
                Over time, I built specializations in Google Ads strategy, landing
                page optimization, and local search. I became the person agencies
                called when their local campaigns weren&apos;t performing. I became
                the person business owners called when they couldn&apos;t figure out
                why their competitors were showing up on Google Maps and they
                weren&apos;t.
              </p>
              <p>
                Then, in 2023, something shifted that I couldn&apos;t ignore.
              </p>
              <p>
                The businesses I was working with were starting to ask a different
                question: &quot;Why isn&apos;t my business showing up when someone
                asks ChatGPT?&quot; At first, I told them it was too early to worry
                about. But the question kept coming &mdash; and I kept testing.
              </p>
              <p>
                What I found was that AI search was not just growing &mdash; it was
                already influencing customer decisions in ways that local businesses
                had no framework to understand or address. The tools to measure it
                didn&apos;t exist. The audits didn&apos;t exist. The vocabulary
                barely existed.
              </p>
              <p className="font-semibold text-secondary">So I built them.</p>
              <p>
                Avante Visibility is the result of a specific belief: that local
                businesses deserve access to the same level of diagnostic
                intelligence and strategic expertise that enterprise brands get from
                their agency teams. The audits we offer &mdash; AI visibility,
                review intelligence, GBP optimization &mdash; are the deliverables I
                built because I kept needing them and couldn&apos;t find them
                anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values — How We Work */}
      <section className="bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-12">
            How We Work
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
                <p className="mt-2 text-sm text-text-muted leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Differentiator */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-8">
              Why Avante Visibility
            </h2>
            <div className="space-y-4 text-text-muted leading-relaxed">
              <p>
                Most digital marketing agencies offer AI visibility as an
                afterthought &mdash; a blog post they added to sound current, or a
                vague &quot;AI optimization&quot; checkbox on their services page.
                Avante Visibility is built specifically around the intersection of AI
                search, local visibility, and reputation intelligence.
              </p>
              <p className="text-xl font-semibold text-secondary">
                This is not a pivot. It&apos;s a purpose.
              </p>
              <p>
                If you&apos;re a business owner wondering why competitors are
                showing up in AI recommendations and you&apos;re not, we built this
                for you. If you&apos;re an agency that needs AI and local SEO audit
                capacity under your brand, we built this for you too.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="Let&apos;s Work Together"
        description="Whether you&apos;re a local business owner, a multi-location operator, or an agency building out your service suite &mdash; we&apos;d like to hear about your situation and show you what we can find."
        buttonText="Book a Free Strategy Call"
        secondaryButtonText="View Our Audits and Packages"
        secondaryButtonHref="/packages"
        showContact
      />
    </>
  );
}
