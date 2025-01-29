import React, { useRef } from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';

const App = () => {
    const aboutRef = useRef(null);
    const skillsRef = useRef(null);

    const scrollToAbout = () => {
      aboutRef.current?.scrollIntoView({ behavior: 'smooth'});
    };

  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth scrollbar-hide">
      <header className="fixed w-full bg-white">
        <Navbar name="Rhys Carroll" description="Developer" />
      </header>
      <main>
        <Hero scrollToAbout={scrollToAbout} />
        <About aboutRef={aboutRef} />
        <Skills skillsRef={skillsRef} />
      </main>
    </div>
  )
}

export default App