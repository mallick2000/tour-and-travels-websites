"use client";

import { formatCurrency } from "@/utils/numberUtils";
import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";

const carData = [
  {
    id: 1,
    name: "Toyota Innova Crysta",
    image: "/cars/inova.jpeg",
    seats: 7,
    ac: true,
    fareOneWay: 9900,
    fareTwoWay: 18500,
  },
  {
    id: 2,
    name: "Swift Dzire",
    image: "/cars/swift.jpg",
    seats: 4,
    ac: true,
    fareOneWay: 6600,
    fareTwoWay: 12500,
  },
  {
    id: 3,
    name: "Mahindra Bolero",
    image: "/cars/Bolero.jpg",
    seats: 6,
    ac: false,
    fareOneWay: 8000,
    fareTwoWay: 15000,
  },
];

const CarCard = ({ car, tripType }) => {
  const fare = tripType === "oneWay" ? car.fareOneWay : car.fareTwoWay;

  return (
    <div className="rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
      <Image
        src={car.image}
        alt={car.name}
        width={900}
        height={900}
        className="w-full h-48 object-contain"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{car.name}</h2>
        <p className="text-gray-600">Seats: {car.seats}</p>
        <p className="text-gray-600">{car.ac ? "AC" : "Non-AC"}</p>
        <p className="text-lg font-bold mt-2">Fare: {formatCurrency(fare)}</p>
        <p className="text-sm text-gray-500">From Bhubaneswar to Koraput</p>
        <Button className="mt-4">Book Now</Button>
      </div>
    </div>
  );
};

const CabRoute = () => {
  const [tripType, setTripType] = useState("oneWay");

  const tripInfo = {
    oneWay: {
      distance: "550 km",
      time: "7:00 AM",
      date: "7/7/2023",
    },
    twoWay: {
      distance: "1100 km (Round Trip)",
      time: "7:00 AM (Start) - Return by 8:00 PM",
      date: "7/7/2023 - 8/7/2023",
    },
  };

  const currentTrip = tripInfo[tripType];

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">
      {/* Trip Type Buttons */}
      <div className="flex justify-center mb-6 space-x-4">
        <Button
          variant={tripType === "oneWay" ? "default" : "outline"}
          onClick={() => setTripType("oneWay")}
        >
          One Way
        </Button>
        <Button
          variant={tripType === "twoWay" ? "default" : "outline"}
          onClick={() => setTripType("twoWay")}
        >
          Two Way
        </Button>
      </div>

      {/* Trip Info Section */}
      <section className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto mb-10">
        <h1 className="text-2xl font-bold mb-4">Trip Journey</h1>
        <div className="space-y-2">
          <p className="flex justify-between">
            <span className="font-medium">Pick up location:</span>
            <span>Bhubaneswar</span>
          </p>
          <p className="flex justify-between">
            <span className="font-medium">Drop off location:</span>
            <span>Koraput</span>
          </p>
          <p className="flex justify-between">
            <span className="font-medium">Distance:</span>
            <span>{currentTrip.distance}</span>
          </p>
          <p className="flex justify-between">
            <span className="font-medium">Time:</span>
            <span>{currentTrip.time}</span>
          </p>
          <p className="flex justify-between">
            <span className="font-medium">Date:</span>
            <span>{currentTrip.date}</span>
          </p>
        </div>
      </section>

      {/* Car Cards Section */}
      <section className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Available Cars</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {carData.map((car) => (
            <CarCard key={car.id} car={car} tripType={tripType} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default CabRoute;
