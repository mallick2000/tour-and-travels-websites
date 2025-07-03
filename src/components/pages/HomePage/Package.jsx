"use client";
import * as React from "react";
import Image from "next/image";

import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const PackageData = [
  {
    title: "",
    image: "/place/Deomali.jpg",
    location: "Koraput",
  },
  {
    title: "",
    image: "/place/tiger.jpg",
    location: "Mayurbhanj",
  },
  {
    title: "",
    image: "/place/tarini.jpg",
    location: "Keonjhar",
  },
  {
    title: "",
    image: "/place/daringbadi.jpg",
    location: "Daringbadi",
  },
  {
    title: "",
    image: "/place/puri.jpg",
    location: "Puri",
  },
  {
    title: "",
    image: "/place/emami.jpg",
    location: "Baleswar",
  },
];

export default function Packages() {
  return (
    <main className="px-4 py-8 md:px-16 lg:px-20 bg-gray-50">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        Our Packages From Bhubaneswar:-
      </h1>

      <Carousel
        className="mx-auto w-full "
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent className="-ml-4">
          {PackageData.map((data, index) => (
            <CarouselItem
              key={index}
              className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/5"
            >
              <Card className="relative h-96 w-full rounded-xl group overflow-hidden ">
                <Image
                  src={data.image}
                  alt={data.title || "Package image"}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gray-100 bg-opacity-40 text-black p-4">
                  <h2 className="text-lg font-semibold">
                    {data.location || "Location"}
                  </h2>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </main>
  );
}
