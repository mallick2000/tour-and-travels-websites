import Image from "next/image";

export default function Puri() {
  return (
    <div className="bg-white text-slate-800 font-sans leading-relaxed">
      {/* Hero Section */}
      <div className="relative w-full h-[600px]">
        <Image
          src="/Puri/img1.jpg"
          alt="Puri Beach and Jagannath Temple"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent flex items-center justify-center">
          <h1 className="text-white text-5xl md:text-7xl font-extrabold text-center">
            Spiritual Shores of Puri
          </h1>
        </div>
      </div>

      {/* Introduction */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold mb-6 border-b-4 border-yellow-500 inline-block">
          Welcome to Puri – The Holy Land
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          Located along the Bay of Bengal in Odisha, <strong>Puri</strong> is
          one of the four sacred Char Dham pilgrimage sites in India. Known for
          the grand Jagannath Temple and the famous Rath Yatra, this coastal
          city beautifully blends devotion, art, and beachside relaxation.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Whether you come to seek blessings, walk the golden beaches, or
          explore Odisha’s rich heritage, Puri offers something unforgettable
          for every traveler.
        </p>

        {/* Temple Image */}
        <div className="rounded-xl overflow-hidden shadow-xl mb-12">
          <Image
            src="/Puri/img8.jpg"
            alt="Jagannath Temple"
            width={1200}
            height={800}
            className="w-full h-[500px] object-cover"
          />
        </div>

        {/* Jagannath Temple Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          <Image
            src="/Puri/img2.jpg"
            alt="Jagannath Rath Yatra"
            width={600}
            height={400}
            className="rounded-2xl h-96 shadow-md"
          />
          <div>
            <h3 className="text-2xl font-semibold mb-2 text-yellow-700">
              Jagannath Temple – A Spiritual Marvel
            </h3>
            <p>
              One of India&apos;s most revered Hindu temples, the Jagannath
              Temple is dedicated to Lord Jagannath, a form of Vishnu. It’s
              world-famous for its annual Rath Yatra, where the deities are
              paraded in massive wooden chariots.
            </p>
          </div>
        </div>

        {/* Puri Beach */}
        <div className="mb-12">
          <Image
            src="/Puri/img3.jpg"
            alt="Puri Beach at sunrise"
            width={1200}
            height={800}
            className="rounded-xl shadow-lg"
          />
          <p className="text-sm mt-2 text-gray-500 italic">
            Puri Beach — A peaceful coastline where pilgrims and tourists alike
            find serenity and joy.
          </p>
        </div>

        {/* Cultural Heritage Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
          <div>
            <h3 className="text-2xl font-semibold mb-2 text-yellow-700">
              Rich in Art & Culture
            </h3>
            <p>
              Puri is also known for its traditional art forms like Pattachitra
              paintings, sand art, and Odissi dance. A walk through the town
              reveals artisan villages and cultural festivals that celebrate the
              soul of Odisha.
            </p>
          </div>
          <Image
            src="/Puri/img6.jpg"
            alt="Traditional Pattachitra art in Puri"
            width={900}
            height={900}
            className="rounded-2xl"
          />
        </div>

        {/* More Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Image
            src="/Puri/img5.jpg"
            alt="Sand Art at Puri Beach"
            width={900}
            height={900}
            className="rounded-2xl md:h-[305px]"
          />
          <Image
            src="/Puri/img7.jpg"
            alt="Local Odia food served in Puri"
            width={900}
            height={900}
            className="rounded-2xl"
          />
        </div>

        {/* Best Time to Visit */}
        <div className="bg-gray-50 p-6 rounded-xl mb-12">
          <h3 className="text-2xl font-semibold text-yellow-700 mb-2">
            Best Time to Visit Puri
          </h3>
          <p className="text-gray-700 text-lg">
            The ideal time to visit Puri is from{" "}
            <strong>October to March</strong>. The climate is pleasant, and many
            major festivals take place during this season.
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
            <li>
              <strong>Rath Yatra:</strong> Held in June/July — a spiritual event
              drawing millions of devotees.
            </li>
            <li>
              <strong>Beach Activities:</strong> Perfect weather for beach
              walks, sunrises, and local cuisine.
            </li>
            <li>
              <strong>Cultural Fairs:</strong> Enjoy classical dance festivals,
              sand art competitions, and more.
            </li>
          </ul>
          <p className="text-gray-600 mt-4 italic">
            Summers (April–June) are hot and humid, while monsoons
            (July–September) bring heavy rains.
          </p>
        </div>

        {/* Nearby Attractions */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-4 text-yellow-700">
            Nearby Tourist Attractions
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-3 text-lg">
            <li>
              <strong>Konark Sun Temple:</strong> A UNESCO World Heritage Site,
              just an hour from Puri.
            </li>
            <li>
              <strong>Chilika Lake (Satapada):</strong> Known for dolphin
              watching and migratory birds.
            </li>
            <li>
              <strong>Raghurajpur Heritage Village:</strong> Famous for
              Pattachitra artists and Gotipua dancers.
            </li>
            <li>
              <strong>Sakhigopal Temple:</strong> A serene temple dedicated to
              Lord Krishna near Puri.
            </li>
            <li>
              <strong>Bhubaneswar:</strong> The capital city with ancient
              temples and tribal museums, 60 km away.
            </li>
          </ul>
        </div>

        {/* Conclusion */}
        <div className="mt-16 border-t pt-6">
          <p className="text-xl text-gray-800">
            Puri is where the spiritual and the scenic merge — from
            centuries-old traditions to tranquil beaches, it's a place of peace,
            power, and profound cultural depth. Discover the divine charm of
            Odisha in every grain of sand here.
          </p>
        </div>
      </section>
    </div>
  );
}
