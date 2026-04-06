import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import HeroIllustration from "@/components/HeroIllustration";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import {
  Check,
  FileCheck,
  DollarSign,
  Clock,
  Shield,
  User,
  TrendingUp,
  Send,
  ClipboardList,
  Handshake,
} from "lucide-react";

const BOOKING_URL = "https://cal.com/provemyads/15min";

export const metadata: Metadata = {
  title: "White-Label AI & Local SEO Audits for Agencies",
  description:
    "Offer white-label AI visibility, GBP, and review audits under your brand. Wholesale pricing, fast turnaround, no client minimums. Built for agencies.",
  openGraph: {
    title: "White-Label AI & Local SEO Audits for Agencies",
    description:
      "Offer white-label AI visibility, GBP, and review audits under your brand. Wholesale pricing, fast turnaround, no client minimums. Built for agencies.",
    images: [
      {
        url: "https://avantevisibility.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "White-Label AI & Local SEO Audits for Agencies",
      },
    ],
  },
};

const pricingData = [
  {
    audit: "AI Visibility Audit",
    wholesale: "$147",
    retail: "$297",
    margin: "$150 (50%+)",
  },
  {
    audit: "Review Intelligence Audit",
    wholesale: "$97",
    retail: "$197",
    margin: "$100 (50%+)",
  },
  {
    audit: "Google Business Profile Audit",
    wholesale: "$97",
    retail: "$197",
    margin: "$100 (50%+)",
  },
  {
    audit: "Full Digital Visibility Package",
    wholesale: "$297",
    retail: "$597",
    margin: "$300 (50%+)",
    highlighted: true,
  },
];

const processSteps = [
  {
    number: 1,
    icon: ClipboardList,
    title: "Intake",
    description:
      "Client submits info through your process. You control the relationship and the intake experience from start to finish.",
  },
  {
    number: 2,
    icon: FileCheck,
    title: "We Do the Work",
    description:
      "Full audit completed using our proprietary process. Your team stays focused on what you do best.",
  },
  {
    number: 3,
    icon: Send,
    title: "We Send You the Report",
    description:
      "Delivered within 3\u20135 business days. Rush turnaround available for time-sensitive client needs.",
  },
  {
    number: 4,
    icon: Handshake,
    title: "You Deliver and Own the Relationship",
    description:
      "Present the report under your brand. Your client never sees our name. The relationship stays yours.",
  },
];

const partnerBenefits = [
  {
    icon: Shield,
    title: "Specialized Expertise",
    description:
      "AI visibility, GEO, and local SEO audits require deep, constantly evolving knowledge. We live in this space every day so you don\u2019t have to build that expertise in-house.",
  },
  {
    icon: Clock,
    title: "Consistent Turnaround (3\u20135 Days)",
    description:
      "Every audit is delivered within 3\u20135 business days, with rush options available. Your clients get fast results, and you get a reliable timeline you can promise.",
  },
  {
    icon: FileCheck,
    title: "Real Reports, Not Templates",
    description:
      "Every audit is custom. We don\u2019t run your client\u2019s URL through a tool and hand you the output. Each report is a manual, expert-driven analysis with prioritized, actionable recommendations.",
  },
  {
    icon: DollarSign,
    title: "No Minimums, No Contracts",
    description:
      "Send us one audit or twenty. There are no monthly minimums and no long-term contracts. The partnership works on your schedule and at your pace.",
  },
  {
    icon: User,
    title: "Supportive Relationship",
    description:
      "You get direct access to JoLyn \u2014 not a support ticket system, not a chatbot. When you have questions about a client situation, you get a real conversation with a real person.",
  },
];

const servicesAvailable = [
  "AI Visibility Audit (GEO / AEO Audit)",
  "Review Intelligence Audit",
  "Google Business Profile Audit",
  "Full Digital Visibility Package",
  "Custom bundle configurations",
];

