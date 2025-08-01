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
  const [activeHash, setActiveHash] = useState('#home');
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const renderThemeIcon = (currentTheme: Theme) => {
    switch (currentTheme) {
      case 'light':
        return <FaSun className="transition-transform duration-300 hover:rotate-180" />;
      case 'dark':
        return <FaMoon className="transition-transform duration-300 hover:-rotate-12" />;
      case 'auto':
        return <FaAdjust className="transition-transform duration-300 hover:rotate-180" />;
      default:
        return <FaSun className="transition-transform duration-300 hover:rotate-180" />;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleHashChange = () => {
      setActiveHash(window.location.hash || '#home');
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setThemeMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);
    document.addEventListener('mousedown', handleClickOutside);
    handleHashChange();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-2xl shadow-teal-500/10 dark:shadow-teal-400/5 border-b border-teal-200/30 dark:border-teal-800/30'
            : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg shadow-teal-500/5 dark:shadow-teal-400/5'
        }`}
        role="navigation"
        aria-label="Navegación principal"
      >
        {/* Partículas flotantes sutiles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-2 left-10 w-1 h-1 bg-teal-400 rounded-full animate-ping opacity-40" style={{animationDuration: '4s'}} />
          <div className="absolute top-4 right-20 w-1 h-1 bg-cyan-400 rounded-full animate-pulse opacity-30" style={{animationDuration: '6s'}} />
          <div className="absolute bottom-3 left-1/3 w-1 h-1 bg-teal-300 rounded-full animate-bounce opacity-25" style={{animationDuration: '5s'}} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Nombre */}
            <div className="flex-shrink-0">
              <a
                href="#home"
                className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-cyan-500 dark:from-teal-400 dark:to-cyan-300 bg-clip-text text-transparent hover:from-teal-500 hover:to-cyan-400 dark:hover:from-teal-300 dark:hover:to-cyan-200 transition-all duration-300 relative group"
                aria-label="Ir al inicio"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-teal-600/10 to-cyan-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                <span className="relative z-10">David Pérez Rodríguez</span>
              </a>
            </div>

            {/* Navegación Desktop */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navLinks.map(({ label, href }) => (
                  <a
                    key={href}
                    href={href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative group ${
                      activeHash === href
                        ? 'text-teal-600 dark:text-teal-400 bg-teal-50/50 dark:bg-teal-900/30 shadow-md shadow-teal-500/20 dark:shadow-teal-400/10'
                        : 'text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-teal-50/30 dark:hover:bg-teal-900/20'
                    }`}
                    aria-current={activeHash === href ? 'page' : undefined}
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-teal-600/20 to-cyan-500/20 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                    <span className="relative z-10">{label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Navegación Móvil con Scroll Horizontal */}
            <div className="md:hidden flex-1 mx-2">
              <div 
                className="flex items-center gap-3 py-2 px-2"
                style={{
                  overflowX: 'auto',
                  overflowY: 'hidden',
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                  WebkitOverflowScrolling: 'touch'
                }}
              >
                {navLinks.map(({ label, href }) => (
                  <a
                    key={href}
                    href={href}
                    className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap border ${
                      activeHash === href 
                        ? 'bg-teal-600 text-white border-teal-600 shadow-lg' 
                        : 'bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600 hover:bg-teal-50 dark:hover:bg-teal-900/30 hover:border-teal-300 dark:hover:border-teal-500'
                    }`}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* Botón de tema */}
            <div className="relative" ref={dropdownRef}>
              <button
                aria-label="Seleccionar tema"
                aria-haspopup="true"
                aria-expanded={themeMenuOpen}
                aria-controls="theme-menu"
                onClick={() => setThemeMenuOpen(!themeMenuOpen)}
                className="text-teal-700 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300 transition-all duration-300 text-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900 rounded-md p-1 hover:bg-teal-50/50 dark:hover:bg-teal-900/30 hover:shadow-lg hover:shadow-teal-500/15 dark:hover:shadow-teal-400/10"
                id="theme-toggle-button"
                type="button"
              >
                <div className="relative">
                  {renderThemeIcon(theme)}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-teal-400/10 to-transparent animate-spin" style={{animationDuration: '4s'}} />
                </div>
              </button>

              {themeMenuOpen && (
                <div
                  id="theme-menu"
                  role="menu"
                  aria-labelledby="theme-toggle-button"
                  className="absolute right-0 mt-2 w-44 bg-white/98 dark:bg-gray-800/98 backdrop-blur-xl border border-teal-200/70 dark:border-teal-800/70 rounded-lg shadow-2xl shadow-teal-500/15 dark:shadow-teal-400/10 py-1 text-gray-900 dark:text-gray-100 z-50 select-none animate-fade-in-up"
                >
                  {[
                    { theme: 'light' as Theme, label: 'Claro', icon: <FaSun /> },
                    { theme: 'dark' as Theme, label: 'Oscuro', icon: <FaMoon /> },
                    { theme: 'auto' as Theme, label: 'Automático', icon: <FaAdjust /> },
                  ].map(({ theme: themeOption, label, icon }) => (
                    <button
                      key={themeOption}
                      role="menuitem"
                      onClick={() => {
                        onThemeChange(themeOption);
                        setThemeMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm transition-all duration-200 flex items-center gap-3 ${
                        theme === themeOption
                          ? 'bg-teal-50 dark:bg-teal-900/50 text-teal-600 dark:text-teal-400'
                          : 'hover:bg-teal-50/50 dark:hover:bg-teal-900/30 hover:text-teal-600 dark:hover:text-teal-400'
                      }`}
                    >
                      <span className="text-base">{icon}</span>
                      {label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Línea separadora mejorada */}
        <div className={`absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-700 ${
          isScrolled 
            ? 'bg-gradient-to-r from-teal-500/40 via-cyan-500/25 to-teal-500/40 dark:from-teal-400/25 dark:via-cyan-400/15 dark:to-teal-400/25 opacity-90 shadow-sm shadow-teal-500/20 dark:shadow-teal-400/15'
            : 'bg-gradient-to-r from-teal-500/30 via-cyan-500/20 to-teal-500/30 dark:from-teal-400/20 dark:via-cyan-400/15 dark:to-teal-400/20 opacity-70'
          }`}>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" style={{animationDuration: '3s'}} />
        </div>
      </nav>
    </>
  );
}