import Image from "next/image";
import React from "react";

const destinations = [
  { name: "Puri", image: "/place/puri.jpg" },
  { name: "Berhampur", image: "/Chilika/img2.jpg" },
  { name: "Bhubaneswar", image: "/Bbsr/img2.jpg" },
  { name: "Daringbadi", image: "/place/daringbadi.jpg" },
  { name: "Sambalpur", image: "/place/hirakud.jpg" },
  { name: "Balesore", image: "/place/emami.jpg" },
  { name: "Koraput", image: "/place/Deomali.jpg" },
  { name: "Kendrapada", image: "/Bhitarkanika/img1.jpg" },
];

const TrendingDestinations = () => {
  return (
    <section className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md py-6">
      <h2 className="text-2xl font-bold mb-6">Where to Next?</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {destinations.map((dest, index) => (
          <div key={index} className="text-center">
            <Image
              src={dest.image}
              alt={dest.name}
              height={900}
              width={900}
              className="w-full h-40 object-cover rounded-lg shadow"
            />
            <p className="mt-2 font-semibold">{dest.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingDestinations;
