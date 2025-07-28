'use client';

import React, { useState, useRef, useEffect } from 'react';
import { FaUserTie } from 'react-icons/fa';

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

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className="w-full py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300 relative animate-fade-in-up overflow-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Patrón geométrico de fondo - similar a Hero */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-32 right-20 w-28 h-28 border-2 border-teal-500 rounded-full animate-pulse" style={{animationDuration: '5s'}}></div>
        <div className="absolute top-20 left-32 w-20 h-20 border-2 border-cyan-400 rotate-45" style={{animation: 'spin 25s linear infinite'}}></div>
        <div className="absolute bottom-40 right-40 w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full opacity-20 animate-bounce" style={{animationDuration: '7s'}}></div>
        <div className="absolute bottom-32 left-20 w-12 h-12 border-2 border-teal-400 rounded-lg rotate-12 animate-pulse" style={{animationDuration: '4s'}}></div>
        <div className="absolute top-1/2 right-10 w-6 h-6 bg-cyan-400 rounded-full animate-ping" style={{animationDuration: '6s'}}></div>
        <div className="absolute top-2/3 left-10 w-8 h-8 border border-teal-500 rotate-45 animate-pulse" style={{animationDuration: '8s'}}></div>
      </div>
      
      {/* Contenedor con mismo max width y centrado que Hero */}
      <div className="max-w-[1400px] w-full mx-auto relative z-20">
        <TextDecoderTitle text="Sobre Mí" active={isVisible} Icon={FaUserTie} />
        
        <div className="flex flex-col md:flex-row items-start justify-between gap-0 md:gap-8">
          {/* CONTENIDO TEXTUAL PRINCIPAL */}
          <div className="flex-grow max-w-[900px]">
            <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300 text-justify mb-8">
              Profesional con más de <strong>17 años de experiencia</strong> en <strong>liderazgo</strong> y <strong>gestión comercial</strong> dentro de entornos multinacionales, reconocido por <strong>optimizar procesos</strong> y alcanzar incrementos sostenidos en ventas, impulsando resultados tangibles en equipos de alto rendimiento.
            </p>

            <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300 text-justify mb-8">
              Actualmente en proceso de transición al sector tecnológico, especializándome en <strong>Desarrollo de Aplicaciones Multiplataforma</strong> mediante formación de Grado Superior, abarcando desarrollo web, móvil, <strong>análisis de datos</strong> y <strong>ciberseguridad</strong>, aplicando un enfoque práctico y orientado a la entrega de soluciones efectivas.
            </p>

            <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300 text-justify mb-8">
              Mi experiencia técnica en desarrollo abarca tecnologías como <strong>Kotlin</strong>, <strong>React</strong>, <strong>Firebase</strong> y automatización en <strong>Google Cloud Platform</strong>, combinando <strong>habilidades de liderazgo consolidadas</strong> con <strong>competencias técnicas emergentes</strong> y <strong>metodologías ágiles</strong> para construir soluciones robustas y escalables.
            </p>

            <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300 text-justify mb-0">
              Destaco por mi <strong>capacidad de adaptación</strong>, <strong>constancia</strong> y compromiso con el <strong>aprendizaje continuo</strong>, atributos que me permiten enfrentar desafíos complejos con eficacia y mantenerme a la vanguardia tecnológica, aportando valor mediante la combinación única de <strong>experiencia en liderazgo</strong> y <strong>competencias tecnológicas avanzadas</strong>.
            </p>
          </div>

          {/* PANEL TRANSICIÓN PROFESIONAL */}
           <div className="flex-shrink-0 w-full md:w-[400px] lg:w-[420px] mt-0 md:mt-0 flex flex-col justify-between">
             <div className="bg-gradient-to-br from-emerald-50/95 to-green-100/95 dark:from-emerald-800/95 dark:to-green-900/95 backdrop-blur-sm rounded-2xl border border-emerald-200/60 dark:border-emerald-600/40 shadow-2xl hover:shadow-3xl hover:scale-[1.01] transition-all duration-500 p-8 h-full flex flex-col justify-start">
              <h3 className="text-lg font-bold text-emerald-800 dark:text-white mb-8 text-center flex items-center justify-center gap-3">
                 <div className="w-7 h-7 bg-gradient-to-r from-emerald-600 to-green-600 rounded-full flex items-center justify-center animate-pulse shadow-lg" style={{animationDuration: '3s'}}>
                   <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                     <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                   </svg>
                 </div>
                 Transición Profesional
               </h3>
              
              <div className="space-y-5">
                {/* Stage 1 - Liderazgo Comercial */}
                <div className="relative group animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                  <div className="flex items-start space-x-4">
                    <div className="relative z-10">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-700 to-indigo-800 rounded-full flex-shrink-0 border-2 border-blue-300 dark:border-slate-600 shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 hover:shadow-blue-500/50 animate-pulse" style={{animationDuration: '4s'}}>
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h2zm4-3a1 1 0 00-1 1v1h2V4a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-blue-600 to-amber-500 opacity-70 animate-pulse" style={{animationDuration: '5s'}}></div>
                      </div>
                     <div className="flex-1">
                       <h4 className="font-bold text-blue-800 dark:text-blue-300 text-base mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 hover:drop-shadow-lg">Liderazgo Comercial</h4>
                         <p className="text-sm font-bold text-blue-600 dark:text-blue-400 mb-2 group-hover:text-blue-500 transition-colors duration-300">2007 - 2024</p>
                         <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">17 años gestionando equipos y optimizando procesos comerciales en entornos multinacionales</p>
                    </div>
                  </div>
                </div>

                {/* Stage 2 - Formación Técnica */}
                <div className="relative group animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                  <div className="flex items-start space-x-4">
                    <div className="relative z-10">
                        <div className="w-8 h-8 bg-gradient-to-r from-amber-600 to-orange-700 rounded-full flex-shrink-0 animate-bounce border-2 border-amber-300 dark:border-slate-600 shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 hover:shadow-amber-500/50" style={{animationDuration: '3s'}}>
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                          </svg>
                        </div>
                        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-amber-600 to-emerald-600 opacity-70 animate-pulse" style={{animationDuration: '4s'}}></div>
                      </div>
                     <div className="flex-1">
                       <h4 className="font-bold text-amber-800 dark:text-amber-300 text-base mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300 hover:drop-shadow-lg">Formación Técnica</h4>
                         <p className="text-sm font-bold text-amber-600 dark:text-amber-400 mb-2 group-hover:text-amber-500 transition-colors duration-300">2023 - 2025</p>
                         <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">Grado Superior en Desarrollo de Aplicaciones Multiplataforma</p>
                    </div>
                  </div>
                </div>

                {/* Stage 3 - Desarrollador Full Stack */}
                <div className="relative group animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                  <div className="flex items-start space-x-4">
                    <div className="relative z-10">
                        <div className="w-8 h-8 bg-gradient-to-r from-emerald-700 to-teal-800 rounded-full flex-shrink-0 border-2 border-emerald-300 dark:border-slate-600 shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-pulse hover:shadow-emerald-500/50" style={{animationDuration: '2.5s'}}>
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                     <div className="flex-1">
                       <h4 className="font-bold text-emerald-800 dark:text-emerald-300 text-base mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300 hover:drop-shadow-lg">Desarrollador Full Stack</h4>
                         <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400 mb-2 group-hover:text-emerald-500 transition-colors duration-300">2025 - Presente</p>
                         <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">Liderazgo + Tecnología + Análisis de Datos + Ciberseguridad</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Value Proposition */}
                 <div className="mt-5 pt-5 border-t border-emerald-300/60 dark:border-slate-600/60 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
                   <div className="bg-gradient-to-r from-emerald-100/80 to-green-200/80 dark:from-slate-700/80 dark:to-emerald-800/80 rounded-xl p-4 hover:shadow-lg transition-all duration-300 group">
                     <p className="text-center text-sm font-medium text-emerald-800 dark:text-white leading-relaxed">
                       <svg className="w-4 h-4 inline-block mr-2 animate-bounce group-hover:text-emerald-600 transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20" style={{animationDuration: '2s'}}>
                         <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                       </svg>
                       <strong className="group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors duration-300">Valor Diferencial:</strong> Combinando experiencia consolidada en liderazgo comercial con competencias tecnológicas avanzadas para crear soluciones integrales e innovadoras
                     </p>
                   </div>
                 </div>
                 
                 {/* Additional spacing to match text height */}
                 <div className="flex-grow"></div>
            </div>
          </div>
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
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
