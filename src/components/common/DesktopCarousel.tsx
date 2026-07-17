import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { testimonialData } from '@/data/testimonialData';
import { chunk } from '@/lib/chunk';
import TestimonialCard from './TestimonialCard';
import { cn } from '@/lib/utils';

interface DesktopCarouselProps {
  className?: string;
}

const DesktopCarousel = ({ className }: DesktopCarouselProps) => {
  const slides = chunk(testimonialData, 4);

  return (
    <Carousel className={cn('w-full flex flex-col gap-10', className)}>
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem
            key={index}
            className='grid grid-cols-2 grid-rows-2 gap-x-6 gap-y-8.75'
          >
            {slide.map((item) => (
              <TestimonialCard key={item.id} item={item} />
            ))}
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className='flex gap-4 justify-center'>
        <CarouselPrevious className='size-14' />
        <CarouselNext className='size-14' />
      </div>
    </Carousel>
  );
};

export default DesktopCarousel;
