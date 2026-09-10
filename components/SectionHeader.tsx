'use client';

import React from 'react';
import { motion } from 'framer-motion';

type SectionHeaderProps = {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
};

export default function SectionHeader({ index, eyebrow, title, description }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="mb-16 md:mb-20"
    >
      <div className="flex items-center gap-3 mb-5">
        <span className="text-accent font-bold tracking-[0.28em] text-xs">{index}</span>
        <span className="h-px w-8 bg-accent" />
        <span className="text-xs font-bold uppercase tracking-[0.28em] text-accent">{eyebrow}</span>
      </div>
      <h2 className="display text-4xl sm:text-5xl lg:text-6xl text-ink text-balance max-w-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-lg md:text-xl text-mute max-w-2xl leading-relaxed">{description}</p>
      ) : null}
    </motion.div>
  );
}
