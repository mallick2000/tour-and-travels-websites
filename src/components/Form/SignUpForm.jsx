import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";

const SignUpForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 to-indigo-600">
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Create an Account
        </h2>
        <form className="space-y-4">
          <div>
            <Label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </Label>
            <Input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Enter Your Name"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <Label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </Label>
            <Input
              type="email"
              id="email"
              name="email"
              required
              placeholder="you@example.com"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <Label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Mobile Number
            </Label>
            <Input
              type="text"
              id="phone"
              name="phone"
              required
              placeholder="Enter your Number"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <Label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </Label>
            <Input
              type="text"
              id="username"
              name="username"
              required
              placeholder="Your Username"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <Label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </Label>
            <Input
              type="password"
              id="password"
              name="password"
              required
              placeholder="••••••••"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <Label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </Label>
            <Input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              required
              placeholder="••••••••"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <Button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition"
          >
            Sign Up
          </Button>
        </form>

        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <Link href="/profile" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
