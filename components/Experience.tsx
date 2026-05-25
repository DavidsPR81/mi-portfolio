'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt, FaCode, FaBook, FaHistory, FaTools } from 'react-icons/fa';

/**
 * Experience Component - Timeline Estratégico
 * Visualiza la trayectoria profesional y académica en orden cronológico inverso, 
 * unificando la experiencia en gestión con la formación técnica de vanguardia.
 */
export default function Experience() {
  // Items de trayectoria - Ordenados de más reciente a más antiguo
  const items = [
    {
      type: 'work',
      title: 'Desarrollador Full Stack (Proyecto Propio)',
      company: 'TVSmartMatch',
      period: '2024 - Actualidad',
      location: 'Remoto',
      description: 'Desarrollo end-to-end de plataforma web y mobile con Next.js, React Native y Supabase. Automatización en Google Cloud.',
      skills: ['Next.js', 'React Native', 'Supabase', 'GCP'],
      icon: <FaTools />,
      color: 'text-teal-500',
      bgColor: 'bg-teal-500/10'
    },
    {
      type: 'academic',
      title: 'Full Stack Developer',
      company: 'UCAM Educa Open',
      period: '2025',
      location: 'Online',
      description: 'Curso Universitario (200h) integral cubriendo tecnologías Frontend y Backend modernas.',
      icon: <FaCode />,
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-500/10'
    },
    {
      type: 'academic',
      title: 'CFGS Desarrollo de Aplicaciones Multiplataforma',
      company: 'Ilerna',
      period: '2023 - 2025',
      location: 'España',
      description: 'Formación técnica superior (2000h) enfocada en desarrollo web, móvil y sistemas gestores de bases de datos.',
      icon: <FaBook />,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10'
    },
    {
      type: 'work',
      title: 'Responsable de Departamento',
      company: 'MediaMarkt Bahía de Cádiz',
      period: '2007 - 2024',
      location: 'Cádiz, España',
      description: 'Dirección y coordinación de equipos multidisciplinares, gestión de KPIs comerciales y optimización de procesos operativos. Incremento de ventas del 10%.',
      icon: <FaHistory />,
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10'
    }
  ];

  return (
    <section id="experience" className="relative w-full py-32 px-6 bg-gray-50 dark:bg-[#030712]/50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          {...({ className: "flex flex-col items-center text-center mb-24" } as any)}
        >
          <h2 className="text-sm font-black uppercase tracking-[0.3em] text-teal-500 mb-4">Trayectoria</h2>
          <div className="text-5xl sm:text-7xl font-[900] tracking-tighter dark:text-white uppercase text-balance">
            Experiencia <span className="text-gradient">&</span> Formación.
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              {...({ className: "group relative bg-white dark:bg-gray-900 rounded-[3rem] p-10 border border-gray-100 dark:border-gray-800 transition-all duration-500 hover:shadow-2xl overflow-hidden" } as any)}
            >
              {/* Background Decoration Icon */}
              <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none">
                {React.cloneElement(item.icon as React.ReactElement<any>, { size: 180 })}
              </div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  {/* Icono superior izquierdo corregido para consistencia con Skills */}
                  <div className={`w-14 h-14 rounded-2xl ${item.bgColor} flex items-center justify-center text-2xl shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 ${item.color}`}>
                    {item.type === 'work' ? <FaBriefcase /> : <FaGraduationCap />}
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] px-4 py-2 bg-gray-50 dark:bg-gray-800 rounded-full border border-gray-100 dark:border-gray-700 text-gray-400">
                    {item.period}
                  </span>
                </div>

                <h3 className="text-2xl font-[900] dark:text-white mb-2 tracking-tight group-hover:text-teal-500 transition-colors">
                  {item.title}
                </h3>
                
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <span className="text-teal-600 dark:text-teal-400 font-black uppercase tracking-widest text-[10px]">
                    {item.company}
                  </span>
                  <span className="text-[10px] text-gray-400 flex items-center gap-1.5 font-bold uppercase tracking-widest">
                    <FaMapMarkerAlt size={10} />
                    {item.location}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium text-base mb-8">
                  {item.description}
                </p>

                {item.skills && (
                  <div className="mt-auto flex flex-wrap gap-2">
                    {item.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="text-[8px] font-black uppercase tracking-widest px-3 py-1.5 bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-lg border border-gray-100 dark:border-gray-700">
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
