'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInUpProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

export default function FadeInUp({ 
  children, 
  delay = 0, 
  duration = 0.6, 
  className = '',
  once = true 
}: FadeInUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-100px" }}
      transition={{ 
        duration, 
        delay,
        ease: [0.25, 0.46, 0.45, 0.94] // Custom easing for smooth animation
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
