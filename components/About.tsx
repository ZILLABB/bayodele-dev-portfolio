'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { CodeBracketIcon, LightBulbIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-background py-24">
      {/* Background gradient effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-1/4 top-0 size-[30rem] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -right-1/4 bottom-0 size-[30rem] rounded-full bg-secondary/10 blur-3xl" />
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
            About <span className="text-gradient-primary">Me</span>
          </h2>
          <div className="mx-auto mb-6 h-1 w-24 bg-gradient-to-r from-primary to-secondary" />
          <p className="mx-auto max-w-3xl text-xl text-foreground/80">
            A full-stack engineer who ships fast, thinks in systems, and builds products that solve real problems.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-1">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Logo Section */}
            <motion.div
              className="mx-auto mb-12 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative mx-auto">
                <div className="relative mx-auto size-32 overflow-hidden rounded-full border-2 border-primary/20 sm:size-40">
                  <Image
                    src="/apple-touch-icon.png"
                    alt="Bayodele Shedu"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-[1px]" />
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-2 -right-2 -z-10 size-32 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-xl sm:size-40" />
                <div className="absolute -left-2 -top-2 -z-10 size-32 rounded-full bg-gradient-to-br from-secondary/20 to-primary/20 blur-xl sm:size-40" />
              </div>
            </motion.div>

            <div>
              <h3 className="mb-4 text-center text-2xl font-bold text-foreground">
                Bayodele Shedu
              </h3>

              <p className="mx-auto mb-6 max-w-3xl text-center text-lg text-foreground/80">
                I&apos;m a <span className="font-semibold text-primary">full-stack software engineer</span> based in Lagos, Nigeria with deep expertise in TypeScript, Python, and Solidity.
                I build end-to-end applications — from responsive frontends in React/Next.js to robust backends with Node.js and Python, to smart contracts on Ethereum, BSC, and Polygon.
              </p>

              <p className="mx-auto mb-8 max-w-3xl text-center text-lg text-foreground/80">
                With <span className="font-medium text-primary">53+ repositories</span> on GitHub spanning sports analytics, DeFi platforms, NLP tools, and developer infrastructure,
                I bring a product-minded approach to engineering. I leverage AI-assisted development tools to accelerate delivery without compromising on architecture, testing, or code quality.
              </p>
            </div>

            <div>
              <h4 className="mb-6 text-center text-xl font-semibold text-foreground">
                What I Bring to the Table
              </h4>

              <div className="grid gap-6 md:grid-cols-3">
                {[
                  {
                    icon: <LightBulbIcon className="size-6" />,
                    title: "Systems Thinking",
                    description: "I design architectures that scale — from database schemas and API contracts to deployment pipelines and monitoring."
                  },
                  {
                    icon: <CodeBracketIcon className="size-6" />,
                    title: "Rapid Execution",
                    description: "I ship production-ready features fast by combining deep technical skill with AI-augmented workflows and test-driven iteration."
                  },
                  {
                    icon: <RocketLaunchIcon className="size-6" />,
                    title: "Full-Stack Ownership",
                    description: "From smart contracts and ML models to React UIs and DevOps — I own the entire stack from concept to production."
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="group rounded-2xl border border-primary/10 bg-primary/[0.03] p-6 transition-all duration-300 hover:border-primary/20 hover:bg-primary/[0.05]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="mb-4 w-fit rounded-lg bg-primary/10 p-2 text-primary">
                      {item.icon}
                    </div>
                    <h5 className="mb-2 font-semibold text-foreground">
                      {item.title}
                    </h5>
                    <p className="text-sm text-foreground/70">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
