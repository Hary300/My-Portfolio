'use client';
import { sectionTitles } from '@/data/sectionTitles';
import Container from '../layouts/Container';
import SectionTitle from '../common/SectionTitle';
import { workingData } from '@/data/workingData';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';
import { fadeUp, slideRight, staggerContainer } from '@/motion/motion';

const WorkingSection = () => {
  const header = sectionTitles.working;
  return (
    <section id='working'>
      <Container className='flex flex-col gap-6 lg:gap-12'>
        <SectionTitle
          title={header.title}
          subtitle={header.subtitle}
          className='text-center'
        />
        <div className='flex flex-col md:flex-row gap-6 lg:gap-20'>
          {workingData.map((item) => {
            const isMe = item.isMe;
            return (
              <div
                key={item.id}
                className='flex items-center flex-col gap-6 lg:gap-8 w-full'
              >
                <motion.p
                  variants={fadeUp}
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true, amount: 0.2 }}
                  className='font-bold text-xl lg:text-display-sm text-center'
                >
                  {item.title}
                </motion.p>
                <motion.div
                  variants={fadeUp}
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true, amount: 0.2 }}
                  className='size-15 aspect-square shrink-0 bg-neutral-950 rounded-full flex justify-center items-center overflow-hidden'
                >
                  <Image
                    src={item.avatar}
                    alt={`${item.title} avatar`}
                    className='w-14 h-auto'
                  />
                </motion.div>
                <motion.div
                  variants={staggerContainer}
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true, amount: 0.2 }}
                  className={`w-full flex flex-col gap-6 lg:gap-8 divide-y ${isMe ? 'last:border-b md:last:border-0' : ''}`}
                >
                  {item.reasons.map((reason, index) => (
                    <motion.div
                      variants={slideRight}
                      key={`${reason}-${index}`}
                      className='flex gap-3 w-full pb-6 lg:pb-8 '
                    >
                      <svg
                        width='23'
                        height='24'
                        viewBox='0 0 23 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M11.4127 0L13.2 6.49909L18.4661 2.2918L16.092 8.60024L22.8253 8.2918L17.1967 12L22.8253 15.7082L16.092 15.3997L18.4661 21.7082L13.2 17.5009L11.4127 24L9.62532 17.5009L4.35925 21.7082L6.73332 15.3997L0 15.7082L5.62868 12L0 8.2918L6.73332 8.60024L4.35925 2.2918L9.62532 6.49909L11.4127 0Z'
                          fill={isMe ? '#91FF02' : '#91FF0266'}
                        />
                      </svg>

                      <p
                        className={`font-bold text-md lg:text-xl ${isMe ? '' : 'text-neutral-400 font-regular'}`}
                      >
                        {reason}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            );
          })}
        </div>
        <motion.a
          variants={fadeUp}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          href='#contact'
          className='sm:max-w-60 w-full lg:h-14 m-auto'
        >
          <Button>HIRE ME</Button>
        </motion.a>
      </Container>
    </section>
  );
};

export default WorkingSection;
