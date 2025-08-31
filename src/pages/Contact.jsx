export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6 text-gray-900">Contact Us</h1>
      <form className="grid gap-4 max-w-lg">
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 border rounded-lg"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 border rounded-lg"
        />
        <textarea
          rows="4"
          placeholder="Your Message"
          className="p-3 border rounded-lg"
        />
        <button className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </div>
  );
}
