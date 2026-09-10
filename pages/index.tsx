'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import ScrollProgress from '../components/ScrollProgress';

type Theme = 'light' | 'dark' | 'auto';

export default function Home() {
  const [theme, setTheme] = useState<Theme>('auto');

  function isDaytime() {
    return new Date().getHours() >= 7 && new Date().getHours() < 20;
  }

  function applyTheme(currentTheme: Theme) {
    if (currentTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (currentTheme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
      if (prefersDark || !isDaytime()) {
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
      if (theme === 'auto') applyTheme('auto');
    };

    mediaQuery.addEventListener('change', handleSystemChange);
    const timeInterval = setInterval(() => {
      if (theme === 'auto') applyTheme('auto');
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
    <div className="bg-page text-ink min-h-screen">
      <div className="grain" />
      <ScrollProgress />
      <Navbar theme={theme} onThemeChange={handleThemeChange} />
      <main>
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
