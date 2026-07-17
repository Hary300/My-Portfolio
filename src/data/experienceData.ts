import netflixLogo from '@/assets/images/companyLogos/netflix.png';
import googleLogo from '@/assets/images/companyLogos/google.png';
import microsoftLogo from '@/assets/images/companyLogos/microsoft.png';
import spotifyLogo from '@/assets/images/companyLogos/spotify.png';
import { StaticImageData } from 'next/image';

export interface ExperienceData {
  id: number;
  year: string;
  position: string;
  companyLogo: StaticImageData;
  description: string;
}
export const experienceData: ExperienceData[] = [
  {
    id: 1,
    year: '2020 - 2022',
    companyLogo: netflixLogo,
    position: 'Frontend Developer',
    description:
      'Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences',
  },
  {
    id: 2,
    year: '2020 - 2022',
    companyLogo: googleLogo,
    position: 'Frontend Developer',
    description:
      'Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences',
  },
  {
    id: 3,
    year: '2020 - 2022',
    companyLogo: spotifyLogo,
    position: 'Frontend Developer',
    description:
      'Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences',
  },
  {
    id: 4,
    year: '2020 - 2022',
    companyLogo: microsoftLogo,
    position: 'Frontend Developer',
    description:
      'Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences',
  },
];
