import React, { useRef } from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const educationRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
      <div className="snap-y snap-mandatory min-h-screen h-screen overflow-x-hidden overflow-y-scroll scroll-smooth scrollbar-hide">
        <header className="fixed w-full bg-gradient-to-b from-neutral-950 to-neutral-900 z-50">
          <Navbar name="Rhys Carroll" description="Developer" scrollToSection={scrollToSection} aboutRef={aboutRef} skillsRef={skillsRef} educationRef={educationRef} contactRef={contactRef} />
        </header>
        <main className="bg-gradient-to-b from-neutral-900 to-neutral-950">
          <Hero scrollToSection={scrollToSection} aboutRef={aboutRef} />
          <About aboutRef={aboutRef} />
          <Skills skillsRef={skillsRef} />
          <Education educationRef={educationRef} />
          <Contact contactRef={contactRef} />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
  )
}

export default App