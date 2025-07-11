"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ArrowDownUp, ArrowLeftRight, CarTaxiFront } from "lucide-react";
import Link from "next/link";

const tripOptions = [
  { id: "oneway", label: "One-way", title: "Book One Way Cab" },
  { id: "roundtrip", label: "Round trip", title: "Book Round Trip" },
  { id: "airport", label: "Airport transfer", title: "Book Airport Taxi" },
  { id: "rental", label: "Hourly Rental", title: "Hourly Car Rental" },
];

export default function OdishaCabBookingForm() {
  const [selectedOption, setSelectedOption] = useState("oneway");
  const [currentStep, setCurrentStep] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const swapLocations = () => {
    const from = bookingDetails.fromLocation.trim();
    const to = bookingDetails.toLocation.trim();
    if (from && to) {
      handleTourInfoChange({ target: { name: "fromLocation", value: to } });
      handleTourInfoChange({ target: { name: "toLocation", value: from } });
    }
  };

  const [bookingDetails, setBookingDetails] = useState({
    fromLocation: "",
    toLocation: "",
    pickupDate: "",
    pickupTime: "",
    returnDate: "",
    returnTime: "",
  });

  const handleTourTypeChange = (value) => {
    setSelectedOption(value);
    setCurrentStep(0);
  };

  const handleTourInfoChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      tripType: selectedOption,
      bookingDetails,
    };
    console.log("Payload:", payload);
  };

  const getTitle = () => {
    return tripOptions.find((opt) => opt.id === selectedOption)?.title;
  };

  return (
    <section className="w-full px-4 py-48 md:py-20 ">
      <div className="w-full max-w-6xl mx-auto rounded-lg bg-slate-100 p-4 sm:p-10 shadow-md">
        <h2 className="text-3xl font-bold text-center mb-2 flex justify-center items-center gap-2">
          <CarTaxiFront className="h-7 w-7 text-blue-600" />
          {getTitle()}
        </h2>
        <p className="text-center mb-6">
          Choose your trip type and enter your travel details below.
        </p>

        <StepOne
          selectedOption={selectedOption}
          handleTourTypeChange={handleTourTypeChange}
        />

        {currentStep === 0 && (
          <StepTwo
            selectedOption={selectedOption}
            bookingDetails={bookingDetails}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            handleTourInfoChange={handleTourInfoChange}
            swapLocations={swapLocations}
          />
        )}

        {/* Navigation Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 max-w-2xl mx-auto">
          {currentStep > 0 && (
            <Button
              variant="ghost"
              onClick={() => setCurrentStep(0)}
              className="w-full sm:w-auto text-white"
            >
              ← Back
            </Button>
          )}

          {currentStep === 0 && (
            <Link href="/about" className="mx-auto ">
              <Button
                variant="gradient"
                className="capitalize w-full md:w-40 text-xl  "
              >
                Search
              </Button>
            </Link>
          )}

          {currentStep === 1 && (
            <Button
              type="submit"
              onClick={handleSubmit}
              className="w-full sm:w-auto"
            >
              Submit
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}

// ----------------------------
// Step One
// ----------------------------
const StepOne = ({ selectedOption, handleTourTypeChange }) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
    {tripOptions.map((option) => (
      <Button
        key={option.id}
        type="button"
        onClick={() => handleTourTypeChange(option.id)}
        variant="gradient"
        className={` ${
          selectedOption === option.id
            ? ""
            : "bg-white border text-gray-700 border-gray-300 hover:border-blue-500 hover:bg-blue-50"
        }
      
        // }`}
      >
        <div className="font-semibold">{option.label}</div>
        {/* <div className="text-sm">{option.title}</div> */}
      </Button>
    ))}
  </div>
);

