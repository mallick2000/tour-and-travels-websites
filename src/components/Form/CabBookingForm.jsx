"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import { ArrowDownUp, CarTaxiFront } from "lucide-react";
import Link from "next/link";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

const tripOptions = [
  { id: "oneway", label: "One-way", title: "Book One Way Cab" },
  { id: "roundtrip", label: "Round trip", title: "Book Round Trip" },
  { id: "airport", label: "Airport transfer", title: "Book Airport Taxi" },
  { id: "rental", label: "Hourly Rental", title: "Hourly Car Rental" },
];

export default function CabBookingForm() {
  const [selectedOption, setSelectedOption] = useState("oneway");

  const [currentStep, setCurrentStep] = useState(0);
  const lastStep = 3;
  const [isSubmitted, setIsSubmitted] = useState(false);
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
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setSelectedOption("oneway");
    setCurrentStep(0);
    setIsSubmitted(false);
    setBookingDetails({
      fromLocation: "",
      toLocation: "",
      pickupDate: "",
      pickupTime: "",
      returnDate: "",
      returnTime: "",
    });
    setCustomerInfo({
      fullName: "",
      phone: "",
      currentCity: "",
    });
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
        <StepIndicator currentStep={currentStep} />
        {isSubmitted ? (
          <SuccessMessage onReset={handleReset} />
        ) : (
          <>
            {/* Render steps based on currentStep */}
            {currentStep === 0 && (
              <StepOne
                selectedOption={selectedOption}
                handleTourTypeChange={handleTourTypeChange}
              />
            )}
            {currentStep === 1 && (
              <StepTwo
                selectedOption={selectedOption}
                bookingDetails={bookingDetails}
                handleTourInfoChange={(e) => {
                  const { name, value } = e.target;
                  setBookingDetails((prev) => ({
                    ...prev,
                    [name]: value,
                  }));
                }}
              />
            )}
            {currentStep === 2 && (
              <StepThree
                customerInfo={customerInfo}
                handleCustomerInfoChange={handleCustomerInfoChange}
              />
            )}
            <div className="mt-8 flex justify-between max-w-md mx-auto">
              {currentStep > 0 && (
                <Button
                  variant="ghost"
                  onClick={handlePrevious}
                  className="text-gray-700 hover:underline hover:bg-transparent"
                >
                  ← Back
                </Button>
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
          </>
        )}

        {/*  TODO: On Successfull submit show success message in place of form. */}
      </div>
    </section>
  );
}
const StepIndicator = ({ currentStep }) => {
  const steps = [
    { id: 1, label: "Trip Type" },
    { id: 2, label: "Travel Details" },
    { id: 3, label: "Contact Info" },
  ];

  return (
    <div className="mb-6 flex items-center justify-center gap-4 text-sm font-medium">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center gap-2">
          <div
            className={`h-6 w-6 flex items-center justify-center rounded-full text-xs ${
              index < currentStep
                ? "bg-black text-white"
                : index === currentStep
                ? "bg-black text-white"
                : "bg-gray-300 text-gray-600"
            }`}
          >
            {index < currentStep ? "✓" : step.id}
          </div>
          <span
            className={index === currentStep ? "text-black" : "text-gray-500"}
          >
            {step.label}
          </span>
          {index < steps.length - 1 && <span className="text-gray-400">›</span>}
        </div>
      ))}
    </div>
  );
};

