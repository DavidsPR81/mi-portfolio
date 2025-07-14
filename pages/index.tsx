import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProfilePhoto from '../components/ProfilePhoto';
import AboutMe from '../components/About';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import SoftSkills from '../components/SoftSkills';
import Achievements from '../components/Achievements';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      
      {/* Hero a pantalla completa */}
      <Hero />
      
      {/* Resto con máximo ancho centrado */}
      <main className="max-w-5xl mx-auto px-4">
        <ProfilePhoto />
        <AboutMe />
        <Education />
        <Projects />
        <Experience />
        <Skills />
        <SoftSkills />
        <Achievements />
        <Contact />
      </main>
    </>
  );
}
