import React from 'react';
import { motion } from 'framer-motion';

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.8,
  distance = 40,
  scale = 1,
  className = '',
  once = false
}) {
  const getVariants = () => {
    let initialX = 0;
    let initialY = 0;

    if (direction === 'up') initialY = distance;
    if (direction === 'down') initialY = -distance;
    if (direction === 'left') initialX = distance;
    if (direction === 'right') initialX = -distance;

    return {
      hidden: {
        opacity: 0,
        x: initialX,
        y: initialY,
        scale: scale < 1 ? scale : 1,
      },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        transition: {
          duration,
          delay,
          ease: [0.16, 1, 0.3, 1],
        },
      },
    };
  };

  return (
    <motion.div
      variants={getVariants()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.15 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
