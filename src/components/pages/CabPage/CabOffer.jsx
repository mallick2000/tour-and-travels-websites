import React from "react";

const offers = [
  {
    title: "Flat ₹100 Off",
    desc: "On first booking",
    code: "WELCOME100",
  },
  {
    title: "10% Off",
    desc: "For weekend rides (Fri–Sun)",
    code: "WEEKEND10",
  },
];

export default function OffersSection() {
  return (
    <section className="bg-gray-100 px-6 md:px-32 py-10 rounded-xl">
      <h2 className="text-3xl font-semibold mb-6">Exciting Offers</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {offers.map((offer, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-bold text-yellow-600">{offer.title}</h3>
            <p className="text-sm mt-2">{offer.desc}</p>
            {/* <p className="text-xs mt-2 bg-yellow-100 inline-block px-2 py-1 rounded text-yellow-800">
              Use Code: <strong>{offer.code}</strong>
            </p> */}
          </div>
        ))}
      </div>
    </section>
  );
}
