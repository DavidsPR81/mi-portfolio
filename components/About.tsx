'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaUsers, FaClock, FaLightbulb, FaChartLine, FaComments, FaStar, FaMapMarkerAlt, FaRocket } from 'react-icons/fa';

/**
 * About Component - Bento Grid Layout
 * Utiliza un diseño de cuadrícula moderna (Bento) para organizar aptitudes 
 * y perfil profesional con una jerarquía visual clara y efectos de profundidad.
 */
export default function About() {
  // Configuración de Aptitudes (Soft Skills) con iconos y colores dinámicos
  const softSkills = [
    { icon: FaUsers, title: 'Liderazgo Operativo', color: 'text-blue-500', bgColor: 'bg-blue-500/10' },
    { icon: FaBrain, title: 'Resolución de Problemas', color: 'text-emerald-500', bgColor: 'bg-emerald-500/10' },
    { icon: FaComments, title: 'Comunicación Asertiva', color: 'text-purple-500', bgColor: 'bg-purple-500/10' },
    { icon: FaClock, title: 'Gestión del Tiempo', color: 'text-orange-500', bgColor: 'bg-orange-500/10' },
    { icon: FaLightbulb, title: 'Aprendizaje Continuo', color: 'text-amber-500', bgColor: 'bg-amber-500/10' },
    { icon: FaChartLine, title: 'Enfoque a Resultados', color: 'text-cyan-500', bgColor: 'bg-cyan-500/10' },
  ];

  return (
    <section id="about" className="relative w-full py-32 px-6 bg-white dark:bg-[#030712] overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          {...({ className: "flex flex-col items-center text-center mb-24" } as any)}
        >
          <h2 className="text-sm font-black uppercase tracking-[0.3em] text-teal-500 mb-4">Descubre</h2>
          <div className="text-4xl sm:text-6xl lg:text-7xl font-[900] tracking-tighter dark:text-white uppercase text-balance">
            Perfil <span className="text-gradient">Profesional.</span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
            {...({ className: "space-y-8" } as any)}
          >
            <div className="relative">
              <div className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-500 to-transparent opacity-50"></div>
              <p className="text-2xl text-gray-800 dark:text-gray-200 leading-relaxed font-semibold">
                Desarrollador <span className="text-teal-500">Full Stack Junior</span> con formación en DAM
                y una sólida base en el desarrollo de aplicaciones web y móviles.
              </p>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Especializado en <span className="font-bold dark:text-white">React, Next.js y React Native</span>,
              cubriendo desde el frontend hasta el despliegue en cloud. Mi enfoque combina la precisión técnica
              con la visión estratégica adquirida en más de <span className="text-teal-500 font-bold">17 años de experiencia</span> en gestión de equipos.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="p-8 rounded-[2.5rem] bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 relative overflow-hidden group hover:shadow-xl transition-all duration-500">
                {/* Icono superior izquierdo para consistencia */}
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center text-xl text-teal-500 mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-sm">
                  <FaMapMarkerAlt />
                </div>
                <FaStar className="absolute -top-4 -right-4 text-teal-500/5 group-hover:text-teal-500/10 transition-colors" size={120} />
                <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1 relative z-10">Ubicación</p>
                <p className="text-lg font-bold dark:text-white relative z-10">Cádiz, España</p>
              </div>
              <div className="p-8 rounded-[2.5rem] bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 relative overflow-hidden group hover:shadow-xl transition-all duration-500">
                {/* Icono superior izquierdo para consistencia */}
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-xl text-cyan-500 mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-sm">
                  <FaRocket />
                </div>
                <FaLightbulb className="absolute -top-4 -right-4 text-cyan-500/5 group-hover:text-cyan-500/10 transition-colors" size={120} />
                <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1 relative z-10">Especialidad</p>
                <p className="text-lg font-bold dark:text-white relative z-10">Web & Mobile</p>
              </div>
            </div>
          </motion.div>

          {/* Soft Skills Bento Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                {...({ className: `p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900/50 transition-all hover:shadow-2xl relative overflow-hidden group` } as any)}
              >
                {/* Background Decoration Icon */}
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none">
                  <skill.icon size={120} />
                </div>

                <div className="relative z-10">
                  {/* Icono superior izquierdo para consistencia */}
                  <div className={`w-14 h-14 rounded-2xl ${skill.bgColor} flex items-center justify-center ${skill.color} text-2xl mb-6 group-hover:scale-110 transition-transform shadow-sm`}>
                    <skill.icon />
                  </div>
                  <h3 className="text-lg font-black dark:text-white tracking-tight leading-none mb-2">{skill.title}</h3>
                  <div className="w-8 h-1 bg-gray-100 dark:bg-gray-800 rounded-full group-hover:w-full group-hover:bg-teal-500 transition-all duration-500"></div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
