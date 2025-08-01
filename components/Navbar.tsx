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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Detectar sección activa
  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash || '#home');
    };

    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveHash(`#${sections[i]}`);
          break;
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Cerrar menú móvil al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // Prevenir scroll del body cuando el menú está abierto
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    // Smooth scroll to section
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getThemeIcon = () => {
    switch (theme) {
      case 'light': return <FaSun className="w-4 h-4" />;
      case 'dark': return <FaMoon className="w-4 h-4" />;
      case 'auto': return <FaAdjust className="w-4 h-4" />;
    }
  };

  const cycleTheme = () => {
    const themes: Theme[] = ['light', 'dark', 'auto'];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    onThemeChange(themes[nextIndex]);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo/Nombre */}
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold bg-gradient-to-r from-teal-600 to-cyan-500 dark:from-teal-400 dark:to-cyan-300 bg-clip-text text-transparent drop-shadow-sm">
                David Pérez Rodríguez
              </h1>
            </div>

            {/* Navegación Desktop */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navLinks.map(({ label, href }) => (
                  <a
                    key={href}
                    href={href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      activeHash === href
                        ? 'bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 shadow-sm'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-teal-50 dark:hover:bg-teal-900/20 hover:text-teal-600 dark:hover:text-teal-400'
                    }`}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* Controles de la derecha */}
            <div className="flex items-center space-x-4">
              {/* Toggle de tema */}
              <button
                onClick={cycleTheme}
                className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-teal-50 dark:hover:bg-teal-900/20 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900"
                aria-label="Cambiar tema"
              >
                {getThemeIcon()}
              </button>

              {/* Botón menú móvil */}
              <div className="md:hidden">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-teal-50 dark:hover:bg-teal-900/20 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900"
                  aria-label="Abrir menú"
                >
                  {mobileMenuOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Efecto de brillo en el navbar */}
        <div className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${
          mobileMenuOpen 
            ? 'bg-gradient-to-r from-teal-500/20 via-cyan-500/15 to-teal-500/20 dark:from-teal-400/15 dark:via-cyan-400/10 dark:to-teal-400/15 opacity-100'
            : 'bg-gradient-to-r from-teal-500/30 via-cyan-500/20 to-teal-500/30 dark:from-teal-400/20 dark:via-cyan-400/15 dark:to-teal-400/20 opacity-70'
        }`}>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" style={{animationDuration: '3s'}} />
        </div>
      </nav>

      {/* MENÚ MÓVIL PROFESIONAL - OVERLAY */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* Menú móvil */}
          <div 
            ref={mobileMenuRef}
            className="fixed top-16 left-0 right-0 z-50 md:hidden bg-white/98 dark:bg-gray-900/98 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50 shadow-2xl max-h-[calc(100vh-4rem)] overflow-y-auto"
          >
            {/* Header del menú */}
            <div className="px-6 py-4 border-b border-gray-200/30 dark:border-gray-700/30">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Navegación
                </h2>
                <div className="flex items-center space-x-2">
                  {/* Toggle de tema en móvil */}
                  <button
                    onClick={cycleTheme}
                    className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-teal-50 dark:hover:bg-teal-900/20 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-300"
                    aria-label="Cambiar tema"
                  >
                    {getThemeIcon()}
                  </button>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400 transition-all duration-300"
                    aria-label="Cerrar menú"
                  >
                    <FaTimes className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Lista de navegación */}
            <div className="px-4 py-2">
              <ul className="space-y-1">
                {navLinks.map(({ label, href }, index) => (
                  <li key={href}>
                    <button
                      onClick={() => handleNavClick(href)}
                      className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 ${
                        activeHash === href
                          ? 'bg-gradient-to-r from-teal-500/20 to-cyan-500/20 dark:from-teal-400/20 dark:to-cyan-400/20 text-teal-700 dark:text-teal-300 shadow-lg border border-teal-200/50 dark:border-teal-700/50'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-teal-50 hover:to-cyan-50 dark:hover:from-teal-900/10 dark:hover:to-cyan-900/10 hover:text-teal-600 dark:hover:text-teal-400 hover:shadow-md'
                      }`}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-base">{label}</span>
                        {activeHash === href && (
                          <div className="w-2 h-2 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full shadow-sm" />
                        )}
                      </div>
                      {activeHash === href && (
                        <div className="mt-1 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400 dark:from-teal-300 dark:to-cyan-300 rounded-full shadow-sm" />
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer del menú */}
            <div className="px-6 py-4 border-t border-gray-200/30 dark:border-gray-700/30 bg-gray-50/50 dark:bg-gray-800/50">
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                Portfolio Profesional • David Pérez Rodríguez
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
}
