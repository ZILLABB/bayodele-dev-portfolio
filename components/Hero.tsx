'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDownIcon, CodeBracketIcon, CpuChipIcon, RocketLaunchIcon, LightBulbIcon } from '@heroicons/react/24/solid';
import { useRef, useEffect, useState } from 'react';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const scrollPercentage = Math.max(0, Math.min(1, -rect.top / rect.height));
        setScrollProgress(scrollPercentage);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Use simpler animation values
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const features = [
    {
      icon: <CodeBracketIcon className="size-5" />,
      text: 'Full-Stack Development'
    },
    {
      icon: <CpuChipIcon className="size-5" />,
      text: 'AI Engineering'
    },
    {
      icon: <RocketLaunchIcon className="size-5" />,
      text: 'Rapid Prototyping'
    },
    {
      icon: <LightBulbIcon className="size-5" />,
      text: 'Intelligent Systems'
    }
  ];

  return (
    <AnimatePresence>
      <motion.div
        className="relative w-full"
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
        variants={variants}
      >
        <section 
          ref={containerRef}
          id="home" 
          className="relative flex min-h-screen w-full items-center justify-center overflow-hidden pt-16"
        >
          {/* Modern, layered background */}
          <motion.div 
            className="absolute inset-0 z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
            <div className="absolute -right-1/4 bottom-0 size-[800px] rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 blur-3xl" />
            <div className="absolute -left-1/4 top-0 size-[600px] rounded-full bg-gradient-to-r from-secondary/10 to-primary/10 blur-3xl" />
          </motion.div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              animate="visible"
              className="mx-auto max-w-4xl"
            >
              <motion.div className="text-center">
                <motion.div 
                  className="glassmorphism mb-6 inline-block rounded-full px-6 py-2 font-medium text-primary"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  AI-First Developer • Builder of Intelligent Systems
                </motion.div>
                
                <div className="relative mb-8 flex justify-center">
                  <div className="flex size-36 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary p-1.5 shadow-2xl transition-transform duration-300 hover:scale-105 md:size-44">
                    <div className="flex size-full items-center justify-center rounded-full bg-background/95 backdrop-blur">
                      <span className="select-none font-bold text-6xl text-gradient-primary md:text-7xl">BS</span>
                    </div>
                  </div>
                </div>

                <motion.h1 
                  className="mb-6 text-5xl font-bold text-gradient-primary md:text-7xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Bayodele Shedu
                </motion.h1>

                <motion.p 
                  className="mx-auto mb-10 text-xl max-w-3xl leading-relaxed text-foreground/80 md:text-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  I guide systems into existence with <span className="text-gradient-primary font-semibold">AI as my co-pilot</span>, building intelligent applications that solve real problems.
                </motion.p>

                <motion.div 
                  className="mb-12 flex flex-wrap justify-center gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {features.map((feature, index) => (
                    <motion.div 
                      key={index}
                      className="glassmorphism flex items-center gap-2 rounded-full px-4 py-2 shadow-sm transition-all duration-300 hover:shadow-md"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    >
                      <span className="text-primary">
                        {feature.icon}
                      </span>
                      <span className="font-medium text-sm text-foreground/80">
                        {feature.text}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  className="flex flex-col justify-center gap-4 sm:flex-row"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <motion.a
                    href="#projects"
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary"
                  >
                    <span className="relative">
                      View My Work
                      <ArrowDownIcon className="-mr-1 ml-2 inline-block size-5 transition-transform group-hover:translate-y-0.5" />
                    </span>
                  </motion.a>
                  
                  <motion.a
                    href="#contact"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-secondary"
                  >
                    <span className="relative">
                      Get In Touch
                    </span>
                  </motion.a>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div 
            className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: [0, 1, 1, 0],
              y: [20, 0, 0, -10]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatDelay: 1,
              ease: [0.4, 0, 0.2, 1],
              times: [0, 0.2, 0.8, 1]
            }}
          >
            <a 
              href="#about" 
              className="group flex flex-col items-center text-foreground/60 transition-colors hover:text-primary"
              aria-label="Scroll down"
            >
              <span className="mb-1 text-sm opacity-0 transition-opacity group-hover:opacity-100">Explore more</span>
              <div className="flex size-10 items-center justify-center rounded-full border-2 border-current">
                <ArrowDownIcon className="size-5 animate-bounce" />
              </div>
            </a>
          </motion.div>
        </section>
      </motion.div>
    </AnimatePresence>
  );
};

export default Hero;
