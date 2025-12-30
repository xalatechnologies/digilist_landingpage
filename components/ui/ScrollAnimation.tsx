'use client';

import React from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';

export interface ScrollAnimationProps {
  children: React.ReactNode;
  variant?: 'fade' | 'fadeUp' | 'fadeDown' | 'fadeLeft' | 'fadeRight' | 'scale' | 'blur';
  delay?: number;
  duration?: number;
  className?: string;
  amount?: number;
  once?: boolean;
}

const animationVariants: Record<string, Variants> = {
  fade: {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.2, 0.8, 0.2, 1],
      }
    }
  },
  fadeUp: {
    hidden: { 
      opacity: 0, 
      y: 40,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.2, 0.8, 0.2, 1],
      }
    }
  },
  fadeDown: {
    hidden: { 
      opacity: 0, 
      y: -40,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.2, 0.8, 0.2, 1],
      }
    }
  },
  fadeLeft: {
    hidden: { 
      opacity: 0, 
      x: 40,
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.2, 0.8, 0.2, 1],
      }
    }
  },
  fadeRight: {
    hidden: { 
      opacity: 0, 
      x: -40,
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.2, 0.8, 0.2, 1],
      }
    }
  },
  scale: {
    hidden: { 
      opacity: 0, 
      scale: 0.9,
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.2, 0.8, 0.2, 1],
      }
    }
  },
  blur: {
    hidden: { 
      opacity: 0, 
      filter: 'blur(10px)',
    },
    visible: { 
      opacity: 1, 
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: [0.2, 0.8, 0.2, 1],
      }
    }
  },
};

export const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  variant = 'fadeUp',
  delay = 0,
  duration,
  className = '',
  amount = 0.2,
  once = true,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    amount, 
    once,
    margin: '0px 0px -100px 0px',
  });

  const baseVariant = animationVariants[variant] || animationVariants.fadeUp;
  
  // Apply custom duration if provided
  const baseVisible = baseVariant.visible as { transition?: any; [key: string]: any };
  const customVariant = duration 
    ? {
        ...baseVariant,
        visible: {
          ...baseVisible,
          transition: {
            ...(baseVisible.transition || {}),
            duration: duration / 1000, // Convert ms to seconds
            delay: delay / 1000,
          }
        }
      }
    : {
        ...baseVariant,
        visible: {
          ...baseVisible,
          transition: {
            ...(baseVisible.transition || {}),
            delay: delay / 1000,
          }
        }
      };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={customVariant}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Stagger animation for children
export interface StaggerAnimationProps {
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
  amount?: number;
}

export const StaggerAnimation: React.FC<StaggerAnimationProps> = ({
  children,
  staggerDelay = 0.1,
  className = '',
  amount = 0.2,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    amount, 
    once: true,
    margin: '0px 0px -100px 0px',
  });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 30,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.2, 0.8, 0.2, 1],
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className={className}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={itemVariants} className="h-full flex flex-col">
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

