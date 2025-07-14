'use client';

import React from 'react';
import Image from 'next/image';
import TypedWords from './TypedWords';
import { FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Hero() {
  return (
    <section
      id="home"
      className="w-full min-h-screen flex items-center justify-center px-6 sm:px-12 bg-white text-gray-900"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <style jsx>{`
        @keyframes pulseGreenText {
          0%, 100% {
            color: #16a34a; /* verde normal */
          }
          50% {
            color: #22c55e; /* verde brillante */
          }
        }

        @keyframes pulseGreenDot {
          0%, 100% {
            background-color: #16a34a;
          }
          50% {
            background-color: #22c55e;
          }
        }

        .pulse-green-text {
          animation: pulseGreenText 1.5s ease-in-out infinite;
          color: #16a34a;
          font-weight: 600;
          font-size: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          position: absolute;
          top: 8rem;
          right: 6rem;
          z-index: 10;
          user-select: none;
          transition: color 0.3s ease;
        }

        .pulse-green-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: #16a34a;
          animation: pulseGreenDot 1.5s ease-in-out infinite;
          transition: background-color 0.3s ease;
        }
      `}</style>

      {/* Indicador "Disponible..." arriba derecha */}
      <div className="pulse-green-text" aria-live="polite" aria-atomic="true">
        <div className="pulse-green-dot"></div>
        Disponible para nuevos retos profesionales
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center gap-20 max-w-7xl w-full">
        {/* TEXTO */}
        <div className="flex-1 text-center md:text-left animate-fade-in-up">
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 leading-tight tracking-tight">
            Hola, soy <span className="text-teal-600">David Pérez Rodríguez</span>
          </h1>

          <h2
            className="text-2xl sm:text-3xl font-medium text-gray-700 mb-6 whitespace-normal"
            style={{ maxWidth: '600px' }}
          >
            Soy <TypedWords />
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mb-8 leading-relaxed text-justify">
            Desarrollador FullStack con experiencia práctica en React, Firebase y Kotlin. Especializado en el desarrollo de aplicaciones web y móviles modernas, integración de APIs y automatización de procesos con Google Cloud. Enfocado en crear soluciones eficientes, escalables y visualmente atractivas. Apasionado por el análisis de datos, la ciberseguridad y el entorno cloud.
          </p>

          {/* Botones y enlaces */}
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
              className="text-gray-700 hover:text-teal-600 transition duration-300 text-3xl"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/perezrodriguezdavid"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-700 hover:text-teal-600 transition duration-300 text-3xl"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* FOTO REDONDA MÁS GRANDE Y PEGADA A LA DERECHA */}
        <div className="flex-1 flex justify-end animate-fade-in-up">
          <div
            className="relative w-96 h-96 sm:w-[28rem] sm:h-[28rem] rounded-full overflow-hidden shadow-lg"
            style={{
              border: '6px solid #0d9488', // teal oscuro para el borde
              boxShadow: '0 8px 20px rgba(13, 148, 136, 0.4)', // sombra suave teal
            }}
          >
            <Image
              src="/fotocurriculum1-Photoroom.jpg"
              alt="Foto David Pérez"
              fill
              className="object-cover object-top rounded-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
