"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isAbsolute = isHome;
  return (
    <nav
      className={`${
        isAbsolute
          ? "absolute top-0 left-0 w-full z-50 text-white px-4 py-3 md:px-8 md:py-4 flex items-center justify-between"
          : "relative  text-white px-4 py-3 md:px-8 md:py-4 flex items-center justify-between bg-gray-900"
      }
        `}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center space-x-3">
        <Image src="/logo.png" alt="Logo" width={50} height={50} />
        <span className="text-2xl font-semibold text-white">Quick Cab</span>
      </Link>

      {/* Desktop Nav */}
      <div className="hidden lg:flex items-center space-x-8 text-lg">
        {[
          ["Home", "/"],
          ["Cab", "/cab"],
          ["Tours", "/tours"],
          ["Contact", "/contact"],
          ["About", "/about"],
          ["Login", "/profile"],
        ].map(([label, href]) => (
          <Link
            key={href}
            href={href}
            className="hover:text-yellow-400 transition duration-300 hover:underline"
          >
            {label}
          </Link>
        ))}
        <Link href="/cab">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full px-5">
            Book a Ride
          </Button>
        </Link>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="text-white" />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-black text-white">
            <SheetHeader>
              <SheetTitle className="text-white text-2xl">Menu</SheetTitle>
            </SheetHeader>
            <ul className="flex flex-col gap-5 mt-6 text-lg">
              {[
                ["Home", "/"],
                ["Cab", "/cab"],
                ["Tours", "/tours"],
                ["Contact", "/contact"],
                ["About", "/about"],
                ["Login", "/profile"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="hover:text-yellow-400 transition duration-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/cab">
                  <Button className="w-full mt-4 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-full">
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
