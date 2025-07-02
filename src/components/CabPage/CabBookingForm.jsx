"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import { CarTaxiFront } from "lucide-react";
import Link from "next/link";

const tripOptions = [
  { id: "oneway", label: "Outstation One-way", title: "Book Online Cab" },
  { id: "roundtrip", label: "Outstation Round trip", title: "Book Online Cab" },
  { id: "airport", label: "Airport transfer", title: "Book Airport Taxi" },
  { id: "rental", label: "Hourly Rental", title: "Hourly Car Rental" },
];

export default function CabBookingForm() {
  const [selectedOption, setSelectedOption] = useState("oneway");
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [returnTime, setReturnTime] = useState("");

  const getTitle = () => {
    return tripOptions.find((opt) => opt.id === selectedOption)?.title;
  };

  return (
    <section className="flex items-center justify-center px-2 sm:px-4 py-6 sm:py-12 overflow-x-hidden">
      <div className="mx-auto w-full max-w-3xl rounded-xl bg-gradient-to-t from-blue-300 to-sky-200 p-4 sm:p-8 shadow-md">
        <h2 className="mb-6 text-2xl font-semibold text-gray-800 text-center flex items-center justify-center gap-2">
          <CarTaxiFront className="h-6 w-6 text-blue-600" />
          {getTitle()}
        </h2>

        {/* Trip Type Radio Buttons */}
        <div className="mb-8 flex flex-wrap justify-center gap-4 sm:gap-6">
          {tripOptions.map((option) => (
            <label
              key={option.id}
              className={`flex cursor-pointer items-center gap-2 rounded-lg border px-4 py-2 ${
                selectedOption === option.id
                  ? "border-blue-600 bg-white text-blue-600 font-semibold"
                  : "border-gray-500 text-gray-700"
              }`}
            >
              <input
                type="radio"
                name="tripType"
                value={option.id}
                checked={selectedOption === option.id}
                onChange={() => setSelectedOption(option.id)}
                className="accent-blue-600"
              />
              <span>{option.label}</span>
            </label>
          ))}
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          {/* Locations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <Label
                htmlFor="from"
                className="text-sm font-medium text-gray-900 mb-1 block"
              >
                From
              </Label>
              <Input
                id="from"
                type="text"
                placeholder="Enter Pickup location"
                value={fromLocation}
                onChange={(e) => setFromLocation(e.target.value)}
                className="border-gray-700 capitalize"
                required
              />
            </div>

            {selectedOption !== "rental" && (
              <div className="relative">
                <Label
                  htmlFor="to"
                  className="text-sm font-medium text-gray-900 mb-1 block"
                >
                  To
                </Label>
                <Input
                  id="to"
                  type="text"
                  placeholder="Enter Drop location"
                  value={toLocation}
                  onChange={(e) => setToLocation(e.target.value)}
                  className="border-gray-700 capitalize"
                  required
                />
                <button
                  type="button"
                  onClick={() => {
                    setFromLocation(toLocation);
                    setToLocation(fromLocation);
                  }}
                  className="absolute right-2 sm:right-3 top-9 sm:top-10 z-10 cursor-pointer rounded-md bg-gray-200 p-1 text-lg sm:text-xl text-gray-600 hover:bg-gray-300"
                  aria-label="Swap locations"
                >
                  ⇅
                </button>
              </div>
            )}
          </div>

          {/* Dates & Times */}
          {selectedOption !== "rental" ? (
            <>
              {selectedOption === "roundtrip" ? (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <Label
                        htmlFor="pickupDate"
                        className="text-sm font-medium text-gray-900 mb-1 block"
                      >
                        Pickup Date
                      </Label>
                      <Input
                        id="pickupDate"
                        type="date"
                        value={pickupDate}
                        onChange={(e) => setPickupDate(e.target.value)}
                        className="border-gray-700"
                        required
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="pickupTime"
                        className="text-sm font-medium text-gray-900 mb-1 block"
                      >
                        Pickup Time
                      </Label>
                      <Input
                        id="pickupTime"
                        type="time"
                        value={pickupTime}
                        onChange={(e) => setPickupTime(e.target.value)}
                        className="border-gray-700"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-4">
                    <div>
                      <Label
                        htmlFor="returnDate"
                        className="text-sm font-medium text-gray-900 mb-1 block"
                      >
                        Return Date
                      </Label>
                      <Input
                        id="returnDate"
                        type="date"
                        value={returnDate}
                        onChange={(e) => setReturnDate(e.target.value)}
                        className="border-gray-700"
                        required
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="returnTime"
                        className="text-sm font-medium text-gray-900 mb-1 block"
                      >
                        Return Time
                      </Label>
                      <Input
                        id="returnTime"
                        type="time"
                        value={returnTime}
                        onChange={(e) => setReturnTime(e.target.value)}
                        className="border-gray-700"
                        required
                      />
                    </div>
                  </div>
                </>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <Label
                      htmlFor="pickupDate"
                      className="text-sm font-medium text-gray-900 mb-1 block"
                    >
                      Pickup Date
                    </Label>
                    <Input
                      id="pickupDate"
                      type="date"
                      value={pickupDate}
                      onChange={(e) => setPickupDate(e.target.value)}
                      className="border-gray-700"
                      required
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="pickupTime"
                      className="text-sm font-medium text-gray-900 mb-1 block"
                    >
                      Pickup Time
                    </Label>
                    <Input
                      id="pickupTime"
                      type="time"
                      value={pickupTime}
                      onChange={(e) => setPickupTime(e.target.value)}
                      className="border-gray-700"
                      required
                    />
                  </div>
                </div>
              )}
            </>
          ) : (
            <>
              {/* <div>
                <Label
                  htmlFor="rentalFrom"
                  className="text-sm font-medium text-gray-900 mb-1 block"
                >
                  From
                </Label>
                <Input
                  id="rentalFrom"
                  type="text"
                  placeholder="Enter Pickup location"
                  className="border-gray-700"
                  required
                />
              </div> */}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <Label
                    htmlFor="rentalPickupDate"
                    className="text-sm font-medium text-gray-900 mb-1 block"
                  >
                    Pickup Date
                  </Label>
                  <Input
                    id="rentalPickupDate"
                    type="date"
                    className="border-gray-700"
                    required
                  />
                </div>
                <div>
                  <Label
                    htmlFor="rentalPickupTime"
                    className="text-sm font-medium text-gray-900 mb-1 block"
                  >
                    Pickup Time
                  </Label>
                  <Input
                    id="rentalPickupTime"
                    type="time"
                    className="border-gray-700"
                    required
                  />
                </div>
              </div>

              <div className="mt-2 flex flex-wrap gap-2 overflow-x-auto">
                {[
                  "1 hr (10 km)",
                  "2 hr (20 km)",
                  "3 hr (30 km)",
                  "4 hr (40 km)",
                ].map((slot, idx) => (
                  <Button
                    key={idx}
                    className="whitespace-nowrap rounded-full border border-blue-600 px-3 py-1 text-sm text-blue-600"
                    type="button"
                  >
                    {slot}
                  </Button>
                ))}
              </div>
            </>
          )}

          {/* Submit Button */}
          <Link href="/carRoute">
            <Button
              type="submit"
              className="mt-8 w-full rounded-full bg-blue-600 py-3 font-bold text-white hover:bg-blue-700 transition"
            >
              Check Price & Book
            </Button>
          </Link>
        </form>
      </div>
    </section>
  );
}
