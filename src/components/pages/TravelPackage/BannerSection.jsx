"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const CabTravelBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300); // Delay the text transition
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative bg-cover bg-center flex items-center justify-center transition-all duration-1000 md:h-[650px]   transform ">
      <Image
        src="/Puri/img8.jpg"
        alt="Banner Image"
        height={1600}
        width={1600}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center text-white px-4">
        <h1
          className={`text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Ride Smart. Travel Comfortably.
        </h1>
        <p
          className={`mt-6 text-lg md:text-2xl text-gray-200 max-w-2xl mx-auto transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Your journey starts here — fast, affordable, and always on time. Book
          our premium cab packages for city rides and airport transfers.
        </p>
      </div>
    </section>
  );
};

export default CabTravelBanner;
