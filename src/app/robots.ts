import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // /talent is a hidden recruiter-facing landing page reachable only
        // via direct URL or campaign links; keep it out of search indexes.
        disallow: "/talent",
      },
    ],
    sitemap: "https://luckandleverage.com/sitemap.xml",
  };
}
