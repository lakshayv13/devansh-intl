"use client";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import {
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@nextui-org/modal";
import { useState } from "react";
import { title } from "@/components/primitives";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import Link from "next/link";
import clsx from "clsx";

interface GalleryItem {
  image: string;
  alt: string;
}

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleImageClick = (item: GalleryItem) => {
    setSelectedImage(item);
    onOpen();
  };

  return (
    <div className="w-full">
      <Breadcrumb />

      <article>
        <header className="mb-8">
          <h1 className={title()}>Gallery</h1>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            View our successfully attested documents from various embassies and
            countries. Need similar services?{" "}
            <Link href="/contact" className="text-violet-500 hover:underline">
              Get in touch
            </Link>
            .
          </p>
        </header>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.gallery.map((item: GalleryItem, index: number) => (
            <div key={index}>
              <Image
                onClick={() => handleImageClick(item)}
                src={item.image}
                alt={item.alt}
                width={500}
                height={500}
                className="rounded-lg cursor-pointer"
              />
            </div>
          ))}
        </div>
      </article>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        shouldBlockScroll
        className="bg-transparent"
      >
        <ModalContent className="relative p-0 m-0 w-screen h-screen max-w-full sm:my-0">
          {(onClose) => (
            <>
              <ModalBody
                className="flex justify-center items-center w-full h-full"
                onClick={onClose}
              >
                {selectedImage && (
                  <div className="relative w-full h-full flex justify-center items-center">
                    <Image
                      src={selectedImage.image}
                      alt={selectedImage.alt}
                      layout="fill"
                      objectFit="contain"
                      className="max-w-full max-h-full"
                    />
                  </div>
                )}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
