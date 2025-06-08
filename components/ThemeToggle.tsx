'use client';

import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="glassmorphism flex size-10 items-center justify-center rounded-full transition-colors hover:bg-primary/10"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <SunIcon className="size-5 text-primary" />
      ) : (
        <MoonIcon className="size-5 text-primary" />
      )}
    </button>
  );
} 