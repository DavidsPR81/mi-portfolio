'use client';

import React from 'react';

const projects = [
  {
    name: 'FotoGo',
    desc: 'App móvil/web con React Native + Firebase',
  },
  {
    name: 'TVSmartMatch',
    desc: 'Kotlin – En desarrollo (repositorio privado en GitHub)',
  },
  {
    name: 'IntranetAytoRota',
    desc: 'Kotlin – En desarrollo (repositorio privado en GitHub)',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-4xl mx-auto p-6">
      <h3 className="text-4xl font-bold mb-6 text-teal-600">Proyectos Técnicos</h3>
      <ul className="space-y-4 text-gray-700 dark:text-gray-300">
        {projects.map(({ name, desc }, i) => (
          <li key={i} className="border border-gray-300 rounded-lg p-4 hover:shadow-lg transition-shadow dark:border-gray-600">
            <h4 className="font-semibold text-xl">{name}</h4>
            <p>{desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
