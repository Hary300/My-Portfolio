import { sectionTitles } from '@/data/sectionTitles';
import Container from '../layouts/Container';
import SectionTitle from '../common/SectionTitle';
import ThreeGreenBoxes from '../common/ThreeGreenBoxes';
import Image from 'next/image';
import personImage from '@/assets/images/heroImage.png';
import DarkOverlay from '../common/DarkOverlay';
import { profileData, socialLinks } from '@/data/contactData';
import { cn } from '@/lib/utils';
import ContactForm from '../common/ContactForm';

const ContactSection = () => {
  const header = sectionTitles.contact;
  return (
    <section id='contact' className='relative -scroll-mt-80 lg:scroll-mt-0'>
      <Container className='flex flex-col lg:flex-row lg:justify-between lg:gap-16'>
        <div className='relative w-full max-w-87.25 lg:max-w-105 h-128.5 lg:h-160 m-auto'>
          <Image
            src={personImage}
            alt='my image'
            fill
            sizes='(max-width: 1024px) 100vw, 420px'
            className='object-contain lg:object-cover grayscale brightness-55'
          />
          <DarkOverlay className='from-5%' />
          <div className='absolute bottom-[36.62px] lg:-bottom-8.75 left-1/2 -translate-x-1/2 flex flex-col gap-4 lg:gap-6 w-full max-w-[256px] items-center'>
            <div className='flex justify-between max-w-44 lg:max-w-[256px] w-full'>
              {socialLinks.map((item) => (
                <div
                  key={item.id}
                  className='relative size-12 lg:size-16 aspect-square shrink-0 border cursor-pointer flex justify-center items-center rounded-full bg-black '
                >
                  <item.icon className='size-7 lg:size-9' />
                </div>
              ))}
            </div>
            <div className='flex flex-col gap-1 items-center'>
              <p className='font-bold text-md lg:text-xl'>{profileData.name}</p>
              <div className='flex gap-3 items-center'>
                <div
                  className={cn(
                    'size-3 rounded-full',
                    profileData.isAvailable
                      ? 'bg-primary-200'
                      : 'bg-neutral-400'
                  )}
                />
                <p className='text-neutral-400 font-semibold text-sm lg:text-md'>
                  {profileData.isAvailable
                    ? 'Available for Work'
                    : 'Not Available'}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full lg:max-w-160.25 flex flex-col gap-6 lg:gap-11.5'>
          <SectionTitle title={header.title} subtitle={header.subtitle} />
          <ContactForm />
        </div>
      </Container>
      <ThreeGreenBoxes className='rotate-180 top-0 left-0' />
      <ThreeGreenBoxes className='right-0 bottom-0' />
    </section>
  );
};

export default ContactSection;
