import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center">
      <div className="max-w-xl mx-auto px-4 text-center">
        <p className="text-6xl font-bold text-primary mb-4">404</p>
        <h1 className="text-3xl font-bold text-secondary mb-4">
          Page Not Found
        </h1>
        <p className="text-text-muted mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="/ai-visibility-audit"
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors"
          >
            AI Visibility Audit
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
          <Link href="/review-audit" className="text-text-muted hover:text-primary transition-colors">
            Review Audit
          </Link>
          <Link href="/gbp-audit" className="text-text-muted hover:text-primary transition-colors">
            GBP Audit
          </Link>
          <Link href="/google-ads" className="text-text-muted hover:text-primary transition-colors">
            Google Ads
          </Link>
          <Link href="/packages" className="text-text-muted hover:text-primary transition-colors">
            Packages
          </Link>
        </div>
      </div>
    </section>
  );
}
