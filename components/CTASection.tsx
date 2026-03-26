const CALENDLY_URL = "https://calendly.com/avantevisibility";

interface CTASectionProps {
  headline: string;
  buttonText: string;
  buttonHref?: string;
}

export default function CTASection({
  headline,
  buttonText,
  buttonHref = CALENDLY_URL,
}: CTASectionProps) {
  return (
    <section className="bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            {headline}
          </h2>
          <div className="mt-8">
            <a
              href={buttonHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3.5 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors text-base"
            >
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
