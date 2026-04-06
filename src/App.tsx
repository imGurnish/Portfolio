import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  Award,
  BriefcaseBusiness,
  Code2,
  Compass,
  ExternalLink,
  GraduationCap,
  Layers3,
  Mail,
  MapPin,
  Phone,
  Search,
  Shield,
  ShieldCheck,
  Sparkles,
  Smartphone,
  TerminalSquare,
  type LucideIcon,
} from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import type { ComponentType } from 'react'
import { useEffect, useState } from 'react'

type Highlight = {
  label: string
  value: string
  detail: string
}

type SkillGroup = {
  title: string
  items: string[]
  icon: LucideIcon
}

type ExperienceItem = {
  title: string
  org: string
  period: string
  summary: string
  bullets: string[]
  icon: LucideIcon
}

type ProjectItem = {
  title: string
  category: string
  summary: string
  stack: string[]
  bullets: string[]
  gradient: string
  repoUrl: string
  liveUrl: string
  screenshots: string[]
  previewMode?: 'single' | 'dual-mobile'
}

type SecondaryProject = {
  title: string
  summary: string
  stack: string[]
  repoUrl: string
  liveUrl: string
}

type LinkCard = {
  label: string
  value: string
  href: string
  icon: ComponentType<{ className?: string }>
}

type SeoCard = {
  title: string
  summary: string
  icon: LucideIcon
  tags: string[]
}

const highlights: Highlight[] = [
  { label: 'CGPA', value: '8.42', detail: 'IIIT Kota, CSE' },
  { label: 'Primary stack', value: 'MERN + Flutter', detail: 'Web and mobile delivery' },
  { label: 'Focus', value: 'Product + security', detail: 'Shipping for real users' },
]

const seoCards: SeoCard[] = [
  {
    title: 'Full-stack web development',
    summary:
      'I build React and Node.js applications with polished interfaces, role-based access, and deployment-ready architecture for real users.',
    icon: Search,
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
  },
  {
    title: 'Flutter mobile products',
    summary:
      'I create Flutter apps for Android, iOS, and desktop with responsive layouts, maintainable state management, and clean UX details.',
    icon: Smartphone,
    tags: ['Flutter', 'Dart', 'BLoC', 'Responsive UI'],
  },
  {
    title: 'Security-first systems',
    summary:
      'My work leans toward secure authentication, encrypted flows, audit-friendly flows, and backend logic that can survive production use.',
    icon: ShieldCheck,
    tags: ['Authentication', 'Encryption', 'Audit logs', 'APIs'],
  },
]

const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    icon: Code2,
    items: ['C++', 'Python', 'JavaScript', 'Java', 'C', 'Dart', 'Kotlin'],
  },
  {
    title: 'Frameworks',
    icon: Layers3,
    items: ['MERN Stack', 'Flutter', 'Jetpack Compose', 'HTML', 'CSS'],
  },
  {
    title: 'Tools',
    icon: Compass,
    items: ['MySQL', 'Git', 'GitHub', 'Docker', 'Google Cloud', 'Linux', 'VS Code'],
  },
  {
    title: 'CS Fundamentals',
    icon: TerminalSquare,
    items: ['Data Structures', 'Algorithms', 'Computer Networks', 'OOP', 'DBMS'],
  },
  {
    title: 'Soft Skills',
    icon: Sparkles,
    items: ['Teamwork', 'Strategic Planning', 'Quick Learning', 'Innovative Thinking'],
  },
]

