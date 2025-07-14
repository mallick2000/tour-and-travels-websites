"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";

const faqs = [
  {
    question: "How do I book a cab with your service?",
    answer:
      "You can book a cab through our website or by calling our customer service line. Enter your pickup and drop-off locations, choose a vehicle, and confirm your booking.",
  },
  {
    question: "What types of vehicles do you offer?",
    answer:
      "We offer Sedans, SUVs, Luxury Cars, and Vans depending on your needs and group size.",
  },
  {
    question: "Are your drivers licensed and background-checked?",
    answer:
      "Yes. All drivers are professionally licensed, background-checked, and trained to prioritize your safety.",
  },
  {
    question: "Can I schedule a ride in advance?",
    answer:
      "Yes. You can schedule future rides via our app or website, especially useful for airport pickups or intercity trips.",
  },
  {
    question: "Do you provide airport pickup and drop services?",
    answer:
      "Absolutely. We offer on-time airport pickup/drop-off and even provide a meet-and-greet service upon request.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="font-sans text-3xl tracking-widest text-gray-800 text-center mb-10">
        <span className="font-light">Frequently Asked</span>
        <span className="font-bold text-blue-500">&nbsp;Questions?</span>
      </h2>
      <div className="flex flex-col lg:flex-row items-start gap-10">
        {/* Left Illustration */}
        <div className="w-full lg:w-1/2">
          <Image
            src="/faq2.jpg"
            width={600}
            height={600}
            alt="Cab illustration"
            className="w-full h-auto max-h-[400px] lg:max-h-[500px] object-cover rounded-xl"
          />
        </div>

        {/* Right FAQ */}
        <div className="w-full lg:w-1/2">
          <div className="space-y-6">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl shadow-md bg-white transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 flex justify-between items-center text-left"
                  >
                    <span className="text-base font-semibold text-gray-800">
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </button>

                  <div
                    className={`px-6 text-sm text-gray-600 transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "max-h-[500px] opacity-100 py-3"
                        : "max-h-0 opacity-0 py-0"
                    } overflow-hidden`}
                  >
                    {faq.answer}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
