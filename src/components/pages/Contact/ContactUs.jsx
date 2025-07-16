import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Globe, Mails, MapPin, Smartphone } from "lucide-react";
import Link from "next/link";
import React from "react";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-blue-100 p-6 md:p-12">
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2  bg-sky-200 p-6 rounded-md">
        {/* Left Side - Contact Form */}
        <div className="bg-white p-8 shadow rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Get in Touch
          </h2>
          <form className="space-y-5">
            <Input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded"
            />
            <Input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded"
            />
            <Textarea
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 border border-gray-300 rounded"
            ></Textarea>
            <Button
              type="submit"
              className="bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700"
            >
              Send Message
            </Button>
          </form>
          <p className="mt-6 text-gray-600 font-light w-full">
            Have questions or need help? Reach out to us anytime—we’re here to
            assist you!
          </p>
        </div>

        {/* Right Side - Info */}
        <div className="space-y-6 text-gray-800">
          <div>
            <h3 className="text-xl font-semibold flex gap-2">
              <MapPin /> Location
            </h3>
            <p>
              First Floor, Plot, 834/2820, Road No. 14, Jagannath Nagar
              <br />
              Rasulgarh, Bhubaneswar, Odisha 751025
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold flex gap-2 ">
              <Smartphone /> Mobile
            </h3>
            <p>+91-06743525280</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold flex gap-2">
              <Mails /> Emails
            </h3>
            <ul className="space-y-1">
              <li>
                <strong>General:</strong> contact@example.com
              </li>
              <li>
                <strong>Support:</strong> support@example.com
              </li>
              <li>
                <strong>Partnership:</strong> partners@example.com
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold flex gap-2">
              <Globe /> Social Profiles
            </h3>
            <div className="flex space-x-4 mt-2">
              <Link href="#" className="text-blue-600 hover:underline">
                Twitter
              </Link>
              <Link href="#" className="text-blue-800 hover:underline">
                LinkedIn
              </Link>
              <Link href="#" className="text-pink-500 hover:underline">
                Instagram
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold">🏷️ Hashtags</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="bg-gray-200 text-sm px-3 py-1 rounded">
                #ContactUs
              </span>
              <span className="bg-gray-200 text-sm px-3 py-1 rounded">
                #Support
              </span>
              <span className="bg-gray-200 text-sm px-3 py-1 rounded">
                #Partnership
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
