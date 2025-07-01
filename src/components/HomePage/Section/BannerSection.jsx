"use client";

import Image from "next/image";
import { Calendar, MapPin, Search, IndianRupee } from "lucide-react";

const BannerSection = () => {
  return (
    <div className="relative w-full h-[750px]">
      <Image
        src="/sec1.jpg"
        alt="Banner"
        fill
        className="object-cover opacity-90"
        priority
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white text-center px-4">
        {/* Headline */}
        <h1 className="absolute top-28 text-center text-7xl  text-slate-200 px-40  font-semibold">
          Lifelong memories just a few seconds away
        </h1>

        {/* Subheading */}
        <p className="absolute top-72 text-center  text-slate-200 p-3 text-xl     ">
          Let's start your journey with us, your dream will come true...
        </p>
        <button className=" bg-blue-500 hover:bg-blue-400 px-6 py-3   text-white font-semibold rounded-md">
          Explore Now
        </button>

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
            <button
              className="flex items-center gap-2 bg-blue-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-600 transition whitespace-nowrap"
              aria-label="Search trips"
            >
              Search <Search size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
