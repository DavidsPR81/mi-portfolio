'use client';

import React, { useRef, useEffect, useState } from 'react';
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
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

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
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    onThemeChange(themes[nextIndex]);
  };

  const getThemeIcon = () => {
    switch (theme) {
      case 'light': return <FaSun />;
      case 'dark': return <FaMoon />;
      case 'auto': return <FaAdjust />;
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${isScrolled ? 'py-4' : 'py-8'
      }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`relative flex items-center justify-between transition-all duration-500 p-2 rounded-[2rem] ${isScrolled
          ? 'bg-white/70 dark:bg-[#030712]/70 backdrop-blur-2xl border border-white/20 dark:border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
          : 'bg-transparent'
          }`}>

          {/* Logo Section */}
          <motion.div
            {...({ className: "flex items-center gap-3 pl-2 group cursor-pointer" } as any)}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 via-emerald-500 to-cyan-500 flex items-center justify-center text-white font-black text-xl shadow-[0_0_20px_rgba(20,184,166,0.3)] overflow-hidden">
              <motion.div
                {...({ className: "absolute inset-0 bg-white/20" } as any)}
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              <span className="relative z-10">D</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-sm font-black dark:text-white tracking-tighter uppercase">
                David<span className="text-teal-500">Pérez</span>
              </span>
              <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400 tracking-[0.2em] uppercase">
                Portfolio v2
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 bg-gray-50/50 dark:bg-gray-900/40 p-1 rounded-2xl border border-gray-100/50 dark:border-gray-800/50">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                {...({ className: "relative px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-colors duration-300" } as any)}
                onMouseEnter={() => setHoveredLink(link.href)}
                onMouseLeave={() => setHoveredLink(null)}
                animate={{
                  color: activeHash === link.href ? '#14b8a6' : '#6b7280'
                }}
              >
                <span className="relative z-10">{link.label}</span>
                {activeHash === link.href && (
                  <motion.div
                    layoutId="activeNav"
                    {...({ className: "absolute inset-0 bg-white dark:bg-gray-800 shadow-sm rounded-xl" } as any)}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {hoveredLink === link.href && activeHash !== link.href && (
                  <motion.div
                    layoutId="hoverNav"
                    {...({ className: "absolute inset-0 bg-gray-200/50 dark:bg-gray-800/30 rounded-xl" } as any)}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2 pr-2">
            <motion.button
              onClick={cycleTheme}
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              {...({ className: "w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50 dark:bg-gray-900 text-gray-500 dark:text-gray-400 border border-gray-100 dark:border-gray-800 hover:text-teal-500 transition-colors" } as any)}
            >
              {getThemeIcon()}
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              {...({ className: "md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-teal-500 text-white shadow-lg shadow-teal-500/20" } as any)}
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            {...({ className: "md:hidden absolute top-full left-6 right-6 mt-4 p-6 bg-white/90 dark:bg-[#030712]/90 backdrop-blur-2xl rounded-3xl border border-white/20 dark:border-white/5 shadow-2xl" } as any)}
          >
            <div className="grid grid-cols-2 gap-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setMobileMenuOpen(false)}
                  {...({
                    className: `p-4 rounded-2xl text-center text-xs font-black uppercase tracking-widest border transition-all ${activeHash === link.href
                        ? 'bg-teal-500 text-white border-teal-500 shadow-lg shadow-teal-500/20'
                        : 'bg-gray-50 dark:bg-gray-900 text-gray-500 border-gray-100 dark:border-gray-800'
                      }`
                  } as any)}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
