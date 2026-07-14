import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  desktopPaddingY?: 'md' | 'lg';
  className?: string;
}

const Container = ({
  children,
  desktopPaddingY = 'md',
  className,
}: ContainerProps) => {
  const desktopHorizontalPadding = {
    md: 'lg:py-20',
    lg: 'lg:py-30',
  };
  return (
    <div
      className={cn(
        'px-4 lg:px-32 py-10',
        desktopHorizontalPadding[desktopPaddingY],
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
