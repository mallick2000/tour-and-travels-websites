"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function Annoucement() {
  const destinations = [
    {
      image: "/place/konark.jpg",
      title: "Konark Sun Temple",
      description:
        "Marvel at the 13th-century UNESCO World Heritage site famous for its intricate stone carvings.",
      offer: "20% off entrance fee",
    },
    {
      image: "/place/puri.jpg",
      title: "Puri Jagannath Temple",
      description:
        "Visit the iconic pilgrimage spot known for its annual Rath Yatra festival and spiritual vibes.",
      offer: "Free guided tour",
    },
    {
      image: "/place/chilika.jpg",
      title: "Chilika Lake",
      description:
        "Explore Asia’s largest brackish water lagoon, a paradise for birdwatchers and nature lovers.",
      offer: "Boat ride discount",
    },
    {
      image: "/place/dhauli.jpg",
      title: "Dhauli Peace Pagoda",
      description:
        "Discover the historic site of the Kalinga War and enjoy the tranquil white peace pagoda.",
      offer: "Complimentary meditation session",
    },
    {
      image: "/place/lingraj.jpg",
      title: "Lingaraja Temple",
      description:
        "Admire one of the oldest temples in Bhubaneswar, dedicated to Lord Shiva with stunning architecture.",
      offer: "Special evening aarti",
    },
  ];

  const autoplay = React.useMemo(
    () => Autoplay({ delay: 3000, stopOnInteraction: true }),
    []
  );

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Header with sections */}

      <Carousel
        plugins={[autoplay]}
        className="w-full"
        onMouseEnter={() => autoplay.stop()}
        onMouseLeave={() => autoplay.reset()}
      >
        <CarouselContent>
          {destinations.map(({ image, title, description, offer }, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="relative h-[500px] overflow-hidden rounded-md group">
                  <Image
                    src={image}
                    alt={title}
                    height={500}
                    width={900}
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center p-6 text-center text-white">
                    <h3 className="text-2xl font-bold mb-1">{title}</h3>
                    <p className="text-base mb-2">{description}</p>
                    <p className="text-yellow-300 font-semibold italic">
                      Special Offer: {offer}
                    </p>
                  </div>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
