'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  FaBrain,
  FaUsers,
  FaClock,
  FaLightbulb,
  FaChartLine,
  FaComments,
  FaMapMarkerAlt,
  FaCode,
} from 'react-icons/fa';
import SectionHeader from './SectionHeader';
import { site, stats } from '../data/portfolio';

const softSkills = [
  { icon: FaUsers, title: 'Liderazgo operativo' },
  { icon: FaBrain, title: 'Resolución de problemas' },
  { icon: FaComments, title: 'Comunicación asertiva' },
  { icon: FaClock, title: 'Gestión del tiempo' },
  { icon: FaLightbulb, title: 'Aprendizaje continuo' },
  { icon: FaChartLine, title: 'Enfoque a resultados' },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          index="01"
          eyebrow="Sobre mí"
          title={
            <>
              17 años liderando equipos.{' '}
              <span className="text-gradient">Ahora, código.</span>
            </>
          }
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xl md:text-2xl font-semibold leading-snug text-ink">
              Formación DAM y stack en React, Next.js y React Native. Paso de la
              operación comercial al desarrollo end-to-end.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <div className="rounded-3xl bg-elevated border border-line p-6">
                <FaMapMarkerAlt className="text-accent mb-3" />
                <p className="text-[11px] uppercase tracking-[0.22em] text-mute mb-1">Ubicación</p>
                <p className="text-lg font-bold">{site.location}</p>
              </div>
              <div className="rounded-3xl bg-elevated border border-line p-6">
                <FaCode className="text-accent mb-3" />
                <p className="text-[11px] uppercase tracking-[0.22em] text-mute mb-1">Especialidad</p>
                <p className="text-lg font-bold">{site.specialty}</p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  whileHover={{ y: -4 }}
                  className="rounded-3xl bg-elevated border border-line p-6 min-h-[120px] flex flex-col justify-between"
                >
                  <p className="display text-3xl sm:text-4xl text-ink">
                    {stat.value}
                    <span className="ml-1 text-sm font-semibold text-accent">{stat.suffix}</span>
                  </p>
                  <p className="text-sm text-mute mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="rounded-[1.75rem] bg-elevated border border-line p-7 hover:border-accent/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-2xl bg-accent-dim text-accent flex items-center justify-center text-xl mb-5">
                  <skill.icon />
                </div>
                <h3 className="text-lg font-bold leading-snug">{skill.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
