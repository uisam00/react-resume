import React from 'react';

import { FixedBottomProps } from '.';
import * as S from './fixed-bottom-styles';

const FixedBottom: React.FC<FixedBottomProps> = ({ children, ...rest }) => {
    return (
        <S.FixedBottomContainer {...rest}>{children}</S.FixedBottomContainer>
    );
};

export default FixedBottom;
