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
        className="w-full min-h-screen flex items-center justify-center px-6 sm:px-12 bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300 relative"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {/* Fondo desenfocado decorativo */}
        <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
          <div className="absolute -top-32 -left-32 w-[40rem] h-[40rem] bg-teal-400 opacity-10 rounded-full blur-[120px]" />
        </div>

        <div className="flex flex-col-reverse md:flex-row items-center gap-12 max-w-7xl w-full z-10">
          {/* TEXTO */}
          <div className="flex-grow text-center md:text-left animate-fade-in-up pr-6">
            {/* Indicador "Abierto a nuevas oportunidades" */}
            <div
              className="flex items-center gap-3 text-green-600 dark:text-green-400 text-sm md:text-base font-semibold mb-10 mt-6 select-none"
              aria-live="polite"
              aria-atomic="true"
            >
              <span
                className="inline-block w-2 h-2 rounded-full bg-green-500"
                style={{
                  animation: 'pulseOpacity 2.5s ease-in-out infinite',
                }}
              />
              <span>Abierto a nuevas oportunidades profesionales</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 leading-tight tracking-tight">
              Hola, soy{' '}
              <span className="text-teal-600 dark:text-teal-400 transition-colors duration-300">
                David Pérez Rodríguez
              </span>
            </h1>

            <h2 className="text-2xl sm:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-6 whitespace-normal max-w-xl mx-auto md:mx-0">
              <TypedWords />
            </h2>

            <p className="text-xl leading-loose text-gray-700 dark:text-gray-300 text-justify max-w-2xl mx-auto md:mx-0 mb-8">
              Desarrollador FullStack con experiencia práctica en React, Firebase y Kotlin. Especializado en el desarrollo de aplicaciones web y móviles modernas, integración de APIs y automatización de procesos con Google Cloud. Enfocado en crear soluciones eficientes, escalables y visualmente atractivas. Apasionado por el análisis de datos, la ciberseguridad y el entorno cloud.
            </p>

            <div className="flex flex-wrap items-center gap-6 justify-center md:justify-start">
              <a
                href="/curriculumDavidJunioATS3.pdf"
                download
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
          <div className="w-[384px] flex justify-end animate-fade-in-up">
            <div
              className="relative rounded-full overflow-hidden shadow-lg"
              style={{
                width: '24rem',
                height: '24rem',
                border: '6px solid #0d9488',
                boxShadow: '0 8px 20px rgba(13, 148, 136, 0.4)',
              }}
            >
              <Image
                src="/fotocurriculum1-Photoroom.jpg"
                alt="Foto David Pérez"
                width={384}
                height={384}
                className="object-cover object-top rounded-full"
                priority
              />
            </div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-teal-500 text-2xl">
          ↓
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
      `}</style>
    </>
  );
}
