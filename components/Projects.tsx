import { motion } from 'framer-motion';
import { 
  CodeBracketIcon, 
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
    icon: <RocketLaunchIcon className="h-6 w-6 text-primary dark:text-primary-light" />,
    link: "#"
  },
  {
    title: "🇩🇪 German Daily Word Telegram Bot",
    description:
      "A robust AI-powered language bot for German learners with CEFR A1 to B2 progression, daily spaced repetition lessons, audio support, quizzes, cultural context, and intelligent progress tracking.",
    tags: ["Python", "Telegram API", "NLP", "Education"],
    icon: <ChatBubbleLeftRightIcon className="h-6 w-6 text-primary dark:text-primary-light" />,
    link: "#"
  },
  {
    title: "🛍️ ProductWhisper – Sentiment Discovery API",
    description:
      "A TypeScript/Node.js backend that uses sentiment analysis to help users discover products from real-world conversations, reviews, and communities. Features a clean public API and AI-powered content parsing.",
    tags: ["TypeScript", "Node.js", "NLP", "API"],
    icon: <CubeIcon className="h-6 w-6 text-primary dark:text-primary-light" />,
    link: "#"
  },
  {
    title: "🤖 NeoPath: Modular AI Assistant",
    description:
      "A comprehensive AI assistant with web automation, document analysis, and memory features. Leveraged AI coding assistants to implement complex features and optimize performance.",
    tags: ["Python", "AI Automation", "Vector DB", "LLMs"],
    icon: <CpuChipIcon className="h-6 w-6 text-primary dark:text-primary-light" />,
    link: "#"
  },
  {
    title: "📊 E-commerce Analytics Dashboard",
    description:
      "A real-time analytics dashboard for e-commerce businesses with complex data visualizations, customer behavior tracking, and AI-powered insights for better decision making.",
    tags: ["React", "D3.js", "WebSockets", "DataViz"],
    icon: <ChartBarIcon className="h-6 w-6 text-primary dark:text-primary-light" />,
    link: "#"
  },
  {
    title: "🔌 API Integration Framework",
    description:
      "A modular system for connecting various third-party APIs with consistent error handling, rate limiting, and automatic retries. Used AI tools to generate boilerplate code and documentation.",
    tags: ["Node.js", "TypeScript", "REST", "Webhooks"],
    icon: <LinkIcon className="h-6 w-6 text-primary dark:text-primary-light" />,
    link: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-bg-light dark:bg-bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-text-primary-light dark:text-text-primary-dark mb-4">
              Projects That Define Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" />
            <p className="text-xl text-text-secondary-light dark:text-text-secondary-dark max-w-3xl mx-auto">
              Each project represents a unique challenge solved with creativity, technical expertise, and AI assistance.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative bg-bg-card-light dark:bg-bg-card-dark p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-border-light dark:border-border-dark hover:border-primary-light dark:hover:border-primary-dark hover:-translate-y-1"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-lg bg-primary-light/20 dark:bg-primary-dark/20">
                    {project.icon}
                  </div>
                  <h3 className="ml-3 text-xl font-semibold text-text-primary-light dark:text-text-primary-dark">
                    {project.title}
                  </h3>
                </div>
                <p className="text-text-secondary-light dark:text-text-secondary-dark mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-light/20 text-primary dark:bg-primary-dark/20 dark:text-primary-light"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center text-sm text-primary dark:text-primary-light hover:text-primary-dark dark:hover:text-primary transition-colors">
                  <span>View Project</span>
                  <ArrowTopRightOnSquareIcon className="ml-1 h-4 w-4" />
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
            href="#"
            className="btn btn-primary"
          >
            View All Projects
            <svg
              className="ml-2 -mr-1 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
