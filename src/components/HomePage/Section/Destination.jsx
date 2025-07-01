import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

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
  return (
    <section className="px-4 py-12 md:px-12 lg:px-20">
      <h1 className="text-3xl font-bold mb-2 text-center text-gray-800">
        Featured Destination
      </h1>
      <p className="text-center text-xl font-light mb-8">
        Step into Odisha&apos;s hidden treasure, rich in heritage, beauty, and
        spirit.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {destinations.map((dest, idx) => (
          <div
            key={idx}
            className="relative h-80 overflow-hidden rounded-xl  group text-white"
          >
            <Image
              src={dest.image}
              alt={dest.title}
              fill
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />
            <div className="absolute right-4 top-4 rounded-full bg-white/80 p-2 text-black backdrop-blur-sm">
              <ArrowUpRight size={18} />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
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
