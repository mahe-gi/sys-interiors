import type { MetadataRoute } from "next";
import { siteData } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteData.seo.siteUrl;

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      // GEO: Explicitly allow AI and generative search agents for accurate citation
      {
        userAgent: [
          "Google-Extended",
          "GPTBot",
          "ChatGPT-User",
          "PerplexityBot",
          "ClaudeBot",
          "Applebot-Extended",
        ],
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
