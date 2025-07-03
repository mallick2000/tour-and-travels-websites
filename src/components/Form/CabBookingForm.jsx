"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import { CarTaxiFront } from "lucide-react";
import Link from "next/link";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

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
  const [currentStep, setCurrentStep] = useState(0);
  const lastStep = 3;
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

  const handleNext = () => {
    console.log("Next clicked");
    console.log("Booking Details:", bookingDetails);
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleTourTypeChange = (value) => {
    setSelectedOption(value);
    // console.log(e);
    setCurrentStep(1);
  };

  const handleTourInfoChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleCustomerInfoChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Build the payload to send to the backend
    const payload = {
      tripType: selectedOption,
      // ...bookingDetails,
      bookingDetails: {
        fromLocation: bookingDetails.fromLocation.trim(),
        toLocation: bookingDetails.toLocation.trim(),
        pickupDate: bookingDetails.pickupDate,
        pickupTime: bookingDetails.pickupTime,
        returnDate: bookingDetails.returnDate,
        returnTime: bookingDetails.returnTime,
      },
      // ...customerInfo,
      customerInfo: {
        fullName: customerInfo.fullName.trim(),
        phone: customerInfo.phone,
        currentCity: customerInfo.currentCity.trim(),
      },
    };
    console.log("Payload:", payload);
  };

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

        {/* Render steps based on currentStep */}
        {currentStep === 0 && (
          <StepOne
            selectedOption={selectedOption}
            handleTourTypeChange={handleTourTypeChange}
          />
        )}
        {currentStep === 1 && (
          <StepTwo
            bookingDetails={bookingDetails}
            handleChange={handleTourInfoChange}
          />
        )}
        {currentStep === 2 && (
          <StepThree
            customerInfo={customerInfo}
            handleChange={handleCustomerInfoChange}
          />
        )}
        <div className="mt-8 flex justify-center gap-4">
          {currentStep > 0 && (
            <Button onClick={handlePrevious}>Previous</Button>
          )}

          {currentStep < lastStep - 1 && (
            <Button onClick={handleNext}>Next</Button>
          )}

          {currentStep === lastStep - 1 && (
            <Button type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          )}
        </div>

        {/*  TODO: On Successfull submit show success message in place of form. */}

        {/* Trip Type Radio Buttons */}
        <div className="mb-8 flex flex-wrap justify-center gap-4 sm:gap-6">
          {/* {tripOptions.map((option) => (
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
                name=""
                value={option.id}
                checked={selectedOption === option.id}
                onChange={(e) => handleTourTypeChange(e)}
                className="accent-blue-600"
              />
              <span>{option.label}</span>
            </label>
          ))} */}
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
                        min={new Date().toISOString().split("T")[0]}
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
                        // min={new Date().toLocaleTimeString().substring(0, 5)}
                        min={
                          pickupDate === new Date().toISOString().split("T")[0]
                            ? new Date().toTimeString().slice(0, 5)
                            : undefined
                        }
                        required
                      />
                      {new Date().toLocaleTimeString().substring(0, 5)}
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
                        min={
                          new Date(pickupDate || new Date())
                            ?.toISOString()
                            .split("T")[0]
                        }
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

const StepOne = ({ selectedOption, handleTourTypeChange }) => {
  return (
    <>
      Step One
      <RadioGroup
        defaultValue="option-one"
        value={selectedOption}
        onValueChange={(value) => handleTourTypeChange(value)}
      >
        <div className="grid grid-cols-4 gap-4 space-y-2">
          {tripOptions.map((option) => (
            <Label
              key={option.id}
              htmlFor={option.id}
              className="space-x-2 border border-red-300 p-4 cursor-pointer flex flex-row items-center"
            >
              <RadioGroupItem
                value={option.id}
                id={option.id}
                className="border-red-500"
              />
              <div>
                <div className="font-semibold">{option.label}</div>
                <div className="text-sm text-gray-500">{option.title}</div>
              </div>
            </Label>
          ))}
        </div>
      </RadioGroup>
    </>
  );
};
const StepTwo = ({ bookingDetails, handleChange }) => {
  return (
    <>
      Step Two
      <input
        type="text"
        name="fromLocation"
        value={bookingDetails.fromLocation}
        onChange={handleChange}
      />
      <input
        type="date"
        name="pickupDate"
        value={bookingDetails.pickupDate}
        onChange={handleChange}
      />
      <input
        type="time"
        name="pickupTime"
        value={bookingDetails.pickupTime}
        onChange={handleChange}
      />
    </>
  );
};
const StepThree = ({ customerInfo, handleChange }) => {
  return (
    <>
      Step Three
      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={customerInfo.fullName}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={customerInfo.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="currentCity"
        placeholder="currentCity"
        value={customerInfo.currentCity}
        onChange={handleChange}
      />
    </>
  );
};
