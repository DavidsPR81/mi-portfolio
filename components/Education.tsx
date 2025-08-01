'use client';

import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import {
  FaGraduationCap,
  FaCertificate,
  FaCode,
  FaClock,
  FaUniversity,
  FaAward,
  FaMedal,
  FaUserTie,
  FaSchool,
  FaBookOpen,
  FaLaptopCode,
  FaChalkboardTeacher,
  FaLightbulb,
  FaShieldAlt,
  FaDocker,
  FaCloud,
  FaHardHat,
  FaChartLine,
  FaFileAlt,
  FaLanguage,
  FaChevronRight
} from 'react-icons/fa';

interface EducationItem {
  title: string;
  institution: string;
  period?: string; // Solo para académico y certificados
  hours?: string;
  description: string[];
  category: 'academic' | 'certificate' | 'course';
  order: number;
}

const educationData: EducationItem[] = [
  // Formación Académica (Verde) - Con fechas, orden: más moderno a más antiguo
  {
    title: 'Curso Universitario Full Stack Developer',
    institution: 'UCAM – Educa Open',
    period: '2024 - 2025',
    hours: '200 h',
    description: ['Formación integral en tecnologías Frontend y Backend.'],
    category: 'academic',
    order: 1
  },
  {
    title: 'CFGS Desarrollo de Aplicaciones Multiplataforma (DAM)',
    institution: 'Ilerna',
    period: '2023 - 2025',
    hours: '2000 h',
    description: ['Especialización en desarrollo de aplicaciones multiplataforma robustas y escalables.'],
    category: 'academic',
    order: 2
  },
  {
    title: 'CFGM Electrónica de Equipos de Consumo',
    institution: 'Salesianos',
    period: '1998 - 2000',
    hours: '2000 h',
    description: ['Bases sólidas en electrónica aplicada al consumo.'],
    category: 'academic',
    order: 3
  },
  // Certificados Profesionales (Amarillo) - Con fechas
  {
    title: 'Google IT Automation with Python',
    institution: 'Coursera',
    period: '2025',
    hours: '240 h',
    description: ['Certificación profesional en automatización y scripting con Python.'],
    category: 'certificate',
    order: 1
  },
  {
    title: 'Google Data Analytics Professional Certificate',
    institution: 'Coursera',
    period: '2025',
    hours: '240 h',
    description: ['Formación avanzada en análisis y visualización de datos.'],
    category: 'certificate',
    order: 2
  },
  {
    title: 'Google Cybersecurity Professional Certificate',
    institution: 'Coursera',
    period: '2025',
    hours: '280 h',
    description: ['Especialización en fundamentos de ciberseguridad.'],
    category: 'certificate',
    order: 3
  },
  // Cursos y Especializaciones (Azul) - SIN fechas, agrupados por tipo
  // 1. Idiomas
  {
    title: 'Inglés B1',
    institution: 'En proceso de certificación',
    description: ['Competencia comunicativa en inglés a nivel intermedio.'],
    category: 'course',
    order: 1
  },
  // 2. Informática y Programación
  {
    title: 'Programación con JavaScript',
    institution: 'Fundación Telefónica',
    hours: '40 h',
    description: ['Introducción avanzada a JavaScript para desarrollo web.'],
    category: 'course',
    order: 2
  },
  {
    title: 'Introducción a Docker',
    institution: 'Educa Open',
    hours: '18 h',
    description: ['Conceptos y uso básico de contenedores Docker.'],
    category: 'course',
    order: 3
  },
  {
    title: 'Administración de Sistemas Cloud Microsoft',
    institution: 'Educa Open',
    hours: '20 h',
    description: ['Gestión y administración de entornos cloud Microsoft.'],
    category: 'course',
    order: 4
  },
  {
    title: 'Ciberseguridad y Protección de Datos',
    institution: 'Educa Open',
    hours: '10 h',
    description: ['Formación específica en protección y privacidad de datos.'],
    category: 'course',
    order: 5
  },
  {
    title: 'MF0487: Auditoría de Seguridad Informática',
    institution: 'MainJobs',
    hours: '60 h',
    description: ['Análisis y evaluación de sistemas de seguridad.'],
    category: 'course',
    order: 6
  },
  {
    title: 'Ofimática Nivel Avanzado',
    institution: '',
    hours: '300 h',
    description: ['Dominio avanzado de herramientas ofimáticas.'],
    category: 'course',
    order: 7
  },
  // 3. Metodologías y Estilo de Trabajo
  {
    title: 'Metodología Scrum y JIRA para gestión ágil de proyectos',
    institution: 'Educa Open',
    hours: '21 h',
    description: ['Prácticas ágiles para gestión de proyectos TI.'],
    category: 'course',
    order: 8
  },
  // 4. Otros (no informática)
  {
    title: 'Certificado PRL',
    institution: 'Laborali',
    hours: '60 h',
    description: ['Formación en prevención de riesgos laborales.'],
    category: 'course',
    order: 9
  },
  {
    title: 'Formación Inicial Distribuidores Nivel 3 Canal Distribución',
    institution: 'Asnef',
    hours: '61 h',
    description: ['Capacitación para canales de distribución.'],
    category: 'course',
    order: 10
  }
];

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

