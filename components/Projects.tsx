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
    title: "⚽ Enterprise Sports Prediction Platform",
    description:
      "A production-grade app that predicts football and basketball outcomes using advanced ML models, custom API endpoints, and Telegram bot automation. Features daily prediction pipelines with self-healing flows.",
    tags: ["Python", "Machine Learning", "Docker", "Automation"],
    icon: <RocketLaunchIcon className="size-6 text-primary dark:text-primary-light" />,
    link: "#",
    gradient: "from-blue-500/20 to-purple-500/20"
  },
  {
    title: "🇩🇪 German Daily Word Telegram Bot",
    description:
      "A robust AI-powered language bot for German learners with CEFR A1 to B2 progression, daily spaced repetition lessons, audio support, quizzes, cultural context, and intelligent progress tracking.",
    tags: ["Python", "Telegram API", "NLP", "Education"],
    icon: <ChatBubbleLeftRightIcon className="size-6 text-primary dark:text-primary-light" />,
    link: "#",
    gradient: "from-emerald-500/20 to-teal-500/20"
  },
  {
    title: "🛍️ ProductWhisper – Sentiment Discovery API",
    description:
      "A TypeScript/Node.js backend that uses sentiment analysis to help users discover products from real-world conversations, reviews, and communities. Features a clean public API and AI-powered content parsing.",
    tags: ["TypeScript", "Node.js", "NLP", "API"],
    icon: <CubeIcon className="size-6 text-primary dark:text-primary-light" />,
    link: "#",
    gradient: "from-orange-500/20 to-red-500/20"
  },
  {
    title: "🤖 NeoPath: Modular AI Assistant",
    description:
      "A comprehensive AI assistant with web automation, document analysis, and memory features. Leveraged AI coding assistants to implement complex features and optimize performance.",
    tags: ["Python", "AI Automation", "Vector DB", "LLMs"],
    icon: <CpuChipIcon className="size-6 text-primary dark:text-primary-light" />,
    link: "#",
    gradient: "from-indigo-500/20 to-blue-500/20"
  },
  {
    title: "📊 E-commerce Analytics Dashboard",
    description:
      "A real-time analytics dashboard for e-commerce businesses with complex data visualizations, customer behavior tracking, and AI-powered insights for better decision making.",
    tags: ["React", "D3.js", "WebSockets", "DataViz"],
    icon: <ChartBarIcon className="size-6 text-primary dark:text-primary-light" />,
    link: "#",
    gradient: "from-violet-500/20 to-purple-500/20"
  },
  {
    title: "🔌 API Integration Framework",
    description:
      "A modular system for connecting various third-party APIs with consistent error handling, rate limiting, and automatic retries. Used AI tools to generate boilerplate code and documentation.",
    tags: ["Node.js", "TypeScript", "REST", "Webhooks"],
    icon: <LinkIcon className="size-6 text-primary dark:text-primary-light" />,
    link: "#",
    gradient: "from-cyan-500/20 to-sky-500/20"
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

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-flex items-center rounded-full bg-primary-light/20 px-3 py-1 text-xs font-medium text-primary dark:bg-primary-dark/20 dark:text-primary-light"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="group inline-flex items-center text-sm text-primary transition-colors hover:text-primary-dark dark:text-primary-light dark:hover:text-primary"
                >
                  <span className="font-medium">View Project</span>
                  <ArrowTopRightOnSquareIcon className="ml-1 size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
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
