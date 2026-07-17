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

interface MobileCarouselProps {
  className?: string;
}

const MobileCarousel = ({ className }: MobileCarouselProps) => {
  const slides = chunk(testimonialData, 3);
  return (
    <Carousel className={cn('w-full flex flex-col gap-10', className)}>
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem
            key={index}
            className='grid grid-cols-1 grid-rows-3 gap-4'
          >
            {slide.map((item) => (
              <TestimonialCard key={item.id} item={item} />
            ))}
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className='flex gap-4 justify-center'>
        <CarouselPrevious className='size-12' />
        <CarouselNext className='size-12' />
      </div>
    </Carousel>
  );
};

export default MobileCarousel;
