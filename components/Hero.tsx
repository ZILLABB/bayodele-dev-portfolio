'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDownIcon, CodeBracketIcon, CpuChipIcon, RocketLaunchIcon, LightBulbIcon } from '@heroicons/react/24/solid';
import { useRef } from 'react';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 * i,
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    })
  };

  const features = [
    {
      icon: <CodeBracketIcon className="h-5 w-5" />,
      text: 'Full-Stack Development'
    },
    {
      icon: <CpuChipIcon className="h-5 w-5" />,
      text: 'AI Engineering'
    },
    {
      icon: <RocketLaunchIcon className="h-5 w-5" />,
      text: 'Rapid Prototyping'
    },
    {
      icon: <LightBulbIcon className="h-5 w-5" />,
      text: 'Intelligent Systems'
    }
  ];

  return (
    <div className="relative w-full">
      <section 
        ref={containerRef}
        id="home" 
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 w-full"
      >
        {/* Modern, subtle background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="absolute -right-1/4 -bottom-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl -z-10" />
        <div className="absolute -left-1/4 -top-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-secondary/20 to-primary/20 blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto"
          >
            <motion.div 
              className="relative z-10 text-center px-4"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 }
                }
              }}
            >
              <motion.div 
                className="inline-block mb-6 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                AI-First Developer • Builder of Intelligent Systems
              </motion.div>
              <div className="relative mb-8 flex justify-center">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary to-secondary p-1 shadow-xl dark:shadow-lg flex items-center justify-center">
                  <span className="text-5xl md:text-6xl font-bold text-white select-none">BS</span>
                </div>
              </div>
              <motion.h1 
                className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
                variants={fadeInUp}
                custom={1}
              >
                Bayodele Shedu
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-foreground/80 mb-10 max-w-3xl mx-auto leading-relaxed"
                variants={fadeInUp}
                custom={2}
              >
                I guide systems into existence with <span className="font-semibold text-primary">AI as my co-pilot</span>, building intelligent applications that solve real problems.
              </motion.p>
              <motion.div 
                className="flex flex-wrap justify-center gap-3 mb-12"
                variants={fadeInUp}
                custom={3}
              >
                {features.map((feature, index) => (
                  <motion.div 
                    key={index} 
                    variants={fadeInUp}
                    custom={4 + index * 0.2}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/60 dark:bg-background/40 border border-border/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <span className="text-primary">
                      {feature.icon}
                    </span>
                    <span className="text-foreground/80 text-sm font-medium">
                      {feature.text}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div
                className="flex flex-col sm:flex-row justify-center gap-4"
                variants={fadeInUp}
                custom={4}
              >
                <motion.a
                  href="#projects"
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center px-8 py-3 rounded-lg font-semibold text-base tracking-wide transition-all duration-300 bg-primary text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-primary/50 shadow-lg hover:shadow-xl active:scale-95"
                >
                  <span className="relative">
                    View My Work
                    <ArrowDownIcon className="ml-2 -mr-1 h-5 w-5 inline-block group-hover:translate-y-0.5 transition-transform" />
                  </span>
                </motion.a>
                <motion.a
                  href="#contact"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center px-8 py-3 rounded-lg font-semibold text-base tracking-wide transition-all duration-300 bg-background text-foreground border-2 border-primary hover:bg-primary/10 focus:outline-none focus:ring-4 focus:ring-primary/50 shadow-lg hover:shadow-xl active:scale-95"
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
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
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
            className="flex flex-col items-center text-foreground/60 hover:text-primary transition-colors group"
            aria-label="Scroll down"
          >
            <span className="text-sm mb-1 opacity-0 group-hover:opacity-100 transition-opacity">Explore more</span>
            <div className="w-10 h-10 rounded-full border-2 border-current flex items-center justify-center">
              <ArrowDownIcon className="h-5 w-5 animate-bounce" />
            </div>
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default Hero;
