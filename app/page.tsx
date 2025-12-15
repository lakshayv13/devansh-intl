"use client";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import WhySection from "./whySection";
import Image from "next/image";
import { ReviewSection } from "./reviewSection";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-Y3TG2JESL2`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Y3TG2JESL2', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      {/* Hero Section - Main value proposition */}
      <section className="flex justify-between" aria-labelledby="hero-heading">
        <article className="flex flex-col items-center lg:items-start justify-center gap-4 py-0 lg:py-[8rem]">
          <div className="inline-block max-w-full lg:max-w-lg text-left text-center lg:text-start justify-center">
            <h1 id="hero-heading" className={title()}>
              Get your documents verfied with our top of the line{" "}
              <span className={title({ color: "violet" })}>services</span>.
            </h1>
            <br />
            <h2 className={subtitle({ class: "mt-4" })}>
              We specialize in providing efficient and reliable{" "}
              <Link
                href="/services"
                className="text-violet-500 hover:underline"
              >
                document attestation services
              </Link>
              , ensuring your credentials are globally recognized. Experience
              seamless solutions with us.
            </h2>
          </div>
          <div className="flex gap-3">
            <Link
              isExternal
              className={buttonStyles({
                color: "secondary",
                variant: "ghost",
              })}
              href={siteConfig.links.docs}
            >
              Get a qoute
            </Link>
            {/* Internal link to services for better crawlability */}
            <Link
              href="/services"
              className={buttonStyles({
                color: "primary",
                variant: "bordered",
              })}
            >
              View Services
            </Link>
          </div>
        </article>
        <Image
          src="/document.png"
          alt="Professional document attestation and legalization services"
          className="hidden object-contain lg:inline"
          width={500}
          height={600}
          priority
          fetchPriority="high"
        />
      </section>

      {/* Why Choose Us Section */}
      <WhySection />

      {/* Customer Reviews Section */}
      <ReviewSection />
    </>
  );
}
