import { Code2, Database, Laptop, Terminal, Server, Layout } from 'lucide-react';

// ─── About Section ────────────────────────────────────────────────────────────

export const highlights = [
  {
    icon: Code2,
    title: 'Daily DSA Practice',
    description:
      'Committed to solving Data Structures & Algorithms problems every day to sharpen problem-solving skills.',
  },
  {
    icon: Laptop,
    title: 'Full-Stack Expertise',
    description:
      'Proficient in MERN stack development with a focus on building scalable, user-centric applications.',
  },
  {
    icon: Database,
    title: 'System Design',
    description:
      'Understanding of database optimization, RESTful APIs, and component-based architecture.',
  },
  {
    icon: Terminal,
    title: 'Clean Code Advocate',
    description:
      'Writing maintainable, well-documented code following industry best practices and design patterns.',
  },
];

// ─── Skills Section ───────────────────────────────────────────────────────────

export const skillCategories = [
  {
    title: 'Languages',
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'Java', level: 89 },
      { name: 'JavaScript (ES6+)', level: 88 },
      { name: 'TypeScript', level: 75 },
      { name: 'HTML5 & CSS3', level: 92 },
      { name: 'SQL', level: 85 },
    ],
  },
  {
    title: 'Frontend Development',
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'React Router', level: 88 },
      { name: 'Redux Toolkit', level: 75 },
      { name: 'Component-Driven Design', level: 92 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'Bootstrap/Material UI', level: 80 },
    ],
  },
  {
    title: 'Backend & Distributed Systems',
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'Spring Boot', level: 89 },
      { name: 'Node.js/Express.js', level: 85 },
      { name: 'Spring Cloud (Eureka, API Gateway)', level: 78 },
      { name: 'RESTful APIs', level: 90 },
      { name: 'MongoDB', level: 82 },
      { name: 'MySQL/PostgreSQL', level: 70 },
    ],
  },
  {
    title: 'Security & Architecture',
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'Spring Security', level: 85 },
      { name: 'Microservices', level: 89 },
      { name: 'Event-Driven Architecture', level: 90 },
      { name: 'JWT', level: 85 },
      { name: 'Keycloak (OAuth2/OIDC)', level: 78 },
    ],
  },
  {
    title: 'Core Concepts',
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'Data Structures & Algorithms', level: 85 },
      { name: 'Object-Oriented Programming', level: 83 },
      { name: 'System Design Basics', level: 65 },
      { name: 'State Management', level: 88 },
      { name: 'Problem Solving', level: 90 },
    ],
  },
  {
    title: 'DevOps',
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'Agile & Scrum Methodologies', level: 80 },
      { name: 'Git, GitHub Actions (CI/CD)', level: 88 },
      { name: 'Docker', level: 70 },
      { name: 'Postman', level: 85 },
      { name: 'IntelliJ', level: 85 },
    ],
  },
];

export const methodologies = [
  'Agile & Scrum',
  'Microservices Architecture',
  'Code Reviews',
  'Bug Fixing',
  'Version Control',
  'UI/UX Design',
  'Responsive Design',
  'MVC Pattern',
  'Component Architecture',
];

// ─── Projects Section ─────────────────────────────────────────────────────────

