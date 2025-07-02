"use client";

import { useState } from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const carData = [
  {
    title: "Hyundai i10",
    fuel: "Petrol",
    transmission: "Manual",
    image: "/cars/i10.jpg",
    location: "Bhubaneswar",
  },
  {
    title: "Hyundai Xcent",
    fuel: "Petrol",
    transmission: "Manual",
    image: "/cars/xcent.jpg",
    location: "Bhubaneswar",
  },
  {
    title: "Suzuki Swift",
    fuel: "Petrol",
    transmission: "Manual",
    image: "/cars/swift.jpg",
    location: "Bhubaneswar",
  },
  {
    title: "Toyota Etios",
    fuel: "Petrol",
    transmission: "Manual",
    image: "/cars/Etios.png",
    location: "Bhubaneswar",
  },
  {
    title: "Generic Sedan",
    fuel: "Petrol",
    transmission: "Manual",
    image: "/cars/car.jpg",
    location: "Bhubaneswar",
  },
  {
    title: "Chevrolet Beat",
    fuel: "Petrol",
    transmission: "Manual",
    image: "/cars/beat.jpg",
    location: "Bhubaneswar",
  },
  {
    title: "Honda Amaze",
    fuel: "Petrol",
    transmission: "Manual",
    image: "/cars/amaze.jpg",
    location: "Bhubaneswar",
  },
  {
    title: "Chevrolet Spark",
    fuel: "Petrol",
    transmission: "Manual",
    image: "/cars/chevy.png",
    location: "Bhubaneswar",
  },
];

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  const handleBookNow = (car) => {
    setSelectedCar(car);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedCar(null);
  };

  return (
    <main className="relative">
      {/* <main className="px-4 py-10 md:px-16 lg:px-20 bg-gray-50 relative"> */}

      <div
        className={`px-4 py-10 md:px-16 lg:px-20 bg-gray-50 transition duration-400 ${
          isOpen ? "blur-sm" : ""
        }`}
      >
        <h1 className="text-3xl mb-2 text-center text-gray-800 tracking-wide">
          <span className="font-light"> Your Comfort.</span>
          <span className="font-bold text-blue-500"> Our Wheels</span>
        </h1>

        <p className="text-center font-light mb-6 text-lg">
          From quick trips to long journeys, our vehicles offer unmatched
          comfort and convenience tailored to your travel needs.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {carData.map((car, index) => (
            <div
              key={index}
              className="rounded-xl bg-white shadow-lg p-4 flex flex-col hover:shadow-2xl transition"
            >
              <div className="w-full h-40 relative mb-4">
                <Image
                  src={car.image}
                  alt={car.title || "Car image"}
                  fill
                  className="object-contain"
                />
              </div>

              <h2 className="text-lg font-semibold text-gray-800">
                {car.title || "Chevrolet Hatchback"}
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                {car.fuel} • {car.transmission}
              </p>

              <div className="mt-2 flex justify-between items-center text-sm text-gray-600">
                <span>{car.location}</span>
                <Button
                  onClick={() => handleBookNow(car)}
                  className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded-full font-semibold transition"
                >
                  Book Now
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-12">
          <Button className="w-36 rounded-full bg-blue-500 hover:bg-blue-600 p-3 font-semibold text-white shadow-md transition">
            View More
          </Button>
        </div>
      </div>
      {/* Lightbox Modal */}
      {isOpen && (
        <div
          className="fixed inset-0   bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-gray-700 p-6 rounded-lg shadow-xl w-full max-w-md relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-100 hover:text-gray-200 text-4xl cursor-pointer"
              onClick={closeModal}
            >
              &times;
            </button>

            <h2 className="text-xl font-bold mb-4 text-white">
              Book: {selectedCar?.title || "Car"}
            </h2>

            <form className="space-y-4">
              <div>
                <Label className="block text-sm font-medium text-white">
                  Name
                </Label>
                <input
                  type="text"
                  className="w-full border border-gray-300 text-white capitalize rounded px-3 py-2"
                  placeholder="Your name"
                />
              </div>
              <div>
                <Label className="block text-sm font-medium text-white">
                  Phone
                </Label>
                <input
                  type="tel"
                  className="w-full border border-gray-300 text-white rounded px-3 py-2"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <Label className="block text-sm font-medium text-white">
                  Pickup Location
                </Label>
                <input
                  type="text"
                  className="w-full border border-gray-300 text-white  capitalize rounded px-3 py-2"
                  placeholder="Pickup location"
                  defaultValue={selectedCar?.location}
                />
              </div>
              <Button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full"
              >
                Confirm Booking
              </Button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
