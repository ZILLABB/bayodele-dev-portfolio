'use client';

import { ReactNode, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  // Make sure animations only run on client side
  useEffect(() => {
    document.documentElement.style.setProperty('--client-side-animation', '1');
  }, []);

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <motion.main 
          className="grow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.main>
      </div>
    </div>
  );
}
