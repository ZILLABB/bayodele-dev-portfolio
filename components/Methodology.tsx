'use client';

import { motion } from 'framer-motion';
import { 
  LightBulbIcon, 
  CpuChipIcon, 
  RocketLaunchIcon, 
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const methodologySteps = [
  {
    step: "01",
    title: "Discovery & Architecture",
    description: "I start by understanding the problem deeply — user needs, constraints, and scale requirements — then design a system architecture that supports growth.",
    icon: <LightBulbIcon className="size-6" />,
    color: "from-blue-500 to-cyan-500",
    details: [
      "Requirements analysis & user research",
      "System design & data modeling",
      "Technology selection & trade-off evaluation"
    ]
  },
  {
    step: "02",
    title: "Rapid Development",
    description: "I build fast using AI-augmented workflows, component libraries, and proven patterns — without cutting corners on code quality or test coverage.",
    icon: <CpuChipIcon className="size-6" />,
    color: "from-purple-500 to-pink-500",
    details: [
      "AI-assisted code generation & review",
      "Test-driven development",
      "Continuous integration from day one"
    ]
  },
  {
    step: "03",
    title: "Iteration & Refinement",
    description: "Tight feedback loops with stakeholders and real users. I ship early, measure what matters, and iterate based on evidence.",
    icon: <RocketLaunchIcon className="size-6" />,
    color: "from-green-500 to-emerald-500",
    details: [
      "Feature flagging & progressive rollouts",
      "Performance profiling & optimization",
      "User feedback integration"
    ]
  },
  {
    step: "04",
    title: "Ship & Scale",
    description: "Production deployment with automated pipelines, monitoring, and documentation. I own the system post-launch and ensure it stays healthy.",
    icon: <CheckCircleIcon className="size-6" />,
    color: "from-orange-500 to-red-500",
    details: [
      "CI/CD pipelines (GitHub Actions, Vercel)",
      "Monitoring, logging & alerting",
      "Documentation & knowledge transfer"
    ]
  }
];

export default function Methodology() {
  return (
    <section id="methodology" className="relative overflow-hidden bg-muted/30 py-24">
      {/* Background gradient effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-1/4 top-0 size-[30rem] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -right-1/4 bottom-0 size-[30rem] rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-4xl font-bold text-foreground">
            How I <span className="text-gradient-primary">Work</span>
          </h2>
          <div className="mx-auto mb-6 h-1 w-24 bg-gradient-to-r from-primary to-secondary" />
          <p className="mx-auto max-w-3xl text-xl text-foreground/80">
            My development process — from understanding the problem to shipping production systems that scale.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {methodologySteps.map((step, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-8 transition-all duration-300 hover:border-primary/20 hover:shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Step number */}
              <div className="mb-6 flex items-center">
                <div className={`mr-4 flex size-12 items-center justify-center rounded-full bg-gradient-to-r ${step.color} text-white font-bold`}>
                  {step.step}
                </div>
                <div className={`rounded-lg bg-gradient-to-r ${step.color} p-2 text-white`}>
                  {step.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="mb-4 text-2xl font-semibold text-foreground">
                {step.title}
              </h3>
              
              <p className="mb-6 text-foreground/80">
                {step.description}
              </p>

              {/* Details */}
              <ul className="space-y-2">
                {step.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-center text-sm text-foreground/70">
                    <ArrowRightIcon className="mr-2 size-4 text-primary" />
                    {detail}
                  </li>
                ))}
              </ul>

              {/* Hover effect */}
              <div className={`absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-10 bg-gradient-to-br ${step.color}`} />
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 p-8">
            <h3 className="mb-4 text-2xl font-bold text-foreground">
              Have a project in mind?
            </h3>
            <p className="mx-auto mb-6 max-w-2xl text-foreground/80">
              I&apos;m always interested in challenging problems. Let&apos;s talk about what you&apos;re building and how I can help.
            </p>
            <a href="#contact" className="btn-primary">
              Get In Touch
              <ArrowRightIcon className="ml-2 size-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
