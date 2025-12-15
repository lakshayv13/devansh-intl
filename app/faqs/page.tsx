"use client";
import { title } from "@/components/primitives";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function App() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div className="w-full">
      <Breadcrumb />

      <article>
        <header>
          <h1 className={title()}>Frequently Asked Questions</h1>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Find answers to common questions about{" "}
            <Link href="/services" className="text-violet-500 hover:underline">
              our attestation services
            </Link>
            . Need more help?{" "}
            <Link href="/contact" className="text-violet-500 hover:underline">
              Contact us
            </Link>
            .
          </p>
        </header>

        <Accordion variant="splitted" className="w-full mt-10">
          {siteConfig.faqs.map((item) => {
            return (
              <AccordionItem
                className="w-full text-justify"
                key={item.index}
                aria-label={item.question}
                title={item.question}
              >
                {item.answer}
              </AccordionItem>
            );
          })}
        </Accordion>
      </article>
    </div>
  );
}
