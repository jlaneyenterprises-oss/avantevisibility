import type { Metadata } from "next";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

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
            name: "Blog",
            item: "https://avantevisibility.com/blog",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: `https://avantevisibility.com/blog/${post.slug}`,
          },
        ],
      },
      {
        "@type": "Article",
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        author: {
          "@type": "Person",
          name: post.author,
        },
        publisher: {
          "@id": "https://avantevisibility.com/#organization",
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `https://avantevisibility.com/blog/${post.slug}`,
        },
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
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />

      <article>
        {/* Header */}
        <section className="bg-gradient-to-br from-secondary to-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 text-sm text-white/70 mb-4">
                <span className="inline-flex items-center px-2.5 py-0.5 bg-white/20 text-white text-xs font-medium rounded-full">
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
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                {post.title}
              </h1>
              <p className="mt-4 text-lg text-white/80">{post.description}</p>
              <p className="mt-4 text-sm text-white/60">
                By {post.author}
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
            <div className="max-w-3xl mx-auto prose prose-lg prose-gray prose-headings:text-secondary prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-secondary prose-li:marker:text-primary">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>

            {/* Author + CTA card */}
            <div className="max-w-3xl mx-auto mt-12 p-6 md:p-8 bg-bg-alt rounded-xl border border-gray-200">
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <div>
                  <p className="font-bold text-secondary">
                    Ready to check your AI visibility?
                  </p>
                  <p className="mt-1 text-sm text-text-muted">
                    Our AI Visibility Audit goes beyond what you can test
                    manually. We analyze your presence across every major AI
                    platform and give you a prioritized action plan.
                  </p>
                  <Link
                    href="/ai-visibility-audit"
                    className="inline-flex items-center mt-3 px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-dark transition-colors"
                  >
                    Get Your AI Visibility Audit — $297
                  </Link>
                </div>
              </div>
            </div>

            {/* Back */}
            <div className="max-w-3xl mx-auto mt-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> Back to all posts
              </Link>
            </div>
          </div>
        </section>
      </article>

      <CTASection
        headline="Want to Know Your AI Visibility Score?"
        buttonText="Get Your AI Visibility Audit"
        buttonHref="/ai-visibility-audit"
        secondaryButtonText="Book a Free Strategy Call"
        showContact
      />
    </>
  );
}
