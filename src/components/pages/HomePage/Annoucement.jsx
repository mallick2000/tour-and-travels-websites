import React from "react";
import { Tag, BadgePercent, PlaneTakeoff, Gift } from "lucide-react";

const Annoucement = () => {
  const offers = [
    {
      title: "20% OFF on Outstation Cabs",
      description: "Enjoy flat 20% discount on round-trip bookings this July!",
      image: "/koraput/img2.jpg",
      icon: <BadgePercent className="w-6 h-6 text-red-500" />,
    },
    {
      title: "Flat ₹150 OFF on First Ride",
      description: "Get a flat discount of ₹150 on your first ride.",
      image: "/offer/img2.jpg",
      icon: <Gift className="w-6 h-6 text-green-600" />,
    },
    {
      title: "Airport Drop @ ₹499",
      description: "Get airport drop at a flat rate of ₹499.",
      image: "/offer/img3.jpg",
      icon: <PlaneTakeoff className="w-6 h-6 text-blue-500" />,
    },
    {
      title: "Weekend Special",
      description: "Get extra ₹200 OFF on weekend outstation trips.",
      image: "/images/weekend.jpg",
      icon: <Tag className="w-6 h-6 text-purple-600" />,
    },
  ];

  return (
    <section className="bg-gray-100 py-8 h-[500px]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          🔥 Exclusive Travel Offers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 h-[400px] overflow-y-auto pr-2">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300 overflow-hidden"
            >
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-32 object-cover"
              />
              <div className="p-4 flex flex-col justify-between h-[calc(100%-128px)]">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    {offer.icon}
                    <h3 className="text-lg font-semibold text-gray-900">
                      {offer.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600">{offer.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Annoucement;
