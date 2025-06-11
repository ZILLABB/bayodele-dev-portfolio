'use client';

import { motion } from 'framer-motion';
import { 
  RocketLaunchIcon, 
  ChatBubbleLeftRightIcon, 
  CubeIcon, 
  CpuChipIcon, 
  ChartBarIcon, 
  LinkIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline';

const projects = [
  {
    title: "🏆 Betsightly - Sports Prediction Platform",
    description:
      "Production-grade sports prediction platform with ML models for football and basketball. Features real-time odds analysis, automated prediction pipelines, and Telegram bot integration. Built with AI assistance using Cursor and Windsurf for rapid development and deployment.",
    tags: ["TypeScript", "Python", "Machine Learning", "Docker", "Telegram API", "Vite"],
    icon: <RocketLaunchIcon className="size-6 text-primary dark:text-primary-light" />,
    link: "https://github.com/ZILLABB/betsightly-frontend",
    gradient: "from-blue-500/20 to-purple-500/20",
    featured: true,
    status: "Production Ready",
    github: "https://github.com/ZILLABB/betsightly-frontend",
    backend: "https://github.com/ZILLABB/betsightly-backend",
    aiTools: ["Cursor", "Windsurf"]
  },
  {
    title: "💰 Cryptonestle - DeFi Investment Platform",
    description:
      "Complete crypto investment platform with smart contracts, multi-chain support (Ethereum, BSC, Polygon), and automated ROI calculations. Features 5 investment plans, secure withdrawals, JWT authentication, and comprehensive admin panel. 80% production-ready backend with 23/23 tests passing.",
    tags: ["Solidity", "Node.js", "TypeScript", "Hardhat", "Prisma", "JWT", "Multi-chain"],
    icon: <CubeIcon className="size-6 text-primary dark:text-primary-light" />,
    link: "#",
    gradient: "from-yellow-500/20 to-orange-500/20",
    featured: true,
    status: "Backend Complete",
    details: "Smart contracts deployed, 3 production-ready contracts, complete API with security",
    aiTools: ["Augment", "Cursor"]
  },
  {
    title: "🛍️ ProductWhisper - AI Product Discovery",
    description:
      "TypeScript/Node.js backend using sentiment analysis and NLP to help users discover products from conversations and reviews. Features clean REST API, AI-powered content parsing, and intelligent product recommendations. Built with AI pair programming for rapid iteration.",
    tags: ["TypeScript", "Node.js", "NLP", "Sentiment Analysis", "REST API", "Vite"],
    icon: <ChatBubbleLeftRightIcon className="size-6 text-primary dark:text-primary-light" />,
    link: "https://github.com/ZILLABB/productwhisper-frontend",
    gradient: "from-emerald-500/20 to-teal-500/20",
    featured: true,
    status: "Full Stack",
    github: "https://github.com/ZILLABB/productwhisper-frontend",
    backend: "https://github.com/ZILLABB/productwhisper-backend",
    aiTools: ["Cursor", "Augment"]
  },
  {
    title: "🇩🇪 German Daily Words Bot",
    description:
      "Advanced AI-powered Telegram bot for German language learning with CEFR A1-B2 progression, spaced repetition, adaptive quizzes, comprehensive analytics, and multi-user support. Features 6 question types, streak management, and automated GitHub Actions deployment.",
    tags: ["Python", "Telegram API", "NLP", "AI", "GitHub Actions", "Analytics"],
    icon: <CpuChipIcon className="size-6 text-primary dark:text-primary-light" />,
    link: "https://github.com/ZILLABB/germandailywordsbot",
    gradient: "from-indigo-500/20 to-blue-500/20",
    status: "Live & Active",
    github: "https://github.com/ZILLABB/germandailywordsbot",
    details: "100+ vocabulary words, automated scheduling, comprehensive analytics",
    aiTools: ["Windsurf", "Cursor"]
  },
  {
    title: "📊 AI-Powered Analytics Dashboard",
    description:
      "Real-time analytics dashboard with complex data visualizations, customer behavior tracking, and AI-powered insights. Built using modern React patterns with D3.js for interactive charts and WebSocket connections for live updates.",
    tags: ["React", "D3.js", "WebSockets", "TypeScript", "Data Visualization"],
    icon: <ChartBarIcon className="size-6 text-primary dark:text-primary-light" />,
    link: "#",
    gradient: "from-violet-500/20 to-purple-500/20",
    status: "In Development"
  },
  {
    title: "🔌 Universal API Integration Framework",
    description:
      "Modular system for connecting third-party APIs with consistent error handling, rate limiting, automatic retries, and comprehensive logging. Generated extensive boilerplate code using AI tools for rapid development.",
    tags: ["Node.js", "TypeScript", "REST", "Webhooks", "Redis", "Docker"],
    icon: <LinkIcon className="size-6 text-primary dark:text-primary-light" />,
    link: "#",
    gradient: "from-cyan-500/20 to-sky-500/20",
    status: "Open Source"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="bg-bg-light py-20 dark:bg-bg-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-text-primary-light dark:text-text-primary-dark">
              Projects That Define Me
            </h2>
            <div className="mx-auto mb-6 h-1 w-24 bg-gradient-to-r from-primary to-secondary" />
            <p className="mx-auto max-w-3xl text-xl text-text-secondary-light dark:text-text-secondary-dark">
              Each project represents a unique challenge solved with creativity, technical expertise, and AI assistance.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border-border hover:border-primary/20 bg-card hover:bg-card/80"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Background gradient overlay with enhanced visibility */}
              <div className={`absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${project.gradient}`} />
              
              <div className="relative z-10 p-6">
                <div className="mb-4 flex items-center">
                  <div className="rounded-lg bg-primary-light/20 p-2 dark:bg-primary-dark/20">
                    {project.icon}
                  </div>
                  <h3 className="ml-3 text-xl font-semibold text-text-primary-light dark:text-text-primary-dark">
                    {project.title}
                  </h3>
                </div>

                <p className="mb-6 text-text-secondary-light dark:text-text-secondary-dark">
                  {project.description}
                </p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-flex items-center rounded-full bg-primary-light/20 px-3 py-1 text-xs font-medium text-primary dark:bg-primary-dark/20 dark:text-primary-light"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* AI Tools Used */}
                {project.aiTools && (
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="text-xs font-medium text-muted-foreground">Built with AI:</span>
                    {project.aiTools.map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 px-2 py-1 text-xs font-medium text-purple-600 dark:text-purple-400"
                      >
                        🤖 {tool}
                      </span>
                    ))}
                  </div>
                )}

                {/* Project Status */}
                {project.status && (
                  <div className="mb-4">
                    <span className="inline-flex items-center rounded-full bg-green-500/20 px-3 py-1 text-xs font-medium text-green-600 dark:text-green-400">
                      ✅ {project.status}
                    </span>
                  </div>
                )}

                {/* Additional Details */}
                {project.details && (
                  <div className="mb-4">
                    <p className="text-xs text-muted-foreground italic">
                      {project.details}
                    </p>
                  </div>
                )}

                <div className="flex flex-wrap gap-3">
                  {project.link && project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center text-sm text-primary transition-colors hover:text-primary-dark dark:text-primary-light dark:hover:text-primary"
                    >
                      <span className="font-medium">Frontend</span>
                      <ArrowTopRightOnSquareIcon className="ml-1 size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  )}
                  {project.backend && (
                    <a
                      href={project.backend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center text-sm text-secondary transition-colors hover:text-secondary-dark dark:text-secondary-light dark:hover:text-secondary"
                    >
                      <span className="font-medium">Backend</span>
                      <ArrowTopRightOnSquareIcon className="ml-1 size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  )}
                  {project.github && !project.backend && project.link === "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center text-sm text-primary transition-colors hover:text-primary-dark dark:text-primary-light dark:hover:text-primary"
                    >
                      <span className="font-medium">View Project</span>
                      <ArrowTopRightOnSquareIcon className="ml-1 size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="https://github.com/ZILLABB"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary group"
          >
            View All Projects
            <ArrowTopRightOnSquareIcon className="ml-2 size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
