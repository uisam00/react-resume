import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { SkillSectionProps } from '.';
import { HtmlByUrl } from '../../../../components/HtmlByUrl';
import { Icon } from '../../../../components/Icon';
import { PowerfulContainer } from '../../../../components/PowerfulContainer';
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
                                !!skill.icon &&
                                (Array.isArray(skill.icon) ? (
                                    skill.icon.map((i, indexJ) => (
                                        <S.ListIconItem
                                            key={`skill-icon-${index}-${indexJ}`}
                                            className='list-inline-item'
                                            iconColor={iconColor}
                                        >
                                            <PowerfulContainer classToChildren='svg-inline--fa fa-node-js fa-w-14'>
                                                {i}
                                            </PowerfulContainer>
                                        </S.ListIconItem>
                                    ))
                                ) : (
                                    <S.ListIconItem
                                        key={`skill-icon-${index}`}
                                        className='list-inline-item'
                                        iconColor={iconColor}
                                    >
                                        <PowerfulContainer classToChildren='svg-inline--fa fa-node-js fa-w-14'>
                                            {skill.icon}
                                        </PowerfulContainer>
                                    </S.ListIconItem>
                                )),
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
