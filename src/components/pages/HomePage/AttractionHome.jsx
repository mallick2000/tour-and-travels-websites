import React from "react";

const destinations = [
  {
    name: "Puri, Odisha",
    image: "./place/puri.jpg",
    description: "Famous for the Jagannath Temple and golden beaches.",
  },
  {
    name: "Konark, Odisha",
    image: "./place/konark.jpg",
    description: "Home to the iconic Sun Temple, a UNESCO World Heritage Site.",
  },
  {
    name: "Chilika Lake, Odisha",
    image: "./place/chilika.jpg",
    description:
      "Asias largest brackish water lagoon, ideal for bird watching and boat rides.",
  },
  {
    name: "Bhubaneswar, Odisha",
    image: "./place/khandagari.jpg",
    description:
      "The Temple City of India, blending ancient and modern culture.",
  },
];

const TopDestinations = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-12 lg:px-20">
      <h1 className="text-3xl mb-2 text-center text-gray-800 tracking-wide">
        <span className="font-light"> Insight</span>
        <span className="font-bold text-blue-500"> Recommendations</span>
      </h1>
      <p className="text-center font-light mb-6 text-lg">
        Personalized recommendations that help you discover hidden gems and
        local favorites.
      </p>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {destinations.map((dest, index) => (
          <div
            key={index}
            className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >
            <img
              src={dest.image}
              alt={dest.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{dest.name}</h3>
              <p className="text-gray-600 mt-2">{dest.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopDestinations;
