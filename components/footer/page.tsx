import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">
              We are a revolutional  company dedicated to providing the best
              service possible. Follow us on social media for more updates!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <Link  className="text-gray-400 hover:text-white" href="/">
                 Home
                </Link>
              </li>
              <li className="mb-2">
                <Link className="text-gray-400 hover:text-white" href="/about">
                 About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link className="text-gray-400 hover:text-white" href="/services">
                Services
                </Link>
              </li>
              <li className="mb-2">
                <Link className="text-gray-400 hover:text-white" href="/contact">
            Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white">
                <FaFacebook size={24} />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white">
                <FaTwitter size={24} />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white">
                <FaInstagram size={24} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Fictional Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
