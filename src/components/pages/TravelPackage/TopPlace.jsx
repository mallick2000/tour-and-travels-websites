"use client";

import { Button } from "@/components/ui/button";
import {
  Star,
  Clock,
  ArrowUp,
  ArrowDown,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const packages = [
  {
    title: "BHUBANESWAR PURI KONARK",
    duration: "2 Days 1 Nights",
    rating: 4.8,
    reviews: 3210,
    image: "/Bbsr/img2.jpg",
  },
  {
    title: "BERHAMPUR TRIP ODISHA",
    duration: "2 Days 1 Nights",
    rating: 4.8,
    reviews: 3210,
    image: "/Chilika/img1.jpg",
  },
  {
    title: "KORAPUT TRIP ODISHA",
    duration: "6 Days 5 Nights",
    rating: 4.8,
    reviews: 3210,
    image: "/koraput/img7.jpg",
  },
  {
    title: "Similipal TRIP ODISHA",
    duration: "4 Days 3 Nights",
    rating: 4.8,
    reviews: 3210,
    image: "/Similipal/img3.jpg",
  },
  {
    title: "NEW TOUR PACKAGE",
    duration: "5 Days 4 Nights",
    rating: 4.9,
    reviews: 2100,
    image: "/Bbsr/img2.jpg",
  },
  {
    title: "EXPLORER TOUR ODISHA",
    duration: "3 Days 2 Nights",
    rating: 4.7,
    reviews: 210,
    image: "/Chilika/img1.jpg",
  },
  // More packages can be added here
];

export default function TourPackages() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleView = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="px-4 md:px-20 py-10">
      <h1 className="text-3xl font-bold text-gray-800 py-2 px-6">
        Top Tour Packages
      </h1>
      <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-4">
        {packages
          .slice(0, isExpanded ? packages.length : 4)
          .map((pkg, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition duration-300"
            >
              <Image
                src={pkg.image}
                alt={pkg.title}
                height={1600}
                width={1600}
                className="h-60 w-full object-cover rounded-b-xl"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {pkg.title}
                </h3>
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <Clock className="h-4 w-4 text-red-500 mr-1" />
                  <span>{pkg.duration}</span>
                </div>
                <div className="flex items-center text-sm text-gray-700 mb-4">
                  <Star
                    className="h-4 w-4 text-yellow-400 mr-1"
                    fill="#fbbf24"
                  />
                  <span className="font-semibold">{pkg.rating}</span>
                  {/* <span className="ml-2 text-gray-500">
                    {pkg.reviews} Reviews
                  </span> */}
                </div>
                <Link href="/innerPackage">
                  <Button variant="gradient">Book Now</Button>
                </Link>
              </div>
            </div>
          ))}
      </div>

      <div
        onClick={toggleView}
        className="flex items-center group justify-center cursor-pointer rounded-full "
      >
        <span className="text-blue-500 group-hover:text-sky-800">
          {isExpanded ? "View Less" : "View More"}
        </span>
        {isExpanded ? (
          <ChevronUp className="h-4 w-4 text-blue-500 group-hover:text-sky-800" />
        ) : (
          <ChevronDown className="h-4 w-4 text-blue-500 group-hover:text-sky-800" />
        )}
      </div>
    </section>
  );
}
