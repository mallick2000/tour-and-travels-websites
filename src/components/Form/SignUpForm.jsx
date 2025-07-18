"use client";

import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";

const SignUpForm = ({ setMode }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full ">
      <h1 className="text-2xl font-bold text-center text-gray-800 ">
        Create an Account
      </h1>

      <form className="space-y-4" onSubmit={handleSubmit} noValidate>
        <div>
          <Label htmlFor="name" className="text-sm text-gray-600">
            Full Name
          </Label>
          <Input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Enter your full name"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
          />
        </div>

        <div>
          <Label htmlFor="email" className="text-sm text-gray-600">
            Email
          </Label>
          <Input
            type="email"
            id="email"
            name="email"
            required
            placeholder="you@example.com"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
          />
        </div>

        <div>
          <Label htmlFor="phone" className="text-sm text-gray-600">
            Phone Number
          </Label>
          <Input
            type="tel"
            id="phone"
            name="phone"
            required
            placeholder="Enter your phone number"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
          />
        </div>

        <div>
          <Label htmlFor="password" className="text-sm text-gray-600">
            Password
          </Label>
          <Input
            type="password"
            id="password"
            name="password"
            required
            placeholder="••••••••"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
          />
        </div>

        <div>
          <Label htmlFor="confirmPassword" className="text-sm text-gray-600">
            Confirm Password
          </Label>
          <Input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            required
            placeholder="••••••••"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
          />
        </div>

        <Button type="submit" variant="gradient" className="w-full">
          Sign Up
        </Button>
      </form>

      <p className="text-sm text-center mt-6">
        Already have an account?{" "}
        <span
          onClick={() => setMode("login")}
          className="text-blue-500 hover:underline cursor-pointer"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setMode("login");
            }
          }}
        >
          Login
        </span>
      </p>
    </div>
  );
};

export default SignUpForm;
