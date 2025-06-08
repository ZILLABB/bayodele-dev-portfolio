'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ScrollProgress } from './ScrollProgress';

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    // Any client-side setup that doesn't affect initial render
  }, []);

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
