import React from 'react';

import { FixedContainer } from '../../components/FixedContainer';
import { SocialIconLink } from '../../components/SocialIconLink';
import { EducationStatus } from '../../enums/education.enum';
import { AboutSection } from './components/AboutSection';
import { AwardsSection } from './components/Awards';
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
                <EducationSection
                    educationItems={[
                        {
                            course: 'Técnico em Informática para Internet',
                            institution: 'Escola Estadual Salomé de Melo Rocha',
                            city: 'Guia Lopes da Laguna - MS',
                            period: {
                                start: '2016',
                                end: '2017',
                                status: EducationStatus.Completed,
                            },
                        },
                        {
                            course: 'Bacharelado em Engenharia de Software',
                            institution:
                                'Universidade Federal do Mato Grosso do Sul',
                            city: 'Campo Grande - MS',
                            period: {
                                start: '2019',
                                end: '2022',
                                status: EducationStatus.Discontinued,
                            },
                        },
                        {
                            course: 'Ciência da Computação',
                            institution: 'Universidade Estácio de Sá',
                            city: 'Pouso Alegre - MG',
                            period: {
                                start: '2023',

                                status: EducationStatus.InProgress,
                            },
                        },
                    ]}
                />
                <hr className='m-0' />
                <SkillsSection />
                <hr className='m-0' />
                <InterestsSection />
                <hr className='m-0' />
                <AwardsSection />
            </div>
        </S.Container>
    );
});

export default CurriculumPage;
