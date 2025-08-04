'use client';

import React, { useState, useRef, useEffect } from 'react';
import { FaCogs, FaCode, FaReact, FaMobile, FaDatabase, FaTools, FaCloud, FaExchangeAlt, FaTasks, FaShieldAlt, FaChartLine } from 'react-icons/fa';

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

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  skills: string[];
  color: string;
  bgGradient: string;
  glowColor: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Lenguajes de programación',
    icon: FaCode,
    skills: ['Kotlin', 'Java', 'Python', 'R', 'PHP', 'JavaScript', 'TypeScript'],
    color: 'from-blue-500 to-purple-600',
    bgGradient: 'from-blue-50/90 via-purple-50/90 to-indigo-50/90 dark:from-blue-900/30 dark:via-purple-900/30 dark:to-indigo-900/30',
    glowColor: 'shadow-blue-500/25'
  },
  {
    title: 'Frameworks y desarrollo web',
    icon: FaReact,
    skills: ['Angular', 'React', 'React Native (Expo)', 'Symfony', 'Node.js', 'Django', 'Flask'],
    color: 'from-emerald-500 to-teal-600',
    bgGradient: 'from-emerald-50/90 via-teal-50/90 to-green-50/90 dark:from-emerald-900/30 dark:via-teal-900/30 dark:to-green-900/30',
    glowColor: 'shadow-emerald-500/25'
  },
  {
    title: 'Desarrollo móvil',
    icon: FaMobile,
    skills: ['Android (Jetpack Compose, XML)', 'React Native con Expo Go', 'HTML', 'CSS'],
    color: 'from-purple-500 to-pink-600',
    bgGradient: 'from-purple-50/90 via-pink-50/90 to-rose-50/90 dark:from-purple-900/30 dark:via-pink-900/30 dark:to-rose-900/30',
    glowColor: 'shadow-purple-500/25'
  },
  {
    title: 'Bases de datos',
    icon: FaDatabase,
    skills: ['Firebase (Firestore, Realtime DB)', 'SQL', 'MySQL', 'Oracle', 'PostgreSQL'],
    color: 'from-orange-500 to-red-600',
    bgGradient: 'from-orange-50/90 via-red-50/90 to-yellow-50/90 dark:from-orange-900/30 dark:via-red-900/30 dark:to-yellow-900/30',
    glowColor: 'shadow-orange-500/25'
  },
  {
    title: 'Cloud y DevOps',
    icon: FaCloud,
    skills: ['Google Cloud Platform (Functions, Firestore, Auth)', 'AWS', 'Docker'],
    color: 'from-cyan-500 to-blue-600',
    bgGradient: 'from-cyan-50/90 via-blue-50/90 to-sky-50/90 dark:from-cyan-900/30 dark:via-blue-900/30 dark:to-sky-900/30',
    glowColor: 'shadow-cyan-500/25'
  },
  {
    title: 'Herramientas y sistemas',
    icon: FaTools,
    skills: ['Git', 'GitHub', 'Linux', 'Windows', 'XAMPP', 'Scrum', 'Agile', 'Jira'],
    color: 'from-gray-500 to-slate-600',
    bgGradient: 'from-gray-50/90 via-slate-50/90 to-zinc-50/90 dark:from-gray-900/30 dark:via-slate-900/30 dark:to-zinc-900/30',
    glowColor: 'shadow-gray-500/25'
  },
  {
    title: 'Ciberseguridad',
    icon: FaShieldAlt,
    skills: ['Auditoría de Seguridad', 'Protección de Datos', 'Google Cybersecurity', 'Análisis de Vulnerabilidades'],
    color: 'from-red-500 to-pink-600',
    bgGradient: 'from-red-50/90 via-pink-50/90 to-rose-50/90 dark:from-red-900/30 dark:via-pink-900/30 dark:to-rose-900/30',
    glowColor: 'shadow-red-500/25'
  },
  {
    title: 'Análisis de Datos',
    icon: FaChartLine,
    skills: ['Google Data Analytics', 'Python Analytics', 'R Statistical Analysis', 'Data Visualization'],
    color: 'from-indigo-500 to-purple-600',
    bgGradient: 'from-indigo-50/90 via-purple-50/90 to-violet-50/90 dark:from-indigo-900/30 dark:via-purple-900/30 dark:to-violet-900/30',
    glowColor: 'shadow-indigo-500/25'
  }
];

interface SkillCategoryCardProps {
  category: SkillCategory;
  index: number;
  isVisible: boolean;
}

