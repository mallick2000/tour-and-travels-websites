import { ChevronLeft, ChevronRight } from "lucide-react";

export default function KonarkSlider() {
  return (
    <section className="relative w-[300px] max-w-3xl mx-auto overflow-hidden rounded-lg shadow-md py-6">
      <img
        src="/place/konark.jpg"
        alt="Konark Temple"
        className="w-[300px] h-[285px] object-cover"
      />
      {/* Left Arrow */}
      <button className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-2 shadow hover:bg-white transition">
        <ChevronLeft className="h-5 w-5 text-black" />
      </button>
      {/* Right Arrow */}
      <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-2 shadow hover:bg-white transition">
        <ChevronRight className="h-5 w-5 text-black" />
      </button>
      {/* Caption */}
    </section>
  );
}
