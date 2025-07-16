"use client";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const destinations = [
  {
    title: "CHILIKA",
    description:
      "The island is famous as a centre of religious worship due to the temple of Goddess Kalijai.",
    image: "/place/Chilika.jpg",
  },
  {
    title: "Koraput",
    description:
      "Deomali is a popular tourist destination in Odisha known for its pristine beaches, lush green landscapes, and serene atmosphere.",

    image: "/place/Deomali.jpg",
  },
  {
    title: "BHITARKANIKA",
    description:
      "Bhitarkanika is a vast mangrove wetland known for crocodiles, birds, and rare biodiversity in Odisha.",
    image: "/place/kdp.jpg",
  },
  {
    title: "Bhubaneswar",
    description:
      "It is renowned for its magnificent Kalinga architecture and spiritual significance.",
    image: "/place/lingraj.jpg",
  },
  {
    title: "PURI",
    description:
      "The Shri Jagannath Temple, a revered Hindu temple and one of the four Dhamas in India. Known for the Ratha Yatra.",
    image: "/place/puri.jpg",
  },
  {
    title: "SIMILIPAL",
    description:
      "Similipal is famous as a wildlife haven, particularly for its large tiger population and role as a biosphere reserve.",
    image: "/place/tiger.jpg",
  },
];

export default function Destination() {
  const router = useRouter();
  return (
    <section className="px-4 py-12 md:px-12 lg:px-20">
      <h2 className="font-sans text-4xl tracking-widest text-gray-800 text-center">
        <span className="font-light">Travel</span>
        <span className="font-bold text-blue-500"> Spotlight</span>
      </h2>

      <p className="text-center text-xl font-light mb-8">
        Step into Odisha&apos;s hidden treasure, rich in heritage, beauty, and
        spirit.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {destinations.map((dest, idx) => (
          <div
            key={idx}
            className="relative h-80 overflow-hidden rounded-xl group text-white"
          >
            <Link
              href={`/destination/${dest.title}`}
              className="relative block h-80 overflow-hidden rounded-xl group text-white"
            >
              <Image
                src={dest.image}
                alt={dest.title}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
              <div className="absolute right-4 top-4 rounded-full bg-white/80 p-2 text-black backdrop-blur-sm group-hover:bg-blue-500 group-hover:text-white transition duration-300 ease-in z-50">
                <ArrowUpRight size={18} />
              </div>
              <div className="absolute inset-0 group-hover:from-black group-hover:to-black/10 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <h2 className="mb-2 text-xl font-semibold">{dest.title}</h2>
                <p className="text-sm text-gray-200">{dest.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
