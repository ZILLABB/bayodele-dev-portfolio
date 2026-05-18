'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid';
import { ThemeToggle } from './ThemeToggle';

const navLinks = [
  { name: 'About',    href: '#about' },
  { name: 'Work',     href: '#projects' },
  { name: 'Process',  href: '#methodology' },
  { name: 'Skills',   href: '#skills' },
  { name: 'Contact',  href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled]             = useState(false);
  const [isMobileMenuOpen, setMobileMenu]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-border bg-background/95 backdrop-blur-sm'
          : 'border-b border-transparent bg-transparent'
      }`}
      initial={{ y: -64 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <a
          href="#home"
          className="font-display text-lg font-bold text-foreground tracking-tight"
        >
          BS<span className="text-primary">.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop right */}
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <a
            href="https://github.com/ZILLABB"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary py-2 px-4 text-xs"
          >
            GitHub ↗
          </a>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenu(!isMobileMenuOpen)}
            className="rounded p-1.5 text-muted-foreground hover:text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen
              ? <XMarkIcon className="size-5" />
              : <Bars3Icon className="size-5" />
            }
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="border-b border-border bg-background/95 backdrop-blur-sm md:hidden"
          >
            <div className="mx-auto max-w-6xl space-y-1 px-4 py-4 sm:px-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenu(false)}
                  className="block py-2.5 text-sm text-muted-foreground hover:text-foreground"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3">
                <a
                  href="https://github.com/ZILLABB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex py-2 px-4 text-xs"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
