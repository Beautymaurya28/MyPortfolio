function Skills({ visibleSections }) {
  const skillsData = {
    'Programming Languages': ['JavaScript', 'Python', 'C++'],
    'Frontend Development': [
      'HTML5',
      'CSS3 / Tailwind',
      'React',
      'Next.js',
    ],
    'Backend & APIs': [
      'Node.js',
      'Express.js',
      'REST APIs',
      'FastAPI (Python)',
    ],
    'Databases': [
      'MongoDB',
      'SQL (MySQL)',
    ],
    'AI & Automation': [
      'OpenAI / Gemini APIs',
      'Prompt Engineering',
      'AI Feature Integration',
    ],
    'Tools & Workflow': [
      'Git & GitHub',
      'Postman',
      'VS Code',
      'API Testing',
    ],
    'Engineering Strengths': [
      'Problem Decomposition',
      'Clean Architecture',
      'Debugging & Optimization',
      'System Thinking',
    ],
  };

  return (
    <section
      id="skills"
      data-animate
      className={`py-24 px-6 transition-all duration-700 ${
        visibleSections.has('skills')
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-14 text-center text-white">
          <span className="text-cyan-400">&lt;</span>
          Skills
          <span className="text-cyan-400"> /&gt;</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillsData).map(([category, skills], index) => (
            <div
              key={category}
              className="
                group bg-gray-900/60 backdrop-blur
                border border-gray-800 rounded-xl p-6
                hover:border-cyan-400/50
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10
              "
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <h3 className="text-lg font-semibold mb-4 text-white tracking-wide">
                {category}
              </h3>

              <ul className="space-y-2">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-gray-300 flex items-center group-hover:text-white transition-colors"
                  >
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
