'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
}

export default function StaggerItem({ 
  children, 
  className = '',
  direction = 'up',
  distance = 30
}: StaggerItemProps) {
  const directionVariants = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: { 
          opacity: 0, 
          ...directionVariants[direction]
        },
        visible: { 
          opacity: 1, 
          x: 0, 
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94]
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
