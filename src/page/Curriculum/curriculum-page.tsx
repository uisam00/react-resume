import React from 'react';

import { FixedContainer } from '../../components/FixedContainer';
import { SocialIconLink } from '../../components/SocialIconLink';
import * as mocks from '../../mocks';
import { AboutSection } from './components/AboutSection';
import { AwardsSection } from './components/AwardsSection';
import { EducationSection } from './components/EducationSection';
import { ExperienceSection } from './components/ExperienceSection';
import { InterestsSection } from './components/InterestsSection';
import { NavBar } from './components/NavBar';
import { SkillsSection } from './components/SkillsSection';
import * as S from './curriculum-styles';

const ENVIRONMENT_URL = import.meta.env.VITE_ENVIRONMENT_URL;

const CurriculumPage: React.FC = React.memo(() => {
    return (
        <S.Container id='page-top'>
            <S.FixedLinksContainer
                position='bottomRight'
                className='text-right p-2'
            >
                <S.UrlLink href={ENVIRONMENT_URL}>
                    Acesse esse currículo na Web
                </S.UrlLink>

                <SocialIconLink
                    target='_blank'
                    href='https://api.whatsapp.com/send?phone=67998933115'
                    fSize='300%'
                    icon={{ iconName: 'whatsapp', iconType: 'fab' }}
                />
            </S.FixedLinksContainer>

            <NavBar id='sideNav' />

            <div className='container-fluid p-0'>
                <AboutSection />
                <hr className='m-0' />
                <ExperienceSection experiences={mocks.EXPERIENCES} />
                <hr className='m-0' />
                <EducationSection educationItems={mocks.EDUCATION_ITEMS} />
                <hr className='m-0' />
                <SkillsSection skillsGroup={mocks.SKILL_GROUP_MOCK} />
                <hr className='m-0' />
                <InterestsSection />
                <hr className='m-0' />
                <AwardsSection awards={mocks.AWARDS} />
            </div>
        </S.Container>
    );
});

export default CurriculumPage;
