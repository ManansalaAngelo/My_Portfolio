import {
  Briefcase,
  Code2,
  Database,
  ExternalLink,
  FileArchive,
  FileCode2,
  FileText,
  Flame,
  Folders,
  GitBranch,
  GraduationCap,
  Layout,
  Mail,
  MapPin,
  MonitorSmartphone,
  Phone,
  Rocket,
  Smartphone,
} from 'lucide-react'
import { motion } from 'framer-motion'

function App() {
  const skillGroups = [
    {
      name: 'React.js',
      value: 90,
      icon: Code2,
    },
    {
      name: 'TypeScript',
      value: 82,
      icon: FileCode2,
    },
    {
      name: 'JavaScript',
      value: 90,
      icon: Rocket,
    },
    {
      name: 'Flutter',
      value: 80,
      icon: Smartphone,
    },
    {
      name: 'Firebase',
      value: 82,
      icon: Database,
    },
    {
      name: 'HTML',
      value: 95,
      icon: Layout,
    },
    {
      name: 'CSS',
      value: 92,
      icon: Flame,
    },
    {
      name: 'Git',
      value: 85,
      icon: GitBranch,
    },
    {
      name: 'GitHub',
      value: 86,
      icon: GitBranch,
    },
    {
      name: 'Responsive Web Design',
      value: 92,
      icon: MonitorSmartphone,
    },
    {
      name: 'UI/UX Fundamentals',
      value: 78,
      icon: FileArchive,
    },
  ]

  const projects = [
    {
      title: 'AutoFine',
      subtitle: 'Online Traffic Violation Tracking System',
      description:
        'A cross-platform system built with React, Flutter, Firebase, and TypeScript to improve traffic violation workflows and records management.',
      features: [
        'Violation tracking',
        'Driver management',
        'Appeal system',
        'Payment monitoring',
        'Real-time database integration',
      ],
      github: '#',
      demo: '#',
      tag: 'Featured',
    },
    {
      title: 'Future Project #2',
      subtitle: 'Coming soon',
      description:
        'Placeholder for an upcoming full-stack project with modern architecture and practical business use-cases.',
      features: ['Project concept in progress', 'Stack to be finalized'],
      github: '#',
      demo: '#',
      tag: 'Placeholder',
    },
    {
      title: 'Future Project #3',
      subtitle: 'Coming soon',
      description:
        'Placeholder for a second upcoming project focused on polished UI, robust backend logic, and deployment best practices.',
      features: ['Project scope in progress', 'Portfolio-ready implementation'],
      github: '#',
      demo: '#',
      tag: 'Placeholder',
    },
  ]

  const reveal = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: 'easeOut' },
    },
  }

  return (
    <div className="relative isolate overflow-x-clip bg-slate-950 text-slate-100">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-blue-500/20 bg-slate-950/85 backdrop-blur-xl">
        <nav
          className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 md:px-8"
          aria-label="Main navigation"
        >
          <a href="#home" className="text-sm font-semibold tracking-[0.2em] text-blue-300">
            ANGELO.M
          </a>
          <ul className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <li><a href="#about" className="hover:text-blue-300">About</a></li>
            <li><a href="#skills" className="hover:text-blue-300">Skills</a></li>
            <li><a href="#projects" className="hover:text-blue-300">Projects</a></li>
            <li><a href="#experience" className="hover:text-blue-300">Experience</a></li>
            <li><a href="#contact" className="hover:text-blue-300">Contact</a></li>
          </ul>
        </nav>
      </header>

      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-500/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="mesh-pattern absolute inset-0 opacity-55" />
      </div>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-7 px-5 pb-14 pt-28 md:px-8 md:pt-32">
        <motion.section
          id="home"
          variants={reveal}
          initial="hidden"
          animate="show"
          className="grid gap-8 rounded-3xl border border-blue-500/20 bg-gradient-to-br from-slate-900 via-slate-900/90 to-blue-950/70 p-7 shadow-2xl shadow-blue-950/30 md:grid-cols-[1.3fr_1fr] md:p-10"
        >
          <div className="space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-blue-200">
              <MapPin size={14} /> Philippines
            </p>
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.22em] text-slate-300">Angelo Manansala</p>
              <h1 className="text-balance font-heading text-4xl leading-tight text-white md:text-5xl">
                BSIT Graduate & Aspiring Full-Stack Developer
              </h1>
              <p className="max-w-xl text-pretty text-slate-300">
                Passionate about building practical digital solutions through web and mobile technologies.
                I enjoy turning ideas into scalable, user-friendly software that solves real-world problems.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a href="#projects" className="btn-primary">View Projects</a>
              <a href="/resume-placeholder.txt" download className="btn-secondary">Download Resume</a>
              <a href="#contact" className="btn-tertiary">Contact Me</a>
            </div>
          </div>

          <div className="grid place-items-center">
            <div className="w-full max-w-sm rounded-3xl border border-blue-400/25 bg-slate-900/70 p-6 shadow-lg shadow-blue-500/20">
              <h2 className="font-heading text-xl text-blue-200">Aspiring Role</h2>
              <p className="mt-2 text-slate-300">Full-Stack Developer / Web Developer</p>
              <div className="mt-6 space-y-3 text-sm text-slate-300">
                <p className="flex items-center gap-2"><Mail size={16} /> [Your Email]</p>
                <p className="flex items-center gap-2"><Phone size={16} /> [Your Number]</p>
                <p className="flex items-center gap-2"><ExternalLink size={16} /> [Your LinkedIn URL]</p>
                <p className="flex items-center gap-2"><GitBranch size={16} /> [Your GitHub URL]</p>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="about"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="card-base"
        >
          <h2 className="section-title">About Me</h2>
          <p className="mt-4 max-w-4xl text-slate-300">
            I am a recently graduated Bachelor of Science in Information Technology (BSIT) student eager to
            grow in the software industry. My interests focus on web and mobile development, where I have
            built projects using React, Flutter, Firebase, and TypeScript. I am enthusiastic about learning
            emerging technologies, collaborating with teams, and contributing to innovative projects that create
            meaningful user impact.
          </p>
        </motion.section>

        <motion.section
          id="skills"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="card-base"
        >
          <h2 className="section-title">Skills</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {skillGroups.map((skill, index) => {
              const Icon = skill.icon
              return (
                <motion.article
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ delay: index * 0.04, duration: 0.4 }}
                  className="rounded-2xl border border-blue-500/20 bg-slate-900/60 p-4"
                >
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <p className="flex items-center gap-2 text-sm font-medium text-slate-100">
                      <Icon size={16} className="text-blue-300" />
                      {skill.name}
                    </p>
                    <span className="text-xs text-slate-400">{skill.value}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-800">
                    <motion.div
                      className="h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-300"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.value}%` }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{ duration: 0.7, delay: 0.1 + index * 0.03 }}
                    />
                  </div>
                </motion.article>
              )
            })}
          </div>
        </motion.section>

        <motion.section
          id="projects"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="card-base"
        >
          <h2 className="section-title">Featured Projects</h2>
          <div className="mt-6 grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="flex h-full flex-col rounded-2xl border border-blue-500/20 bg-slate-900/70 p-5"
              >
                <div className="project-placeholder mb-4 grid h-40 place-items-center rounded-xl border border-blue-400/20">
                  <Folders className="text-blue-200" size={34} />
                </div>
                <p className="text-xs uppercase tracking-[0.16em] text-blue-300">{project.tag}</p>
                <h3 className="mt-2 font-heading text-xl text-slate-100">{project.title}</h3>
                <p className="mt-1 text-sm text-cyan-200/90">{project.subtitle}</p>
                <p className="mt-3 text-sm text-slate-300">{project.description}</p>
                <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-300">
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <div className="mt-5 flex gap-3">
                  <a href={project.github} className="btn-secondary inline-flex items-center gap-2 text-xs">
                    <GitBranch size={14} /> GitHub
                  </a>
                  <a href={project.demo} className="btn-tertiary inline-flex items-center gap-2 text-xs">
                    <ExternalLink size={14} /> Live Demo
                  </a>
                </div>
              </article>
            ))}
          </div>
        </motion.section>

        <div className="grid gap-6 md:grid-cols-2">
          <motion.section
            id="experience"
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="card-base"
          >
            <h2 className="section-title">OJT Experience</h2>
            <ul className="mt-4 space-y-2 text-slate-300">
              <li className="flex gap-2"><Briefcase size={16} className="mt-1 text-blue-300" /> Assisted with office administrative tasks</li>
              <li className="flex gap-2"><FileText size={16} className="mt-1 text-blue-300" /> Managed and organized documents</li>
              <li className="flex gap-2"><FileArchive size={16} className="mt-1 text-blue-300" /> Handled data encoding and filing</li>
              <li className="flex gap-2"><Code2 size={16} className="mt-1 text-blue-300" /> Provided technical assistance</li>
              <li className="flex gap-2"><Rocket size={16} className="mt-1 text-blue-300" /> Strengthened communication and teamwork skills</li>
            </ul>
          </motion.section>

          <motion.section
            id="education"
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="card-base"
          >
            <h2 className="section-title">Education</h2>
            <div className="mt-4 rounded-2xl border border-blue-500/20 bg-slate-900/50 p-4">
              <p className="flex items-center gap-2 text-slate-100">
                <GraduationCap size={18} className="text-blue-300" />
                Bachelor of Science in Information Technology (BSIT)
              </p>
              <p className="mt-2 text-slate-300">[School Name]</p>
              <p className="text-sm text-slate-400">Graduated: 2026</p>
            </div>
          </motion.section>
        </div>

        <motion.section
          id="contact"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="card-base"
        >
          <h2 className="section-title">Contact</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <form className="space-y-3" onSubmit={(event) => event.preventDefault()}>
              <label className="block text-sm text-slate-300" htmlFor="name">Name</label>
              <input id="name" type="text" required className="input-base" placeholder="Your name" />

              <label className="block text-sm text-slate-300" htmlFor="email">Email</label>
              <input id="email" type="email" required className="input-base" placeholder="you@example.com" />

              <label className="block text-sm text-slate-300" htmlFor="message">Message</label>
              <textarea id="message" rows="5" required className="input-base" placeholder="Write your message here" />

              <button type="submit" className="btn-primary w-full justify-center">Send Message</button>
            </form>

            <div className="space-y-4 rounded-2xl border border-blue-500/20 bg-slate-900/55 p-5 text-sm text-slate-300">
              <p className="font-heading text-xl text-slate-100">Let&apos;s connect</p>
              <p className="flex items-center gap-2"><Mail size={16} className="text-blue-300" /> [Your Email]</p>
              <p className="flex items-center gap-2"><Phone size={16} className="text-blue-300" /> [Your Number]</p>
              <p className="flex items-center gap-2"><ExternalLink size={16} className="text-blue-300" /> [Your LinkedIn URL]</p>
              <p className="flex items-center gap-2"><GitBranch size={16} className="text-blue-300" /> [Your GitHub URL]</p>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="border-t border-blue-500/20 py-7">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm text-slate-400 md:flex-row md:px-8">
          <p>© 2026 Angelo Manansala. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="[Your LinkedIn URL]" className="hover:text-blue-300">LinkedIn</a>
            <a href="[Your GitHub URL]" className="hover:text-blue-300">GitHub</a>
            <a href="mailto:[Your Email]" className="hover:text-blue-300">Email</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
