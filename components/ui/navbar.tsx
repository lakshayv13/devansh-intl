'use client';
import React, { useState } from "react";
import { Navbar as UINavbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { DropdownItem, DropdownTrigger, Dropdown, DropdownMenu } from "@nextui-org/dropdown";
import { ChevronDown, Lock, Activity, Flash, Server, TagUser, Scale, MEALogo, ApostilleLogo, EmbassyAttestationLogo, TranslationIcon } from "./Icons.jsx";
import { AcmeLogo } from "./AcmeLogo.jsx";
import { ThemeSwitch } from "@/components/theme-switch";
import Image from "next/image.js";

export default function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);  

  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} height={16} width={16} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} height={30} width={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} height={30} width={30} />,
    activity: <Activity className="text-secondary" fill="currentColor" size={30} height={30} width={30} />,
    flash: <Flash className="text-primary" fill="currentColor" size={30} height={30} width={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} height={30} width={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} height={30} width={30} />,
    mea: <MEALogo className="text-danger" fill="currentColor" size={30} height={30} width={30} />,
    apostille: <ApostilleLogo className="text-danger" fill="currentColor" size={30} height={30} width={30} />,
    embassy: <EmbassyAttestationLogo className="text-danger" fill="currentColor" size={30} height={30} width={30} />,
    translation: <TranslationIcon className="text-danger" fill="currentColor" size={30} height={30} width={30} />,
  };

  return (
    <UINavbar className="w-full z-50" maxWidth="full" onMenuOpenChange={setIsMenuOpen}>
      <NavbarBrand>
        <Image src="logo.svg" alt="logo" width={200} height={50} />
      </NavbarBrand>
      <NavbarContent className="hidden md:flex gap-6">
        <NavbarItem>
          <a href="/">
            Home
          </a>
        </NavbarItem>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent text-medium font-light data-[hover=true]:bg-transparent"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                Services
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="autoscaling"
              description="MEA Attestation involves the verification and endorsement of documents."
              startContent={icons.scale}
              href="/services?service=mea"
            >
              MEA Attestation
            </DropdownItem>
            <DropdownItem
              key="usage_metrics"
              description="Apostille Attestation is the simple and effective process of legalizing a document."
              startContent={icons.lock}
              href="/services?service=apostille"
            >
              Apostille
            </DropdownItem>
            <DropdownItem
              key="production_ready"
              description="Embassy attestation verifies the authenticity of your documents for a specific recipient country."
              startContent={icons.activity}
              href="/services?service=embassy"
            >
              Embassy Attestation
            </DropdownItem>
            <DropdownItem
              key="99_uptime"
              description="Expert translation services bridge the linguistic and legal gap."
              startContent={icons.server}
              href="/services?service=translation"
            >
              Translation
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>
          <a href="/gallery">
            Gallery
          </a>
        </NavbarItem>
        <NavbarItem>
        <a href="/faqs">
            FAQs
          </a>
        </NavbarItem>
        <NavbarItem>
        <a href="/contact">
            Contact Us
          </a>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        {/* <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem> */}
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />
        <NavbarItem className="flex items-center">
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="z-50">
      <NavbarMenuItem>
          <a href="/">
            Home
          </a>
        </NavbarMenuItem>
        <Dropdown>
          <NavbarMenuItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent text-medium font-light h-[28px] data-[hover=true]:bg-transparent"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                Services
              </Button>
            </DropdownTrigger>
          </NavbarMenuItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-2",
            }}
          >
            <DropdownItem
              key="autoscaling"
              description="MEA Attestation involves the verification and endorsement of documents."
              startContent={icons.scale}
              href="/services?service=mea"
            >
              MEA Attestation
            </DropdownItem>
            <DropdownItem
              key="usage_metrics"
              description="Apostille Attestation is the simple and effective process of legalizing a document."
              startContent={icons.lock}
              href="/services?service=apostille"
            >
              Apostille
            </DropdownItem>
            <DropdownItem
              key="production_ready"
              description="Embassy attestation verifies the authenticity of your documents for a specific recipient country."
              startContent={icons.activity}
              href="/services?service=embassy"
            >
              Embassy Attestation
            </DropdownItem>
            <DropdownItem
              key="99_uptime"
              description="Expert translation services bridge the linguistic and legal gap."
              startContent={icons.server}
              href="/services?service=translation"
            >
              Translation
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarMenuItem>
          <a href="/gallery">
            Gallery
          </a>
        </NavbarMenuItem>
        <NavbarMenuItem>
        <a href="/faqs">
            FAQs
          </a>
        </NavbarMenuItem>
        <NavbarMenuItem>
        <a href="/contact">
            Contact Us
          </a>
        </NavbarMenuItem>
      </NavbarMenu>
    </UINavbar>
  );
}
