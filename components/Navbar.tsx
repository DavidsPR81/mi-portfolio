'use client';

import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const navLinks = [
  { label: 'Inicio', href: '#home' },
  { label: 'Sobre Mí', href: '#about' },
  { label: 'Formación', href: '#education' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Experiencia', href: '#experience' },
  { label: 'Habilidades', href: '#skills' },
  { label: 'Aptitudes', href: '#aptitudes' },
  { label: 'Logros', href: '#logros' },
  { label: 'Contacto', href: '#contact' },
];

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setDarkMode(true);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        <div className="text-teal-600 dark:text-teal-400 font-bold text-xl cursor-pointer select-none">
          David Pérez
        </div>
        <ul className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-300">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <button
          aria-label="Toggle Dark Mode"
          onClick={toggleDarkMode}
          className="ml-4 text-teal-600 dark:text-teal-400 hover:text-teal-400 dark:hover:text-teal-600 transition-colors text-xl"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
}
