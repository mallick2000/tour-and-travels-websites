"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { IndianRupee } from "lucide-react";

const imageData = [
  {
    src: "/place/konark.jpg",
  },
  {
    src: "/place/puri.jpg",
  },
  {
    src: "/Bbsr/img2.jpg",
  },
];

export function TourPackage() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div className="md:px-24 mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Bhubaneswar-Puri-Konark Trip</h1>

      {/* Carousel Section */}
      <div className="flex justify-between items-start gap-10">
        <div className="w-2/3">
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {imageData.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card className="w-full">
                      <CardContent className="">
                        <Image
                          src={image.src}
                          alt={image.src}
                          width={1200}
                          height={500}
                          className="w-full object-cover rounded-lg"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="w-1/3 bg-gray-100 p-6 rounded-lg">
          <p className="text-lg font-semibold">Starting from</p>
          <div className="text-3xl font-bold text-red-600 flex">
            <IndianRupee className="mt-2" />
            3000/-
          </div>
          <div>
            <p className="text-xl text-gray-700">3 Nights / 2 Days</p>
            <Button variant="gradient" className="mt-4 w-full">
              Enquire Now
            </Button>
          </div>
          <div className="mt-6">
            <p className="font-medium">Need Help?</p>
            <p className="text-sm text-gray-600">Call us: 9348628756</p>
            <p className="text-sm text-gray-600">
              Mail us: example@example.com
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h2 className="text-2xl font-bold">Package Overview</h2>
        <p className="text-lg text-gray-700 mt-4">
          Odisha (formerly Orissa), an eastern Indian state on the Bay of
          Bengal, is known for its tribal cultures and its many ancient Hindu
          temples. The capital, Bhubaneswar, is home to hundreds of temples,
          notably the intricately-carved Mukteshvara. The Lingaraj Temple
          complex, dating to the 11th century, is set around sacred Bindusagar
          Lake. The Odisha State Museum is focused on the area’s history and
          environment.
        </p>
      </div>

      <div className="space-y-6 mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Itinerary Breakdown:
        </h2>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-indigo-600">
            1. Bhubaneswar to Puri
          </h3>
          <p className="text-lg text-gray-700">
            <strong>Duration:</strong> Approx. 1.5 hours (60-70 km)
          </p>
          <p className="text-lg text-gray-700">
            Leave Bhubaneswar at 8:30 AM for Puri. The drive is smooth with
            scenic views of Odisha's countryside.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-indigo-600">
            2. Puri Jagannath Temple
          </h3>
          <p className="text-lg text-gray-700">
            <strong>Duration:</strong> 1.5 hours (9:30 AM - 11:00 AM)
          </p>
          <p className="text-lg text-gray-700">
            Visit the Jagannath Temple, one of the Char Dham pilgrimage sites.
            Explore the grand architecture and soak in the atmosphere.
          </p>
          <p className="text-lg text-gray-700">
            <strong>Tip:</strong> Be mindful of the dress code (traditional
            attire is preferred).
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-indigo-600">
            3. Puri Beach
          </h3>
          <p className="text-lg text-gray-700">
            <strong>Duration:</strong> 1 hour (11:00 AM - 12:00 PM)
          </p>
          <p className="text-lg text-gray-700">
            Relax with a stroll along the coastline and enjoy local beach
            snacks. You may also try a short boat ride.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-indigo-600">
            4. Lunch Break
          </h3>
          <p className="text-lg text-gray-700">
            <strong>Duration:</strong> 1 hour (12:00 PM - 1:00 PM)
          </p>
          <p className="text-lg text-gray-700">
            Head to a local restaurant in Puri for Odia cuisine.
          </p>
          <ul className="list-disc pl-6 text-lg text-gray-700">
            <li>Chung Wah (Chinese and Odia fusion)</li>
            <li>The Lotus Resort (seafood & continental mix)</li>
            <li>Bhojohori Manna (traditional Odia meals)</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-indigo-600">
            5. Puri to Konark
          </h3>
          <p className="text-lg text-gray-700">
            <strong>Duration:</strong> Approx. 1 hour (35 km)
          </p>
          <p className="text-lg text-gray-700">
            Drive from Puri to Konark, passing through picturesque rural
            landscapes.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-indigo-600">
            6. Konark Sun Temple
          </h3>
          <p className="text-lg text-gray-700">
            <strong>Duration:</strong> 1.5 hours (2:30 PM - 4:00 PM)
          </p>
          <p className="text-lg text-gray-700">
            Explore the famous Konark Sun Temple, known for its unique
            chariot-shaped architecture and intricate carvings.
          </p>
          <p className="text-lg text-gray-700">
            <strong>Tip:</strong> Take your time to photograph the temple's
            wheel-shaped carvings.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-indigo-600">
            7. Chandrabhaga Beach
          </h3>
          <p className="text-lg text-gray-700">
            <strong>Duration:</strong> 45 minutes (4:00 PM - 4:45 PM)
          </p>
          <p className="text-lg text-gray-700">
            A peaceful, serene beach close to the Sun Temple. Ideal for
            photography or just relaxing by the water.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-indigo-600">
            8. Konark Archaeological Museum (Optional)
          </h3>
          <p className="text-lg text-gray-700">
            <strong>Duration:</strong> 30 minutes (4:45 PM - 5:15 PM)
          </p>
          <p className="text-lg text-gray-700">
            Displays sculptures and artifacts from the Sun Temple excavation. A
            good spot for learning more about the temple's history.
          </p>
        </div>

        {/* 9. Return to Bhubaneswar */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-indigo-600">
            9. Return to Bhubaneswar
          </h3>
          <p className="text-lg text-gray-700">
            <strong>Duration:</strong> Approx. 1.5 hours (5:30 PM - 7:00 PM)
          </p>
          <p className="text-lg text-gray-700">
            Drive back to Bhubaneswar, expected arrival around 7:00 PM. Feel
            free to stop at scenic spots or shops along the way.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TourPackage;
