'use client';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { useState } from 'react';
import NavLinks from './NavLinks';

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className='lg:hidden'>
        <Button variant='ghost'>
          <HiOutlineMenuAlt3 className='size-6 hover:text-primary-200' />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className='h-20 flex justify-center border-b'>
          <SheetTitle>
            <div className='flex items-center gap-2.25'>
              <div className='border-t-2 w-6 border-white' />
              <span className='font-bold text-md lg:text-xl text-primary-200'>
                Haryadi N.P.
              </span>
            </div>
          </SheetTitle>
        </SheetHeader>
        <div className='grid flex-1 auto-rows-min gap-6 px-4'>
          <ul className='flex flex-col gap-4'>
            <NavLinks onClick={() => setOpen(false)} />
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
