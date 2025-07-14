import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const CabTravelBanner = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url('/place/n2.jpg')`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
          Ride Smart. Travel Comfortably.
        </h1>
        <p className="mt-6 text-lg md:text-2xl text-gray-200 max-w-2xl mx-auto">
          Your journey starts here — fast, affordable, and always on time. Book
          our premium cab packages for city rides and airport transfers.
        </p>

        {/* Booking Form */}
        <form className="mt-10 space-y-6 md:space-y-0 md:flex md:items-center md:justify-center md:space-x-4">
          <div className="w-full md:w-1/3">
            <label htmlFor="destination" className="sr-only">
              Destination
            </label>
            <Input
              id="destination"
              name="destination"
              type="text"
              placeholder="Enter your destination"
            />
          </div>

          <div className="w-full md:w-1/4">
            <Label htmlFor="date" className="sr-only">
              Date
            </Label>
            <Input id="date" name="date" type="date" />
          </div>

          <div className="w-full md:w-auto">
            <Button
              type="submit"
              variant="gradient"
              className="w-full md:w-auto"
            >
              Search Ride
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CabTravelBanner;
