import { StaticImageData } from 'next/image';
import adobeLogo from '@/assets/images/companyLogos/adobe.png';
import canvaLogo from '@/assets/images/companyLogos/canva.png';
import dockerLogo from '@/assets/images/companyLogos/docker.png';
import dripsLogo from '@/assets/images/companyLogos/drips.png';

import googleLogo from '@/assets/images/companyLogos/google.png';
import gustoLogo from '@/assets/images/companyLogos/gusto.png';
import invisionLogo from '@/assets/images/companyLogos/invision.png';
import microsoftLogo from '@/assets/images/companyLogos/microsoft.png';
import netflixLogo from '@/assets/images/companyLogos/netflix.png';
import spotifyLogo from '@/assets/images/companyLogos/spotify.png';
import trelloLogo from '@/assets/images/companyLogos/trello.png';
import upworkLogo from '@/assets/images/companyLogos/upwork.png';
import zapierLogo from '@/assets/images/companyLogos/zapier.png';
import zoomLogo from '@/assets/images/companyLogos/zoom.png';

export interface TestimonialData {
  id: number;
  name: string;
  position: string;
  companyLogo: string | StaticImageData;
  rating: number;
  quote: string;
}

export const testimonialData: TestimonialData[] = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    position: 'Product Designer at Adobe',
    companyLogo: adobeLogo,
    rating: 5,
    quote:
      'Working together was an absolute pleasure. The attention to detail and commitment to quality exceeded our expectations at every turn.',
  },
  {
    id: 2,
    name: 'James Carter',
    position: 'Marketing Lead at Canva',
    companyLogo: canvaLogo,
    rating: 5,
    quote:
      'One of the most reliable developers I have worked with. Delivered on time and communicated clearly throughout the project.',
  },
  {
    id: 3,
    name: 'Emily Chen',
    position: 'Engineering Manager at Docker',
    companyLogo: dockerLogo,
    rating: 4,
    quote:
      'Great technical skills combined with strong problem-solving ability. Our platform runs smoother than ever.',
  },
  {
    id: 4,
    name: 'Michael Rodriguez',
    position: 'Product Manager at Drips',
    companyLogo: dripsLogo,
    rating: 5,
    quote:
      'Impressed by the depth of understanding and the ability to translate our vision into a polished final product.',
  },
  {
    id: 5,
    name: 'Olivia Bennett',
    position: 'UX Lead at Google',
    companyLogo: googleLogo,
    rating: 5,
    quote:
      'A true professional who cares about the details. The end result was clean, fast, and exactly what we needed.',
  },
  {
    id: 6,
    name: 'Daniel Kim',
    position: 'CTO at Gusto',
    companyLogo: gustoLogo,
    rating: 4,
    quote:
      'Consistently delivered high quality work under tight deadlines. Would gladly collaborate again on future projects.',
  },
  {
    id: 7,
    name: 'Sophia Turner',
    position: 'Creative Director at InVision',
    companyLogo: invisionLogo,
    rating: 5,
    quote:
      'The design and development work brought our brand to life in a way we did not think was possible.',
  },
  {
    id: 8,
    name: 'Ryan Walsh',
    position: 'Senior Developer at Microsoft',
    companyLogo: microsoftLogo,
    rating: 5,
    quote:
      'Exceptional coding standards and a genuine passion for building great products. Highly recommended.',
  },
  {
    id: 9,
    name: 'Isabella Moore',
    position: 'Brand Strategist at Netflix',
    companyLogo: netflixLogo,
    rating: 5,
    quote:
      'From the first meeting to final delivery, the process was smooth, transparent, and full of great ideas.',
  },
  {
    id: 10,
    name: 'Ethan Brooks',
    position: 'Product Owner at Spotify',
    companyLogo: spotifyLogo,
    rating: 4,
    quote:
      'A collaborative mindset and sharp technical execution made this one of our smoothest project rollouts yet.',
  },
  {
    id: 11,
    name: 'Grace Anderson',
    position: 'Operations Lead at Trello',
    companyLogo: trelloLogo,
    rating: 5,
    quote:
      'Our workflow improved dramatically thanks to the thoughtful solutions provided throughout the engagement.',
  },
  {
    id: 12,
    name: 'Liam Foster',
    position: 'Freelance Consultant at Upwork',
    companyLogo: upworkLogo,
    rating: 5,
    quote:
      'Top tier communication and craftsmanship. Every milestone was met with quality work and clear updates.',
  },
  {
    id: 13,
    name: 'Ava Sullivan',
    position: 'Growth Manager at Zapier',
    companyLogo: zapierLogo,
    rating: 4,
    quote:
      'The automation solutions delivered saved our team countless hours every week. Fantastic work overall.',
  },
  {
    id: 14,
    name: 'Noah Peterson',
    position: 'Head of Product at Zoom',
    companyLogo: zoomLogo,
    rating: 5,
    quote:
      'A rare combination of technical excellence and genuine enthusiasm for the project. Could not be happier with the results.',
  },
];
