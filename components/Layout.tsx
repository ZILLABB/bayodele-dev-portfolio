'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <motion.main 
          className="grow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {children}
        </motion.main>
      </div>
    </div>
  );
}
