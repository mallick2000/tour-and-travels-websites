import React from "react";
import CabBookingForm from "../../Form/CabBookingForm";
import Image from "next/image";

function CabBookingSection() {
  return (
    <section className="relative w-full md:h-[700px] h-[500px]">
      {/* Background Image */}
      <Image
        src="/Tour5.jpg"
        alt="Tour Background"
        fill
        className="object-cover"
        priority
      />

      {/* Booking Form Content aligned right */}
      <div className="relative flex items-center  w-full h-full  md:px-12">
        <CabBookingForm />
      </div>
    </section>
  );
}

export default CabBookingSection;
