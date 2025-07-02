"use client";

import Image from "next/image";
import { Calendar, MapPin, Search, IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const BannerSection = () => {
  return (
    <div className="relative w-full h-[750px]">
      {/* Background Image */}
      <Image
        src="/Tour4.jpg"
        alt="Banner"
        fill
        className="object-cover "
        priority
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black/20 flex flex-col justify-center items-start text-white px-4 md:px-20 space-y-6">
        {/* Headline */}
        <h1 className="text-5xl md:text-7xl text-slate-200 font-semibold max-w-3xl">
          Lifelong memories just a few seconds away
        </h1>

        {/* Subheading */}
        <p className="text-slate-200 text-lg md:text-xl max-w-xl">
          Let's start your journey with us, your dream will come true...
        </p>

        {/* Explore Button */}
        <Link href="/cab">
          <Button className="bg-blue-500 hover:bg-blue-600 p-6 text-lg text-white font-semibold rounded-md transition duration-300  animate-popup">
            Book Now
          </Button>
        </Link>

        <style>{`
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
      <div className="absolute bottom-12 w-full px-4">
        <div className="bg-white rounded-full shadow-lg flex flex-col md:flex-row items-center justify-between px-6 py-4 gap-4 max-w-5xl mx-auto text-gray-700">
          {/* Location */}
          <div className="flex items-center gap-2 w-full md:w-auto">
            <MapPin className="text-indigo-500" size={20} />
            <div className="flex flex-col w-full">
              <label className="text-xs font-medium" htmlFor="location">
                Location
              </label>
              <input
                id="location"
                type="text"
                placeholder="Enter your destination"
                className="text-sm focus:outline-none capitalize w-full"
                aria-label="Enter destination"
              />
            </div>
          </div>

          {/* Date */}
          <div className="flex items-center gap-2 w-full md:w-auto">
            <Calendar className="text-purple-500" size={20} />
            <div className="flex flex-col w-full">
              <label className="text-xs font-medium" htmlFor="date">
                Date
              </label>
              <input
                id="date"
                type="date"
                className="text-sm focus:outline-none w-full"
                aria-label="Select date"
              />
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2 w-full md:w-auto">
            <IndianRupee className="text-green-500" size={20} />
            <div className="flex flex-col w-full">
              <label className="text-xs font-medium" htmlFor="price">
                Price
              </label>
              <input
                id="price"
                type="text"
                placeholder="Enter your budget"
                className="text-sm focus:outline-none w-full"
                aria-label="Enter price"
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
    </div>
  );
};

export default BannerSection;
