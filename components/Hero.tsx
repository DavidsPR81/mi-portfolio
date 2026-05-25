'use client';

import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import TypedWords from './TypedWords';
import { FaDownload, FaGithub, FaLinkedin, FaCode, FaMobileAlt, FaCloud } from 'react-icons/fa';

/**
 * Hero Component - Versión 2026 Pro (Ultra-Responsive)
 * Corregido problema de carga de imagen en móviles y errores de hidratación.
 */
export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 80]);
  const opacityValue = useTransform(scrollY, [0, 200], [1, 0]);
  const responsiveOpacity = useTransform(opacityValue, (v) => isLargeScreen ? v : 1);

  useEffect(() => {
    setMounted(true);
    // Detectar tamaño de pantalla para efectos de parallax (solo desktop)
    const handleResize = () => setIsLargeScreen(window.innerWidth > 1024);
    handleResize();
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const floatingTags = [
    { icon: <FaCode />, pos: 'top-[10%] -left-[8%] sm:top-12 sm:-left-10', color: 'from-teal-400 to-emerald-500', delay: 0 },
    { icon: <FaMobileAlt />, pos: 'bottom-[20%] -right-[6%] sm:bottom-28 sm:-right-8', color: 'from-cyan-400 to-blue-500', delay: 1 },
    { icon: <FaCloud />, pos: 'top-[30%] -right-[8%] sm:top-1/4 sm:-right-12', color: 'from-emerald-400 to-teal-500', delay: 2 }
  ];

  return (
    <>
      <Head>
        <title>David Pérez Rodríguez | Full Stack Developer Junior</title>
      </Head>

      <section
        id="home"
        className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-[#030712] pt-28 pb-16 lg:pt-24 lg:pb-12"
      >
        {/* Background Mesh - Solo en Desktop para maximizar compatibilidad y rendimiento móvil */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden hidden lg:block">
          <motion.div
            {...({ className: "absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-teal-500/10 dark:bg-teal-500/5 blur-[120px] rounded-full" } as any)}
            animate={isLargeScreen ? {
              x: mousePosition.x / 45,
              y: mousePosition.y / 45,
            } : {}}
          />
          <motion.div
            {...({ className: "absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-500/10 dark:bg-cyan-500/5 blur-[120px] rounded-full" } as any)}
            animate={isLargeScreen ? {
              x: -mousePosition.x / 45,
              y: -mousePosition.y / 45,
            } : {}}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

            {/* Columna Izquierda: Texto */}
            <motion.div
              {...({ className: "flex-[1.2] text-left order-2 lg:order-1" } as any)}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{
                y: isLargeScreen ? y1 : 0,
                opacity: responsiveOpacity
              }}
            >
              <motion.h1
                {...({ className: "text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight dark:text-white mb-2 tracking-tight" } as any)}
              >
                Hola, soy <br />
                <span className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-gradient block mt-1">David Pérez.</span>
              </motion.h1>

              <div className="h-10 sm:h-12 lg:h-14 mb-6 overflow-hidden">
                <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold text-gray-500 dark:text-gray-400 italic">
                  <TypedWords />
                </h2>
              </div>

              <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-lg mb-10 leading-relaxed font-medium">
                Desarrollador <span className="text-gray-900 dark:text-white font-bold">Full Stack Junior</span>.
                Transformando ideas en soluciones digitales <span className="text-teal-500 font-bold">Web & Mobile</span> con tecnología de vanguardia.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <motion.a
                  href="/curriculummayo1.pdf"
                  download
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  {...({ className: "w-full sm:w-auto px-10 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl font-black uppercase tracking-widest text-[11px] shadow-2xl hover:shadow-teal-500/20 transition-all flex items-center gap-3 justify-center" } as any)}
                >
                  <FaDownload /> Descargar CV
                </motion.a>

                <div className="flex items-center gap-4 w-full sm:w-auto justify-center sm:justify-start">
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

            {/* Columna Derecha: Imagen - CORREGIDA PARA MÓVIL */}
            <motion.div
              {...({ className: "flex-1 relative order-1 lg:order-2 mb-12 lg:mb-0" } as any)}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              {/* Contenedor con aspecto forzado para asegurar que Image fill funcione siempre */}
              <div className="relative w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[420px] mx-auto aspect-square shadow-2xl rounded-[3rem]">

                {/* Smart Floating Tags - Modernized (Icons Only) */}
                {floatingTags.map((tag, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -15, 0],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      delay: tag.delay,
                      ease: "easeInOut"
                    }}
                    whileHover={{ scale: 1.1, rotate: 0 }}
                    {...({ className: `absolute ${tag.pos} z-30 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br ${tag.color} text-white shadow-[0_10px_30px_-5px_rgba(0,0,0,0.3)] backdrop-blur-md border border-white/20` } as any)}
                  >
                    <span className="text-xl sm:text-2xl">{tag.icon}</span>
                  </motion.div>
                ))}

                {/* Badge de Disponibilidad */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  {...({ className: "absolute -bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white dark:bg-gray-800 border-2 border-teal-500 text-teal-600 dark:text-teal-400 text-[8px] sm:text-[9px] font-black uppercase tracking-[0.2em] shadow-2xl whitespace-nowrap" } as any)}
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                  </span>
                  Disponible para proyectos
                </motion.div>

                {/* Contenedor de la Imagen con z-index alto y overflow hidden */}
                <div className="relative z-20 w-full h-full rounded-[2.5rem] sm:rounded-[3rem] overflow-hidden border-[6px] sm:border-[8px] border-white dark:border-gray-800 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] bg-gray-200 dark:bg-gray-800">
                  <Image
                    src="/fotocurriculum1-Photoroom.jpg"
                    alt="David Pérez"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                    priority
                    quality={100}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent"></div>
                </div>

                {/* Decoraciones de fondo */}
                <div className="absolute inset-0 z-0 transform translate-x-4 translate-y-4 sm:translate-x-6 sm:translate-y-6 border-2 border-teal-500/20 rounded-[2.5rem] sm:rounded-[3rem]"></div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          {...({ className: "absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden sm:flex" } as any)}
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
