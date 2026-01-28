import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Navbar />
      <main className="pt-16">
        <Hero visibleSections={visibleSections} />
        <Skills visibleSections={visibleSections} />
        <Projects visibleSections={visibleSections} />
        <Experience visibleSections={visibleSections} />
        <Achievements visibleSections={visibleSections} />
        <Contact />
      </main>
    </div>
  );
}

export default App;
