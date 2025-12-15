import { Metadata } from "next";
import { siteConfig } from "@/config/site";

/**
 * SEO-safe title length: 50-60 characters optimal
 * Truncates with ellipsis if exceeds max length
 */
export function formatTitle(title: string, maxLength: number = 60): string {
  if (title.length <= maxLength) return title;
  return title.substring(0, maxLength - 3) + "...";
}

/**
 * SEO-safe description length: 150-160 characters optimal
 * Truncates with ellipsis if exceeds max length
 */
export function formatDescription(
  description: string,
  maxLength: number = 160
): string {
  if (description.length <= maxLength) return description;
  return description.substring(0, maxLength - 3) + "...";
}

/**
 * Generates canonical URL for a given path
 * Ensures consistent URL structure (no trailing slash unless root)
 */
export function getCanonicalUrl(path: string): string {
  const cleanPath = path === "/" ? "" : path.replace(/\/$/, "");
  return `${siteConfig.url}${cleanPath}`;
}

/**
 * Generates Open Graph image URL
 * Falls back to default OG image if none specified
 */
export function getOgImageUrl(imagePath?: string): string {
  const defaultImage = "/og-image.jpg";
  const image = imagePath || defaultImage;
  return `${siteConfig.url}${image}`;
}

/**
 * Base metadata generator with SEO best practices
 * Use this as foundation and extend per route
 */
export function generateBaseMetadata(params: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
}): Metadata {
  const { title, description, path, keywords, ogImage } = params;

  // Enforce SEO-safe lengths
  const safeTitle = formatTitle(title);
  const safeDescription = formatDescription(description);
  const canonicalUrl = getCanonicalUrl(path);
  const ogImageUrl = getOgImageUrl(ogImage);

  return {
    title: safeTitle,
    description: safeDescription,
    keywords: keywords || siteConfig.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: safeTitle,
      description: safeDescription,
      url: canonicalUrl,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: safeTitle,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: safeTitle,
      description: safeDescription,
      images: [ogImageUrl],
      creator: "@devanshintl",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
