"use client";

import { useState } from "react";
import { MapPin, Check, Star, X } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import FilterSidebar from "./Sidebar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";

export default function CabList() {
  const [rideType, setRideType] = useState("outstation");
  const [pickup, setPickup] = useState("");
  const [returnLocation, setReturnLocation] = useState("");
  const [pickupTime, setPickupTime] = useState("2025-07-19T10:19");
  const [rentalDuration, setRentalDuration] = useState("");

  const cabPackages = [
    {
      title: "Puri Oneway",
      from: "Bhubaneswar",
      image: "/cars/swift.jpg",
      seater: "4+1 Seater Sedan",
      price: 1000,
      rating: 4.8,
      cabType: "Sedan",
      fuelType: "Petrol",
      features: [
        "Includes Driver",
        "60 Km OneWay Package",
        "Km After 60 Will Be Charged At ₹11/km",
        "AC Available",
      ],
    },
    {
      title: "Puri OneWay",
      from: "Bhubaneswar",
      image: "/cars/amaze.jpg",
      seater: "4+1 Seater Sedan",
      price: 1400,
      rating: 4.8,
      cabType: "Sedan",
      fuelType: "Diesel",
      features: [
        "Toll, Parking Extra",
        "60 Km OneWay Package",
        "Km After 60 Will Be Charged At ₹11/km",
        "AC Available",
      ],
    },
    {
      title: "Puri Round Trip",
      from: "Bhubaneswar",
      image: "/cars/car.jpg",
      seater: "6+1 Seater Ertiga",
      price: 2000,
      rating: 4.6,
      cabType: "SUV",
      fuelType: "Diesel",
      features: [
        "Includes Driver",
        "120 Km Round Trip",
        "Extra Km @ ₹13/km",
        "AC + Large Luggage",
      ],
    },
    {
      title: "Puri Round Trip ",
      from: "Bhubaneswar",
      image: "/cars/inova.jpeg",
      seater: "7+1 Seater Innova",
      price: 2500,
      rating: 4.9,
      cabType: "SUV",
      fuelType: "Petrol",
      features: [
        "AC Available",
        "150 Km Full Day",
        "After 150 Km ₹18/km",
        "Spacious & Comfortable",
      ],
    },
  ];

  const [filters, setFilters] = useState({
    seater: [],
    cabType: [],
    fuelType: [],
  });

  const filteredPackages = cabPackages.filter((cab) => {
    const matchesSeater =
      filters.seater.length === 0 || filters.seater.includes(cab.seater);

    const matchesCabType =
      filters.cabType.length === 0 || filters.cabType.includes(cab.cabType);

    const matchesFuelType =
      filters.fuelType.length === 0 || filters.fuelType.includes(cab.fuelType);

    return matchesSeater && matchesCabType && matchesFuelType;
  });

  return (
    <section>
      {/* Top Search Filters */}
      <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-4 flex flex-wrap md:flex-nowrap items-center justify-center gap-4 text-black font-semibold md:px-24">
        {/* Ride Type Radio Buttons */}
        <div className="flex items-center gap-4">
          {["airport", "outstation", "hourly"].map((type) => (
            <label
              key={type}
              className="flex items-center gap-2 uppercase text-xs tracking-wider"
            >
              <input
                type="radio"
                name="ride"
                value={type}
                checked={rideType === type}
                onChange={(e) => setRideType(e.target.value)}
                className="accent-white w-4 h-4"
              />
              {type === "airport"
                ? "Airport Transfer"
                : type === "outstation"
                ? "Outstation/Other"
                : "Hourly"}
            </label>
          ))}
        </div>

        {/* Input Section */}
        <div className="flex flex-wrap gap-3 items-center w-full justify-center md:justify-start">
          {/* Airport Transfer / Pickup Input */}
          {rideType === "airport" && (
            <>
              <div>
                <Label className="mb-1">From</Label>
                <Input
                  type="text"
                  placeholder="Enter Pickup Location"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  className="px-4 py-2 rounded-md text-black text-sm w-44"
                />
              </div>
              <div>
                <Label className="mb-1">To</Label>
                <Input
                  type="text"
                  placeholder="Enter Drop Location"
                  value={returnLocation}
                  onChange={(e) => setReturnLocation(e.target.value)}
                  className="px-4 py-2 rounded-md text-black text-sm w-56"
                />
              </div>
            </>
          )}

          {/* Outstation Pickup/Return */}
          {rideType === "outstation" && (
            <>
              <div>
                <Label className="mb-1">From</Label>
                <Input
                  type="text"
                  placeholder="Pickup Location"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  className="px-4 py-2 rounded-md text-black text-sm w-44"
                />
              </div>
              <div>
                <Label className="mb-1">To</Label>
                <Input
                  type="text"
                  placeholder="Enter Location"
                  value={returnLocation}
                  onChange={(e) => setReturnLocation(e.target.value)}
                  className="px-4 py-2 rounded-md text-black text-sm w-56"
                />
              </div>
            </>
          )}

          {/* Hourly Rental Pickup & Duration */}
          {rideType === "hourly" && (
            <>
              <div>
                <Label className="mb-1">Pickup Location</Label>
                <Input
                  type="text"
                  placeholder="Enter Location"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  className="px-4 py-2 rounded-md text-black text-sm w-44"
                />
              </div>

              <div>
                <Label className="mb-1">Rental Duration</Label>
                <Select onValueChange={(val) => setRentalDuration(val)}>
                  <SelectTrigger className="w-40 border rounded px-4 py-2 text-sm bg-white text-black">
                    <SelectValue placeholder="Select Hours" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="4">04 Hrs</SelectItem>
                      <SelectItem value="8">08 Hrs</SelectItem>
                      <SelectItem value="12">12 Hrs</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </>
          )}

          {/* Pickup Date & Time */}
          <div className="flex flex-col text-black text-xs">
            <Label className="mb-1">PICK-UP DATE & TIME</Label>
            <Input
              type="datetime-local"
              value={pickupTime}
              onChange={(e) => setPickupTime(e.target.value)}
              className="px-4 py-2 rounded-md text-black text-sm w-48"
            />
          </div>

          {rideType === "outstation" && (
            <div className="flex flex-col text-black text-xs  pointer-events-none">
              <Label className="mb-1">
                RETURN DATE & TIME{" "}
                <span className="">
                  {" "}
                  <X className="w-3 h-3" />
                </span>
              </Label>
              <Input
                type="datetime-local"
                className="px-4 py-2 rounded-md text-sm w-48 bg-blue-300/40 cursor-not-allowed"
                placeholder="Choose Date & Time"
              />
            </div>
          )}

          {/* Search Button */}
          <div className="mt-4">
            <Button variant="gradient">Search</Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row px-4 md:px-20 py-10 gap-6">
        {/* Sticky Sidebar */}
        <div className="w-full md:w-64 md:sticky top-20 self-start z-10">
          <FilterSidebar onFilterChange={setFilters} />
        </div>

        {/* Cab List */}
        <div className="flex-1 bg-white p-6 md:px-10 xl:px-20 space-y-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Puri OneWay</h1>
          <p className="text-lg font-semibold text-gray-800 mb-6">
            Choose Vehicle From Below:
          </p>

          {filteredPackages.map((cab, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col md:flex-row gap-6 items-center md:items-start"
            >
              {/* Cab Image */}
              <div className="relative">
                <span className="absolute top-2 left-2 bg-gradient-to-r from-blue-400 to-blue-700 text-white text-sm px-3 py-1 rounded-full">
                  {cab.seater}
                </span>
                <Image
                  src={cab.image}
                  alt={cab.title}
                  width={200}
                  height={120}
                  className="mt-8"
                />
              </div>

              {/* Cab Details */}
              <div className="flex-1">
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                  <MapPin size={16} />
                  <span>From {cab.from}</span>
                </div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {cab.title}
                </h2>

                <div className="flex items-center text-yellow-400 mt-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill={i < Math.floor(cab.rating) ? "#FFD700" : "none"}
                      stroke="#FFD700"
                    />
                  ))}
                  <span className="text-gray-700 ml-2">
                    {cab.rating.toFixed(1)}
                  </span>
                </div>

                <p className="text-sm text-blue-600 mt-2 font-medium">
                  Best Price Guarantee
                </p>

                <ul className="mt-3 text-sm text-gray-700 space-y-1">
                  {cab.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="text-green-500 mt-1" size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price + CTA */}
              <div className="flex flex-col items-end justify-between h-full">
                <div className="mt-4 text-right">
                  <p className="text-2xl font-bold text-indigo-800">
                    From ₹{cab.price}
                  </p>
                  <Link href="/preview">
                    <Button className="mt-4 bg-gradient-to-r from-blue-400 to-blue-700 text-white px-6 py-2 rounded-md">
                      Book Now →
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {filteredPackages.length === 0 && (
            <p className="text-gray-500 text-center">
              No Vehicles match your filters.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
