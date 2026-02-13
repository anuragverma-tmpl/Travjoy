"use client";

import * as React from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
type ImageGalleryProps = {
  items?: string[];
};

const Imagegallery = ({ items = [] }: ImageGalleryProps) => {
  const [open, setOpen] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(0);

  if (!items.length) return null;

  const openGallery = (index: number) => {
    setActiveIndex(index);
    setOpen(true);
  };

  const next = () => setActiveIndex((prev) => (prev + 1) % items.length);

  const prev = () =>
    setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));

  return (
    <div className="h-[390px]">
      <div className="hidden lg:grid grid-cols-12 gap-3 h-[390px]">
        {items.map((img, index) => (
          <div
            key={index}
            onClick={() => openGallery(index)}
            className={`relative ${
              items.length === 1
                ? "col-span-12"
                : index === 0
                  ? "col-span-8"
                  : "col-span-2"
            } h-[390px] overflow-hidden rounded-3xl cursor-pointer`}
          >
            <Image
              src={img}
              alt="experience preview"
              fill
              priority={index === 0}
              className="object-cover rounded-3xl hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>

      <div className="lg:hidden h-[390px] group">
        <Carousel
          opts={{ loop: true }}
          className="group w-full h-full relative"
        >
          <CarouselContent className="h-full">
            {items.map((img, index) => (
              <CarouselItem
                key={index}
                className="h-[390px] basis-full sm:basis-full"
              >
                <div
                  onClick={() => openGallery(index)}
                  className="relative w-full h-full rounded-3xl overflow-hidden cursor-pointer"
                >
                  <Image
                    src={img}
                    alt="experience preview"
                    fill
                    className="object-cover rounded-3xl"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="left-4 bg-white/80" />
          <CarouselNext className="right-4 bg-white/80" />
        </Carousel>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="w-full max-w-full md:max-w-[1100px] h-full md:h-[550px] p-0">
          <div className="flex gap-3 px-6 pt-4">
            <Button variant="outline" className="rounded-3xl">
              Images
            </Button>
            <Button variant="outline" className="rounded-3xl">
              Video
            </Button>
          </div>

          <div className="relative w-full h-[320px] sm:h-[320px] md:h-[360px] lg:h-[360px] flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src={items[activeIndex]}
                alt="gallery"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="flex gap-2 justify-center relative py-3 overflow-x-auto">
            <button
              onClick={prev}
              className="absolute left-4 z-10 bg-black/40 text-white p-2 rounded-full"
            >
              <ChevronLeft size={28} />
            </button>

            {items.map((img, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`cursor-pointer rounded-md transition ${
                  activeIndex === index ? "ring-2 ring-black" : "opacity-70"
                }`}
              >
                <Image
                  src={img}
                  alt="thumb"
                  width={72}
                  height={56}
                  className="object-cover rounded-md"
                />
              </div>
            ))}

            <button
              onClick={next}
              className="absolute right-4 z-10 bg-black/40 text-white p-2 rounded-full"
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Imagegallery;
