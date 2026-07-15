'use client';
import Container from './Container';
import MobileMenu from '../common/MobileMenu';
import { useEffect, useState } from 'react';
import Logo from '@/components/common/Logo';
import NavLinks from '../common/NavLinks';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav
      className={`sticky top-0 z-50 border-b ${isScrolled ? 'backdrop-blur-lg' : ''}`}
    >
      <Container className='py-0 lg:py-0 h-20 flex items-center justify-between'>
        <Logo />
        <ul className='hidden lg:flex gap-8'>
          <NavLinks />
        </ul>
        <MobileMenu />
      </Container>
    </nav>
  );
};

export default Navbar;
