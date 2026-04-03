import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ContactForm from "./ContactForm";
import { Mail, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Avante Visibility. Questions about AI visibility audits, review intelligence, GBP optimization, or Google Ads? We'd love to hear from you.",
  openGraph: {
    title: "Contact Us",
    description:
      "Get in touch with Avante Visibility. Questions about AI visibility audits, review intelligence, GBP optimization, or Google Ads? We'd love to hear from you.",
    images: [
      {
        url: "https://avantevisibility.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Contact Us",
      },
    ],
  },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Avante Visibility",
    url: "https://avantevisibility.com/contact",
    mainEntity: {
      "@id": "https://avantevisibility.com/#organization",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Breadcrumb
        items={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Let&apos;s Talk About Your Visibility
            </h1>
            <p className="mt-4 text-lg text-white/80">
              Have a question about our audits, need a custom proposal, or want
              to explore a partnership? Fill out the form and JoLyn will get back
              to you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-bg-alt rounded-xl p-6 border border-gray-200">
                <h2 className="text-lg font-bold text-secondary mb-4">
                  Other Ways to Reach Us
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-secondary">
                        Email
                      </p>
                      <a
                        href="mailto:jolyn@avantevisibility.com"
                        className="text-sm text-primary hover:underline"
                      >
                        jolyn@avantevisibility.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-secondary">
                        Phone
                      </p>
                      <a
                        href="tel:+17025255958"
                        className="text-sm text-primary hover:underline"
                      >
                        (702) 525-5958
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-secondary">
                        Service Area
                      </p>
                      <p className="text-sm text-text-muted">Nationwide (USA)</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-bg-alt rounded-xl p-6 border border-gray-200">
                <h2 className="text-lg font-bold text-secondary mb-2">
                  Prefer to Book Directly?
                </h2>
                <p className="text-sm text-text-muted mb-4">
                  Skip the form and schedule a free strategy call.
                </p>
                <a
                  href="https://calendly.com/avantevisibility"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-dark transition-colors"
                >
                  Book a Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
