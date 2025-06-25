import React from "react";
import Link from "next/link";
const Cabspecs = () => {
  return (
    <div className="p-6">
      <h1 className="mb-4 text-center text-4xl font-bold">All VEHICLES</h1>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
        <Link href="#">
          <p className="w-40 rounded-full bg-gray-400 px-6 py-3 text-center text-xl font-bold text-white hover:bg-blue-700">
            HatchBack
          </p>
        </Link>
        <Link href="#">
          <p className="w-40 rounded-full bg-gray-400 px-6 py-3 text-center text-xl font-bold text-white hover:bg-blue-700">
            Suv
          </p>
        </Link>
        <Link href="#">
          <p className="w-40 rounded-full bg-gray-400 px-6 py-3 text-center text-xl font-bold text-white hover:bg-blue-700">
            Sedan
          </p>
        </Link>
        <Link href="#">
          <p className="w-40 rounded-full bg-gray-400 px-6 py-3 text-center text-xl font-bold text-white hover:bg-blue-700">
            Traveller
          </p>
        </Link>
      </div>
    </div>
  );
};
export default Cabspecs;
