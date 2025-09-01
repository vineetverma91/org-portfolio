import React from "react";

export default function Home() {
  return (
    <section className="relative bg-gradient-to-b from-[#0d0e24] to-[#1a1c3b] text-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Building <span className="text-cyan-400">Scalable</span> &{" "}
            <span className="text-purple-400">Modern</span> Solutions
          </h1>
          <p className="mt-6 text-lg text-gray-300">
            At EKVYA Technologies, we deliver secure, high-performance, and
            future-ready web & digital solutions that transform businesses.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="/contact"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg shadow-md transition"
            >
              Get in Touch
            </a>
            <a
              href="/services"
              className="border border-gray-400 hover:border-cyan-500 px-6 py-3 rounded-lg transition"
            >
              Explore Services
            </a>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative flex justify-center">
          <img
            src="/illustration.jpg"
            alt="Tech Illustration"
            className="w-[90%] md:w-[80%] animate-float"
          />
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10 bg-[url('/pattern.svg')] opacity-10" />
    </section>

  );
}