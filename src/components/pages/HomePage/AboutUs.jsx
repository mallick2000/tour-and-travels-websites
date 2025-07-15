import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-white px-4 py-16 md:px-20 lg:flex lg:items-center lg:justify-between lg:gap-16 ">
      {/* Text Content */}
      <div className="mb-12 max-w-xl lg:mb-0">
        <h2 className="text-4xl font-bold text-blue-950 mb-4">
          About <span className="text-blue-950">Us</span>
        </h2>
        <p className="text-lg text-gray-700 font-medium mb-4">
          The best travel agency for you
        </p>
        <p className="text-gray-600 mb-6 leading-relaxed">
          At QuickCab, we craft meaningful travel experiences rooted in the
          culture and natural beauty of Odisha. From ancient temples and golden
          beaches to tribal villages and wildlife sanctuaries, we help you
          explore the state&apos;s hidden gems. Our expert local team ensures
          comfortable, personalized, and responsible journeys. Discover Odisha
          with us — authentic, enriching, and unforgettable.
        </p>
        {/* <a
          href="#about"
          className="text-blue-900 font-semibold hover:underline inline-flex items-center"
        >
          Read more about us
          <span className="ml-2 text-yellow-500">→</span>
        </a> */}
        <Link href="/about">
          <Button variant="gradient" className="w-32">
            Read More
          </Button>
        </Link>
      </div>

      {/* Image */}
      <div className="relative w-full max-w-md">
        <img
          src="/sec2.jpg" // Replace with your actual image path
          alt="About Us"
          className=" rounded-br-[50px] rounded-tl-[50px]  w-full h-auto object-cover shadow-lg"
        />
        <div className="" />
      </div>
    </section>
  );
};

export default AboutUs;
