import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Research from './components/Research';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Global mouse interaction effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      // Dynamically feeds the global cursor positions to CSS variables
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="app-container">
      {/* Decorative futuristic visual backgrounds */}
      <div className="ambient-grid" />
      
      <div className="ambient-glows">
        <div className="glow-orb orb-blue" />
        <div className="glow-orb orb-sand" />
        <div className="glow-orb orb-ice" />
      </div>

      {/* Main Structural Layout */}
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Research />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
