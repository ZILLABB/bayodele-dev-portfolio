'use client';

import { useEffect, useState } from 'react';

export function ScrollProgress() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(window.scrollY / height);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div
        className="fixed inset-x-0 top-0 z-50 h-1 bg-gradient-to-r from-primary to-secondary"
        style={{
          transform: `scaleX(${scrollProgress})`,
          transformOrigin: '0%',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.3s'
        }}
      />
      <div
        className="fixed bottom-8 right-8 z-50"
        style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.3s' }}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary backdrop-blur-sm transition-colors hover:bg-primary/20"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
          <span className="sr-only">Scroll to top</span>
        </button>
      </div>
    </>
  );
}
