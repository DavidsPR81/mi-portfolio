'use client';

import React, { useState, useRef, useEffect } from 'react';
import { FaTrophy, FaChartLine, FaCogs, FaUsers, FaLightbulb, FaAward, FaRocket } from 'react-icons/fa';

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
      {/* Patrón geométrico de fondo igual que About */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-32 right-20 w-28 h-28 border-2 border-teal-500 rounded-full animate-pulse hover:border-teal-400 transition-colors duration-300" style={{animationDuration: '5s'}}></div>
        <div className="absolute top-20 left-32 w-20 h-20 border-2 border-cyan-400 rotate-45 hover:border-cyan-300 transition-colors duration-300" style={{animation: 'spin 25s linear infinite'}}></div>
        <div className="absolute bottom-40 right-40 w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full opacity-20 animate-bounce hover:opacity-30 transition-opacity duration-300" style={{animationDuration: '7s'}}></div>
        <div className="absolute bottom-32 left-20 w-12 h-12 border-2 border-teal-400 rounded-lg rotate-12 animate-pulse hover:border-teal-300 transition-colors duration-300" style={{animationDuration: '4s'}}></div>
        <div className="absolute top-1/2 right-10 w-6 h-6 bg-cyan-400 rounded-full animate-ping hover:bg-cyan-300 transition-colors duration-300" style={{animationDuration: '6s'}}></div>
        <div className="absolute top-2/3 left-10 w-8 h-8 border border-teal-500 rotate-45 animate-pulse hover:border-teal-400 transition-colors duration-300" style={{animationDuration: '8s'}}></div>
      </div>
      
      <div className="max-w-[1400px] w-full mx-auto relative z-20">
        <TextDecoderTitle text="Logros Profesionales" active={isVisible} Icon={FaTrophy} />
        
        {/* Grid uniforme - todas las tarjetas del mismo tamaño */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {achievementsData.map((achievement, index) => {
            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl backdrop-blur-sm border border-gray-200/60 dark:border-gray-700/60 shadow-lg hover:shadow-2xl transition-all duration-700 hover:scale-105 hover:-translate-y-2 cursor-pointer h-80 flex flex-col ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } ${
                  // Fondos de colores suaves fijos
                  index === 0 ? 'bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-800/30' :
                  index === 1 ? 'bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-800/30' :
                  index === 2 ? 'bg-purple-50 dark:bg-purple-900/20 hover:bg-purple-100 dark:hover:bg-purple-800/30' :
                  index === 3 ? 'bg-orange-50 dark:bg-orange-900/20 hover:bg-orange-100 dark:hover:bg-orange-800/30' :
                  index === 4 ? 'bg-cyan-50 dark:bg-cyan-900/20 hover:bg-cyan-100 dark:hover:bg-cyan-800/30' :
                  'bg-indigo-50 dark:bg-indigo-900/20 hover:bg-indigo-100 dark:hover:bg-indigo-800/30'
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`
                }}
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                {/* Efectos de hover sutiles */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color}/8 opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                
                {/* Partículas flotantes minimalistas */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-teal-400/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-300" />
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-cyan-400/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-300 delay-200" />
                
                <div className="relative p-6 h-full flex flex-col justify-between">
                  {/* Icono y título */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`relative p-3 rounded-xl bg-gradient-to-r ${achievement.color} text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 flex-shrink-0`}>
                      <achievement.icon className="text-xl" />
                      <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300 leading-tight">
                        {achievement.title}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Descripción */}
                  <div className="flex-1 mb-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-4">
                      {achievement.description}
                    </p>
                  </div>
                  
                  {/* Indicador de logro */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-teal-600 dark:text-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>Logro #{index + 1}</span>
                      <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
                    </div>
                    <div className="text-xs text-gray-400 dark:text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Ver más
                    </div>
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
