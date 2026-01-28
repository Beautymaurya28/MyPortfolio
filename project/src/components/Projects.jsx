import { useState } from 'react';
import pipooImg from '../images/Pipoo.png';
import SchoolTouchImg from '../images/SchoolTouch.png';
import LearnexImg from '../images/Learnex.png';


function Projects({ visibleSections }) {
  const projects = [
    {
      title: 'Pipoo – AI Voice Desk Assistant',
      subtitle: 'AI-powered productivity & career clarity system',
      image: pipooImg,
      problem:
        'Students struggle with scattered learning, lack of direction, and no clear way to evaluate real skill growth.',
      whatBuilt: [
        'AI-driven career clarity & task guidance',
        'Voice-based interaction and reminders',
        'Behavior-aware feedback instead of static advice',
      ],
      keyWork: [
        'Designed end-to-end system architecture',
        'Integrated Gemini / AI APIs for intelligent responses',
        'Built backend logic for tasks, notes, and insights',
      ],
      tech: 'Python, Kivy/KivyMD, AI APIs, REST APIs',
      github: 'https://github.com/Beautymaurya28/Pipoo-Clearity-AI',
    },
    {
      title: 'Learnex – AI Learning Platform',
      subtitle: 'Smart learning workflows for students & teachers',
      image: LearnexImg,
      problem:
        'Traditional learning platforms are rigid, manual, and do not adapt to individual learning gaps.',
      whatBuilt: [
        'AI-generated tests and practice flows',
        'Role-based dashboards (student / teacher)',
        'Progress tracking with actionable insights',
      ],
      keyWork: [
        'Implemented authentication and role-based access',
        'Built AI-assisted test and feedback logic',
        'Designed clean, scalable frontend-backend flow',
      ],
      tech: 'Next.js, React, Node.js, MongoDB, JWT, OpenAI API',
      github: 'https://github.com/Beautymaurya28/learnex',
    },
    {
      title: 'School Touch – Digital School System',
      subtitle: 'End-to-end school management platform',
      image: SchoolTouchImg,
      problem:
        'Manual school processes cause inefficiency, data loss, and poor communication.',
      whatBuilt: [
        'Student & teacher management modules',
        'Assignment, notes, and record handling',
        'Centralized digital workflows',
      ],
      keyWork: [
        'Designed database schemas and APIs',
        'Handled backend logic and integrations',
        'Focused on reliability and usability',
      ],
      tech: 'Node.js, Express, MongoDB, REST APIs',
      github: 'https://github.com/Beautymaurya28/SchoolTouch',
    },
  ];

  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(null);

  const prev = () =>
    setActive((i) => (i - 1 + projects.length) % projects.length);
  const next = () =>
    setActive((i) => (i + 1) % projects.length);

  return (
    <section
      id="projects"
      data-animate
      className={`py-32 px-6 transition-all duration-700 ${
        visibleSections.has('projects')
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white">
          <span className="text-cyan-400">&lt;</span>
          Projects
          <span className="text-cyan-400"> /&gt;</span>
        </h2>

        {/* STACK */}
        <div className="relative h-[560px] flex items-center justify-center">
          {projects.map((project, index) => {
            const offset = index - active;
            const isHovered = hovered === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                className="absolute transition-all duration-500 ease-out cursor-pointer"
                style={{
                  transform: isHovered
                    ? 'translateX(0px) scale(1.05) rotate(0deg)'
                    : `translateX(${offset * 260}px) scale(0.88) rotate(${offset * 5}deg)`,
                  zIndex: isHovered ? 50 : projects.length - Math.abs(offset),
                  opacity: hovered !== null && !isHovered ? 0.35 : 1,
                }}
              >
                <div className="w-[360px] bg-gray-900/80 backdrop-blur border border-gray-800 rounded-2xl overflow-hidden shadow-2xl text-left">
                  
                  {/* IMAGE */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 object-cover"
                  />

                  {/* CONTENT */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {project.title}
                    </h3>

                    {project.subtitle && (
                      <p className="text-sm text-gray-400 mb-4">
                        {project.subtitle}
                      </p>
                    )}

                    <Section title="Problem" text={project.problem} />
                    <List title="What I Built" items={project.whatBuilt} />
                    <List title="Key Engineering Work" items={project.keyWork} />

                    <p className="text-sm text-gray-400 mt-3">
                      <span className="text-gray-300 font-semibold">
                        Tech:
                      </span>{' '}
                      {project.tech}
                    </p>

                    <a
                      href={project.github}
                      className="inline-block mt-4 text-sm font-medium text-cyan-400 hover:text-white transition"
                    >
                      View on GitHub →
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CONTROLS */}
        <div className="flex justify-center gap-6 mt-14">
          <button
            onClick={prev}
            className="px-4 py-2 border border-gray-700 rounded-lg text-white hover:border-cyan-400 hover:text-cyan-400 transition"
          >
            ←
          </button>
          <button
            onClick={next}
            className="px-4 py-2 border border-gray-700 rounded-lg text-white hover:border-cyan-400 hover:text-cyan-400 transition"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}

/* Helpers */
const Section = ({ title, text }) => (
  <div className="mb-3">
    <p className="text-sm font-semibold text-gray-300 mb-1">{title}</p>
    <p className="text-sm text-gray-400">{text}</p>
  </div>
);

const List = ({ title, items }) => (
  <div className="mb-3">
    <p className="text-sm font-semibold text-gray-300 mb-1">{title}</p>
    <ul className="space-y-1">
      {items.map((item, i) => (
        <li key={i} className="text-sm text-gray-400 flex items-start">
          <span className="text-cyan-400 mr-2">▸</span>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default Projects;
