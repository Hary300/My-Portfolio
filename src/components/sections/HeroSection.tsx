import Image from 'next/image';
import { Button } from '../ui/button';
import heroImage from '@/assets/images/heroImage.png';
import DarkOverlay from '../common/DarkOverlay';
import GreenOverlay from '../common/GreenOverlay';
import { Star } from 'lucide-react';
import ThreeGreenBoxes from '../common/ThreeGreenBoxes';

const HeroSection = () => {
  return (
    <section
      id='home'
      className='relative flex flex-col lg:items-end lg:pl-30 lg:-mt-20 w-full border-b gap-3 lg:gap-0'
    >
      <div className='relative lg:absolute lg:left-30 lg:top-55.25 -mt-20 pt-20'>
        <div className='relative  flex flex-col gap-10 lg:gap-15 py-10 lg:px-0 lg:py-0 lg:max-w-201.75 z-1 px-4 lg:pr-0'>
          <div className='flex flex-col gap-4'>
            <div className='flex gap-4 items-center'>
              <div className='border-t-2 border-neutral-25 w-5.25 lg:w-10 xl:w-28.5' />
              <p className='font-medium text-md lg:text-lg xl:text-xl'>
                Hi, I am Hary Frontend Developer
              </p>
            </div>
            <p className='font-extrabold text-display-lg lg:text-[55px] xl:text-[80px] lg:leading-7xl xl:leading-8xl'>
              BUILDING FAST &{' '}
              <span className='text-primary-200'>INTERACTIVE</span> WEB
              EXPERIENCES.
            </p>
            <p className='font-medium text-neutral-400 text-lg lg:text-xl lg:max-w-100 xl:max-w-149.25'>
              Bridging creativity and functionality to deliver stunning,
              user-friendly web applications
            </p>
          </div>
          <a href='#contact' className='lg:max-w-75 lg:h-14'>
            <Button>HIRE ME</Button>
          </a>
          <div className='block lg:hidden absolute inset-y-0 inset-x-2 left-3/4 border-l -z-1' />
        </div>
        <div className='block lg:hidden absolute inset-y-0 inset-x-2 left-1/2 border-l -z-1' />
      </div>

      <div className='relative flex justify-center  w-full overflow-hidden lg:max-w-165.25 pb-10'>
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
        <DarkOverlay rightOverlay={false} />
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
        <ThreeGreenBoxes className='left-0 top-60.5 lg:hidden' />
      </div>
      <div className='hidden lg:block absolute inset-y-0 inset-x-2 left-1/2 border-l -z-1' />
      <div className='hidden lg:block absolute inset-y-0 inset-x-2 left-1/4 border-l -z-1' />
      <div />
      <ThreeGreenBoxes className='hidden lg:block left-0 bottom-0' />
    </section>
  );
};

export default HeroSection;
