import { cn } from '@/lib/utils';

const ThreeGreenBoxes = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn('absolute w-[103.5px] lg:w-34.5 flex flex-col', className)}
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
