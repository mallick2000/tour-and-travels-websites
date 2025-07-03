import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-20">
        {/* Brand Description */}
        <div>
          <h2 className="text-lg font-semibold hover:text-yellow-300">
            Quick Cab
          </h2>
          <p className="mt-2 text-sm text-gray-300 hover:text-yellow-300 w-[250px]">
            Book reliable outstation and local cabs at the best prices. 24/7
            support and on-time pickups.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-base font-semibold mb-2 hover:text-yellow-300">
            Quick Links
          </h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>
              <Link href="/" className="hover:text-yellow-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/cab" className="hover:text-yellow-300">
                Book a Cab
              </Link>
            </li>
            <li>
              <Link href="/offers" className="hover:text-yellow-300">
                Offers
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-yellow-300">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-base font-semibold mb-2 hover:text-yellow-300">
            Services
          </h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>
              <Link href="/cab" className="hover:text-yellow-300">
                One-way Cabs
              </Link>
            </li>
            <li>
              <Link href="/cab" className="hover:text-yellow-300">
                Round Trip Cabs
              </Link>
            </li>
            <li>
              <Link href="/cab" className="hover:text-yellow-300">
                Airport Cabs
              </Link>
            </li>
            <li>
              <Link href="/cab" className="hover:text-yellow-300">
                Hourly Cabs
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-base font-semibold mb-2 hover:text-yellow-300">
            Contact Us
          </h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li className="hover:text-yellow-300">📞 +91 8260663021</li>
            <li className="hover:text-yellow-300">📧 support@quickcab.in</li>
            <li className="hover:text-yellow-300">📍 Bhubaneswar, Odisha</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400 pb-4">
        © 2025 Quick Cab. All Rights Reserved &nbsp;|&nbsp;
        <Link href="#" className="hover:underline">
          Privacy Policy
        </Link>{" "}
        &nbsp;|&nbsp;
        <Link href="#" className="hover:underline">
          Terms of Service
        </Link>{" "}
        &nbsp;|&nbsp; Powered by -&nbsp;
        <Link
          href="https://clinquant-mooncake-372fbb.netlify.app/"
          className="font-semibold text-white hover:underline"
        >
          TRIVI
          <span className="relative top-1 text-2xl font-semibold text-orange-600">
            X
          </span>
          X
        </Link>
      </div>
    </footer>
  );
}
