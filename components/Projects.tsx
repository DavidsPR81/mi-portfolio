'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaGooglePlay } from 'react-icons/fa';
import SectionHeader from './SectionHeader';
import { projects, type Project } from '../data/portfolio';

function LinkIcon({ label }: { label: string }) {
  const lower = label.toLowerCase();
  if (lower.includes('play')) return <FaGooglePlay size={15} />;
  if (lower.includes('código')) return <FaGithub size={15} />;
  return <FaExternalLinkAlt size={13} />;
}

function Featured({ project }: { project: Project }) {
  const play = project.links.find((l) => l.label.toLowerCase().includes('play'));
  const restLinks = project.links.filter((l) => l !== play);

  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden rounded-[2rem] bg-elevated text-ink border border-line shadow-card"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(800px 380px at 100% 0%, var(--glow), transparent 55%)',
        }}
      />
      <div className="relative grid lg:grid-cols-[1.2fr_0.8fr] gap-10 p-8 md:p-12">
        <div>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent text-on-inverse px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em]">
              <FaGooglePlay /> En Google Play
            </span>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-mute">
              {project.type}
            </span>
          </div>
          <h3 className="display text-4xl md:text-6xl mb-5 text-ink">{project.title}</h3>
          <p className="text-lg text-mute leading-relaxed mb-8 max-w-2xl">
            {project.description}
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 mb-10">
            {project.highlights.map((item) => (
              <li key={item} className="flex gap-3 text-sm md:text-base text-ink">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3">
            {play ? (
              <motion.a
                href={play.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-2xl bg-accent text-on-inverse px-6 py-3.5 text-sm font-bold uppercase tracking-widest"
              >
                <FaGooglePlay /> Google Play
              </motion.a>
            ) : null}
            {restLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="inline-flex items-center gap-2 rounded-2xl border border-line px-5 py-3.5 text-sm font-bold uppercase tracking-widest hover:border-accent hover:text-accent"
              >
                <LinkIcon label={link.label} />
                {link.label}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-between gap-8 rounded-3xl bg-page border border-line p-7">
          {project.metrics ? (
            <div className="grid grid-cols-2 gap-6">
              {project.metrics.map((metric) => (
                <div key={metric.label}>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-mute mb-1">
                    {metric.label}
                  </p>
                  <p className="text-2xl font-bold text-ink">{metric.value}</p>
                </div>
              ))}
            </div>
          ) : null}
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-mute mb-3">Stack</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-semibold px-3 py-1.5 rounded-full border border-line text-ink"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="rounded-[1.75rem] bg-elevated border border-line p-8 flex flex-col hover:border-accent/40 hover:shadow-card transition-colors"
    >
      <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-accent mb-4">
        {project.type}
      </p>
      <h3 className="text-2xl font-bold tracking-tight mb-3">{project.title}</h3>
      <p className="text-mute leading-relaxed mb-6 flex-1">{project.description}</p>
      <ul className="space-y-2 mb-6">
        {project.highlights.map((item) => (
          <li key={item} className="text-sm text-mute">
            · {item}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech) => (
          <span key={tech} className="text-[11px] px-2.5 py-1 rounded-full border border-line text-mute">
            {tech}
          </span>
        ))}
      </div>
      {project.links.length > 0 ? (
        <div className="flex flex-wrap gap-3 mt-auto">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold hover:text-accent"
            >
              {link.label} <FaExternalLinkAlt size={11} />
            </a>
          ))}
        </div>
      ) : null}
    </motion.article>
  );
}

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-28 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          index="03"
          eyebrow="Proyectos"
          title={
            <>
              Lo que he construido.{' '}
              <span className="text-gradient">Incluido lo publicado.</span>
            </>
          }
        />
        {featured ? (
          <div className="mb-6">
            <Featured project={featured} />
          </div>
        ) : null}
        <div className="grid md:grid-cols-2 gap-5">
          {rest.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
