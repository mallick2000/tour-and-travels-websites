import Image from "next/image";
import { Star } from "lucide-react";

const carData = [
  {
    title: "",

    fuel: "Petrol",
    transmission: "Manual",
    image: "/cars/chevy.png",
    location: "Bhubaneswar",
  },
  {
    title: "",

    fuel: "Petrol",
    transmission: "Manual",

    image: "/cars/chevy.png",
    location: "Bhubaneswar",
  },
  {
    title: "",

    fuel: "Petrol",
    transmission: "Manual",

    image: "/cars/chevy.png",
    location: "Bhubaneswar",
  },
  {
    title: "",

    fuel: "Petrol",
    transmission: "Auto",

    image: "/cars/chevy.png",
    location: "Bhubaneswar",
  },
  {
    title: "",

    fuel: "Petrol",
    transmission: "Manual",
    image: "/cars/chevy.png",
    location: "Bhubaneswar",
  },
  {
    title: "",
    fuel: "diesel",
    transmission: "Manual",
    image: "/cars/chevy.png",
    location: "Bhubaneswar",
  },
  {
    title: "",
    fuel: "diesel",
    transmission: "Manual",
    image: "/cars/chevy.png",
    location: "Bhubaneswar",
  },
  {
    title: "",
    fuel: "diesel",
    transmission: "Manual",
    image: "/cars/chevy.png",
    location: "Bhubaneswar",
  },
];

export default function Home() {
  return (
    <main className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-4">
      {carData.map((car, index) => (
        <div key={index} className="relative rounded-2xl bg-white p-4 shadow">
          {/* <div className="absolute right-3 top-3 cursor-pointer text-gray-500">
            ♡
          </div>*/}
          <Image
            src={car.image}
            alt={car.title}
            width={200}
            height={200}
            className="mx-auto"
          />
          <h2 className="mt-2 font-semibold">{car.title}</h2>
          <div className="mt-1 text-lg text-gray-500">
            {car.km} • {car.fuel} • {car.transmission} {car.owner}
          </div>
          <div className="flex justify-between">
            <div className="mt-1 text-lg text-gray-500">{car.location}</div>
            <button className="w-32 rounded-xl border bg-blue-500 p-2 font-bold text-white">
              Book Now
            </button>
          </div>
        </div>
      ))}
    </main>
  );
}
