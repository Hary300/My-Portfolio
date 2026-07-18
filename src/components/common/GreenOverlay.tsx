'use client';
import { scaleIn } from '@/motion/motion';
import { motion } from 'motion/react';
const GreenOverlay = () => {
  return (
    <>
      <div className='absolute inset-y-0 right-0 w-[48%] bg-primary-200  mix-blend-multiply' />
      <motion.div
        variants={scaleIn}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
        className='absolute inset-y-0 right-0 w-[48%] bg-primary-200/40 brightness-90 -z-1'
      />
    </>
  );
};

export default GreenOverlay;
