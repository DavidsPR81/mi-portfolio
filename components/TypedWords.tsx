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

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!deleting && charIndex < words[wordIndex].length) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + words[wordIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 90); // escritura algo rápida pero clara
    } else if (!deleting && charIndex === words[wordIndex].length) {
      timeout = setTimeout(() => setDeleting(true), 2200); // pausa para lectura
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, 40); // borrado rápido pero legible
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex]);

  return (
    <span
      className="text-teal-600 dark:text-teal-400 font-semibold transition-all duration-300 inline-block min-h-[1.5rem]"
      aria-live="polite"
    >
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  );
}
