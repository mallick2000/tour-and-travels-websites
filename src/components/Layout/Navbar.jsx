import Image from "next/image";
import { Import } from "lucide-react";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="font-roboto flex h-20 grid-cols-1 items-center justify-between gap-6 bg-blue-500/25 sm:grid-cols-2 lg:grid-cols-4">
      <div className="mx-auto ml-10 flex w-full max-w-7xl gap-2">
        <Image
          src="/cars/fb.png"
          alt="logo"
          width={30}
          height={30}
          className="mb-2"
        />
        <p className="font-roboto-mono text-3xl font-bold">Travel City</p>
      </div>
      <div className="ml-48 flex">
        <ul className="flex space-x-6">
          <Link href="/">
            <li>HOME</li>
          </Link>
          <Link href="/">
            <li>CAB</li>
          </Link>
          <Link href="/">
            <li>DESTINATION</li>
          </Link>
          <Link href="/">
            <li>PACKAGES</li>
          </Link>
          <Link href="/">
            <li>CONTACT US</li>
          </Link>
        </ul>
      </div>
      <div className="ml-6 mr-10 flex">
        <button className="w-40 rounded-lg border bg-blue-500 p-1.5 text-white hover:bg-blue-500/75">
          BOOK A RIDE
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
