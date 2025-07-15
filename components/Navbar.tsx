'use client';

import React, { useRef, useEffect, useState } from 'react';
import { FaMoon, FaSun, FaAdjust } from 'react-icons/fa';

// Tipado de tema
type Theme = 'light' | 'dark' | 'auto';

interface NavbarProps {
  theme: Theme;
  onThemeChange: (theme: Theme) => void;
}

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

export default function Navbar({ theme, onThemeChange }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setActiveHash(window.location.hash);
    const handleHashChange = () => setActiveHash(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  function renderThemeIcon(t: Theme) {
    if (t === 'light') return <FaSun className="inline-block" />;
    if (t === 'dark') return <FaMoon className="inline-block" />;
    return <FaAdjust className="inline-block" />;
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg border-b border-teal-700 dark:border-teal-600 transition-all duration-500 z-50"
    >
      <div className="max-w-full mx-auto flex items-center h-16 px-6 md:px-12">
        {/* Nombre elegante */}
        <div className="text-teal-700 dark:text-teal-400 font-black text-xl sm:text-2xl tracking-wide cursor-default select-none flex-shrink-0">
          David Pérez Rodríguez
        </div>

        <div className="flex-grow" />

        <div className="flex items-center space-x-12">
          <ul className="hidden md:flex space-x-10 text-gray-700 dark:text-gray-300 font-semibold text-sm sm:text-base">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  aria-current={activeHash === href ? 'page' : undefined}
                  className={`hover:text-teal-500 dark:hover:text-teal-400 transition-colors ${activeHash === href ? 'underline underline-offset-4 text-teal-600 dark:text-teal-300' : ''}`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="relative" ref={dropdownRef}>
            <button
              aria-label="Seleccionar tema"
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-teal-700 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300 transition-colors text-2xl focus:outline-none"
            >
              {renderThemeIcon(theme)}
            </button>

            {menuOpen && (
              <ul className="absolute right-0 mt-2 w-44 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-lg py-1 text-gray-900 dark:text-gray-100 z-50">
                <li>
                  <button
                    onClick={() => {
                      onThemeChange('light');
                      setMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 hover:bg-teal-100 dark:hover:bg-teal-700 flex items-center gap-2 ${theme === 'light' ? 'font-semibold' : ''}`}
                  >
                    <FaSun /> Claro
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      onThemeChange('dark');
                      setMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 hover:bg-teal-100 dark:hover:bg-teal-700 flex items-center gap-2 ${theme === 'dark' ? 'font-semibold' : ''}`}
                  >
                    <FaMoon /> Oscuro
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      onThemeChange('auto');
                      setMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 hover:bg-teal-100 dark:hover:bg-teal-700 flex items-center gap-2 ${theme === 'auto' ? 'font-semibold' : ''}`}
                  >
                    <FaAdjust /> Automático
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
