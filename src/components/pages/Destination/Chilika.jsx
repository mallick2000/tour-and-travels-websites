import Image from "next/image";

export default function ChilikaBlog() {
  return (
    <div className="bg-white text-slate-800 font-sans leading-relaxed">
      {/* Hero Section */}
      <div className="relative w-full h-[600px]">
        <Image
          src="/Chilika/Chilika.jpg"
          alt="Chilika Lake Hero"
          fill
          className=" object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent flex items-center justify-center">
          <h1 className="text-white text-5xl md:text-7xl font-extrabold text-center drop-shadow-xl">
            Explore the Beauty of Chilika Lake
          </h1>
        </div>
      </div>

      {/* Introduction */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold mb-6 border-b-4 border-blue-400 inline-block">
          Step into the Serenity of Chilika
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          Nestled along the eastern coast of India in Odisha,{" "}
          <strong>Chilika Lake</strong> is Asia&apos;s largest brackish water
          lagoon. Spanning over 1,100 square kilometers, it's a vibrant
          ecosystem teeming with marine life, migratory birds, and tranquil
          island temples.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Whether you're an avid birdwatcher, an explorer of culture, or a
          seeker of peace, Chilika offers a soul-refreshing escape wrapped in
          nature&apos;s grandeur.
        </p>

        {/* Boats Image */}
        <div className="rounded-xl overflow-hidden shadow-xl mb-12">
          <Image
            src="/Chilika/img1.jpg"
            alt="Boats on Chilika Lake"
            width={1200}
            height={800}
            className="w-full h-[500px] object-cover"
          />
        </div>

        {/* Kalijai Island Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          <Image
            src="/Chilika/img6.jpg"
            alt="Kalijai Temple Island"
            width={600}
            height={400}
            className="rounded-2xl shadow-md"
          />
          <div>
            <h3 className="text-2xl font-semibold mb-2 text-blue-800">
              Kalijai Island – Sacred Serenity
            </h3>
            <p>
              Set on a peaceful island in the lagoon, Kalijai Temple is devoted
              to the Goddess Kalijai. A mix of myth and faith draws pilgrims and
              wanderers alike to this spiritual site surrounded by shimmering
              waters.
            </p>
          </div>
        </div>

        {/* Floating Temple Image */}
        <div className="mb-12">
          <Image
            src="/Chilika/img2.jpg"
            alt="Floating Temple in Chilika"
            width={1200}
            height={800}
            className="rounded-xl shadow-lg"
          />
          <p className="text-sm mt-2 text-gray-500 italic">
            A peaceful stilt temple rises amidst the calm waters of the lake.
          </p>
        </div>

        {/* Bird Watching Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
          <div>
            <h3 className="text-2xl font-semibold mb-2 text-blue-800">
              Birdwatcher's Paradise
            </h3>
            <p>
              From November to February, Chilika becomes a winter haven for
              migratory birds arriving from Siberia, Central Asia, and the
              Himalayas. Nalabana Island is especially known for spotting
              flamingos, pelicans, herons, and more.
            </p>
          </div>
          <Image
            src="/Chilika/img3.jpg"
            alt="Birds in Chilika"
            width={900}
            height={900}
            className="rounded-2xl "
          />
        </div>

        {/* Seagulls & Boats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Image
            src="/Chilika/img4.jpg"
            alt="Flying Seagulls"
            width={900}
            height={900}
            className="rounded-2xl md:h-[358px] "
          />
          <Image
            src="/Chilika/img5.jpg"
            alt="Boat Journey"
            width={900}
            height={900}
            className="rounded-2xl "
          />
        </div>
        {/* Best Season to Visit */}
        <div className="bg-gray-50 p-6 rounded-xl  mb-12">
          <h3 className="text-2xl font-semibold text-blue-800 mb-2">
            Best Time to Visit Chilika Lake
          </h3>
          <p className="text-gray-700 text-lg">
            The ideal time to visit Chilika Lake is during the
            <strong>"Winter Months, from November to February". </strong> This
            season offers pleasant weather and is perfect for:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
            <li>
              <strong>Birdwatching:</strong> Thousands of migratory birds
              arrive, especially at Nalabana Island.
            </li>
            <li>
              <strong>Boat Rides:</strong> Calm waters and clear skies make for
              beautiful lake excursions.
            </li>
            <li>
              <strong>Dolphin Spotting:</strong> Satapada is more active with
              Irrawaddy dolphin sightings.
            </li>
          </ul>

          <p className="text-gray-600 mt-4 italic">
            Avoid visiting during the monsoon (June to September) as heavy
            rainfall can disrupt travel plans and boat services.
          </p>
        </div>

        {/* Nearby Attractions */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-4 text-blue-700">
            Nearby Tourist Attractions
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-3 text-lg">
            <li>
              <strong>Satapada:</strong> A popular dolphin-watching spot where
              you can often spot Irrawaddy dolphins.
            </li>
            <li>
              <strong>Nalabana Bird Sanctuary:</strong> A protected island known
              for thousands of migratory birds.
            </li>
            <li>
              <strong>Rambha:</strong> A quieter area of the lake with scenic
              boat rides and lush green surroundings.
            </li>
            <li>
              <strong>Barkul:</strong> A hub for water sports and OTDC-run eco
              resorts.
            </li>
            <li>
              <strong>Berhampur:</strong> A bustling city known for its silk,
              seafood, and proximity to Gopalpur-on-Sea.
            </li>
          </ul>
        </div>

        {/* Conclusion */}
        <div className="mt-16 border-t pt-6">
          <p className="text-xl text-gray-800">
            Chilika Lake isn&apos;t just a destination — it&apos;s a journey
            into India&apos;s untouched natural wonder. Whether you float
            through its shimmering waters or walk along its spiritual shores, it
            promises memories that last a lifetime.
          </p>
        </div>
      </section>
    </div>
  );
}
