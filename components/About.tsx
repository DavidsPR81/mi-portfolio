'use client';

import React, { useState, useRef, useEffect } from 'react';
import { FaUserTie } from 'react-icons/fa';

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

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  // Observer para la sección completa - SIN REINICIO
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  // Observer SOLO para el título - CON REINICIO
  useEffect(() => {
    const titleObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(false);
          setTimeout(() => setTitleVisible(true), 100);
        }
      },
      { threshold: 0.5 }
    );

    if (titleRef.current) titleObserver.observe(titleRef.current);
    return () => {
      if (titleRef.current) titleObserver.unobserve(titleRef.current);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      id="about"
      ref={ref}
      className="w-full py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300 relative overflow-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
      onMouseMove={handleMouseMove}
    >
      {/* Patrón geométrico de fondo */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-32 right-20 w-28 h-28 border-2 border-teal-500 rounded-full animate-pulse hover:border-teal-400 transition-colors duration-300" style={{animationDuration: '5s'}}></div>
        <div className="absolute top-20 left-32 w-20 h-20 border-2 border-cyan-400 rotate-45 hover:border-cyan-300 transition-colors duration-300" style={{animation: 'spin 25s linear infinite'}}></div>
        <div className="absolute bottom-40 right-40 w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full opacity-20 animate-bounce hover:opacity-30 transition-opacity duration-300" style={{animationDuration: '7s'}}></div>
        <div className="absolute bottom-32 left-20 w-12 h-12 border-2 border-teal-400 rounded-lg rotate-12 animate-pulse hover:border-teal-300 transition-colors duration-300" style={{animationDuration: '4s'}}></div>
        <div className="absolute top-1/2 right-10 w-6 h-6 bg-cyan-400 rounded-full animate-ping hover:bg-cyan-300 transition-colors duration-300" style={{animationDuration: '6s'}}></div>
        <div className="absolute top-2/3 left-10 w-8 h-8 border border-teal-500 rotate-45 animate-pulse hover:border-teal-400 transition-colors duration-300" style={{animationDuration: '8s'}}></div>
        
        <div 
          className="absolute w-96 h-96 bg-gradient-radial from-teal-500/10 via-cyan-500/5 to-transparent rounded-full pointer-events-none transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            opacity: isVisible ? 0.6 : 0
          }}
        />
      </div>
      
      <div className="max-w-[1400px] w-full mx-auto relative z-20">
        {/* TÍTULO CON REINICIO */}
        <div ref={titleRef}>
          <TextDecoderTitle text="Sobre Mí" active={titleVisible} Icon={FaUserTie} />
        </div>
        
        {/* CONTENIDO SIN REINICIO */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-12">
          <div className={`flex-grow max-w-[900px] transition-all duration-1000 flex flex-col justify-between ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`} style={{transitionDelay: '0.3s'}}>
            <div className="space-y-8 flex-grow flex flex-col justify-center">
              <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300 text-justify hover:text-gray-600 dark:hover:text-gray-200 transition-colors duration-300 group">
                Profesional con más de <strong className="text-blue-600 dark:text-blue-400 group-hover:text-blue-500 transition-colors duration-300">17 años de experiencia</strong> en <strong className="text-blue-600 dark:text-blue-400 group-hover:text-blue-500 transition-colors duration-300">liderazgo</strong> y <strong className="text-blue-600 dark:text-blue-400 group-hover:text-blue-500 transition-colors duration-300">gestión comercial</strong> dentro de entornos multinacionales, reconocido por <strong className="text-blue-600 dark:text-blue-400 group-hover:text-blue-500 transition-colors duration-300">optimizar procesos</strong> y alcanzar incrementos sostenidos en ventas, impulsando resultados tangibles en equipos de alto rendimiento.
              </p>

              <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300 text-justify hover:text-gray-600 dark:hover:text-gray-200 transition-colors duration-300 group">
                Actualmente en proceso de transición al sector tecnológico, especializándome en <strong className="text-amber-600 dark:text-amber-400 group-hover:text-amber-500 transition-colors duration-300">Desarrollo de Aplicaciones Multiplataforma</strong> mediante formación de Grado Superior, abarcando desarrollo web, móvil, <strong className="text-amber-600 dark:text-amber-400 group-hover:text-amber-500 transition-colors duration-300">análisis de datos</strong> y <strong className="text-amber-600 dark:text-amber-400 group-hover:text-amber-500 transition-colors duration-300">ciberseguridad</strong>, aplicando un enfoque práctico y orientado a la entrega de soluciones efectivas.
              </p>

              <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300 text-justify hover:text-gray-600 dark:hover:text-gray-200 transition-colors duration-300 group">
                Mi experiencia técnica en desarrollo abarca tecnologías como <strong className="text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-500 transition-colors duration-300">Kotlin</strong>, <strong className="text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-500 transition-colors duration-300">React</strong>, <strong className="text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-500 transition-colors duration-300">Firebase</strong> y automatización en <strong className="text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-500 transition-colors duration-300">Google Cloud Platform</strong>, combinando <strong className="text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-500 transition-colors duration-300">habilidades de liderazgo consolidadas</strong> con <strong className="text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-500 transition-colors duration-300">competencias técnicas emergentes</strong> y <strong className="text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-500 transition-colors duration-300">metodologías ágiles</strong> para construir soluciones robustas y escalables.
              </p>

              <p className="text-xl leading-relaxed text-gray-600 dark:text-gray-400 text-justify hover:text-gray-500 dark:hover:text-gray-300 transition-colors duration-300 group">
                Destaco por mi <strong className="text-gray-700 dark:text-gray-300 group-hover:text-gray-600 dark:group-hover:text-gray-200 transition-colors duration-300">capacidad de adaptación</strong>, <strong className="text-gray-700 dark:text-gray-300 group-hover:text-gray-600 dark:group-hover:text-gray-200 transition-colors duration-300">constancia</strong> y compromiso con el <strong className="text-gray-700 dark:text-gray-300 group-hover:text-gray-600 dark:group-hover:text-gray-200 transition-colors duration-300">aprendizaje continuo</strong>, atributos que me permiten enfrentar desafíos complejos con eficacia y mantenerme a la vanguardia tecnológica, aportando valor mediante la combinación única de <strong className="text-gray-700 dark:text-gray-300 group-hover:text-gray-600 dark:group-hover:text-gray-200 transition-colors duration-300">experiencia en liderazgo</strong> y <strong className="text-gray-700 dark:text-gray-300 group-hover:text-gray-600 dark:group-hover:text-gray-200 transition-colors duration-300">competencias tecnológicas avanzadas</strong>.
              </p>
            </div>
          </div>

          <div className={`flex-shrink-0 w-full md:w-[400px] lg:w-[420px] transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`} style={{transitionDelay: '0.5s'}}>
            <div className="bg-gradient-to-br from-emerald-50/95 to-green-100/95 dark:from-emerald-800/95 dark:to-green-900/95 backdrop-blur-sm rounded-2xl border border-emerald-200/60 dark:border-emerald-600/40 shadow-2xl hover:shadow-3xl hover:scale-[1.02] transition-all duration-500 p-8 h-full flex flex-col justify-between group">
              <div>
                <h3 className="text-lg font-bold text-emerald-800 dark:text-white mb-8 text-center flex items-center justify-center gap-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors duration-300">
                  <div className="w-7 h-7 bg-gradient-to-r from-emerald-600 to-green-600 rounded-full flex items-center justify-center animate-pulse shadow-lg group-hover:shadow-emerald-500/50 group-hover:scale-110 transition-all duration-300" style={{animationDuration: '3s'}}>
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  Transición Profesional
                </h3>
                
                <div className="space-y-0">
                  <div className="flex items-start gap-4 group/item hover:bg-emerald-100/50 dark:hover:bg-emerald-700/30 rounded-lg p-3 transition-all duration-300">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mt-2 flex-shrink-0 shadow-md group-hover/item:shadow-blue-400/50 group-hover/item:scale-125 transition-all duration-300"></div>
                    <div className="flex-grow">
                      <div className="text-xs font-semibold text-blue-500 dark:text-blue-400 mb-1">2007 - 2024</div>
                      <p className="text-sm text-blue-700 dark:text-blue-300 leading-relaxed group-hover/item:text-blue-600 dark:group-hover/item:text-blue-200 transition-colors duration-300">
                        <strong className="font-semibold">Experiencia Comercial:</strong> 17+ años liderando equipos y optimizando procesos en entornos multinacionales.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 group/item hover:bg-emerald-100/50 dark:hover:bg-emerald-700/30 rounded-lg p-3 transition-all duration-300">
                    <div className="w-3 h-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mt-2 flex-shrink-0 shadow-md group-hover/item:shadow-amber-400/50 group-hover/item:scale-125 transition-all duration-300"></div>
                    <div className="flex-grow">
                      <div className="text-xs font-semibold text-amber-600 dark:text-amber-400 mb-1">2023 - 2025</div>
                      <p className="text-sm text-orange-700 dark:text-orange-300 leading-relaxed group-hover/item:text-orange-600 dark:group-hover/item:text-orange-200 transition-colors duration-300">
                        <strong className="font-semibold">Formación Técnica:</strong> Grado Superior en Desarrollo de Aplicaciones Multiplataforma (en curso).
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 group/item hover:bg-emerald-100/50 dark:hover:bg-emerald-700/30 rounded-lg p-3 transition-all duration-300">
                    <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mt-2 flex-shrink-0 shadow-md group-hover/item:shadow-green-400/50 group-hover/item:scale-125 transition-all duration-300"></div>
                    <div className="flex-grow">
                      <div className="text-xs font-semibold text-green-600 dark:text-green-400 mb-1">2024 - Presente</div>
                      <p className="text-sm text-green-700 dark:text-green-300 leading-relaxed group-hover/item:text-green-600 dark:group-hover/item:text-green-200 transition-colors duration-300">
                        <strong className="font-semibold">Desarrollador Full Stack:</strong> Especialización en React, Kotlin, Firebase y Google Cloud Platform.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-0 pt-1">
                <div className="h-px bg-gradient-to-r from-transparent via-emerald-300 dark:via-emerald-600 to-transparent mb-1"></div>
                
                <div className="bg-gradient-to-r from-emerald-100/80 to-green-200/80 dark:from-slate-700/80 dark:to-emerald-800/80 rounded-xl p-4 hover:shadow-lg hover:scale-105 transition-all duration-300 group/value mt-3">
                  <h4 className="text-sm font-bold text-emerald-800 dark:text-emerald-200 mb-3 text-center group-hover/value:text-emerald-600 dark:group-hover/value:text-emerald-100 transition-colors duration-300">
                    💎 Valor Diferencial
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 text-center leading-relaxed group-hover/value:text-gray-500 dark:group-hover/value:text-gray-300 transition-colors duration-300">
                    Combinación única de <strong>liderazgo empresarial consolidado</strong> con <strong>competencias técnicas emergentes</strong>, aportando una perspectiva integral para el desarrollo de soluciones tecnológicas efectivas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// En el componente About, añadir animaciones escalonadas
function AnimatedParagraph({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div 
      ref={ref}
      className={`transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {children}
    </div>
  );
}

// Usar en los párrafos
<div className="space-y-8 flex-grow flex flex-col justify-center">
  <AnimatedParagraph delay={0}>
    <p>Primer párrafo...</p>
  </AnimatedParagraph>
  
  <AnimatedParagraph delay={200}>
    <p>Segundo párrafo...</p>
  </AnimatedParagraph>
  
  <AnimatedParagraph delay={400}>
    <p>Tercer párrafo...</p>
  </AnimatedParagraph>
</div>

function AnimatedCounter({ target, suffix = '' }: { target: number, suffix?: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <span ref={ref} className="font-bold text-teal-600 dark:text-teal-400">
      {count}{suffix}
    </span>
  );
}

// Usar en el texto
<p>
  Con más de <AnimatedCounter target={17} suffix="+" /> años de experiencia...
</p>

// Hook personalizado para animaciones lazy
function useInViewAnimation(threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          observer.disconnect(); // Desconectar después de activar
        }
      },
      { threshold, rootMargin: '50px' }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, isVisible]);

  return { ref, isVisible };
}

function SkillProgress({ skill, percentage }: { skill: string, percentage: number }) {
  const [progress, setProgress] = useState(0);
  const { ref, isVisible } = useInViewAnimation();

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setProgress(percentage), 200);
      return () => clearTimeout(timer);
    }
  }, [isVisible, percentage]);

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">{skill}</span>
        <span className="text-sm text-gray-500">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-teal-500 to-cyan-500 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
