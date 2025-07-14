'use client';

import React from 'react';

const experiences = [
  {
    role: 'Colaborador en Desarrollo de Software',
    company: 'FotoGo',
    date: 'jun. 2025 – actualidad',
    desc: [
      'Participación activa en el desarrollo de la app FotoGo (versión móvil/web con React Native + Expo Go).',
      'Implementación de funcionalidades tanto en frontend como en backend.',
      'Automatización de procesos con Google Cloud Functions (Node.js).',
      'Configuración y administración avanzada de Firebase (Firestore, Authentication, Cloud Functions, etc.).',
      'Apoyo en el diseño UI/UX y gestión de la lógica del ranking semanal y recompensas.',
      'Integración de lógica de likes, comentarios, monedas y banners dinámicos en tiempo real.',
    ],
  },
  {
    role: 'Desarrollador de Aplicaciones',
    company: 'Ayuntamiento de Rota',
    date: '2025, 383 h',
    desc: [
      'Desarrollo de app Android para intranet municipal con mensajería interna.',
      'Backend y frontend con Kotlin y PHP; base de datos Firebase.',
      'Integración de APIs RESTful y enfoque UX/UI.',
    ],
  },
  {
    role: 'Jefe de Departamento',
    company: 'Mediamarkt Puerto Real',
    date: '2007–2024',
    desc: [
      'Gestión de equipos y atención al cliente en entorno retail.',
      'Estrategias comerciales, control de stock y cumplimiento de KPIs.',
      'Análisis de datos para optimización de procesos.',
    ],
  },
  {
    role: 'Experiencia previa',
    company: 'Varios puestos técnicos',
    date: '2004–2007',
    desc: [
      'Instalador electrónico, técnico de mantenimiento y mozo de almacén.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="max-w-4xl mx-auto p-6">
      <h3 className="text-4xl font-bold mb-6 text-teal-600">Experiencia Profesional</h3>
      {experiences.map(({ role, company, date, desc }, i) => (
        <div key={i} className="mb-6 border-l-4 border-teal-500 pl-4">
          <h4 className="font-semibold text-xl">{role} – {company}</h4>
          <p className="italic text-sm mb-2">{date}</p>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
            {desc.map((item, j) => (
              <li key={j}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
