import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function ContactUs() {
  return (
    <section className="relative h-40 flex items-center justify-center px-6 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/place/n5.jpg"
        alt="Contact Us Background"
        className="object-cover"
        fill
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 bg-opacity-50"></div>

      {/* Content */}
      <div className="relative w-full flex justify-between items-center px-14 text-white">
        <div className="md:w-1/2">
          <h2 className="text-lg md:text-xl font-semibold">
            Have Any Questions?
          </h2>
          <p className="text-sm">
            Reach out to us and we&apos;ll get back to you as soon as possible.
          </p>
        </div>
        <Link href="/contact">
          <Button className="bg-blue-500 text-white px-5 py-2 rounded-md font-semibold hover:bg-blue-600">
            Contact Us
          </Button>
        </Link>
      </div>
    </section>
  );
}
