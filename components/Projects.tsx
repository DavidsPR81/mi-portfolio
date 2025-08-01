'use client';

import React, { useState, useRef, useEffect } from 'react';
import {
  FaCode,
  FaMobile,
  FaAndroid,
  FaReact,
  FaClock,
  FaUsers,
  FaRocket,
  FaLaptopCode,
  FaPalette
} from 'react-icons/fa';

interface ProjectItem {
  id: string;
  title: string;
  description: string;
  longDescription: string[];
  technologies: string[];
  status: 'completed' | 'in-progress' | 'ongoing';
  type: 'mobile' | 'web' | 'android' | 'portfolio';
  period: string;
  achievements?: string[];
  collaboration?: string;
  order: number;
}

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
        <Icon className="text-teal-600 dark:text-teal-400 transition-all duration-500 hover:scale-105 hover:text-teal-500 dark:hover:text-teal-300" />
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

const projectsData: ProjectItem[] = [
  {
    id: 'fotogo',
    title: 'FotoGo',
    description: 'Red social innovadora sobre fotografía con React Native y Firebase',
    longDescription: [
      'Desarrollo activo de red social móvil/web especializada en fotografía',
      'Plataforma innovadora para compartir, descubrir y conectar a través de imágenes',
      'Implementación de funcionalidades frontend y backend avanzadas',
      'Automatización de procesos con Google Cloud Functions',
      'Sistema de likes, comentarios, monedas y banners dinámicos en tiempo real',
      'Diseño UI/UX y gestión de lógica de ranking semanal y recompensas'
    ],
    technologies: ['React Native', 'Expo Go', 'Node.js', 'Firebase', 'Google Cloud Functions', 'Firestore', 'Git', 'GitHub'],
    status: 'ongoing',
    type: 'mobile',
    period: 'jun. 2025 – actualidad',
    achievements: [
      'Implementación de múltiples funciones automatizadas con Cloud Functions',
      'Desarrollo de sistema de recompensas y ranking semanal',
      'Integración exitosa de funcionalidades en tiempo real con Firebase'
    ],
    collaboration: 'Colaboración activa en desarrollo',
    order: 1
  },
  {
    id: 'portfolio',
    title: 'Portfolio Personal',
    description: 'Portfolio profesional desarrollado con Next.js y TypeScript',
    longDescription: [
      'Desarrollo completo de portfolio personal con Next.js 13+',
      'Implementación de animaciones avanzadas y diseño responsive',
      'Optimización SEO y rendimiento web',
      'Integración de componentes interactivos y efectos visuales',
      'Despliegue y configuración de hosting'
    ],
    technologies: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Framer Motion', 'Git', 'GitHub'],
    status: 'completed', // ✅ CAMBIAR DE 'ongoing' A 'completed'
    type: 'web',
    period: 'jul. 2025 – ago. 2025', // ✅ CAMBIAR DE 'actualidad' A 'ago. 2025'
    achievements: [
      'Diseño y desarrollo completo desde cero',
      'Implementación de sistema de animaciones fluidas',
      'Optimización para múltiples dispositivos y navegadores'
    ],
    collaboration: 'Proyecto personal',
    order: 2
  },
  {
    id: 'tvsmartmatch',
    title: 'TVSmartMatch',
    description: 'Aplicación multiplataforma para recomendaciones de contenido audiovisual',
    longDescription: [
      'Desarrollo de aplicación multiplataforma con React Native',
      'Sistema de recomendaciones basado en preferencias del usuario',
      'Integración con APIs de contenido audiovisual',
      'Implementación de algoritmos de matching y filtrado',
      'Diseño de interfaz intuitiva y experiencia de usuario optimizada'
    ],
    technologies: ['React Native', 'JavaScript', 'API Integration', 'Mobile Development', 'Git', 'GitHub'],
    status: 'ongoing',
    type: 'mobile',
    period: 'sept. 2024 – actualidad',
    achievements: [
      'Desarrollo de algoritmo de recomendaciones personalizado',
      'Integración exitosa con múltiples APIs de contenido',
      'Implementación de interfaz de usuario intuitiva'
    ],
    collaboration: 'Proyecto académico - Desarrollo de Aplicaciones Multiplataforma',
    order: 3
  },
  {
    id: 'intranet',
    title: 'Intranet Ayuntamiento de Rota',
    description: 'App móvil en Kotlin con sistema de notificaciones integrado',
    longDescription: [
      'Desarrollo de aplicación móvil Android con Kotlin basada en la web existente',
      'Integración de sistema de notificaciones personalizadas y grupales',
      'Conexión con autenticación PHP de la plataforma web para gestión de usuarios',
      'Sistema de notificaciones push tanto individuales como masivas',
      'Adaptación de funcionalidades web existentes para entorno móvil'
    ],
    technologies: ['Kotlin', 'Android', 'PHP', 'Push Notifications', 'Web Integration', 'HTML', 'CSS', 'JavaScript', 'Git', 'GitHub'],
    status: 'completed',
    type: 'android',
    period: 'mar. 2024 – jun. 2024',
    achievements: [
      'Sistema completo de notificaciones personalizadas y grupales',
      'Integración exitosa con autenticación PHP existente',
      'Adaptación móvil de funcionalidades web del ayuntamiento'
    ],
    collaboration: 'Proyecto académico - Desarrollo de Aplicaciones Web',
    order: 4
  }
];

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const getTypeConfig = (type: string, status: string) => {
    switch (type) {
      case 'mobile':
        return {
          bgGradient: 'from-purple-50/95 to-violet-100/95 dark:from-purple-800/95 dark:to-violet-900/95',
          borderColor: 'border-purple-200/60 dark:border-purple-600/40',
          iconColor: 'text-purple-600 dark:text-purple-400',
          titleColor: 'text-purple-800 dark:text-purple-300',
          dotColor: 'bg-purple-600 border-purple-300'
        };
      case 'web':
        return {
          bgGradient: 'from-blue-50/95 to-indigo-100/95 dark:from-blue-800/95 dark:to-indigo-900/95',
          borderColor: 'border-blue-200/60 dark:border-blue-600/40',
          iconColor: 'text-blue-600 dark:text-blue-400',
          titleColor: 'text-blue-800 dark:text-blue-300',
          dotColor: 'bg-blue-600 border-blue-300'
        };
      case 'android':
        return {
          bgGradient: status === 'completed'
            ? 'from-emerald-50/95 to-green-100/95 dark:from-emerald-800/95 dark:to-green-900/95'
            : 'from-amber-50/95 to-orange-100/95 dark:from-amber-800/95 dark:to-orange-900/95',
          borderColor: status === 'completed'
            ? 'border-emerald-200/60 dark:border-emerald-600/40'
            : 'border-amber-200/60 dark:border-amber-600/40',
          iconColor: status === 'completed'
            ? 'text-emerald-600 dark:text-emerald-400'
            : 'text-amber-600 dark:text-amber-400',
          titleColor: status === 'completed'
            ? 'text-emerald-800 dark:text-emerald-300'
            : 'text-amber-800 dark:text-amber-300',
          dotColor: status === 'completed'
            ? 'bg-emerald-600 border-emerald-300'
            : 'bg-amber-600 border-amber-300'
        };
      default:
        return {
          bgGradient: 'from-teal-50/95 to-cyan-100/95 dark:from-teal-800/95 dark:to-cyan-900/95',
          borderColor: 'border-teal-200/60 dark:border-teal-600/40',
          iconColor: 'text-teal-600 dark:text-teal-400',
          titleColor: 'text-teal-800 dark:text-teal-300',
          dotColor: 'bg-teal-600 border-teal-300'
        };
    }
  };

  const getProjectIcon = (type: string) => {
    switch (type) {
      case 'mobile': return FaMobile;
      case 'web': return FaReact;
      case 'android': return FaAndroid;
      default: return FaCode;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'ongoing':
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 rounded-full">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            En Desarrollo
          </span>
        );
      case 'completed':
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 rounded-full">
            <div className="w-2 h-2 bg-blue-500 rounded-full" />
            Terminado
          </span>
        );
      case 'in-progress':
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-300 rounded-full">
            <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
            En Proceso
          </span>
        );
      default:
        return null;
    }
  };

  const config = getTypeConfig(project.type, project.status);
  const IconComponent = getProjectIcon(project.type);

  return (
    <div 
      className="animate-fade-in-up mb-8" 
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div
        className={`bg-gradient-to-br ${config.bgGradient} backdrop-blur-sm rounded-2xl border ${config.borderColor} shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 p-8 group h-[600px] flex flex-col`}
      >
        {/* Header del proyecto */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className={`p-3 rounded-xl ${config.iconColor} bg-white/50 dark:bg-gray-800/50 group-hover:scale-110 transition-transform duration-300`}>
              <IconComponent className="text-2xl" />
            </div>
            <div>
              <h3 className={`font-bold text-2xl ${config.titleColor} group-hover:text-opacity-80 transition-colors duration-300`}>
                {project.title}
              </h3>
              <p className={`text-sm font-medium ${config.iconColor} mt-1`}>
                {project.description}
              </p>
            </div>
          </div>
          {getStatusBadge(project.status)}
        </div>

        {/* Información del período */}
        <div className="flex items-center gap-4 mb-6 text-sm text-gray-600 dark:text-gray-400">
          <span className="flex items-center gap-2 font-mono">
            <FaClock className="text-xs" />
            {project.period}
          </span>
          {project.collaboration && (
            <span className="flex items-center gap-2">
              <FaUsers className="text-xs" />
              {project.collaboration}
            </span>
          )}
        </div>

        {/* Tecnologías */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center gap-2">
            <FaLaptopCode className="text-xs" />
            Tecnologías
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs font-medium bg-white/70 dark:bg-gray-700/70 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200/50 dark:border-gray-600/50 hover:scale-105 transition-transform duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Descripción detallada - con flex-grow para ocupar espacio disponible */}
        <div className="mb-6 flex-grow">
          <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center gap-2">
            <FaPalette className="text-xs" />
            Características Principales
          </h4>
          <ul className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed space-y-2">
            {project.longDescription.slice(0, 4).map((desc, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className={`w-1.5 h-1.5 rounded-full ${config.dotColor} mt-2 flex-shrink-0`} />
                {desc}
              </li>
            ))}
          </ul>
        </div>

        {/* Logros - siempre al final */}
        {project.achievements && project.achievements.length > 0 && (
          <div className="border-t border-gray-200/50 dark:border-gray-600/50 pt-4 mt-auto">
            <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center gap-2">
              <FaRocket className="text-xs" />
              Logros Destacados
            </h4>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              {project.achievements.map((achievement, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0" />
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
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

  const sortedProjects = projectsData.sort((a, b) => a.order - b.order);
  const activeProjects = projectsData.filter(p => p.status === 'ongoing' || p.status === 'in-progress').length;
  const completedProjects = projectsData.filter(p => p.status === 'completed').length;
  const totalTechnologies = projectsData.reduce((acc, project) => {
    project.technologies.forEach(tech => acc.add(tech));
    return acc;
  }, new Set<string>()).size;

  return (
    <section
      id="projects"
      ref={ref}
      className="w-full py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300 relative animate-fade-in-up overflow-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Patrón geométrico de fondo - coherente con Hero, About y Education */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-20 right-16 w-24 h-24 border-2 border-teal-500 rounded-full animate-pulse" style={{animationDuration: '4s'}} />
        <div className="absolute top-40 left-20 w-16 h-16 border-2 border-cyan-400 rotate-45" style={{animation: 'spin 20s linear infinite'}} />
        <div className="absolute bottom-32 right-32 w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full opacity-20 animate-bounce" style={{animationDuration: '6s'}} />
        <div className="absolute bottom-20 left-40 w-8 h-8 border-2 border-teal-400 rounded-lg rotate-12 animate-pulse" style={{animationDuration: '3s'}} />
        <div className="absolute top-1/3 right-8 w-6 h-6 bg-cyan-400 rounded-full animate-ping" style={{animationDuration: '5s'}} />
        <div className="absolute top-2/3 left-8 w-10 h-10 border border-teal-500 rotate-45 animate-pulse" style={{animationDuration: '7s'}} />
      </div>

      {/* Contenedor principal */}
      <div className="max-w-[1400px] w-full mx-auto relative z-20">
        <TextDecoderTitle text="Proyectos Técnicos" active={isVisible} Icon={FaCode} />

        {/* Métricas destacadas con efectos de cristal y ondas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="relative bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/50 dark:to-cyan-900/50 rounded-xl p-6 text-center border border-teal-200/50 dark:border-teal-700/50 transition-all duration-500 group hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/20 overflow-hidden backdrop-blur-sm">
            {/* Efecto de cristal */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            {/* Ondas de energía */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-1/2 left-1/2 w-8 h-8 border border-teal-400 rounded-full animate-ping transform -translate-x-1/2 -translate-y-1/2" style={{animationDuration: '3s'}} />
              <div className="absolute top-1/2 left-1/2 w-12 h-12 border border-cyan-300 rounded-full animate-ping transform -translate-x-1/2 -translate-y-1/2" style={{animationDuration: '4s', animationDelay: '1s'}} />
              <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-teal-300 rounded-full animate-ping transform -translate-x-1/2 -translate-y-1/2" style={{animationDuration: '5s', animationDelay: '2s'}} />
            </div>
            {/* Líneas de energía */}
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-teal-400 to-transparent animate-pulse" style={{animationDuration: '2s'}} />
            <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-transparent via-cyan-400 to-transparent animate-pulse" style={{animationDuration: '2.5s', animationDelay: '0.5s'}} />
            <div className="relative z-10 text-3xl font-bold text-teal-600 dark:text-teal-400 group-hover:text-teal-500 dark:group-hover:text-teal-300 transition-all duration-300 group-hover:drop-shadow-lg">{activeProjects}</div>
            <div className="relative z-10 text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">Proyectos Activos</div>
          </div>
          
          <div className="relative bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/50 dark:to-orange-900/50 rounded-xl p-6 text-center border border-amber-200/50 dark:border-amber-700/50 transition-all duration-500 group hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20 overflow-hidden backdrop-blur-sm">
            {/* Efecto de cristal */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            {/* Ondas de energía */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-1/2 left-1/2 w-8 h-8 border border-amber-400 rounded-full animate-ping transform -translate-x-1/2 -translate-y-1/2" style={{animationDuration: '3.2s'}} />
              <div className="absolute top-1/2 left-1/2 w-12 h-12 border border-orange-300 rounded-full animate-ping transform -translate-x-1/2 -translate-y-1/2" style={{animationDuration: '4.2s', animationDelay: '1.1s'}} />
              <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-yellow-300 rounded-full animate-ping transform -translate-x-1/2 -translate-y-1/2" style={{animationDuration: '5.2s', animationDelay: '2.1s'}} />
            </div>
            {/* Líneas de energía */}
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent animate-pulse" style={{animationDuration: '2.2s'}} />
            <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-transparent via-orange-400 to-transparent animate-pulse" style={{animationDuration: '2.7s', animationDelay: '0.6s'}} />
            <div className="relative z-10 text-3xl font-bold text-amber-600 dark:text-amber-400 group-hover:text-amber-500 dark:group-hover:text-amber-300 transition-all duration-300 group-hover:drop-shadow-lg">{totalTechnologies}</div>
            <div className="relative z-10 text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">Tecnologías Utilizadas</div>
          </div>
          
          <div className="relative bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/50 dark:to-indigo-900/50 rounded-xl p-6 text-center border border-blue-200/50 dark:border-blue-700/50 transition-all duration-500 group hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 overflow-hidden backdrop-blur-sm">
            {/* Efecto de cristal */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            {/* Ondas de energía */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-1/2 left-1/2 w-8 h-8 border border-blue-400 rounded-full animate-ping transform -translate-x-1/2 -translate-y-1/2" style={{animationDuration: '3.4s'}} />
              <div className="absolute top-1/2 left-1/2 w-12 h-12 border border-indigo-300 rounded-full animate-ping transform -translate-x-1/2 -translate-y-1/2" style={{animationDuration: '4.4s', animationDelay: '1.2s'}} />
              <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-purple-300 rounded-full animate-ping transform -translate-x-1/2 -translate-y-1/2" style={{animationDuration: '5.4s', animationDelay: '2.2s'}} />
            </div>
            {/* Líneas de energía */}
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse" style={{animationDuration: '2.4s'}} />
            <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-transparent via-indigo-400 to-transparent animate-pulse" style={{animationDuration: '2.9s', animationDelay: '0.7s'}} />
            <div className="relative z-10 text-3xl font-bold text-blue-600 dark:text-blue-400 group-hover:text-blue-500 dark:group-hover:text-blue-300 transition-all duration-300 group-hover:drop-shadow-lg">{completedProjects}</div>
            <div className="relative z-10 text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">Proyectos Completados</div>
          </div>
        </div>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {sortedProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
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
          animation: fadeInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}

// En la función DeviceMockup, cambiar:
function DeviceMockup({ type, image }: { type: 'mobile' | 'desktop', image: string }) {
  return (
    <div className={`relative mx-auto ${
      type === 'mobile' 
        ? 'w-48 h-72 sm:w-56 sm:h-80 md:w-64 md:h-96' 
        : 'w-72 h-48 sm:w-80 sm:h-56 md:w-96 md:h-64'
    }`}>
      {/* Frame del dispositivo */}
      <div className={`absolute inset-0 bg-gray-800 rounded-${
        type === 'mobile' ? '3xl' : 'xl'
      } p-1 sm:p-2 shadow-2xl`}>
        <div className={`w-full h-full bg-white rounded-${
          type === 'mobile' ? '2xl' : 'lg'
        } overflow-hidden`}>
          <img src={image} alt="App preview" className="w-full h-full object-cover" />
        </div>
      </div>
      
      {/* Detalles responsive del dispositivo */}
      {type === 'mobile' && (
        <>
          <div className="absolute top-2 sm:top-4 left-1/2 transform -translate-x-1/2 w-12 sm:w-16 h-0.5 sm:h-1 bg-gray-600 rounded-full" />
          <div className="absolute bottom-1 sm:bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 sm:w-12 sm:h-12 bg-gray-700 rounded-full" />
        </>
      )}
    </div>
  );
}
