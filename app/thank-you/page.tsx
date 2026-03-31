import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Mail, Clock, FileText, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Thank You for Your Order | Avante Visibility",
  description:
    "Your audit order has been received. Here's what happens next.",
  robots: { index: false, follow: false },
};

const nextSteps = [
  {
    icon: Mail,
    title: "Check Your Email",
    description:
      "You'll receive a payment confirmation from Stripe and a welcome email from us within the next few minutes with your intake form.",
  },
  {
    icon: FileText,
    title: "Complete Your Intake Form",
    description:
      "Fill out the short intake form so we understand your business, your market, and your goals. This takes about 5 minutes and helps us deliver a more targeted audit.",
  },
  {
    icon: Clock,
    title: "We Get to Work",
    description:
      "Our team begins your audit immediately. Most audits are delivered within 3\u20135 business days. Bundle and Full Package orders receive priority delivery.",
  },
  {
    icon: Phone,
    title: "Walkthrough Call",
    description:
      "Once your audit is ready, we'll schedule your 30-minute walkthrough call to review every finding together and answer your questions.",
  },
];

export default function ThankYouPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-secondary to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <CheckCircle className="w-16 h-16 text-accent" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Thank You for Your Order!
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed">
              Your payment has been received and your audit is officially
              underway. Here&apos;s exactly what happens next.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-12">
            What Happens Next
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {nextSteps.map((step, index) => (
              <div
                key={step.title}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-primary text-white rounded-lg font-bold text-sm shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-secondary mb-4">
              Questions in the Meantime?
            </h2>
            <p className="text-text-muted leading-relaxed mb-8">
              We&apos;re here to help. Reach out anytime and we&apos;ll get back
              to you within one business day.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="mailto:jolyn@avantevisibility.com"
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
              >
                <Mail className="w-5 h-5" />
                jolyn@avantevisibility.com
              </a>
              <a
                href="tel:+17025255958"
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
              >
                <Phone className="w-5 h-5" />
                (702) 525-5958
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              While You Wait
            </h2>
            <p className="mt-4 text-gray-300 leading-relaxed">
              Check out our blog for tips on improving your digital visibility,
              or learn more about what we do.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/blog"
                className="inline-flex items-center px-8 py-3.5 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors text-base"
              >
                Read the Blog
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center px-8 py-3.5 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors text-base"
              >
                About Avante Visibility
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
