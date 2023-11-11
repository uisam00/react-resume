import React from 'react';

import { FixedBottom } from '../../components/FixedBottom';
import { SocialIconLink } from '../../components/SocialIconLink';
import * as S from './curriculum-styles';

const CurriculumPage: React.FC = React.memo(() => {
    return (
        <S.Container id='page-top'>
            <FixedBottom className='text-right p-2'>
                <SocialIconLink
                    fSize='300%'
                    icon={{ iconName: 'whatsapp', iconType: 'fab' }}
                />
            </FixedBottom>
        </S.Container>
    );
});

export default CurriculumPage;
