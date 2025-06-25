import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "../ui/button";

export default function CabBookingForm() {
  return (
    <section className="ml-20 flex-col items-center justify-center bg-auto py-24 md:bg-contain">
      <div className="relative mt-4 w-full rounded-xl border-2 border-white bg-white p-8 shadow-2xl md:w-2/5 lg:w-2/5">
        <div className="absolute -top-10 left-0 right-0 flex items-center justify-center">
          <p className="rounded-xl border bg-blue-500 p-2 text-white">
            Book Online Cab
          </p>
        </div>
        <form>
          <div className="py-16">
            <RadioGroup
              className="flex flex-col md:flex-row"
              defaultValue="outstation-one-way"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="outstation-one-way"
                  id="outstation-one-way"
                />
                <Label htmlFor="outstation-one-way">Outstation One-way</Label>
              </div>

              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="Outstation Round trip"
                  id="Outstation Round trip"
                />
                <Label htmlFor="Outstation Round trip">
                  Outstation Round trip
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="Airport transfer"
                  id="Airport transfer"
                />
                <Label htmlFor="Airport transfer">Airport transfer</Label>
              </div>

              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Hourly Rental" id="Hourly Rental" />
                <Label htmlFor="Hourly Rental">Hourly Rental</Label>
              </div>
            </RadioGroup>

            {/* 
          <ul className="ml-36 flex justify-around gap-4">
            <li>
              <input type="radio" />
              <Link href="/">Outstation One-way</Link>
            </li>
            <li>
              <input type="radio" />
              <Link href="/">Outstation Round trip</Link>
            </li>
            <li>
              <input type="radio" />
              <Link href="/">Airport transfer</Link>
            </li>
            <li>
              <input type="radio" />
              <Link href="/">Hourly Rental</Link>
            </li>
          </ul> */}
          </div>
          <div className="flex justify-between gap-2">
            <div className="w-1/2">
              <label className="mb-1 block text-sm text-gray-500">From</label>
              <input
                type="text"
                placeholder="Enter Pickup location"
                className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
              />
            </div>

            <div className="w-1/2">
              <label className="mb-1 block text-sm text-gray-500">To</label>
              <input
                type="text"
                placeholder="Enter Pickup Location"
                className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
              />
            </div>
          </div>

          <div className="mb-4 mt-4 flex items-center space-x-2 text-sm font-semibold text-blue-600">
            <span className="cursor-pointer">+ Add Stops</span>
            <span className="bg-pink-500 px-2 py-0.5 text-xs text-white">
              New
            </span>
          </div>

          <div className="mb-6 flex items-start gap-24 text-sm">
            <div>
              <label className="block text-gray-500">Pickup Date</label>
              <div className="mt-1 font-bold">02 May&apos; 25</div>
            </div>

            <div>
              <label className="block text-gray-500">Pickup Time</label>
              <div className="mt-1 font-bold">10:00 AM</div>
            </div>
          </div>
          <button className="w-full rounded-xl border bg-blue-500 p-2 text-white">
            Search Cabs
          </button>
        </form>
      </div>
    </section>
  );
}
