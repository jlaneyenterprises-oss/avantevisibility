import { type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  headline: string;
  subheadline: string;
  primaryCTA?: { text: string; href: string };
  secondaryCTA?: { text: string; href: string };
  trustBadges?: string[];
  illustration?: ReactNode;
  showBanner?: boolean;
  bannerImage?: string;
  lastUpdated?: string;
}

function AuthorBadge({ lastUpdated }: { lastUpdated?: string }) {
  return (
    <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
      <Link href="/about" className="flex items-center gap-2.5 group">
        <Image
          src="/jolyn.jpg"
          alt="JoLyn Laney"
          width={32}
          height={32}
          className="rounded-full object-cover"
        />
        <span className="text-sm text-white/70 group-hover:text-primary-light transition-colors">
          By <span className="font-medium text-white/90">JoLyn Laney</span>, Founder
        </span>
      </Link>
      {lastUpdated && (
        <span className="text-xs text-white/50">
          Last updated: {lastUpdated}
        </span>
      )}
    </div>
  );
}

export default function Hero({
  headline,
  subheadline,
  primaryCTA,
  secondaryCTA,
  trustBadges,
  showBanner = false,
  bannerImage = "/banner.jpg",
  lastUpdated,
}: HeroProps) {
  if (showBanner) {
    return (
      <section className="relative bg-secondary overflow-hidden">
        {/* Full-width banner image */}
        <div className="relative w-full">
          <Image
            src={bannerImage}
            alt="Avante Visibility - AI Visibility & Growth Strategy"
            width={4128}
            height={1024}
            className="w-full h-auto"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-secondary/80" />
        </div>

        {/* Content below banner */}
        <div className="relative bg-gradient-to-b from-secondary/90 to-secondary px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {headline}
            </h1>
            <p className="mt-5 text-base md:text-lg text-primary-light/80 leading-relaxed max-w-2xl mx-auto">
              {subheadline}
            </p>

            {(primaryCTA || secondaryCTA) && (
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                {primaryCTA && (
                  <a
                    href={primaryCTA.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-3.5 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors text-base shadow-lg shadow-primary/25"
                  >
                    {primaryCTA.text}
                  </a>
                )}
                {secondaryCTA && (
                  <a
                    href={secondaryCTA.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-3.5 border-2 border-primary/40 text-primary-light font-medium rounded-lg hover:bg-primary/10 transition-colors text-base"
                  >
                    {secondaryCTA.text}
                  </a>
                )}
              </div>
            )}

            {trustBadges && trustBadges.length > 0 && (
              <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
                {trustBadges.map((badge) => (
                  <div
                    key={badge}
                    className="flex items-center gap-2 text-sm text-gray-400"
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

  // Subpage hero: dark teal gradient without banner image
  return (
    <section className="relative bg-gradient-to-br from-secondary via-secondary-light to-secondary text-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            {headline}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-primary-light/70 leading-relaxed">
            {subheadline}
          </p>

          {(primaryCTA || secondaryCTA) && (
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              {primaryCTA && (
                <a
                  href={primaryCTA.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-3.5 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors text-base shadow-lg shadow-primary/25"
                >
                  {primaryCTA.text}
                </a>
              )}
              {secondaryCTA && (
                <a
                  href={secondaryCTA.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-3.5 border-2 border-primary/40 text-primary-light font-medium rounded-lg hover:bg-primary/10 transition-colors text-base"
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
                  className="flex items-center gap-2 text-sm text-gray-400"
                >
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  {badge}
                </div>
              ))}
            </div>
          )}

          {lastUpdated && <AuthorBadge lastUpdated={lastUpdated} />}
        </div>
      </div>
    </section>
  );
}
