export const site = {
  name: 'David Pérez',
  fullName: 'David Pérez Rodríguez',
  role: 'Desarrollador Full Stack',
  specialty: 'Web y Mobile | React Native · Expo · TypeScript · Supabase',
  title:
    'David Pérez Rodríguez | Desarrollador Full Stack · Web y Mobile | React Native · Expo · TypeScript · Supabase',
  description:
    'Portfolio de David Pérez Rodríguez. Desarrollador Full Stack · Web y Mobile | React Native · Expo · TypeScript · Supabase. Desarrollo de aplicaciones web y móviles.',
  url: 'https://david-miportfolio.netlify.app',
  location: 'Cádiz, España',
  cv: '/curriculum-david-perez.pdf',
  photo: '/fotocurriculum1-Photoroom.jpg',
  email: 'david170481@icloud.com',
  phone: '+34 655 326 227',
  phoneHref: 'tel:+34655326227',
  linkedin: 'https://linkedin.com/in/perezrodriguezdavid',
  github: 'https://github.com/DavidsPR81',
};

export const typedLines = [
  'Desarrollador Full Stack',
  'Web y Mobile',
  'React Native · Expo · TypeScript · Supabase',
];

export const marqueeItems = [
  'React',
  'Next.js',
  'TypeScript',
  'React Native',
  'Expo',
  'Supabase',
  'Firebase',
  'Google Cloud',
  'Android',
  'Tailwind',
  'Python',
  'Jest',
];

export const stats = [
  { value: '17', suffix: 'años', label: 'Exp. previa (otro sector)' },
  { value: '2000', suffix: 'h', label: 'Formación DAM' },
  { value: '04', suffix: 'certs', label: 'Certificaciones Google' },
  { value: '05', suffix: 'proy.', label: 'Proyectos desarrollados' },
];

type ExperienceItem = {
  kind: 'Trabajo' | 'Formación' | 'Experiencia previa';
  title: string;
  company: string;
  period: string;
  year: string;
  location: string;
  hours?: string;
  description: string;
  skills: string[];
};