interface TimelineItemProps {
  item: EducationItem;
  index: number;
  isLeft: boolean;
}

function TimelineItem({ item, index, isLeft }: TimelineItemProps) {
  const getCategoryConfig = (category: string) => {
    switch (category) {
      case 'academic':
        return {
          icon: FaGraduationCap,
          bgGradient: 'from-green-50/95 to-emerald-100/95 dark:from-green-800/95 dark:to-emerald-900/95',
          borderColor: 'border-green-200/60 dark:border-green-600/40',
          iconColor: 'text-green-600 dark:text-green-400',
          titleColor: 'text-green-800 dark:text-green-300',
          dotColor: 'bg-green-600 border-green-300'
        };
      case 'certificate':
        return {
          icon: FaAward,
          bgGradient: 'from-amber-50/95 to-orange-100/95 dark:from-amber-800/95 dark:to-orange-900/95',
          borderColor: 'border-amber-200/60 dark:border-amber-600/40',
          iconColor: 'text-amber-600 dark:text-amber-400',
          titleColor: 'text-amber-800 dark:text-amber-300',
          dotColor: 'bg-amber-600 border-amber-300'
        };
      case 'course':
        return {
          icon: getSpecificCourseIcon(item.title),
          bgGradient: 'from-blue-50/95 to-indigo-100/95 dark:from-blue-800/95 dark:to-indigo-900/95',
          borderColor: 'border-blue-200/60 dark:border-blue-600/40',
          iconColor: 'text-blue-600 dark:text-blue-400',
          titleColor: 'text-blue-800 dark:text-blue-300',
          dotColor: 'bg-blue-600 border-blue-300'
        };
      default:
        return {
          icon: FaGraduationCap,
          bgGradient: 'from-gray-50/95 to-gray-100/95 dark:from-gray-800/95 dark:to-gray-900/95',
          borderColor: 'border-gray-200/60 dark:border-gray-600/40',
          iconColor: 'text-gray-600 dark:text-gray-400',
          titleColor: 'text-gray-800 dark:text-gray-300',
          dotColor: 'bg-gray-600 border-gray-300'
        };
    }
  };

  const getSpecificCourseIcon = (title: string) => {
    if (title.includes('JavaScript')) return FaCode;
    if (title.includes('Auditoría') || title.includes('Ciberseguridad')) return FaShieldAlt;
    if (title.includes('Docker')) return FaDocker;
    if (title.includes('Cloud')) return FaCloud;
    if (title.includes('PRL')) return FaHardHat;
    if (title.includes('Distribuidores')) return FaChartLine;
    if (title.includes('Scrum')) return FaLaptopCode;
    if (title.includes('Ofimática')) return FaFileAlt;
    if (title.includes('Inglés')) return FaLanguage;
    return FaLightbulb;
  };

  const config = getCategoryConfig(item.category);
  const IconComponent = config.icon;

  return (
    <div className={`flex items-center mb-12 animate-fade-in-up`} style={{ animationDelay: `${index * 0.2}s` }}>
      {/* Contenido izquierdo */}
      <div className={`w-5/12 ${isLeft ? 'pr-8' : 'pl-8 order-3'}`}>
        <div
          className={`bg-gradient-to-br ${config.bgGradient} backdrop-blur-sm rounded-2xl border ${config.borderColor} shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 p-6 group`}
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${config.iconColor} bg-white/50 dark:bg-gray-800/50 group-hover:scale-110 transition-transform duration-300`}>
                <IconComponent className="text-xl" />
              </div>
              <div>
                <h3 className={`font-bold text-lg ${config.titleColor} group-hover:text-opacity-80 transition-colors duration-300`}>
                  {item.title}
                </h3>
                {item.institution && (
                  <p className={`text-sm font-semibold ${config.iconColor}`}>{item.institution}</p>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-3 text-sm text-gray-600 dark:text-gray-400">
            {/* Solo mostrar período para académico y certificados */}
            {item.period && (
              <span className="font-mono">{item.period}</span>
            )}
            {item.hours && (
              <span className="flex items-center gap-1">
                <FaClock className="text-xs" />
                {item.hours}
              </span>
            )}
          </div>

          <ul className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed space-y-1">
            {item.description.map((desc, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className={`w-1.5 h-1.5 rounded-full ${config.dotColor} mt-2 flex-shrink-0`} />
                {desc}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Línea central y punto */}
      <div className="w-2/12 flex justify-center relative">
        <div className="w-0.5 h-24 bg-gradient-to-b from-teal-400 to-cyan-500 dark:from-teal-500 dark:to-cyan-400 opacity-60" />
        <div className={`absolute top-8 w-4 h-4 ${config.dotColor} dark:border-gray-700 rounded-full shadow-lg animate-pulse-slow`} />
      </div>

      {/* Espacio derecho */}
      <div className={`w-5/12 ${!isLeft ? 'pr-8' : 'pl-8 order-1'}`} />
    </div>
  );
}

// Función para obtener configuración de colores por categoría
function getCategoryConfig(category: 'academic' | 'certificate' | 'course') {
  switch (category) {
    case 'academic':
      return {
        gradient: 'from-green-500 via-emerald-500 to-teal-500',
        bgGradient: 'from-green-50/90 to-emerald-100/90 dark:from-green-900/90 dark:to-emerald-900/90',
        borderColor: 'border-green-300/50 dark:border-green-600/50',
        textColor: 'text-green-700 dark:text-green-300',
        accentColor: 'text-green-600 dark:text-green-400',
        shadowColor: 'shadow-green-500/20',
        buttonBg: 'bg-green-600',
        hoverBg: 'hover:bg-green-100 dark:hover:bg-green-900/50 hover:text-green-600 dark:hover:text-green-400'
      };
    case 'certificate':
      return {
        gradient: 'from-amber-500 via-orange-500 to-yellow-500',
        bgGradient: 'from-amber-50/90 to-orange-100/90 dark:from-amber-900/90 dark:to-orange-900/90',
        borderColor: 'border-amber-300/50 dark:border-amber-600/50',
        textColor: 'text-amber-700 dark:text-amber-300',
        accentColor: 'text-amber-600 dark:text-amber-400',
        shadowColor: 'shadow-amber-500/20',
        buttonBg: 'bg-amber-600',
        hoverBg: 'hover:bg-amber-100 dark:hover:bg-amber-900/50 hover:text-amber-600 dark:hover:text-amber-400'
      };
    case 'course':
      return {
        gradient: 'from-blue-500 via-indigo-500 to-purple-500',
        bgGradient: 'from-blue-50/90 to-indigo-100/90 dark:from-blue-900/90 dark:to-indigo-900/90',
        borderColor: 'border-blue-300/50 dark:border-blue-600/50',
        textColor: 'text-blue-700 dark:text-blue-300',
        accentColor: 'text-blue-600 dark:text-blue-400',
        shadowColor: 'shadow-blue-500/20',
        buttonBg: 'bg-blue-600',
        hoverBg: 'hover:bg-blue-100 dark:hover:bg-blue-900/50 hover:text-blue-600 dark:hover:text-blue-400'
      };
  }
}

export default function Education() {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState<'academic' | 'certificate' | 'course'>('academic');
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const filteredData = useMemo(() => 
    educationData
      .filter(item => item.category === filter)
      .sort((a, b) => a.order - b.order),
    [filter]
  );

  const totalHours = useMemo(() => 
    educationData.reduce((acc, item) => {
      if (item.hours) {
        const hours = parseInt(item.hours.replace(' h', ''));
        return acc + hours;
      }
      return acc;
    }, 0),
    []
  );

  const handleFilterChange = useCallback((newFilter: 'academic' | 'certificate' | 'course') => {
    setFilter(newFilter);
  }, []);

  // Obtener configuración de colores del filtro activo
  const activeConfig = useMemo(() => getCategoryConfig(filter), [filter]);

  return (
    <section
      id="education"
      ref={ref}
      className="w-full py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300 relative animate-fade-in-up overflow-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
      aria-labelledby="education-title"
    >
      {/* Patrón geométrico de fondo con colores dinámicos */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10" aria-hidden="true">
        <div className={`absolute top-20 right-16 w-24 h-24 border-2 rounded-full animate-pulse transition-colors duration-500`} 
             style={{
               borderColor: activeConfig.gradient.includes('green') ? '#10b981' : 
                           activeConfig.gradient.includes('amber') ? '#f59e0b' : '#3b82f6',
               animationDuration: '4s'
             }} />
        <div className={`absolute top-40 left-20 w-16 h-16 border-2 rotate-45 transition-colors duration-500`} 
             style={{
               borderColor: activeConfig.gradient.includes('green') ? '#06b6d4' : 
                           activeConfig.gradient.includes('amber') ? '#f97316' : '#6366f1',
               animation: 'spin 20s linear infinite'
             }} />
        <div className={`absolute bottom-32 right-32 w-12 h-12 bg-gradient-to-r ${activeConfig.gradient} rounded-full opacity-20 animate-bounce transition-all duration-500`} 
             style={{animationDuration: '6s'}} />
        <div className={`absolute bottom-20 left-40 w-8 h-8 border-2 rounded-lg rotate-12 animate-pulse transition-colors duration-500`} 
             style={{
               borderColor: activeConfig.gradient.includes('green') ? '#14b8a6' : 
                           activeConfig.gradient.includes('amber') ? '#f59e0b' : '#8b5cf6',
               animationDuration: '3s'
             }} />
        <div className={`absolute top-1/3 right-8 w-6 h-6 rounded-full animate-ping transition-colors duration-500`} 
             style={{
               backgroundColor: activeConfig.gradient.includes('green') ? '#06b6d4' : 
                               activeConfig.gradient.includes('amber') ? '#f59e0b' : '#3b82f6',
               animationDuration: '5s'
             }} />
        <div className={`absolute top-2/3 left-8 w-10 h-10 border rotate-45 animate-pulse transition-colors duration-500`} 
             style={{
               borderColor: activeConfig.gradient.includes('green') ? '#14b8a6' : 
                           activeConfig.gradient.includes('amber') ? '#f97316' : '#8b5cf6',
               animationDuration: '7s'
             }} />
      </div>

      {/* Contenedor principal */}
      <div className="max-w-[1400px] w-full mx-auto relative z-20">
        <div id="education-title">
          <TextDecoderTitle text="Formación y Certificaciones" active={isVisible} Icon={FaGraduationCap} />
        </div>

        {/* Métricas destacadas con efectos de partículas flotantes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className={`relative overflow-hidden ${getCategoryConfig('academic').bgGradient} rounded-xl p-6 text-center border ${getCategoryConfig('academic').borderColor} transition-all duration-500 group hover:scale-105 hover:shadow-2xl ${filter === 'academic' ? 'ring-2 ring-green-400/50 scale-105' : ''}`}>
            {/* Partículas flotantes */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-2 left-2 w-1 h-1 bg-green-400 rounded-full animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}} />
              <div className="absolute top-4 right-4 w-1.5 h-1.5 bg-emerald-300 rounded-full animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}} />
              <div className="absolute bottom-3 left-1/3 w-1 h-1 bg-teal-400 rounded-full animate-bounce" style={{animationDelay: '2s', animationDuration: '3.5s'}} />
              <div className="absolute bottom-2 right-2 w-0.5 h-0.5 bg-green-300 rounded-full animate-bounce" style={{animationDelay: '0.5s', animationDuration: '2.8s'}} />
            </div>
            {/* Gradiente animado de fondo */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 via-emerald-300/5 to-teal-400/10 animate-pulse" style={{animationDuration: '4s'}} />
            {/* Brillo en hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />
            <div className={`relative z-10 text-3xl font-bold ${getCategoryConfig('academic').accentColor} group-hover:scale-110 transition-transform duration-300`}>{totalHours}+</div>
            <div className="relative z-10 text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">Horas de Formación</div>
          </div>
          
          <div className={`relative overflow-hidden ${getCategoryConfig('certificate').bgGradient} rounded-xl p-6 text-center border ${getCategoryConfig('certificate').borderColor} transition-all duration-500 group hover:scale-105 hover:shadow-2xl ${filter === 'certificate' ? 'ring-2 ring-amber-400/50 scale-105' : ''}`}>
            {/* Partículas flotantes */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-1 right-3 w-1 h-1 bg-amber-400 rounded-full animate-bounce" style={{animationDelay: '0.3s', animationDuration: '3.2s'}} />
              <div className="absolute top-5 left-2 w-1.5 h-1.5 bg-orange-300 rounded-full animate-bounce" style={{animationDelay: '1.2s', animationDuration: '3.8s'}} />
              <div className="absolute bottom-4 right-1/4 w-1 h-1 bg-yellow-400 rounded-full animate-bounce" style={{animationDelay: '2.1s', animationDuration: '3.3s'}} />
              <div className="absolute bottom-1 left-3 w-0.5 h-0.5 bg-amber-300 rounded-full animate-bounce" style={{animationDelay: '0.8s', animationDuration: '2.9s'}} />
            </div>
            {/* Gradiente animado de fondo */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 via-orange-300/5 to-yellow-400/10 animate-pulse" style={{animationDuration: '4.5s'}} />
            {/* Brillo en hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />
            <div className={`relative z-10 text-3xl font-bold ${getCategoryConfig('certificate').accentColor} group-hover:scale-110 transition-transform duration-300`}>{educationData.filter(item => item.category === 'certificate').length}</div>
            <div className="relative z-10 text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">Certificaciones Profesionales</div>
          </div>
          
          <div className={`relative overflow-hidden ${getCategoryConfig('course').bgGradient} rounded-xl p-6 text-center border ${getCategoryConfig('course').borderColor} transition-all duration-500 group hover:scale-105 hover:shadow-2xl ${filter === 'course' ? 'ring-2 ring-blue-400/50 scale-105' : ''}`}>
            {/* Partículas flotantes */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-3 left-4 w-1 h-1 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.6s', animationDuration: '3.4s'}} />
              <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-indigo-300 rounded-full animate-bounce" style={{animationDelay: '1.5s', animationDuration: '4.2s'}} />
              <div className="absolute bottom-2 left-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '2.3s', animationDuration: '3.1s'}} />
              <div className="absolute bottom-4 right-3 w-0.5 h-0.5 bg-blue-300 rounded-full animate-bounce" style={{animationDelay: '1.1s', animationDuration: '2.7s'}} />
            </div>
            {/* Gradiente animado de fondo */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-indigo-300/5 to-cyan-400/10 animate-pulse" style={{animationDuration: '5s'}} />
            {/* Brillo en hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />
            <div className={`relative z-10 text-3xl font-bold ${getCategoryConfig('course').accentColor} group-hover:scale-110 transition-transform duration-300`}>{educationData.filter(item => item.category === 'course').length}</div>
            <div className="relative z-10 text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">Cursos y Especializaciones</div>
          </div>
        </div>

        {/* Filtros interactivos mejorados */}
        <div className="flex flex-col items-center gap-6 mb-12">
          {/* Indicador de interactividad */}
          <div className="flex items-center gap-3">
            <h3 className={`text-xl font-bold ${activeConfig.accentColor} transition-colors duration-500`}>
              Explorar por Categoría
            </h3>
            <div className={`flex items-center gap-1 px-3 py-1 ${activeConfig.bgGradient} rounded-full border ${activeConfig.borderColor} transition-all duration-500`}>
              <div className={`w-2 h-2 bg-gradient-to-r ${activeConfig.gradient} rounded-full animate-pulse`}></div>
              <span className={`text-xs ${activeConfig.accentColor} font-medium`}>Interactivo</span>
            </div>
          </div>
          
          {/* Botones de filtro con indicadores visuales */}
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { key: 'academic', label: 'Formación Académica', icon: FaUniversity, config: getCategoryConfig('academic') },
              { key: 'certificate', label: 'Certificados Profesionales', icon: FaAward, config: getCategoryConfig('certificate') },
              { key: 'course', label: 'Cursos y Especializaciones', icon: FaCode, config: getCategoryConfig('course') }
            ].map(({ key, label, icon: Icon, config }) => (
              <button
                key={key}
                onClick={() => handleFilterChange(key as any)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleFilterChange(key as any);
                  }
                }}
                tabIndex={0}
                role="tab"
                aria-selected={filter === key}
                aria-controls={`education-content-${key}`}
                className={`relative flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-opacity-50 ${
                  filter === key
                    ? `${config.buttonBg} text-white shadow-lg scale-105 ${config.shadowColor}`
                    : `bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 ${config.hoverBg}`
                }`}
                style={{
                  '--tw-ring-color': config.gradient.includes('green') ? 'rgb(34 197 94 / 0.5)' : 
                                    config.gradient.includes('amber') ? 'rgb(245 158 11 / 0.5)' : 'rgb(59 130 246 / 0.5)'
                } as React.CSSProperties}
              >
                <Icon className="text-sm" />
                {label}
                
                {/* Indicador sutil de interactividad */}
                {filter !== key && (
                  <div 
                    className="absolute -top-1 -right-1 w-2 h-2 rounded-full opacity-60 animate-bounce"
                    style={{
                      backgroundColor: config.gradient.includes('green') ? '#10b981' : 
                                      config.gradient.includes('amber') ? '#f59e0b' : '#3b82f6',
                      animationDuration: '2s',
                      animationDelay: `${key === 'academic' ? '0s' : key === 'certificate' ? '0.3s' : '0.6s'}`
                    }}
                  />
                )}
                
                {/* Anillo de selección */}
                {filter === key && (
                  <div className={`absolute inset-0 rounded-lg border-2 border-white/30 animate-pulse`} />
                )}
              </button>
            ))}
          </div>
          
          {/* Hint de navegación */}
          <div className="flex items-center justify-center gap-2 text-xs text-gray-500 dark:text-gray-400">
            <FaChevronRight className={`w-3 h-3 animate-pulse ${activeConfig.accentColor}`} />
            <span>Haz clic en las categorías para explorar</span>
            <FaChevronRight className={`w-3 h-3 animate-pulse ${activeConfig.accentColor}`} style={{animationDelay: '0.5s'}} />
          </div>
        </div>

        {/* Timeline vertical moderna */}
        <div className="relative max-w-6xl mx-auto" role="tabpanel" id={`education-content-${filter}`} aria-labelledby={`education-tab-${filter}`}>
          {filteredData.map((item, index) => (
            <TimelineItem
              key={`${item.title}-${index}`}
              item={item}
              index={index}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }

        @keyframes pulseCustom {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.3;
          }
        }
        .animate-pulse-custom {
          animation: pulseCustom 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
