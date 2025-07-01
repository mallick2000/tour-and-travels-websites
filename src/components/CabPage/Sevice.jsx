import Image from "next/image";

export default function TaxiService() {
  return (
    <section className="bg-gray-200 p-6  rounded-xl shadow-lg flex flex-col lg:flex-row gap-6 items-start md:px-12 lg:px-20">
      {/* Left Content */}
      <div className="flex-1">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-4">
          Quick Cab Taxi Services – Local Rides & Outstation Trips
        </h2>
        <p className="text-gray-700 mb-2">
          Bhubaneswar, the vibrant capital of Odisha, is celebrated for its rich
          cultural heritage and ancient temples, earning it the title "Temple
          City of India." With a perfect mix of tradition and modernity, it
          welcomes tourists, students, and professionals alike.
        </p>
        <p className="text-gray-700 mb-2">
          From iconic sites like Lingaraj Temple and Mukteshwar Temple to
          peaceful locations such as Dhauli Shanti Stupa, Bhubaneswar offers
          plenty to explore. The city also boasts modern amenities, lush parks,
          IT hubs, and renowned educational institutions.
        </p>
        <p className="text-gray-700 mb-2">
          Whether you're planning a short trip across town or a weekend getaway,
          Quick Cab is your trusted travel partner. We provide safe and punctual
          taxi services for both{" "}
          <span className="font-semibold">local travel</span> and{" "}
          <span className="font-semibold">outstation journeys</span>. Need a
          ride to or from the airport? Count on us for comfortable and
          affordable transfers.
        </p>
      </div>

      {/* Right Image */}
      <div className="w-full lg:w-[400px]">
        <div className="rounded-xl overflow-hidden shadow-md">
          <Image
            src="/place/lingraj.jpg" // Update this path to match your public folder
            alt="Bhubaneswar Temple"
            width={400}
            height={300}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
}
