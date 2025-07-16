import Image from "next/image";

export default function Bhitarkanika() {
  return (
    <div className="bg-white text-slate-800 font-sans leading-relaxed">
      {/* Hero Section */}
      <div className="relative w-full h-[600px]">
        <Image
          src="/Bhitarkanika/img9.jpg"
          alt="Bhitarkanika "
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent flex items-center justify-center">
          <h1 className="text-white text-5xl md:text-7xl font-extrabold text-center ">
            Discover the Wild Heart of Bhitarkanika
          </h1>
        </div>
      </div>

      {/* Introduction */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold mb-6 border-b-4 border-green-500 inline-block">
          Welcome to Bhitarkanika National Park
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          Tucked away in the Kendrapara district of Odisha,{" "}
          <strong>Bhitarkanika</strong> is India's second-largest mangrove
          ecosystem. It spans lush wetlands, tidal rivers, and estuaries,
          offering a sanctuary to rare flora and fauna — including the mighty
          saltwater crocodile.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Whether you're a wildlife enthusiast, a bird lover, or a nature
          photographer, Bhitarkanika is a living tapestry of biodiversity
          waiting to be explored.
        </p>

        {/* Mangrove Forest Image */}
        <div className="rounded-xl overflow-hidden shadow-xl mb-12">
          <Image
            src="/Bhitarkanika/img4.jpg"
            alt="Mangrove forest in Bhitarkanika"
            width={1200}
            height={800}
            className="w-full h-[500px] object-cover"
          />
        </div>

        {/* Crocodile Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          <Image
            src="/Bhitarkanika/img1.jpg"
            alt="Saltwater Crocodile in Bhitarkanika"
            width={600}
            height={400}
            className="rounded-2xl shadow-md"
          />
          <div>
            <h3 className="text-2xl font-semibold mb-2 text-green-700">
              Home of the Giant Crocodiles
            </h3>
            <p>
              Bhitarkanika is famed for its population of estuarine crocodiles,
              some of which are among the largest in the world. These reptiles
              glide through the creeks and bask along the muddy banks, creating
              a thrilling experience for wildlife seekers.
            </p>
          </div>
        </div>

        {/* Spotted Deer Image */}
        <div className="mb-12">
          <Image
            src="/Bhitarkanika/img7.jpg"
            alt="Spotted Deer in the park"
            width={1200}
            height={800}
            className="rounded-xl shadow-lg"
          />
          <p className="text-sm mt-2 text-gray-500 italic">
            A group of spotted deer grazing peacefully in the grasslands of
            Bhitarkanika.
          </p>
        </div>

        {/* Bird Watching Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
          <div>
            <h3 className="text-2xl font-semibold mb-2 text-green-700">
              A Haven for Migratory Birds
            </h3>
            <p>
              From November to February, Bhitarkanika becomes a vibrant nesting
              ground for thousands of migratory birds. Bagagahana and nearby
              wetlands echo with the sounds of kingfishers, egrets, open-billed
              storks, and many more.
            </p>
          </div>
          <Image
            src="/Bhitarkanika/img8.jpg"
            alt="Migratory birds in Bhitarkanika"
            width={900}
            height={900}
            className="rounded-2xl"
          />
        </div>

        {/* Wildlife & Landscape */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Image
            src="/Bhitarkanika/img6.jpg"
            alt="gate"
            width={900}
            height={900}
            className="rounded-2xl md:h-[305px]"
          />
          <Image
            src="/Bhitarkanika/img5.jpg"
            alt="River and boat safari in Bhitarkanika"
            width={900}
            height={900}
            className="rounded-2xl"
          />
        </div>

        {/* Best Time to Visit */}
        <div className="bg-gray-50 p-6 rounded-xl mb-12">
          <h3 className="text-2xl font-semibold text-green-700 mb-2">
            Best Time to Explore Bhitarkanika
          </h3>
          <p className="text-gray-700 text-lg">
            The best season to visit Bhitarkanika is during the{" "}
            <strong>winter months — November to February</strong>. The weather
            is pleasant and perfect for wildlife viewing and boat safaris.
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
            <li>
              <strong>Birdwatching:</strong> See flocks of migratory birds
              arriving from distant regions.
            </li>
            <li>
              <strong>Boat Rides:</strong> Navigate the tidal creeks and spot
              crocodiles in their habitat.
            </li>
            <li>
              <strong>Nature Walks:</strong> Explore trails through mangrove
              forests, mudflats, and estuaries.
            </li>
          </ul>
          <p className="text-gray-600 mt-4 italic">
            Avoid visiting during the monsoon (June to September) as water
            levels rise and boat access becomes limited.
          </p>
        </div>

        {/* Nearby Attractions */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-4 text-green-700">
            Nearby Tourist Attractions
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-3 text-lg">
            <li>
              <strong>Gahirmatha Marine Sanctuary:</strong> Nesting ground for
              the endangered Olive Ridley turtles.
            </li>
            <li>
              <strong>Dangamal:</strong> The core area of Bhitarkanika — known
              for crocodile breeding and watchtowers.
            </li>
            <li>
              <strong>Kendrapara:</strong> A nearby town offering cultural
              insight and local cuisine.
            </li>
            <li>
              <strong>Chandabali:</strong> A river port with access to boat
              rides towards Bhitarkanika.
            </li>
            <li>
              <strong>Habalikhati Beach:</strong> A secluded beach near the
              forest, perfect for peaceful retreats.
            </li>
          </ul>
        </div>

        {/* Conclusion */}
        <div className="mt-16 border-t pt-6">
          <p className="text-xl text-gray-800">
            Bhitarkanika National Park is more than a destination — it's a rare
            encounter with untamed nature. Walk beneath mangrove canopies, sail
            across winding creeks, and witness life in its most raw and
            remarkable form.
          </p>
        </div>
      </section>
    </div>
  );
}
