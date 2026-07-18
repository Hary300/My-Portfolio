'use client';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { fadeUp } from '@/motion/motion';

interface SectionTitleProps {
  title: string;
  subtitle: string | ReactNode;
  className?: string;
}
const SectionTitle = ({ title, subtitle, className }: SectionTitleProps) => {
  return (
    <motion.div
      variants={fadeUp}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.2 }}
      className={cn('flex flex-col gap-2', className)}
    >
      <p className='font-medium text-md text-primary-200 lg:text-lg'>{title}</p>
      <p className='font-extrabold text-display-md lg:text-display-2xl'>
        {subtitle}
      </p>
    </motion.div>
  );
};

export default SectionTitle;
