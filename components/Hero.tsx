'use client';

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import TypedWords from './TypedWords';
import { FaDownload, FaGithub, FaLinkedin, FaCode, FaMobileAlt, FaCloud } from 'react-icons/fa';
import { site, marqueeItems } from '../data/portfolio';

const ease = [0.16, 1, 0.3, 1] as const;
const spring = { type: 'spring' as const, stiffness: 380, damping: 18 };

export default function Hero() {
  const tags = [
    { icon: <FaCode />, pos: 'top-6 -left-2 sm:-left-6', delay: 0 },
    { icon: <FaMobileAlt />, pos: 'bottom-20 -right-1 sm:-right-5', delay: 0.6 },
    { icon: <FaCloud />, pos: 'top-[42%] -right-4 sm:-right-8', delay: 1.2 },
  ];

  return (
    <>
      <Head>
        <title>{site.title}</title>
        <meta name="description" content={site.description} />
      </Head>

      <section id="home" className="relative min-h-screen aurora overflow-hidden pt-28 pb-8">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-10 items-center min-h-[70vh]">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.32em] text-accent mb-6">
                Disponible para oportunidades
              </p>
              <h1 className="display text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] text-ink">
                Hola, soy
                <span className="block mt-1 text-gradient">{site.name}.</span>
              </h1>
              <div className="mt-6 min-h-[2.75rem] flex items-center text-xl sm:text-2xl font-medium">
                <TypedWords />
              </div>
              <p className="mt-6 max-w-lg text-lg text-mute leading-relaxed">
                Construyo aplicaciones web y móviles de punta a punta.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <motion.a
                  href={site.cv}
                  download
                  whileHover={{ y: -3, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={spring}
                  className="inline-flex items-center gap-2 rounded-2xl bg-inverse text-on-inverse px-7 py-4 text-sm font-bold uppercase tracking-widest shadow-card"
                >
                  <FaDownload /> Descargar CV
                </motion.a>
                <motion.a
                  href="#projects"
                  whileHover={{ y: -3, scale: 1.03 }}
                  transition={spring}
                  className="inline-flex items-center rounded-2xl border border-line px-7 py-4 text-sm font-bold uppercase tracking-widest hover:border-accent hover:text-accent"
                >
                  Ver proyectos
                </motion.a>
                <motion.a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  whileHover={{ y: -3, scale: 1.08 }}
                  transition={spring}
                  className="w-12 h-12 rounded-2xl border border-line flex items-center justify-center text-mute hover:text-accent hover:border-accent"
                >
                  <FaGithub size={20} />
                </motion.a>
                <motion.a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  whileHover={{ y: -3, scale: 1.08 }}
                  transition={spring}
                  className="w-12 h-12 rounded-2xl border border-line flex items-center justify-center text-mute hover:text-accent hover:border-accent"
                >
                  <FaLinkedin size={20} />
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease, delay: 0.12 }}
              className="relative mx-auto w-full max-w-[340px] lg:max-w-[400px]"
            >
              <div className="absolute -inset-8 rounded-full bg-accent/25 blur-3xl" />
              {tags.map((tag) => (
                <motion.div
                  key={tag.pos}
                  animate={{ y: [0, -14, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: tag.delay, ease: 'easeInOut' }}
                  className={`absolute ${tag.pos} z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-teal-400 to-emerald-500 text-white flex items-center justify-center text-xl shadow-xl`}
                >
                  {tag.icon}
                </motion.div>
              ))}
              <div className="relative aspect-square rounded-full overflow-hidden border-[6px] border-white dark:border-white/10 shadow-glow bg-white">
                <Image
                  src={site.photo}
                  alt={site.fullName}
                  width={760}
                  height={760}
                  priority
                  className="h-full w-full object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mt-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="overflow-hidden rounded-full border border-line bg-elevated/50 py-3">
              <div className="marquee-track flex w-max animate-marquee gap-10 px-4">
                {[...marqueeItems, ...marqueeItems].map((item, i) => (
                  <span
                    key={`${item}-${i}`}
                    className="text-xs font-bold tracking-[0.28em] uppercase text-mute"
                  >
                    {item}
                    <span className="ml-10 text-accent">✦</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
