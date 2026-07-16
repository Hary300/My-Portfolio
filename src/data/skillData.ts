import js from '@/assets/icons/tech/js.svg';
import css from '@/assets/icons/tech/css.svg';
import html from '@/assets/icons/tech/html.svg';
import react from '@/assets/icons/tech/react.svg';
import nextjs from '@/assets/icons/tech/nextjs.svg';
import ts from '@/assets/icons/tech/ts.svg';
import mongo from '@/assets/icons/tech/mongo.svg';
import postgre from '@/assets/icons/tech/postgre.svg';

interface Skills {
  id: number;
  name: string;
  percent: string;
  icon: string;
  width: number;
}

export const skillData: Skills[] = [
  {
    id: 1,
    name: 'HTML',
    percent: '100%',
    icon: html,
    width: 24,
  },
  {
    id: 2,
    name: 'CSS',
    percent: '90%',
    icon: css,
    width: 20,
  },
  {
    id: 3,
    name: 'Javascript',
    percent: '90%',
    icon: js,
    width: 30,
  },
  {
    id: 4,
    name: 'Typescript',
    percent: '75%',
    icon: ts,
    width: 24,
  },
  {
    id: 5,
    name: 'React JS',
    percent: '70%',
    icon: react,
    width: 26,
  },
  {
    id: 6,
    name: 'Next JS',
    percent: '50%',
    icon: nextjs,
    width: 32,
  },
  {
    id: 7,
    name: 'Mongo DB',
    percent: '50%',
    icon: mongo,
    width: 27,
  },
  {
    id: 8,
    name: 'PostGre',
    percent: '50%',
    icon: postgre,
    width: 25,
  },
];
