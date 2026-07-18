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
import Logo from './Logo';

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
            <Logo onClose={() => setOpen(false)} />
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
