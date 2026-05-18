'use client';

import { useEffect } from 'react';
import Hero        from '../components/Hero';
import About       from '../components/About';
import Methodology from '../components/Methodology';
import Projects    from '../components/Projects';
import Skills      from '../components/Skills';
import Contact     from '../components/Contact';

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
          }
        });
      },
      { threshold: 0.08 }
    );

    document.querySelectorAll('.section-animate').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a href="#main-content" className="skip-nav">Skip to content</a>
      <main id="main-content" className="bg-background">

        {/* Hero — no section-animate so it plays immediately */}
        <Hero />

        <div className="divide-y divide-border">
          {[About, Projects, Methodology, Skills, Contact].map((Section, i) => (
            <div key={i} className="section-animate opacity-0">
              <Section />
            </div>
          ))}
        </div>

        <footer className="border-t border-border py-8">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 sm:flex-row sm:px-6 lg:px-8">
            <p className="font-display text-sm font-semibold text-foreground">
              BS<span className="text-primary">.</span>
            </p>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Bayodele Shedu. Built with Next.js.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/ZILLABB"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/bayodele-shedu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
