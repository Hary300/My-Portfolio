import myAvatar from '@/assets/myAvatar.svg';
import dummyAvatar from '@/assets/dummyAvatar.svg';

interface WorkingData {
  id: number;
  isMe: boolean;
  avatar: string;
  title: string;
  reasons: string[];
}

export const workingData: WorkingData[] = [
  {
    id: 1,
    isMe: true,
    avatar: myAvatar,
    title: 'WORKING WITH ME',
    reasons: [
      'React Expert',
      'Precise Website Implementation',
      'TypeScript Proficiency',
      'Clean, Maintainable Code',
      'Responsive Website Development',
      'UI Design Proficiency (Figma)',
    ],
  },
  {
    id: 2,
    isMe: false,
    avatar: dummyAvatar,
    title: 'ANOTHER TALENT',
    reasons: [
      'Basic React Knowledge',
      'Inconsistent Design Translation',
      'Little to No TypeScript Knowledge',
      'Unstructured Code',
      'Inconsistent Responsiveness',
      'Inconsistent Responsiveness',
    ],
  },
];
