export default function Home() {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white">
      <h1 className="text-5xl font-bold mb-4">We Build Digital Solutions</h1>
      <p className="text-lg mb-6 w-3/4 md:w-1/2">
        A freelance IT company creating scalable, modern, and custom web solutions for businesses worldwide.
      </p>
      <a href="/contact" className="px-6 py-3 bg-teal-500 hover:bg-teal-600 rounded-lg text-lg">
        Let’s Work Together
      </a>
    </section>
  );
}