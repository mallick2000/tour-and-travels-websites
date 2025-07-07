"use client";

import Image from "next/image";
import { MapPin, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const BannerSection = () => {
  return (
    <section className="relative w-full h-[750px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/Tour4.jpg"
        alt="Banner"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-start text-white px-4 md:px-20 space-y-6 z-10">
        <h1 className="text-4xl md:text-6xl font-semibold max-w-3xl font-sans">
          Lifelong memories just a few seconds away
        </h1>

        <p className="text-md md:text-xl max-w-xl text-slate-200">
          Let's start your journey with us — your dream will come true.
        </p>
        <Link href="/cab">
          <Button className="bg-blue-500 hover:bg-blue-600 p-6 text-lg text-white font-semibold rounded-md transition duration-300  animate-popup">
            Book Now
          </Button>
        </Link>

        <style jsx>{`
          @keyframes popup {
            0%,
            100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.1);
            }
          }

          .animate-popup {
            animation: popup 1s ease-in-out infinite;
          }
        `}</style>
      </div>

      {/* Search Bar */}
      <div className="absolute bottom-8 left-0 right-0 px-4 z-10">
        <div className="bg-white rounded-full shadow-lg flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-4 gap-4 max-w-5xl mx-auto w-full text-gray-700">
          {/* Location */}
          <div className="flex items-center gap-2 w-full md:w-auto">
            <MapPin className="text-indigo-500" size={20} />
            <div className="flex flex-col w-full">
              <label className="text-xs font-medium" htmlFor="location">
                Where to go?
              </label>
              <input
                id="location"
                type="text"
                placeholder="Enter your destination"
                className="text-sm focus:outline-none capitalize w-full"
              />
            </div>
          </div>

          {/* Search Button */}
          <Button
            variant="default"
            className="flex items-center gap-2 bg-blue-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-600 transition whitespace-nowrap"
            aria-label="Search trips"
          >
            Search <Search size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
