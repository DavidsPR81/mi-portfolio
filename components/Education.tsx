'use client';

import React from 'react';

const certifications = [
  'Google IT Automation with Python, Coursera (6 cursos, 240 h)',
  'Google Data Analytics Professional Certificate, Coursera (8 cursos, 240 h)',
  'Google Cybersecurity Professional Certificate, Coursera (9 cursos, 280 h)',
  'Programación con JavaScript – Fundación Telefónica (40 h)',
  'MF0487: Auditoría de Seguridad Informática – MainJobs (60 h)',
  'Ciberseguridad y Protección de Datos – Educa Open (10 h)',
  'Introducción a Docker – Educa Open (18 h)',
  'Administración de Sistemas Cloud Microsoft – Educa Open (20 h)',
  'Metodología Scrum y JIRA para gestión ágil de proyectos – Educa Open (21 h)',
  'Certificado PRL – Laborali (60 h)',
  'Formación Inicial Distribuidores Nivel 3 Canal Distribución – Asnef (61 h)',
  'Ofimática Nivel Avanzado – (300 h)',
];

export default function Education() {
  return (
    <section id="education" className="max-w-4xl mx-auto p-6">
      <h3 className="text-4xl font-bold mb-6 text-teal-600">Formación y Certificaciones</h3>
      <div>
        <h4 className="text-2xl font-semibold mb-2">Formación Académica</h4>
        <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300">
          <li>CFGS Desarrollo de Aplicaciones Multiplataforma (DAM), Ilerna – 2025 (2000 h)</li>
          <li>CFGM Electrónica de Consumo, Salesianos – 2000 (2000 h)</li>
          <li>Curso Universitario Full Stack Developer, UCAM – Educa Open – 2025 (200 h)</li>
          <li>Inglés B1 – En proceso de certificación</li>
        </ul>
        <h4 className="text-2xl font-semibold mb-2">Certificados Profesionales</h4>
        <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300">
          {certifications.map((cert, i) => (
            <li key={i}>{cert}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
