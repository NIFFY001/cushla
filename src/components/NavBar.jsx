// src/components/NavBar.jsx
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { User } from "lucide-react";

import logo from "../assets/logo.png";
import image from "../assets/image.png";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Navigation links
  const navLinks = [
    { path: "/", text: "SHOP" },
    { path: "/about-us", text: "ABOUT" },
    { path: "/gallery", text: "GALLERY" },
  ];

  return (
    <div
      className="bg-white px-[20px] lg:px-[50px] sticky top-0 shadow-md z-[500]"
      id="your-navbar-id"
    >
      <nav className="container-w flex justify-between items-center h-[80px] relative">
        {/* Left Section */}
        <div className="flex items-center">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            <img src={logo} alt="Logo" />
          </Link>

          <div className="hidden md:block ml-10">
            <ul className="flex gap-8 text-[#6D8A55] font-[600]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-[15px] font-newsreader uppercase border-b-2 border-[#6D8A55] pb-1"
                        : "text-[15px] font-newsreader uppercase hover:text-[#4f6740] transition"
                    }
                  >
                    {link.text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3 md:gap-4">
          <div className="flex items-center gap-2 cursor-pointer">
            <Link
              to="/login"
              className="flex items-center gap-1.5 md:gap-2 text-[#6D8A55] hover:text-[#4f6740] transition px-2 py-1 rounded-full hover:bg-[#6D8A55]/10"
            >
              <User size={20} />
              <p className="hidden sm:block font-newsreader uppercase">Login</p>
            </Link>
          </div>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center w-10 h-10 text-[#6D8A55] hover:bg-[#6D8A55]/10 rounded-full transition"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen ? "true" : "false"}
            onClick={toggleMenu}
          >
            <span className="sr-only">Toggle menu</span>

            {isMenuOpen ? (
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 18L18 6M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 6H20M4 12H20M4 18H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div
            id="mobile-menu"
            className="absolute top-[80px] left-0 w-full bg-white shadow-2xl border-t border-gray-100 md:hidden"
          >
            <ul className="flex flex-col py-3">
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  className="border-b border-gray-100 last:border-none"
                >
                  <NavLink
                    to={link.path}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      isActive
                        ? "block px-6 py-4 font-newsreader text-[17px] uppercase text-[#6D8A55] bg-[#f8faf7]"
                        : "block px-6 py-4 font-newsreader text-[17px] uppercase text-gray-700 hover:bg-gray-50 transition"
                    }
                  >
                    {link.text}
                  </NavLink>
                </li>
              ))}

              {/* Mobile Login */}
              <li className="px-6 py-4">
                <Link
                  to="/login"
                  onClick={closeMenu}
                  className="flex items-center gap-2 text-[#6D8A55] font-newsreader uppercase"
                >
                  <User size={18} />
                  Login
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}

export default NavBar;
