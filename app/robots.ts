import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

/**
 * Advanced robots.txt configuration
 * Controls search engine crawling behavior
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/"], // Block non-public routes
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        crawlDelay: 0, // No delay for Google
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        crawlDelay: 1, // Slight delay for Bing
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
