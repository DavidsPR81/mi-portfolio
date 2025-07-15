'use client';

import { motion } from 'framer-motion';
import {
  FaLightbulb,
  FaUserTie,
  FaRocket,
  FaCodeBranch,
  FaUsers,
  FaShieldAlt,
} from 'react-icons/fa';

export default function About() {
  return (
    <section
      id="about"
      className="w-full py-24 px-6 sm:px-12 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300 relative"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Fondo degradado igual que Hero, pero desplazado para no ser idéntico */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        {/* Cambié la posición a -top-24 y -right-20 para variar */}
        <div className="absolute -top-24 -right-20 w-[40rem] h-[40rem] bg-teal-400 opacity-10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col gap-20 relative z-10">
        {/* TEXTO PRINCIPAL con animación idéntica al Hero */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl font-bold mb-6 text-teal-600 border-b-4 border-teal-400 w-fit">
            Sobre Mí
          </h3>
          <p className="text-xl leading-loose text-gray-700 dark:text-gray-300 text-justify">
            Profesional con sólida experiencia en liderazgo y gestión comercial en entornos multinacionales. Tras una transición exitosa al sector IT, me he formado como Técnico Superior en Desarrollo de Aplicaciones Multiplataforma, especializándome en desarrollo Full Stack, análisis de datos y ciberseguridad. Combino visión estratégica, capacidad de adaptación y habilidades técnicas para crear soluciones prácticas y eficaces. Busco integrarme en equipos tecnológicos donde pueda seguir creciendo y contribuir con resultados tangibles.
          </p>
        </motion.div>

        {/* Tarjetas eliminadas como pediste */}
      </div>
    </section>
  );
}
