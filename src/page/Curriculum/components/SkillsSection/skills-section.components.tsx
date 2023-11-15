import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { SkillSectionProps } from '.';
import { HtmlByUrl } from '../../../../components/HtmlByUrl';
import { Icon } from '../../../../components/Icon';
import { replaceNonMatchingAttributes } from '../../../../utils/html';
import { Section } from '../Section';
import * as S from './skills-section.styles';

const SkillsSection: React.FC<SkillSectionProps> = ({ skillsGroup }) => {
    const { colors } = useContext(ThemeContext);

    const iconColor = colors.secondary;
    return (
        <Section title='Skills' id='skills'>
            {skillsGroup.map((group) => (
                <>
                    <div data-aos='fade-left' className='subheading mb-3'>
                        {group.type}
                    </div>
                    <ul data-aos='fade-left' className='list-inline dev-icons'>
                        {group.skills.map(
                            (skill, index) =>
                                !!skill.iconUrl && (
                                    <S.ListIconItem
                                        key={`skill-icon-${index}`}
                                        className='list-inline-item'
                                        iconColor={iconColor}
                                    >
                                        <HtmlByUrl
                                            classToChildren='svg-inline--fa fa-node-js fa-w-14'
                                            src={skill.iconUrl}
                                            handleHtmlString={(html) => {
                                                return replaceNonMatchingAttributes(
                                                    html,
                                                    iconColor,
                                                );
                                            }}
                                        />
                                    </S.ListIconItem>
                                ),
                        )}
                    </ul>
                    <ul data-aos='fade-left' className='fa-ul mb-5'>
                        {group.skills.map((skill, index) => (
                            <li>
                                <span
                                    key={`skill-name-${index}`}
                                    className='fa-li'
                                >
                                    <Icon iconType='fas' iconName='check' />
                                </span>
                                {skill.name}
                            </li>
                        ))}
                    </ul>
                </>
            ))}
        </Section>
    );
};

export default SkillsSection;
