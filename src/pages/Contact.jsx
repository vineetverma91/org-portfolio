export default function Contact() {
  return (
    <section className="p-10 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-gray-900">Contact Us</h1>
      <form className="grid gap-6 bg-white p-6 rounded-xl shadow-md">
        <input type="text" placeholder="Your Name" className="p-3 border rounded-lg" />
        <input type="email" placeholder="Your Email" className="p-3 border rounded-lg" />
        <textarea placeholder="Your Message" rows="5" className="p-3 border rounded-lg"></textarea>
        <button className="px-6 py-3 bg-teal-500 hover:bg-teal-600 rounded-lg text-white">
          Send Message
        </button>
      </form>
    </section>
  );
}