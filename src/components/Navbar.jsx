import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white shadow-md">
      <h1 className="text-2xl font-bold">MyCompany</h1>
      <div className="flex gap-6">
        <Link to="/" className="hover:text-teal-400">Home</Link>
        <Link to="/about" className="hover:text-teal-400">About</Link>
        <Link to="/services" className="hover:text-teal-400">Services</Link>
        <Link to="/work" className="hover:text-teal-400">Work</Link>
        <Link to="/contact" className="hover:text-teal-400">Contact</Link>
      </div>
    </nav>
  );
}