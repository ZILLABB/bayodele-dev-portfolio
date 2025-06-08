import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="relative size-20">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 rounded-full border-2 border-primary"
            initial={{ scale: 0, opacity: 0.5 }}
            animate={{
              scale: 1,
              opacity: 0,
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.2,
              ease: [0.4, 0, 0.6, 1],
            }}
          />
        ))}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="size-4 rounded-full bg-primary" />
        </div>
      </div>
    </div>
  );
}
