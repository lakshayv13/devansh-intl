import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Our Services | Attestation, Apostille & Visa",
  description:
    "Comprehensive document legalization services: MEA Attestation, Embassy Attestation, Apostille, Translation, and Visa assistance in India.",
  keywords: [
    "MEA Attestation Services",
    "Apostille Services India",
    "Embassy Attestation Delhi",
    "Visa Consultants",
    "Language Translation Services",
    "Birth Certificate Apostille",
    "Degree Attestation",
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Document Legalization",
  provider: {
    "@type": "LocalBusiness",
    name: siteConfig.name,
    image: `${siteConfig.url}/logo.png`,
    telephone: "+91-7011284949",
    address: {
      "@type": "PostalAddress",
      addressLocality: "New Delhi",
      addressCountry: "IN",
    },
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Legalization Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Apostille Attestation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Embassy Attestation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "MEA Attestation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Translation Services",
        },
      },
    ],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
    </>
  );
}
