import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { seoPages } from "@/lib/seo-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const blogEntries = posts.map((post) => ({
    url: `https://selfetape.com/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const seoEntries = seoPages.map((page) => ({
    url: `https://selfetape.com/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: page.slug === "last-minute-self-tape-checklist" ? 0.85 : 0.9,
  }));

  return [
    {
      url: "https://selfetape.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: "https://selfetape.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://selfetape.com/privacy",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://selfetape.com/terms",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    ...seoEntries,
    ...blogEntries,
  ];
}
