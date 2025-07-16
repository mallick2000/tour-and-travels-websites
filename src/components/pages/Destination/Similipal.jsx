import Image from "next/image";

export default function Simlipal() {
  return (
    <div className="bg-white text-slate-800 font-sans leading-relaxed">
      {/* Hero Section */}
      <div className="relative w-full h-[600px]">
        <Image
          src="/Similipal/img6.jpg"
          alt="Simlipal National Park"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent flex items-center justify-center">
          <h1 className="text-white text-5xl md:text-7xl font-extrabold text-center">
            Explore the Wilderness of Simlipal
          </h1>
        </div>
      </div>

      {/* Introduction */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold mb-6 border-b-4 border-green-500 inline-block">
          Welcome to Simlipal Tiger Reserve
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          Located in the Mayurbhanj district of Odisha,{" "}
          <strong>Simlipal National Park</strong> is a UNESCO-recognized
          biosphere reserve and a prime tiger habitat. This rich ecosystem of
          sal forests, waterfalls, and grasslands offers sanctuary to diverse
          wildlife — from majestic tigers and elephants to rare orchids and
          medicinal plants.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Ideal for wildlife enthusiasts and eco-tourists, Simlipal offers
          untouched nature, cultural richness, and the thrill of jungle
          exploration.
        </p>

        {/* Forest Image */}
        <div className="rounded-xl overflow-hidden shadow-xl mb-12">
          <Image
            src="/Similipal/img2.jpg"
            alt="Dense forest in Simlipal"
            width={1200}
            height={800}
            className="w-full h-[500px] object-cover"
          />
        </div>

        {/* Tigers and Wildlife Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          <Image
            src="/Similipal/img3.jpg"
            alt="Royal Bengal Tiger in Simlipal"
            width={600}
            height={400}
            className="rounded-2xl shadow-md"
          />
          <div>
            <h3 className="text-2xl font-semibold mb-2 text-green-700">
              The Land of the Royal Bengal Tiger
            </h3>
            <p>
              Simlipal is renowned for its population of Royal Bengal Tigers and
              Asian Elephants. With dense forest cover and ample water sources,
              it's one of India's prominent tiger habitats, offering a chance to
              witness these majestic creatures in the wild.
            </p>
          </div>
        </div>

        {/* Barehipani Waterfall */}
        <div className="mb-12">
          <Image
            src="/Similipal/img1.jpg"
            alt="Barehipani Waterfall in Simlipal"
            width={1200}
            height={800}
            className="rounded-xl shadow-lg"
          />
          <p className="text-sm mt-2 text-gray-500 italic">
            Barehipani Falls — one of the tallest waterfalls in India, located
            deep within Simlipal&apos;s core zone.
          </p>
        </div>

        {/* Birds and Nature Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
          <div>
            <h3 className="text-2xl font-semibold mb-2 text-green-700">
              Paradise for Bird Lovers
            </h3>
            <p>
              Simlipal&apos;s rich avifauna includes over 200 species of birds
              like hornbills, peacocks, crested serpent eagles, and kingfishers.
              The dense canopy and open meadows are alive with calls from dawn
              till dusk.
            </p>
          </div>
          <Image
            src="/Similipal/img5.jpg"
            alt="Birdlife in Simlipal"
            width={900}
            height={900}
            className="rounded-2xl"
          />
        </div>

        {/* Scenic Views */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Image
            src="/Similipal/img4.jpg"
            alt="Jungle road through Simlipal forest"
            width={900}
            height={900}
            className="rounded-2xl md:h-[305px]"
          />
          <Image
            src="/Similipal/img7.jpg"
            alt="Elephants roaming in Simlipal"
            width={900}
            height={900}
            className="rounded-2xl"
          />
        </div>

        {/* Best Time to Visit */}
        <div className="bg-gray-50 p-6 rounded-xl mb-12">
          <h3 className="text-2xl font-semibold text-green-700 mb-2">
            Best Time to Visit Simlipal
          </h3>
          <p className="text-gray-700 text-lg">
            The park remains open from <strong>November to mid-June</strong>.
            The winter and spring months offer pleasant weather and active
            wildlife sightings.
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
            <li>
              <strong>Jungle Safaris:</strong> Perfect for spotting tigers,
              elephants, and antelope species.
            </li>
            <li>
              <strong>Trekking:</strong> Trails lead through forested terrain
              and tribal villages.
            </li>
            <li>
              <strong>Waterfalls & Hills:</strong> Visit Barehipani and Joranda
              falls for dramatic views.
            </li>
          </ul>
          <p className="text-gray-600 mt-4 italic">
            The park remains closed during monsoon (mid-June to October) due to
            heavy rains and conservation reasons.
          </p>
        </div>

        {/* Nearby Attractions */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-4 text-green-700">
            Nearby Tourist Attractions
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-3 text-lg">
            <li>
              <strong>Joranda Falls:</strong> Another massive and scenic
              waterfall within the reserve.
            </li>
            <li>
              <strong>Ramtirtha Crocodile Breeding Center:</strong> Located near
              Jashipur for a close look at gharials.
            </li>
            <li>
              <strong>Baripada:</strong> The cultural gateway to Simlipal, known
              for tribal crafts and Odia heritage.
            </li>
            <li>
              <strong>Khiching Temple:</strong> A historical site with ancient
              sculptures and spiritual significance.
            </li>
            <li>
              <strong>Deokund:</strong> A scenic picnic spot with a waterfall
              and religious site.
            </li>
          </ul>
        </div>

        {/* Conclusion */}
        <div className="mt-16 border-t pt-6">
          <p className="text-xl text-gray-800">
            Simlipal is more than a tiger reserve — it’s a realm of
            biodiversity, serenity, and adventure. Whether you’re cruising
            through its forest roads or admiring tribal culture, every moment
            here reconnects you with nature’s raw essence.
          </p>
        </div>
      </section>
    </div>
  );
}