const StepOne = ({ selectedOption, handleTourTypeChange }) => {
  return (
    <>
      <RadioGroup
        defaultValue="option-one"
        value={selectedOption}
        onValueChange={(value) => handleTourTypeChange(value)}
      >
        <div className="grid grid-cols-2 gap-4 space-y-2">
          {tripOptions.map((option) => (
            <Label
              key={option.id}
              htmlFor={option.id}
              className="space-x-2 border rounded-lg border-black p-4 cursor-pointer flex flex-row items-center hover:border-blue-500"
            >
              <RadioGroupItem
                value={option.id}
                id={option.id}
                className="border-black hover:border-blue-500"
              />
              <div>
                <div className="font-semibold">{option.label}</div>
                <div className="text-sm text-gray-500 hover:border-blue-500">
                  {option.title}
                </div>
              </div>
            </Label>
          ))}
        </div>
      </RadioGroup>
    </>
  );
};
const StepTwo = ({ selectedOption, bookingDetails, handleTourInfoChange }) => {
  const pickupDate = bookingDetails?.pickupDate;
  return (
    <>
      {/* {console.log("Booking Details:", selectedOption)}
      {selectedOption === "oneway" && <> FROM TO DATE TIME</>}
      {selectedOption === "roundtrip" && (
        <> FROM TO PICKUPDATETIME RETURNDATE</>
      )}
      {selectedOption === "airport" && <> FROM TO DATE TIME</>}
      {selectedOption === "rental" && <> FROM DATE TIME</>} */}
      {/* <form className="space-y-6" onSubmit={(e) => e.preventDefault()}> */}
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
            name="fromLocation"
            placeholder="Enter Pickup location"
            value={bookingDetails?.fromLocation}
            onChange={handleTourInfoChange}
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
              name="toLocation"
              type="text"
              placeholder="Enter Drop location"
              value={bookingDetails?.toLocation}
              onChange={handleTourInfoChange}
              className="border-gray-700 capitalize"
              required
            />
            <button
              type="button"
              onClick={() => {
                const { fromLocation, toLocation } = bookingDetails;
                const trimmedFrom = fromLocation.trim();
                const trimmedTo = toLocation.trim();
                if (trimmedFrom && trimmedTo) {
                  const swapped = {
                    ...bookingDetails,
                    fromLocation: trimmedTo,
                    toLocation: trimmedFrom,
                  };

                  handleTourInfoChange({
                    target: {
                      name: "fromLocation",
                      value: swapped.fromLocation,
                    },
                  });
                  handleTourInfoChange({
                    target: { name: "toLocation", value: swapped.toLocation },
                  });
                }
              }}
              className="absolute right-2 sm:right-3 top-9 sm:top-10 z-10 cursor-pointer rounded-md bg-gray-200 p-1 text-lg sm:text-xl text-gray-600 hover:bg-gray-300"
              aria-label="Swap locations"
            >
              <ArrowDownUp />
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
                    name="pickupDate"
                    value={bookingDetails?.pickupDate}
                    onChange={handleTourInfoChange}
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
                    name="pickupTime"
                    value={bookingDetails?.pickupTime}
                    onChange={handleTourInfoChange}
                    className="border-gray-700"
                    // min={new Date().toLocaleTimeString().substring(0, 5)}
                    min={
                      pickupDate === new Date().toISOString().split("T")[0]
                        ? new Date().toTimeString().slice(0, 5)
                        : undefined
                    }
                    required
                  />
                  {/* {new Date().toLocaleTimeString().substring(0, 5)} */}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-1">
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
                    name="returnDate"
                    value={bookingDetails?.returnDate}
                    onChange={handleTourInfoChange}
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
                    name="returnTime"
                    value={bookingDetails?.returnTime}
                    onChange={handleTourInfoChange}
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
                  name="pickupDate"
                  value={bookingDetails?.pickupDate}
                  onChange={handleTourInfoChange}
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
                  name="pickupTime"
                  value={bookingDetails?.pickupTime}
                  onChange={handleTourInfoChange}
                  className="border-gray-700"
                  required
                />
              </div>
            </div>
          )}
        </>
      ) : (
        <>
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
                name="rentalPickupDate"
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
                name="rentalPickupTime"
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
      {/* </form> */}
    </>
  );
};
const StepThree = ({ customerInfo, handleCustomerInfoChange }) => {
  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="fullName">Full Name</Label>
        <Input
          id="fullName"
          name="fullName"
          type="text"
          placeholder="Enter full name"
          value={customerInfo.fullName}
          onChange={handleCustomerInfoChange}
          className="border-gray-700"
          required
        />
      </div>

      <div>
        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="Enter phone number"
          value={customerInfo.phone}
          onChange={handleCustomerInfoChange}
          className="border-gray-700"
          required
        />
      </div>

      <div>
        <Label htmlFor="currentCity">Current City</Label>
        <Input
          id="currentCity"
          name="currentCity"
          type="text"
          placeholder="Enter your city"
          value={customerInfo.currentCity}
          onChange={handleCustomerInfoChange}
          className="border-gray-700"
          required
        />
      </div>
    </div>
  );
};
const SuccessMessage = ({ onReset }) => (
  <div className="text-center py-12 px-4">
    <h2 className="text-3xl font-bold text-green-700 mb-4">
      🎉 Booking Confirmed!
    </h2>
    <p className="text-gray-700 text-lg">
      Thank you for choosing our cab service.
    </p>
    <p className="text-gray-600 mt-2">
      We&apos;ll contact you shortly with further details.
    </p>
    <Button
      className="mt-6 bg-black text-white hover:bg-gray-800"
      onClick={onReset}
    >
      Book Another Cab
    </Button>
  </div>
);
