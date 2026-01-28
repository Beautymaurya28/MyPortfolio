function Hero({ visibleSections }) {
  return (
    <section
      id="hero"
      data-animate
      className={`min-h-screen flex items-center justify-center px-6 transition-all duration-700 ${
        visibleSections.has('hero')
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-4xl mx-auto text-center">

        {/* NAME */}
        <h1
          className="text-5xl md:text-7xl font-extrabold mb-4
          bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600
          bg-clip-text text-transparent
          animate-gradientGlow"
        >
          Beauty Rani
        </h1>

        {/* ROLE */}
        <p className="text-xl md:text-2xl text-gray-400 mb-8 tracking-wide">
          <span className="text-cyan-400">&lt;</span>
          AI-Focused Web Developer
          <span className="text-cyan-400"> /&gt;</span>
        </p>

        {/* DESCRIPTION */}
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-lg text-gray-300 leading-relaxed">
            I design and build <span className="text-white font-semibold">intelligent Websites</span> —
            combining clean frontend, scalable backend logic,
            and <span className="text-cyan-400">AI-powered features</span>.
            <br /><br />
            Focused on real-world problem solving, performance,
            and systems that actually work in production.
          </p>
        </div>

        {/* CTA BUTTONS */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/resumes/CVBeauty.pdf"
            className="px-8 py-3 bg-white text-black font-semibold rounded-lg
            hover:bg-gray-200 transition-all transform hover:scale-105
            shadow-lg hover:shadow-white/20"
          >
            View Resume
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-gray-700 text-white font-semibold rounded-lg
            hover:border-cyan-400 hover:text-cyan-400
            hover:bg-white/5 transition-all transform hover:scale-105"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-gray-700 text-white font-semibold rounded-lg
            hover:border-purple-400 hover:text-purple-400
            hover:bg-white/5 transition-all transform hover:scale-105"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
