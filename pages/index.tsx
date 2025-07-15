'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutMe from '../components/About';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import SoftSkills from '../components/SoftSkills';
import Achievements from '../components/Achievements';
import Contact from '../components/Contact';

type Theme = 'light' | 'dark' | 'auto';

export default function Home() {
  const [theme, setTheme] = useState<Theme>('auto');

  function isDaytime() {
    const hour = new Date().getHours();
    return hour >= 7 && hour < 20;
  }

  function applyTheme(currentTheme: Theme) {
    if (currentTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (currentTheme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      if (isDaytime()) {
        document.documentElement.classList.remove('dark');
      } else {
        document.documentElement.classList.add('dark');
      }
    }
  }

  useEffect(() => {
    const saved = localStorage.getItem('theme') as Theme | null;
    if (saved === 'light' || saved === 'dark' || saved === 'auto') {
      setTheme(saved);
      applyTheme(saved);
    } else {
      setTheme('auto');
      applyTheme('auto');
    }
  }, []);

  function handleThemeChange(newTheme: Theme) {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
  }

  return (
    <div className="bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300 min-h-screen">
      <Navbar theme={theme} onThemeChange={handleThemeChange} />
      <Hero />
      {/* Aquí main sin max-width para que el fondo de AboutMe y otras secciones pueda ser full width */}
      <main className="px-4">
        <AboutMe />
        <Education />
        <Projects />
        <Experience />
        <Skills />
        <SoftSkills />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
}
