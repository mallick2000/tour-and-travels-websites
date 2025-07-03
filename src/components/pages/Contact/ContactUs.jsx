import React from "react";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { Mail, Phone, User } from "lucide-react";
import Image from "next/image";

const ContactUs = () => {
  return (
    <div className=" bg-gradient-to-r from-sky-200 to-blue-200 flex items-center justify-center px-4 py-16">
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-lg overflow-hidden grid md:grid-cols-2">
        {/* Image Section */}
        <div className="  items-center justify-center shadow-xl bg-gradient-to-r from-sky-300 to-blue-400">
          <Image
            src="/contact.png"
            alt="Contact "
            width={400}
            height={400}
            className="object-cover rounded-full"
          />
          <p className="w-full px-6 text-md font-light text-slate-900">
            We are here to help! Whether you are looking to book a cab, inquire
            about our services, or share feedback, our team is just a message or
            call away. Available 24/7, we are committed to making your travel
            smooth, safe, and hassle-free. Don&apos;t hesitate to reach out — we
            had love to hear from you...!
          </p>
        </div>

        {/* Form Section */}
        <div className="p-8 md:p-12">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-2 text-center md:text-left">
            Get in Touch
          </h2>
          <p className="text-sm text-gray-500 mb-8 text-center md:text-left">
            We’d love to hear from you. Please fill out the form.
          </p>

          <form className="space-y-6">
            {/* Name */}
            <div className="relative">
              <Label htmlFor="name" className="sr-only">
                Full Name
              </Label>
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <User className="w-5 h-5 text-gray-400" />
              </div>
              <Input
                type="text"
                id="name"
                placeholder="Full Name"
                required
                className="pl-10 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <Label htmlFor="email" className="sr-only">
                Email
              </Label>
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Mail className="w-5 h-5 text-gray-400" />
              </div>
              <Input
                type="email"
                id="email"
                placeholder="Email Address"
                required
                className="pl-10 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Phone */}
            <div className="relative">
              <Label htmlFor="phone" className="sr-only">
                Phone
              </Label>
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Phone className="w-5 h-5 text-gray-400" />
              </div>
              <Input
                type="tel"
                id="phone"
                placeholder="Phone Number"
                required
                className="pl-10 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Message */}
            <div>
              <Label htmlFor="message" className="sr-only">
                Message
              </Label>
              <textarea
                id="message"
                placeholder="Your Message"
                rows={4}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition duration-200"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="mt-8 text-center text-sm text-gray-600 space-y-2">
            <p>Or contact us directly:</p>
            <div className="flex justify-center items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+91-9348628756</span>
            </div>
            <div className="flex justify-center items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>support@quickcab.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
