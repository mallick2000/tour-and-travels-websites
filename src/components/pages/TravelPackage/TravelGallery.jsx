import React from "react";

const Gallery = () => {
  const images = [
    "/place/n1.jpg",
    "/place/n2.jpg",
    "/place/n3.jpg",
    "/place/n4.jpg",
    "/place/n5.jpg",
    "/place/kapilash.jpg",
  ];

  return (
    <section className="py-12 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">Photo Gallery</h2>
        <p className="text-gray-600 mt-2">A collection of beautiful moments</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {images.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
