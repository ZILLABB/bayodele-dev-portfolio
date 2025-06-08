'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ScrollProgress } from './ScrollProgress';

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="relative">
          <div className="size-32 animate-pulse rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-xl" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="size-16 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <ScrollProgress />
      {children}
    </motion.div>
  );
};

export default ClientLayout;
