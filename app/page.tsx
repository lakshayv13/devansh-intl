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
      <section className="flex justify-between">
        <div className="flex flex-col items-center lg:items-start justify-center gap-4 py-0 lg:py-[8rem]">
          <div className="inline-block max-w-full lg:max-w-lg text-left text-center lg:text-start justify-center">
            <h1 className={title()}>
              Get your documents verfied with our top of the line&nbsp;
            </h1>
            <h1 className={title({ color: "violet" })}>services</h1>
            <h1 className={title()}>.</h1>
            <br />
            <h2 className={subtitle({ class: "mt-4" })}>
              We specialize in providing efficient and reliable document
              attestation services, ensuring your credentials are globally
              recognized. Experience seamless solutions with us.
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
          </div>
        </div>
        <Image
          src="/document.png"
          alt="document"
          className="hidden object-contain lg:inline"
          width={500}
          height={600}
        />
      </section>
      <WhySection />
      <ReviewSection />
    </>
  );
}
