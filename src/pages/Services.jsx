export default function Services() {
  const services = [
    { title: "Web Development", desc: "Full-stack React, Node.js, and MongoDB apps." },
    { title: "UI/UX Design", desc: "Beautiful, responsive, and user-friendly interfaces." },
    { title: "Mobile Apps", desc: "Cross-platform apps with React Native & APIs." },
  ];

  return (
    <section className="p-10 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-10 text-gray-900 text-center">Our Services</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <div key={i} className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold mb-3 text-teal-600">{s.title}</h2>
            <p className="text-gray-700">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}