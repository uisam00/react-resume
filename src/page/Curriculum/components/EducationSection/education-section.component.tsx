import React from 'react';

import { EducationStatus } from '../../../../enums/education.enum';
import { Section } from '../Section';
import * as S from './education-section.styles';
import { EducationSectionProps } from './education-section.types';

const EducationSection: React.FC<EducationSectionProps> = ({
    educationItems = [],
}) => {
    return (
        <Section title='Educação' id='education'>
            {educationItems.map((ei) => (
                <div
                    data-aos='fade-left'
                    className='d-flex flex-column flex-md-row justify-content-between mb-5'
                >
                    <div className='flex-grow-1'>
                        <h3 className='mb-0'>{ei.course}</h3>
                        <div className='subheading mb-3'>{ei.institution}</div>
                        <div>{ei.city}</div>
                        <div>{ei.period.status}</div>
                    </div>
                    <div className='flex-shrink-0'>
                        <span className='text-primary'>{`${ei.period.start} - ${
                            ei.period.status === EducationStatus.InProgress
                                ? EducationStatus.InProgress
                                : ei.period.end || ei.period.status
                        }`}</span>
                    </div>
                </div>
            ))}
        </Section>
    );
};

export default EducationSection;
