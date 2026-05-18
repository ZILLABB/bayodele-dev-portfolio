'use client';

import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const projects = [
  {
    title:       'Betsightly',
    tagline:     'Sports prediction platform with ML-powered odds analysis',
    description:
      'Built custom ML models for football and basketball outcome prediction. Separate TypeScript/Vite frontend and Python/FastAPI backend communicate via a typed REST contract. A Telegram bot pushes daily picks to subscribers. Containerised with Docker, deployed on Railway. The hardest part was building a feedback loop — predictions auto-update model weights nightly via a GitHub Actions pipeline.',
    tags:        ['TypeScript', 'Python', 'FastAPI', 'Docker', 'Telegram API', 'Machine Learning'],
    status:      'Production',
    statusColor: 'text-emerald-500 border-emerald-500/30 bg-emerald-500/5',
    frontend:    'https://github.com/ZILLABB/betsightly-frontend',
    backend:     'https://github.com/ZILLABB/betsightly-backend',
  },
  {
    title:       'Cryptonestle',
    tagline:     'DeFi investment platform across Ethereum, BSC, and Polygon',
    description:
      'Three audited Solidity smart contracts with 5 investment tiers, automated ROI calculations, and secure withdrawal queues. The Node.js/Prisma backend handles off-chain state sync and exposes a JWT-authenticated REST API. Test suite hits 100% pass rate (23/23). The multi-chain architecture forced me to think carefully about replayability and gas cost trade-offs on each network.',
    tags:        ['Solidity', 'Hardhat', 'Node.js', 'Prisma', 'JWT', 'Ethereum', 'BSC', 'Polygon'],
    status:      'Beta',
    statusColor: 'text-amber-500 border-amber-500/30 bg-amber-500/5',
    frontend:    'https://github.com/ZILLABB/cryptonested-frontend',
    backend:     'https://github.com/ZILLABB/cryptonestle-backend',
  },
  {
    title:       'ProductWhisper',
    tagline:     'NLP-driven product discovery from natural language',
    description:
      'Takes a user\'s conversational description and surfaces relevant products via sentiment analysis and entity extraction. TypeScript/React frontend, Node.js/Express backend. The NLP pipeline runs in-process rather than calling a paid API — deliberately, to keep latency under 200 ms. Spent most of the engineering time on the entity disambiguation step, which was the part that actually made results feel accurate rather than random.',
    tags:        ['TypeScript', 'React', 'Node.js', 'NLP', 'Sentiment Analysis', 'REST API'],
    status:      'Live',
    statusColor: 'text-emerald-500 border-emerald-500/30 bg-emerald-500/5',
    frontend:    'https://github.com/ZILLABB/productwhisper-frontend',
    backend:     'https://github.com/ZILLABB/productwhisper-backend',
  },
  {
    title:       'German Daily Words Bot',
    tagline:     'CEFR-aligned Telegram bot for spaced-repetition language learning',
    description:
      'Covers A1–B2 vocabulary with 6 adaptive quiz types, streak tracking, and per-user analytics. Spaced-repetition scheduling is implemented from scratch rather than using a library — the algorithm adjusts review intervals based on historical accuracy per word, per user. Runs headlessly via GitHub Actions; zero-downtime deploys with rolling restarts.',
    tags:        ['Python', 'Telegram API', 'Spaced Repetition', 'GitHub Actions', 'Analytics'],
    status:      'Live',
    statusColor: 'text-emerald-500 border-emerald-500/30 bg-emerald-500/5',
    github:      'https://github.com/ZILLABB/germandailywordsbot',
  },
  {
    title:       'LendingForte',
    tagline:     'Loan management platform with application and approval workflows',
    description:
      'Full admin and borrower dashboards with multi-step application flows, document uploads, and rule-based approval logic. Built in Next.js with a REST API backend. The interesting challenge here was modelling the approval state machine in a way that was both flexible for the business and impossible to corrupt — states can only transition forward, with full audit-trail logging on every change.',
    tags:        ['TypeScript', 'Next.js', 'React', 'Tailwind CSS', 'REST API'],
    status:      'Complete',
    statusColor: 'text-sky-500 border-sky-500/30 bg-sky-500/5',
    github:      'https://github.com/ZILLABB/lendingforte',
  },
  {
    title:       'SpendLot',
    tagline:     'Personal finance tracker with real-time spending analytics',
    description:
      'Expense categorisation, budget rules, and trend visualisations. TypeScript frontend, Python backend. The categorisation engine uses a small locally-running classifier — fast enough to run on every transaction insert without perceptible delay. I deliberately kept the UI data-dense but uncluttered: the design question was how much information you can show before it stops feeling like a tool and starts feeling like noise.',
    tags:        ['TypeScript', 'Python', 'React', 'Data Visualisation', 'REST API'],
    status:      'Complete',
    statusColor: 'text-sky-500 border-sky-500/30 bg-sky-500/5',
    frontend:    'https://github.com/ZILLABB/spendlot-frontend',
    backend:     'https://github.com/ZILLABB/spendlot-backend',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true }}
          variants={fadeUp}
          className="mb-16"
        >
          <p className="section-label mb-3">Work</p>
          <h2 className="section-heading mb-4">Selected projects</h2>
          <p className="max-w-xl text-base text-muted-foreground">
            Six of the things I've actually shipped. Each one notes what the real
            engineering challenge was, not just what the product does.
          </p>
        </motion.div>

        {/* Project list */}
        <div className="space-y-0 divide-y divide-border">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: 0.05 * (index % 3) }}
              className="group py-8 sm:py-10"
            >
              <div className="flex flex-col gap-6 sm:flex-row sm:gap-10">

                {/* Index number */}
                <div className="flex-shrink-0 pt-1">
                  <span className="font-display text-4xl font-bold leading-none text-border transition-colors duration-200 group-hover:text-primary/25 sm:text-5xl">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <div className="mb-3 flex flex-wrap items-start gap-3">
                    <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                      {project.title}
                    </h3>
                    <span
                      className={`inline-flex items-center rounded border px-2 py-0.5 text-[10px] uppercase tracking-wider font-medium ${project.statusColor}`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <p className="mb-3 text-sm font-medium text-foreground/70">
                    {project.tagline}
                  </p>

                  <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="mb-5 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-5">
                    {project.frontend && (
                      <a
                        href={project.frontend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                      >
                        Frontend <ArrowTopRightOnSquareIcon className="size-3.5" />
                      </a>
                    )}
                    {project.backend && (
                      <a
                        href={project.backend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground"
                      >
                        Backend <ArrowTopRightOnSquareIcon className="size-3.5" />
                      </a>
                    )}
                    {project.github && !project.frontend && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                      >
                        GitHub <ArrowTopRightOnSquareIcon className="size-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true }}
          variants={fadeUp}
          className="mt-12 border-t border-border pt-10"
        >
          <a
            href="https://github.com/ZILLABB"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex"
          >
            See all 53+ repos on GitHub ↗
          </a>
        </motion.div>
      </div>
    </section>
  );
}
