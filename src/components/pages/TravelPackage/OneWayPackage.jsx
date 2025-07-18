import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const TravelPlan = () => {
  const destinations = [
    {
      name: "Puri",
      image: "/place/puri.jpg",
    },
    {
      name: "Nayagarh",
      image: "/place/nayagrh.jpg",
    },
    {
      name: "Anugul",
      image: "/place/anugul.jpg",
    },
    {
      name: "Balesore",
      image: "/place/emami.jpg",
    },
    {
      name: "Paradeep",
      image: "/place/paradip.jpg",
    },
    {
      name: "Berhampur",
      image: "/Chilika/img1.jpg",
    },
  ];

  return (
    <div className="px-20 mx-auto p-6">
      <h1 className="text-3xl font-bold  text-gray-800 mb-8">
        Go One Way from BBSR:-
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
        {destinations.map((place, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <Image
              src={place.image}
              alt={place.name}
              height={900}
              width={900}
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">
                To: {place.name}
              </h2>
              <p className="text-gray-600 mt-2">One Way Trip</p>
              <Button variant="gradient" className="mt-4 w-full">
                Book Now
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelPlan;
