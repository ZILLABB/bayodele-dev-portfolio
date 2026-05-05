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
// import ProjectCard3D from './three/ProjectCard3D';

const projects = [
  {
    title: "Betsightly",
    description:
      "Sports prediction platform with custom ML models for football and basketball outcomes. Features real-time odds analysis, automated prediction pipelines, and a Telegram bot that delivers picks to subscribers. Full-stack with separate frontend (TypeScript/Vite) and backend (Python/FastAPI) services.",
    tags: ["TypeScript", "Python", "Machine Learning", "Docker", "Telegram API", "FastAPI"],
    icon: <RocketLaunchIcon className="size-6 text-primary dark:text-primary-light" />,
    link: "https://github.com/ZILLABB/betsightly-frontend",
    gradient: "from-blue-500/20 to-purple-500/20",
    featured: true,
    status: "Production",
    github: "https://github.com/ZILLABB/betsightly-frontend",
    backend: "https://github.com/ZILLABB/betsightly-backend",
  },
  {
    title: "Cryptonestle",
    description:
      "DeFi investment platform with 3 audited smart contracts deployed across Ethereum, BSC, and Polygon. Includes 5 investment tiers, automated ROI calculations, secure withdrawal flows, and a full admin panel. Backend achieves 100% test pass rate (23/23 suites).",
    tags: ["Solidity", "Hardhat", "Node.js", "Prisma", "JWT", "Multi-chain"],
    icon: <CubeIcon className="size-6 text-primary dark:text-primary-light" />,
    link: "https://github.com/ZILLABB/cryptonested-frontend",
    gradient: "from-yellow-500/20 to-orange-500/20",
    featured: true,
    status: "Beta",
    github: "https://github.com/ZILLABB/cryptonested-frontend",
    backend: "https://github.com/ZILLABB/cryptonestle-backend",
  },
  {
    title: "ProductWhisper",
    description:
      "AI-powered product discovery engine that analyzes conversations and reviews using NLP and sentiment analysis. Surfaces intelligent product recommendations through a clean REST API. Separate frontend (React) and backend (Node.js/TypeScript) architecture.",
    tags: ["TypeScript", "Node.js", "NLP", "Sentiment Analysis", "REST API", "React"],
    icon: <ChatBubbleLeftRightIcon className="size-6 text-primary dark:text-primary-light" />,
    link: "https://github.com/ZILLABB/productwhisper-frontend",
    gradient: "from-emerald-500/20 to-teal-500/20",
    featured: true,
    status: "Live",
    github: "https://github.com/ZILLABB/productwhisper-frontend",
    backend: "https://github.com/ZILLABB/productwhisper-backend",
  },
  {
    title: "German Daily Words Bot",
    description:
      "Telegram bot for German language learners featuring CEFR A1-B2 progression, spaced repetition algorithms, 6 adaptive quiz types, streak tracking, and per-user analytics. Deployed via GitHub Actions with automated scheduling.",
    tags: ["Python", "Telegram API", "NLP", "GitHub Actions", "Spaced Repetition"],
    icon: <CpuChipIcon className="size-6 text-primary dark:text-primary-light" />,
    link: "https://github.com/ZILLABB/germandailywordsbot",
    gradient: "from-indigo-500/20 to-blue-500/20",
    status: "Live",
    github: "https://github.com/ZILLABB/germandailywordsbot",
  },
  {
    title: "LendingForte",
    description:
      "Financial services platform for loan management with user dashboards, application workflows, and admin controls. Built with TypeScript and modern React patterns for a responsive, accessible experience.",
    tags: ["TypeScript", "React", "Next.js", "Tailwind CSS", "REST API"],
    icon: <ChartBarIcon className="size-6 text-primary dark:text-primary-light" />,
    link: "https://github.com/ZILLABB/lendingforte",
    gradient: "from-violet-500/20 to-purple-500/20",
    status: "Complete",
    github: "https://github.com/ZILLABB/lendingforte",
  },
  {
    title: "SpendLot",
    description:
      "Personal finance tracker with expense categorization, budget management, and spending analytics. Full-stack architecture with a TypeScript frontend and Python backend powering real-time insights and reporting.",
    tags: ["TypeScript", "Python", "React", "Data Visualization", "REST API"],
    icon: <LinkIcon className="size-6 text-primary dark:text-primary-light" />,
    link: "https://github.com/ZILLABB/spendlot-frontend",
    gradient: "from-cyan-500/20 to-sky-500/20",
    status: "Complete",
    github: "https://github.com/ZILLABB/spendlot-frontend",
    backend: "https://github.com/ZILLABB/spendlot-backend",
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
              Featured Projects
            </h2>
            <div className="mx-auto mb-6 h-1 w-24 bg-gradient-to-r from-primary to-secondary" />
            <p className="mx-auto max-w-3xl text-xl text-text-secondary-light dark:text-text-secondary-dark">
              A selection of production applications I&apos;ve built end-to-end — from system design to deployment.
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

                {/* Project Status */}
                {project.status && (
                  <div className="mb-4">
                    <span className="inline-flex items-center rounded-full bg-green-500/20 px-3 py-1 text-xs font-medium text-green-600 dark:text-green-400">
                      {project.status}
                    </span>
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