export const projects = [
  {
    title: 'DUTYFIX IT',
    subtitle: 'Full-Stack Service Booking Platform',
    description:
      'DutyFixit is a workflow-driven platform that digitizes the "handyman" economy, focusing on clear task states, verified resolutions, and a direct connection between those who have a "duty" to be done and those who can "fix it."',
    features: [
      'Engineered a multi-portal SPA featuring Client, Worker, and Admin tiers with a focus on high availability and decentralized service exchange.',
      'Integrated JWT for stateless session management and bcrypt for cryptographic hashing, enforcing granular Role-Based Access Control (RBAC) across all API endpoints.',
      'Designed scalable MongoDB schemas to handle complex service lifecycles and leveraged React.js to maintain a responsive, state-driven user interface.',
      'Established automated CI/CD pipelines to facilitate continuous testing and rapid deployment, ensuring version control stability and system reliability.',
    ],
    techStack: [
      { name: 'React.js', icon: Code2 },
      { name: 'Node.js', icon: Server },
      { name: 'Express.js', icon: Server },
      { name: 'MongoDB', icon: Database },
      { name: 'HTML5/CSS3', icon: Layout },
    ],
    github: 'https://github.com/manikandan-704/DUTYFIXIT_2.0',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'FitTrack',
    subtitle: 'AI Powered Fitness Tracking Application',
    description:
      'FitTrack is a comprehensive fitness tracking application that leverages artificial intelligence to provide personalized fitness recommendations and insights. It allows users to track their workouts, monitor their progress, and receive AI-powered guidance to help them achieve their fitness goals.',
    features: [
      'Architected a fault-tolerant, scalable backend platform, successfully isolating data across 3 independently deployable domains using the database-per-service pattern, by building a Spring Boot microservices ecosystem routed through Spring Cloud Gateway and Eureka.',
      'Centralized system security and access control, standardizing authentication across all microservices without relying on custom coded token handlers, by integrating Keycloak (OAuth2/OIDC) as a dedicated enterprise identity provider.',
      'Eliminated synchronous processing bottlenecks between the activity and AI recommendation engines, achieving seamless, nonblocking event consumption, by decoupling inter-service communication via RabbitMQ message queues.',
      'Delivered personalized insights to end-users, efficiently processing complex activity datasets, by integrating the Google Gemini API into the AI service and externalizing all system configurations via Spring Cloud Config Server',
    ],
    techStack: [
      { name: 'Spring Boot', icon: Code2 },
      { name: 'Spring Cloud Gateway', icon: Server },
      { name: 'Eureka', icon: Database },
      { name: 'MongoDB / PostgreSQL', icon: Server },
      { name: 'Keycloak/ RabbitMQ', icon: Layout },
      { name: 'Spring Cloud Config Server', icon: Layout },
    ],
    github: 'https://github.com/manikandan-704/Manikandan',
    color: 'from-purple-500 to-pink-500',
  },
];

// ─── Contact Section ──────────────────────────────────────────────────────────

export const contactInfo = [
  {
    icon: 'Mail',
    label: 'Email',
    value: 'nagarajpriyan2004@gmail.com',
    href: 'mailto:nagarajpriyan2004@gmail.com',
  },
  {
    icon: 'Phone',
    label: 'Phone',
    value: '+91 9123531598',
    href: 'tel:+919123531598',
  },
  {
    icon: 'MapPin',
    label: 'Location',
    value: 'Madurai, Tamil Nadu',
    href: null,
  },
];

export const socialLinks = [
  {
    icon: 'Github',
    label: 'GitHub',
    href: 'https://github.com/manikandan-704',
    color: 'hover:text-gray-400',
  },
  {
    icon: 'Linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/manikandan704/',
    color: 'hover:text-blue-500',
  },
  {
    icon: 'Mail',
    label: 'Email',
    href: 'mailto:nagarajpriyan2004@gmail.com',
    color: 'hover:text-red-500',
  },
];

// ─── Certifications Section ───────────────────────────────────────────────────

/**
 * Certificate metadata.
 * PDFs are served from /public/assets/certs/ (not bundled by Vite).
 * Images are still imported via Vite glob for hashing.
 */
export const certMeta = [
  {
    file: 'Full stack certificate.pdf',
    name: '30-Day Full Stack Dev Masterclass',
    issuer: 'NoviTech R&D Private Limited',
    date: 'Jan 2026',
    color: '#6366f1',
    isPdf: true,
  },
  {
    file: 'XploCode_Intern_Certificate.pdf',
    name: 'Internship Certificate',
    issuer: 'XploCode',
    date: '2025',
    color: '#f97316',
    isPdf: true,
  },
  {
    file: 'Manikandan N (2).pdf',
    name: 'Achievement Certificate',
    issuer: 'Certification Body',
    date: '2025',
    color: '#22c55e',
    isPdf: true,
  },
  {
    file: 'WhatsApp Image 2026-03-26 at 11.58.53 AM.jpeg',
    name: 'Certificate of Completion',
    issuer: 'Certification Body',
    date: 'Mar 2026',
    color: '#06b6d4',
    isPdf: false,
  },
  {
    file: 'WhatsApp Image 2026-03-26 at 12.21.10 PM.jpeg',
    name: 'Professional Certificate',
    issuer: 'Certification Body',
    date: 'Mar 2026',
    color: '#a855f7',
    isPdf: false,
  },
];

// ─── Navigation ───────────────────────────────────────────────────────────────

export const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];