// ----------------------------
// Step Two
// ----------------------------
const StepTwo = ({
  selectedOption,
  swapLocations,
  bookingDetails,
  isModalOpen,
  setIsModalOpen,
  handleTourInfoChange,
}) => (
  <>
    {/* Desktop Form */}

    <div className="hidden lg:flex flex-wrap gap-4 bg-slate-100  rounded-xl ">
      <div className="flex flex-col space-y-2 ">
        <Label htmlFor="fromLocation">From</Label>
        <Input
          type="text"
          name="fromLocation"
          placeholder="Enter PickUp Location"
          value={bookingDetails.fromLocation}
          onChange={handleTourInfoChange}
          className="p-2 border rounded-md w-[180px] md:h-12"
        />
      </div>

      {selectedOption !== "rental" && (
        <>
          <Button
            variant="ghost"
            onClick={swapLocations}
            className=" bg-gray-200 rounded-md hover:bg-gray-300 transition relative top-7 "
            title="Swap"
          >
            <ArrowLeftRight />
          </Button>
          <div className="flex flex-col space-y-2 ">
            <Label htmlFor="toLocation">To</Label>
            <Input
              type="text"
              name="toLocation"
              placeholder="Enter Drop Location"
              value={bookingDetails.toLocation}
              onChange={handleTourInfoChange}
              className="p-2 border rounded-md w-[180px] md:h-12"
            />
          </div>
        </>
      )}
      <div className="flex flex-col space-y-2 ">
        <Label htmlFor="pickupDate">Pickup Date</Label>
        <Input
          type="date"
          name="pickupDate"
          value={bookingDetails.pickupDate}
          onChange={handleTourInfoChange}
          className="p-2 border rounded-md w-[160px] md:h-12"
        />
      </div>
      <div className="flex flex-col space-y-2 ">
        <Label htmlFor="pickupTime">Pickup Time</Label>
        <Input
          type="time"
          name="pickupTime"
          value={bookingDetails.pickupTime}
          onChange={handleTourInfoChange}
          className="p-2 border rounded-md w-[120px] md:h-12"
        />
      </div>

      {selectedOption === "roundtrip" && (
        <>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="returnDate">Return Date</Label>
            <Input
              type="date"
              name="returnDate"
              min={bookingDetails.pickupDate}
              value={bookingDetails.returnDate}
              onChange={handleTourInfoChange}
              className="p-2 border rounded-md w-[160px] md:h-12"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="returnTime">Return Time</Label>
            <Input
              type="time"
              name="returnTime"
              value={bookingDetails.returnTime}
              onChange={handleTourInfoChange}
              className="p-2 border rounded-md w-[120px] md:h-12"
            />
          </div>
        </>
      )}
    </div>

    {/* Mobile Button */}
    <div className="lg:hidden ">
      <div className="relative inset-0 bg-opacity-50 flex items-center justify-center z-50">
        <div className="  rounded-xl w-full max-w-sm mx-auto  space-y-4 relative">
          {/* <h2 className="text-lg font-semibold mb-2">Enter Booking Details</h2> */}

          <div className="space-y-3">
            <div className="flex flex-col gap-2 ">
              <Input
                type="text"
                name="fromLocation"
                placeholder="Enter PickUp Location"
                value={bookingDetails.fromLocation}
                onChange={handleTourInfoChange}
                className="w-full px-2 py-6 text-sm font-semibold focus:outline-none"
              />
              {/* </div> */}

              {selectedOption !== "rental" && (
                <>
                  <div className="flex justify-center items-center">
                    <button
                      onClick={swapLocations}
                      className="bg-gray-100 p-2 rounded-md hover:bg-gray-200 transition absolute right-8"
                      title="Swap"
                    >
                      <ArrowDownUp className=" w-6 h-6" />
                    </button>
                  </div>

                  <Input
                    type="text"
                    name="toLocation"
                    placeholder="Enter Drop Location"
                    value={bookingDetails.toLocation}
                    onChange={handleTourInfoChange}
                    className="w-full px-2 py-6 text-sm font-semibold focus:outline-none"
                  />
                </>
              )}
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Input
                type="date"
                name="pickupDate"
                value={bookingDetails.pickupDate}
                onChange={handleTourInfoChange}
                className="w-full p-2 border rounded-md"
              />

              <Input
                type="time"
                name="pickupTime"
                value={bookingDetails.pickupTime}
                onChange={handleTourInfoChange}
                className="w-full p-2 border rounded-md"
              />

              {selectedOption === "roundtrip" && (
                <>
                  <Input
                    type="date"
                    name="returnDate"
                    value={bookingDetails.returnDate}
                    onChange={handleTourInfoChange}
                    className="w-full p-2 border rounded-md"
                  />
                  <Input
                    type="time"
                    name="returnTime"
                    value={bookingDetails.returnTime}
                    onChange={handleTourInfoChange}
                    className="w-full p-2 border rounded-md"
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);
