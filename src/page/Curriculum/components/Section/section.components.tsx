import React from 'react';

import { SectionProps } from '.';
import * as S from './section.styles';

const Section: React.FC<SectionProps> = ({ title, children, ...rest }) => {
    return (
        <S.SectionContainer {...rest}>
            <S.SectionContent>
                {title && (
                    <h2 data-aos='fade-right' className='mb-5'>
                        {title}
                    </h2>
                )}
                {children}
            </S.SectionContent>
        </S.SectionContainer>
    );
};

export default Section;
