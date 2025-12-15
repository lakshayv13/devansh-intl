"use client";
import { subtitle, title } from "@/components/primitives";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Textarea } from "@nextui-org/input";
import clsx from "clsx";
import PinCard from "./pinCard";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import { MeteorCard } from "./meteorCard";
import { FormEvent, useState } from "react";
import { sendFormUser, sendFormDIDC } from "@/helpers/emailHelper";
import { toast } from "react-toastify";

export default function ContactPage() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendFormDIDC({
      to_name: "Devansh International",
      from_name: fName + " " + lName,
      from_email: email,
      from_mobile: mobile,
      subject: subject,
      message: message,
    });

    sendFormUser({
      to_name: fName + " " + lName,
      to_email: email,
    });

    toast("Check your mail", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    setFName("");
    setLName("");
    setEmail("");
    setMobile("");
    setSubject("");
    setMessage("");
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center mb-16">
        <h1
          className={clsx(
            title(),
            "text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight"
          )}
        >
          Our <span className="text-violet-500">Offices</span>
        </h1>
        <p
          className={clsx(
            subtitle(),
            "mt-4 max-w-2xl mx-auto text-slate-500 dark:text-slate-400 text-lg"
          )}
        >
          Visit our strategic locations to discuss how we can assist in your
          global document attestation needs.
        </p>
      </div>
      <div className="hidden lg:flex justify-center flex-wrap gap-8 mb-20">
        {siteConfig.addresses.map((item, idx) => {
          return (
            <PinCard
              key={idx}
              location={item.location}
              state={item.state}
              name={item.name}
              number={item.number}
              mail={item.mail}
              address={item.address}
            />
          );
        })}
      </div>
      <div className="flex flex-wrap justify-center lg:hidden sm:flex-nowrap gap-5 mb-[5rem]">
        {siteConfig.addresses.map((item, idx) => {
          return (
            <MeteorCard
              key={idx}
              state={item.state}
              name={item.name}
              number={item.number}
              mail={item.mail}
              location={item.address}
            />
          );
        })}
      </div>
      <div className="flex flex-col lg:flex-row w-full items-start justify-between mt-24 gap-12">
        <div className="w-full lg:w-1/2">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Get in <span className="text-violet-500">Touch</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
              Fill out the form below and our team will get back to you within
              24 hours.
            </p>
          </div>
          <form
            className="grid gap-y-6 w-full bg-white dark:bg-zinc-900/50 p-8 rounded-3xl border border-slate-100 dark:border-zinc-800 shadow-sm"
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <div className="flex w-full flex-wrap sm:flex-nowrap gap-4">
              <Input
                size="md"
                type="text"
                label="First Name"
                value={fName}
                onChange={(e) => {
                  setFName(e.target.value);
                }}
                required
                variant="bordered"
                classNames={{
                  inputWrapper:
                    "bg-transparent border-slate-200 dark:border-zinc-700 hover:border-violet-500 focus-within:!border-violet-500",
                }}
              />
              <Input
                size="md"
                type="text"
                label="Last Name"
                value={lName}
                onChange={(e) => {
                  setLName(e.target.value);
                }}
                required
                variant="bordered"
                classNames={{
                  inputWrapper:
                    "bg-transparent border-slate-200 dark:border-zinc-700 hover:border-violet-500 focus-within:!border-violet-500",
                }}
              />
            </div>
            <div className="flex flex-wrap sm:flex-nowrap gap-4">
              <Input
                size="md"
                type="email"
                label="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
                variant="bordered"
                classNames={{
                  inputWrapper:
                    "bg-transparent border-slate-200 dark:border-zinc-700 hover:border-violet-500 focus-within:!border-violet-500",
                }}
              />
              <Input
                size="md"
                type="text"
                label="Mobile Number"
                value={mobile}
                onChange={(e) => {
                  setMobile(e.target.value);
                }}
                required
                variant="bordered"
                classNames={{
                  inputWrapper:
                    "bg-transparent border-slate-200 dark:border-zinc-700 hover:border-violet-500 focus-within:!border-violet-500",
                }}
              />
            </div>
            <div className="flex flex-wrap md:flex-nowrap gap-4">
              <Input
                size="md"
                type="text"
                label="Subject"
                value={subject}
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
                required
                variant="bordered"
                classNames={{
                  inputWrapper:
                    "bg-transparent border-slate-200 dark:border-zinc-700 hover:border-violet-500 focus-within:!border-violet-500",
                }}
              />
            </div>
            <Textarea
              label="Message"
              type="text"
              className="max-w-full"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              required
              variant="bordered"
              minRows={6}
              classNames={{
                inputWrapper:
                  "bg-transparent border-slate-200 dark:border-zinc-700 hover:border-violet-500 focus-within:!border-violet-500",
              }}
            />
            <Button
              type="submit"
              color="secondary"
              size="lg"
              className="w-full font-bold shadow-lg shadow-violet-500/20"
            >
              Send Message
            </Button>
          </form>
        </div>
        <Image
          src="/contact.png"
          alt="didc"
          width={600}
          height={600}
          className="hidden lg:block object-contain"
        />
      </div>
    </div>
  );
}
