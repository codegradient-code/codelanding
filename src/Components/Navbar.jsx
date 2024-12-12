import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md px-6 py-4">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Left side logo */}
        <div className="text-2xl font-bold text-gray-800"><img src="logo.png" alt="MyCompany Logo" className="h-12 w-auto" />
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Right side navigation */}
        <nav
          className={`${isOpen ? "block" : "hidden"
            } absolute md:static top-full left-0 w-full md:w-auto bg-white shadow-md md:shadow-none md:flex space-y-4 md:space-y-0 md:space-x-6 py-4 md:py-0 px-6 md:px-0`}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-lg font-medium transition-colors ${isActive
                ? "text-blue-600"
                : "text-gray-600 hover:text-blue-500"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/service"
            className={({ isActive }) =>
              `text-lg font-medium transition-colors ${isActive
                ? "text-blue-600"
                : "text-gray-600 hover:text-blue-500"
              }`
            }
          >
            Service
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-lg font-medium transition-colors ${isActive
                ? "text-blue-600"
                : "text-gray-600 hover:text-blue-500"
              }`
            }
          >
            About Us
          </NavLink>
        </nav>

        {/* Call-to-action button */}
        <button className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-colors">
          Contact Us
        </button>
      </div>
    </header>
  );
}

export default Navbar;