const experiences: ExperienceItem[] = [
  {
    title: 'Full Stack Developer Intern',
    org: 'Unifindss',
    period: 'Nov 2024 - Jan 2025',
    summary:
      'Shipped production features improving student support and counseling workflows on the official platform.',
    bullets: [
      'Implemented real-time chat and integrated it into the existing user journey.',
      'Built counseling backend APIs with secure session handling and scalable database integration.',
      'Developed an admin panel with role-based access for managing users and counseling operations.',
      'Awarded Star Performer for high-impact delivery in a production environment.',
    ],
    icon: BriefcaseBusiness,
  },
  {
    title: 'Web-Master',
    org: 'IIIT Kota',
    period: 'Mar 2025 - Present',
    summary:
      'Managing development and maintenance for the official college event portal used by 500+ users.',
    bullets: [
      'Maintained the MERN-based event portal and improved reliability across releases.',
      'Engineered a proof-of-concept attendance system using BLE in Flutter with a Python FastAPI backend.',
    ],
    icon: Shield,
  },
  {
    title: 'Coordinator',
    org: 'CYPH3R Club, IIIT Kota',
    period: 'Aug 2025 - Present',
    summary:
      'Leading cybersecurity workshops, CTFs, and technical sessions for students on campus.',
    bullets: [
      'Spearheaded 10+ workshops and CTFs, improving active member engagement by 40%.',
      'Delivered sessions on web vulnerabilities, network security, and cryptography to 50+ students.',
    ],
    icon: Award,
  },
]

const mainProjects: ProjectItem[] = [
  {
    title: 'LinkSuraksha',
    category: 'Secure Payment Ecosystem',
    summary:
      'Privacy-first digital payment ecosystem using temporary encrypted service accounts that avoid exposing real bank details.',
    stack: ['Node.js', 'React', 'Express', 'MongoDB', 'Vite', 'Tailwind CSS'],
    bullets: [
      'Multi-part architecture with gateway, bank simulator, and merchant portal.',
      'JWT auth, SSE updates, and strong privacy controls for transaction safety.',
      'Optional blockchain-ready audit trail and tamper-detection workflow.',
    ],
    gradient: 'from-sky-500/35 via-cyan-300/15 to-fuchsia-400/20',
    repoUrl: 'https://github.com/imGurnish/LinkSuraksha',
    liveUrl: 'https://linksuraksha.gurnishsingh.tech',
    screenshots: [
      '/1-linksuraksha.png',
      '/2-linksuraksha.png',
      '/3-linksuraksha.png',
      '/4-linksuraksha.png',
      '/5-linksuraksha.png',
      '/6-linksuraksha.png',
      '/7-linksuraksha.png',
    ],
  },
  {
    title: 'Wisdom Hub',
    category: 'Educational Resource Platform',
    summary:
      'MERN platform where students and educators can share books, question papers, and study material with role-aware access.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    bullets: [
      'Google sign-in and JWT authentication with bcrypt-backed password security.',
      'Upload pipeline for learning resources and public profile visibility.',
      'Production deployment path with a live web target in README.',
    ],
    gradient: 'from-emerald-400/30 via-lime-300/15 to-teal-500/20',
    repoUrl: 'https://github.com/imGurnish/WisdomHub',
    liveUrl: 'https://wisdomhub.gurnishsingh.tech',
    screenshots: [
      '/1-wisdomhub.png',
      '/2-wisdomhub.png',
      '/3-wisdomhub.png',
      '/4-wisdomhub.png',
      '/5-wisdomhub.png',
      '/6-wisdomhub.png',
      '/7-wisdomhub.png',
    ],
  },
  {
    title: 'Locksy',
    category: 'Password Manager',
    summary:
      'Cross-platform Flutter password manager focused on local-first encrypted storage and lightweight performance.',
    stack: ['Flutter', 'Dart', 'encrypt', 'shared_preferences', 'crypto'],
    bullets: [
      'AES-based encryption for sensitive credentials before local persistence.',
      'No cloud dependency by default, keeping user data private on-device.',
      'Built to run across Android, iOS, desktop, and Linux targets.',
    ],
    gradient: 'from-violet-400/30 via-indigo-300/20 to-blue-500/20',
    repoUrl: 'https://github.com/imGurnish/Locksy',
    liveUrl: 'https://locksy.gurnishsingh.tech',
    screenshots: ['/1-locksy.jpg', '/2-locksy.jpg', '/3-locksy.jpg', '/4-locksy.jpg', '/5-locksy.jpg'],
    previewMode: 'dual-mobile',
  },
  {
    title: 'Musee',
    category: 'Music Streaming App (Flutter)',
    summary:
      'Flutter client for a music streaming product with modern onboarding, auth flow, and dashboard feed integrations.',
    stack: ['Flutter', 'Node.js', 'Supabase', 'Redis', 'Azure'],
    bullets: [
      'Multi-step onboarding and responsive auth screens for mobile-first UX.',
      'Clean architecture style with modular data, domain, and presentation layers.',
      'Built with BLoC state management and service-locator driven dependencies.',
    ],
    gradient: 'from-orange-400/30 via-amber-300/15 to-rose-500/20',
    repoUrl: 'https://github.com/imGurnish/Musee-client',
    liveUrl: 'https://musee.gurnishsingh.tech',
    screenshots: [
      '/1-musee.png',
      '/2-musee.png',
      '/3-musee.png',
      '/4-musee.png',
      '/5-musee.png',
      '/6-musee.png',
    ],
    previewMode: 'dual-mobile',
  },
]

