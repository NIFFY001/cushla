import React from "react";
import { Mail, Share2 } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#F4EDDD] px-6 md:px-12 lg:px-24 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 items-start">
        {/* Brand Section */}
        <div>
          <h3 className="font-newsreader italic text-3xl text-[#6D8A55] mb-6">
            Cushla Bakery
          </h3>

          <p className="font-jakarta text-[#7A8761] text-sm leading-8 max-w-xs font-jakarta uppercase tracking-[3px]  text-[#B4BA9E] mb-6 ">
            Crafting moments of sweetness in the heart of the city.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-jakarta uppercase tracking-[3px] text-xs text-[#B4BA9E] mb-6">
            Navigation
          </h4>

          <ul className="space-y-4 font-jakarta text-[#7A8761]  uppercase tracking-[3px] text-xs text-[#B4BA9E] mb-6">
            <li>
              <a href="/shop" className="hover:opacity-70 transition">
                Shop
              </a>
            </li>
            <li>
              <a href="/about" className="hover:opacity-70 transition">
                About
              </a>
            </li>
            <li>
              <a href="/instagram" className="hover:opacity-70 transition">
                Instagram
              </a>
            </li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h4 className="font-jakarta uppercase tracking-[3px] text-xs text-[#B4BA9E] mb-6">
            Customer Care
          </h4>

          <ul className="space-y-4  text-[#7A8761] text-sm font-jakarta uppercase tracking-[3px] text-xs text-[#B4BA9E] mb-6">
            <li>
              <a href="/contact" className="hover:opacity-70 transition">
                Contact
              </a>
            </li>
            <li>
              <a href="/shipping" className="hover:opacity-70 transition">
                Shipping
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:opacity-70 transition">
                Terms
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex flex-col md:items-end gap-6">
          {/* Social Icons */}
          <div className="flex gap-4">
            <button className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-[#7A8761] hover:scale-105 transition">
              <Share2 size={20} />
            </button>

            <button className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-[#7A8761] hover:scale-105 transition">
              <Mail size={20} />
            </button>
          </div>

          {/* Copyright */}
          <p className="font-jakarta text-[#7A8761] text-sm text-left md:text-right leading-relaxed font-jakarta uppercase tracking-[3px] text-xs text-[#B4BA9E] mb-6">
            © 2024 Cushla Bakery. Handcrafted with Soul.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
