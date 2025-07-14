"use client"; // Optional if using in App Router (Next.js 13+)

import Image from "next/image";
import React from "react";

const cabData = [
  {
    name: "Sedan",
    image: "/cars/swift.jpg",
    pricePerKm: "₹10/km",
    baseFare: "₹70",
    capacity: "3-4 passengers",
  },
  {
    name: "SUV",
    image: "/cars/swift.jpg",
    pricePerKm: "₹12/km",
    baseFare: "₹90",
    capacity: "5-6 passengers",
  },
  {
    name: "Prime SUV",
    image: "/cars/swift.jpg",
    pricePerKm: "₹12/km",
    baseFare: "₹90",
    capacity: "5-6 passengers",
  },
  {
    name: "Tempo Traveller",
    image: "/cars/swift.jpg",
    pricePerKm: "₹15/km",
    baseFare: "₹150",
    capacity: "7-12 passengers",
  },
];

const Cabcard = () => {
  return (
    <section className="py-12 px-4 md:px-32 bg-gray-50">
      <h2 className="font-sans text-3xl tracking-widest text-gray-800 text-center mb-4">
        <span className="font-light">Cab Types,</span>
        <span className="font-bold text-blue-500">We Offer</span>
      </h2>
      <p className="text-center text-xl font-light mb-6">
        Offering a variety of cab types for comfort, safety, and performance.
      </p>
      <div className="grid gap-6 grid-cols-1  md:grid-cols-3 lg:grid-cols-4 ">
        {cabData.map((cab, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden p-4 flex flex-col items-center text-center hover:shadow-lg transition"
          >
            <div className="w-28 h-20 relative mb-3">
              <Image
                src={cab?.image}
                alt={cab?.name}
                height={900}
                width={900}
                className="object-cover rounded "
              />
            </div>
            <h3 className="text-xl font-bold text-gray-700 mb-1">{cab.name}</h3>
            <p className="text-sm text-gray-600">
              <strong>{cab.pricePerKm}</strong>
            </p>
            <p className="text-sm text-gray-600">
              Base Fare: <strong>{cab.baseFare}</strong>
            </p>
            <p className="text-sm text-gray-600">{cab.capacity}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cabcard;
