import { ExperienceData } from '@/data/experienceData';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface ExperienceCardProps {
  item: ExperienceData;
  className?: string;
}
const ExperienceCard = ({ item, className }: ExperienceCardProps) => {
  return (
    <div
      className={cn(
        'border rounded-2xl p-4 flex flex-col gap-4 lg:max-w-127.5',
        className
      )}
    >
      <div className='flex flex-col lg:flex-row gap-1 lg:justify-between lg:items-center'>
        <div className='flex flex-col gap-1'>
          <p className='text-sm text-neutral-400 lg:text-lg'>{item.year}</p>
          <p className='text-md font-bold lg:text-display-xs'>
            {item.position}
          </p>
        </div>
        <div className='relative w-19 lg:w-28.5 h-10'>
          <Image
            src={item.companyLogo}
            alt='company logo'
            fill
            sizes='(min-width: 1024px) 114px, 76px'
            className='object-contain'
          />
        </div>
      </div>
      <p className='text-neutral-400 text-sm lg:text-md'>{item.description}</p>
    </div>
  );
};

export default ExperienceCard;
