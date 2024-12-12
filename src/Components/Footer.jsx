import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white py-12 z-index-10">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Top Section */}
        <div className="text-center md:text-left mb-10">
          <h2 className="text-4xl font-bold mb-2">Let's Collaborate</h2>
          <hr className="w-20 mx-auto md:mx-0 border-gray-600 mt-4" />
        </div>

        {/* Links and Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left md:text-left">
          {/* Address Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Address</h3>
            <p className="text-gray-400">
              Street Dahlia Number 06, Malang, Indonesia, 64182
            </p>
            {/* Social Icons */}
            <div className="flex justify-center md:justify-start gap-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  SEO Tools
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Marketplace
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Google Analytics
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 text-center text-gray-500">
          © {new Date().getFullYear()} MyCompany. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
