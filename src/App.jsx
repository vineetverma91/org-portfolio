import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        
        {/* Navbar */}
        <Navbar />

        {/* Pages */}
        <div className="flex-grow pt-[120px]"> 
          {/* pt-[120px] -> navbar ki height ke hisaab se padding */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 text-white p-4 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} EKVYA Technologies. All rights reserved.
          </p>
        </footer>
      </div>
    </Router>
  );
}