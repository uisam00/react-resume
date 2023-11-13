import React from 'react';

import { AwardsSectionProps } from '.';
import { Icon } from '../../../../components/Icon';
import { Section } from '../Section';
import * as S from './awards-section.styles';

const AwardsSection: React.FC<AwardsSectionProps> = ({ awards = [] }) => {
    return (
        <Section title='Certificados' id='awards'>
            <ul data-aos='fade-left' className='fa-ul mb-0'>
                {awards.map((award) => (
                    <li>
                        <span className='fa-li'>
                            <Icon
                                className='text-warning'
                                iconName='trophy'
                                iconType='fas'
                            />
                        </span>
                        {award.name}
                    </li>
                ))}
            </ul>
        </Section>
    );
};

export default AwardsSection;
