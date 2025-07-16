import Link from "next/link";
import React from "react";
import {
  Users,
  ShieldCheck,
  Globe,
  Leaf,
  CheckCheck,
  Mail,
} from "lucide-react";
const AboutUs = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-16 tracking-wide">
        <span className="font-light">About</span>
        <span className="font-bold text-blue-500"> Quick Cab</span>
      </h1>

      {/* Intro */}
      <div className="mb-16 text-center">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Who We Are
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Quick Cab is redefining urban transportation with technology, trust,
          and a people-first approach. Whether you're commuting to work or
          heading out on the town, we make every ride safe, reliable, and
          comfortable.
        </p>
      </div>

      {/* Mission, Vision, Values */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">
            Our Mission
          </h3>
          <p className="text-gray-600">
            To simplify and elevate everyday commuting with smart, affordable,
            and eco-conscious rides for all.
          </p>
        </div>

        <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">
            Our Vision
          </h3>
          <p className="text-gray-600">
            To become the world’s most trusted ride-hailing platform, shaping
            the future of mobility with integrity and innovation.
          </p>
        </div>

        <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-blue-600 mb-4">
            Core Values
          </h3>
          <ul className="text-gray-600 space-y-2">
            <li className="flex items-start gap-2">
              <CheckCheck className="w-5 h-5 text-green-500 mt-1" />
              Safety First
            </li>
            <li className="flex items-start gap-2">
              <CheckCheck className="w-5 h-5 text-green-500 mt-1" />
              Customer Focus
            </li>
            <li className="flex items-start gap-2">
              <CheckCheck className="w-5 h-5 text-green-500 mt-1" />
              Innovation
            </li>
            <li className="flex items-start gap-2">
              <CheckCheck className="w-5 h-5 text-green-500 mt-1" />
              Sustainability
            </li>
          </ul>
        </div>
      </div>

      {/* Founder Message */}
      <div className="mb-16 bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-inner text-center">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Founder&apos;s Message
        </h2>
        <p className="text-gray-600 italic max-w-3xl mx-auto">
          "Quick Cab started with one mission — make everyday travel better.
          We’ve built this company on trust, innovation, and customer
          satisfaction. Our journey has only begun."
          <br />— <span className="font-medium">Skentino</span>, Founder & CEO
        </p>
      </div>

      {/* Team Picture */}
      <div className="mb-16 text-center">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Meet Our Team
        </h2>
        <img
          src="/Chilika/team.jpg"
          alt="Quick Cab Team"
          className="rounded-lg shadow-lg mx-auto w-full max-w-3xl transform hover:scale-105 transition duration-300"
        />
      </div>

      {/* Achievements */}
      <div className="mb-16 text-center">
        <h2 className="text-2xl font-semibold text-gray-700 mb-8">
          Milestones
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Users className="w-10 h-10 text-blue-600 mx-auto mb-2" />
            <h3 className="text-lg font-semibold">500K+ Happy Riders</h3>
          </div>
          <div>
            <ShieldCheck className="w-10 h-10 text-green-500 mx-auto mb-2" />
            <h3 className="text-lg font-semibold">99.9% Ride Safety</h3>
          </div>
          <div>
            <Globe className="w-10 h-10 text-blue-400 mx-auto mb-2" />
            <h3 className="text-lg font-semibold">20+ Cities Covered</h3>
          </div>
          <div>
            <Leaf className="w-10 h-10 text-green-400 mx-auto mb-2" />
            <h3 className="text-lg font-semibold">Eco Fleet Launched</h3>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="text-center bg-gray-100 p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Get in Touch
        </h2>
        <p className="text-gray-600 mb-2 flex justify-center items-center gap-2">
          <Mail className="text-blue-600" />
          <Link href="/" className="text-blue-600 hover:underline">
            contact@quickcab.com
          </Link>
        </p>
        <p className="text-gray-600 flex justify-center items-center gap-2">
          <Globe className="text-blue-600" />
          <Link href="/" className="text-blue-600 hover:underline">
            quickcab.com
          </Link>
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
