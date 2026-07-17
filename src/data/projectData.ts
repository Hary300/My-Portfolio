import { StaticImageData } from 'next/image';
import project1 from '@/assets/images/projects/project1.png';
import project2 from '@/assets/images/projects/project2.png';
import project3 from '@/assets/images/projects/project3.png';
import project4 from '@/assets/images/projects/project4.png';
import project5 from '@/assets/images/projects/project5.png';
import project6 from '@/assets/images/projects/project6.png';

interface ProjectData {
  id: number;
  image: StaticImageData;
  title: string;
  description: string;
}
export const proJectData: ProjectData[] = [
  {
    id: 1,
    image: project1,
    title: 'Dashboard SaaS Task Management',
    description:
      'Lorem ipsum dolor sit amet consectetur. Aenean sed commodo aenean nunc lobortis.',
  },
  {
    id: 2,
    image: project2,
    title: 'Dashboard SaaS Task Management',
    description:
      'Lorem ipsum dolor sit amet consectetur. Aenean sed commodo aenean nunc lobortis.',
  },
  {
    id: 3,
    image: project3,
    title: 'Dashboard SaaS Task Management',
    description:
      'Lorem ipsum dolor sit amet consectetur. Aenean sed commodo aenean nunc lobortis.',
  },
  {
    id: 4,
    image: project4,
    title: 'Dashboard SaaS Task Management',
    description:
      'Lorem ipsum dolor sit amet consectetur. Aenean sed commodo aenean nunc lobortis.',
  },
  {
    id: 5,
    image: project5,
    title: 'Dashboard SaaS Task Management',
    description:
      'Lorem ipsum dolor sit amet consectetur. Aenean sed commodo aenean nunc lobortis.',
  },
  {
    id: 6,
    image: project6,
    title: 'Dashboard SaaS Task Management',
    description:
      'Lorem ipsum dolor sit amet consectetur. Aenean sed commodo aenean nunc lobortis.',
  },
];
