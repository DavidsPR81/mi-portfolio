'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import SectionHeader from './SectionHeader';
import { contacts, site } from '../data/portfolio';

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          index="05"
          eyebrow="Contacto"
          title={
            <>
              ¿Hablamos <span className="text-gradient">ahora?</span>
            </>
          }
        />

        <div className="grid sm:grid-cols-2 gap-3">
          {contacts.map((contact, index) => {
            const isHttp = contact.href.startsWith('http');
            return (
              <motion.a
                key={contact.label}
                href={contact.href}
                target={isHttp ? '_blank' : undefined}
                rel={isHttp ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                whileHover={{ y: -4 }}
                className="group flex items-center justify-between gap-4 rounded-[1.75rem] bg-elevated border border-line p-7 hover:border-accent/50 transition-colors"
              >
                <div>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-mute mb-2">
                    {contact.label}
                  </p>
                  <p className="text-xl font-semibold break-all group-hover:text-accent transition-colors">
                    {contact.value}
                  </p>
                </div>
                <span className="w-10 h-10 rounded-full border border-line flex items-center justify-center text-mute group-hover:bg-accent group-hover:text-on-inverse group-hover:border-accent transition-colors">
                  <FaArrowRight size={12} />
                </span>
              </motion.a>
            );
          })}
        </div>

        <footer className="mt-20 pt-8 border-t border-line flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-lg font-semibold tracking-tight">{site.fullName}</p>
            <p className="text-sm text-mute mt-1">
              {site.role} · {site.specialty}
            </p>
          </div>
          <p className="text-sm text-mute">© {new Date().getFullYear()}</p>
        </footer>
      </div>
    </section>
  );
}
