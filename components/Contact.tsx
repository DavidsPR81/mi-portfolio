'use client';

import React, { useState, useRef, useEffect } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaUser, FaComment } from 'react-icons/fa';

interface TextDecoderTitleProps {
  text: string;
  active: boolean;
  Icon: React.ElementType;
}

function TextDecoderTitle({ text, active, Icon }: TextDecoderTitleProps) {
  const [decoded, setDecoded] = React.useState('');
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{};:,.<>?';

  React.useEffect(() => {
    if (!active) {
      setDecoded('');
      return;
    }

    let animationFrame: number;
    let frame = 0;
    const totalFramesPerChar = 6;

    const decode = () => {
      let output = '';
      const currentIndex = Math.floor(frame / totalFramesPerChar);

      for (let i = 0; i < text.length; i++) {
        if (i < currentIndex) {
          output += text[i];
        } else if (i === currentIndex && text[i] !== ' ') {
          output += characters[Math.floor(Math.random() * characters.length)];
        } else {
          output += ' ';
        }
      }

      setDecoded(output);

      if (currentIndex >= text.length) {
        cancelAnimationFrame(animationFrame);
        setDecoded(text);
        return;
      }

      frame++;
      animationFrame = requestAnimationFrame(decode);
    };

    animationFrame = requestAnimationFrame(decode);
    return () => cancelAnimationFrame(animationFrame);
  }, [active, text]);

  return (
    <div className="mb-12 md:mb-16">
      <div className="flex items-center gap-3 md:gap-4 text-2xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-teal-600 to-cyan-500 dark:from-teal-400 dark:to-cyan-300 bg-clip-text text-transparent tracking-wide relative select-none">
        <Icon
          className={`text-xl sm:text-2xl md:text-[1.8rem] text-teal-600 dark:text-teal-400 transition-all duration-700 ease-out mt-1 hover:scale-110 hover:text-teal-500 dark:hover:text-teal-300
            ${active ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-3'}
          `}
        />
        <span className="inline-block">{decoded}</span>
      </div>

      <div
        className={`h-1 bg-gradient-to-r from-teal-600/80 to-cyan-500/80 dark:from-teal-400/80 dark:to-cyan-300/80 mt-3 rounded-full transition-all duration-300 ${
          active ? 'line-grow' : 'w-0'
        }`}
      />

      <style jsx>{`
        @keyframes lineGrow {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }

        .line-grow {
          animation: lineGrow 3s cubic-bezier(0.65, 0, 0.35, 1) forwards;
        }
      `}</style>
    </div>
  );
}

interface ContactMethod {
  title: string;
  value: string;
  href: string;
  icon: React.ElementType;
  color: string;
  bgGradient: string;
  description: string;
}

const contactMethods: ContactMethod[] = [
  {
    title: 'Email',
    value: 'david170481@icloud.com',
    href: 'mailto:david170481@icloud.com',
    icon: FaEnvelope,
    color: 'from-blue-500 to-indigo-600',
    bgGradient: 'from-blue-50/90 via-indigo-50/90 to-purple-50/90 dark:from-blue-900/30 dark:via-indigo-900/30 dark:to-purple-900/30',
    description: 'Respuesta en 24 horas'
  },
  {
    title: 'Teléfono',
    value: '+34 655 326 227',
    href: 'tel:+34655326227',
    icon: FaPhone,
    color: 'from-green-500 to-emerald-600',
    bgGradient: 'from-green-50/90 via-emerald-50/90 to-teal-50/90 dark:from-green-900/30 dark:via-emerald-900/30 dark:to-teal-900/30',
    description: 'Disponible L-V 9:00-18:00'
  },
  {
    title: 'LinkedIn',
    value: 'perezrodriguezdavid',
    href: 'https://linkedin.com/in/perezrodriguezdavid',
    icon: FaLinkedin,
    color: 'from-cyan-500 to-blue-600',
    bgGradient: 'from-cyan-50/90 via-blue-50/90 to-sky-50/90 dark:from-cyan-900/30 dark:via-blue-900/30 dark:to-sky-900/30',
    description: 'Red profesional'
  },
  {
    title: 'GitHub',
    value: 'DavidsPR81',
    href: 'https://github.com/DavidsPR81',
    icon: FaGithub,
    color: 'from-gray-500 to-slate-600',
    bgGradient: 'from-gray-50/90 via-slate-50/90 to-zinc-50/90 dark:from-gray-900/30 dark:via-slate-900/30 dark:to-zinc-900/30',
    description: 'Proyectos y código'
  }
];

