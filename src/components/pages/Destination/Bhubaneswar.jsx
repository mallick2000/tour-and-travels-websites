import Image from "next/image";

export default function Bhubaneswar() {
  return (
    <div className="bg-white text-slate-800 font-sans leading-relaxed">
      {/* Hero Section */}
      <div className="relative w-full h-[600px]">
        <Image
          src="/Bbsr/img1.jpg"
          alt="Bhubaneswar Hero Image"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent flex items-center justify-center">
          <h1 className="text-white text-5xl md:text-7xl font-extrabold text-center">
            Explore the Temple City – Bhubaneswar
          </h1>
        </div>
      </div>

      {/* Introduction */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold mb-6 border-b-4 border-rose-500 inline-block">
          Welcome to Bhubaneswar
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          Known as the <strong>Temple City of India</strong>, Bhubaneswar is a
          cultural and historical gem of Odisha. With over 700 temples, modern
          infrastructure, and thriving IT hubs, it beautifully merges ancient
          heritage with contemporary living.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          From sacred architecture and museums to food streets and lush parks,
          Bhubaneswar offers a vibrant and diverse travel experience.
        </p>

        {/* Temple Image */}
        <div className="rounded-xl overflow-hidden shadow-xl mb-12">
          <Image
            src="/Bbsr/img2.jpg"
            alt="Lingaraj Temple"
            width={1200}
            height={800}
            className="w-full h-[500px] object-cover"
          />
        </div>

        {/* Lingaraj Temple Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          <Image
            src="/Bbsr/img3.jpg"
            alt="Lingaraj Temple close-up"
            width={600}
            height={400}
            className="rounded-2xl shadow-md"
          />
          <div>
            <h3 className="text-2xl font-semibold mb-2 text-rose-700">
              Lingaraj Temple – Divine Majesty
            </h3>
            <p>
              One of the most important temples in Bhubaneswar, Lingaraj is
              dedicated to Lord Shiva and showcases Kalinga-style architecture.
              The temple's intricate carvings and spiritual ambiance attract
              pilgrims and history lovers alike.
            </p>
          </div>
        </div>

        {/* Museum / Culture Image */}
        <div className="mb-12">
          <Image
            src="/Bbsr/img4.jpg"
            alt="Odisha State Museum"
            width={1200}
            height={800}
            className="rounded-xl md:h-[700px] shadow-lg"
          />
          <p className="text-sm mt-2 text-gray-500 italic">
            Odisha State Museum – preserving tribal, art, and Buddhist heritage
            under one roof.
          </p>
        </div>

        {/* Cultural and Modern Mix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
          <div>
            <h3 className="text-2xl font-semibold mb-2 text-rose-700">
              Where Tradition Meets Technology
            </h3>
            <p>
              Bhubaneswar is also a rising IT and education hub with
              institutions like KIIT, IIT Bhubaneswar, and Infosys campuses. The
              city’s smart city status blends seamlessly with its ancient roots.
            </p>
          </div>
          <Image
            src="/Bbsr/img5.jpg"
            alt="Modern Bhubaneswar"
            width={900}
            height={900}
            className="rounded-2xl"
          />
        </div>

        {/* Scenic & Lifestyle Shots */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Image
            src="/place/dhauli.jpg"
            alt="Street food in Bhubaneswar"
            width={900}
            height={900}
            className="rounded-2xl md:h-[305px]"
          />
          <Image
            src="/place/khandagari.jpg"
            alt="Khandagiri Caves"
            width={900}
            height={900}
            className="rounded-2xl  md:h-[305px]"
          />
        </div>

        {/* Best Time to Visit */}
        <div className="bg-gray-50 p-6 rounded-xl mb-12">
          <h3 className="text-2xl font-semibold text-rose-700 mb-2">
            Best Time to Visit Bhubaneswar
          </h3>
          <p className="text-gray-700 text-lg">
            The best season to explore Bhubaneswar is from{" "}
            <strong>October to March</strong>, with pleasant weather and
            festival celebrations.
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
            <li>
              <strong>Festivals:</strong> Witness colorful events like Ekamra
              Festival, Shivratri at Lingaraj, and Dhauli Mahotsav.
            </li>
            <li>
              <strong>City Tours:</strong> Heritage walks, cave trails, and
              temple tours.
            </li>
            <li>
              <strong>Shopping & Food:</strong> Explore local handloom, appliqué
              work, and authentic Odia cuisine at street markets.
            </li>
          </ul>
          <p className="text-gray-600 mt-4 italic">
            Avoid summer (April to June) due to high temperatures and humidity.
          </p>
        </div>

        {/* Nearby Attractions */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-4 text-rose-700">
            Nearby Tourist Attractions
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-3 text-lg">
            <li>
              <strong>Dhauli Peace Pagoda:</strong> A Buddhist monument on the
              banks of Daya River, symbolizing peace and Ashokan heritage.
            </li>
            <li>
              <strong>Khandagiri & Udayagiri Caves:</strong> Ancient Jain
              rock-cut caves offering history and panoramic views.
            </li>
            <li>
              <strong>Nandankanan Zoological Park:</strong> Home to rare white
              tigers and a botanical garden.
            </li>
            <li>
              <strong>Chausathi Yogini Temple:</strong> A circular open-air
              shrine with 64 Yogini sculptures.
            </li>
            <li>
              <strong>Ekāmra Haat:</strong> A vibrant artisan village to buy
              handlooms, handicrafts, and try Odia delicacies.
            </li>
          </ul>
        </div>

        {/* Conclusion */}
        <div className="mt-16 border-t pt-6">
          <p className="text-xl text-gray-800">
            Bhubaneswar is not just a city; it's a journey through time — from
            ancient sandstone temples to smart-city streets. Whether you're a
            history buff, spiritual seeker, or culture lover, the city welcomes
            you with open arms.
          </p>
        </div>
      </section>
    </div>
  );
}
