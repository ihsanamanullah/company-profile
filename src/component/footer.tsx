"use client";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 mt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Column 1: Brand Info */}
          <div>
            <h1 className="text-3xl font-bold">A2 DISTRICT</h1>
            <p className="mt-3 text-gray-400">
              Your go-to store for top streetwear brands.
            </p>
          </div>

          {/* Column 2: Links */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/product" className="hover:text-gray-400">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/brand" className="hover:text-gray-400">
                  Brands
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gray-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Media */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Follow Us</h2>
            <div className="flex justify-center md:justify-start space-x-4">
              <Link href="https://instagram.com" target="_blank">
                <FaInstagram className="text-2xl hover:text-gray-400" />
              </Link>
              <Link href="https://facebook.com" target="_blank">
                <FaFacebookF className="text-2xl hover:text-gray-400" />
              </Link>
              <Link href="https://twitter.com" target="_blank">
                <FaTwitter className="text-2xl hover:text-gray-400" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} A2 DISTRICT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
