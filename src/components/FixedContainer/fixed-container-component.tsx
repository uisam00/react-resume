import React from 'react';

import { FixedContainerProps } from '.';
import * as S from './fixed-container-styles';

const FixedContainer: React.FC<FixedContainerProps> = ({
    children,
    ...rest
}) => {
    return <S.FixedContainer {...rest}>{children}</S.FixedContainer>;
};

export default FixedContainer;
