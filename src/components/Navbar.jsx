import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-[#0d0e24] shadow-md z-50">
      <div className="max-w-7xl mx-1 flex items-center justify-between px-4 sm:px-6 py-2 sm:py-3 md:py-4">

        {/* 🔹 Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="EKVYA Logo"
            className="h-[70px] w-auto sm:h-[90px] md:h-[110px] lg:h-[88] object-contain"
          />
        </div>

        {/* 🔹 Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-white font-semibold text-lg">
          <Link to="/" className="hover:text-purple-400 transition">Home</Link>
          <Link to="/about" className="hover:text-purple-400 transition">About</Link>
          <Link to="/services" className="hover:text-purple-400 transition">Services</Link>
          <Link to="/work" className="hover:text-purple-400 transition">Work</Link>
          <Link to="/contact" className="hover:text-purple-400 transition">Contact</Link>
        </nav>

        {/* 🔹 Mobile Hamburger */}
        <button
          className="md:hidden text-white ml-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* 🔹 Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0d0e24] px-6 py-4 space-y-4 text-white font-semibold text-lg">
          <Link to="/" onClick={() => setIsOpen(false)} className="block hover:text-purple-400 transition">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block hover:text-purple-400 transition">About</Link>
          <Link to="/services" onClick={() => setIsOpen(false)} className="block hover:text-purple-400 transition">Services</Link>
          <Link to="/work" onClick={() => setIsOpen(false)} className="block hover:text-purple-400 transition">Work</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block hover:text-purple-400 transition">Contact</Link>
        </div>
      )}
    </header>
  );
}