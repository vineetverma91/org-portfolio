export default function Services() {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6 text-gray-900">Our Services</h1>
      <ul className="grid md:grid-cols-3 gap-6">
        <li className="p-6 border rounded-xl shadow hover:shadow-lg">
          <h2 className="text-xl font-semibold">Web Development</h2>
          <p className="text-gray-600 mt-2">Modern, responsive websites built with React, Node.js and more.</p>
        </li>
        <li className="p-6 border rounded-xl shadow hover:shadow-lg">
          <h2 className="text-xl font-semibold">Mobile Apps</h2>
          <p className="text-gray-600 mt-2">Cross-platform apps with high performance and scalability.</p>
        </li>
        <li className="p-6 border rounded-xl shadow hover:shadow-lg">
          <h2 className="text-xl font-semibold">Cloud Solutions</h2>
          <p className="text-gray-600 mt-2">Secure cloud integrations and DevOps services.</p>
        </li>
      </ul>
    </div>
  );
}
