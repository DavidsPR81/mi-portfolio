'use client';

import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import TypedWords from './TypedWords';
import { FaDownload, FaGithub, FaLinkedin, FaRocket } from 'react-icons/fa';

export default function Hero() {
  // Estados para interactividad y animaciones
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  // Configuración inicial y listeners de eventos
  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* SEO y metadatos optimizados */}
      <Head>
        <title>David Pérez Rodríguez | Portfolio</title>
        <meta
          name="description"
          content="Desarrollador FullStack especializado en React, Firebase, Kotlin y automatización cloud."
        />
        <meta property="og:title" content="David Pérez Rodríguez | Portfolio" />
        <meta
          property="og:description"
          content="Desarrollador FullStack especializado en React, Firebase, Kotlin y automatización cloud."
        />
        <meta property="og:image" content="/fotocurriculum1-Photoroom.jpg" />
      </Head>

      {/* Sección principal del Hero - Espaciado optimizado para web y móvil */}
      <section
        id="home"
        className="w-full pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-28 lg:pb-24 px-4 sm:px-6 lg:px-8 bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300 relative overflow-hidden flex items-center justify-center"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {/* Gradiente radial interactivo que sigue al cursor */}
        <div 
          className="absolute inset-0 opacity-30 dark:opacity-20 pointer-events-none transition-opacity duration-500"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(13, 148, 136, 0.15), transparent 40%)`
          }}
        />

        {/* Elementos decorativos de fondo con animaciones */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          {/* Círculo principal animado */}
          <div className="absolute top-20 left-20 w-32 h-32 border-2 border-teal-500 rounded-full animate-pulse hover:scale-110 transition-transform duration-500" style={{animationDuration: '4s'}}>
            <div className="absolute inset-2 border border-teal-400 rounded-full animate-spin" style={{animationDuration: '15s'}} />
          </div>
          
          {/* Cuadrado rotativo */}
          <div className="absolute top-40 right-32 w-24 h-24 border-2 border-cyan-400 rotate-45 hover:rotate-90 transition-transform duration-700" style={{animation: 'spin 20s linear infinite'}}>
            <div className="absolute inset-2 bg-gradient-to-br from-cyan-400/20 to-teal-500/20 animate-pulse" />
          </div>
          
          {/* Círculo con efecto bounce */}
          <div className="absolute bottom-32 left-40 w-20 h-20 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full opacity-20 animate-bounce hover:opacity-40 transition-opacity duration-300" style={{animationDuration: '6s'}}>
            <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full animate-ping" style={{animationDuration: '3s'}} />
          </div>
          
          {/* Rectángulo rotado */}
          <div className="absolute bottom-20 right-20 w-16 h-16 border-2 border-teal-400 rounded-lg rotate-12 animate-pulse hover:rotate-45 transition-transform duration-500" style={{animationDuration: '3s'}}>
            <div className="absolute inset-1 border border-teal-300 rounded-md animate-pulse" style={{animationDuration: '2s'}} />
          </div>
          
          {/* Elementos decorativos adicionales */}
          <div className="absolute top-1/2 left-10 w-6 h-6 bg-cyan-400 rounded-full animate-ping" style={{animationDuration: '5s'}}>
            <div className="absolute inset-0 bg-cyan-300 rounded-full animate-pulse" />
          </div>
          <div className="absolute top-1/3 right-10 w-8 h-8 border border-teal-500 rotate-45 animate-pulse hover:scale-125 transition-transform duration-400" style={{animationDuration: '7s'}}>
            <div className="absolute inset-1 border border-teal-400 rotate-45 animate-spin" style={{animationDuration: '12s'}} />
          </div>
          <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full animate-bounce" style={{animationDuration: '4.5s', animationDelay: '1s'}} />
          <div className="absolute bottom-1/4 right-1/3 w-12 h-12 border border-cyan-300 rounded-full animate-pulse" style={{animationDuration: '6s', animationDelay: '2s'}} />
        </div>

        {/* Contenedor principal con layout responsivo */}
        <div className={`flex flex-col lg:flex-row items-center justify-between max-w-[1400px] w-full z-10 gap-16 sm:gap-20 lg:gap-20 xl:gap-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* SECCIÓN DE TEXTO - Optimizada para legibilidad móvil */}
          <div className="flex-grow text-left max-w-[800px] order-2 lg:order-1 lg:pr-8 xl:pr-12">
            
            {/* Indicador de disponibilidad profesional */}
            <div
              className="flex items-center gap-3 text-green-500 dark:text-green-400 text-base sm:text-lg md:text-xl leading-relaxed mb-8 sm:mb-10 md:mb-6 select-none group hover:scale-105 transition-transform duration-300"
              aria-live="polite"
              aria-atomic="true"
            >
              <div className="relative">
                <span
                  className="inline-block w-3 h-3 rounded-full bg-green-500 dark:bg-green-400 group-hover:scale-125 transition-transform duration-300"
                  style={{ animation: 'subtlePulse 4s ease-in-out infinite' }}
                />
                <span className="absolute inset-0 w-3 h-3 rounded-full bg-green-400/30 animate-ping opacity-40" style={{animationDuration: '3s'}} />
              </div>
              <span className="group-hover:text-green-400 dark:group-hover:text-green-300 transition-colors duration-300">Abierto a nuevas oportunidades profesionales</span>
              <FaRocket className="text-sm animate-bounce" style={{animationDuration: '3s'}} />
            </div>

            {/* Título principal con efectos visuales */}
            <h1 className="text-5xl sm:text-7xl font-black mb-6 leading-tight tracking-tight group hover:scale-105 transition-transform duration-500 text-left">
              Hola, soy{' '}
              <span className="bg-gradient-to-r from-teal-600 to-cyan-500 dark:from-teal-400 dark:to-cyan-300 bg-clip-text text-transparent transition-all duration-300 hover:from-teal-500 hover:to-cyan-400 dark:hover:from-teal-300 dark:hover:to-cyan-200 relative">
                David Pérez
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-600/20 to-cyan-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </span>
            </h1>

            {/* Subtítulo con componente TypedWords */}
            <h2
              className="text-2xl sm:text-3xl font-medium text-gray-700 dark:text-gray-300 max-w-3xl relative text-left"
              style={{ marginTop: '24px', marginBottom: '24px' }}
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-teal-500/5 to-cyan-500/5 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-500" />
              <TypedWords />
            </h2>

            {/* Descripción profesional con efectos hover */}
            <div className="space-y-6 mb-12">
              <div className="text-xl leading-relaxed text-gray-700 dark:text-gray-300 text-left max-w-3xl mt-0 hover:text-gray-600 dark:hover:text-gray-200 transition-colors duration-300 relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-teal-50/50 to-cyan-50/50 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">Desarrollador orientado a crear soluciones digitales funcionales y centradas en el usuario, adaptándome rápidamente a nuevos entornos y tecnologías con mentalidad de mejora continua. Enfrento retos técnicos con visión estratégica y compromiso con la calidad.</span>
              </div>

              <div className="text-xl leading-relaxed text-gray-700 dark:text-gray-300 text-left max-w-3xl hover:text-gray-600 dark:hover:text-gray-200 transition-colors duration-300 relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-50/50 to-teal-50/50 dark:from-cyan-900/20 dark:to-teal-900/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">Trabajo proactivamente en equipos multidisciplinares para generar impacto real con proyectos escalables y orientados a objetivos claros.</span>
              </div>
            </div>

            {/* Botones de acción con efectos avanzados */}
            <div className="flex flex-wrap items-center gap-6 justify-start">
              {/* Botón de descarga de CV */}
              <a
                href="/curriculumagosto.pdf"
                download
                aria-label="Descargar currículum en PDF"
                className="relative flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 group hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/25 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <FaDownload className="relative z-10 group-hover:animate-bounce" /> 
                <span className="relative z-10">Descargar CV</span>
              </a>

              {/* Enlaces sociales con efectos interactivos */}
              <a
                href="https://github.com/DavidsPR81"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="relative text-gray-700 dark:text-gray-200 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-300 text-3xl transform hover:scale-125 hover:rotate-12 group"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-gray-500/10 to-teal-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <FaGithub className="relative z-10 group-hover:drop-shadow-lg" />
              </a>

              <a
                href="https://linkedin.com/in/perezrodriguezdavid"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="relative text-gray-700 dark:text-gray-200 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-300 text-3xl transform hover:scale-125 hover:-rotate-12 group"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 to-teal-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <FaLinkedin className="relative z-10 group-hover:drop-shadow-lg" />
              </a>
            </div>
          </div>

          {/* SECCIÓN DE FOTO - Optimizada para espaciado móvil profesional */}
          <div className="relative flex-shrink-0 order-1 lg:order-2 lg:ml-8 xl:ml-12 group mb-20 sm:mb-24 md:mb-28 lg:mb-0 mt-12 sm:mt-16 md:mt-20 lg:mt-0">
            
            {/* Efectos de fondo decorativos */}
            <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-r from-teal-600 to-cyan-500 rounded-full blur-2xl opacity-20 group-hover:opacity-40 animate-pulse transition-opacity duration-500" style={{animationDuration: '4s'}} />
            <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full blur-lg opacity-30 group-hover:opacity-50 animate-pulse transition-opacity duration-500" style={{animationDuration: '3s'}} />
            
            {/* Contenedor de la imagen principal */}
            <div
              className="relative rounded-full overflow-hidden shadow-2xl transition-all duration-500 hover:scale-110 hover:rotate-3 group-hover:shadow-teal-500/25"
              style={{
                width: 'clamp(200px, 32vw, 320px)',
                height: 'clamp(200px, 32vw, 320px)',
                border: '3px solid transparent',
                background: 'linear-gradient(45deg, #0d9488, #06b6d4) padding-box, linear-gradient(45deg, #0d9488, #06b6d4) border-box',
                boxShadow: '0 15px 35px rgba(13, 148, 136, 0.25), 0 0 0 1px rgba(255,255,255,0.1), inset 0 1px 0 rgba(255,255,255,0.2)',
              }}
            >
              {/* Overlay con efecto de brillo */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <Image
                src="/fotocurriculum1-Photoroom.jpg"
                alt="Foto David Pérez Rodríguez"
                fill
                sizes="(max-width: 640px) 200px, (max-width: 768px) 260px, 320px"
                style={{ objectFit: 'cover', objectPosition: 'top', borderRadius: '9999px' }}
                className="group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Badges profesionales con espaciado optimizado para móvil */}
            {/* Badge Full Stack - Posición superior izquierda AÚN MÁS ABAJO */}
            <div className="absolute top-0 -left-6 sm:top-2 sm:-left-8 md:top-4 md:-left-10 lg:top-6 lg:-left-12 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg animate-float hover:scale-125 transition-transform duration-300 group cursor-pointer" style={{animationDelay: '0s'}}>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full animate-ping opacity-20" />
              <span className="text-white font-bold text-[9px] sm:text-[10px] md:text-xs relative z-10 group-hover:scale-110 transition-transform duration-300 text-center leading-tight">Full<br/>Stack</span>
            </div>
            
            {/* Badge Cybersecurity - Posición superior derecha SIN CAMBIOS */}
            <div className="absolute -top-8 right-2 sm:-top-10 sm:right-4 md:-top-12 md:right-6 lg:-top-14 lg:right-8 w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-float hover:scale-125 transition-transform duration-300 group cursor-pointer" style={{animationDelay: '1s'}}>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full animate-ping opacity-20" />
              <span className="text-white font-bold text-[9px] sm:text-[10px] md:text-xs relative z-10 group-hover:scale-110 transition-transform duration-300 text-center leading-tight">Ciber<br/>Security</span>
            </div>
            
            {/* Badge Data Analyst - Posición inferior centrada SIN CAMBIOS */}
            <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 sm:-bottom-18 md:-bottom-20 lg:-bottom-22 w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg animate-float hover:scale-125 transition-transform duration-300 group cursor-pointer" style={{animationDelay: '2s'}}>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full animate-ping opacity-20" />
              <span className="text-white font-bold text-[9px] sm:text-[10px] md:text-xs relative z-10 group-hover:scale-110 transition-transform duration-300 text-center leading-tight">Data<br/>Analyst</span>
            </div>
            
            {/* Partículas decorativas flotantes */}
            <div className="absolute top-1/4 -left-12 w-2 h-2 bg-teal-400 rounded-full animate-bounce opacity-60" style={{animationDuration: '3s', animationDelay: '0.5s'}} />
            <div className="absolute top-3/4 -right-12 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce opacity-60" style={{animationDuration: '4s', animationDelay: '1.5s'}} />
            <div className="absolute bottom-1/4 -left-8 w-1 h-1 bg-emerald-400 rounded-full animate-bounce opacity-60" style={{animationDuration: '3.5s', animationDelay: '2.5s'}} />
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes subtlePulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.05);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(5deg);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
