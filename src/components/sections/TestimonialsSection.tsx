import { sectionTitles } from '@/data/sectionTitles';
import SectionTitle from '../common/SectionTitle';
import Container from '../layouts/Container';
import DesktopCarousel from '../common/DesktopCarousel';
import MobileCarousel from '../common/MobileCarousel';

const TestimonialsSection = () => {
  const header = sectionTitles.testimonial;
  return (
    <section id='testimonial'>
      <Container className='flex flex-col gap-6 lg:gap-16'>
        <SectionTitle
          title={header.title}
          subtitle={header.subtitle}
          className='text-center'
        />
        <DesktopCarousel className='hidden lg:flex' />
        <MobileCarousel className='lg:hidden' />
      </Container>
    </section>
  );
};

export default TestimonialsSection;
