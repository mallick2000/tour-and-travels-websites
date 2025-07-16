"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Clock,
  DollarSign,
  Eye,
  EyeOff,
  IndianRupee,
  ShieldCheck,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LoginModal({ isOpen, onClose }) {
  const [passwordType, setPasswordType] = useState("password");

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setPasswordType((prev) => (prev === "password" ? "text" : "password"));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative bg-white rounded-lg shadow-lg w-full max-w-4xl h-[450px] overflow-hidden flex">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 text-gray-600 hover:text-gray-900 cursor-pointer "
        >
          <X size={24} />
        </button>

        {/* Left Panel */}
        <div className="md:w-1/2 bg-cover bg-center relative hidden md:block ">
          <Image
            src="/sec1.jpg"
            alt="Login"
            fill
            className="object-cover rounded-lg brightness-30"
          />
          <div className="absolute inset-0  flex flex-col justify-center p-10 text-white space-y-4">
            <h2 className="text-2xl font-bold">Sign up/Login now to</h2>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <Clock className="w-6 h-6 text-blue-400" />
                <span>Book quick. Ride safe.</span>
              </li>
              <li className="flex items-center space-x-2">
                <ShieldCheck className="w-6 h-6 text-blue-400" />
                <span>Save time and money on your next trip.</span>
              </li>
              <li className="flex items-center space-x-2">
                <IndianRupee className="w-6 h-6 text-blue-400" />
                <span>Affordable travel. Exclusive member deals.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Panel - Login */}
        <div className="w-full md:w-1/2 p-8">
          <h1 className="flex justify-center text-2xl font-bold mb-6">
            Quick Cab Login
          </h1>

          <Label htmlFor="email" className="text-sm text-gray-600">
            Gmail
          </Label>
          <div className="flex items-center rounded-md py-2 mb-4">
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="relative mb-2">
            <Label htmlFor="password" className="text-sm text-gray-600">
              Password
            </Label>
            <Input
              type={passwordType}
              id="password"
              name="password"
              placeholder="Enter your password"
              className="mt-1 block w-full px-4 py-2 pr-10 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-[32px] text-gray-600"
              aria-label="Toggle password visibility"
            >
              {passwordType === "password" ? (
                <Eye size={20} />
              ) : (
                <EyeOff size={20} />
              )}
            </button>
          </div>
          <Link href="/resetPassword">
            <p className="text-sm text-blue-500 hover:underline cursor-pointer flex  justify-end mb-2">
              Forgot Password
            </p>
          </Link>

          <Button type="submit" variant="gradient" className="w-full">
            CONTINUE
          </Button>

          <p className="text-xs text-gray-500 text-center mt-6">
            Don't have an account?{" "}
            <Link href="/register" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </p>

          <p className="text-xs text-gray-500 text-center mt-6">
            By proceeding, you agree to Quick Cab's{" "}
            <Link href="#" className="text-blue-500 hover:underline">
              Privacy Policy
            </Link>
            ,{" "}
            <Link href="#" className="text-blue-500 hover:underline">
              User Agreement
            </Link>{" "}
            &{" "}
            <Link href="#" className="text-blue-500 hover:underline">
              T&Cs
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
