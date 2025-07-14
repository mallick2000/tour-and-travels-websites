import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function CabBookingSection() {
  return (
    <section className="relative w-full md:h-[600px] h-[500px] text-white">
      {/* Background Image */}
      <Image
        src="/sec5.jpg"
        alt="Tour Background"
        fill
        className="object-cover"
        priority
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/70 bg-opacity-60" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          Ride the Road to Adventure
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-6">
          Whether it's a quick city ride or a scenic outstation trip, we've got
          your journey covered in comfort and style.
        </p>
        <p className="text-base md:text-lg italic text-yellow-400 mb-6">
          “Every destination begins with a great ride.”
        </p>

        {/* Call to Action Button */}
        <Link href="/">
          <Button className="bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300">
            Book Your Ride Now
          </Button>
        </Link>
      </div>
    </section>
  );
}

export default CabBookingSection;
