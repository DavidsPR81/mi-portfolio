'use client';

import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto p-6 text-center">
      <h3 className="text-4xl font-bold mb-6 text-teal-600">Contacto</h3>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        📧 Email: <a href="mailto:david170481@icloud.com" className="underline hover:text-teal-600">david170481@icloud.com</a><br />
        📞 Teléfono: <a href="tel:+34655326227" className="underline hover:text-teal-600">+34 655 326 227</a><br />
        🔗 LinkedIn: <a href="https://linkedin.com/in/perezrodriguezdavid" target="_blank" rel="noopener noreferrer" className="underline hover:text-teal-600">linkedin.com/in/perezrodriguezdavid</a><br />
        🐙 GitHub: <a href="https://github.com/DavidsPR81" target="_blank" rel="noopener noreferrer" className="underline hover:text-teal-600">github.com/DavidsPR81</a>
      </p>
      <div className="flex justify-center space-x-6 text-2xl text-teal-600 dark:text-teal-400">
        <a href="mailto:david170481@icloud.com" aria-label="Email"><FaEnvelope /></a>
        <a href="https://linkedin.com/in/perezrodriguezdavid" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
        <a href="https://github.com/DavidsPR81" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
      </div>
      <a
        href="/curriculumDavidJunioATS3.pdf"
        download
        className="inline-block mt-6 px-6 py-3 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition"
      >
        Descargar CV
      </a>
    </section>
  );
}
