"use client";

import CabBookingForm from "@/components/Form/CabBookingForm";
import Image from "next/image";

const BannerSection = () => {
  return (
    <section className="relative w-full min-h-[750px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/Tour4.jpg"
        alt="Banner"
        fill
        className="object-cover object-center z-0"
        priority
      />

      {/* Overlay content */}
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-4 md:px-20 py-12 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full ">
          {/* <div className="w-full "> */}
          {/* Left Text Content */}
          {/* <div className="text-white flex flex-col justify-center space-y-6 max-w-xl">
            <h1 className="text-4xl md:text-6xl font-light font-sans leading-tight">
              Lifelong memories just a few seconds away
            </h1>
            <p className="text-md md:text-xl text-slate-200">
              Let's start your journey with us — your dream will come true.
            </p>
          </div> */}

          {/* Booking Form Card */}
          <div className="">
            <CabBookingForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
