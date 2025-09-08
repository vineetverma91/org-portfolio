export default function About() {
  return (
    <div className="max-w-6xl mx-auto p-8 flex flex-col md:flex-row gap-10 items-center">
      
      {/* Left: Image Frame */}
      <div className="flex-shrink-0">
        <img
          src="/office-bench02.png"
          alt="Owner"
          className="w-60 h-60 object-cover rounded-2xl shadow-lg border-4 border-gray-300"
        />
      </div>

      {/* Right: Text */}
      <div>
        <h1 className="text-4xl font-bold mb-4 text-gray-900">About Us</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          We are a modern freelance IT company with expertise in{" "}
          <span className="font-semibold">web development, mobile apps, and enterprise software</span>. 
          With passion for innovation and a strong client-first approach, we 
          deliver scalable, secure, and high-performance solutions.
        </p>
        <p className="text-lg text-gray-700 mt-4">
          Our mission is to help businesses achieve digital transformation 
          through cutting-edge technology and tailored software solutions.
        </p>
      </div>
    </div>
  );
}