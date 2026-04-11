import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import { getAllPosts, getPostBySlug, getAuthor } from "@/lib/blog";
import { Calendar, Clock, ArrowLeft, Lightbulb, RefreshCw, ArrowRight, HelpCircle } from "lucide-react";
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
  const metaTitle = post.metaTitle ?? post.title;
  const metaDescription = post.metaDescription ?? post.description;
  const ogImage = post.coverImage
    ? {
        url: `https://avantevisibility.com${post.coverImage}`,
        width: post.coverImageWidth ?? 1275,
        height: post.coverImageHeight ?? 1150,
        alt: post.coverImageAlt ?? post.title,
      }
    : {
        url: "https://avantevisibility.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: post.title,
      };
  return {
    title: metaTitle,
    description: metaDescription,
    authors: author ? [{ name: author.name, url: author.url }] : undefined,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.dateModified,
      authors: [post.author],
      url: `https://avantevisibility.com/blog/${post.slug}`,
      images: [ogImage],
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

  // Split content on the optional audit-button marker so we can render a
  // real React CTA between the intro and the rest of the article.
  const AUDIT_MARKER = "{{AUDIT_BUTTON}}";
  const [contentBeforeCta, contentAfterCta] = post.content.includes(AUDIT_MARKER)
    ? post.content.split(AUDIT_MARKER)
    : [post.content, ""];

  const graph: Record<string, unknown>[] = [
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
      image: post.coverImage
        ? `https://avantevisibility.com${post.coverImage}`
        : "https://avantevisibility.com/opengraph-image",
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
  ];

  if (post.faqs && post.faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: post.faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.answer,
        },
      })),
    });
  }

  return (
    <>
      {graph.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              ...schema,
            }),
          }}
        />
      ))}

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
                    Published: <time dateTime={post.date}>{publishedDate}</time>
                  </span>
                  {post.dateModified !== post.date && (
                    <span className="flex items-center gap-1">
                      <RefreshCw className="w-3 h-3" />
                      Updated: <time dateTime={post.dateModified}>{modifiedDate}</time>
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cover Image */}
        {post.coverImage && (
          <section className="bg-bg-alt border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
              <div className="max-w-3xl mx-auto">
                <Image
                  src={post.coverImage}
                  alt={post.coverImageAlt ?? post.title}
                  width={post.coverImageWidth ?? 1275}
                  height={post.coverImageHeight ?? 1150}
                  className="w-full h-auto rounded-xl border border-gray-200 shadow-lg"
                  priority
                />
              </div>
            </div>
          </section>
        )}

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

            <div className="max-w-3xl mx-auto prose prose-lg prose-gray prose-headings:text-secondary prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-secondary prose-li:marker:text-primary prose-table:text-sm prose-th:bg-primary/5 prose-th:text-secondary prose-th:font-semibold prose-td:align-top prose-table:border prose-table:border-gray-200">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {contentBeforeCta}
              </ReactMarkdown>

              {post.auditCta && (
                <div className="not-prose my-10">
                  <div className="p-6 md:p-7 bg-gradient-to-br from-primary to-primary-dark rounded-2xl shadow-lg shadow-primary/20">
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/80 mb-2">
                      Free strategy session
                    </p>
                    <Link
                      href={post.auditCta.href}
                      className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-secondary text-base font-bold rounded-lg hover:bg-bg-alt transition-colors shadow-md"
                    >
                      {post.auditCta.label}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    {post.auditCta.subtext && (
                      <p className="mt-3 text-sm text-white/90 leading-relaxed">
                        {post.auditCta.subtext}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {contentAfterCta && (
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {contentAfterCta}
                </ReactMarkdown>
              )}
            </div>

            {/* FAQ Block */}
            {post.faqs && post.faqs.length > 0 && (
              <div className="max-w-3xl mx-auto mt-12">
                <div className="flex items-center gap-2 mb-5">
                  <HelpCircle className="w-5 h-5 text-primary" />
                  <h2 className="text-2xl md:text-3xl font-bold text-secondary">
                    Frequently Asked Questions
                  </h2>
                </div>
                <FAQAccordion items={post.faqs} />
              </div>
            )}

            {/* Bottom Audit CTA (second prominent button) */}
            {post.auditCta && (
              <div className="max-w-3xl mx-auto mt-12">
                <div className="p-6 md:p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 rounded-2xl text-center">
                  <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">
                    Ready to see what you&apos;re missing?
                  </p>
                  <h3 className="text-xl md:text-2xl font-bold text-secondary mb-3">
                    {post.auditCta.label}
                  </h3>
                  {post.auditCta.subtext && (
                    <p className="text-sm text-text-muted max-w-xl mx-auto mb-5 leading-relaxed">
                      {post.auditCta.subtext}
                    </p>
                  )}
                  <Link
                    href={post.auditCta.href}
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-white text-base font-bold rounded-lg hover:bg-primary-dark transition-colors shadow-md"
                  >
                    {post.auditCta.label}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            )}

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
