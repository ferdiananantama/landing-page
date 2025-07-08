"use client";
import { useState } from "react";
import Image from "next/image";
import Logo from "@/assets/png/Logo.png";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-3 px-5 bg-white shadow-sm border border-gray-50 shadow-slate-200  md:px-20 md:py-6">
      <div className="flex items-center gap-5">
        <Image
          src={Logo}
          alt="Properly Logo"
          width={131}
          height={26}
          className="md:w-[131px] md:h-[26px] w-20 h-5"
        />
        <div className="md:h-[20px] md:border md:w-[1px] hidden" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 text-sm font-medium">
        {["ABOUT US", "PORTFOLIO", "INFORMATION"].map((item) => (
          <a
            key={item}
            href="#"
            className="relative text-gray-700 hover:text-blue-600 transition-colors duration-300 group"
          >
            {item}
            <span className="absolute left-0 bottom-[-2px] h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </div>

      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-gray-700"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white px-6 py-4 border-t border-gray-200 md:hidden flex flex-col gap-4">
          {["ABOUT US", "PORTFOLIO", "INFORMATION"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-gray-700 hover:text-blue-600 text-[10px] transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