export default function PartnersPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
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
            name: "Agency Partners",
            item: "https://avantevisibility.com/partners",
          },
        ],
      },
      {
        "@type": "Service",
        name: "White-Label AI Visibility and Local SEO Audits",
        description:
          "White-label AI visibility, GBP, and review intelligence audits delivered under your agency\u2019s brand with wholesale pricing, fast turnaround, and no client minimums.",
        url: "https://avantevisibility.com/partners",
        provider: {
          "@type": "Organization",
          name: "Avante Visibility",
          url: "https://avantevisibility.com",
        },
        serviceType: "White-Label Digital Marketing Audits",
        areaServed: "US",
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
          { label: "Agency Partners" },
        ]}
      />

      <Hero
        headline="White-Label Audits for Agencies: Grow Your Services, Keep Your Brand"
        subheadline="Your clients are asking about AI search, GEO, and why their Google Business Profile isn&apos;t performing. If you don&apos;t have a ready answer &mdash; and a ready service &mdash; another agency will. Our white-label audit program gives you a complete AI and local visibility audit suite under your brand, with wholesale pricing, fast turnaround, and zero client minimums."
        primaryCTA={{
          text: "Apply for a Partner Account",
          href: BOOKING_URL,
        }}
        secondaryCTA={{
          text: "Book a Partner Intro Call",
          href: BOOKING_URL,
        }}
        illustration={<HeroIllustration className="w-full h-full" />}
      />

      {/* The Opportunity */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                Your Clients Need These Audits. Now You Can Offer Them.
              </h2>
              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>
                  Our <strong>white-label audit</strong> program lets agencies
                  offer AI visibility, review intelligence, and GBP audits under
                  their own brand. The GEO (Generative Engine Optimization) market was valued at{" "}
                  <span className="font-bold text-secondary">
                    $886 million in 2024
                  </span>{" "}
                  and is projected to reach{" "}
                  <span className="font-bold text-secondary">
                    $7.3 billion by 2031
                  </span>
                  , growing at a{" "}
                  <span className="font-bold text-secondary">34% CAGR</span>.
                  That means every year you wait to offer these services, the
                  opportunity gap widens.
                </p>
                <p>
                  Most agencies aren&apos;t yet equipped to deliver these audits.
                  We are &mdash; and we&apos;ll do it under your name.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-3">
                <TrendingUp className="w-5 h-5 text-primary shrink-0" />
                <p className="text-sm font-medium text-secondary">
                  Add a high-margin service line without building new internal
                  capabilities.
                </p>
              </div>
            </div>
            <div className="relative h-[320px] rounded-2xl overflow-hidden shadow-lg">
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

      {/* White-Label Audit Suite */}
      <section className="bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">
              White-Label Audit Suite
            </h2>
            <p className="mt-4 text-text-muted max-w-2xl mx-auto leading-relaxed">
              All audits are delivered in a professionally formatted report that
              you can brand with your agency&apos;s logo and colors.
            </p>
          </div>

          {/* Pricing Table */}
          <div className="max-w-4xl mx-auto">
            {/* Table Header — hidden on mobile */}
            <div className="hidden md:grid md:grid-cols-4 gap-4 px-6 py-3 text-sm font-semibold text-text-muted uppercase tracking-wide">
              <div>Audit</div>
              <div className="text-center">Wholesale Price</div>
              <div className="text-center">Suggested Retail</div>
              <div className="text-center">Your Margin</div>
            </div>

            {/* Table Rows */}
            <div className="space-y-3">
              {pricingData.map((item) => (
                <div
                  key={item.audit}
                  className={`rounded-xl border p-6 ${
                    item.highlighted
                      ? "bg-primary/5 border-primary/30"
                      : "bg-white border-gray-200"
                  }`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                    <div>
                      <p className="font-semibold text-secondary">
                        {item.audit}
                      </p>
                    </div>
                    <div className="text-center">
                      <span className="md:hidden text-sm text-text-muted">
                        Wholesale:{" "}
                      </span>
                      <span className="font-bold text-secondary text-lg">
                        {item.wholesale}
                      </span>
                    </div>
                    <div className="text-center">
                      <span className="md:hidden text-sm text-text-muted">
                        Suggested Retail:{" "}
                      </span>
                      <span className="text-text-muted">{item.retail}</span>
                    </div>
                    <div className="text-center">
                      <span className="md:hidden text-sm text-text-muted">
                        Your Margin:{" "}
                      </span>
                      <span className="font-semibold text-primary">
                        {item.margin}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Volume Pricing Tiers */}
            <div className="mt-10 bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-secondary text-center mb-4">
                Volume Pricing
              </h3>
              <p className="text-sm text-text-muted text-center mb-6">
                The more audits you send, the more you save. Discounts apply to all audit types.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-bg-alt rounded-xl">
                  <p className="text-2xl font-bold text-primary">10%</p>
                  <p className="text-sm font-semibold text-secondary mt-1">off wholesale</p>
                  <p className="text-xs text-text-muted mt-2">5&ndash;9 audits/month</p>
                </div>
                <div className="text-center p-4 bg-primary/5 border border-primary/20 rounded-xl">
                  <p className="text-2xl font-bold text-primary">15%</p>
                  <p className="text-sm font-semibold text-secondary mt-1">off wholesale</p>
                  <p className="text-xs text-text-muted mt-2">10&ndash;19 audits/month</p>
                </div>
                <div className="text-center p-4 bg-bg-alt rounded-xl">
                  <p className="text-2xl font-bold text-primary">20%</p>
                  <p className="text-sm font-semibold text-secondary mt-1">off wholesale</p>
                  <p className="text-xs text-text-muted mt-2">20+ audits/month</p>
                </div>
              </div>
              <p className="mt-4 text-center text-xs text-text-muted">
                Example: At 10+ audits/month, an AI Visibility Audit drops to ~$125 wholesale (your margin: $172+).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-4">
            The White-Label Process
          </h2>
          <p className="text-text-muted text-center mb-12 max-w-2xl mx-auto leading-relaxed">
            From intake to delivery, the process is designed to be seamless for
            you and invisible to your clients.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow relative"
                >
                  <div className="flex items-center justify-center w-10 h-10 bg-primary text-white rounded-lg font-bold text-sm mb-4">
                    {step.number}
                  </div>
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-secondary text-lg mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-12">
            What Makes This Partnership Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {partnerBenefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="bg-white border border-gray-200 rounded-xl p-6"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-secondary text-lg mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-4">
            Services Available for White-Label
          </h2>
          <p className="text-text-muted text-center mb-12 max-w-2xl mx-auto leading-relaxed">
            Every service can be delivered under your brand with your agency
            logo, colors, and contact information.
          </p>
          <div className="max-w-2xl mx-auto">
            <ul className="space-y-3">
              {servicesAvailable.map((service) => (
                <li
                  key={service}
                  className="flex items-center gap-4 bg-bg-alt rounded-xl p-5"
                >
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-text-primary font-medium">{service}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Partner FAQ */}
      <section className="bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-12">
            Common Partner Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "Can I set my own retail pricing?",
                a: "Absolutely. The retail prices shown are suggestions based on market rates. You set whatever price works for your client base and positioning. Many partners charge more than our suggested retail.",
              },
              {
                q: "Will you ever contact my clients directly?",
                a: "Never. Your client relationship is yours. We deliver the report to you, and you deliver it to your client. We don\u2019t reach out to, market to, or communicate with your clients in any way.",
              },
              {
                q: "What if my client has technical questions about the report?",
                a: "You have direct access to JoLyn. If a client question comes up that you can\u2019t answer, message or call us and we\u2019ll help you prepare a response. We\u2019re your behind-the-scenes team.",
              },
              {
                q: "How do I submit audit requests?",
                a: "Once approved as a partner, you\u2019ll receive a simple intake form to submit client details. Email works too. We keep the process lightweight so it fits into however your agency already operates.",
              },
              {
                q: "Is there a minimum commitment or contract?",
                a: "No minimums and no contracts. Send us one audit or fifty. The partnership works on your schedule. Volume discounts kick in automatically based on your monthly submissions.",
              },
              {
                q: "Can reports be branded with my agency\u2019s logo and colors?",
                a: "Yes. All reports are delivered white-labeled with your agency branding. Your client will never see our name anywhere in the deliverable.",
              },
            ].map((faq) => (
              <div
                key={faq.q}
                className="bg-white border border-gray-200 rounded-xl p-6"
              >
                <h3 className="font-semibold text-secondary">{faq.q}</h3>
                <p className="mt-2 text-sm text-text-muted leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        headline="Ready to Add These Services to Your Agency?"
        description="Let&apos;s talk about how a white-label partnership works for your specific client mix and volume."
        buttonText="Apply for a Partner Account"
        buttonHref={BOOKING_URL}
        secondaryButtonText="Book a Partner Intro Call"
        secondaryButtonHref={BOOKING_URL}
        showContact
      />
    </>
  );
}