interface ContactCardProps {
  method: ContactMethod;
  index: number;
  isVisible: boolean;
}

function ContactCard({ method, index, isVisible }: ContactCardProps) {
  return (
    <a
      href={method.href}
      target={method.href.startsWith('http') ? '_blank' : '_self'}
      rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${method.bgGradient} backdrop-blur-sm border border-white/20 dark:border-gray-700/30 shadow-lg hover:shadow-2xl transition-all duration-700 hover:scale-105 hover:-translate-y-2 block ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{
        transitionDelay: `${index * 150}ms`
      }}
    >
      {/* Efectos de fondo */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute inset-0 bg-gradient-to-tl from-teal-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200" />
      
      {/* Partículas flotantes */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-teal-400/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-300" />
      <div className="absolute bottom-4 left-4 w-1 h-1 bg-cyan-400/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-300 delay-200" />
      <div className="absolute top-1/2 right-6 w-1.5 h-1.5 bg-blue-400/50 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-300 delay-400" />
      
      <div className="relative p-6 h-full">
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className={`relative p-3 rounded-xl bg-gradient-to-r ${method.color} text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
            <method.icon className="text-xl" />
            <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300">
              {method.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {method.description}
            </p>
          </div>
        </div>
        
        {/* Valor de contacto */}
        <div className="relative overflow-hidden rounded-lg bg-white/50 dark:bg-gray-800/50 p-4 border border-white/30 dark:border-gray-600/30 group-hover:border-teal-400/60 transition-all duration-400 hover:shadow-md">
          {/* Efecto shimmer */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12" />
          
          <span className="relative text-sm font-mono font-medium text-gray-700 dark:text-gray-300 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300 break-all">
            {method.value}
          </span>
          
          {/* Línea de progreso */}
          <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-teal-500 to-cyan-500 w-0 group-hover:w-full transition-all duration-700" />
        </div>
        
        {/* Indicador de acción */}
        <div className="mt-4 flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300">
          <FaPaperPlane className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
            Hacer clic para contactar
          </span>
        </div>
      </div>
    </a>
  );
}

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '-50px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="w-full py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300 relative overflow-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-teal-500/15 to-cyan-500/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-br from-blue-500/15 to-indigo-500/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-br from-purple-500/15 to-pink-500/15 rounded-full blur-2xl animate-pulse delay-500" />
      </div>
      
      <div className="max-w-[1400px] w-full mx-auto relative z-20">
        <TextDecoderTitle text="Contacto" active={isVisible} Icon={FaEnvelope} />
        
        {/* Descripción */}
        <div className={`text-center mb-12 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        } transition-all duration-700 delay-300`}>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            ¿Tienes un proyecto en mente o quieres colaborar? Me encantaría escuchar de ti. 
            Estoy disponible para nuevas oportunidades y proyectos interesantes.
          </p>
        </div>
        
        {/* Grid de métodos de contacto */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <ContactCard
              key={index}
              method={method}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
        
        {/* Información adicional */}
        <div className={`text-center ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        } transition-all duration-700 delay-700`}>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border border-teal-500/20 rounded-full">
            <FaMapMarkerAlt className="text-teal-600 dark:text-teal-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              📍 Disponible para trabajo remoto y presencial en España
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
