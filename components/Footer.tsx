// components/Footer.tsx
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" text-gray-200  max-w-7xl py-28">
      <div className="px-6 lg:px-10">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-700 pb-10">
          {/* Brand Section */}
          <div>
            <h2 className="text-2xl font-bold text-white">ThinkEase</h2>
            <p className="mt-4 text-white text-sm">
              Your AI-powered therapist — guiding you toward a calmer, healthier
              mind with empathy and precision.
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-white transition"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-white transition"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="hover:text-white transition"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-white text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-white">Resources</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-white   text-white transition"
                >
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white  text-white transition">
                  Guides
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white  text-white transition">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white  text-white transition">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <ul className="mt-4 space-y-2 text-white text-sm">
              <li>
                Email:{" "}
                <a
                  href="mailto:support@thinkease.com"
                  className="hover:text-white text-white transition"
                >
                  support@thinkease.com
                </a>
              </li>
              <li>
                Phone:{" "}
                <a
                  href="tel:+11234567890"
                  className="hover:text-white transition"
                >
                  +1 123 456 7890
                </a>
              </li>
              <li>Address: 123 Mindful Lane, Calm City</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-sm text-white">
          <p>© {new Date().getFullYear()} ThinkEase. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className=" text-white hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="text-white hover:text-white transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
