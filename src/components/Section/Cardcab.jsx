import Image from "next/image";
export default function Cardcab() {
  const cars = [
    /*{
      name: "Toyota Etios",
      price: "Comfortable| Sedans | 4 +1 Seater",
      image: "/cars/Etios.png",
    },*/
    {
      name: "HATCHBACK",
      detail: "Low cost | 4 + 1 Seater",
      description:
        " Wide range of Mini Vehicles With Tourist Drivers for your convinient journey",
      image: "/cars/swift.jpg",
    },
    /*{
      name: "Chevrolet Beat",
      price: "Low cost | HATCHBACK| 4 + 1 Seater",
      image: "/cars/beat.jpg",
    },
    {
      name: "Hyundai Xcent",
      price: "Comfortable| Sedans | 4 +1 Seater",
      image: "/cars/xcent.jpg",
    },*/
    {
      name: "SEDAN",
      detail: "Comfortable | 4 +1 Seater",
      description:
        " Wide range of Sedan Vehicles With Tourist Drivers for your convinient journey",
      image: "/cars/amaze.jpg",
    },
    /*{
      name: "Maruti Swift",
      price: "Low cost | HATCHBACK| 4 + 1 Seater",
      image: "/cars/swift2.jpg",
    },
    {
      name: "Mahindra Xuv",
      price: "Family | Large luggage space |  6 + 1 Seater",
      image: "/cars/xuv.webp",
    },
    {
      name: "Maruti Ertiga",
      price: "Family | Large luggage space |  6 + 1 Seater",
      image: "/cars/car.jpg",
    },*/
    {
      name: "SUV",
      detail: "Family | Luxury |  6 + 1 Seater",
      description:
        " Wide range of Suv Vehicles With Tourist Drivers for your convinient journey",
      image: "/cars/inova.jpeg",
    },
    /*{
      name: "Hyundai Grand i10",
      price: "Low cost | HATCHBACK| 4 + 1 Seater",
      image: "/cars/i10.jpg",
    },
    {
      name: "Chevrolet Travera",
      price: "Family | Large luggage space |  6 + 1 Seater",
      image: "/cars/chevy.png",
    },*/
    {
      name: "TRAVELLER",
      detail: "Family | Long Tour 16 + 1 Seater",
      description:
        "Wide range of Traveller Vehicles With Tourist Drivers for your convinient journey",
      image: "/cars/force.jpg",
    },
  ];
  return (
    <div className="bg-blue-50/25 p-8">
      <h2 className="mb-12 flex justify-center text-4xl font-bold">
        CABS YOU NEED
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {cars.map((car, index) => (
          <div
            key={index}
            className="h-[500px] transform overflow-hidden rounded-xl bg-white shadow-md hover:border hover:shadow-xl"
          >
            <Image
              src={car.image}
              alt={car.name}
              width={300}
              height={200}
              className="my-8 h-40 w-full object-contain"
            />
            <div className="relative p-4 text-center">
              <h2 className="mb-2 text-4xl font-semibold">{car.name}</h2>
              <p className="mb-4 text-xl font-semibold">{car.detail}</p>
              <p className="mb-4 text-center text-lg font-normal">
                {car.description}
              </p>
              <button className="w-40 rounded-full bg-blue-600 py-2 font-semibold text-white transition hover:bg-blue-700">
                BOOK NOW
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
