import Image from "next/image";
import { Quote } from "lucide-react";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonial = [
    {
      message:
        "It was wonderful experience with team specially our driver cum guide Mr Trinath Ji was very cooperative and humble.",
      name: "P Sahu",
      location: "Bhubaneswar",
    },
    {
      message:
        "It was wonderful experience with team specially our driver cum guide Mr Trinath Ji was very cooperative and humble.",
      name: "P Sahu",
      location: "Bhubaneswar",
    },
    {
      message:
        "It was wonderful experience with team specially our driver cum guide Mr Trinath Ji was very cooperative and humble.",
      name: "P Sahu",
      location: "Bhubaneswar",
    },
    {
      message:
        "It was wonderful experience with team specially our driver cum guide Mr Trinath Ji was very cooperative and humble.",
      name: "P Sahu",
      location: "Bhubaneswar",
    },
    {
      message:
        "It was wonderful experience with team specially our driver cum guide Mr Trinath Ji was very cooperative and humble.",
      name: "P Sahu",
      location: "Bhubaneswar",
    },
    {
      message:
        "It was wonderful experience with team specially our driver cum guide Mr Trinath Ji was very cooperative and humble.",
      name: "P Sahu",
      location: "Bhubaneswar",
    },
  ];
  return (
    <div className="max-h-screen bg-blue-50/25 py-10">
      <h2 className="text-center text-4xl font-bold">TESTIMONIALS</h2>
      <p className="mx-auto mb-6 w-full max-w-7xl text-center text-lg">
        Transforming dreams into reality, one happy client at a time.
      </p>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-3">
        {testimonial.map((testimonial, index) => (
          <div
            key={index}
            className="translate-y-0 transform overflow-hidden rounded-xl border bg-white p-6 shadow-md"
          >
            <div className="mb-4 flex gap-0.5">
              <Star
                size={24}
                color="#FFD700"
                fill="#FFD700"
                strokeWidth={1.5}
              />
              <Star
                size={24}
                color="#FFD700"
                fill="#FFD700"
                strokeWidth={1.5}
              />
              <Star
                size={24}
                color="#FFD700"
                fill="#FFD700"
                strokeWidth={1.5}
              />
              <Star
                size={24}
                color="#FFD700"
                fill="#FFD700"
                strokeWidth={1.5}
              />
              <Star
                size={24}
                color="#FFD700"
                fill="#FFD700"
                strokeWidth={1.5}
              />
            </div>
            <p className="mb-4 text-lg text-gray-700">{testimonial.message}</p>
            <hr class="mb-4 h-px border-0 bg-gray-200 dark:bg-gray-700"></hr>
            <div className="flex justify-between">
              <div className="flex space-x-4">
                <Image
                  src="/person.jpg"
                  width={50}
                  height={50}
                  alt="Picture of the author"
                  className="rounded-full border"
                />
                <div className="grid grid-cols-1">
                  <p className="font-lg text-gray-900">{testimonial.name}</p>
                  <div>
                    <p className="text-md text-gray-600">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <Quote size={48} color="#c7c7c6" strokeWidth={1.5} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
