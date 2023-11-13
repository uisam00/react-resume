import React from 'react';

import { FixedContainer } from '../../components/FixedContainer';
import { SocialIconLink } from '../../components/SocialIconLink';
import { AWARDS, EDUCATION_ITEMS } from '../../mocks';
import { AboutSection } from './components/AboutSection';
import { AwardsSection } from './components/AwardsSection';
import { EducationSection } from './components/EducationSection';
import { ExperienceSection } from './components/ExperienceSection';
import { InterestsSection } from './components/InterestsSection';
import { NavBar } from './components/NavBar';
import { SkillsSection } from './components/SkillsSection';
import * as S from './curriculum-styles';

const CurriculumPage: React.FC = React.memo(() => {
    return (
        <S.Container id='page-top'>
            <FixedContainer position='bottomRight' className='text-right p-2'>
                <SocialIconLink
                    fSize='300%'
                    icon={{ iconName: 'whatsapp', iconType: 'fab' }}
                />
            </FixedContainer>

            <NavBar id='sideNav' />

            <div className='container-fluid p-0'>
                <AboutSection />
                <hr className='m-0' />
                <ExperienceSection />
                <hr className='m-0' />
                <EducationSection educationItems={EDUCATION_ITEMS} />
                <hr className='m-0' />
                <SkillsSection />
                <hr className='m-0' />
                <InterestsSection />
                <hr className='m-0' />
                <AwardsSection awards={AWARDS} />
            </div>
        </S.Container>
    );
});

export default CurriculumPage;
