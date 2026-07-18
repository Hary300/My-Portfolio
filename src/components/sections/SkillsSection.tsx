'use client';
import { sectionTitles } from '@/data/sectionTitles';
import Container from '../layouts/Container';
import SectionTitle from '../common/SectionTitle';
import { skillData } from '@/data/skillData';
import Image from 'next/image';
import DiagonalLines from '../common/DiagonalLines';
import { motion } from 'motion/react';
import { dividerHorizontal, fadeUp, staggerContainer } from '@/motion/motion';

const SkillsSection = () => {
  const header = sectionTitles.skills;
  return (
    <section id='skills' className='scroll-mt-20 lg:scroll-mt-0'>
      <Container className='flex flex-col lg:flex-row gap-10 lg:gap-14.5'>
        <div className='flex flex-col gap-6 lg:gap-10'>
          <SectionTitle
            title={header.title}
            subtitle={header.subtitle}
            className='lg:max-w-131 lg:leading-6xl'
          />
          <motion.div
            variants={staggerContainer}
            initial='hidden'
            whileInView='visible'
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className='grid grid-cols-4 gap-6 w-fit'
          >
            {skillData.map((item) => (
              <motion.div
                variants={fadeUp}
                key={item.id}
                className='flex justify-center items-center rounded-full aspect-square shrink-0 border size-12 lg:size-16'
              >
                <Image
                  src={item.icon}
                  alt={`${item.name} icon`}
                  width={item.width}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className='flex flex-col gap-4 lg:gap-6 lg:max-w-150.5 w-full'>
          {skillData.map((item) => (
            <div
              key={item.id}
              className='flex gap-4 lg:gap-6 justify-between items-center'
            >
              <div className='relative w-full'>
                <div className='absolute top-1/2 border-b w-full -z-1' />

                <motion.div
                  variants={dividerHorizontal}
                  initial='hidden'
                  whileInView='visible'
                  transition={{
                    duration: 1,
                    delay: 0.3,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  className='relative px-[15.52px] py-[6px] lg:py-4 lg:px-6 rounded-xl bg-primary-300 h-[41.4px] flex items-center overflow-hidden'
                  style={{ width: item.percent }}
                >
                  <p className='font-semibold text-sm lg:text-lg'>
                    {item.name}
                  </p>
                  <DiagonalLines />
                </motion.div>
              </div>
              <p className='font-semibold text-sm text-white lg:text-xl'>
                {item.percent}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SkillsSection;
