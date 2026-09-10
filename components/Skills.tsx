'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { skillGroups, certifications } from '../data/portfolio';

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          index="04"
          eyebrow="Competencias"
          title="Herramientas que uso."
        />

        <div className="grid lg:grid-cols-[1.4fr_0.8fr] gap-5">
          <div className="grid sm:grid-cols-2 gap-5">
            {skillGroups.map((group, index) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                whileHover={{ y: -4 }}
                className="rounded-[1.75rem] bg-elevated border border-line p-7 hover:border-accent/40 hover:shadow-card transition-colors"
              >
                <h3 className="text-lg font-semibold mb-5">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm px-3 py-1.5 rounded-full bg-page border border-line"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[1.75rem] bg-elevated border border-line p-8"
          >
            <h3 className="text-xl font-semibold mb-2 text-ink">Google</h3>
            <p className="text-sm text-mute mb-8">
              Formación continua en automatización, datos, seguridad y marketing.
            </p>
            <ul className="space-y-6">
              {certifications.map((cert, index) => (
                <li key={cert.title}>
                  <div className="flex justify-between gap-4 mb-2">
                    <p className="text-sm font-medium leading-snug text-ink">{cert.title}</p>
                    <span className="text-xs font-semibold text-accent shrink-0">{cert.hours}</span>
                  </div>
                  <div className="h-1 rounded-full bg-line overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.15 + index * 0.1 }}
                      className="h-full bg-accent"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
