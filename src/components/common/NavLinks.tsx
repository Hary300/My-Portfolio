import { navLinks } from '@/data/navLinks';
import Link from 'next/link';

const NavLinks = ({ onClick }: { onClick?: () => void }) => {
  return navLinks.map((link) => (
    <li key={link.id}>
      <Link
        href={link.path}
        className='text-neutral-25 hover:text-primary-200 hover:underline'
        onClick={onClick}
      >
        {link.name}
      </Link>
    </li>
  ));
};

export default NavLinks;
