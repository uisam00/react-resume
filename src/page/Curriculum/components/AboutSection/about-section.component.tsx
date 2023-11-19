import React from 'react';

import { AboutSectionProps } from '.';
import { getArrayOfParagraphsByLineBreak } from '../../../../utils/string.utils';
import * as S from './about-section.styles';

const About: React.FC<AboutSectionProps> = ({ about }) => {
    return (
        <S.SectionContainer id='about'>
            <S.SectionContent>
                <h1 className='mb-0'>
                    <span className='mr-0'>{about.name}</span>
                    <span className='text-primary'> {about.lastName}</span>
                </h1>
                <div className='subheading mb-5'>
                    <a target='_blank' rel='noreferrer'>
                        {about.fone}
                    </a>{' '}
                    <a href={`mailto:${about.mail}`}>{about.mail}</a>
                </div>
                {getArrayOfParagraphsByLineBreak(about.introduction).map(
                    (paragraph) => (
                        <p>{paragraph}</p>
                    ),
                )}

                <div className='social-icons'>
                    <a
                        target='_blank'
                        className='social-icon'
                        href='https://www.linkedin.com/in/uisam00/'
                        rel='noreferrer'
                    >
                        <i className='fab fa-linkedin-in' />
                    </a>
                    <a
                        target='_blank'
                        className='social-icon'
                        href='https://github.com/uisam00'
                        rel='noreferrer'
                    >
                        <i className='fab fa-github' />
                    </a>
                </div>
            </S.SectionContent>
        </S.SectionContainer>
    );
};

export default About;
