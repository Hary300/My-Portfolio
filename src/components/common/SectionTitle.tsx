import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface SectionTitleProps {
  title: string;
  subtitle: string | ReactNode;
  className?: string;
}
const SectionTitle = ({ title, subtitle, className }: SectionTitleProps) => {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <p className='font-medium text-md text-primary-200 lg:text-lg'>{title}</p>
      <p className='font-extrabold text-display-md lg:text-display-2xl'>
        {subtitle}
      </p>
    </div>
  );
};

export default SectionTitle;
