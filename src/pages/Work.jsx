export default function Work() {
  const projects = [
    { name: "E-Commerce Website", tech: "React, Node.js, MongoDB" },
    { name: "Company Portfolio", tech: "React, Tailwind, Vercel" },
    { name: "Task Management App", tech: "Next.js, Firebase" },
  ];

  return (
    <section className="p-10 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-10 text-center text-gray-900">Our Work</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <div key={i} className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition">
            <h2 className="text-xl font-semibold mb-2">{p.name}</h2>
            <p className="text-gray-600">{p.tech}</p>
          </div>
        ))}
      </div>
    </section>
  );
}