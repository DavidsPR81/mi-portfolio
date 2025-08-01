'use client';

import React, { useState, useRef, useEffect } from 'react';
import { FaTrophy, FaChartLine, FaCogs, FaUsers, FaLightbulb, FaAward, FaRocket } from 'react-icons/fa';

interface TextDecoderTitleProps {
  text: string;
  active: boolean;
  Icon: React.ElementType;
}

function TextDecoderTitle({ text, active, Icon }: TextDecoderTitleProps) {
  const [decoded, setDecoded] = useState('');
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{};:,.<>?';

  useEffect(() => {
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
    <div className="mb-16">
      <div className="flex items-center gap-4 text-4xl font-extrabold bg-gradient-to-r from-teal-600 to-cyan-500 dark:from-teal-400 dark:to-cyan-300 bg-clip-text text-transparent tracking-wide relative select-none">
        <Icon
          className={`text-[1.8rem] text-teal-600 dark:text-teal-400 transition-all duration-700 ease-out mt-1 hover:scale-110 hover:text-teal-500 dark:hover:text-teal-300
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

const achievementsData = [
  {
    title: '+10% Crecimiento en Ventas',
    description: 'Implementación de estrategias de planificación y gestión comercial que resultaron en un incremento sostenido de las ventas del departamento.',
    icon: FaChartLine,
    color: 'from-green-500 to-emerald-600'
  },
  {
    title: 'Optimización de Procesos de Venta',
    description: 'Reestructuración y mejora de los flujos de trabajo de venta, reduciendo tiempos de respuesta y aumentando la eficiencia del equipo.',
    icon: FaCogs,
    color: 'from-blue-500 to-indigo-600'
  },
  {
    title: 'Análisis de Mercado y KPIs',
    description: 'Implementación de sistemas de seguimiento y análisis de indicadores clave de rendimiento para la toma de decisiones estratégicas.',
    icon: FaLightbulb,
    color: 'from-purple-500 to-pink-600'
  },
  {
    title: 'Liderazgo y Desarrollo de Talento',
    description: 'Gestión efectiva del equipo de ventas, enfocándose en el desarrollo profesional y la mejora del rendimiento individual y colectivo.',
    icon: FaUsers,
    color: 'from-orange-500 to-red-600'
  },
  {
    title: 'Mejoras en Control de Stock',
    description: 'Optimización de la gestión de inventario y control de stock, reduciendo pérdidas y mejorando la disponibilidad de productos.',
    icon: FaRocket,
    color: 'from-cyan-500 to-blue-600'
  },
  {
    title: 'Comunicación Efectiva y Resolución de Conflictos',
    description: 'Establecimiento de canales de comunicación eficientes y protocolos para la resolución rápida y efectiva de conflictos.',
    icon: FaAward,
    color: 'from-indigo-500 to-purple-600'
  }
];

export default function Achievements() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
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
      id="logros" 
      className="w-full py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300 relative overflow-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-yellow-500/15 to-orange-500/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-br from-red-500/15 to-pink-500/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-br from-purple-500/15 to-indigo-500/15 rounded-full blur-2xl animate-pulse delay-500" />
      </div>
      
      <div className="max-w-[1400px] w-full mx-auto relative z-20">
        <TextDecoderTitle text="Logros Profesionales" active={isVisible} Icon={FaTrophy} />
        
        {/* Diseño tipo masonry/bento box */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
          {achievementsData.map((achievement, index) => {
            const isLarge = index === 0 || index === 2; // Tarjetas 0 (10% Crecimiento) y 2 (Análisis de Mercado) del mismo tamaño
            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/90 via-white/80 to-white/90 dark:from-gray-800/90 dark:via-gray-700/80 dark:to-gray-800/90 backdrop-blur-sm border border-white/30 dark:border-gray-600/30 shadow-lg hover:shadow-2xl transition-all duration-700 hover:scale-105 hover:-translate-y-2 cursor-pointer ${
                  isLarge ? 'md:col-span-2 lg:col-span-1 lg:row-span-2' : ''
                } ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`
                }}
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                {/* Efectos de fondo */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                
                {/* Partículas flotantes */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-yellow-400/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-300" />
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-orange-400/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-300 delay-200" />
                <div className="absolute top-1/2 right-6 w-1.5 h-1.5 bg-red-400/50 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-300 delay-400" />
                
                <div className={`relative p-6 h-full flex flex-col ${isLarge ? 'justify-center' : ''}`}>
                  {/* Icono y título */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`relative p-3 rounded-xl bg-gradient-to-r ${achievement.color} text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 flex-shrink-0`}>
                      <achievement.icon className={`${isLarge ? 'text-2xl' : 'text-xl'}`} />
                      <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`${isLarge ? 'text-xl' : 'text-lg'} font-bold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300 leading-tight`}>
                        {achievement.title}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Descripción */}
                  <div className="flex-1">
                    <p className={`${isLarge ? 'text-base' : 'text-sm'} text-gray-600 dark:text-gray-400 leading-relaxed`}>
                      {achievement.description}
                    </p>
                  </div>
                  
                  {/* Indicador de expansión */}
                  <div className="mt-4 flex items-center gap-2 text-xs text-teal-600 dark:text-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Logro destacado</span>
                    <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
                  </div>
                </div>
                
                {/* Efecto shimmer */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                
                {/* Borde animado */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-teal-500/30 transition-colors duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
