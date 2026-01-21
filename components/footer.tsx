import { Facebook, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
          {/* Brand Section */}
          <div className="w-full md:w-2/5 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-medium font-header text-white">
                Dream Drive
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed font-inter">
                Experience the thrill of the road with our premium car rental
                services. Luxury, comfort, and performance guaranteed.
              </p>
            </div>
            <div className="flex gap-4 font-inter">
              <Link
                href="#"
                className="bg-gray-800 p-2 rounded-full text-white hover:bg-blue-600 transition-colors"
              >
                <Facebook size={18} />
              </Link>
              <Link
                href="#"
                className="bg-gray-800 p-2 rounded-full text-white hover:bg-blue-400 transition-colors"
              >
                <Twitter size={18} />
              </Link>
              <Link
                href="#"
                className="bg-gray-800 p-2 rounded-full text-white hover:bg-blue-700 transition-colors"
              >
                <Linkedin size={18} />
              </Link>
            </div>
          </div>

          {/* Right Side Sections */}
          <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-medium font-header mb-6">
                Quick Links
              </h3>
              <ul className="space-y-3 text-sm text-gray-400 font-inter">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Our Fleet
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="text-lg font-medium font-header mb-4">
                Contact Us
              </h3>
              <ul className="space-y-3 text-sm text-gray-400 font-inter">
                <li className="pt-2">
                  <span className="block text-white font-medium">Address:</span>
                  123 Luxury Lane New York, NY 10001
                </li>
                <li>
                  <span className="block text-white font-medium">Phone:</span>
                  (123) 456-7890
                </li>
                <li>
                  <span className="block text-white font-medium">Email:</span>
                  info@dreamdrive.com
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-medium font-header mb-6">
                Newsletter
              </h3>
              <p className="text-gray-400 text-sm mb-4 font-inter">
                Subscribe to our newsletter for the latest updates and exclusive
                offers.
              </p>
              <form className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p className="font-inter">© 2026 Dream Drive. All rights reserved.</p>
          <div className="flex gap-6 font-inter">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
