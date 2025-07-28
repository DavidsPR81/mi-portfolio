'use client';

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import TypedWords from './TypedWords';
import { FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Hero() {
  return (
    <>
      {/* SEO & Metadatos */}
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

      <section
        id="home"
        className="w-full min-h-screen flex items-center justify-center bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300 relative px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 overflow-hidden"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {/* Patrón geométrico de fondo */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border-2 border-teal-500 rounded-full animate-pulse" style={{animationDuration: '4s'}}></div>
          <div className="absolute top-40 right-32 w-24 h-24 border-2 border-cyan-400 rotate-45" style={{animation: 'spin 20s linear infinite'}}></div>
          <div className="absolute bottom-32 left-40 w-20 h-20 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full opacity-20 animate-bounce" style={{animationDuration: '6s'}}></div>
          <div className="absolute bottom-20 right-20 w-16 h-16 border-2 border-teal-400 rounded-lg rotate-12 animate-pulse" style={{animationDuration: '3s'}}></div>
          <div className="absolute top-1/2 left-10 w-6 h-6 bg-cyan-400 rounded-full animate-ping" style={{animationDuration: '5s'}}></div>
          <div className="absolute top-1/3 right-10 w-8 h-8 border border-teal-500 rotate-45 animate-pulse" style={{animationDuration: '7s'}}></div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between max-w-[1400px] w-full z-10 gap-12 md:gap-20">
          {/* TEXTO */}
          <div className="flex-grow text-left max-w-[900px] pr-4">
            {/* Indicador "Abierto a nuevas oportunidades" */}
            <div
              className="flex items-center gap-3 text-green-500 dark:text-green-400 text-lg md:text-xl leading-relaxed mb-6 select-none"
              aria-live="polite"
              aria-atomic="true"
            >
              <span
                className="inline-block w-3 h-3 rounded-full bg-green-500 dark:bg-green-400"
                style={{
                  animation: 'pulseOpacity 2.5s ease-in-out infinite',
                }}
              />
              <span>Abierto a nuevas oportunidades profesionales</span>
            </div>

           <h1 className="text-5xl sm:text-7xl font-black mb-6 leading-tight tracking-tight">
  Hola, soy{' '}
  <span className="bg-gradient-to-r from-teal-600 to-cyan-500 dark:from-teal-400 dark:to-cyan-300 bg-clip-text text-transparent transition-all duration-300">
    David Pérez
  </span>
</h1>

<h2
  className="text-2xl sm:text-3xl font-medium text-gray-700 dark:text-gray-300 max-w-3xl"
  style={{ marginTop: '24px', marginBottom: '24px' }}
>
  <TypedWords />
</h2>

<p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300 text-justify max-w-3xl mt-0 mb-8">
  Desarrollador orientado a crear soluciones digitales funcionales y centradas en el usuario, adaptándome rápidamente a nuevos entornos y tecnologías con mentalidad de mejora continua. Enfrento retos técnicos con visión estratégica y compromiso con la calidad.
</p>

<p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300 text-justify max-w-3xl mb-10">
  Trabajo proactivamente en equipos multidisciplinares para generar impacto real con proyectos escalables y orientados a objetivos claros.
</p>

{/* Métricas profesionales */}
<div className="flex flex-wrap gap-6 mb-12">
  <div className="text-center">
    <div className="text-3xl font-bold text-teal-600 dark:text-teal-400">3+</div>
    <div className="text-sm text-gray-600 dark:text-gray-400">Proyectos Técnicos</div>
  </div>
  <div className="text-center">
    <div className="text-3xl font-bold text-teal-600 dark:text-teal-400">2+</div>
    <div className="text-sm text-gray-600 dark:text-gray-400">Años en Desarrollo</div>
  </div>
  <div className="text-center">
    <div className="text-3xl font-bold text-teal-600 dark:text-teal-400">5+</div>
    <div className="text-sm text-gray-600 dark:text-gray-400">Tecnologías en Aprendizaje</div>
  </div>
</div>


            <div className="flex flex-wrap items-center gap-6 justify-start">
              <a
                href="/curriculumDavidJunioATS3.pdf"
                download
                aria-label="Descargar currículum en PDF"
                className="flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white font-semibold py-3 px-6 rounded-full transition duration-300"
              >
                <FaDownload /> Descargar CV
              </a>

              <a
                href="https://github.com/DavidsPR81"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-700 dark:text-gray-200 hover:text-teal-600 dark:hover:text-teal-400 transition duration-300 text-3xl transform hover:scale-110 hover:rotate-1"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/perezrodriguezdavid"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-700 dark:text-gray-200 hover:text-teal-600 dark:hover:text-teal-400 transition duration-300 text-3xl transform hover:scale-110 hover:-rotate-1"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* FOTO */}
          <div className="relative flex-shrink-0 ml-6">
            {/* Elemento decorativo de fondo */}
            <div className="absolute -inset-4 bg-gradient-to-r from-teal-600 to-cyan-500 rounded-full blur-lg opacity-30 animate-pulse"></div>
            
            <div
              className="relative rounded-full overflow-hidden shadow-2xl transition-all duration-500 hover:scale-105 hover:rotate-2"
              style={{
                width: '384px',
                height: '384px',
                border: '6px solid transparent',
                background: 'linear-gradient(45deg, #0d9488, #06b6d4) padding-box, linear-gradient(45deg, #0d9488, #06b6d4) border-box',
                boxShadow: '0 20px 40px rgba(13, 148, 136, 0.4), 0 0 0 1px rgba(255,255,255,0.1)',
              }}
            >
              <Image
                src="/fotocurriculum1-Photoroom.jpg"
                alt="Foto David Pérez Rodríguez"
                fill
                sizes="(max-width: 768px) 80vw, 384px"
                style={{ objectFit: 'cover', objectPosition: 'top', borderRadius: '9999px' }}
              />
            </div>
            
            {/* Iconos de tecnologías flotantes - Solo los 3 más importantes */}
            <div className="absolute -top-6 -left-6 w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center shadow-lg animate-float" style={{animationDelay: '0s'}}>
              <span className="text-white font-bold text-sm">React</span>
            </div>
            <div className="absolute -top-6 -right-6 w-14 h-14 bg-emerald-600 rounded-full flex items-center justify-center shadow-lg animate-float" style={{animationDelay: '1s'}}>
              <span className="text-white font-bold text-sm">Python</span>
            </div>
            <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center shadow-lg animate-float" style={{animationDelay: '2s'}}>
              <span className="text-white font-bold text-sm">Kotlin</span>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes pulseOpacity {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.4;
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
