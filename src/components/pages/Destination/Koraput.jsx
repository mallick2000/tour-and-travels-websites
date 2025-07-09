import Image from "next/image";

export default function Koraput() {
  return (
    <div className="bg-white text-slate-800 font-sans leading-relaxed">
      {/* Hero Section */}
      <div className="relative w-full h-[600px]">
        <Image
          src="/koraput/img1.jpg"
          alt="Koraput Hills"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent flex items-center justify-center">
          <h1 className="text-white text-5xl md:text-7xl font-extrabold text-center">
            Discover the Serenity of Koraput
          </h1>
        </div>
      </div>

      {/* Introduction */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold mb-6 border-b-4 border-green-500 inline-block">
          Welcome to Koraput, Odisha
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          Nestled in the Eastern Ghats of southern Odisha,{" "}
          <strong>Koraput</strong> is a land of breathtaking valleys, dense
          forests, terraced fields, and vibrant tribal heritage. Known for its
          natural beauty and cool climate, the region is often called the
          "Switzerland of Odisha."
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Whether you're an explorer, nature lover, or cultural enthusiast,
          Koraput offers unforgettable experiences through its scenic landscapes
          and indigenous traditions.
        </p>

        {/* Scenic Landscape Image */}
        <div className="rounded-xl overflow-hidden shadow-xl mb-12">
          <Image
            src="/koraput/img2.jpg"
            alt="Koraput Valley"
            width={1200}
            height={800}
            className="w-full h-[500px] object-cover"
          />
        </div>

        {/* Tribal Culture Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          <Image
            src="/koraput/img3.jpg"
            alt="Tribal women in traditional attire"
            width={600}
            height={400}
            className="rounded-2xl shadow-md"
          />
          <div>
            <h3 className="text-2xl font-semibold mb-2 text-green-700">
              Vibrant Tribal Heritage
            </h3>
            <p>
              Koraput is home to various tribal communities like the Bonda,
              Paraja, and Kondh tribes. Their colorful festivals, traditional
              crafts, and sustainable lifestyle offer a unique window into
              India's indigenous culture.
            </p>
          </div>
        </div>

        {/* Deomali Hills */}
        <div className="mb-12">
          <Image
            src="/place/Deomali.jpg"
            alt="Deomali Hills"
            width={1200}
            height={800}
            className="rounded-xl shadow-lg"
          />
          <p className="text-sm mt-2 text-gray-500 italic">
            Deomali — the highest peak in Odisha, offering panoramic views and
            ideal for trekking.
          </p>
        </div>

        {/* Coffee Plantations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
          <div>
            <h3 className="text-2xl font-semibold mb-2 text-green-700">
              Coffee Trails of Koraput
            </h3>
            <p>
              The cool climate and red laterite soil make Koraput a rising hub
              for organic coffee cultivation. Visit coffee plantations run by
              tribal cooperatives and enjoy freshly brewed coffee amid the
              hills.
            </p>
          </div>
          <Image
            src="/koraput/img4.jpg"
            alt="Koraput coffee plantation"
            width={900}
            height={900}
            className="rounded-2xl"
          />
        </div>

        {/* Nature Views */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Image
            src="/Koraput/img6.jpg"
            alt="Terraced fields in Koraput"
            width={900}
            height={900}
            className="rounded-2xl md:h-[305px]"
          />
          <Image
            src="/koraput/img6.jpg"
            alt="Tribal village landscape"
            width={900}
            height={900}
            className="rounded-2xl"
          />
        </div>

        {/* Best Time to Visit */}
        <div className="bg-gray-50 p-6 rounded-xl mb-12">
          <h3 className="text-2xl font-semibold text-green-700 mb-2">
            Best Time to Visit Koraput
          </h3>
          <p className="text-gray-700 text-lg">
            The ideal time to visit is from <strong>October to March</strong>,
            when the weather is cool and landscapes are lush.
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
            <li>
              <strong>Nature Walks:</strong> Stroll through rice terraces,
              hills, and streams.
            </li>
            <li>
              <strong>Tribal Markets:</strong> Explore weekly haats for local
              crafts and food.
            </li>
            <li>
              <strong>Festivals:</strong> Witness colorful events like Chaitra
              Parab and Dussehra.
            </li>
          </ul>
          <p className="text-gray-600 mt-4 italic">
            Monsoon adds charm but may limit access to interior villages.
          </p>
        </div>

        {/* Nearby Attractions */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-4 text-green-700">
            Must-Visit Places Around Koraput
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-3 text-lg">
            <li>
              <strong>Jagannath Temple, Koraput:</strong> A modern temple where
              everyone, regardless of religion or caste, is welcome.
            </li>
            <li>
              <strong>Duduma Waterfall:</strong> A spectacular 157-meter
              waterfall on the Machkund river.
            </li>
            <li>
              <strong>Tribal Museum:</strong> Offers insights into tribal life,
              attire, tools, and customs.
            </li>
            <li>
              <strong>Gupteswar Cave:</strong> A sacred Shiva shrine located
              within a limestone cave.
            </li>
            <li>
              <strong>Sabara Srikhetra:</strong> A spiritual and cultural center
              representing tribal beliefs.
            </li>
          </ul>
        </div>

        {/* Conclusion */}
        <div className="mt-16 border-t pt-6">
          <p className="text-xl text-gray-800">
            Koraput is a harmonious blend of unspoiled nature, vibrant
            traditions, and soulful simplicity. Whether you're sipping coffee by
            the hills or dancing with locals during a festival, Koraput leaves
            you enriched and inspired.
          </p>
        </div>
      </section>
    </div>
  );
}
