import { FaDribbble, FaInstagram, FaLinkedin } from 'react-icons/fa';
import successIcon from '@/assets/icons/dialogIcons/success.png';
import failIcon from '@/assets/icons/dialogIcons/fail.png';
import { StaticImageData } from 'next/image';

interface SocialLink {
  id: number;
  name: string;
  href: string;
  icon: React.ElementType;
}

export const socialLinks: SocialLink[] = [
  {
    id: 1,
    name: 'Dribbble',
    href: 'https://dribbble.com/',
    icon: FaDribbble,
  },
  {
    id: 2,
    name: 'Instagram',
    href: 'https://instagram.com/',
    icon: FaInstagram,
  },
  {
    id: 3,
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/',
    icon: FaLinkedin,
  },
];

interface ProfileData {
  name: string;
  isAvailable: boolean;
}

export const profileData: ProfileData = {
  name: 'Hary',
  isAvailable: true,
};

export interface FormStatusData {
  status: 'success' | 'error';
  title: string;
  description: string;
  buttonText: string;
  icon: StaticImageData;
}

export const formStatusData: Record<'success' | 'error', FormStatusData> = {
  success: {
    status: 'success',
    title: 'Message Sent Successfully!',
    description:
      "Thank you for reaching out. I'll get back to you as soon as possible",
    buttonText: 'BACK TO HOME',
    icon: successIcon,
  },
  error: {
    status: 'error',
    title: 'Message not sent!',
    description:
      'Something went wrong on our end. Please try again in a moment.',
    buttonText: 'TRY AGAIN',
    icon: failIcon,
  },
};
