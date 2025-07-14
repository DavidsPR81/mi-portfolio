'use client';

import React from 'react';

const achievements = [
  '+10% crecimiento en ventas mediante planificación y gestión',
  'Implementación de mejoras organizativas aumentando la eficiencia',
  'Análisis de datos para decisiones estratégicas y optimización de procesos y KPIs',
];

export default function Achievements() {
  return (
    <section id="logros" className="max-w-4xl mx-auto p-6">
      <h3 className="text-4xl font-bold mb-6 text-teal-600">Logros Profesionales</h3>
      <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
        {achievements.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
