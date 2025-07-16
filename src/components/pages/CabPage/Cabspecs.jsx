"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

// Car data grouped by category (for booking)
const carDataByCategory = {
  Sedan: [
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
      title: "Toyota Etios",
      fuel: "Diesel",
      transmission: "Manual",
      image: "/cars/Etios.png",
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
      title: "Hyundai Aura",
      fuel: "Petrol",
      transmission: "Manual",
      image: "/cars/aura.webp",
      location: "Bhubaneswar",
    },
  ],
  SUV: [
    {
      title: "Suzuki Ertiga",
      fuel: "Petrol",
      transmission: "Manual",
      image: "/cars/car.jpg",
      location: "Bhubaneswar",
    },
    {
      title: "Mahindra Bolero",
      fuel: "Diesel",
      transmission: "Manual",
      image: "/cars/Bolero.jpg",
      location: "Bhubaneswar",
    },
    {
      title: "Chevrolet Travera",
      fuel: "Diesel",
      transmission: "Manual",
      image: "/cars/chevy.png",
      location: "Bhubaneswar",
    },
  ],
  "Prime SUV": [
    {
      title: "Innova Crysta",
      fuel: "Diesel",
      transmission: "Manual",
      image: "/cars/inova.jpeg",
      location: "Bhubaneswar",
    },
    {
      title: "Mahindra XUV500",
      fuel: "Diesel",
      transmission: "Manual",
      image: "/cars/xuv.webp",
      location: "Bhubaneswar",
    },
  ],
  "Tempo Traveller": [
    {
      title: "Tempo Traveller 12-Seater",
      fuel: "Diesel",
      transmission: "Manual",
      image: "/cars/force.jpg",
      location: "Bhubaneswar",
    },
  ],
};

export default function CarAndCabList() {
  const categories = Object.keys(carDataByCategory);

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const handleBookNow = (car) => {
    setSelectedCar(car);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedCar(null);
  };

  useEffect(() => {
    setShowAll(false);
  }, [selectedCategory]);

  return (
    <main className="relative">
      <div
        className={`px-4 py-10 md:px-16 lg:px-20 bg-gray-50 transition duration-400 ${
          isOpen ? "blur-sm" : ""
        }`}
      >
        <h1 className="text-3xl mb-4 text-center text-gray-800 tracking-wide">
          <span className="font-light">Cab Types,</span>
          <span className="font-bold text-blue-500"> We Offer</span>
        </h1>

        {/* Category Buttons */}
        <div className="flex justify-center space-x-4 mb-8 flex-wrap">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "gradient" : "outline"}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Car Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {(showAll
            ? carDataByCategory[selectedCategory]
            : carDataByCategory[selectedCategory].slice(0, 4)
          ).map((car, index) => (
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
                {car.title}
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                {car.fuel} • {car.transmission}
              </p>

              <div className="mt-2 flex justify-between items-center text-sm text-gray-600">
                <span>{car.location}</span>
                <Button onClick={() => handleBookNow(car)} variant="gradient">
                  Book Now
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {carDataByCategory[selectedCategory].length > 4 && (
          <div className="flex justify-center mt-4">
            <Button
              onClick={() => setShowAll((prev) => !prev)}
              className="w-36 rounded-full "
              variant="gradient"
            >
              {showAll ? "View Less" : "View More"}
            </Button>
          </div>
        )}
      </div>

      {/* Booking Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
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
                  className="w-full border border-gray-300 text-black rounded px-3 py-2"
                  placeholder="Your name"
                />
              </div>
              <div>
                <Label className="block text-sm font-medium text-white">
                  Phone
                </Label>
                <input
                  type="tel"
                  className="w-full border border-gray-300 text-black rounded px-3 py-2"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <Label className="block text-sm font-medium text-white">
                  Pickup Location
                </Label>
                <input
                  type="text"
                  className="w-full border border-gray-300 text-black rounded px-3 py-2 capitalize"
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
