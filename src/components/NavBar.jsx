import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

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
    { path: "/services", text: "GALLERY" },
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
          <Link to="/">
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
                        ? "text-[15px] font-newsreader uppercase  border-[#6D8A55] pb-1"
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

        <div className="flex items-center gap-4">
          <img src={image} alt="contact" className="" />

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center w-10 h-10 text-[#6D8A55]"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen ? "true" : "false"}
            onClick={toggleMenu}
          >
            <span className="sr-only">Toggle menu</span>

            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 18L18 6M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
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

        {/* Professional Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div
            id="mobile-menu"
            className="absolute top-[80px] left-0 w-full bg-white shadow-xl border-t border-gray-100 md:hidden"
          >
            <ul className="flex flex-col py-4">
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
                        ? "block px-6 py-4 font-newsreader text-[18px] uppercase text-[#6D8A55] bg-[#f8faf7]"
                        : "block px-6 py-4 font-newsreader text-[18px] uppercase text-gray-700 hover:bg-gray-50 transition"
                    }
                  >
                    {link.text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}

export default NavBar;
