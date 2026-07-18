import { sectionTitles } from '@/data/sectionTitles';
import SectionTitle from '../common/SectionTitle';
import Container from '../layouts/Container';
import aboutMeImage1 from '@/assets/images/aboutMeImage1.png';
import aboutMeImage2 from '@/assets/images/aboutMeImage2.png';
import aboutMeImage3 from '@/assets/images/aboutMeImage3.png';
import Image from 'next/image';
import ThreeGreenBoxes from '../common/ThreeGreenBoxes';

const AboutMeSection = () => {
  const header = sectionTitles.aboutMe;

  return (
    <section id='about' className='scroll-mt-20 lg:scroll-mt-0'>
      <Container
        desktopPaddingY='lg'
        className='relative flex flex-col gap-4 lg:gap-16'
      >
        <SectionTitle
          title={header.title}
          subtitle={
            <>
              CRAFTING SEAMLESS{' '}
              <span className='text-primary-200'>HIGH-PERFORMANCE WEB</span>{' '}
              EXPERIENCES
            </>
          }
          className='text-center gap-4 lg:max-w-218 m-auto'
        />
        <p className='font-medium text-md text-neutral-400 lg:text-xl text-center max-w-249 m-auto'>
          I love turning designs into interactive, high-performance websites.
          With a keen eye for detail and a deep understanding of frontend
          technologies, I create smooth and visually appealing user experiences.
        </p>
        <div className='relative -mx-4 mt-6 md:mt-0 -mb-10 md:mb-0 md:mx-0 h-72 md:absolute md:h-auto md:inset-0'>
          <Image
            src={aboutMeImage1}
            alt='project 1'
            width={238}
            height={178}
            className='absolute w-42.5 lg:w-59.5 h-auto left-10 lg:top-9.25 lg:left-63 -z-1 '
          />
          <Image
            src={aboutMeImage2}
            alt='project 2'
            width={250}
            height={187}
            className='absolute w-33.5 lg:w-62.5 h-auto top-11.25 right-8.75 lg:top-18.5 lg:right-44.5 -z-1 '
          />
          <Image
            src={aboutMeImage3}
            alt='project 3'
            width={117}
            height={88}
            className='absolute w-33 lg:w-29.25 h-auto bottom-6 left-36 lg:bottom-53.25 lg:left-219 -z-1 '
          />

          <ThreeGreenBoxes orientation='vertical' className='left-0 bottom-0' />
        </div>
      </Container>
    </section>
  );
};

export default AboutMeSection;
