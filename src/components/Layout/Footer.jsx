import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="px-6 lg:px-20 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
        {/* Brand Description */}
        <div>
          <h2 className="text-xl font-semibold hover:text-yellow-300">
            Quick Cab
          </h2>
          <p className="mt-2 text-sm text-gray-300  max-w-xs">
            Book reliable outstation and local cabs at the best prices. 24/7
            support and on-time pickups.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 hover:text-yellow-300">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link href="/" className="hover:text-yellow-300">
                Book a Package
              </Link>
            </li>
            <li>
              <Link href="/cab" className="hover:text-yellow-300">
                Book a Cab
              </Link>
            </li>
            <li>
              <Link href="/offers" className="hover:text-yellow-300">
                Check Deals
              </Link>
            </li>
            <li>
              <Link href="/announcement" className="hover:text-yellow-300">
                Announcement
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
          <h3 className="text-lg font-semibold mb-3 hover:text-yellow-300">
            Services
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link href="/cab" className="hover:text-yellow-300">
                Cab Booking
              </Link>
            </li>
            <li>
              <Link href="/packages" className="hover:text-yellow-300">
                Tour Packages
              </Link>
            </li>
            <li>
              <Link href="/attractions" className="hover:text-yellow-300">
                Attractions
              </Link>
            </li>
          </ul>
        </div>

        {/* Notices */}
        <div>
          <h3 className="text-lg font-semibold mb-3 hover:text-yellow-300">
            Notices
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link href="/privacy-policy" className="hover:text-yellow-300">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/cancellation-policy"
                className="hover:text-yellow-300"
              >
                Cancellation Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-yellow-300">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3 hover:text-yellow-300">
            Contact Us
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:text-yellow-300">📞 +91 8260663021</li>
            <li className="hover:text-yellow-300">📧 support@quickcab.in</li>
            <li className="hover:text-yellow-300">📍 Bhubaneswar, Odisha</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-6 pt-4 pb-6 text-center text-xs sm:text-sm text-gray-400 px-4">
        © 2025 Quick Cab. All Rights Reserved &nbsp;|&nbsp;
        <Link href="/privacy-policy" className="hover:underline">
          Privacy Policy
        </Link>
        &nbsp;|&nbsp;
        <Link href="/terms" className="hover:underline">
          Terms of Service
        </Link>
        &nbsp;|&nbsp; Powered by&nbsp;
        <Link
          href="https://clinquant-mooncake-372fbb.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
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
