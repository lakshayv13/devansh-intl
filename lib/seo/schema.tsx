import { siteConfig } from "@/config/site";

/**
 * JSON-LD Schema Types
 * Type-safe schema builders for common structured data
 */

export interface BreadcrumbItem {
  name: string;
  url: string;
}

/**
 * Generates Website schema with SearchAction
 * Helps Google understand site structure and enables sitelinks search box
 */
export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/**
 * Enhanced Organization schema with detailed business information
 * Critical for local SEO and knowledge graph
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    email: "devanshinternational@gmail.com",
    telephone: "+91-7011284949",
    address: [
      {
        "@type": "PostalAddress",
        streetAddress:
          "B-129, Flat No. 9, Deoli Rd, Pocket A, Duggal Colony, Khanpur",
        addressLocality: "New Delhi",
        addressRegion: "Delhi",
        postalCode: "110062",
        addressCountry: "IN",
      },
      {
        "@type": "PostalAddress",
        streetAddress:
          "Narayana Bhawan, 31-31-21, 3rd floor, flat 3B, Daba Gardens",
        addressLocality: "Visakhapatnam",
        addressRegion: "Andhra Pradesh",
        postalCode: "530020",
        addressCountry: "IN",
      },
    ],
    sameAs: [
      "https://www.facebook.com/devanshinternational/",
      "https://instagram.com/devanshinternational",
    ],
    areaServed: {
      "@type": "Country",
      name: "India",
    },
  };
}

/**
 * Generates BreadcrumbList schema for navigation
 * Improves SERP appearance with breadcrumb trails
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generates Service schema for service pages
 * Helps Google understand service offerings
 */
export function generateServiceSchema(params: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: params.name,
    description: params.description,
    url: params.url,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    serviceType: "Document Legalization",
  };
}

/**
 * Utility to inject JSON-LD script into page
 * Returns script element with proper type and stringified JSON
 */
export function createJsonLdScript(schema: object) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
