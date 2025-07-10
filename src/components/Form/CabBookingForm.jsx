"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ArrowDownUp, CarTaxiFront } from "lucide-react";

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

  const handleNext = () => setCurrentStep((prev) => prev + 1);
  const handlePrevious = () => setCurrentStep((prev) => prev - 1);
  const handleTourTypeChange = (value) => {
    setSelectedOption(value);
    setCurrentStep(1);
  };
  const handleTourInfoChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails((prev) => ({ ...prev, [name]: value }));
  };
  const handleCustomerInfoChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      tripType: selectedOption,
      bookingDetails,
      customerInfo,
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
    <section className="w-full px-2 sm:px-4 py-6 sm:py-12 ">
      <div className="w-full lg:max-w-6xl mx-auto rounded-none sm:rounded-xl bg-white/10  backdrop-blur-xs p-6 sm:p-10 shadow-xl ">
        <h2 className="text-3xl font-bold text-white  text-center mb-2 flex justify-center items-center gap-2">
          <CarTaxiFront className="h-7 w-7 text-blue-600" />
          {getTitle()}
        </h2>
        <p className="text-center text-white mb-6">
          Choose your trip type and enter your travel details below.
        </p>
        <StepIndicator currentStep={currentStep} />

        {isSubmitted ? (
          <SuccessMessage onReset={handleReset} />
        ) : (
          <>
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
                handleTourInfoChange={handleTourInfoChange}
              />
            )}
            {currentStep === 2 && (
              <StepThree
                customerInfo={customerInfo}
                handleCustomerInfoChange={handleCustomerInfoChange}
              />
            )}
            <div className="mt-8 flex justify-between max-w-2xl mx-auto">
              {currentStep > 0 && (
                <Button
                  variant="ghost"
                  onClick={handlePrevious}
                  className="text-white"
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
    <div className="flex items-center justify-center mb-8">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center">
          <div
            className={`h-8 w-8 flex items-center justify-center rounded-full font-bold text-sm ${
              index === currentStep
                ? "bg-blue-600 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
          >
            {index < currentStep ? "✓" : step.id}
          </div>
          {index < steps.length - 1 && (
            <div className="w-8 h-1 bg-gray-300 mx-2 rounded-full" />
          )}
        </div>
      ))}
    </div>
  );
};

const StepOne = ({ selectedOption, handleTourTypeChange }) => (
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
    {tripOptions.map((option) => (
      <button
        key={option.id}
        type="button"
        onClick={() => handleTourTypeChange(option.id)}
        className={`p-4 rounded-lg border transition-all duration-200 ${
          selectedOption === option.id
            ? "bg-blue-600 text-white border-blue-700 shadow-md"
            : "bg-white text-gray-700 border-gray-300 hover:border-blue-500 hover:bg-blue-50"
        }`}
      >
        <div className="font-semibold">{option.label}</div>
        <div className="text-sm">{option.title}</div>
      </button>
    ))}
  </div>
);

const StepTwo = ({ selectedOption, bookingDetails, handleTourInfoChange }) => (
  <div className="space-y-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="text-white">
        <Label htmlFor="from">From</Label>
        <Input
          id="from"
          name="fromLocation"
          placeholder="Pickup location"
          value={bookingDetails.fromLocation}
          onChange={handleTourInfoChange}
          className="capitalize text-white"
        />
      </div>

      {selectedOption !== "rental" && (
        <div className="relative text-white">
          <Label htmlFor="to">To</Label>
          <Input
            id="to"
            name="toLocation"
            placeholder="Drop location"
            value={bookingDetails.toLocation}
            onChange={handleTourInfoChange}
            className="capitalize text-white"
          />
          <button
            type="button"
            onClick={() => {
              const from = bookingDetails.fromLocation.trim();
              const to = bookingDetails.toLocation.trim();
              if (from && to) {
                handleTourInfoChange({
                  target: { name: "fromLocation", value: to },
                });
                handleTourInfoChange({
                  target: { name: "toLocation", value: from },
                });
              }
            }}
            className="absolute right-3 top-9 bg-gray-200 p-1 rounded hover:bg-gray-300"
          >
            <ArrowDownUp />
          </button>
        </div>
      )}
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="text-white">
        <Label htmlFor="pickupDate">Pickup Date</Label>
        <Input
          id="pickupDate"
          type="date"
          name="pickupDate"
          value={bookingDetails.pickupDate}
          onChange={handleTourInfoChange}
        />
      </div>
      <div className="text-white">
        <Label htmlFor="pickupTime">Pickup Time</Label>
        <Input
          id="pickupTime"
          type="time"
          name="pickupTime"
          value={bookingDetails.pickupTime}
          onChange={handleTourInfoChange}
        />
      </div>
    </div>

    {selectedOption === "roundtrip" && (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="text-white">
          <Label htmlFor="returnDate">Return Date</Label>
          <Input
            id="returnDate"
            type="date"
            name="returnDate"
            value={bookingDetails.returnDate}
            onChange={handleTourInfoChange}
            min={bookingDetails.pickupDate}
          />
        </div>
        <div className="text-white">
          <Label htmlFor="returnTime">Return Time</Label>
          <Input
            id="returnTime"
            type="time"
            name="returnTime"
            value={bookingDetails.returnTime}
            onChange={handleTourInfoChange}
          />
        </div>
      </div>
    )}
  </div>
);

const StepThree = ({ customerInfo, handleCustomerInfoChange }) => (
  <div className="space-y-6">
    <div className="text-white">
      <Label htmlFor="fullName">Full Name</Label>
      <Input
        id="fullName"
        name="fullName"
        type="text"
        value={customerInfo.fullName}
        onChange={handleCustomerInfoChange}
        className="capitalize "
      />
    </div>
    <div className="text-white">
      <Label htmlFor="phone">Phone</Label>
      <Input
        id="phone"
        name="phone"
        type="tel"
        value={customerInfo.phone}
        onChange={handleCustomerInfoChange}
      />
    </div>
    <div className="text-white">
      <Label htmlFor="currentCity">Current City</Label>
      <Input
        id="currentCity"
        name="currentCity"
        type="text"
        value={customerInfo.currentCity}
        onChange={handleCustomerInfoChange}
        className="capitalize "
      />
    </div>
  </div>
);

const SuccessMessage = ({ onReset }) => (
  <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center shadow mt-10">
    <h2 className="text-3xl font-bold text-green-700">🎉 Booking Confirmed!</h2>
    <p className="text-gray-700 mt-2">
      Thank you for choosing our cab service. We'll contact you shortly.
    </p>
    <Button
      className="mt-6 bg-blue-600 hover:bg-blue-700 text-white"
      onClick={onReset}
    >
      Book Another Cab
    </Button>
  </div>
);
