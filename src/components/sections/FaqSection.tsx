'use client';
import { sectionTitles } from '@/data/sectionTitles';
import Container from '../layouts/Container';
import SectionTitle from '../common/SectionTitle';
import { faqData } from '@/data/faqData';
import Image from 'next/image';
import greenStarIcon from '@/assets/icons/greenStarIcon.svg';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import { dividerHorizontal, fadeUp } from '@/motion/motion';

const FaqSection = () => {
  const header = sectionTitles.faq;
  return (
    <section id='faq' className='scroll-mt-20 lg:scroll-mt-0'>
      <Container className='flex flex-col gap-6 lg:gap-16'>
        <SectionTitle
          title={header.title}
          subtitle={header.subtitle}
          className='text-center'
        />
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-0 lg:gap-y-5 '>
          {faqData.map((item, index) => (
            <div key={item.id} className='lg:flex lg:flex-col lg:gap-5'>
              <motion.div
                variants={fadeUp}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.2 }}
                key={item.id}
                className={cn(
                  'flex flex-col gap-2 lg:gap-6 border lg:border-0 rounded-2xl lg:rounded-none p-4 lg:px-10',
                  index % 2 === 0 && 'lg:border-r'
                )}
              >
                <div className='flex gap-3'>
                  <Image
                    src={greenStarIcon}
                    alt='green star icon'
                    width={24}
                    height={24}
                    className='w-6 h-auto lg:w-8'
                  />
                  <p className='font-bold text-lg lg:text-display-xs'>
                    {item.question}
                  </p>
                </div>
                <p className='text-md font-medium text-neutral-400'>
                  {item.answer}
                </p>
              </motion.div>
              <motion.div
                variants={dividerHorizontal}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.2 }}
                className={cn(
                  'hidden lg:block border-b',
                  index === faqData.length - 1 && 'lg:hidden',
                  index === faqData.length - 2 && 'lg:hidden'
                )}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FaqSection;
