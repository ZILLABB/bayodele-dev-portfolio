'use client';

import { motion } from 'framer-motion';

const skillCategories = [
  {
    category: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'Solidity', 'SQL'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Vite', 'Three.js'],
  },
  {
    category: 'Backend & APIs',
    items: ['Node.js', 'Express', 'FastAPI', 'Prisma', 'REST', 'GraphQL', 'WebSockets'],
  },
  {
    category: 'Blockchain & Web3',
    items: ['Solidity', 'Hardhat', 'Ethereum', 'BSC', 'Polygon', 'ERC-20', 'Smart Contracts'],
  },
  {
    category: 'Data & AI',
    items: ['OpenAI API', 'NLP', 'Sentiment Analysis', 'Scikit-learn', 'ML Pipelines', 'PostgreSQL', 'Redis'],
  },
  {
    category: 'DevOps & Tooling',
    items: ['Docker', 'GitHub Actions', 'Vercel', 'Netlify', 'Railway', 'Supabase', 'Git'],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true }}
          variants={fadeUp}
          className="mb-16"
        >
          <p className="section-label mb-3">Skills</p>
          <h2 className="section-heading mb-4">Tools & technologies</h2>
          <p className="max-w-xl text-base text-muted-foreground">
            The stack I use day-to-day. Comfortable across the entire surface —
            from writing Solidity to tuning a Python ML pipeline to shipping a
            polished React UI.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, catIndex) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: catIndex * 0.07 }}
            >
              <h3 className="mb-4 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA strip */}
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true }}
          variants={fadeUp}
          className="mt-16 border-t border-border pt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
        >
          <div>
            <p className="font-display text-xl font-semibold text-foreground">
              Open to full-time roles, contracts & technical co-founder conversations.
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Deepening expertise in cloud architecture, Web3 protocols, and production ML systems.
            </p>
          </div>
          <a href="#contact" className="btn-primary flex-shrink-0">
            Let&apos;s talk
          </a>
        </motion.div>
      </div>
    </section>
  );
}
