import { Check } from "lucide-react";

interface PricingCardProps {
  title: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
  badge?: string;
  highlighted?: boolean;
}

export default function PricingCard({
  title,
  price,
  period,
  description,
  features,
  ctaText,
  ctaHref,
  badge,
  highlighted = false,
}: PricingCardProps) {
  return (
    <div
      className={`relative rounded-2xl p-8 flex flex-col transition-all duration-200 hover:-translate-y-1 ${
        highlighted
          ? "bg-white border-2 border-primary shadow-xl shadow-primary/10 ring-1 ring-primary/10 hover:shadow-2xl hover:shadow-primary/15"
          : "bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:border-gray-300"
      }`}
    >
      {badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center px-4 py-1 bg-accent text-white text-xs font-bold rounded-full uppercase tracking-wider shadow-md shadow-accent/30">
            {badge}
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-xl font-bold text-secondary">{title}</h3>
        <div className="mt-3 flex items-baseline gap-1">
          <span className="text-4xl font-bold text-text-primary">{price}</span>
          {period && (
            <span className="text-text-muted text-sm">/{period}</span>
          )}
        </div>
        <p className="mt-2 text-sm text-text-muted">{description}</p>
      </div>

      <ul className="space-y-3 mb-8 flex-1">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
              <Check className="w-3 h-3 text-primary" />
            </div>
            <span className="text-sm text-text-primary">{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href={ctaHref}
        target="_blank"
        rel="noopener noreferrer"
        className={`block w-full text-center py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
          highlighted
            ? "bg-primary text-white hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25"
            : "bg-secondary text-white hover:bg-secondary-light hover:shadow-lg"
        }`}
      >
        {ctaText}
      </a>
    </div>
  );
}
