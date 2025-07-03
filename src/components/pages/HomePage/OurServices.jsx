import React from "react";
import {
  ClipboardType,
  RouteIcon,
  PlaneTakeoffIcon,
  BriefcaseBusiness,
  Clock1,
  MapIcon,
  CarFront,
  PhoneCallIcon,
  HeartPulse,
} from "lucide-react";

const services = [
  {
    icon: <ClipboardType className="w-8 h-8 text-blue-600" />,
    title: "Local City Rides",
    description:
      "Comfortable and quick cab services within the city for your daily commute.",
  },
  {
    icon: <RouteIcon className="w-8 h-8 text-green-600" />,
    title: "Outstation Trips",
    description:
      "Travel to nearby towns or states with safe and reliable long-distance rides.",
  },
  {
    icon: <PlaneTakeoffIcon className="w-8 h-8 text-purple-600" />,
    title: "Airport Transfers",
    description:
      "24/7 airport drop and pickup service with on-time guarantees.",
  },
  {
    icon: <BriefcaseBusiness className="w-8 h-8 text-yellow-500" />,
    title: "Corporate Travel",
    description:
      "Business cab solutions with monthly billing, priority support, and flexible plans.",
  },
  {
    icon: <MapIcon className="w-8 h-8 text-indigo-500" />,
    title: "Tour Packages",
    description:
      "Customized city tours with local drivers who know every hidden gem.",
  },
  {
    icon: <CarFront className="w-8 h-8 text-red-500" />,
    title: "Luxury & Premium Rides",
    description:
      "Chauffeur-driven premium cars for weddings, events, and VIP clients.",
  },
  {
    icon: <PhoneCallIcon className="w-8 h-8 text-teal-600" />,
    title: "24/7 Customer Support",
    description:
      "Round-the-clock support and real-time tracking for your safety and convenience.",
  },
  {
    icon: <HeartPulse className="w-8 h-8 text-rose-500" />,
    title: "Medical & Emergency Rides",
    description:
      "Quick and safe transport to hospitals or clinics — because health can't wait.",
  },
];

const OurServices = () => {
  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="font-sans text-4xl tracking-widest text-gray-800 text-center mb-6">
        <span className="font-light">Our</span>
        <span className="font-bold text-blue-500"> Services</span>
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              {service.title}
            </h3>
            <p className="text-sm text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
