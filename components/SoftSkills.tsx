'use client';

import React, { useState, useRef, useEffect } from 'react';
import { FaUserGraduate, FaLightbulb, FaUsers, FaClock, FaComments, FaBrain, FaHandshake, FaChartLine } from 'react-icons/fa';

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

interface SoftSkill {
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  skills: string[];
}

const softSkillsData: SoftSkill[] = [
  {
    title: 'Liderazgo y Gestión',
    description: 'Capacidad para dirigir equipos y tomar decisiones estratégicas',
    icon: FaUsers,
    color: 'from-blue-500 to-indigo-600',
    skills: ['Gestión de equipos multidisciplinarios', 'Toma de decisiones bajo presión', 'Planificación estratégica', 'Delegación efectiva']
  },
  {
    title: 'Resolución de Problemas',
    description: 'Pensamiento crítico y adaptación al cambio',
    icon: FaBrain,
    color: 'from-emerald-500 to-teal-600',
    skills: ['Análisis crítico de situaciones', 'Innovación en soluciones', 'Adaptabilidad al cambio', 'Pensamiento lateral']
  },
  {
    title: 'Comunicación Efectiva',
    description: 'Habilidades interpersonales y trabajo colaborativo',
    icon: FaComments,
    color: 'from-purple-500 to-pink-600',
    skills: ['Comunicación asertiva', 'Escucha activa', 'Trabajo en equipo', 'Negociación y mediación']
  },
  {
    title: 'Organización y Gestión',
    description: 'Optimización del tiempo y priorización de tareas',
    icon: FaClock,
    color: 'from-orange-500 to-red-600',
    skills: ['Gestión eficiente del tiempo', 'Priorización de objetivos', 'Organización de recursos', 'Planificación de proyectos']
  },
  {
    title: 'Aprendizaje Continuo',
    description: 'Desarrollo profesional y actualización constante',
    icon: FaLightbulb,
    color: 'from-cyan-500 to-blue-600',
    skills: ['Autodidacta en nuevas tecnologías', 'Mentalidad de crecimiento', 'Curiosidad intelectual', 'Formación continua']
  },
  {
    title: 'Orientación a Resultados',
    description: 'Enfoque en objetivos y mejora continua',
    icon: FaChartLine,
    color: 'from-indigo-500 to-purple-600',
    skills: ['Orientación a objetivos', 'Análisis de KPIs', 'Mejora continua', 'Eficiencia operacional']
  }
];

export default function SoftSkills() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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
      id="aptitudes" 
      className="w-full py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300 relative overflow-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-purple-500/15 to-pink-500/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 md:w-48 md:h-48 bg-gradient-to-br from-teal-500/15 to-cyan-500/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-blue-500/15 to-indigo-500/15 rounded-full blur-2xl animate-pulse delay-500" />
      </div>
      
      <div className="max-w-[1400px] w-full mx-auto relative z-20">
        <TextDecoderTitle text="Aptitudes Personales" active={isVisible} Icon={FaUserGraduate} />
        
        {/* DISEÑO RESPONSIVE: Timeline en desktop, Grid en móvil */}
        <div className="relative">
          {/* Línea central - Solo visible en desktop */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-teal-500/30 via-cyan-500/30 to-purple-500/30 rounded-full" />
          
          {/* DESKTOP: Timeline layout */}
          <div className="hidden lg:block space-y-16">
            {softSkillsData.map((skill, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    isLeft ? 'justify-start' : 'justify-end'
                  } ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  } transition-all duration-700`}
                  style={{
                    transitionDelay: `${index * 200}ms`
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Contenido */}
                  <div className={`w-5/12 ${isLeft ? 'pr-8' : 'pl-8'}`}>
                    <div className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/90 via-white/80 to-white/90 dark:from-gray-800/90 dark:via-gray-700/80 dark:to-gray-800/90 backdrop-blur-sm border border-white/30 dark:border-gray-600/30 shadow-lg hover:shadow-2xl transition-all duration-700 hover:scale-105 ${
                      hoveredIndex === index ? 'shadow-2xl scale-105' : ''
                    }`}>
                      {/* Efectos de fondo */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className={`absolute inset-0 bg-gradient-to-br ${skill.color.replace('from-', 'from-').replace('to-', 'to-')}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                      
                      {/* Partículas flotantes */}
                      <div className="absolute top-4 right-4 w-2 h-2 bg-teal-400/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-300" />
                      <div className="absolute bottom-4 left-4 w-1 h-1 bg-cyan-400/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-300 delay-200" />
                      
                      <div className="relative p-6">
                        {/* Header */}
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`relative p-3 rounded-xl bg-gradient-to-r ${skill.color} text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                            <skill.icon className="text-xl" />
                            <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300">
                              {skill.title}
                            </h3>
                          </div>
                        </div>
                        
                        {/* Descripción */}
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                          {skill.description}
                        </p>
                        
                        {/* Skills en lista horizontal con badges */}
                        <div className="flex flex-wrap gap-2">
                          {skill.skills.map((item, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-teal-500/10 to-cyan-500/10 text-teal-700 dark:text-teal-300 border border-teal-500/20 hover:border-teal-500/40 transition-all duration-300 hover:scale-105"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Efecto shimmer */}
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                    </div>
                  </div>
                  
                  {/* Punto central */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10 group-hover:scale-125 transition-transform duration-300" />
                  
                  {/* Línea conectora */}
                  <div className={`absolute top-1/2 w-8 h-0.5 bg-gradient-to-r from-teal-500/50 to-cyan-500/50 ${
                    isLeft ? 'left-1/2 ml-2' : 'right-1/2 mr-2'
                  } opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                </div>
              );
            })}
          </div>

          {/* MÓVIL Y TABLET: Grid layout */}
          <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {softSkillsData.map((skill, index) => (
              <div
                key={index}
                className={`${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } transition-all duration-700`}
                style={{
                  transitionDelay: `${index * 150}ms`
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/90 via-white/80 to-white/90 dark:from-gray-800/90 dark:via-gray-700/80 dark:to-gray-800/90 backdrop-blur-sm border border-white/30 dark:border-gray-600/30 shadow-lg hover:shadow-2xl transition-all duration-700 hover:scale-105 ${
                  hoveredIndex === index ? 'shadow-2xl scale-105' : ''
                }`}>
                  {/* Efectos de fondo */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color.replace('from-', 'from-').replace('to-', 'to-')}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                  
                  {/* Partículas flotantes */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-teal-400/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-300" />
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-cyan-400/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-300 delay-200" />
                  
                  <div className="relative p-4 sm:p-6">
                    {/* Header */}
                    <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                      <div className={`relative p-2 sm:p-3 rounded-xl bg-gradient-to-r ${skill.color} text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                        <skill.icon className="text-lg sm:text-xl" />
                        <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300">
                          {skill.title}
                        </h3>
                      </div>
                    </div>
                    
                    {/* Descripción */}
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 leading-relaxed">
                      {skill.description}
                    </p>
                    
                    {/* Skills en lista horizontal con badges */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {skill.skills.map((item, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-teal-500/10 to-cyan-500/10 text-teal-700 dark:text-teal-300 border border-teal-500/20 hover:border-teal-500/40 transition-all duration-300 hover:scale-105"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Efecto shimmer */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
