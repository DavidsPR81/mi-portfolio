'use client';

import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { FaBriefcase, FaCode, FaUsers, FaCog, FaRocket, FaChevronRight, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

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
    <div className="mb-12">
      <div className="flex items-center gap-3 text-4xl font-extrabold tracking-wide relative select-none">
        <Icon
          className="text-teal-600 dark:text-teal-400 transition-all duration-500 hover:scale-105 hover:text-teal-500 dark:hover:text-teal-300"
        />
        <span className="bg-gradient-to-r from-teal-600/90 to-cyan-500/90 dark:from-teal-400/90 dark:to-cyan-300/90 bg-clip-text text-transparent transition-all duration-300">
          {decoded}
        </span>
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

interface ExperienceData {
  role: string;
  company: string;
  date: string;
  desc: string[];
  category: 'tech' | 'leadership' | 'technical';
  icon: React.ElementType;
  skills: string[];
  location?: string;
}

const experiences: ExperienceData[] = [
  {
    role: 'Colaborador en Desarrollo de Software',
    company: 'FotoGo',
    date: 'jun. 2025 – actualidad',
    location: 'Remoto',
    category: 'tech',
    icon: FaCode,
    skills: ['React Native', 'Expo Go', 'Node.js', 'Firebase', 'Google Cloud Functions', 'UI/UX'],
    desc: [
      'Participación activa en el desarrollo de la app FotoGo (versión móvil/web con React Native + Expo Go).',
      'Implementación de funcionalidades tanto en frontend como en backend.',
      'Automatización de procesos con Google Cloud Functions (Node.js).',
      'Configuración y administración avanzada de Firebase (Firestore, Authentication, Cloud Functions, etc.).',
      'Apoyo en el diseño UI/UX y gestión de la lógica del ranking semanal y recompensas.',
      'Integración de lógica de likes, comentarios, monedas y banners dinámicos en tiempo real.',
    ],
  },
  {
    role: 'Desarrollador de Aplicaciones',
    company: 'Ayuntamiento de Rota',
    date: '2025, 383 h',
    location: 'Rota, España',
    category: 'tech',
    icon: FaRocket,
    skills: ['Kotlin', 'PHP', 'Firebase', 'APIs RESTful', 'Android', 'UX/UI'],
    desc: [
      'Desarrollo de app Android para intranet municipal con mensajería interna.',
      'Backend y frontend con Kotlin y PHP; base de datos Firebase.',
      'Integración de APIs RESTful y enfoque UX/UI.',
    ],
  },
  {
    role: 'Jefe de Departamento',
    company: 'Mediamarkt Puerto Real',
    date: '2007–2024',
    location: 'Puerto Real, España',
    category: 'leadership',
    icon: FaUsers,
    skills: ['Gestión de Equipos', 'Atención al Cliente', 'Estrategias Comerciales', 'Control de Stock', 'KPIs', 'Análisis de Datos'],
    desc: [
      'Gestión de equipos y atención al cliente en entorno retail.',
      'Estrategias comerciales, control de stock y cumplimiento de KPIs.',
      'Análisis de datos para optimización de procesos.',
    ],
  },
  {
    role: 'Experiencia previa',
    company: 'Varios puestos técnicos',
    date: '2004–2007',
    location: 'Andalucía, España',
    category: 'technical',
    icon: FaCog,
    skills: ['Instalación Electrónica', 'Mantenimiento Técnico', 'Logística', 'Trabajo en Equipo'],
    desc: [
      'Instalador electrónico, técnico de mantenimiento y mozo de almacén.',
    ],
  },
];

function getCategoryConfig(category: ExperienceData['category']) {
  switch (category) {
    case 'tech':
      return {
        gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
        bgGradient: 'from-emerald-50/90 to-teal-100/90 dark:from-emerald-900/90 dark:to-teal-900/90',
        borderColor: 'border-emerald-300/50 dark:border-emerald-600/50',
        textColor: 'text-emerald-700 dark:text-emerald-300',
        accentColor: 'text-emerald-600 dark:text-emerald-400',
        shadowColor: 'shadow-emerald-500/20'
      };
    case 'leadership':
      return {
        gradient: 'from-purple-500 via-indigo-500 to-blue-500',
        bgGradient: 'from-purple-50/90 to-indigo-100/90 dark:from-purple-900/90 dark:to-indigo-900/90',
        borderColor: 'border-purple-300/50 dark:border-purple-600/50',
        textColor: 'text-purple-700 dark:text-purple-300',
        accentColor: 'text-purple-600 dark:text-purple-400',
        shadowColor: 'shadow-purple-500/20'
      };
    case 'technical':
      return {
        gradient: 'from-orange-500 via-amber-500 to-yellow-500',
        bgGradient: 'from-orange-50/90 to-amber-100/90 dark:from-orange-900/90 dark:to-amber-900/90',
        borderColor: 'border-orange-300/50 dark:border-orange-600/50',
        textColor: 'text-orange-700 dark:text-orange-300',
        accentColor: 'text-orange-600 dark:text-orange-400',
        shadowColor: 'shadow-orange-500/20'
      };
  }
}

function ExperienceJourneyNode({ experience, index, isActive, onClick }: {
  experience: ExperienceData;
  index: number;
  isActive: boolean;
  onClick: () => void;
}) {
  const config = useMemo(() => getCategoryConfig(experience.category), [experience.category]);
  const IconComponent = experience.icon;
  
  const handleClick = useCallback(() => {
    onClick();
  }, [onClick]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  }, [onClick]);
  
  return (
    <div className="relative flex flex-col items-center group">
      {/* Línea conectora */}
      {index < experiences.length - 1 && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-1 h-24 bg-gradient-to-b from-gray-300 to-gray-200 dark:from-gray-600 dark:to-gray-700 z-0" />
      )}
      
      {/* Nodo principal */}
      <div 
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
        aria-label={`Ver detalles de ${experience.role} en ${experience.company}`}
        aria-pressed={isActive}
        className={`relative z-10 w-20 h-20 md:w-16 md:h-16 rounded-full bg-gradient-to-br ${config.gradient} shadow-xl ${config.shadowColor} cursor-pointer transition-all duration-500 hover:scale-110 hover:shadow-2xl focus:scale-110 focus:shadow-2xl focus:outline-none focus:ring-4 focus:ring-teal-500/50 flex items-center justify-center group-hover:rotate-6 ${
          isActive ? 'scale-125 shadow-2xl' : ''
        }`}
        style={{ animationDelay: `${index * 0.2}s` }}
      >
        <IconComponent className="text-white text-xl" />
        
        {/* Pulso animado para el nodo activo */}
        {isActive && (
          <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${config.gradient} animate-ping opacity-30`} />
        )}
      </div>
      
      {/* Etiqueta de año */}
      <div className={`mt-3 px-3 py-1 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border ${config.borderColor} shadow-lg`}>
        <span className={`text-xs font-bold ${config.textColor}`}>
          {experience.date.includes('–') ? experience.date.split('–')[0].trim() : experience.date.split(',')[0]}
        </span>
      </div>
      
      {/* Título del rol (visible en hover) */}
      <div className={`absolute top-24 md:top-20 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-20 w-48`}>
        <div className={`bg-gradient-to-r ${config.bgGradient} backdrop-blur-sm rounded-lg border ${config.borderColor} shadow-xl p-3 text-center`}>
          <h4 className={`font-bold text-sm ${config.textColor} leading-tight`}>{experience.role}</h4>
          <p className={`text-xs ${config.accentColor} mt-1`}>{experience.company}</p>
        </div>
      </div>
    </div>
  );
}

const MemoizedExperienceDetails = React.memo(function ExperienceDetails({ experience }: { experience: ExperienceData }) {
  const config = useMemo(() => getCategoryConfig(experience.category), [experience.category]);
  const IconComponent = experience.icon;
  
  return (
    <div className={`bg-gradient-to-br ${config.bgGradient} backdrop-blur-sm rounded-2xl border ${config.borderColor} shadow-2xl p-6 md:p-8 animate-fade-in-up`}>
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${config.gradient} shadow-lg flex items-center justify-center`}>
              <IconComponent className="text-white text-lg" />
            </div>
            <div>
              <h3 className={`text-xl font-bold ${config.textColor} leading-tight`}>{experience.role}</h3>
              <p className={`font-semibold ${config.accentColor}`}>{experience.company}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300 mb-4">
            <div className="flex items-center gap-1">
              <FaClock className="text-xs" aria-hidden="true" />
              <span>{experience.date}</span>
            </div>
            {experience.location && (
              <div className="flex items-center gap-1">
                <FaMapMarkerAlt className="text-xs" aria-hidden="true" />
                <span>{experience.location}</span>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Descripción */}
      <div className="mb-6">
        <h4 className={`font-semibold ${config.textColor} mb-3 flex items-center gap-2`}>
          <FaChevronRight className={`${config.accentColor} text-sm`} aria-hidden="true" />
          Responsabilidades
        </h4>
        <ul className="space-y-2" role="list">
          {experience.desc.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
              <span className={`${config.accentColor} font-bold mt-1 flex-shrink-0`} aria-hidden="true">•</span>
              <span className="text-sm leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Skills */}
      <div>
        <h4 className={`font-semibold ${config.textColor} mb-3 flex items-center gap-2`}>
          <FaChevronRight className={`${config.accentColor} text-sm`} aria-hidden="true" />
          Tecnologías y Competencias
        </h4>
        <div className="flex flex-wrap gap-2">
          {experience.skills.map((skill, idx) => (
            <span
              key={idx}
              className={`px-3 py-1 bg-white/70 dark:bg-gray-800/70 ${config.accentColor} text-xs font-medium rounded-full border ${config.borderColor} hover:scale-105 transition-transform duration-200 shadow-sm`}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
});

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeExperience, setActiveExperience] = useState(0);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const handleExperienceChange = useCallback((index: number) => {
    setActiveExperience(index);
  }, []);

  return (
    <section
      id="experience"
      ref={ref}
      className="w-full py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300 relative animate-fade-in-up overflow-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
      aria-labelledby="experience-title"
    >
      {/* Patrón geométrico de fondo */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10" aria-hidden="true">
        <div className="absolute top-32 right-20 w-28 h-28 border-2 border-teal-500 rounded-full animate-pulse" style={{animationDuration: '5s'}}></div>
        <div className="absolute top-20 left-32 w-20 h-20 border-2 border-cyan-400 rotate-45" style={{animation: 'spin 25s linear infinite'}}></div>
        <div className="absolute bottom-40 right-40 w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full opacity-20 animate-bounce" style={{animationDuration: '7s'}}></div>
        <div className="absolute bottom-32 left-20 w-12 h-12 border-2 border-teal-400 rounded-lg rotate-12 animate-pulse" style={{animationDuration: '4s'}}></div>
        <div className="absolute top-1/2 right-10 w-6 h-6 bg-cyan-400 rounded-full animate-ping" style={{animationDuration: '6s'}}></div>
        <div className="absolute top-2/3 left-10 w-8 h-8 border border-teal-500 rotate-45 animate-pulse" style={{animationDuration: '8s'}}></div>
      </div>
      
      {/* Contenedor principal */}
      <div className="max-w-[1400px] w-full mx-auto relative z-20">
        <div id="experience-title">
          <TextDecoderTitle text="Experiencia Profesional" active={isVisible} Icon={FaBriefcase} />
        </div>
        
        {/* Resumen de trayectoria */}
        <div className="w-full mb-16">
          <div className="text-left max-w-full">
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              <strong>21 años</strong> de trayectoria profesional que abarca desde roles técnicos hasta liderazgo comercial, 
              culminando en una <strong>transición exitosa al desarrollo de software</strong> con proyectos reales en tecnologías modernas. 
              Esta diversidad de experiencias me ha proporcionado una perspectiva integral que combina conocimiento técnico, 
              habilidades de gestión y comprensión profunda de las necesidades del usuario final.
            </p>
          </div>
        </div>
        
        {/* Journey Map Interactivo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Timeline Vertical Interactivo */}
          <div className="flex flex-col items-center space-y-8">
            <h3 className="text-2xl font-bold text-teal-600 dark:text-teal-400 mb-8 text-center">
              Mapa de Trayectoria Profesional
            </h3>
            
            <div className="flex flex-col space-y-10 md:space-y-8" role="tablist" aria-label="Experiencias profesionales">
              {experiences.map((experience, index) => (
                <div key={index} role="tab" aria-selected={activeExperience === index} aria-controls={`experience-panel-${index}`}>
                  <ExperienceJourneyNode
                    experience={experience}
                    index={index}
                    isActive={activeExperience === index}
                    onClick={() => handleExperienceChange(index)}
                  />
                </div>
              ))}
            </div>
            
            {/* Indicador de progresión */}
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/50 dark:to-cyan-900/50 rounded-full border border-teal-200 dark:border-teal-700">
                <span className="text-sm font-medium text-teal-700 dark:text-teal-300">
                  Evolución: Técnico → Líder → Desarrollador
                </span>
              </div>
            </div>
          </div>
          
          {/* Panel de Detalles - Alineado con los botones */}
          <div className="lg:mt-20" role="tabpanel" id={`experience-panel-${activeExperience}`} aria-labelledby={`experience-tab-${activeExperience}`}>
            <MemoizedExperienceDetails experience={experiences[activeExperience]} />
          </div>
        </div>
      </div>
    </section>
  );
}
