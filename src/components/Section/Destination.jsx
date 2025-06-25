"use client";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

const destinations = [
  {
    name: "PURI",
    image: "/place/puri.jpg",
    description:
      " The Shri Jagannath Temple, a revered Hindu temple and one of the four Dhamas in India. It is also known for the Ratha Yatra.",
  },
  {
    name: "KONARK",
    image: "/place/konark.jpg",
    description:
      " Konark Sun Temple, also known as the Surya Deula or the Black Pagoda.",
  },
  {
    name: "CUTTACK",
    image: "/place/ctcjpg.jpg",
    description:
      "Cuttack is famous for Durga puja ,The Barabati Fort,Dahibara & earning it the title of Silver City. ",
  },
  {
    name: "KORAPUT",
    image: "/place/Deomali.jpg",
    description:
      "Deomali is renowned as the highest mountain peak in Odisha, standing at 1,672 meters above sea level.",
  },
  {
    name: "LINGRAJ TEMPLE",
    image: "/place/lingraj.jpg",
    description:
      "It is renowned for its magnificent Kalinga architecture and spiritual significance.",
  },
  {
    name: "BALESORE",
    image: "/place/emami.jpg",
    description:
      "The Emami Jagannath Temple in Balasore is a replica of the famous Puri Jagannath Temple, built by the Emami Group.",
  },
  {
    name: "DARINGBADI",
    image: "/place/daringbadi.jpg",
    description:
      "Dotted with pine forests & waterfalls, the hill station of Phulbani covered by Valleys,coffee & pepper gardens.",
  },
  {
    name: "KHANDAGIRI",
    image: "/place/Khandagari.jpg",
    description:
      "Khandagiri, near Bhubaneswar is renowned for its ancient cave structures & known as Hathi Gumpha",
  },
  {
    name: "DHAULIGIRI",
    image: "/place/dhauli.jpg",
    description:
      "The island is famous as a centre of religious worship due to the temple of Goddess Kalijai.",
  },
  {
    name: "KAPILASH",
    image: "/place/kapilash.jpg",
    description:
      "The island is famous as a centre of religious worship due to the temple of Goddess Kalijai.",
  },
  {
    name: "SARALA TEMPLE",
    image: "/place/sarala_temple.jpg",
    description:
      "Showcases Odisha's long-standing reverence for Goddess Sarala, a manifestation of Goddess Durga.",
  },
  {
    name: "CHILIKA",
    image: "/place/chilika.jpg",
    description:
      "The island is famous as a centre of religious worship due to the temple of Goddess Kalijai.",
  },
  {
    name: "BHITARKANIKA",
    image: "/place/kdp.jpg",
    description:
      "It is the breeding place for the endangered salt water crocodiles which are the prime attractions of the sanctuary.",
  },
  {
    name: "SIMILIPAL",
    image: "/place/tiger.jpg",
    description:
      "Similipal is famous as a wildlife haven, particularly for its large tiger population, diverse biodiversity, and role as a biosphere reserve.",
  },
  {
    name: "TARINI TEMPLE",
    image: "/place/tarini.jpg",
    description:
      "The Maa Tarini Temple in Ghatgaon is a famous Hindu Goddess temple dedicated to Maa Tarini. ",
  },
];

const chunkArray = (array, size) =>
  Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
    array.slice(i * size, i * size + size)
  );
export default function Destinations() {
  const groupedDestinations = chunkArray(destinations, 3);

  return (
    <div className="bg-blue-50/25 px-4 py-12 md:px-8">
      <h2 className="flex justify-center text-4xl font-bold">EXPLORE ODISHA</h2>
      <p className="mx-auto mb-6 w-full max-w-7xl text-center text-lg">
        Odisha, known as the City of Temples offers a diverse range of
        attractions including ancient temples, beaches, wildlife sanctuaries,
        and tribal culture.
      </p>

      <Carousel
        className="mx-auto w-full max-w-7xl"
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
      >
        <CarouselContent>
          {groupedDestinations.map((group, index) => (
            <CarouselItem key={index}>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {group.map((dest, index) => (
                  <Card
                    key={index}
                    className="hover: h-[500px] translate-y-0 transform overflow-hidden rounded-xl bg-white shadow-md transition duration-300 ease-in-out hover:-translate-y-1 hover:border hover:shadow-xl"
                  >
                    <Image
                      src={dest.image}
                      alt={dest.name}
                      width={400}
                      height={400}
                      className="h-80 w-full object-cover"
                    />
                    <CardContent className="relative p-4 text-center">
                      <h2 className="mb-2 text-4xl font-semibold">
                        {dest.name}
                      </h2>
                      <p className="mb-4 text-center text-lg font-normal">
                        {dest.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
