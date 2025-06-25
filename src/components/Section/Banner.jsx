import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between bg-gray-100 p-8 md:flex-row md:p-20">
      <div className="mb-10 ml-16 max-w-xl md:mb-0">
        <h1 className="mb-6 text-5xl font-bold leading-tight">
          BOOK A CAB &
          <br />
          RIDE NOW
        </h1>
        <p className="mb-6 text-lg">
          Now, book your favourite cars for special events with our
          pocket-friendly packages.
        </p>
        <div className="flex gap-4">
          <button className="rounded bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-700">
            BOOK NOW
          </button>
        </div>
      </div>

      <div className="relative">
        <div className="relative z-10">
          <Image
            src="/swift.png" // Add your car image to public directory as "car.png"
            alt="Luxury Car"
            width={900}
            height={900}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
