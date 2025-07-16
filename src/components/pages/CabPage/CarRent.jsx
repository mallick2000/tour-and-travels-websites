"use client";

import Image from "next/image";
import { MapPin, Clock, Users, Star } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const tourPackages = [
  {
    image: "/place/chilika.jpg",
    location: "Bhubaneswar",
    title: "Bhubaneswar To Chilika Roundtrip",
    hours: "4 Hours",
    rating: 4.8,
    price: 2350,
  },
  {
    image: "/place/puri.jpg",
    location: "Bhubaneswar",
    title: "Bhubaneswar To Puri Roundtrip",
    hours: "2 Hours",
    rating: 4.8,
    price: 1000,
  },
  {
    image: "/place/emami.jpg",
    location: "Bhubaneswar",
    title: "Bhubaneswar To Emami Jagannath Temple Roundtrip",
    hours: "3 Hours",
    rating: 4.8,
    price: 3000,
  },
  {
    image: "/place/tarini.jpg",
    location: "Bhubaneswar",
    title: "Bhubaneswar To Keonjhar Roundtrip",
    hours: "6 Hours",
    rating: 4.8,
    price: 2370,
  },
  {
    image: "/place/tarini.jpg",
    location: "Bhubaneswar",
    title: "Bhubaneswar To Keonjhar Roundtrip",
    hours: "6 Hours",
    rating: 4.8,
    price: 2370,
  },
  {
    image: "/place/tarini.jpg",
    location: "Bhubaneswar",
    title: "Bhubaneswar To Keonjhar Roundtrip",
    hours: "6 Hours",
    rating: 4.8,
    price: 2370,
  },
];

export function Spacing() {
  return (
    <section className="px-4 py-12 md:px-12 lg:px-2">
      <h1 className="text-3xl font-bold font-sans mb-6 text-center text-gray-800">
        <span className="font-light">Swipe Right</span>
        <span className="font-bold text-blue-500">&nbsp;on Great Rides</span>
      </h1>
      <Carousel
        className="w-full max-w-7xl mx-auto px-4"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent className="-ml-4">
          {tourPackages.map((pkg, index) => (
            <CarouselItem
              key={index}
              className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            >
              <Card className="overflow-hidden rounded-xl shadow-sm transition hover:shadow-lg">
                <div className="relative h-48 w-full">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="mr-1 h-4 w-4" />
                    {pkg.location}
                  </div>
                  <h3 className="mt-1 text-base font-semibold text-gray-800 hover:text-orange-600 line-clamp-2">
                    {pkg.title}
                  </h3>
                  <div className="mt-2 flex items-center text-yellow-500 text-sm">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.round(pkg.rating)
                            ? "fill-yellow-500 stroke-yellow-500"
                            : "stroke-yellow-500"
                        }`}
                      />
                    ))}
                    <span className="ml-1 text-gray-700">{pkg.rating}</span>
                  </div>
                  <div className="mt-3 flex justify-between text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {pkg.hours}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      4,6,7 Seater
                    </div>
                  </div>
                  <div className="mt-2 text-green-600 font-semibold text-sm">
                    Starting ₹{pkg.price}
                  </div>
                  <button className="mt-4 w-full rounded bg-blue-500 py-2 text-white hover:bg-blue-600 transition">
                    Book Now →
                  </button>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
