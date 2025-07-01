"use client";

import { Search, Plane, Bed, Car, Umbrella, MapPin } from "lucide-react";

export default function RecentSearches() {
  const searches = [
    {
      location: "Bhubaneswar",
      from: "7/7",
      to: "14/7",
      price: "₹ 2000",
    },
    {
      location: "Bhubaneswar - Cuttack",
      from: "7/7",
      to: "14/7",
      price: null,
    },
  ];

  const handleSearchClick = (location) => {
    console.log("Search clicked for:", location);
    // You can route using useRouter() from 'next/navigation'
  };

  const handleNewSearch = (type) => {
    console.log("New search type selected:", type);
    // Example: router.push(`/search/${type}`)
  };

  return (
    <section className="p-6 md:px-16 lg:px-20">
      <h2 className="text-2xl font-bold mb-6">Your Recent Searches</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {searches.map((search, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-5 flex flex-col justify-between hover:shadow-lg transition"
          >
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-blue-500 p-2 rounded-full text-white">
                  <Car className="w-4 h-4" />
                </div>
                <span className="font-semibold">{search.location}</span>
              </div>
              <p className="text-sm text-gray-500">
                {search.from} <span className="mx-1"></span> → {search.to}{" "}
                <span className="mx-1"></span>
              </p>
            </div>

            <div className="flex justify-between items-center mt-6">
              {search.price ? (
                <span className="font-bold text-lg">{search.price}</span>
              ) : (
                <span className="text-blue-600 font-semibold">View prices</span>
              )}
              <button
                onClick={() => handleSearchClick(search.location)}
                className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}

        {/* New search card */}
        <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:shadow-lg transition">
          <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mb-4 text-gray-500">
            <Search className="w-8 h-8" />
          </div>
          <p className="font-semibold mb-4">Start a new search</p>
          <div className="flex gap-3">
            <button
              onClick={() => handleNewSearch("car")}
              className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full"
            >
              <Car className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
