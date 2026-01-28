function Achievements({ visibleSections }) {
  const achievements = [
    'Built multiple production-style projects including an AI Voice Assistant, AI Learning Platform, ATS system, and Admin Dashboard UI',
    'Delivered client-ready UI through freelance frontend development using React and Tailwind CSS',
    'Recognized for real-world case study analysis with a focus on data-driven problem solving and practical decision-making',
    'Demonstrated consistent academic growth in BCA with strong semester-wise performance',
    'Hands-on experience integrating AI APIs into real applications for productivity and learning use-cases',
  ];

  return (
    <section
      id="achievements"
      data-animate
      className={`py-20 px-6 bg-gray-950/30 transition-all duration-700 ${
        visibleSections.has('achievements')
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
          <span className="text-cyan-400">&lt;</span>
          Achievements
          <span className="text-cyan-400"> /&gt;</span>
        </h2>

        <div className="bg-gray-900/60 backdrop-blur border border-gray-800 rounded-xl p-8">
          <ul className="space-y-4">
            {achievements.map((achievement, index) => (
              <li
                key={index}
                className="flex items-start text-lg text-gray-300 hover:text-white transition-colors"
              >
                <svg
                  className="w-6 h-6 mr-4 mt-1 flex-shrink-0 text-cyan-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 0 0118 0z"
                  />
                </svg>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Achievements;
