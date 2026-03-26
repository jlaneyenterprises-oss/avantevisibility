import { type ReactNode } from "react";

const CALENDLY_URL = "https://calendly.com/avantevisibility";

interface HeroProps {
  headline: string;
  subheadline: string;
  primaryCTA?: { text: string; href: string };
  secondaryCTA?: { text: string; href: string };
  trustBadges?: string[];
  illustration?: ReactNode;
}

export default function Hero({
  headline,
  subheadline,
  primaryCTA,
  secondaryCTA,
  trustBadges,
  illustration,
}: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-secondary to-primary text-white overflow-hidden">
      {/* Background illustration */}
      {illustration && (
        <div className="absolute inset-0 flex items-center justify-center opacity-40 pointer-events-none" aria-hidden="true" role="presentation">
          {illustration}
        </div>
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            {headline}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed">
            {subheadline}
          </p>

          {(primaryCTA || secondaryCTA) && (
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              {primaryCTA && (
                <a
                  href={primaryCTA.href}
                  className="inline-flex items-center px-8 py-3.5 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors text-base"
                >
                  {primaryCTA.text}
                </a>
              )}
              {secondaryCTA && (
                <a
                  href={secondaryCTA.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-3.5 border-2 border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors text-base"
                >
                  {secondaryCTA.text}
                </a>
              )}
            </div>
          )}

          {trustBadges && trustBadges.length > 0 && (
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
              {trustBadges.map((badge) => (
                <div
                  key={badge}
                  className="flex items-center gap-2 text-sm text-gray-300"
                >
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  {badge}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
