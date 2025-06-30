import React from "react";
import CabBookingForm from "./CabBookingForm";

function CabBookingSection() {
  return (
    <section className=" ">
      <div className="flex flex-col md:flex-row  md:px-8 lg:px-10 shadow-lg bg-gradient-to-t from-cyan-200 to-blue-100 overflow-hidden">
        {/* Booking Form */}
        <div className="w-full md:w-1/2 p-6">
          <CabBookingForm />
        </div>

        {/* Right Panel: Either Image or Quote */}
        <div className="w-full md:w-1/2 relative">
          <img
            src="/swift.png"
            alt="Cab booking"
            className=" object-cover h-96 mt-20"
          />
          {/* Quote overlay */}
          {/* <div className="absolute inset-0 bg-blue-600 bg-opacity-75 flex items-center justify-center p-6">
              <p className="text-white text-center text-xl font-semibold">
                "Your comfort is our priority. Ride with trust."
              </p>
            </div> */}
        </div>
      </div>
    </section>
  );
}

export default CabBookingSection;
