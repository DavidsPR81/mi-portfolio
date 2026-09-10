'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMoon, FaSun, FaAdjust, FaBars, FaTimes } from 'react-icons/fa';

type Theme = 'light' | 'dark' | 'auto';

interface NavbarProps {
  theme: Theme;
  onThemeChange: (theme: Theme) => void;
}

const navLinks = [
  { label: 'Inicio', href: '#home' },
  { label: 'Perfil', href: '#about' },
  { label: 'Trayectoria', href: '#experience' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contacto', href: '#contact' },
];

export default function Navbar({ theme, onThemeChange }: NavbarProps) {
  const [activeHash, setActiveHash] = useState('#home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveHash(`#${sections[i]}`);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cycleTheme = () => {
    const themes: Theme[] = ['light', 'dark', 'auto'];
    onThemeChange(themes[(themes.indexOf(theme) + 1) % themes.length]);
  };

  const themeIcon =
    theme === 'light' ? <FaSun /> : theme === 'dark' ? <FaMoon /> : <FaAdjust />;

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] pt-4 px-4">
      <div
        className={`max-w-6xl mx-auto flex items-center justify-between gap-4 rounded-full px-4 py-2.5 transition-all duration-500 ${
          isScrolled
            ? 'bg-elevated/80 backdrop-blur-2xl border border-line shadow-card'
            : 'bg-transparent'
        }`}
      >
        <a href="#home" className="flex items-center gap-2.5 pl-1" aria-label="Inicio">
          <span className="w-8 h-8 rounded-full bg-inverse text-on-inverse text-[11px] font-bold flex items-center justify-center">
            DP
          </span>
          <span className="hidden sm:block text-sm font-semibold tracking-tight">David Pérez</span>
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = activeHash === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                  className={`relative px-3.5 py-1.5 text-[13px] font-semibold rounded-full transition-colors ${
                    active ? 'text-ink' : 'text-mute hover:text-ink'
                  }`}
                >
                  {active ? (
                    <motion.span
                      layoutId="navPill"
                      className="absolute inset-0 rounded-full bg-elevated border border-line shadow-sm"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  ) : null}
                  <span className="relative z-10">{link.label}</span>
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center rounded-full bg-inverse text-on-inverse px-4 py-2 text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Contactar
          </a>
          <button
            type="button"
            onClick={cycleTheme}
            aria-label={`Tema: ${theme}`}
            className="w-9 h-9 rounded-full border border-line text-mute hover:text-ink flex items-center justify-center"
          >
            {themeIcon}
          </button>
          <button
            type="button"
            className="lg:hidden w-9 h-9 rounded-full bg-inverse text-on-inverse flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="lg:hidden max-w-6xl mx-auto mt-3 rounded-3xl bg-elevated border border-line p-4 shadow-card"
          >
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-sm font-medium text-center ${
                    activeHash === link.href ? 'bg-accent text-on-inverse' : 'text-mute bg-page'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </nav>
  );
}
