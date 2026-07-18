'use client';
import { ExperienceData } from '@/data/experienceData';
import ExperienceCard from './ExperienceCard';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import { dividerVertical, fadeUp } from '@/motion/motion';

interface ExperienceItemProps {
  item: ExperienceData;
  isFirst: boolean;
  isLast: boolean;
  isRight: boolean;
}

const ExperienceItem = ({
  item,
  isFirst,
  isLast,
  isRight,
}: ExperienceItemProps) => {
  return (
    <div className='grid grid-cols-[auto, 1fr] gap-4 lg:grid-cols-[1fr_auto_1fr] lg:gap-x-16'>
      <ExperienceCard
        item={item}
        className={cn(
          'row-start-1',
          isRight
            ? 'lg:col-start-3 lg:justify-self-start'
            : 'lg:col-start-1 lg:justify-self-end'
        )}
      />

      <div className='relative flex justify-center items-center h-full col-start-1 lg:col-start-2 row-start-1 w-fit'>
        <motion.div
          variants={fadeUp}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          className='size-10 rounded-full aspect-square shrink-0 border flex justify-center items-center bg-black'
        >
          {item.id}
        </motion.div>
        <motion.div
          variants={dividerVertical}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 2 }}
          className={cn(
            'absolute border-l h-[calc(100%+1rem)] -z-1',
            isFirst && 'top-1/2',
            isLast && 'bottom-1/2'
          )}
        />
      </div>
    </div>
  );
};

export default ExperienceItem;
