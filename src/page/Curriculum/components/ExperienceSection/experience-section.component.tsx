import React from 'react';

import { ExperienceSectionProps } from '.';
import { ExperienceStatus } from '../../../../enums';
import { getArrayOfParagraphsByLineBreak } from '../../../../utils/string.utils';
import { Section } from '../Section';
import * as S from './experience-section.styles';

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
    experiences = [],
}) => {
    return (
        <Section title='Experiências' id='experience'>
            {experiences.map((experience) => (
                <div
                    data-aos='fade-left'
                    className='d-flex flex-column flex-md-row justify-content-between mb-5'
                >
                    <div className='flex-grow-1'>
                        <h3 className='mb-0'>{experience.role}</h3>
                        <div className='subheading mb-0'>
                            {experience.company}
                        </div>
                        {experience.level && (
                            <div className='mb-3'>{experience.level}</div>
                        )}
                        <p>
                            {getArrayOfParagraphsByLineBreak(
                                experience.resume,
                            ).map((paragraph) => (
                                <p>{paragraph}</p>
                            ))}
                        </p>
                    </div>
                    <div className='flex-shrink-0'>
                        <span className='text-primary'>
                            {experience.period.start} -{' '}
                            {experience.period.status ===
                            ExperienceStatus.Finish
                                ? experience.period.end ||
                                  experience.period.status
                                : experience.period.status}
                        </span>
                    </div>
                </div>
            ))}
        </Section>
    );
};

export default ExperienceSection;
