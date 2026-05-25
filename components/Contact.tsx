'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone, FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
  const contacts = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'david170481@icloud.com',
      href: 'mailto:david170481@icloud.com',
      color: 'text-blue-500',
      bg: 'bg-blue-500/5'
    },
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      value: 'perezrodriguezdavid',
      href: 'https://linkedin.com/in/perezrodriguezdavid',
      color: 'text-cyan-600',
      bg: 'bg-cyan-600/5'
    },
    {
      icon: <FaGithub />,
      label: 'GitHub',
      value: 'DavidsPR81',
      href: 'https://github.com/DavidsPR81',
      color: 'text-gray-800 dark:text-white',
      bg: 'bg-gray-500/5'
    },
    {
      icon: <FaPhone />,
      label: 'Teléfono',
      value: '+34 655 326 227',
      href: 'tel:+34655326227',
      color: 'text-emerald-500',
      bg: 'bg-emerald-500/5'
    }
  ];

  return (
    <section id="contact" className="relative w-full py-32 px-6 bg-white dark:bg-[#030712] overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          {...({ className: "flex flex-col items-center text-center mb-24" } as any)}
        >
          <h2 className="text-sm font-black uppercase tracking-[0.3em] text-teal-500 mb-4">Contacto</h2>
          <div className="text-4xl sm:text-6xl lg:text-7xl font-[900] tracking-tighter dark:text-white uppercase text-balance">
            ¿Hablamos <span className="text-gradient">ahora?</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contacts.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              {...({ className: "group p-8 bg-gray-50 dark:bg-gray-900/50 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 hover:border-teal-500/30 transition-all duration-500 flex flex-col items-center text-center shadow-sm hover:shadow-2xl hover:shadow-teal-500/5" } as any)}
            >
              <div className={`w-16 h-16 rounded-2xl ${contact.bg} flex items-center justify-center text-2xl ${contact.color} mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-sm`}>
                {contact.icon}
              </div>
              <p className="text-[10px] font-[900] text-gray-400 uppercase tracking-[0.2em] mb-2">{contact.label}</p>
              <p className="text-lg font-black dark:text-white group-hover:text-teal-500 transition-colors duration-300 break-all">
                {contact.value}
              </p>

              <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <FaPaperPlane className="text-teal-500 animate-bounce" />
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          {...({ className: "mt-32 pt-12 border-t border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-6" } as any)}
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-teal-500 flex items-center justify-center text-white font-black text-sm">D</div>
            <span className="text-sm font-black dark:text-white tracking-tighter uppercase">
              David<span className="text-teal-500">Pérez</span>
            </span>
          </div>

          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
            © 2026 Crafted with Passion & Next.js
          </p>

          <div className="flex gap-4">
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse delay-75"></span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse delay-150"></span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
