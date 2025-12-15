import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact Us | Offices in Delhi & Visakhapatnam",
  description:
    "Get in touch with Devansh International for all your document attestation needs. Visit our offices in New Delhi or Visakhapatnam, or contact us online.",
  keywords: [
    "Contact DIDC",
    "Attestation Agency Delhi",
    "Visakhapatnam Attestation Office",
    "Document Legalization Contact",
  ],
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  mainEntity: {
    "@type": "Organization",
    name: siteConfig.name,
    contactPoint: siteConfig.addresses.map((addr) => ({
      "@type": "ContactPoint",
      telephone: `+91-${addr.number}`,
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    })),
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block w-full">{children}</div>
      </section>
    </>
  );
}
