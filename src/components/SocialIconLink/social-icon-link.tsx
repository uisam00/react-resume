import React from 'react';

import { SocialIconProps } from '.';
import { Icon } from '../Icon';
import * as S from './social-icon-link-styles';

const SocialIconLink: React.FC<SocialIconProps> = ({ icon, ...rest }) => {
    return (
        <S.Link {...rest}>
            <Icon {...icon} />
        </S.Link>
    );
};

export default SocialIconLink;
