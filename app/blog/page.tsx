import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import { getAllPosts } from "@/lib/blog";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — AI Visibility & Local SEO Insights",
  description:
    "Practical guides on AI search visibility, local SEO, Google Business Profile optimization, and review management for local businesses.",
  openGraph: {
    title: "Blog — AI Visibility & Local SEO Insights",
    description:
      "Practical guides on AI search visibility, local SEO, Google Business Profile optimization, and review management for local businesses.",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Avante Visibility Blog",
    description:
      "Practical guides on AI search visibility, local SEO, and review management for local businesses.",
    url: "https://avantevisibility.com/blog",
    publisher: {
      "@id": "https://avantevisibility.com/#organization",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              AI Visibility & Local SEO Insights
            </h1>
            <p className="mt-4 text-lg text-white/80">
              Practical guides to help local businesses get found in AI search,
              improve their online reputation, and grow their digital visibility.
            </p>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl mx-auto space-y-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 hover:shadow-lg hover:border-primary/30 transition-all"
              >
                <div className="flex items-center gap-3 text-sm text-text-muted mb-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-secondary mb-3">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-primary transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="text-text-muted leading-relaxed mb-4">
                  {post.description}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all"
                >
                  Read more <ArrowRight className="w-4 h-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Want to Know Your AI Visibility Score?"
        description="Our AI Visibility Audit tests your business across ChatGPT, Perplexity, Google AI, and more — then gives you an action plan to fix what's missing."
        buttonText="Get Your AI Visibility Audit"
        buttonHref="/ai-visibility-audit"
        showContact
      />
    </>
  );
}
