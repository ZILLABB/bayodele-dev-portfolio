'use client';

import { motion } from 'framer-motion';

const quickFacts = [
  { label: 'Location',   value: 'Lagos, Nigeria' },
  { label: 'Focus',      value: 'Full-Stack + Web3' },
  { label: 'Stack',      value: 'TS · Python · Solidity' },
  { label: 'Status',     value: 'Open to opportunities' },
];

const pillars = [
  {
    title: 'Systems thinking',
    body:  'I design architectures before I write code — data models, API contracts, and service boundaries that won\'t need rewriting six months later.',
  },
  {
    title: 'End-to-end ownership',
    body:  'From smart contracts on Polygon to React frontends to Python ML pipelines, I own the whole stack and take responsibility for how it performs in production.',
  },
  {
    title: 'Shipping discipline',
    body:  'I use AI tooling to move faster, but I don\'t skip tests, code review, or documentation. Fast delivery and code quality aren\'t trade-offs.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true }}
          variants={fadeUp}
          className="mb-16"
        >
          <p className="section-label mb-3">About</p>
          <h2 className="section-heading">Who I am</h2>
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-2">

          {/* Left column — pull quote + quick facts */}
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true }}
            variants={fadeUp}
          >
            <blockquote className="mb-10 font-display text-2xl font-semibold leading-snug text-foreground sm:text-3xl">
              "I don't just write code — I design systems that solve real problems,
              then ship them."
            </blockquote>

            <div className="grid grid-cols-2 gap-px border border-border">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="bg-card p-4">
                  <p className="mb-1 text-[10px] uppercase tracking-widest text-muted-foreground">
                    {fact.label}
                  </p>
                  <p className="text-sm font-medium text-foreground">{fact.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right column — bio + pillars */}
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            className="space-y-6"
          >
            <p className="text-base leading-relaxed text-muted-foreground">
              I'm a full-stack software engineer with deep roots in TypeScript,
              Python, and Solidity. Over the past few years I've built everything
              from sports-prediction ML pipelines to multi-chain DeFi platforms to
              NLP-powered product discovery tools — most of them alone or in very
              small teams, which means I'm used to making architecture decisions,
              not just implementing them.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              I have 53+ public repositories on GitHub, several in active production.
              I work fast — partly because I leverage AI-assisted development tools
              well — but the thing I'm actually proud of is that the codebases I
              ship are maintainable. I care about the next engineer who reads the
              code, even when that engineer is me three months later.
            </p>

            <div className="space-y-4 pt-2">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="border-l-2 border-border pl-4 hover:border-primary transition-colors duration-200"
                >
                  <p className="mb-1 text-sm font-semibold text-foreground">{p.title}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
