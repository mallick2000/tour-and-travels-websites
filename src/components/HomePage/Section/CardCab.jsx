import Image from "next/image";
import { Star } from "lucide-react";
import Link from "next/link";

const carData = [
  {
    title: "",
    fuel: "Petrol",
    transmission: "Manual",
    image: "/cars/i10.jpg",
    location: "Bhubaneswar",
  },
  {
    title: "",
    fuel: "Petrol",
    transmission: "Manual",
    image: "/cars/xcent.jpg",
    location: "Bhubaneswar",
  },
  {
    title: "",
    fuel: "Petrol",
    transmission: "Manual",
    image: "/cars/swift.jpg",
    location: "Bhubaneswar",
  },
  {
    title: "",
    fuel: "Petrol",
    transmission: "Manual",
    image: "/cars/Etios.png",
    location: "Bhubaneswar",
  },
  {
    title: "",
    fuel: "Petrol",
    transmission: "Manual",
    image: "/cars/car.jpg",
    location: "Bhubaneswar",
  },
  {
    title: "",
    fuel: "Petrol",
    transmission: "Manual",
    image: "/cars/beat.jpg",
    location: "Bhubaneswar",
  },
  {
    title: "",
    fuel: "Petrol",
    transmission: "Manual",
    image: "/cars/amaze.jpg",
    location: "Bhubaneswar",
  },
  {
    title: "",
    fuel: "Petrol",
    transmission: "Manual",
    image: "/cars/chevy.png",
    location: "Bhubaneswar",
  },
];

export default function Home() {
  return (
    <main className="px-4 py-10  md:px-16 lg:px-20 bg-gray-50">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Available Cars
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {carData.map((car, index) => (
          <div
            key={index}
            className="rounded-xl bg-white shadow-lg p-4 flex flex-col hover:shadow-2xl transition"
          >
            <div className="w-full h-40 relative mb-4">
              <Image
                src={car.image}
                alt={car.title || "Car image"}
                fill
                className="object-contain"
              />
            </div>

            <h2 className="text-lg font-semibold text-gray-800">
              {car.title || "Chevrolet Hatchback"}
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              {car.fuel} • {car.transmission}
            </p>

            <div className="mt-2 flex justify-between items-center text-sm text-gray-600">
              <span>{car.location}</span>
              <Link href="#">
                <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded-full font-semibold transition">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-12">
        <button className="w-36 rounded-full bg-blue-500 hover:bg-blue-600 p-3 font-semibold text-white shadow-md transition">
          View More
        </button>
      </div>
    </main>
  );
}
