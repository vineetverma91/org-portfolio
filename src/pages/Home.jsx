import React from "react";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white px-4">
      {/* Company Name */}
      <h1 className="text-3xl md:text-5xl font-extrabold tracking-wide mb-3">
        Welcome to <span className="text-teal-400">EKVYA Technologies</span>
      </h1>

      {/* Tagline */}
      <p className="text-lg md:text-xl text-gray-300 max-w-xl">
        Building modern, scalable, and professional web solutions for your business.
      </p>

      {/* Call to Action */}
      <div className="mt-6">
        <a
          href="/contact"
          className="px-6 py-3 bg-teal-500 hover:bg-teal-400 rounded-xl text-lg font-semibold transition-all"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}