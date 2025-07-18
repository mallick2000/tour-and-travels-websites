import React from "react";
import LoginForm from "@/components/Form/LoginForm";
import Image from "next/image";
import { Clock, ShieldCheck, IndianRupee } from "lucide-react";

const Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* Left Panel */}
      <div className="md:w-1/2 bg-cover bg-center relative hidden md:block h-full">
        <Image
          src="/sec1.jpg"
          alt="Login"
          fill
          className="object-cover brightness-30"
        />
        <div className="absolute inset-0 flex flex-col justify-center p-10 text-white space-y-4">
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

      {/* Right Panel */}
      <LoginForm />
    </div>
  );
};

export default Page;
