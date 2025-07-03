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
    title: "DHAULI",
    description:
      "Dhauli, where peace whispers by the Daya’s shore, Ashoka’s sword fell, and hatred rose no more.",
    image: "/place/dhauli.jpg",
  },
  {
    title: "BHITARKANIKA",
    description:
      "Bhitarkanika is a vast mangrove wetland known for crocodiles, birds, and rare biodiversity in Odisha.",
    image: "/place/kdp.jpg",
  },
  {
    title: "LINGRAJ TEMPLE",
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
            // onClick={router.push(`/destination/${dest.title}`)}
          >
            <Image
              src={dest.image}
              alt={dest.title}
              fill
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />

            <Link
              href={`/destination/${dest.title}`}
              className="absolute right-4 group-hover:bg-blue-500 transition duration-300  group-hover:text-white ease-in top-4 rounded-full bg-white/80 p-2 z-50 text-black backdrop-blur-sm"
            >
              <ArrowUpRight size={18} />
            </Link>
            <div className="absolute inset-0 group-hover:from-black group-hover:to-black/10 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 z-10">
              <h2 className="mb-2 text-xl font-semibold">{dest.title}</h2>
              <p className="text-sm text-gray-200">{dest.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
