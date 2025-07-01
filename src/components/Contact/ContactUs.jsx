import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Mail, Phone, User, MessageSquare } from "lucide-react";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center px-4 py-12">
      <div className="max-w-3xl w-full bg-white shadow-xl rounded-2xl p-10 space-y-8">
        <h2 className="text-4xl font-bold text-gray-800 text-center">
          Get in Touch
        </h2>
        <p className="text-center text-gray-500">We’d love to hear from you!</p>

        <form className="space-y-6">
          {/* Name */}
          <div className="relative">
            <Label htmlFor="name" className="sr-only">
              Full Name
            </Label>
            <User className="absolute left-3 top-2 text-gray-400" />
            <Input
              type="text"
              id="name"
              placeholder="Full Name"
              required
              className="pl-10 py-3 rounded-lg border-gray-300 focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <Label htmlFor="email" className="sr-only">
              Email
            </Label>
            <Mail className="absolute left-3 top-2 text-gray-400" />
            <Input
              type="email"
              id="email"
              placeholder="Email Address"
              required
              className="pl-10 py-3 rounded-lg border-gray-300 focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Phone */}
          <div className="relative">
            <Label htmlFor="phone" className="sr-only">
              Phone
            </Label>
            <Phone className="absolute left-3 top-2 text-gray-400" />
            <Input
              type="tel"
              id="phone"
              placeholder="Phone Number"
              required
              className="pl-10 py-3 rounded-lg border-gray-300 focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Message */}
          <div className="relative">
            <Label htmlFor="message" className="sr-only">
              Message
            </Label>
            <textarea
              id="message"
              placeholder="How can we help you?"
              rows={4}
              required
              className="w-full pl-4 pr-4 pt-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>

          {/* Submit */}
          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-indigo-700 transition-all duration-200"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Contact Info */}
        <div className="mt-10 text-center text-gray-600 space-y-2">
          <p className="text-sm">Or contact us directly:</p>
          <div className="flex justify-center items-center gap-2 text-sm">
            <Phone className="w-4 h-4" /> <span>+91-9348628756</span>
          </div>
          <div className="flex justify-center items-center gap-2 text-sm">
            <Mail className="w-4 h-4" /> <span>support@quickcab.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
