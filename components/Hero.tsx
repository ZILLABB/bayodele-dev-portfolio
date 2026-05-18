'use client';

import { motion } from 'framer-motion';
import { ArrowDownIcon } from '@heroicons/react/24/outline';

const stats = [
  { value: '53+',      label: 'Repositories' },
  { value: '6+',       label: 'Production apps' },
  { value: '3',        label: 'Chains deployed' },
  { value: 'Lagos',    label: 'Nigeria 🇳🇬' },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center pt-16 pb-16"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >

          {/* Availability indicator */}
          <motion.div variants={item} className="mb-10 flex items-center gap-2.5">
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
            </span>
            <span className="text-xs uppercase tracking-widest text-muted-foreground">
              Available for work
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={item}
            className="font-display mb-6 text-[clamp(3.5rem,12vw,8.5rem)] font-bold leading-[0.95] tracking-tight text-foreground"
          >
            Bayodele<br />
            <span className="text-primary">Shedu</span>
          </motion.h1>

          {/* Descriptor */}
          <motion.p
            variants={item}
            className="mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
          >
            Full-stack engineer. I build production-grade web apps, DeFi platforms,
            and ML-powered products — end to end, from architecture to deployment.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="mb-20 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">
              View my work
            </a>
            <a href="#contact" className="btn-secondary">
              Get in touch
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={item}
            className="border-t border-border pt-8"
          >
            <div className="flex flex-wrap gap-x-10 gap-y-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-2xl font-bold text-foreground">
                    {s.value}
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground/50 transition-colors hover:text-primary"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <ArrowDownIcon className="size-5 animate-bounce" />
      </motion.a>
    </section>
  );
}
