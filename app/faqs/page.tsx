"use client";
import { title } from "@/components/primitives";
import {Accordion, AccordionItem} from "@nextui-org/accordion";
import { siteConfig } from "@/config/site";

export default function App() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div className="w-full">
      <h1 className={title()}>Frequently Asked Questions</h1>
    <Accordion variant="splitted" className="w-full mt-10">
      {
        siteConfig.faqs.map((item) => {
          return (
            <AccordionItem className="w-full text-justify" key={item.index} aria-label={item.question} title={item.question}>
              {item.answer}
            </AccordionItem>
          )
        }) 
      }
    </Accordion>
    </div>
  );
}