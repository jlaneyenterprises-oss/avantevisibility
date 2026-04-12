import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://avantevisibility.com";

  const servicePages = [
    { url: "ai-visibility-audit", lastModified: "2026-03-20" },
    { url: "review-audit", lastModified: "2026-03-18" },
    { url: "gbp-audit", lastModified: "2026-03-18" },
    { url: "google-ads", lastModified: "2026-03-10" },
    { url: "geo-audit", lastModified: "2026-03-25" },
    { url: "technical-seo-audit", lastModified: "2026-03-10" },
    { url: "speed-audit", lastModified: "2026-03-10" },
    { url: "conversion-audit", lastModified: "2026-03-10" },
    { url: "competitor-intelligence", lastModified: "2026-03-10" },
    { url: "algorithm-recovery", lastModified: "2026-03-10" },
    { url: "packages", lastModified: "2026-03-22" },
    { url: "monthly-plans", lastModified: "2026-03-22" },
  ];

  const blogPosts = getAllPosts();

  return [
    {
      url: baseUrl,
      lastModified: "2026-04-03",
      changeFrequency: "weekly",
      priority: 1,
    },
    ...servicePages.map((page) => ({
      url: `${baseUrl}/${page.url}`,
      lastModified: page.lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    {
      url: `${baseUrl}/ai-score`,
      lastModified: "2026-04-12",
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/med-spa`,
      lastModified: "2026-04-09",
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: "2026-04-09",
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/dentists`,
      lastModified: "2026-04-12",
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/law-firms`,
      lastModified: "2026-04-12",
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/home-services`,
      lastModified: "2026-04-12",
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/partners`,
      lastModified: "2026-03-15",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: "2026-04-03",
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    ...blogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.dateModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    {
      url: `${baseUrl}/contact`,
      lastModified: "2026-02-01",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: "2026-03-01",
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ];
}
