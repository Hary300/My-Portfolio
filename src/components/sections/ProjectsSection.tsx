'use client';
import { sectionTitles } from '@/data/sectionTitles';
import SectionTitle from '../common/SectionTitle';
import Container from '../layouts/Container';
import { proJectData } from '@/data/projectData';
import Image from 'next/image';
import { motion } from 'motion/react';
import { fadeUp, staggerContainer } from '@/motion/motion';

const ProjectsSection = () => {
  const header = sectionTitles.project;
  return (
    <section id='projects' className='scroll-mt-20 lg:scroll-mt-0'>
      <Container className='flex flex-col gap-6 lg:gap-16 py-12.5'>
        <SectionTitle
          title={header.title}
          subtitle={header.subtitle}
          className='text-center'
        />
        <motion.div
          variants={staggerContainer}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.01 }}
          className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-x-5 lg:gap-y-12'
        >
          {proJectData.map((item) => (
            <motion.div
              variants={fadeUp}
              key={item.id}
              className='flex flex-col gap-3 lg:gap-4'
            >
              <div className='relative rounded-2xl lg:rounded-3xl overflow-hidden aspect-square'>
                <Image
                  src={item.image}
                  alt={`${item.title} image`}
                  fill
                  className='object-cover'
                  loading='eager'
                  sizes='(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw'
                />
              </div>
              <p className='font-bold text-xl lg:text-display-xs'>
                {item.title}
              </p>
              <p className='text-neutral-400 text-sm lg:text-md'>
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default ProjectsSection;