export const experience: ExperienceItem[] = [
  {
    kind: 'Trabajo',
    title: 'Desarrollador Full Stack (proyectos propios)',
    company: 'Aprende Fonemas · TVSmartMatch PRO',
    period: '2024 — Actualidad',
    year: '2024',
    location: 'Remoto',
    description:
      'Desarrollo de punta a punta de dos productos propios: Aprende Fonemas, app educativa de conciencia fonológica publicada en Google Play (React Native y Expo), y TVSmartMatch PRO, app de recomendación y comparación de televisores (React Native, Expo, TypeScript y Supabase), en fase de pruebas / próximo lanzamiento, con más de 1.000 tests automatizados, integración continua en GitHub Actions y web oficial en Astro.',
    skills: ['React Native', 'Expo', 'TypeScript', 'Supabase', 'Astro', 'GitHub Actions'],
  },
  {
    kind: 'Formación',
    title: 'Full Stack Developer',
    company: 'UCAM Educa Open',
    period: '2025',
    year: '2025',
    location: 'Online',
    hours: '200h',
    description:
      'Curso universitario intensivo de frontend, backend y despliegue de aplicaciones modernas.',
    skills: ['Frontend', 'Backend', 'Full Stack'],
  },
  {
    kind: 'Formación',
    title: 'CFGS Desarrollo de Aplicaciones Multiplataforma',
    company: 'Ilerna',
    period: '2023 — 2025',
    year: '2023',
    location: 'España',
    hours: '2000h',
    description:
      'Formación técnica superior en desarrollo web, móvil y bases de datos.',
    skills: ['DAM', 'Mobile', 'SQL'],
  },
  {
    kind: 'Experiencia previa',
    title: 'Responsable de Departamento',
    company: 'MediaMarkt Bahía de Cádiz',
    period: '2007 — 2024',
    year: '2007',
    location: 'Cádiz, España',
    description:
      'Experiencia profesional previa (otro sector): gestión de equipos, operaciones y toma de decisiones. Dirección de equipos, KPIs comerciales y optimización operativa. Incremento de ventas del 10%.',
    skills: ['Liderazgo', 'KPIs', 'Operaciones'],
  },
];

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  description: string;
  type: string;
  featured?: boolean;
  tech: string[];
  highlights: string[];
  links: ProjectLink[];
  metrics?: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    title: 'Aprende Fonemas',
    description:
      'App educativa de conciencia fonológica para niños de 3–7 años (español de España). Sesiones cortas y offline: fonemas, sílabas, rimas, fusión de sonidos y primeras frases. Freemium (niveles 1–4 gratis, 5–12 Premium de pago único), sin publicidad ni registro.',
    type: 'Mobile · Publicada',
    featured: true,
    tech: ['React Native', 'Expo SDK 54', 'Android', 'IAP', 'Jest', 'Netlify'],
    highlights: [
      'Publicada en Google Play',
      '12 niveles, progreso local y modo offline',
      'IAP Premium de pago único',
      'Tests pedagógicos + caso de estudio público',
      'v1.1 (lanzamiento previsto el 5 de noviembre de 2026): Partida de hoy (repaso diario) y recordatorio local sin Firebase',
    ],
    metrics: [
      { label: 'Plataforma', value: 'Android' },
      { label: 'Modelo', value: 'Freemium' },
      { label: 'Niveles', value: '12' },
      { label: 'Modo', value: 'Offline' },
    ],
    links: [
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.davidspr81.aprendefonemas',
      },
      { label: 'Web', href: 'https://aprendefonemas.netlify.app' },
      {
        label: 'Caso de estudio',
        href: 'https://github.com/DavidsPR81/aprende-fonemas-caso-estudio',
      },
    ],
  },
  {
    title: 'TVSmartMatch PRO',
    description:
      'App móvil (iOS y Android) que ayuda a elegir televisor: recomienda según estancia, uso y presupuesto, compara modelos y enlaza a ofertas reales. En fase de pruebas / próximo lanzamiento. Incluye pipeline de datos multimarca y una web oficial en Astro.',
    type: 'Mobile & Web · En fase de pruebas',
    featured: true,
    tech: ['React Native', 'Expo', 'TypeScript', 'Supabase', 'Astro', 'Netlify'],
    highlights: [
      'Recomendador y comparador de televisores',
      'Más de 1.000 tests automatizados e integración continua en GitHub Actions',
      'Pipeline de datos de 8 marcas con GitHub Actions',
      'Web oficial en Astro (SEO y rendimiento)',
      'Páginas legales, soporte y gestión de cuenta para las tiendas',
    ],
    links: [
      { label: 'Web', href: 'https://tvsmartmatch.com' },
      { label: 'Caso de estudio', href: 'https://github.com/DavidsPR81/tvsmartmatchpro-caso-estudio' },
    ],
  },
  {
    title: 'Portfolio v3',
    description:
      'Portfolio personal: perfil, trayectoria, proyectos y contacto. Diseño responsive, tema claro/oscuro y animaciones. Pensado para LinkedIn y procesos de selección.',
    type: 'Web Portfolio',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    highlights: [
      'Diseño responsive y tema claro/oscuro',
      'Animaciones con Framer Motion',
      'Contenido alineado con el currículum',
    ],
    links: [
      { label: 'Web', href: 'https://david-miportfolio.netlify.app' },
    ],
  },
  {
    title: 'FotoGo',
    description:
      'Colaboración en una red social de fotografía. Aporté trabajo full stack en partes concretas (gestión de contenido, lógica de concursos y UI), con React Native y Firebase.',
    type: 'Mobile App · Colaboración',
    tech: ['React Native', 'Firebase', 'Cloud Functions', 'TypeScript'],
    highlights: [
      'Gestión de contenido',
      'Lógica de concursos',
      'UI centrada en el usuario',
    ],
    links: [],
  },
  {
    title: 'Intranet Rota',
    description:
      'Aplicación Android para comunicación interna municipal y notificaciones push.',
    type: 'Android App',
    tech: ['Kotlin', 'PHP', 'Firebase', 'REST API'],
    highlights: [
      'Mensajería interna',
      'Notificaciones push',
      'Integración API REST',
    ],
    links: [],
  },
];

export const skillGroups = [
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS'],
  },
  {
    title: 'Mobile',
    skills: ['React Native', 'Expo', 'Kotlin', 'Android', 'IAP'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Supabase', 'PostgreSQL', 'Firebase', 'SQL'],
  },
  {
    title: 'Cloud',
    skills: ['Google Cloud', 'Netlify', 'Docker', 'CI/CD'],
  },
];

export const certifications = [
  { title: 'Google IT Automation with Python', hours: '240h' },
  { title: 'Google Data Analytics', hours: '260h' },
  { title: 'Google Cybersecurity', hours: '280h' },
  { title: 'Google Digital Marketing & E-commerce', hours: '260h' },
];

export const contacts = [
  { label: 'Email', value: site.email, href: `mailto:${site.email}` },
  { label: 'LinkedIn', value: 'perezrodriguezdavid', href: site.linkedin },
  { label: 'GitHub', value: 'DavidsPR81', href: site.github },
  { label: 'Teléfono', value: site.phone, href: site.phoneHref },
];
