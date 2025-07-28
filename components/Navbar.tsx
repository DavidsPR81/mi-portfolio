'use client';

import React, { useRef, useEffect, useState } from 'react';
import { FaMoon, FaSun, FaAdjust, FaBars, FaTimes } from 'react-icons/fa';

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
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setActiveHash(window.location.hash || '#home');
    const handleHashChange = () => setActiveHash(window.location.hash || '#home');
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Close dropdown if click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setThemeMenuOpen(false);
      }
    }
    if (themeMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [themeMenuOpen]);

  // Close mobile menu if click outside or screen resized to desktop
  useEffect(() => {
    function handleClickOutsideMobile(event: MouseEvent) {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        !(event.target as HTMLElement).closest('#mobile-menu-button')
      ) {
        setMobileMenuOpen(false);
      }
    }

    function handleResize() {
      if (window.matchMedia('(min-width: 768px)').matches) {
        setMobileMenuOpen(false);
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutsideMobile);
      window.addEventListener('resize', handleResize);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideMobile);
      window.removeEventListener('resize', handleResize);
    };
  }, [mobileMenuOpen]);

  function renderThemeIcon(t: Theme) {
    if (t === 'light') return <FaSun className="inline-block" />;
    if (t === 'dark') return <FaMoon className="inline-block" />;
    return <FaAdjust className="inline-block" />;
  }

  return (
    <nav
      className="
        fixed top-0 left-0 right-0
        bg-gradient-to-r from-white/80 via-white/75 to-white/70 dark:from-gray-900/90 dark:via-gray-900/85 dark:to-gray-900/80
        backdrop-blur-md
        shadow-lg border-b border-teal-700 dark:border-teal-600
        transition-all duration-500
        z-50
        animate-fade-in
      "
      role="navigation"
      aria-label="Barra de navegación principal"
    >
      <div className="max-w-full mx-auto flex items-center h-16 md:h-20 px-4 md:px-8">
        {/* Nombre optimizado para móvil y desktop */}
        <div
          className="font-black text-[1.2rem] sm:text-[1.45rem] md:text-[1.7rem] tracking-wide cursor-default select-none flex-shrink-0 pl-2 md:pl-8 pr-4"
          style={{ userSelect: 'none' }}
        >
          <span className="gradient-name">David Pérez Rodríguez</span>
        </div>

        <div className="flex-grow" />

        {/* Componentes con espaciado optimizado */}
        <div className="hidden md:flex items-center space-x-6 pr-4 md:pr-8">
          <ul className="flex space-x-6 text-gray-700 dark:text-gray-300 font-semibold text-[1rem] sm:text-[1.1rem] select-none">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  aria-current={activeHash === href ? 'page' : undefined}
                  className={`relative py-1 px-1 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-300 group focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900 rounded ${
                    activeHash === href
                      ? 'underline underline-offset-4 text-teal-600 dark:text-teal-300 font-semibold'
                      : ''
                  }`}
                >
                  {label}
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-teal-500 dark:bg-teal-300 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-[2px] rounded-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* Botón de tema */}
          <div className="relative" ref={dropdownRef}>
            <button
              aria-label="Seleccionar tema"
              aria-haspopup="true"
              aria-expanded={themeMenuOpen}
              aria-controls="theme-menu"
              onClick={() => setThemeMenuOpen(!themeMenuOpen)}
              className="text-teal-700 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300 transition-colors text-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900 rounded-md p-1"
              id="theme-toggle-button"
              type="button"
            >
              {renderThemeIcon(theme)}
            </button>

            {themeMenuOpen && (
              <ul
                id="theme-menu"
                className="absolute right-0 mt-2 w-44 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-lg py-1 text-gray-900 dark:text-gray-100 z-50 select-none
                animate-fade-slide"
                role="menu"
                aria-labelledby="theme-toggle-button"
              >
                <li>
                  <button
                    onClick={() => {
                      onThemeChange('light');
                      setThemeMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 hover:bg-teal-100 dark:hover:bg-teal-700 flex items-center gap-2 ${
                      theme === 'light' ? 'font-semibold' : ''
                    }`}
                    role="menuitem"
                    type="button"
                  >
                    <FaSun /> Claro
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      onThemeChange('dark');
                      setThemeMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 hover:bg-teal-100 dark:hover:bg-teal-700 flex items-center gap-2 ${
                      theme === 'dark' ? 'font-semibold' : ''
                    }`}
                    role="menuitem"
                    type="button"
                  >
                    <FaMoon /> Oscuro
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      onThemeChange('auto');
                      setThemeMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 hover:bg-teal-100 dark:hover:bg-teal-700 flex items-center gap-2 ${
                      theme === 'auto' ? 'font-semibold' : ''
                    }`}
                    role="menuitem"
                    type="button"
                  >
                    <FaAdjust /> Automático
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          id="mobile-menu-button"
          aria-label={mobileMenuOpen ? 'Cerrar menú móvil' : 'Abrir menú móvil'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          className="md:hidden ml-2 text-teal-700 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300 transition-colors text-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900 rounded-md p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          type="button"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          ref={mobileMenuRef}
          className="md:hidden bg-white dark:bg-gray-900 border-t border-teal-700 dark:border-teal-600 shadow-lg"
        >
          <ul className="flex flex-col space-y-1 py-3 px-4 text-gray-700 dark:text-gray-300 font-semibold text-base select-none">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  aria-current={activeHash === href ? 'page' : undefined}
                  className={`block py-2 px-3 rounded hover:bg-teal-100 dark:hover:bg-teal-700 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900 ${
                    activeHash === href ? 'bg-teal-200 dark:bg-teal-700 font-semibold' : ''
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="border-t border-teal-700 dark:border-teal-600 px-4 py-3 flex items-center gap-3">
            <span className="font-semibold text-teal-600 dark:text-teal-300">
              Tema:
            </span>
            <button
              onClick={() => {
                onThemeChange('light');
                setMobileMenuOpen(false);
              }}
              className={`px-3 py-1 rounded hover:bg-teal-100 dark:hover:bg-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900 ${
                theme === 'light' ? 'font-semibold underline' : ''
              }`}
              type="button"
            >
              Claro
            </button>
            <button
              onClick={() => {
                onThemeChange('dark');
                setMobileMenuOpen(false);
              }}
              className={`px-3 py-1 rounded hover:bg-teal-100 dark:hover:bg-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900 ${
                theme === 'dark' ? 'font-semibold underline' : ''
              }`}
              type="button"
            >
              Oscuro
            </button>
            <button
              onClick={() => {
                onThemeChange('auto');
                setMobileMenuOpen(false);
              }}
              className={`px-3 py-1 rounded hover:bg-teal-100 dark:hover:bg-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900 ${
                theme === 'auto' ? 'font-semibold underline' : ''
              }`}
              type="button"
            >
              Automático
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        /* Animación gradiente texto */
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .gradient-name {
          background: linear-gradient(
            270deg,
            #0f766e 20%,
            #14b8a6 50%,
            #0f766e 80%
          );
          background-size: 200% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientShift 6s ease-in-out infinite;
          display: inline-block;
          position: relative;
        }

        /* Animación fade-in navbar */
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }

        /* Animación fade-slide dropdown */
        @keyframes fadeSlideDown {
          from {
            opacity: 0;
            transform: translateY(-6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-slide {
          animation: fadeSlideDown 0.25s ease forwards;
        }
      `}</style>
    </nav>
  );
}