const otherProjects: SecondaryProject[] = [
  {
    title: 'Outsource-Now',
    summary:
      'Frontend for a freelancing workflow platform with responsive pages and a modern Tailwind-driven UI.',
    stack: ['React', 'Vite', 'Tailwind CSS'],
    repoUrl: 'https://github.com/imGurnish/Outsource-Now',
    liveUrl: 'https://outsourcenow.gurnishsingh.tech/',
  },
  {
    title: 'ForecastEase',
    summary: 'Weather display web app built with core web technologies and simple forecast-focused interactions.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    repoUrl: 'https://github.com/imGurnish/ForecastEase',
    liveUrl: 'https://forecast-ease.vercel.app/',
  },
  {
    title: 'Netflix-clone',
    summary: 'Static Netflix-style landing page clone emphasizing layout, styling, and front-end structure.',
    stack: ['HTML', 'CSS', 'Flexbox'],
    repoUrl: 'https://github.com/imGurnish/Netflix-clone',
    liveUrl: '',
  },
  {
    title: 'SoulScript',
    summary: 'Simple PHP-based note-taking app with user authentication and MySQL-backed data storage.',
    stack: ['PHP', 'MySQL', 'Authentication', 'CRUD'],
    repoUrl: 'https://github.com/imGurnish/SoulScript',
    liveUrl: '',
  },
]

const achievements = [
  'National Winner - SIH 2025 (PS ID: SIH25105)',
  'Top 15 at SuRaksha Fintech Security Hackathon among 6,800+ participants',
  'First Runner-Up at HackTheChain 2.0 among 100+ teams',
  'Competitive programming: 2-star on CodeChef, peak 1284 on Codeforces',
]

const contactLinks: LinkCard[] = [
  {
    label: 'Email',
    value: 'gurnishsinghsangha@gmail.com',
    href: 'mailto:gurnishsinghsangha@gmail.com',
    icon: Mail,
  },
  {
    label: 'Phone',
    value: '+91 9664101285',
    href: 'tel:+919664101285',
    icon: Phone,
  },
  {
    label: 'LinkedIn',
    value: 'gurnish-singh-sangha-16b19428b',
    href: 'https://www.linkedin.com/in/gurnish-singh-sangha-16b19428b/',
    icon: FaLinkedin,
  },
  {
    label: 'GitHub',
    value: '@imGurnish',
    href: 'https://github.com/imGurnish',
    icon: FaGithub,
  },
]

