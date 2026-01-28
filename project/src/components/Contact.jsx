function Contact() {
  return (
    <footer className="py-24 px-6 border-t border-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Let’s Build Something Real
        </h2>

        <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
          Open to software development, AI-driven projects, and freelance
          frontend work. If you’re building something meaningful, let’s talk.
        </p>

        <div className="flex flex-col items-center space-y-5 mb-14">
          {/* Email */}
          <a
            href="mailto:beautymaurya9142@gmail.com"
            className="text-xl text-gray-300 hover:text-white transition-colors flex items-center"
          >
            <svg
              className="w-6 h-6 mr-3 text-cyan-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            beautymaurya9142@gmail.com
          </a>

          {/* Links */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              GitHub
            </a>

            <span className="text-gray-600">•</span>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              LinkedIn
            </a>

            <span className="text-gray-600">•</span>

            <a
              href="/resumes/CVBeauty.pdf"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              Resume
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm">
            © 2026 Beauty Rani — Built with logic, intent, and clean code.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
