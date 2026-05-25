'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaRocket, FaMobileAlt, FaDatabase, FaGlobe, FaCogs, FaProjectDiagram } from 'react-icons/fa';

/**
 * Projects Component - Showcase de Ingeniería
 * Presenta proyectos seleccionados con una estética de "Glassmorphism" 
 * y badges tecnológicos dinámicos para resaltar el stack Full Stack.
 */
export default function Projects() {
  // Datos de proyectos - Sincronizados con el currículum v2
  const projects = [
    {
      title: 'TVSmartMatch',
      description: 'Plataforma de comparación y recomendación de televisores con IA. Arquitectura web y móvil.',
      tech: ['Next.js', 'React Native', 'Supabase', 'GCP'],
      link: 'https://tvsmartmatch.com',
      type: 'Web & Mobile',
      icon: <FaRocket />,
      bgIcon: <FaProjectDiagram />,
      color: 'text-teal-500',
      bgColor: 'bg-teal-500/10',
      gradient: 'from-teal-500 to-emerald-500',
      highlights: ['Autenticación & Perfiles', 'Base de datos relacional', 'Landing SEO', 'Cloud Functions']
    },
    {
      title: 'FotoGo',
      description: 'Red social de fotografía con rankings, concursos y automatización backend.',
      tech: ['React Native', 'Firebase', 'Cloud Functions', 'TS'],
      type: 'Mobile App',
      icon: <FaMobileAlt />,
      bgIcon: <FaGlobe />,
      color: 'text-cyan-500',
      bgColor: 'bg-cyan-500/10',
      gradient: 'from-cyan-500 to-blue-500',
      highlights: ['Gestión de contenido', 'Lógica de concursos', 'UI/UX centrado en usuario']
    },
    {
      title: 'Intranet Rota',
      description: 'Aplicación Android para comunicación interna municipal y notificaciones push.',
      tech: ['Kotlin', 'PHP', 'Firebase', 'REST API'],
      type: 'Android App',
      icon: <FaDatabase />,
      bgIcon: <FaCogs />,
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-500/10',
      gradient: 'from-emerald-500 to-teal-500',
      highlights: ['Mensajería interna', 'Notificaciones push', 'Integración API REST']
    },
    {
      title: 'Portfolio v2',
      description: 'Portfolio profesional optimizado para SEO con animaciones y mejora UX/UI.',
      tech: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TS'],
      type: 'Web Portfolio',
      icon: <FaGlobe />,
      bgIcon: <FaRocket />,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      gradient: 'from-blue-500 to-indigo-500',
      highlights: ['Diseño responsive', 'Optimización SEO', 'Ultra Pro Design']
    }
  ];

  return (
    <section id="projects" className="relative w-full py-32 px-6 bg-white dark:bg-[#030712] overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          {...({ className: "flex flex-col items-center text-center mb-24" } as any)}
        >
          <h2 className="text-sm font-black uppercase tracking-[0.3em] text-teal-500 mb-4">Portafolio</h2>
          <div className="text-5xl sm:text-7xl font-[900] tracking-tighter dark:text-white uppercase text-balance">
            Proyectos <span className="text-gradient">Destacados.</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              {...({ className: "group relative bg-gray-50 dark:bg-gray-900/50 rounded-[3rem] p-10 border border-gray-100 dark:border-gray-800 transition-all duration-500 hover:shadow-2xl overflow-hidden" } as any)}
            >
              {/* Background Decoration Icon */}
              <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none">
                {React.cloneElement(project.bgIcon as React.ReactElement<any>, { size: 180 })}
              </div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  {/* Icono superior izquierdo corregido para consistencia */}
                  <div className={`w-16 h-16 rounded-[1.5rem] ${project.bgColor} flex items-center justify-center text-3xl shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 ${project.color}`}>
                    {project.icon}
                  </div>
                  <span className="text-[9px] font-[900] uppercase tracking-[0.3em] px-4 py-2 bg-white dark:bg-gray-800 rounded-full border border-gray-100 dark:border-gray-700 text-gray-400">
                    {project.type}
                  </span>
                </div>

                <h3 className="text-3xl font-[900] dark:text-white mb-4 tracking-tighter">{project.title}</h3>

                <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed font-medium text-lg">
                  {project.description}
                </p>

                <div className="space-y-4 mb-10 flex-grow">
                  {project.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-3 text-sm font-bold text-gray-400 dark:text-gray-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                      {h}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-8 border-t border-gray-100 dark:border-gray-800">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, tIdx) => (
                      <span key={tIdx} className="text-[9px] font-black uppercase tracking-widest px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-lg border border-gray-100 dark:border-gray-800">
                        {t}
                      </span>
                    ))}
                  </div>

                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      {...({ className: "w-12 h-12 rounded-2xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 flex items-center justify-center shadow-lg transition-colors hover:bg-teal-500 dark:hover:bg-teal-500 dark:hover:text-white" } as any)}
                    >
                      <FaExternalLinkAlt size={16} />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
