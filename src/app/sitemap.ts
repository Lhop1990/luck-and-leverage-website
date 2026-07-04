import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/caseStudies";

const BASE = "https://luckandleverage.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: `${BASE}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${BASE}/obsession-framework`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/case-studies`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...caseStudies.map((s) => ({
      url: `${BASE}/case-studies/${s.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
    {
      url: `${BASE}/contact`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    // /talent is intentionally excluded.
  ];
}
