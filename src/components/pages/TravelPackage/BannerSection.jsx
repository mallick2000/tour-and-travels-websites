import React from "react";

const CabTravelBanner = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url('/place/n2.jpg')`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
          Ride Smart. Travel Comfortably.
        </h1>
        <p className="mt-6 text-lg md:text-2xl text-gray-200 max-w-2xl mx-auto">
          Your journey starts here — fast, affordable, and always on time. Book
          our premium cab packages for city rides and airport transfers.
        </p>
        <button className="mt-8 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out">
          Book a Ride Now
        </button>
      </div>
    </section>
  );
};

export default CabTravelBanner;
