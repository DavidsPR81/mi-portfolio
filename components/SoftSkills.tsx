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
      id="aptitudes" 
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
        <TextDecoderTitle text="Aptitudes Personales" active={isVisible} Icon={FaUserGraduate} />
        
        {/* Diseño en zigzag escalonado - único y diferente */}
        <div className="relative max-w-6xl mx-auto">
          {softSkillsData.map((skill, index) => {
            const isEven = index % 2 === 0;
            const isLast = index === softSkillsData.length - 1;
            
            return (
              <div
                key={index}
                className={`relative mb-8 lg:mb-12 ${
                  isEven ? 'lg:ml-0 lg:mr-auto lg:pr-8' : 'lg:ml-auto lg:mr-0 lg:pl-8'
                } ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: `${index * 200}ms`,
                  maxWidth: '500px',
                  width: '100%'
                }}
              >
                {/* Línea conectora */}
                {!isLast && (
                  <div className={`hidden lg:block absolute top-full left-1/2 transform -translate-x-1/2 w-px h-12 bg-gradient-to-b from-teal-400/60 to-transparent ${
                    isEven ? 'lg:left-3/4' : 'lg:left-1/4'
                  }`} />
                )}
                
                {/* Número de habilidad */}
                <div className={`absolute -top-4 ${isEven ? 'lg:-left-6' : 'lg:-right-6'} left-4 w-8 h-8 bg-gradient-to-r ${skill.color} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg z-10`}>
                  {index + 1}
                </div>
                
                <div
                  className={`group relative overflow-hidden rounded-2xl backdrop-blur-sm border border-gray-200/60 dark:border-gray-700/60 shadow-lg hover:shadow-2xl transition-all duration-700 hover:scale-105 cursor-pointer ${
                    index === 0 ? 'bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-800/30' :
                    index === 1 ? 'bg-emerald-50 dark:bg-emerald-900/20 hover:bg-emerald-100 dark:hover:bg-emerald-800/30' :
                    index === 2 ? 'bg-purple-50 dark:bg-purple-900/20 hover:bg-purple-100 dark:hover:bg-purple-800/30' :
                    index === 3 ? 'bg-orange-50 dark:bg-orange-900/20 hover:bg-orange-100 dark:hover:bg-orange-800/30' :
                    index === 4 ? 'bg-cyan-50 dark:bg-cyan-900/20 hover:bg-cyan-100 dark:hover:bg-cyan-800/30' :
                    'bg-indigo-50 dark:bg-indigo-900/20 hover:bg-indigo-100 dark:hover:bg-indigo-800/30'
                  } ${
                    isEven ? 'lg:hover:translate-x-2' : 'lg:hover:-translate-x-2'
                  }`}
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                >
                  {/* Efectos de hover sutiles */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color}/8 opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                  
                  {/* Indicador de dirección */}
                  <div className={`absolute top-1/2 transform -translate-y-1/2 ${isEven ? '-right-3' : '-left-3'} w-6 h-6 bg-gradient-to-r ${skill.color} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center`}>
                    <div className={`w-2 h-2 border-t-2 border-r-2 border-white transform ${isEven ? 'rotate-45' : '-rotate-135'}`} />
                  </div>
                  
                  {/* Partículas flotantes minimalistas */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-teal-400/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-300" />
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-cyan-400/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-300 delay-200" />
                  
                  <div className="relative p-6">
                    {/* Icono y título */}
                    <div className={`flex items-start gap-4 mb-4 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                      <div className={`relative p-3 rounded-xl bg-gradient-to-r ${skill.color} text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 flex-shrink-0`}>
                        <skill.icon className="text-xl" />
                        <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div className={`flex-1 ${isEven ? 'lg:text-left' : 'lg:text-right'}`}>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300 leading-tight">
                          {skill.title}
                        </h3>
                      </div>
                    </div>
                    
                    {/* Descripción */}
                    <div className="mb-4">
                      <p className={`text-sm text-gray-600 dark:text-gray-400 leading-relaxed ${isEven ? 'lg:text-left' : 'lg:text-right'}`}>
                        {skill.description}
                      </p>
                    </div>
                    
                    {/* Skills en lista horizontal con badges */}
                    <div className={`flex flex-wrap gap-2 ${isEven ? 'lg:justify-start' : 'lg:justify-end justify-start'}`}>
                      {skill.skills.map((item, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-gray-100/80 to-gray-50/80 dark:from-gray-700/60 dark:to-gray-600/60 text-gray-700 dark:text-gray-300 border border-gray-300/30 dark:border-gray-500/30 hover:border-teal-400/50 hover:bg-gradient-to-r hover:from-teal-50/80 hover:to-cyan-50/80 dark:hover:from-teal-900/30 dark:hover:to-cyan-900/30 hover:text-teal-700 dark:hover:text-teal-300 transition-all duration-300 hover:scale-105"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    
                    {/* Indicador de habilidad */}
                    <div className={`flex items-center mt-4 ${isEven ? 'justify-start' : 'lg:justify-end justify-start'}`}>
                      <div className="flex items-center gap-2 text-xs text-teal-600 dark:text-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span>Habilidad destacada</span>
                        <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Efecto shimmer */}
                  <div className={`absolute inset-0 transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 ${
                    isEven ? '-translate-x-full group-hover:translate-x-full' : 'translate-x-full group-hover:-translate-x-full'
                  }`} />
                  
                  {/* Borde animado */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-teal-500/30 transition-colors duration-500" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
