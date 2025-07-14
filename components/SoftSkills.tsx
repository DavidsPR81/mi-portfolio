'use client';

import React from 'react';

const softSkills = [
  'Liderazgo, gestión de equipos y toma de decisiones',
  'Resolución de problemas, pensamiento crítico y adaptación al cambio',
  'Aprendizaje continuo, comunicación efectiva y trabajo en equipo',
  'Organización, gestión del tiempo y priorización',
];

export default function SoftSkills() {
  return (
    <section id="aptitudes" className="max-w-4xl mx-auto p-6">
      <h3 className="text-4xl font-bold mb-6 text-teal-600">Aptitudes Personales</h3>
      <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
        {softSkills.map((skill, i) => (
          <li key={i}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}
