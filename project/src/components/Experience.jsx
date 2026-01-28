import { useState } from 'react';



function Experience({ visibleSections }) {
  const experiences = [
    {
      role: 'Freelance Frontend Developer',
      company: 'Client-Based Projects',
      duration: '2024 – 2025 ',
      problem:
        'Clients required clean, responsive, and scalable admin interfaces that could later integrate with real backend systems.',
      work: [
        'Built modern admin dashboard UI using React and Tailwind CSS',
        'Created reusable components and clean folder structures',
        'Ensured responsive layouts across devices',
      ],
      impact: [
        'Delivered client-ready admin panel UI',
        'Improved real-world frontend development workflow',
      ],
      tech: 'React, TypeScript, Tailwind CSS, Vite',
    },
    {
      role: 'Frontend Developer',
      company: 'TalentMatch ATS',
      duration: 'Project Experience',
      problem:
        'Recruiters need a simple and intuitive interface to manage job postings and applications.',
      work: [
        'Designed recruiter dashboard and job posting UI',
        'Built applications table with search and filter functionality',
        'Handled routing and UI state management',
      ],
      impact: [
        'Created a structured ATS frontend foundation',
        'Prepared UI for future backend and AI integration',
      ],
      tech: 'React, TypeScript, Tailwind CSS, React Router',
    },
    {
      role: 'Full-Stack Developer',
      company: 'Smart Quiz & Summary Generator',
      duration: 'Hackathon / Learning Project',
      problem:
        'Students struggle to quickly understand large PDFs and study material.',
      work: [
        'Built file upload and content processing flow',
        'Implemented quiz and summary generation logic',
        'Connected frontend with Node.js backend APIs',
      ],
      impact: [
        'Gained hands-on experience with backend integration',
        'Improved understanding of real-world problem solving',
      ],
      tech: 'HTML, CSS, JavaScript, Node.js, Express',
    },
    {
      role: 'AI Application Developer',
      company: 'Pipoo – AI Voice Desk Assistant',
      duration: 'Project Experience',
      problem:
        'Students lack focus, clarity, and structured guidance for daily tasks and career growth.',
      work: [
        'Designed AI-assisted task and productivity workflows',
        'Integrated AI APIs for intelligent responses',
        'Built logic for reminders, notes, and insights',
      ],
      impact: [
        'Developed an AI-driven productivity assistant',
        'Strengthened AI integration and system design skills',
      ],
      tech: 'Python, Kivy/KivyMD, AI APIs, REST APIs',
    },
  ];

  return (
    <section
      id="experience"
      data-animate
      className={`py-32 px-6 transition-all duration-700 ${
        visibleSections.has('experience')
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-white">
          <span className="text-cyan-400">&lt;</span>
          Experience
          <span className="text-cyan-400"> /&gt;</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-900/60 backdrop-blur border border-gray-800 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold text-white mb-1">
                {exp.role}
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                {exp.company} • {exp.duration}
              </p>

              <p className="text-sm text-gray-400 mb-3">
                <span className="text-gray-300 font-semibold">Problem:</span>{' '}
                {exp.problem}
              </p>

              <ul className="space-y-1 mb-3">
                {exp.work.map((item, i) => (
                  <li key={i} className="text-sm text-gray-400">
                    ▸ {item}
                  </li>
                ))}
              </ul>

              <p className="text-sm text-gray-400">
                <span className="text-gray-300 font-semibold">Tech:</span>{' '}
                {exp.tech}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
