'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    step:        '01',
    title:       'Discovery & architecture',
    description:
      'Before a line of code, I nail down the data model, service boundaries, and API contracts. The goal is a design that won\'t require a painful rewrite at 10× scale.',
    details: [
      'Requirements analysis and constraint mapping',
      'System design, schema design, API contract drafting',
      'Technology selection with explicit trade-off reasoning',
    ],
  },
  {
    step:        '02',
    title:       'Rapid, tested development',
    description:
      'I move fast using AI-assisted workflows, but every meaningful piece of logic has a test. CI fails on coverage drops. Speed without discipline is just debt.',
    details: [
      'AI-assisted scaffolding and code generation',
      'Test-driven development on core business logic',
      'CI pipeline wired from day one',
    ],
  },
  {
    step:        '03',
    title:       'Iteration on real feedback',
    description:
      'Ship early, measure what matters, change what the data says to change. I don\'t iterate on assumptions — I instrument the system and let usage patterns guide decisions.',
    details: [
      'Feature flags and progressive rollouts',
      'Performance profiling and query optimisation',
      'Stakeholder feedback loops',
    ],
  },
  {
    step:        '04',
    title:       'Ship and maintain',
    description:
      'Deployment is not the end. I set up monitoring, write runbooks, and stay responsible for production health. Code I shipped two years ago still runs without waking me up at night.',
    details: [
      'CI/CD via GitHub Actions, Vercel, or Railway',
      'Logging, alerting, and error tracking',
      'Documentation and knowledge transfer',
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Methodology() {
  return (
    <section id="methodology" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true }}
          variants={fadeUp}
          className="mb-16"
        >
          <p className="section-label mb-3">Process</p>
          <h2 className="section-heading mb-4">How I work</h2>
          <p className="max-w-xl text-base text-muted-foreground">
            Not a framework, not a methodology deck — just how I actually approach
            building software from first conversation to production.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid gap-8 sm:grid-cols-2">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group border-l-2 border-border pl-6 transition-colors duration-200 hover:border-primary"
            >
              <span className="mb-3 block text-xs font-bold uppercase tracking-widest text-primary">
                {s.step}
              </span>
              <h3 className="font-display mb-3 text-lg font-bold text-foreground">
                {s.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                {s.description}
              </p>
              <ul className="space-y-1.5">
                {s.details.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <span className="mt-1.5 size-1 flex-shrink-0 rounded-full bg-primary" />
                    {d}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true }}
          variants={fadeUp}
          className="mt-14 border-t border-border pt-10"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-display text-xl font-semibold text-foreground">
              Have a project? I&apos;d like to hear about it.
            </p>
            <a href="#contact" className="btn-primary flex-shrink-0">
              Get in touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
