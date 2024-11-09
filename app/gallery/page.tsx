"use client";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import { Modal, ModalContent, ModalBody, useDisclosure } from "@nextui-org/modal";
import { useState } from "react";
import { title } from "@/components/primitives";
import clsx from "clsx";

interface GalleryItem {
  image: string;
  alt: string;
}

export default function BlogPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleImageClick = (image: GalleryItem) => {
    setSelectedImage(image);
    onOpen();
  };

  return (
    <>
    <h1 className={title()}>Gallery</h1>
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

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} shouldBlockScroll className="bg-transparent">
        <ModalContent className="relative p-0 m-0 w-screen h-screen max-w-full sm:my-0">
          {(onClose) => (
            <>
              <ModalBody className="flex justify-center items-center w-full h-full" onClick={onClose}>
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
    </>
  );
}
