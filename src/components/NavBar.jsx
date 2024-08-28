import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaAffiliatetheme } from "react-icons/fa6";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { link: "HOME", href: "#hero" },
    { link: "ABOUT", href: "#about" },
    { link: "PROJECT", href: "#project" },
  ];

  return (
    <nav className="w-full bg-gray-700 text-gray-100 shadow-md">
      <div className="container mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
        {/* Logo */}
        <div
          className="text-3xl flex items-center gap-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Go to homepage"
        >
          <FaAffiliatetheme />
          <span className="font-semibold text-xl">MY PORTFOLIO</span>
        </div>

        {/* Menu Icon */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-3xl cursor-pointer"
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Nav Links */}
        <ul
          className={`lg:flex lg:items-center lg:gap-8 absolute lg:static top-16 left-0 w-full lg:w-auto bg-gray-700 lg:bg-transparent transition-transform duration-300 ease-in-out z-50 py-4 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {navLinks.map((e, i) => (
            <li key={i} className="text-center lg:text-left ">
              <a
                href={e.href}
                className="block py-2 px-4 text-lg lg:text-base font-semibold hover:bg-gray-600 rounded transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {e.link}
              </a>
            </li>
          ))}
          <li className="text-center lg:text-left mt-4 lg:mt-0">
            <a href="#contact">
              <button
                onClick={() => setIsOpen(false)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-bold transition-colors duration-300"
              >
                CONTACT
              </button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
