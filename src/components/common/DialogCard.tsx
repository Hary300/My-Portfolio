import { DialogContent } from '@/components/ui/dialog';
import { Button } from '../ui/button';
import { FormStatusData } from '@/data/contactData';
import Image from 'next/image';

interface DialogCardProps {
  formStatus: FormStatusData;
  setOpen: () => void;
}

const DialogCard = ({ formStatus, setOpen }: DialogCardProps) => {
  return (
    <DialogContent className='sm:max-w-119.75 pt-20 pb-6 lg:pb-8  bg-black border rounded-2xl flex flex-col gap-6'>
      <div className='size-[107.32px] lg:size-[132.68px] bg-primary-100 rounded-full shrink-0 aspect-square absolute left-1/2 -translate-x-1/2 -top-20'>
        <Image
          src={formStatus.icon}
          alt={`${formStatus.status} icon`}
          width={132.68}
          height={102}
          className='h-auto w-auto absolute left-[12.13px] top-[23.46px] lg:left-3.75 lg:top-7.25'
        />
      </div>
      <div className='flex flex-col justify-center'>
        <p className='font-bold text-lg lg:text-xl text-neutral-25 text-center leading-8 lg:leading-8.5'>
          {formStatus.title}
        </p>
        <p className='text-sm lg:text-md text-neutral-400 text-center leading-7 lg:leading-7.5'>
          {formStatus.description}
        </p>
      </div>

      <Button type='button' onClick={setOpen}>
        {formStatus.buttonText}
      </Button>
    </DialogContent>
  );
};

export default DialogCard;
