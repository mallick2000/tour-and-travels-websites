"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { CalendarCheck2, Info, CarFront, User, CreditCard } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

export default function CabBookingCheckout() {
  const [selectedPayment, setSelectedPayment] = useState("full");
  const [showFareBreakup, setShowFareBreakup] = useState(true);

  const partPayAmount = 500;
  const fullPayAmount = 930;

  return (
    <section className="max-w-6xl mx-auto px-4 py-6 md:px-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column – Main Booking Section */}
        <div className="flex-1 space-y-4">
          <header className="text-center">
            <h1 className="text-2xl font-bold text-blue-700">
              Cab Booking Checkout
            </h1>
            <p className="text-sm text-gray-500">
              Review your trip and enter your details
            </p>
          </header>

          <div className="rounded-xl border p-6 bg-blue-50 shadow-sm space-y-2">
            <div className="flex items-center gap-2 text-blue-700 font-medium">
              <CalendarCheck2 className="w-5 h-5" />
              <span>Outstation One Way Trip</span>
            </div>
            <div className="text-sm text-gray-700">Bhubaneswar → Puri</div>
            <div className="text-sm text-gray-600">12 Jul, 10:00 AM</div>
          </div>

          <div className="rounded-xl border p-6 bg-white shadow-sm flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <div className="flex items-center gap-2 text-blue-600 font-semibold text-lg">
                <CarFront className="w-5 h-5" />
                <span>Suzuki, Swift</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">4 Seats • AC</p>
            </div>
            <Image
              src="/cars/swift.jpg"
              alt="Car"
              width={100}
              height={60}
              className="rounded-md object-cover"
            />
          </div>

          <div className="rounded-xl border p-6 bg-white shadow-sm">
            <div className="flex items-center justify-between mb-3 text-gray-700 font-medium">
              <span>Inclusions & Exclusions</span>
              <Link href="/" className="text-blue-600 hover:underline">
                View Policy
              </Link>
            </div>
            <ul className="list-disc pl-6 space-y-2 text-sm text-gray-600">
              <li>Toll, Parking, State Tax & Driver Allowance included</li>
              <li>Only One Pickup and Drop</li>
              <li>60 Kms included. ₹11/Km for extra distance</li>
              <li className="text-green-600 font-medium">
                Free cancellation up to 1 hour before ride
              </li>
            </ul>
          </div>

          <div className="rounded-xl border p-6 bg-white shadow-sm flex justify-between items-start">
            <div>
              <h4 className="font-medium text-gray-700">Cancellation Policy</h4>
              <p className="text-sm text-green-600">
                Free cancellation until 9:00 AM, Sat 12 Jul
              </p>
            </div>
            <Link
              href="/"
              className="text-blue-600 hover:underline font-medium"
            >
              View Cancellation Policy
            </Link>
          </div>

          <div className="rounded-xl border p-6 bg-white shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-gray-700 font-medium mb-1">
              <User className="w-5 h-5" />
              <span>Traveller Details</span>
            </div>

            <Input placeholder="Pickup Location" className="w-full" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input placeholder="Full Name" />
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              <Input type="tel" placeholder="Mobile Number" />
              <Input type="email" placeholder="Email ID" />
            </div>

            <Label className="flex items-center space-x-2 text-sm text-gray-600">
              <Checkbox />
              <span>Accept terms & conditions</span>
            </Label>
          </div>

          <p className="text-xs text-gray-600">
            By proceeding to book, I agree to Quick Cab&apos;s{" "}
            <Link
              href="/"
              className="text-blue-600 hover:underline font-medium"
            >
              Privacy Policy
            </Link>
            ,{" "}
            <Link
              href="/"
              className="text-blue-600 hover:underline font-medium"
            >
              Terms of Service
            </Link>{" "}
            &{" "}
            <Link
              href="/"
              className="text-blue-600 hover:underline font-medium"
            >
              Cancellation Rules
            </Link>
          </p>
        </div>

        {/* Right Column – Payment Section */}
        <aside className="w-full lg:w-1/3 space-y-4 mt-16">
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <div className=" rounded-lg bg-gray-50 p-4 text-sm text-gray-700 space-y-2">
              <div className="flex justify-between">
                <span>Base Fare</span>
                <span>₹1200</span>
              </div>

              <div className="flex justify-between">
                <span>Taxes & Fees</span>
                <span>₹230</span>
              </div>
              <hr />
              <div className="flex justify-between font-semibold text-black">
                <span>Total</span>
                <span>₹1430</span>
              </div>
            </div>
            <div className="mb-4 flex items-center gap-2 text-lg font-semibold text-gray-700">
              <CreditCard className="h-5 w-5 text-blue-600" />
              Payment Options
            </div>

            <div className="space-y-3">
              <Label className="flex items-center justify-between gap-2 text-sm font-medium">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="payment"
                    value="part"
                    checked={selectedPayment === "part"}
                    onChange={() => setSelectedPayment("part")}
                    className="accent-blue-600"
                  />
                  <span>Part Pay</span>
                </div>
                <span className="text-gray-800 font-semibold">
                  ₹{partPayAmount}
                </span>
              </Label>

              <Label className="flex items-center justify-between gap-2 text-sm font-medium">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="payment"
                    value="full"
                    checked={selectedPayment === "full"}
                    onChange={() => setSelectedPayment("full")}
                    className="accent-blue-600"
                  />
                  <span>Full Pay</span>
                </div>
                <span className="text-gray-800 font-semibold">
                  ₹{fullPayAmount}
                </span>
              </Label>
            </div>

            <Button variant="gradient" className="w-full mt-4">
              PAY NOW
            </Button>
          </div>
        </aside>
      </div>
    </section>
  );
}
