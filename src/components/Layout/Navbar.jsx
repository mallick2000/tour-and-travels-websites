"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";

const Navbar = ({ isAbsolute = false }) => {
  return (
    <nav
      className={`${
        isAbsolute ? "absolute top-0 left-0 w-full z-50" : "relative"
      } flex items-center justify-between  px-4 py-2 text-black  md:px-6 md:py-4`}
    >
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <Link
          href="/"
          className="flex items-center space-x-2 text-lg font-bold"
        >
          <Image src="/logo.png" alt="Logo" width={70} height={70} />
          <span className=" text-slate-300">Quick Cab</span>
        </Link>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex space-x-6 text-lg">
        <li>
          <Link
            href="/"
            className="hover:text-gray-900 hover:underline text-slate-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/cab"
            className="hover:text-gray-900 hover:underline text-slate-300"
          >
            Cab
          </Link>
        </li>
        <li>
          <Link
            href="/tours"
            className="hover:text-gray-900 hover:underline text-slate-300"
          >
            Tour Package
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="hover:text-gray-900 hover:underline text-slate-300"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-gray-900 hover:underline text-slate-300"
          >
            About
          </Link>
        </li>
      </ul>

      {/* Book a Ride Button */}
      <div className="hidden md:block">
        <Link href="/cab">
          <Button className="bg-blue-500 text-white hover:bg-blue-400">
            Book a Ride
          </Button>
        </Link>
      </div>

      {/* Mobile Menu */}
      <div className="block lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="text-xl font-bold">Menu</SheetTitle>
            </SheetHeader>
            <ul className="flex flex-col gap-4 mt-6 text-lg">
              <li>
                <Link href="/" className="hover:text-yellow-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/cab" className="hover:text-yellow-400">
                  Cab
                </Link>
              </li>
              <li>
                <Link href="/tours" className="hover:text-yellow-400">
                  Tour Package
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-yellow-400">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-yellow-400">
                  About
                </Link>
              </li>
              <li>
                <Link href="/cab">
                  <Button className="w-full mt-4 bg-blue-500 text-white hover:bg-blue-400">
                    Book a Ride
                  </Button>
                </Link>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
