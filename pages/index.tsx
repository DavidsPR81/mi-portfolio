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
    } else if (currentTheme === 'auto') {
      // Modo automático: usar preferencia del sistema O hora del día
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      const isNightTime = !isDaytime();
      
      if (prefersDark || isNightTime) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }

  useEffect(() => {
    const saved = localStorage.getItem('theme') as Theme | null;
    const validTheme =
      saved === 'light' || saved === 'dark' || saved === 'auto' ? saved : 'auto';
    setTheme(validTheme);
    applyTheme(validTheme);

    // Escuchar cambios en la preferencia del sistema
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemChange = () => {
      if (theme === 'auto') {
        applyTheme('auto');
      }
    };
    
    mediaQuery.addEventListener('change', handleSystemChange);

    // Verificar cambios de hora cada minuto para el modo automático
    const timeInterval = setInterval(() => {
      if (theme === 'auto') {
        applyTheme('auto');
      }
    }, 60000); // Cada minuto

    return () => {
      mediaQuery.removeEventListener('change', handleSystemChange);
      clearInterval(timeInterval);
    };
  }, [theme]);

  function handleThemeChange(newTheme: Theme) {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
  }

  return (
    <div className="bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300 min-h-screen">
      <Navbar theme={theme} onThemeChange={handleThemeChange} />

      {/* Contenedor general con padding y max width para las secciones */}
       <main className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 2xl:px-36">
        <Hero />
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
