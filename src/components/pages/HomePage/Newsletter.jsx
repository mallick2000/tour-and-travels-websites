import Image from "next/image";

export default function Newsletter() {
  return (
    <section className="relative h-40 flex items-center justify-center px-6 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/place/n3.jpg" // Replace with your actual image path
        alt="Newsletter Background"
        className="object-cover"
        fill
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0"></div>

      {/* Content */}
      <div className="relative  w-full flex justify-between space-y-4  px-14 rounded-md">
        <div className="text-white md:w-1/2">
          <h2 className="text-lg md:text-xl font-semibold">
            Subscribe Our Newsletter
          </h2>
          <p className="text-sm">
            Subscribe our newsletter to get offers and about new places to
            discover
          </p>
        </div>
        <form className="flex items-center w-[450px]">
          <input
            type="email"
            placeholder="Your Mail"
            className="flex-grow p-2 rounded-l-md focus:outline-none bg-white "
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-r-md font-semibold hover:bg-blue-500"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
