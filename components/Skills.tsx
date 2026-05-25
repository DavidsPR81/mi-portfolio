'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaMobileAlt, FaCloud, FaAward, FaCheckCircle, FaLaptopCode, FaGlobeAmericas, FaShieldAlt } from 'react-icons/fa';

/**
 * Skills Component - Stack Tecnológico & Certificaciones
 * Desglose técnico organizado por dominios (Frontend, Backend, Mobile, Cloud) 
 * y seguimiento de formación oficial de Google.
 */
export default function Skills() {
  // Grupos de habilidades con iconos decorativos de fondo
  const skillGroups = [
    {
      title: 'Stack Principal',
      icon: <FaCode />,
      bgIcon: <FaLaptopCode />,
      skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Node.js'],
      color: 'text-teal-500',
      bgColor: 'bg-teal-500/10'
    },
    {
      title: 'Mobile & DB',
      icon: <FaMobileAlt />,
      bgIcon: <FaGlobeAmericas />,
      skills: ['React Native (Expo)', 'Supabase', 'PostgreSQL', 'Firebase'],
      color: 'text-cyan-500',
      bgColor: 'bg-cyan-500/10'
    },
    {
      title: 'Cloud & DevOps',
      icon: <FaCloud />,
      bgIcon: <FaShieldAlt />,
      skills: ['Google Cloud Platform', 'AWS (Básico)', 'Docker', 'Netlify', 'CI/CD'],
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10'
    },
    {
      title: 'Otros Lenguajes',
      icon: <FaServer />,
      bgIcon: <FaCode />,
      skills: ['Python', 'Java', 'PHP', 'Kotlin', 'SQL'],
      color: 'text-indigo-500',
      bgColor: 'bg-indigo-500/10'
    }
  ];

  const certifications = [
    { title: 'Google IT Automation with Python', hours: '240h' },
    { title: 'Google Data Analytics', hours: '260h' },
    { title: 'Google Cybersecurity', hours: '280h' },
    { title: 'Google Digital Marketing & E-commerce', hours: '260h' }
  ];

  return (
    <section id="skills" className="relative w-full py-32 px-6 bg-gray-50 dark:bg-[#030712]/50 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          {...({ className: "flex flex-col items-center text-center mb-24" } as any)}
        >
          <h2 className="text-sm font-black uppercase tracking-[0.3em] text-teal-500 mb-4">Competencias</h2>
          <div className="text-5xl sm:text-7xl font-[900] tracking-tighter dark:text-white uppercase text-balance">
            Stack <span className="text-gradient">&</span> Certificados.
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Skills Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skillGroups.map((group, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                {...({ className: "p-10 bg-white dark:bg-gray-900 rounded-[3rem] border border-gray-100 dark:border-gray-800 transition-all duration-500 hover:shadow-2xl group relative overflow-hidden" } as any)}
              >
                {/* Background Decoration Icon */}
                <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none">
                  {React.cloneElement(group.bgIcon as React.ReactElement<any>, { size: 180 })}
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`w-14 h-14 rounded-2xl ${group.bgColor} flex items-center justify-center text-3xl ${group.color} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-sm`}>
                      {group.icon}
                    </div>
                    <h3 className="text-xl font-black dark:text-white tracking-tight uppercase">{group.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="px-4 py-2 bg-gray-50 dark:bg-gray-800/50 text-gray-600 dark:text-gray-400 text-xs font-black uppercase tracking-widest rounded-xl border border-gray-100 dark:border-gray-800 flex items-center gap-2">
                        <FaCheckCircle className="text-teal-500 text-[10px]" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            {...({ className: "p-10 bg-white dark:bg-gray-900 rounded-[3rem] border border-gray-100 dark:border-gray-800 relative overflow-hidden group hover:shadow-2xl transition-all duration-500" } as any)}
          >
            <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none">
              <FaAward size={180} />
            </div>

            <h3 className="text-2xl font-[900] dark:text-white mb-10 flex items-center gap-3 relative z-10 uppercase tracking-tighter">
              <FaAward className="text-teal-500" />
              Certificaciones <span className="text-teal-500">Google</span>
            </h3>

            <div className="space-y-8 relative z-10">
              {certifications.map((cert, index) => (
                <div key={index} className="group/item">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-bold text-gray-800 dark:text-gray-200 text-sm leading-tight max-w-[80%] group-hover/item:text-teal-500 transition-colors">{cert.title}</h4>
                    <span className="text-[10px] font-black px-2 py-1 bg-teal-500/10 text-teal-600 rounded-lg border border-teal-500/20">{cert.hours}</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ duration: 1.5, delay: 0.5 + (index * 0.1) }}
                      {...({ className: "h-full bg-gradient-to-r from-teal-500 to-cyan-500 shadow-[0_0_10px_rgba(20,184,166,0.5)]" } as any)}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-teal-500/5 rounded-2xl border border-teal-500/10 relative z-10">
              <p className="text-[11px] font-bold text-teal-600 dark:text-teal-400 leading-relaxed uppercase tracking-widest text-center">
                Formación continua en Cloud, Datos y Seguridad.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
