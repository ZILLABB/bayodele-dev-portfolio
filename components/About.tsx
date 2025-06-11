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
            What is <span className="text-gradient-primary">Vibe Coding</span>?
          </h2>
          <div className="mx-auto mb-6 h-1 w-24 bg-gradient-to-r from-primary to-secondary" />
          <p className="mx-auto max-w-3xl text-xl text-foreground/80">
            My signature approach where I describe functionality in natural language, collaborate with AI, and refine through testing and intuition.
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
                <span className="text-gradient-primary ml-3">The Vibe Coder</span>
              </h3>
              
              <p className="mx-auto mb-6 max-w-3xl text-center text-lg text-foreground/80">
                I&apos;m a full-stack software developer and <span className="font-semibold text-primary">AI-First Developer</span> based in Nigeria.
                I specialize in building advanced, production-ready applications—end-to-end—from concept to deployment.
                My superpower? <span className="font-semibold text-primary">Exceptional prompting skills</span> that enable me to work with AI tools to deliver complex projects in remarkably short timeframes.
              </p>

              <p className="mx-auto mb-8 max-w-3xl text-center text-lg text-foreground/80">
                I don&apos;t just code—I orchestrate intelligent systems. With tools like
                <span className="font-medium text-primary"> Cursor</span>,
                <span className="font-medium text-primary"> Augment</span>, and
                <span className="font-medium text-primary"> Windsurf</span>,
                I transform complex ideas into production-ready systems—faster, smarter, and more efficiently than traditional development approaches.
              </p>
            </div>

            <div>
              <h4 className="mb-6 text-center text-xl font-semibold text-foreground">
                My Tech Philosophy
              </h4>

              <div className="grid gap-6 md:grid-cols-3">
                {[
                  {
                    icon: <LightBulbIcon className="size-6" />,
                    title: "Master of AI Prompting",
                    description: "I excel at communicating with AI tools to generate complex, production-ready code rapidly and efficiently."
                  },
                  {
                    icon: <CodeBracketIcon className="size-6" />,
                    title: "AI-Powered Development",
                    description: "Using Cursor, Augment, and Windsurf as my co-pilots to build full-stack applications in record time."
                  },
                  {
                    icon: <RocketLaunchIcon className="size-6" />,
                    title: "End-to-End Delivery",
                    description: "From smart contracts to ML models, I deliver complete solutions that solve real-world problems."
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
