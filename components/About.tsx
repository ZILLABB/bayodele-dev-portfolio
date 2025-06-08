import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="bg-bg-light py-20 dark:bg-bg-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-text-primary-light dark:text-text-primary-dark">
              What is <span className="text-gradient-primary">Vibe Coding</span>?
            </h2>
            <div className="mx-auto mb-6 h-1 w-24 bg-gradient-to-r from-primary to-secondary" />
            <p className="mx-auto max-w-3xl text-xl text-text-secondary-light dark:text-text-secondary-dark">
              My signature approach where I describe functionality in natural language, collaborate with AI, and refine through testing and intuition.
            </p>
          </div>
          <h2 className="text-3xl font-bold text-text-primary-light dark:text-text-primary-dark sm:text-4xl">
            About Me
          </h2>
          <div className="mx-auto mt-4 w-20 rounded-full h-1 bg-gradient-to-r from-primary to-secondary" />
        </motion.div>
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          <motion.div
            className="lg:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative mx-auto size-64 overflow-hidden rounded-full border-4 border-primary shadow-xl dark:border-secondary lg:mx-0">
              <Image
                src="/apple-touch-icon.png"
                alt="Bayodele Shedu avatar"
                fill
                className="object-cover"
                priority
              />
              <span className="sr-only">Bayodele Shedu</span>
            </div>
          </motion.div>
          <motion.div
            className="text-center lg:w-2/3 lg:text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="mb-4 text-2xl font-bold text-text-primary-light dark:text-text-primary-dark">
              Bayodele Shedu
              <span className="ml-3 text-gradient-primary">The Vibe Coder</span>
            </h3>
            <div className="prose max-w-none dark:prose-invert">
              <p className="mb-6 text-gray-600 dark:text-gray-300">
                I'm <span className="font-semibold text-primary dark:text-primary-light">Bayodele Shedu</span>, a full-stack software developer and <span className="font-semibold">Vibe Coder</span> based in Nigeria. I specialize in building advanced, AI-integrated products—end-to-end—from idea to deployment. I work smart, fast, and with intent.
              </p>
              <p className="mb-6 text-gray-600 dark:text-gray-300">
                I don't just code—I guide systems into existence. With tools like <span className="font-medium">Cursor</span>, <span className="font-medium">Augment</span>, and <span className="font-medium">Windsurf</span>, I transform raw ideas into production-ready systems—faster, smarter, and more sustainably.
              </p>
              <h3 className="mt-8 mb-4 text-xl font-semibold text-text-primary-light dark:text-text-primary-dark">My Tech Philosophy</h3>
              <ul className="mb-8 space-y-4">
                <li className="flex items-start">
                  <div className="mt-1 shrink-0">
                    <div className="flex size-5 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400">
                      <svg className="size-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <span className="ml-3 text-gray-700 dark:text-gray-300">
                    <span className="font-medium">I build with vibes and vision</span> — letting AI handle implementation while I guide logic, architecture, and UX.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 shrink-0">
                    <div className="flex size-5 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400">
                      <svg className="size-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <span className="ml-3 text-gray-700 dark:text-gray-300">
                    <span className="font-medium">AI is my pair programmer</span> — freeing me to focus on systems thinking, creativity, and solving real problems.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 shrink-0">
                    <div className="flex size-5 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400">
                      <svg className="size-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <span className="ml-3 text-gray-700 dark:text-gray-300">
                    <span className="font-medium">Code is a medium. Outcome is the goal.</span> I focus on delivering real value, not just writing code.
                  </span>
                </li>
              </ul>
              <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="flex items-start space-x-3">
                  <div className="shrink-0 size-6 text-indigo-600 dark:text-indigo-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Lightning Fast</p>
                    <p className="text-gray-600 dark:text-gray-300">Rapid prototyping & iteration</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="shrink-0 size-6 text-indigo-600 dark:text-indigo-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">AI-Enhanced</p>
                    <p className="text-gray-600 dark:text-gray-300">Leveraging cutting-edge AI tools</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="shrink-0 size-6 text-indigo-600 dark:text-indigo-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Full-Stack</p>
                    <p className="text-gray-600 dark:text-gray-300">End-to-end solutions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="shrink-0 size-6 text-indigo-600 dark:text-indigo-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Secure & Scalable</p>
                    <p className="text-gray-600 dark:text-gray-300">Built for growth & security</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
