"use client";

import React, { useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import Image from "next/image";

// Reusable ReadMoreText component
const ReadMoreText = ({ text, maxLength = 70 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (text.length <= maxLength) return <span>{text}</span>;

  return (
    <span>
      {isExpanded ? text : text.slice(0, maxLength) + "..."}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="ml-1 text-blue-600 text-xs font-medium hover:underline"
      >
        {isExpanded ? "Show less" : "Read more"}
      </button>
    </span>
  );
};

// Testimonial data
const testimonials = [
  {
    name: "Anjali Sharma",
    location: "Bhubaneswar",
    text: "The cab arranged by the travel agency was punctual and clean. The driver was polite and knew the route well. Made our airport transfer smooth and stress-free.",
    image: "/person/p1.jpg",
  },
  {
    name: "Rohit Swain ",
    location: "Bhubaneswar",
    text: "Unforgettable trip! Excellent service and amazing destinations!",
    image: "/person/p2.jpg",
  },
  {
    name: "Manas Pradhan",
    location: "Bhubaneswar",
    text: "We traveled with kids and elderly parents, and the driver was so helpful and patient. He knew all the local spots and even arranged stops for tea and photos. The cab was spacious and very comfortable. Truly a memorable trip through Odisha!",
    image: "/person/p2.jpg",
  },
  {
    name: "Nandita Rao",
    location: "Bhubaneswar",
    text: "Our family trip from Puri to Konark was made easy by CCabs. Punctual and professional.",
    image: "/person/p3.jpg",
  },
  {
    name: "Lipika Rout",
    location: "Bhubaneswar",
    text: "Very organized, On‑time, Clean Cars, Very well behaved drivers… Better pricing.",
    image: "/person/p3.jpg",
  },
  {
    name: "Sushant Pradhan",
    location: "Berhampur",
    text: "Drivers were friendly and knew the routes well. Enjoyed the experience",
    image: "/person/p2.jpg",
  },
];

// Main Testimonials component
export default function Testimonials() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl mb-2 text-center text-gray-800 tracking-wide">
          <span className="font-light"> What Our</span>
          <span className="font-bold text-blue-500"> Customers Say</span>
        </h1>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          Real feedback from travelers who trusted us with their journey.
        </p>
      </div>

      <Carousel
        className="max-w-6xl mx-auto"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          {testimonials.map((t, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3 transition-transform duration-300"
            >
              <div className="p-4">
                <Card className="bg-white/60 backdrop-blur-md border border-gray-200 shadow-lg hover:shadow-xl transition rounded-2xl">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex gap-1 text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      “<ReadMoreText text={t.text} />”
                    </p>
                    <div className="flex items-center gap-3 pt-4">
                      <Image
                        src={t.image}
                        alt={t.name}
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-full object-cover ring-2 ring-white"
                      />
                      <div>
                        <div className="font-semibold text-sm text-gray-900">
                          {t.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          {t.location}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-[-2rem] md:left-[-3rem]" />
        <CarouselNext className="right-[-2rem] md:right-[-3rem]" />
      </Carousel>
    </section>
  );
}
