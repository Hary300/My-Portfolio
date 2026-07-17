import { cn } from '@/lib/utils';

interface DarkOverlayProps {
  className?: string;
  rightOverlay?: boolean;
  leftOverlay?: boolean;
}

const DarkOverlay = ({
  className,
  rightOverlay = true,
  leftOverlay = true,
}: DarkOverlayProps) => {
  return (
    <>
      <div
        className={cn(
          'absolute left-0 inset-y-0 w-1/4 bg-linear-to-r from-black to-transparent',
          !leftOverlay && 'hidden'
        )}
      />
      <div
        className={cn(
          'absolute right-0 inset-y-0 w-1/4 bg-linear-to-l from-black to-transparent',
          !rightOverlay && 'hidden'
        )}
      />
      <div
        className={cn(
          'absolute inset-0 bg-linear-to-t from-black to-transparent',
          className
        )}
      />
    </>
  );
};

export default DarkOverlay;
