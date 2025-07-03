import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-gradient-to-r from-sky-200 to-blue-200 py-16 px-4 md:px-12 lg:px-24">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        About Us
      </h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div>
          <Image
            src="/about.png"
            width={500}
            height={500}
            alt="Travel with comfort"
            className="rounded-lg shadow-sm w-full h-auto object-cover"
          />
        </div>

        {/* Text Content */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Your Journey, Our Priority
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            We are a dedicated cab service and travel agency offering smooth
            rides and memorable travel experiences. Whether you're commuting
            locally, planning a weekend escape, or organizing a corporate trip —
            we deliver comfort, safety, and value.
          </p>

          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-green-500 mr-3 mt-1">✓</span>
              <span className="text-gray-700">
                <strong>Local & Outstation Rides:</strong> Door-to-door service
                for all your needs, available 24/7.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 mt-1">✓</span>
              <span className="text-gray-700">
                <strong>Airport Transfers:</strong> Timely pickups and drops for
                stress-free travel.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 mt-1">✓</span>
              <span className="text-gray-700">
                <strong>Tour Packages:</strong> Personalized holiday plans
                including sightseeing, stays, and transport.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 mt-1">✓</span>
              <span className="text-gray-700">
                <strong>Experienced Drivers:</strong> Courteous professionals
                ensuring safety and comfort.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 mt-1">✓</span>
              <span className="text-gray-700">
                <strong>Corporate Travel:</strong> On-time, clean vehicles for
                business meetings and conferences.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
