import { sectionTitles } from '@/data/sectionTitles';
import SectionTitle from '../common/SectionTitle';
import Container from '../layouts/Container';
import { experienceData } from '@/data/experienceData';
import ExperienceItem from '../common/ExperienceItem';
import ThreeGreenBoxes from '../common/ThreeGreenBoxes';

const ExperienceSection = () => {
  const header = sectionTitles.experience;
  return (
    <section id='experience' className='relative'>
      <Container className='flex flex-col gap-6 lg:gap-16'>
        <SectionTitle
          title={header.title}
          subtitle={header.subtitle}
          className='text-center'
        />
        <div className='flex flex-col gap-4 lg:gap-0 '>
          {experienceData.map((item, index) => (
            <ExperienceItem
              key={item.id}
              item={item}
              isFirst={index === 0}
              isLast={index === experienceData.length - 1}
              isRight={index % 2 === 0}
            />
          ))}
        </div>
      </Container>
      <ThreeGreenBoxes
        orientation='vertical'
        className='right-0 bottom-0 rotate-180'
      />
    </section>
  );
};

export default ExperienceSection;
