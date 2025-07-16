import React from "react";

const Testimonial = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg flex items-center space-x-6">
      <div className="flex-shrink-0">
        <img
          className="w-20 h-20 rounded-full object-cover"
          src="https://randomuser.me/api/portraits/men/22.jpg"
          alt="User"
        />
      </div>
      <div className="flex flex-col space-y-4">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-semibold">Sudhir Sane</span>
          <span className="text-gray-500 text-sm">Google Review</span>
        </div>
        <div className="flex items-center space-x-1">
          <span className="text-yellow-400">&#9733;</span>
          <span className="text-yellow-400">&#9733;</span>
          <span className="text-yellow-400">&#9733;</span>
          <span className="text-yellow-400">&#9733;</span>
          <span className="text-yellow-400">&#9733;</span>
        </div>
        <p className="text-gray-600 text-lg italic">
          "We had visited the Orissa in Feb 2023 and taken 17 seater Tempo
          Traveller from Odisha Vacations service. We had a nice experience and
          thanks to Pragnya from Odisha vacations for nice support."
        </p>
      </div>
      <div className="absolute bottom-0 right-0 mr-6">
        <img
          className="w-16 h-16 object-cover rounded-full"
          src="https://randomuser.me/api/portraits/men/21.jpg"
          alt="Traveler"
        />
      </div>
    </div>
  );
};

export default Testimonial;
