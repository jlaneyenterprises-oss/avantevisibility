import Link from "next/link";

const BOOKING_URL = "https://cal.com/provemyads/15min";

interface CTASectionProps {
  headline: string;
  description?: string;
  buttonText: string;
  buttonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  showContact?: boolean;
}

export default function CTASection({
  headline,
  description,
  buttonText,
  buttonHref = BOOKING_URL,
  secondaryButtonText,
  secondaryButtonHref = BOOKING_URL,
  showContact = false,
}: CTASectionProps) {
  const isExternal = buttonHref.startsWith("http");
  const isSecondaryExternal = secondaryButtonHref.startsWith("http");

  return (
    <section className="relative bg-gradient-to-br from-secondary via-secondary-light to-secondary overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            {headline}
          </h2>
          {description && (
            <p className="mt-4 text-gray-300 leading-relaxed">{description}</p>
          )}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            {isExternal ? (
              <a
                href={buttonHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3.5 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-all duration-200 text-base hover:shadow-lg hover:shadow-primary/25"
              >
                {buttonText}
              </a>
            ) : (
              <Link
                href={buttonHref}
                className="inline-flex items-center px-8 py-3.5 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-all duration-200 text-base hover:shadow-lg hover:shadow-primary/25"
              >
                {buttonText}
              </Link>
            )}
            {secondaryButtonText &&
              (isSecondaryExternal ? (
                <a
                  href={secondaryButtonHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-3.5 border border-white/20 text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-200 text-base"
                >
                  {secondaryButtonText}
                </a>
              ) : (
                <Link
                  href={secondaryButtonHref}
                  className="inline-flex items-center px-8 py-3.5 border border-white/20 text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-200 text-base"
                >
                  {secondaryButtonText}
                </Link>
              ))}
          </div>
          {showContact && (
            <p className="mt-6 text-sm text-gray-400">
              Questions? Email{" "}
              <a
                href="mailto:jolyn@avantevisibility.com"
                className="text-primary-light hover:underline"
              >
                jolyn@avantevisibility.com
              </a>{" "}
              or call{" "}
              <a
                href="tel:+17025255958"
                className="text-primary-light hover:underline"
              >
                (702) 525-5958
              </a>
              .
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
