import React, { useState } from "react";
import { Link } from "react-scroll";


function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md fixed top-0 left-0 tight-0 z-50 bg-white">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center space-x-2">
          <h1 className="font-semibold text-xl cursor-pointer">
            Avinash Singh
            <p className="text-sm">Software Engineer</p>
          </h1>
        </div>
        <div className="hidden md:flex hover:scale-110 duration-300 ">
          <ul className="flex space-x-8 font-semibold ">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="hover:text-blue-500 cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="hover:text-blue-500 cursor-pointer"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                className="hover:text-blue-500 cursor-pointer"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="experience"
                smooth={true}
                duration={500}
                className="hover:text-blue-500 cursor-pointer"
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="hover:text-blue-500 cursor-pointer"
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
        <button
          className="md:hidden flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-700 hover:border-gray-700"
          onClick={toggleMobileMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <div className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"} `}>
        <ul className="flex flex-col space-y-4 mt-4 font-semibold ">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="hover:text-blue-500 cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="hover:text-blue-500 cursor-pointer"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="hover:text-blue-500 cursor-pointer"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="experience"
              smooth={true}
              duration={500}
              className="hover:text-blue-500 cursor-pointer"
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="hover:text-blue-500 cursor-pointer"
            >
              Contact Me
            </Link>
          </li>
          
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

