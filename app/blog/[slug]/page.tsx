import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import { getAllPosts, getPostBySlug, getAuthor } from "@/lib/blog";
import { Calendar, Clock, ArrowLeft, User, Lightbulb, RefreshCw } from "lucide-react";
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
  const author = getAuthor(post.author);
  return {
    title: post.title,
    description: post.description,
    authors: author ? [{ name: author.name, url: author.url }] : undefined,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.dateModified,
      authors: [post.author],
      url: `https://avantevisibility.com/blog/${post.slug}`,
      images: [
        {
          url: "https://avantevisibility.com/opengraph-image",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const author = getAuthor(post.author);

  const publishedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const modifiedDate = new Date(post.dateModified).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

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
        image: "https://avantevisibility.com/opengraph-image",
        datePublished: post.date,
        dateModified: post.dateModified,
        wordCount: post.content.split(/\s+/).length,
        author: {
          "@type": "Person",
          name: post.author,
          ...(author
            ? {
                url: author.url,
                jobTitle: author.title,
                description: author.bio,
                sameAs: author.sameAs,
                worksFor: {
                  "@id": "https://avantevisibility.com/#organization",
                },
              }
            : {}),
        },
        publisher: {
          "@id": "https://avantevisibility.com/#organization",
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `https://avantevisibility.com/blog/${post.slug}`,
        },
        isPartOf: {
          "@id": "https://avantevisibility.com/#website",
        },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["article h1", "article .post-description", "article .key-takeaways"],
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
        <section className="bg-gradient-to-br from-secondary via-secondary-light to-secondary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 text-sm text-white/70 mb-4">
                <span className="inline-flex items-center px-2.5 py-0.5 bg-white/20 text-white text-xs font-medium rounded-full">
                  {post.category}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                {post.title}
              </h1>
              <p className="mt-4 text-lg text-white/80 post-description">
                {post.description}
              </p>

              {/* Author byline + dates */}
              <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                {author && (
                  <Link href="/about" className="flex items-center gap-3 group">
                    <Image
                      src="/jolyn.jpg"
                      alt={author.name}
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-medium text-white group-hover:text-primary-light transition-colors">
                        By {author.name}
                      </p>
                      <p className="text-xs text-white/60">Founder, Avante Visibility</p>
                    </div>
                  </Link>
                )}
                <div className="flex items-center gap-4 text-xs text-white/60">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    Published: {publishedDate}
                  </span>
                  {post.dateModified !== post.date && (
                    <span className="flex items-center gap-1">
                      <RefreshCw className="w-3 h-3" />
                      Updated: {modifiedDate}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
            {/* Key Takeaways TL;DR block */}
            {post.keyTakeaways && post.keyTakeaways.length > 0 && (
              <div className="max-w-3xl mx-auto mb-10 p-6 bg-primary/5 border border-primary/20 rounded-xl key-takeaways">
                <div className="flex items-center gap-2 mb-3">
                  <Lightbulb className="w-5 h-5 text-primary" />
                  <h2 className="text-base font-bold text-secondary">Key Takeaways</h2>
                </div>
                <ul className="space-y-2">
                  {post.keyTakeaways.map((takeaway, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-text-primary leading-relaxed">
                      <span className="text-primary font-bold mt-0.5 shrink-0">{i + 1}.</span>
                      {takeaway}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="max-w-3xl mx-auto prose prose-lg prose-gray prose-headings:text-secondary prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-secondary prose-li:marker:text-primary">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>

            {/* Author Bio */}
            {author && (
              <div className="max-w-3xl mx-auto mt-12 p-6 md:p-8 bg-bg-alt rounded-xl border border-gray-200">
                <div className="flex items-start gap-4">
                  <Image
                    src="/jolyn.jpg"
                    alt={author.name}
                    width={56}
                    height={56}
                    className="rounded-full object-cover shrink-0"
                  />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-1">
                      About the Author
                    </p>
                    <p className="font-bold text-secondary">{author.name}</p>
                    <p className="text-sm text-primary font-medium">
                      {author.title}
                    </p>
                    <p className="mt-2 text-sm text-text-muted leading-relaxed">
                      {author.bio}
                    </p>
                    {author.sameAs.length > 0 && (
                      <div className="mt-3 flex items-center gap-3">
                        {author.sameAs.map((link) => (
                          <a
                            key={link}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-primary hover:underline"
                          >
                            {link.includes("linkedin")
                              ? "LinkedIn"
                              : link.includes("x.com") || link.includes("twitter")
                                ? "X / Twitter"
                                : link.includes("instagram")
                                  ? "Instagram"
                                  : "Profile"}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* CTA card */}
            <div className="max-w-3xl mx-auto mt-8 p-6 md:p-8 bg-gradient-to-br from-secondary to-secondary-light rounded-xl">
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <div>
                  <p className="font-bold text-white">
                    Ready to check your AI visibility?
                  </p>
                  <p className="mt-1 text-sm text-gray-300">
                    Our AI Visibility Audit goes beyond what you can test
                    manually. We analyze your presence across every major AI
                    platform and give you a prioritized action plan.
                  </p>
                  <Link
                    href="/ai-visibility-audit"
                    className="inline-flex items-center mt-3 px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-dark transition-colors"
                  >
                    Get Your AI Visibility Audit
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
