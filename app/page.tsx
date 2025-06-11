'use client';

import { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Methodology from '../components/Methodology';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

export default function Home() {
  // Handle animations on mount
  useEffect(() => {
    // Add intersection observer for fade-in animations
    const observerOptions = {
      root: null,
      threshold: 0.1,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
        }
      });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('.section-animate').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a href="#main-content" className="absolute left-2 top-2 z-50 sr-only rounded bg-primary px-4 py-2 text-white focus:not-sr-only">
        Skip to content
      </a>
      <main id="main-content" className="relative overflow-hidden bg-background">
        <div className="relative space-y-24 md:space-y-32 lg:space-y-40">
          <div className="section-animate opacity-0">
            <Hero />
          </div>
          <div className="section-animate opacity-0">
            <About />
          </div>
          <div className="section-animate opacity-0">
            <Methodology />
          </div>
          <div className="section-animate opacity-0">
            <Projects />
          </div>
          <div className="section-animate opacity-0">
            <Skills />
          </div>
          <div className="section-animate opacity-0">
            <Contact />
          </div>
        </div>
        <footer className="relative mt-24 bg-gradient-to-b from-transparent to-background/50 py-8">
        </footer>
      </main>
    </>
  );
}