function SkillCategoryCard({ category, index, isVisible }: SkillCategoryCardProps) {
  return (
    <div 
      className={`group relative overflow-hidden rounded-2xl transition-all duration-700 hover:scale-[1.02] w-full max-w-sm mx-auto ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Fondo glassmorphism mejorado */}
      <div className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} backdrop-blur-xl rounded-2xl`} />
      
      {/* Múltiples capas de efectos de fondo */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 rounded-2xl" />
      <div className="absolute inset-0 bg-gradient-to-tl from-black/5 via-transparent to-black/10 dark:from-white/5 dark:to-white/10 rounded-2xl" />
      
      {/* Borde animado con múltiples capas */}
      <div className="absolute inset-0 rounded-2xl border border-white/30 dark:border-gray-700/50 group-hover:border-teal-400/60 transition-all duration-500" />
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-cyan-400/30 transition-all duration-700 delay-100" />
      
      {/* Glow effect mejorado */}
      <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${category.glowColor} blur-xl`} />
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-700 delay-200 shadow-2xl shadow-teal-500/20 blur-2xl" />
      
      {/* Contenido */}
      <div className="relative p-4 sm:p-6 lg:p-8 h-full flex flex-col">
        {/* Partículas flotantes mejoradas */}
        <div className="absolute top-4 right-4 w-2 h-2 bg-teal-400/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-300" />
        <div className="absolute bottom-4 left-4 w-1 h-1 bg-cyan-400/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-300 delay-200" />
        <div className="absolute top-1/2 right-6 w-1.5 h-1.5 bg-purple-400/50 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-300 delay-400" />
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-blue-400/50 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-300 delay-600" />
        
        {/* Header mejorado y centrado */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className={`relative p-3 rounded-xl bg-gradient-to-r ${category.color} text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 overflow-hidden mb-3`}>
            <category.icon className="text-xl relative z-10" />
            <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-all duration-300 text-center">
            {category.title}
          </h3>
        </div>
        
        {/* Skills con fondos animados individuales y centrados */}
        <div className="space-y-2 sm:space-y-3 flex-1">
          {category.skills.map((skill, skillIndex) => (
            <div
              key={skillIndex}
              className={`group/skill relative overflow-hidden rounded-lg transition-all duration-500 hover:scale-[1.02] ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
              }`}
              style={{
                transitionDelay: `${(index * 150) + (skillIndex * 80)}ms`
              }}
            >
              {/* Fondo animado individual para cada skill */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/60 to-white/80 dark:from-gray-800/80 dark:via-gray-700/60 dark:to-gray-800/80 rounded-lg" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-500/10 to-transparent opacity-0 group-hover/skill:opacity-100 transition-opacity duration-500 rounded-lg" />
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-700 rounded-lg" />
              
              {/* Partículas de fondo para cada skill */}
              <div className="absolute top-1 right-1 w-1 h-1 bg-teal-400/40 rounded-full opacity-0 group-hover/skill:opacity-100 group-hover/skill:animate-ping transition-all duration-300" />
              <div className="absolute bottom-1 left-2 w-0.5 h-0.5 bg-cyan-400/40 rounded-full opacity-0 group-hover/skill:opacity-100 group-hover/skill:animate-bounce transition-all duration-300 delay-100" />
              <div className="absolute top-1/2 left-1 w-0.5 h-0.5 bg-blue-400/30 rounded-full opacity-0 group-hover/skill:opacity-100 group-hover/skill:animate-pulse transition-all duration-300 delay-200" />
              
              {/* Contenido del skill centrado */}
              <div className="relative p-2 sm:p-3 border border-white/50 dark:border-gray-600/50 group-hover/skill:border-teal-400/60 transition-all duration-400 hover:shadow-lg backdrop-blur-sm rounded-lg text-center">
                {/* Efecto shimmer mejorado */}
                <div className="absolute inset-0 -translate-x-full group-hover/skill:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12" />
                <div className="absolute inset-0 -translate-x-full group-hover/skill:translate-x-full transition-transform duration-1200 delay-200 bg-gradient-to-r from-transparent via-teal-400/20 to-transparent skew-x-12" />
                
                {/* Texto del skill centrado */}
                <span className="relative z-10 text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover/skill:text-teal-600 dark:group-hover/skill:text-teal-400 transition-colors duration-300 block text-center leading-tight">
                  {skill}
                </span>
                
                {/* Múltiples líneas de progreso */}
                <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 w-0 group-hover/skill:w-full transition-all duration-700 rounded-full" />
                <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 w-0 group-hover/skill:w-full transition-all duration-900 delay-100 rounded-full opacity-50" />
                
                {/* Efecto de brillo en el texto */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover/skill:opacity-100 transition-opacity duration-500 rounded-lg" />
              </div>
            </div>
          ))}
        </div>
        
        {/* Efectos de brillo general mejorados */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
        <div className="absolute inset-0 bg-gradient-to-tl from-teal-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200 rounded-2xl" />
        
        {/* Efecto de ondas */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-1000">
          <div className="absolute top-1/2 left-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 bg-teal-400/20 rounded-full group-hover:animate-ping" />
          <div className="absolute top-1/2 left-1/2 w-8 h-8 -translate-x-1/2 -translate-y-1/2 bg-cyan-400/10 rounded-full group-hover:animate-ping delay-300" />
          <div className="absolute top-1/2 left-1/2 w-12 h-12 -translate-x-1/2 -translate-y-1/2 bg-blue-400/5 rounded-full group-hover:animate-ping delay-500" />
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
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
      id="skills" 
      className="w-full py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300 relative overflow-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Fondo mejorado */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-teal-500/15 to-cyan-500/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-br from-purple-500/15 to-pink-500/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-500/15 to-indigo-500/15 rounded-full blur-2xl animate-pulse delay-500" />
        <div className="absolute top-1/3 right-1/3 w-36 h-36 bg-gradient-to-br from-green-500/12 to-emerald-500/12 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute bottom-1/3 left-1/2 w-44 h-44 bg-gradient-to-br from-orange-500/12 to-red-500/12 rounded-full blur-3xl animate-pulse delay-300" />
      </div>
      
      {/* Contenedor principal */}
      <div className="max-w-[1400px] w-full mx-auto relative z-20">
        {/* Título EXACTAMENTE como está */}
        <TextDecoderTitle text="Habilidades Técnicas" active={isVisible} Icon={FaCogs} />
        
        {/* Grid de categorías */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategoryCard
              key={index}
              category={category}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
