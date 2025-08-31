export default function Work() {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6 text-gray-900">Our Work</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 border rounded-xl shadow hover:shadow-lg">
          <h2 className="text-xl font-semibold">E-Commerce Website</h2>
          <p className="text-gray-600 mt-2">A full-stack online shopping platform with secure payments.</p>
        </div>
        <div className="p-6 border rounded-xl shadow hover:shadow-lg">
          <h2 className="text-xl font-semibold">Healthcare App</h2>
          <p className="text-gray-600 mt-2">Mobile app to manage patient records and telemedicine.</p>
        </div>
        <div className="p-6 border rounded-xl shadow hover:shadow-lg">
          <h2 className="text-xl font-semibold">SaaS Dashboard</h2>
          <p className="text-gray-600 mt-2">Analytics and admin dashboard with real-time data.</p>
        </div>
      </div>
    </div>
  );
}