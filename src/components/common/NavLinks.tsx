import { navLinks } from '@/data/temp';

const NavLinks = ({ onClick }: { onClick?: () => void }) => {
  return navLinks.map((link) => (
    <li key={link.id}>
      <a
        href={link.path}
        className='text-neutral-25 hover:text-primary-200 hover:underline'
        onClick={onClick}
      >
        {link.name}
      </a>
    </li>
  ));
};

export default NavLinks;
