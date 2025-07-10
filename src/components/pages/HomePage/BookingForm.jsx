"use client";
import { useState } from "react";
import { CalendarDays, Clock, Plus } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function OdishaCabBookingForm() {
  const [tripType, setTripType] = useState("outstation-one-way");
  const [bookingDetails, setBookingDetails] = useState({
    fromLocation: "",
    toLocation: "",
    pickupDate: "",
    pickupTime: "",
    returnDate: "",
    returnTime: "",
  });

  const [customerInfo, setCustomerInfo] = useState({
    fullName: "",
    phone: "",
    currentCity: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleCustomerChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      tripType,
      bookingDetails,
      customerInfo,
    };
    console.log("Submitted Payload:", payload);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-lg mt-10">
        {/* Trip Type */}
        <div className="flex gap-6 mb-6 flex-wrap">
          {[
            "Outstation One-Way",
            "Outstation Round-Trip",
            "Airport Transfers",
            "Hourly Rentals",
          ].map((label, i) => {
            const id = label.toLowerCase().replace(/\s/g, "-");
            return (
              <Label
                key={id}
                className="flex items-center gap-2 cursor-pointer text-sm"
              >
                <Input
                  type="radio"
                  name="tripType"
                  value={id}
                  checked={tripType === id}
                  onChange={() => setTripType(id)}
                  className="accent-blue-600"
                />
                {Label}
              </Label>
            );
          })}
        </div>

        {/* Main Form */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
          {/* From */}
          <div>
            <Label className="text-sm text-gray-600">From</Label>
            <Input
              type="text"
              name="fromLocation"
              value={bookingDetails.fromLocation}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-3 font-bold text-xl"
            />
          </div>

          {/* To */}
          <div>
            <Label className="text-sm text-gray-600">To</Label>
            <Input
              type="text"
              name="toLocation"
              value={bookingDetails.toLocation}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-3 font-bold text-xl"
            />
          </div>

          {/* Departure Date */}
          <div>
            <Label className="text-sm text-gray-600">Departure</Label>
            <div className="relative">
              <Input
                type="date"
                name="pickupDate"
                value={bookingDetails.pickupDate}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-3 pr-10"
              />
              <CalendarDays className="absolute right-3 top-3.5 h-5 w-5 text-gray-500" />
            </div>
          </div>

          {/* Return Date (Only for Round Trip) */}
          {tripType === "outstation-round-trip" && (
            <div>
              <Label className="text-sm text-gray-600">Return Date</Label>
              <Input
                type="date"
                name="returnDate"
                value={bookingDetails.returnDate}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-3"
                min={bookingDetails.pickupDate}
              />
            </div>
          )}

          {/* Pickup Time */}
          <div>
            <Label className="text-sm text-gray-600">Pickup Time</Label>
            <div className="relative">
              <Input
                type="time"
                name="pickupTime"
                value={bookingDetails.pickupTime}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-3 pr-10"
              />
              <Clock className="absolute right-3 top-3.5 h-5 w-5 text-gray-500" />
            </div>
          </div>
        </div>

        {/* Add Stop (Visual Only) */}
        {/* <div className="mt-4">
          <button
            type="button"
            className="text-blue-600 font-semibold flex items-center text-sm"
          >
            <Plus className="w-4 h-4 mr-1" />
            Add Stops
          </button>
        </div> */}

        {/* Submit Button */}
        <div className="mt-6 text-center">
          <Button
            type="submit"
            className="bg-blue-600 text-white px-10 py-3 rounded-full text-lg font-bold shadow-lg hover:bg-blue-700 transition"
          >
            SEARCH
          </Button>
        </div>
      </div>
    </form>
  );
}
