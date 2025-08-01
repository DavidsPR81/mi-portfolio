'use client';

import React, { useEffect, useState } from 'react';

const words = [
  'Desarrollador Multiplataforma experto en aplicaciones web y móviles',
  'Desarrollador FullStack con dominio en React, Kotlin y Firebase',
  'Especialista en Automatización y Python para entornos Cloud eficientes',
  'Analista de Datos y Ciberseguridad con visión estratégica',
  'Creador de soluciones escalables, prácticas y orientadas al usuario',
];

export default function TypedWords() {
  const [displayedText, setDisplayedText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!deleting && charIndex < words[wordIndex].length) {
      setIsTyping(true);
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + words[wordIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 90); // escritura algo rápida pero clara
    } else if (!deleting && charIndex === words[wordIndex].length) {
      setIsTyping(false);
      timeout = setTimeout(() => setDeleting(true), 2200); // pausa para lectura
    } else if (deleting && charIndex > 0) {
      setIsTyping(true);
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, 40); // borrado rápido pero legible
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      setIsTyping(false);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex]);

  return (
    <span className="relative inline-block">
      <span
        className="text-teal-600 dark:text-teal-400 font-semibold transition-all duration-300 inline-block min-h-[1.5rem] relative group"
        aria-live="polite"
      >
        {/* Efecto de brillo de fondo */}
        <span className="absolute inset-0 bg-gradient-to-r from-teal-500/10 via-cyan-500/20 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
        
        {/* Texto con efecto de gradiente mejorado */}
        <span className="relative z-10 bg-gradient-to-r from-teal-600 via-cyan-500 to-teal-600 dark:from-teal-400 dark:via-cyan-300 dark:to-teal-400 bg-clip-text text-transparent bg-size-200 animate-gradient">
          {displayedText}
        </span>
        
        {/* Cursor mejorado */}
        <span className={`inline-block w-0.5 h-6 ml-1 bg-gradient-to-b from-teal-500 to-cyan-500 transition-all duration-150 ${
          isTyping ? 'animate-pulse' : 'animate-blink'
        }`} />
      </span>
      
      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        @keyframes blink {
          0%, 50% {
            opacity: 1;
          }
          51%, 100% {
            opacity: 0;
          }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease-in-out infinite;
        }
        
        .animate-blink {
          animation: blink 1s infinite;
        }
        
        .bg-size-200 {
          background-size: 200% 200%;
        }
      `}</style>
    </span>
  );
}
