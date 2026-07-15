import Image from 'next/image';
import { Button } from '../ui/button';
import heroImage from '@/assets/images/heroImage.png';
import DarkOverlay from '../common/DarkOverlay';
import GreenOverlay from '../common/GreenOverlay';
import { div } from 'motion/react-client';
import { Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <section
      id='hero'
      className='relative flex flex-col lg:items-end lg:pl-30 lg:-mt-20 w-full border-b-2'
    >
      <div className='lg:absolute lg:left-30 lg:top-55.25 flex flex-col gap-10 lg:gap-15 py-10 lg:px-0 lg:py-0 lg:max-w-201.75 z-1 px-4 lg:pr-0'>
        <div className='flex flex-col gap-4'>
          <div className='flex gap-4 items-center'>
            <div className='border-t-2 border-neutral-25 w-5.25 lg:w-28.5' />
            <p className='font-medium text-md lg:text-xl'>
              Hi, I am Haryadi N.P. Frontend Developer
            </p>
          </div>
          <p className='font-extrabold text-display-lg lg:text-[80px] lg:leading-8xl '>
            BUILDING FAST &{' '}
            <span className='text-primary-200'>INTERACTIVE</span> WEB
            EXPERIENCES.
          </p>
          <p className='font-medium text-neutral-400 text-lg lg:text-xl max-w-149.25'>
            Bridging creativity and functionality to deliver stunning,
            user-friendly web applications
          </p>
        </div>
        <Button className='lg:max-w-75 lg:h-14'>HIRE ME</Button>
      </div>

      <div className='relative flex justify-center  w-full overflow-hidden lg:max-w-165.25 '>
        <div className='relative w-87 h-115.25 lg:w-full lg:h-220.25'>
          <Image
            src={heroImage}
            alt='hero image'
            loading='eager'
            fill
            sizes='(max-width: 1024px) 348px, 100vw'
            className='object-center object-contain lg:object-cover grayscale brightness-50 '
          />
        </div>
        <DarkOverlay />
        <GreenOverlay />
        <div className='absolute left-1/2 -translate-x-1/2 bg-black border rounded-xl lg:rounded-3xl p-2xl flex flex-col gap-md bottom-10 lg:bottom-21 w-full max-w-87.25'>
          <p className='text-display-xs lg:text-display-xl font-bold'>5.0</p>
          <div className='flex gap-1'>
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                className='text-secondary-200 fill-secondary-200'
              />
            ))}
          </div>
          <p className='font-semibold text-md lg:text-xl'>
            Many Client Trust with me
          </p>
        </div>
      </div>
      <div className='absolute inset-y-0 inset-x-2 left-1/2 border-l-2' />
      <div className='absolute inset-y-0 inset-x-2 left-1/4 border-l-2' />

      <div />
    </section>
  );
};

export default HeroSection;
