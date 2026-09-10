export const site = {
  name: 'David Pérez',
  fullName: 'David Pérez Rodríguez',
  role: 'Full Stack Developer Junior',
  specialty: 'Web & Mobile',
  title: 'David Pérez Rodríguez | Full Stack Developer Junior',
  description:
    'Portfolio de David Pérez Rodríguez. Full Stack Junior (Web & Mobile). Desarrollo de aplicaciones web y móviles.',
  location: 'Cádiz, España',
  cv: '/curriculummayo1.pdf',
  photo: '/fotocurriculum1-Photoroom.jpg',
  email: 'david170481@icloud.com',
  phone: '+34 655 326 227',
  phoneHref: 'tel:+34655326227',
  linkedin: 'https://linkedin.com/in/perezrodriguezdavid',
  github: 'https://github.com/DavidsPR81',
};

export const typedLines = [
  'Full Stack Developer Junior',
  'Web & Mobile',
  'React · Next.js · React Native',
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
  { value: '17', suffix: 'años', label: 'Gestión de equipos' },
  { value: '2000', suffix: 'h', label: 'Formación DAM' },
  { value: '04', suffix: 'certs', label: 'Certificaciones Google' },
  { value: '05', suffix: 'proy.', label: 'Proyectos desarrollados' },
];

type ExperienceItem = {
  kind: 'Trabajo' | 'Formación';
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
    title: 'Fundador y desarrollador',
    company: 'Aprende Fonemas',
    period: '2026 — Actualidad',
    year: '2026',
    location: 'Remoto',
    description:
      'App educativa de conciencia fonológica para niños de 3–7 años, publicada en Google Play. Freemium offline, IAP Premium y 12 niveles pedagógicos.',
    skills: ['React Native', 'Expo', 'IAP', 'Jest'],
  },
  {
    kind: 'Trabajo',
    title: 'Desarrollador Full Stack',
    company: 'TVSmartMatch',
    period: '2024 — Actualidad',
    year: '2024',
    location: 'Remoto',
    description:
      'Plataforma web y móvil de comparación y recomendación de televisores. Next.js, React Native, Supabase y automatización en Google Cloud.',
    skills: ['Next.js', 'React Native', 'Supabase', 'GCP'],
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
    kind: 'Trabajo',
    title: 'Responsable de Departamento',
    company: 'MediaMarkt Bahía de Cádiz',
    period: '2007 — 2024',
    year: '2007',
    location: 'Cádiz, España',
    description:
      'Dirección de equipos, KPIs comerciales y optimización operativa. Incremento de ventas del 10%.',
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
      'Tests pedagógicos + repo público para revisión técnica',
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
        label: 'Código',
        href: 'https://github.com/DavidsPR81/aprende-fonemas-portfolio',
      },
    ],
  },
  {
    title: 'TVSmartMatch',
    description:
      'Plataforma de comparación y recomendación de televisores con arquitectura web y móvil.',
    type: 'Web & Mobile',
    tech: ['Next.js', 'React Native', 'Supabase', 'GCP'],
    highlights: [
      'Autenticación y perfiles',
      'Base de datos relacional',
      'Landing SEO',
      'Cloud Functions',
    ],
    links: [{ label: 'Visitar', href: 'https://tvsmartmatch.com' }],
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
    links: [],
  },
  {
    title: 'FotoGo',
    description:
      'Red social de fotografía con rankings, concursos y automatización backend.',
    type: 'Mobile App',
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
