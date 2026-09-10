'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { experience } from '../data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          index="02"
          eyebrow="Trayectoria"
          title="Camino profesional."
        />

        <div className="relative">
          <div className="absolute left-[18px] md:left-[92px] top-2 bottom-2 w-px bg-line" />

          <ul className="space-y-6">
            {experience.map((item, index) => (
              <motion.li
                key={`${item.company}-${item.period}`}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className="relative md:grid md:grid-cols-[92px_1fr] gap-8"
              >
                <div className="hidden md:flex pt-8">
                  <span className="text-sm font-semibold text-mute tabular-nums">{item.year}</span>
                </div>

                <div className="relative ml-10 md:ml-0 rounded-[1.75rem] bg-elevated border border-line p-7 md:p-8 hover:border-accent/40 transition-colors">
                  <span className="absolute -left-[31px] md:-left-[45px] top-9 h-3.5 w-3.5 rounded-full border-2 border-accent bg-page" />

                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span
                      className={`text-[11px] font-semibold uppercase tracking-[0.16em] px-2.5 py-1 rounded-full ${
                        item.kind === 'Trabajo'
                          ? 'bg-accent-dim text-accent'
                          : 'bg-line text-mute'
                      }`}
                    >
                      {item.kind}
                    </span>
                    <span className="text-sm text-mute md:hidden">{item.year}</span>
                    <span className="text-sm text-mute">{item.period}</span>
                  </div>

                  <h3 className="text-2xl font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-1 text-accent font-medium">{item.company}</p>

                  <div className="mt-4 flex flex-wrap gap-2 text-sm text-mute">
                    <span className="rounded-full border border-line px-3 py-1">{item.location}</span>
                    {item.hours ? (
                      <span className="rounded-full border border-line px-3 py-1">{item.hours}</span>
                    ) : null}
                  </div>

                  <p className="mt-5 text-mute leading-relaxed">{item.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-medium px-3 py-1.5 rounded-full bg-page border border-line text-mute"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
