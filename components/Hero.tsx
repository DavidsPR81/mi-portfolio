'use client';

import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import TypedWords from './TypedWords';
import { FaDownload, FaGithub, FaLinkedin, FaCode, FaMobileAlt, FaCloud } from 'react-icons/fa';

/**
 * Hero Component - Versión 2026 Pro
 * Implementa animaciones de alto rendimiento con Framer Motion, 
 * diseño editorial con tipografía dinámica y efectos de mesh-gradient interactivos.
 */
export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Hooks para efectos de Scroll Parallax y Opacidad Dinámica
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 80]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);

  useEffect(() => {
    // Tracking del cursor para el gradiente de fondo interactivo
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Configuración de Smart Tags - Enfoque en Especialidades Clave
  const floatingTags = [
    { icon: <FaCode />, text: 'Full Stack', pos: 'top-10 -left-12', color: 'bg-teal-500', delay: 0 },
    { icon: <FaMobileAlt />, text: 'Web & Móvil', pos: 'bottom-24 -right-10', color: 'bg-cyan-500', delay: 1 },
    { icon: <FaCloud />, text: 'Nube & Automatización', pos: 'top-1/4 -right-20', color: 'bg-emerald-500', delay: 2 }
  ];

  return (
    <>
      <Head>
        <title>David Pérez Rodríguez | Full Stack Developer Junior</title>
      </Head>

      <section
        id="home"
        className="relative min-h-[85vh] w-full flex items-center justify-center overflow-hidden bg-white dark:bg-[#030712] pt-24 pb-12"
      >
        {/* Background Mesh */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <motion.div
            {...({ className: "absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-teal-500/10 dark:bg-teal-500/5 blur-[120px] rounded-full" } as any)}
            animate={{
              x: mousePosition.x / 45,
              y: mousePosition.y / 45,
            }}
          />
          <motion.div
            {...({ className: "absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-500/10 dark:bg-cyan-500/5 blur-[120px] rounded-full" } as any)}
            animate={{
              x: -mousePosition.x / 45,
              y: -mousePosition.y / 45,
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

            {/* Columna Izquierda: Texto */}
            <motion.div
              {...({ className: "flex-[1.2] text-left" } as any)}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ y: y1, opacity }}
            >
              <motion.h1
                {...({ className: "text-3xl sm:text-4xl lg:text-5xl font-black leading-tight dark:text-white mb-2 tracking-tight" } as any)}
              >
                Hola, soy <br />
                <span className="text-5xl sm:text-6xl lg:text-7xl text-gradient block mt-1">David Pérez.</span>
              </motion.h1>

              <div className="h-8 sm:h-10 mb-6 overflow-hidden">
                <h2 className="text-lg sm:text-2xl font-bold text-gray-500 dark:text-gray-400 italic">
                  <TypedWords />
                </h2>
              </div>

              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-lg mb-10 leading-relaxed font-medium">
                Desarrollador <span className="text-gray-900 dark:text-white font-bold">Full Stack Junior</span>.
                Transformando ideas en soluciones digitales <span className="text-teal-500 font-bold">Web & Mobile</span> con tecnología de vanguardia.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <motion.a
                  href="/curriculum.pdf"
                  download
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  {...({ className: "px-10 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl font-black uppercase tracking-widest text-[11px] shadow-2xl hover:shadow-teal-500/20 transition-all flex items-center gap-3 min-w-[200px] justify-center" } as any)}
                >
                  <FaDownload /> Descargar CV
                </motion.a>

                <div className="flex items-center gap-4">
                  {[
                    { icon: <FaGithub />, href: "https://github.com/DavidsPR81" },
                    { icon: <FaLinkedin />, href: "https://linkedin.com/in/perezrodriguezdavid" }
                  ].map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2, color: '#14b8a6' }}
                      {...({ className: "w-14 h-14 flex items-center justify-center rounded-2xl bg-gray-100 dark:bg-gray-800/50 text-gray-500 border border-gray-200/50 dark:border-gray-700/50 transition-colors shadow-sm" } as any)}
                    >
                      <span className="text-2xl">{social.icon}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Columna Derecha: Imagen y Badges */}
            <motion.div
              {...({ className: "flex-1 relative" } as any)}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="relative w-full aspect-square max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] mx-auto">

                {/* Smart Floating Tags - Textos Potentes */}
                {floatingTags.map((tag, i) => (
                  <motion.div
                    key={i}
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 5, repeat: Infinity, delay: tag.delay }}
                    {...({ className: `absolute ${tag.pos} z-30 flex items-center gap-3 px-4 py-2.5 rounded-xl ${tag.color} text-white shadow-2xl backdrop-blur-md` } as any)}
                  >
                    <span className="text-lg">{tag.icon}</span>
                    <span className="text-[10px] font-black uppercase tracking-widest whitespace-nowrap">{tag.text}</span>
                  </motion.div>
                ))}

                {/* Badge de Disponibilidad */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  {...({ className: "absolute -bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 px-5 py-2.5 rounded-full bg-white dark:bg-gray-800 border-2 border-teal-500 text-teal-600 dark:text-teal-400 text-[9px] font-black uppercase tracking-[0.2em] shadow-2xl whitespace-nowrap" } as any)}
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                  </span>
                  Disponible para proyectos
                </motion.div>

                {/* Main Image Container - Tamaño reducido */}
                <div className="relative z-10 w-full h-full rounded-[3rem] overflow-hidden border-[8px] border-white dark:border-gray-800 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)]">
                  <Image
                    src="/fotocurriculum1-Photoroom.jpg"
                    alt="David Pérez"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent"></div>
                </div>

                {/* Background Decorations */}
                <div className="absolute inset-0 z-0 transform translate-x-6 translate-y-6 border-2 border-teal-500/20 rounded-[3rem]"></div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          {...({ className: "absolute bottom-8 left-1/2 -translate-x-1/2 z-20" } as any)}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-5 h-8 rounded-full border-2 border-gray-400 dark:border-gray-600 flex justify-center p-1">
            <div className="w-1 h-1.5 bg-teal-500 rounded-full"></div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
