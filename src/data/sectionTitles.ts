interface SectionValue {
  title: string;
  subtitle: string;
}

type SectionKey =
  | 'service'
  | 'aboutMe'
  | 'skills'
  | 'working'
  | 'experience'
  | 'project'
  | 'testimonial'
  | 'faq'
  | 'contact';

export const sectionTitles: Record<SectionKey, SectionValue> = {
  service: {
    title: 'SERVICE',
    subtitle: 'MY SERVICE EXPERTISE',
  },
  aboutMe: {
    title: 'ABOUT ME',
    subtitle: 'CRAFTING SEAMLESS HIGH-PERFORMANCE WEB EXPERIENCES',
  },
  skills: {
    title: 'SKILLS',
    subtitle: 'SKILLS THAT BRING IDEAS TO LIFE',
  },
  working: {
    title: 'WORKING',
    subtitle: 'WHY CHOOSE ME?',
  },
  experience: {
    title: 'EXPERIENCE',
    subtitle: 'PROFESSIONAL WORK',
  },
  project: {
    title: 'PORTFOLIO',
    subtitle: 'SELECTED WORK',
  },
  testimonial: {
    title: 'TESTIMONIALS',
    subtitle: 'PEOPLE SAYS ABOUT ME',
  },
  faq: {
    title: 'FAQ',
    subtitle: 'FREQUENTLY ASKED QUESTIONS',
  },
  contact: {
    title: 'CONTACT',
    subtitle: 'LET’S GET IN TOUCH',
  },
};
