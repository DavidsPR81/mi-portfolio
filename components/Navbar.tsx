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
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const renderThemeIcon = (currentTheme: Theme) => {
    switch (currentTheme) {
      case 'light': return <FaSun className="animate-pulse" style={{animationDuration: '3s'}} />;
      case 'dark': return <FaMoon className="animate-pulse" style={{animationDuration: '3s'}} />;
      case 'auto': return <FaAdjust className="animate-pulse" style={{animationDuration: '3s'}} />;
      default: return <FaSun className="animate-pulse" style={{animationDuration: '3s'}} />;
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
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);
    document.addEventListener('mousedown', handleClickOutside);
    handleHashChange();
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Partículas flotantes sutiles */}
      <div className="fixed top-0 left-0 right-0 h-24 pointer-events-none z-40 overflow-hidden">
        <div className="absolute top-2 left-1/4 w-1 h-1 bg-teal-400/20 rounded-full animate-bounce" style={{animationDelay: '0s', animationDuration: '4s'}} />
        <div className="absolute top-4 right-1/3 w-0.5 h-0.5 bg-cyan-400/25 rounded-full animate-bounce" style={{animationDelay: '2s', animationDuration: '5s'}} />
        <div className="absolute top-6 left-2/3 w-1 h-1 bg-teal-300/20 rounded-full animate-bounce" style={{animationDelay: '1s', animationDuration: '4.5s'}} />
      </div>

      <nav 
        className={`fixed top-0 left-0 right-0 transition-all duration-700 ease-out z-50 animate-fade-in ${
          isScrolled 
            ? 'bg-gradient-to-r from-white/95 via-white/90 to-white/85 dark:from-gray-900/98 dark:via-gray-900/95 dark:to-gray-900/90 backdrop-blur-xl shadow-2xl shadow-teal-500/10 dark:shadow-teal-400/5'
            : 'bg-gradient-to-r from-white/90 via-white/85 to-white/80 dark:from-gray-900/95 dark:via-gray-900/90 dark:to-gray-900/85 backdrop-blur-md shadow-lg'
        } border-b border-teal-500/30 dark:border-teal-400/20`} 
        role="navigation" 
        aria-label="Barra de navegación principal"
      >
        <div className="max-w-full mx-auto flex items-center h-16 md:h-20 px-4 md:px-8 relative">
          {/* Efecto de brillo sutil en hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-500/3 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          {/* Nombre con efectos mejorados */}
          <div className="font-black text-[1.2rem] sm:text-[1.45rem] md:text-[1.7rem] tracking-wide cursor-default select-none flex-shrink-0 pl-2 md:pl-8 pr-4 relative group" style={{ userSelect: 'none' }}>
            <span className="relative bg-gradient-to-r from-teal-500 via-teal-600 to-cyan-600 dark:from-teal-300 dark:via-teal-400 dark:to-cyan-400 bg-clip-text text-transparent hover:from-teal-400 hover:via-teal-500 hover:to-cyan-500 dark:hover:from-teal-200 dark:hover:via-teal-300 dark:hover:to-cyan-300 transition-all duration-500">
              David Pérez Rodríguez
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1200 ease-out" />
            </span>
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-teal-500/20 dark:via-teal-400/20 to-transparent group-hover:via-teal-500/40 dark:group-hover:via-teal-400/30 transition-all duration-500" />
          </div>

          {/* Espaciador */}
          <div className="flex-1" />

          {/* Navegación Desktop */}
          <ul className="hidden md:flex items-center space-x-1 lg:space-x-3 text-gray-700 dark:text-gray-300 font-semibold text-sm lg:text-base select-none">
            {navLinks.map(({ label, href }, index) => (
              <li key={href}>
                <a
                  href={href}
                  aria-current={activeHash === href ? 'page' : undefined}
                  className={`group relative px-2 lg:px-3 py-2 rounded-md transition-all duration-300 hover:text-teal-600 dark:hover:text-teal-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900 hover:bg-teal-50/30 dark:hover:bg-teal-900/20 hover:shadow-md hover:shadow-teal-500/10 dark:hover:shadow-teal-400/5 ${
                    activeHash === href ? 'text-teal-600 dark:text-teal-400 font-bold bg-teal-50/50 dark:bg-teal-900/25 shadow-sm shadow-teal-500/15 dark:shadow-teal-400/10' : ''
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {label}
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-teal-400 to-cyan-400 dark:from-teal-300 dark:to-cyan-300 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-[2px] rounded-full shadow-sm shadow-teal-400/30" />
                  {activeHash === href && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-teal-400 to-cyan-400 dark:from-teal-300 dark:to-cyan-300 opacity-100 translate-y-[2px] rounded-full shadow-sm shadow-teal-400/30" />
                  )}
                  <div className="absolute inset-0 rounded-md bg-gradient-to-r from-teal-400/0 via-teal-400/5 to-teal-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </a>
              </li>
            ))}
          </ul>

          {/* Navegación Móvil con Scroll Horizontal CORREGIDO */}
          <div className="md:hidden flex-1 mx-2">
            <div className="flex items-center space-x-3 overflow-x-auto scrollbar-hide py-2 px-2" 
                 style={{
                   scrollbarWidth: 'none', 
                   msOverflowStyle: 'none',
                   WebkitOverflowScrolling: 'touch'
                 }}>
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
                ].map(({ theme: themeOption, label, icon }, index) => (
                  <button
                    key={themeOption}
                    role="menuitem"
                    onClick={() => {
                      onThemeChange(themeOption);
                      setThemeMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 hover:bg-teal-50/80 dark:hover:bg-teal-900/30 transition-all duration-200 flex items-center gap-3 rounded-md mx-1 hover:shadow-sm hover:shadow-teal-500/10 ${
                      theme === themeOption ? 'bg-teal-50/80 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 font-medium shadow-sm shadow-teal-500/15 dark:shadow-teal-400/10' : ''
                    }`}
                    style={{ animationDelay: `${index * 75}ms` }}
                  >
                    <span className="text-lg text-teal-600 dark:text-teal-400">{icon}</span>
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Botón móvil */}
          <button
            aria-label="Abrir menú de navegación"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden ml-2 text-teal-700 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300 transition-all duration-300 text-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900 rounded-md p-2 hover:bg-teal-50/50 dark:hover:bg-teal-900/30 hover:shadow-lg hover:shadow-teal-500/15 dark:hover:shadow-teal-400/10"
          >
            {mobileMenuOpen ? <FaTimes className="animate-pulse" /> : <FaBars />}
          </button>
        </div>

        {/* Línea separadora inferior */}
        <div className={`absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-700 ${
          isScrolled 
            ? 'bg-gradient-to-r from-teal-500/40 via-cyan-500/25 to-teal-500/40 dark:from-teal-400/25 dark:via-cyan-400/15 dark:to-teal-400/25 opacity-90 shadow-sm shadow-teal-500/20 dark:shadow-teal-400/15'
            : 'bg-gradient-to-r from-teal-500/30 via-cyan-500/20 to-teal-500/30 dark:from-teal-400/20 dark:via-cyan-400/15 dark:to-teal-400/20 opacity-70'
        }`}>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" style={{animationDuration: '3s'}} />
        </div>
      </nav>

      {/* Menú móvil */}
      {mobileMenuOpen && (
        <div ref={mobileMenuRef} className="md:hidden bg-white/98 dark:bg-gray-900/98 backdrop-blur-xl border-t border-teal-200/70 dark:border-teal-800/70 shadow-2xl shadow-teal-500/15 dark:shadow-teal-400/10 fixed top-16 md:top-20 left-0 right-0 z-40">
          <ul className="flex flex-col space-y-1 py-3 px-4 text-gray-700 dark:text-gray-300 font-semibold text-base select-none">
            {navLinks.map(({ label, href }, index) => (
              <li key={href}>
                <a
                  href={href}
                  aria-current={activeHash === href ? 'page' : undefined}
                  className={`block py-2 px-3 rounded hover:bg-teal-50/80 dark:hover:bg-teal-900/30 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900 hover:shadow-sm hover:shadow-teal-500/10 dark:hover:shadow-teal-400/5 ${
                    activeHash === href ? 'bg-teal-100/80 dark:bg-teal-800/30 text-teal-700 dark:text-teal-300 font-semibold shadow-sm shadow-teal-500/15 dark:shadow-teal-400/10' : ''
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-center">
                    <span className="relative">
                      {label}
                      {activeHash === href && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400 dark:from-teal-300 dark:to-cyan-300 shadow-sm shadow-teal-400/30"></span>
                      )}
                    </span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}