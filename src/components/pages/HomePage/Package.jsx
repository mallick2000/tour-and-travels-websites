"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const PackageData = [
  { image: "/place/Deomali.jpg", location: "Koraput" },
  { image: "/place/tiger.jpg", location: "Mayurbhanj" },
  { image: "/place/tarini.jpg", location: "Keonjhar" },
  { image: "/place/daringbadi.jpg", location: "Daringbadi" },
  { image: "/place/puri.jpg", location: "Puri" },
  { image: "/place/emami.jpg", location: "Baleswar" },
  { image: "/place/dhauli.jpg", location: "Dhauli" },
];

const ITEMS_PER_PAGE = 4;

export default function Packages() {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    if (startIndex + ITEMS_PER_PAGE < PackageData.length) {
      setStartIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
  };

  const visibleItems = PackageData.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <main className="px-4 py-8 md:px-16 lg:px-20 bg-gray-50">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        Trails from the Temple City:-
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {visibleItems.map((item, index) => (
          <div
            key={index}
            className="relative h-60 w-full rounded-xl overflow-hidden shadow-md group"
          >
            <Image
              src={item.image}
              alt={item.location}
              fill
              className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-40 text-white p-2 text-center">
              <h2 className="text-sm font-medium">{item.location}</h2>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end  gap-4 items-center mt-4">
        <Button
          onClick={handlePrev}
          disabled={startIndex === 0}
          className="p-2  bg-blue-500 text-white rounded-full disabled:opacity-50"
        >
          <ArrowLeft />
        </Button>
        <Button
          onClick={handleNext}
          disabled={startIndex + ITEMS_PER_PAGE >= PackageData.length}
          className="p-2 rounded-full bg-blue-500 text-white disabled:opacity-50"
        >
          <ArrowRight />
        </Button>
      </div>
    </main>
  );
}
