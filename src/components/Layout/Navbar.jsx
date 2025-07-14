"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  Home,
  CarTaxiFront,
  FerrisWheel,
  User,
  Headset,
} from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import LoginForm from "@/components/Form/LoginForm"; // make sure this is the correct path

const Navbar = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isAbsolute = isHome;

  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const navLinks = [
    { href: "/", icon: <Home className="w-5 h-5" />, label: "Home" },
    { href: "/cab", icon: <CarTaxiFront className="w-5 h-5" />, label: "Cab" },
    {
      href: "/package",
      icon: <FerrisWheel className="w-5 h-5" />,
      label: "Attractions",
    },
  ];

  return (
    <>
      <nav
        className={`${
          isAbsolute
            ? "absolute top-0 left-0 w-full z-50 text-white px-4 py-3 md:px-8 md:py-4 flex items-center justify-between"
            : "relative bg-gray-900 text-white px-4 py-3 md:px-8 md:py-4 flex items-center justify-between"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <Image src="/logo.png" alt="Logo" width={50} height={50} />
          <span className="text-2xl font-semibold text-white">Quick Cab</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8 text-lg">
          {navLinks.map(({ label, href, icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-2 hover:text-yellow-400 transition duration-300 hover:underline"
            >
              {icon}
              <span>{label}</span>
            </Link>
          ))}

          {/* Profile icon opens modal */}
          <button
            onClick={() => setIsLoginOpen(true)}
            className="flex items-center gap-2 hover:text-yellow-400 transition duration-300 hover:underline  cursor-pointer"
          >
            <User className="w-5 h-5" />
            <span>Profile</span>
          </button>

          <Link href="/cab">
            <Button variant="gradient">
              <Headset />
              06743525280
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
              <ul className="flex flex-col gap-5 pl-6 mt-6 text-lg">
                {navLinks.map(({ label, href, icon }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="flex items-center gap-3 hover:text-yellow-400 transition duration-300"
                    >
                      {icon}
                      <span>{label}</span>
                    </Link>
                  </li>
                ))}

                {/* Profile in mobile also opens modal */}
                <li>
                  <button
                    onClick={() => setIsLoginOpen(true)}
                    className="flex items-center gap-3 hover:text-yellow-400 transition duration-300"
                  >
                    <User className="w-5 h-5" />
                    <span>Profile</span>
                  </button>
                </li>

                <Link href="/cab">
                  <Button className="bg-blue-500 hover:bg-blue-500 p-4 text-lg text-white hover:text-white font-semibold rounded-md transition duration-300">
                    06743525280
                  </Button>
                </Link>
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      {/* Login Modal */}
      <LoginForm isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
};

export default Navbar;