function App() {
  const [activeProject, setActiveProject] = useState(0)
  const [activeScreenshot, setActiveScreenshot] = useState(0)
  const [showOtherProjects, setShowOtherProjects] = useState(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (reduceMotion) {
      return undefined
    }

    const timer = window.setInterval(() => {
      setActiveProject((current) => (current + 1) % mainProjects.length)
      setActiveScreenshot(0)
    }, 6200)

    return () => window.clearInterval(timer)
  }, [reduceMotion])

  const currentProject = mainProjects[activeProject]
  const activeScreenshotUrl =
    currentProject.screenshots[activeScreenshot] ?? currentProject.screenshots[0]
  const isDualMobilePreview = currentProject.previewMode === 'dual-mobile'
  const previewScreenshots = Array.from(
    { length: Math.min(4, currentProject.screenshots.length) },
    (_, offset) => currentProject.screenshots[(activeScreenshot + offset) % currentProject.screenshots.length],
  )

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(66,153,225,0.20),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.18),transparent_25%),radial-gradient(circle_at_bottom,rgba(16,185,129,0.10),transparent_35%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:72px_72px]" />

      <section className="relative mx-auto w-full max-w-[1680px] px-4 pb-14 pt-5 sm:px-6 sm:pb-16 sm:pt-6 lg:px-10 2xl:px-12">
        <header className="mb-8 flex items-center justify-between gap-4 border-b border-white/10 pb-5 sm:mb-12 sm:pb-6">
          <div>
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-cyan-200/70">Portfolio</p>
              <h1 className="mt-2 text-lg font-semibold tracking-wide text-white">Gurnish Singh Sangha</h1>
            </div>
          </div>

          <nav className="hidden items-center gap-2 md:flex">
            {[
              ['About', '#about'],
              ['Skills', '#skills'],
              ['Projects', '#projects'],
              ['Experience', '#experience'],
              ['Contact', '#contact'],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-300/40 hover:bg-white/10 hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>
        </header>

        <nav className="-mt-2 mb-6 grid grid-cols-2 gap-2 pb-1 md:hidden">
          {[
            ['About', '#about'],
            ['Skills', '#skills'],
            ['Projects', '#projects'],
            ['Experience', '#experience'],
            ['Contact', '#contact'],
          ].map(([label, href]) => (
            <a
              key={`mobile-${label}`}
              href={href}
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-slate-200 transition hover:border-cyan-300/40 hover:bg-white/10"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/6 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:rounded-[2rem] sm:p-10 lg:p-12"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(45,212,191,0.18),transparent_28%),radial-gradient(circle_at_85%_10%,rgba(147,51,234,0.18),transparent_26%),linear-gradient(135deg,rgba(255,255,255,0.05),transparent_30%)]" />
            <div className="relative flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100">
                <Sparkles className="h-4 w-4" />
                Full-Stack Engineer | Secure Product Builder
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200/90">
                <MapPin className="h-4 w-4 text-emerald-300" />
                IIIT Kota, Rajasthan
              </span>
            </div>

            <div className="relative mt-7 max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-200/70">Gurnish Singh Sangha</p>
              <h2 className="mt-4 text-[2rem] font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-[3.6rem]">
                Building calm interfaces and resilient systems with a security-first mindset.
              </h2>
              <p className="mt-5 max-w-2xl text-[0.98rem] leading-7 text-slate-300 sm:mt-6 sm:text-lg sm:leading-8">
                I am a Computer Science student at IIIT Kota who turns product ideas into reliable web and mobile
                experiences. I work across React, TypeScript, Node.js, Express, MongoDB, Flutter, and backend systems,
                with a strong bias toward clean architecture, secure flows, and shipping real value.
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                My portfolio focuses on searchable, production-oriented work: student platforms, secure payment ideas,
                mobile apps, admin dashboards, and projects that show both execution and technical depth.
              </p>
            </div>

            <div className="relative mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:gurnishsinghsangha@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:translate-y-[-1px] hover:bg-cyan-100"
              >
                <Mail className="h-4 w-4" />
                Email me
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-white/10"
              >
                View projects
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="relative mt-6 overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/6 p-3 backdrop-blur-xl sm:hidden">
              <div className="overflow-hidden rounded-[1.2rem] border border-white/10 bg-slate-950/40">
                <img
                  src="/Gurnish_Singh_Sangha.jpg"
                  alt="Gurnish Singh Sangha portrait"
                  className="h-72 w-full object-cover object-center"
                />
                <div className="absolute inset-x-3 bottom-3 rounded-[1rem] bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.28em] text-cyan-100/80">Profile</p>
                  <p className="mt-1 text-base font-semibold text-white">Gurnish Singh Sangha</p>
                </div>
              </div>
            </div>

            <div className="relative mt-8 grid gap-3 sm:mt-10 sm:gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-slate-950/30 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">{item.label}</p>
                  <p className="mt-3 text-2xl font-semibold text-white">{item.value}</p>
                  <p className="mt-2 text-sm text-slate-300">{item.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.aside
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="grid gap-4"
          >
            <div className="relative hidden overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/6 p-3.5 backdrop-blur-xl sm:block sm:rounded-[2rem] sm:p-4">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(103,232,249,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.14),transparent_28%)]" />
              <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/40">
                <img
                  src="/Gurnish_Singh_Sangha.jpg"
                  alt="Gurnish Singh Sangha portrait"
                  className="h-[21rem] w-full object-cover object-center sm:h-[24rem] lg:h-[28rem]"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent p-5">
                  <p className="text-xs uppercase tracking-[0.32em] text-cyan-100/80">Profile</p>
                  <p className="mt-1 text-lg font-semibold text-white">Gurnish Singh Sangha</p>
                  <p className="text-sm text-slate-300">Full-Stack Engineer | Secure Product Builder</p>
                </div>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/6 p-5 backdrop-blur-xl sm:rounded-[2rem] sm:p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.32em] text-slate-400">Snapshot</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">Fast facts at a glance</h3>
                </div>
                <div className="rounded-full border border-emerald-300/20 bg-emerald-300/10 p-3 text-emerald-200">
                  <Compass className="h-5 w-5" />
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  ['Education', 'B.Tech CSE at IIIT Kota'],
                  ['CGPA', '8.42 / 10'],
                  ['Location', 'Kota, Rajasthan'],
                  ['Status', 'Open to impactful roles'],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-slate-950/35 p-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-400">{label}</p>
                    <p className="mt-2 text-sm font-medium text-white">{value}</p>
                  </div>
                ))}
              </div>
            </div>

          </motion.aside>
        </div>
      </section>

      <section id="about" className="relative mx-auto w-full max-w-[1680px] px-4 py-12 sm:px-6 sm:py-14 lg:px-10 2xl:px-12">
        <div className="grid gap-4 lg:grid-cols-[0.88fr_1.12fr]">
          <motion.article
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/70">About</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
              A portfolio built to explain the work clearly and rank for the right searches.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
              I design and build full-stack products with a focus on clarity, trust, and measurable usefulness. That
              usually means responsive interfaces, predictable API behavior, clean state management, and enough detail
              in the copy for recruiters, collaborators, and search engines to understand what I do.
            </p>

            <div className="mt-5 rounded-[1.5rem] border border-white/10 bg-slate-950/35 p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-400">What I want this site to show</p>
              <ul className="mt-4 grid gap-3 text-sm leading-7 text-slate-200 sm:grid-cols-2">
                <li className="rounded-2xl border border-white/10 bg-slate-950/35 p-4">
                  React, Flutter, and Node.js work that feels polished and intentional.
                </li>
                <li className="rounded-2xl border border-white/10 bg-slate-950/35 p-4">
                  Secure application design with authentication, encryption, and admin workflows.
                </li>
                <li className="rounded-2xl border border-white/10 bg-slate-950/35 p-4">
                  Hackathon results, internships, and campus leadership that show consistent delivery.
                </li>
                <li className="rounded-2xl border border-white/10 bg-slate-950/35 p-4">
                  A clear path to contact me for internships, freelance work, or collaboration.
                </li>
              </ul>
            </div>
          </motion.article>

          <div className="grid gap-4">
            {seoCards.map((card, index) => {
              const Icon = card.icon

              return (
                <motion.article
                  key={card.title}
                  initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, delay: index * 0.06, ease: 'easeOut' }}
                  className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl border border-white/10 bg-white/8 p-3 text-cyan-100">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                      <p className="text-sm text-slate-400">Search-friendly summary of my current focus</p>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">{card.summary}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-slate-950/40 px-3 py-1.5 text-sm text-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      <section id="skills" className="relative mx-auto w-full max-w-[1680px] px-4 py-12 sm:px-6 sm:py-14 lg:px-10 2xl:px-12">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/70">Core stack</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">Skills</h2>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon

            return (
              <motion.div
                key={group.title}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: index * 0.05, ease: 'easeOut' }}
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/8 p-3 text-cyan-100">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                    <p className="text-sm text-slate-400">Selected from the resume</p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-slate-950/40 px-3 py-1.5 text-sm text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      <section id="experience" className="relative mx-auto w-full max-w-[1680px] px-4 py-12 sm:px-6 sm:py-14 lg:px-10 2xl:px-12">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/70">Timeline</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">Experience</h2>
          </div>
        </div>

        <div className="grid gap-4">
          {experiences.map((experience, index) => {
            const Icon = experience.icon

            return (
              <motion.article
                key={`${experience.org}-${experience.title}`}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: index * 0.06, ease: 'easeOut' }}
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-lg"
              >
                <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start">
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="rounded-2xl border border-white/10 bg-white/8 p-3 text-cyan-100">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{experience.title}</h3>
                        <p className="text-sm text-slate-300">{experience.org}</p>
                      </div>
                    </div>

                    <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">{experience.summary}</p>

                    <ul className="mt-5 grid gap-3 text-sm leading-7 text-slate-200 sm:grid-cols-2 xl:grid-cols-3">
                      {experience.bullets.map((bullet) => (
                        <li key={bullet} className="rounded-2xl border border-white/10 bg-slate-950/35 p-4">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-slate-950/35 px-4 py-3 text-sm text-slate-300 lg:min-w-44 lg:self-start lg:text-right">
                    {experience.period}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </section>

      <section id="projects" className="relative mx-auto w-full max-w-[1680px] px-4 py-12 sm:px-6 sm:py-14 lg:px-10 2xl:px-12">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/70">Selected work</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">Projects slideshow</h2>
          </div>

        </div>

        <div className="grid gap-4 xl:grid-cols-[1.62fr_0.38fr]">
          <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 p-3.5 backdrop-blur-xl sm:rounded-[2rem] sm:p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject.title}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -16 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className={`relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br ${currentProject.gradient} p-4 sm:rounded-[1.75rem] sm:p-8`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.20),transparent_28%),linear-gradient(135deg,rgba(6,11,22,0.68),rgba(6,11,22,0.25))]" />
                <div className="relative flex h-full flex-col justify-between gap-8 lg:min-h-[34rem]">
                  <div>
                    <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-white/80">
                      {currentProject.category}
                    </div>
                    <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-white sm:mt-5 sm:text-4xl">
                      {currentProject.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-7 text-white/85 sm:mt-4 sm:text-lg sm:leading-8">
                      {currentProject.summary}
                    </p>

                    <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/30 p-3.5 backdrop-blur-sm sm:p-4">
                      {isDualMobilePreview ? (
                        <div className="grid grid-cols-2 gap-2.5 sm:gap-3 xl:grid-cols-3 2xl:grid-cols-4">
                          {previewScreenshots.map((imageUrl, index) => (
                            <div
                              key={`${currentProject.title}-preview-${index + 1}`}
                              className={`mx-auto aspect-[9/19.5] w-full max-w-[12rem] overflow-hidden rounded-xl border border-white/10 bg-slate-950/75 ${
                                index === 2 ? 'hidden xl:block' : ''
                              } ${index === 3 ? 'hidden 2xl:block' : ''}`}
                            >
                              <img
                                src={imageUrl}
                                alt={`${currentProject.title} screenshot ${((activeScreenshot + index) % currentProject.screenshots.length) + 1}`}
                                className="h-full w-full object-contain"
                                loading="lazy"
                              />
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="overflow-hidden rounded-xl border border-white/10 bg-slate-950/75">
                          <img
                            src={activeScreenshotUrl}
                            alt={`${currentProject.title} screenshot ${activeScreenshot + 1}`}
                            className="h-56 w-full object-contain sm:h-[22rem] lg:h-[36rem]"
                            loading="lazy"
                          />
                        </div>
                      )}
                      <div className="mt-3.5 hidden gap-2.5 overflow-x-auto pb-1.5 md:flex">
                        {currentProject.screenshots.map((imageUrl, index) => (
                          <button
                            key={`${currentProject.title}-shot-${index + 1}`}
                            type="button"
                            onClick={() => setActiveScreenshot(index)}
                            className={`shrink-0 rounded-xl border p-0.5 transition ${
                              index === activeScreenshot
                                ? 'border-cyan-300/80'
                                : 'border-white/10 hover:border-white/30'
                            }`}
                            aria-label={`Show screenshot ${index + 1}`}
                          >
                            <img
                              src={imageUrl}
                              alt={`${currentProject.title} thumbnail ${index + 1}`}
                              className={`rounded-lg ${
                                isDualMobilePreview
                                  ? 'h-24 w-14 object-contain sm:h-28 sm:w-16'
                                  : 'h-16 w-28 object-contain sm:h-20 sm:w-40'
                              }`}
                              loading="lazy"
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-2 sm:hidden">
                      <a
                        href={currentProject.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-slate-950/40 px-3 py-2 text-xs font-medium text-slate-200 transition hover:border-cyan-300/40 hover:bg-white/10"
                      >
                        Repo
                        <FaGithub className="h-3.5 w-3.5" />
                      </a>
                      <a
                        href={currentProject.liveUrl}
                        target={currentProject.liveUrl.startsWith('http') ? '_blank' : undefined}
                        rel={currentProject.liveUrl.startsWith('http') ? 'noreferrer' : undefined}
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-slate-950/40 px-3 py-2 text-xs font-medium text-slate-200 transition hover:border-cyan-300/40 hover:bg-white/10"
                      >
                        Live
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-4 grid grid-cols-2 gap-2 sm:flex sm:items-center sm:justify-between sm:gap-4">
              <button
                type="button"
                onClick={() => {
                  setActiveProject((current) =>
                    (current - 1 + mainProjects.length) % mainProjects.length,
                  )
                  setActiveScreenshot(0)
                }}
                className="hidden items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 transition hover:border-cyan-300/40 hover:bg-white/10 sm:inline-flex sm:px-4"
              >
                <ArrowLeft className="h-4 w-4" />
                Previous
              </button>

              <div className="col-span-2 order-first flex items-center justify-center gap-2 sm:order-none">
                {mainProjects.map((project, index) => (
                  <button
                    key={project.title}
                    type="button"
                    aria-label={`Show ${project.title}`}
                    onClick={() => {
                      setActiveProject(index)
                      setActiveScreenshot(0)
                    }}
                    className={`h-2.5 rounded-full transition-all ${
                      index === activeProject ? 'w-10 bg-cyan-300' : 'w-2.5 bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => {
                  setActiveProject((current) => (current + 1) % mainProjects.length)
                  setActiveScreenshot(0)
                }}
                className="hidden items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 transition hover:border-cyan-300/40 hover:bg-white/10 sm:inline-flex sm:px-4"
              >
                Next
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

            <div className="hidden gap-4 xl:grid">
            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl sm:rounded-[2rem] sm:p-6">
              <p className="text-xs uppercase tracking-[0.32em] text-slate-400">Tech stack</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {currentProject.stack.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-slate-950/40 px-3 py-1.5 text-sm text-slate-200">
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-6 grid gap-3">
                <a
                  href={currentProject.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/35 px-4 py-3 text-sm text-slate-200 transition hover:border-cyan-300/40 hover:bg-white/10"
                >
                  Open repository
                  <FaGithub className="h-4 w-4" />
                </a>
                <a
                  href={currentProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/35 px-4 py-3 text-sm text-slate-200 transition hover:border-cyan-300/40 hover:bg-white/10"
                >
                  Open live demo
                  <ExternalLink className="h-4 w-4" />
                </a>
                <a
                  href={`mailto:gurnishsinghsangha@gmail.com?subject=${encodeURIComponent(`Let's talk about ${currentProject.title}`)}`}
                  className="inline-flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/35 px-4 py-3 text-sm text-slate-200 transition hover:border-cyan-300/40 hover:bg-white/10"
                >
                  Discuss this build
                  <Mail className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-5 border-t border-white/10 pt-4">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Project highlights</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {currentProject.bullets.map((bullet) => (
                    <span
                      key={bullet}
                      className="rounded-full border border-white/10 bg-slate-900/60 px-3 py-2 text-xs leading-5 text-slate-200"
                    >
                      {bullet}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-[1.75rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl sm:rounded-[2rem] sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-slate-400">More work</p>
              <h3 className="mt-2 text-xl font-semibold text-white">Other GitHub projects</h3>
              <p className="mt-2 text-sm text-slate-300">Browse additional builds from your GitHub profile.</p>
            </div>
            <button
              type="button"
              onClick={() => setShowOtherProjects((current) => !current)}
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-slate-950/35 px-5 py-2.5 text-sm text-slate-200 transition hover:border-cyan-300/40 hover:bg-white/10"
            >
              {showOtherProjects ? 'Hide other projects' : 'See other projects'}
            </button>
          </div>

          {showOtherProjects ? (
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {otherProjects.map((project) => (
                <article key={project.title} className="rounded-2xl border border-white/10 bg-slate-950/35 p-5">
                  <h4 className="text-lg font-semibold text-white">{project.title}</h4>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{project.summary}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={`${project.title}-${item}`} className="rounded-full border border-white/10 bg-slate-900/60 px-3 py-1 text-xs text-slate-200">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-200 transition hover:border-cyan-300/40 hover:bg-white/10"
                    >
                      Repository
                      <FaGithub className="h-3.5 w-3.5" />
                    </a>
                    {project.liveUrl.startsWith('http') ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-200 transition hover:border-cyan-300/40 hover:bg-white/10"
                      >
                        Open live demo
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-[1680px] px-4 py-12 sm:px-6 sm:py-14 lg:px-10 2xl:px-12">
        <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.article
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/8 p-3 text-cyan-100">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-slate-400">Education</p>
                <h3 className="mt-1 text-xl font-semibold text-white">IIIT Kota</h3>
              </div>
            </div>

            <div className="mt-5 rounded-[1.5rem] border border-white/10 bg-slate-950/35 p-5">
              <p className="text-lg font-semibold text-white">B.Tech in Computer Science and Engineering</p>
              <p className="mt-2 text-sm text-slate-300">Aug 2023 - May 2027</p>
              <p className="mt-2 text-sm text-slate-300">Kota, Rajasthan</p>

              <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100">
                CGPA 8.42
              </div>
            </div>
          </motion.article>

          <motion.article
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.08, ease: 'easeOut' }}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/8 p-3 text-cyan-100">
                <Award className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-slate-400">Achievements</p>
                <h3 className="mt-1 text-xl font-semibold text-white">Competitions and recognition</h3>
              </div>
            </div>

            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {achievements.map((achievement) => (
                <li key={achievement} className="rounded-2xl border border-white/10 bg-slate-950/35 p-4 text-sm leading-7 text-slate-200">
                  {achievement}
                </li>
              ))}
            </ul>
          </motion.article>
        </div>
      </section>

      <section id="contact" className="relative mx-auto w-full max-w-[1680px] px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-14 lg:px-10 2xl:px-12">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/70">Contact</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">Reach out through any medium</h2>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {contactLinks.map((link) => {
              const Icon = link.icon

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="group rounded-[1.5rem] border border-white/10 bg-slate-950/35 p-5 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/10"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="rounded-2xl border border-white/10 bg-white/8 p-3 text-cyan-100 transition group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-[0.28em] text-slate-400">{link.label}</p>
                      <p className="mt-1 break-all text-sm leading-snug font-medium text-white sm:break-normal sm:text-base">
                        {link.value}
                      </p>
                    </div>
                  </div>
                </a>
              )
            })}
          </div>
        </div>

        <footer className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>Crafted to showcase the work and journey of Gurnish Singh Sangha.</p>
          <p>Built with Vite, React, TypeScript, Tailwind CSS, and Framer Motion.</p>
        </footer>
      </section>
    </main>
  )
}

export default App
