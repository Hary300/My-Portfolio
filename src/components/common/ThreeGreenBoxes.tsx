import { cn } from '@/lib/utils';

interface ThreeGreenBoxesProps {
  className?: string;
  orientation?: 'vertical' | 'horizontal';
}

const ThreeGreenBoxes = ({
  className,
  orientation = 'horizontal',
}: ThreeGreenBoxesProps) => {
  if (orientation === 'vertical')
    return (
      <div className={cn('absolute h-[103.5px] lg:h-34.5 flex', className)}>
        <div className='flex flex-col justify-between'>
          <div className='size-[34.5px] lg:size-11.5  bg-primary-400' />
          <div className='size-[34.5px] lg:size-11.5  bg-primary-400' />
        </div>
        <div className='size-[34.5px] lg:size-11.5 bg-primary-400 m-auto' />
      </div>
    );
  return (
    <div
      className={cn(
        'absolute w-[103.5px] lg:w-34.5 flex flex-col items-center',
        className
      )}
    >
      <div className='size-[34.5px] lg:size-11.5 bg-primary-400 m-auto' />
      <div className='flex justify-between w-full'>
        <div className='size-[34.5px] lg:size-11.5  bg-primary-400' />
        <div className='size-[34.5px] lg:size-11.5  bg-primary-400' />
      </div>
    </div>
  );
};

export default ThreeGreenBoxes;
