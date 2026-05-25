'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
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

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemChange = () => {
      if (theme === 'auto') {
        applyTheme('auto');
      }
    };
    
    mediaQuery.addEventListener('change', handleSystemChange);

    const timeInterval = setInterval(() => {
      if (theme === 'auto') {
        applyTheme('auto');
      }
    }, 60000);

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
    <div className="bg-white text-gray-800 dark:bg-[#030712] dark:text-gray-100 transition-colors duration-300 min-h-screen">
      <Navbar theme={theme} onThemeChange={handleThemeChange} />

      <main className="max-w-[1920px] mx-auto">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
