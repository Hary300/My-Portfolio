'use client';
import Container from './Container';
import MobileMenu from '../common/MobileMenu';
import { useEffect, useState } from 'react';
import { navLinks } from '@/data/NavLinks';
import Link from 'next/link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.screenY > 10) setIsScrolled(true);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolled]);
  return (
    <nav className={`sticky top-0 ${isScrolled ? 'backdrop-blur-lg' : ''}`}>
      <Container className='py-0 lg:py-0 h-20 flex items-center justify-between'>
        <div className='flex items-center gap-2.25'>
          <div className='border-t-2 w-6 bg-white' />
          <span className='font-bold text-md lg:text-xl text-primary-200'>
            Haryadi N.P.
          </span>
        </div>
        <ul className='hidden lg:flex gap-8'>
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                href={link.path}
                className='text-neutral-25 hover:underline hover:text-primary-200'
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <MobileMenu />
      </Container>
    </nav>
  );
};

export default Navbar;
