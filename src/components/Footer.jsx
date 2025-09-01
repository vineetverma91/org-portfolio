// src/components/Footer.jsx
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0d0e24] text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Company Info */}
        <div>
          <h2 className="text-white font-bold text-xl mb-4">EKVYA Technologies</h2>
          <p className="text-sm leading-relaxed">
            We provide innovative solutions in software development, cloud services,
            and digital transformation to empower businesses.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-white font-semibold text-lg mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-purple-400 transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-purple-400 transition">About</Link></li>
            <li><Link to="/services" className="hover:text-purple-400 transition">Services</Link></li>
            <li><Link to="/work" className="hover:text-purple-400 transition">Work</Link></li>
            <li><Link to="/contact" className="hover:text-purple-400 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-white font-semibold text-lg mb-4">Our Services</h2>
          <ul className="space-y-2">
            <li>Web Development</li>
            <li>Mobile Applications</li>
            <li>Cloud Solutions</li>
            <li>UI/UX Design</li>
            <li>Consulting</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-white font-semibold text-lg mb-4">Contact Us</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2"><MapPin size={16}/> Indore, MP, India</li>
            <li className="flex items-center gap-2"><Phone size={16}/> +91 7999566202</li>
            <li className="flex items-center gap-2"><Mail size={16}/> vvineet187@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} EKVYA Technologies. All rights reserved.
      </div>
    </footer>
  );
}