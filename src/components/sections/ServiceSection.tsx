import { sectionTitles } from '@/data/sectionTitles';
import SectionTitle from '../common/SectionTitle';
import Container from '../layouts/Container';
import { serviceData } from '@/data/serviceData';
import Image from 'next/image';
import monitorIcon from '@/assets/icons/monitor.svg';

const ServiceSection = () => {
  const header = sectionTitles.service;
  return (
    <section id='service'>
      <Container desktopPaddingY='lg' className='flex flex-col gap-6 lg:gap-16'>
        <div className='flex flex-col gap-4 lg:flex-row lg:justify-between'>
          <SectionTitle title={header.title} subtitle={header.subtitle} />
          <p className='font-medium lg:text-right lg:text-xl text-neutral-400 lg:w-126'>
            Creating modern, intuitive, and visually consistent web experiences
            that align with industry trends and user expectations.
          </p>
        </div>
        <div className='flex flex-col gap-6 lg:flex-row lg:gap-10'>
          {serviceData.map((item, index) => (
            <div key={item.id} className='flex flex-col gap-3 lg:gap-6'>
              <p className='text-neutral-400 font-semibold text-md lg:text-xl'>
                0{index + 1}
              </p>
              <div className='w-full border-t' />
              <Image
                src={monitorIcon}
                alt='monitor Icon'
                width={26.67}
                height={24}
                className='w-6.5 h-auto'
              />
              <p className='font-semibold text-xl lg:text-display-sm lg:text-white'>
                {item.title}
              </p>
              <p className='text-neutral-400 text-md lg:text-xl'>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServiceSection;
