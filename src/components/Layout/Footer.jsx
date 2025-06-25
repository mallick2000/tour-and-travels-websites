import Link from "next/link";
import { Button } from "../ui/button";

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="ml-10 mr-10 flex justify-between p-6 text-white">
        <div className="">
          <h2 className="hover:text-yellow-300">Quick Cab</h2>
          <p className="w-[300px] hover:text-yellow-300">
            {" "}
            Book reliable outstation and local cabs at the best prices. 24/7
            support and on-time pickups.
          </p>
        </div>
        <div>
          <p className="hover:text-yellow-300">Quick Link</p>
          <ul>
            <li className="hover:text-yellow-300">
              <link href="" />
              Home
            </li>
            <li className="hover:text-yellow-300">
              <link href="" />
              Book a Cab
            </li>
            <li className="hover:text-yellow-300">
              <link href="" />
              Offers
            </li>
            <li className="hover:text-yellow-300">
              <link href="" />
              About us
            </li>
          </ul>
        </div>

        <div>
          <p className="hover:text-yellow-300">Services</p>
          <ul>
            <li className="hover:text-yellow-300">
              <link href="" />
              One-way cabs
            </li>
            <li className="hover:text-yellow-300">
              <link href="" />
              Round trip cabs
            </li>
            <li className="hover:text-yellow-300">
              <link href="" />
              Airport cabs
            </li>
            <li className="hover:text-yellow-300">
              <link href="" />
              Hourly cabs
            </li>
          </ul>
        </div>

        <div>
          <p className="hover:text-yellow-300">Contact Us</p>
          <ul>
            <li className="hover:text-yellow-300">
              <Link href="" />
              📞 +91 8260663021
            </li>
            <li className="hover:text-yellow-300">
              <link href="" />
              📧 support@quickcab.in
            </li>
            <li className="hover:text-yellow-300">
              <link href="" />
              📍 Bhubaneswar, Odisha
            </li>
          </ul>
        </div>
      </div>

      <div className="ml-14 flex justify-between">
        <p className="text-left text-white hover:text-yellow-300">
          © {new Date().getFullYear()} QuickCab. All rights reserved.
        </p>

        <p className="mr-8 text-left text-white hover:text-yellow-300">
          Privacy Policy Terms of Use
        </p>
      </div>
    </footer>
  );
}
