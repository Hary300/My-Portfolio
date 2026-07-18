'use client';
import { TestimonialData } from '@/data/testimonialData';
import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { fadeUp } from '@/motion/motion';

interface TestimonialCardProps {
  item: TestimonialData;
  className?: string;
}

const TestimonialCard = ({ item, className }: TestimonialCardProps) => {
  return (
    <motion.div
      variants={fadeUp}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.2 }}
      className={cn('border rounded-2xl p-4 flex flex-col gap-4', className)}
    >
      <div className='flex flex-row gap-1 justify-between items-center'>
        <div className='flex flex-col gap-1'>
          <p className='text-md font-bold lg:text-display-xs'>{item.name}</p>
          <p className='text-sm text-neutral-400 lg:text-lg'>{item.position}</p>
        </div>
        <div className='relative w-19 lg:w-28.5 h-10'>
          <Image
            src={item.companyLogo}
            alt='company logo'
            fill
            sizes='(min-width: 1024px) 114px, 76px'
            className='object-contain'
          />
        </div>
      </div>
      <div className='flex gap-2'>
        {Array.from({ length: item.rating }).map((_, index) => (
          <Star
            key={index}
            className='size-5 lg:size-8 text-secondary-200 fill-secondary-200'
          />
        ))}
      </div>
      <p className='text-neutral-400 text-sm lg:text-md'>{item.quote}</p>
    </motion.div>
  );
};

export default TestimonialCard;
