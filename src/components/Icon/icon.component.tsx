import { findIconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { IconProps } from '.';

const Icon: React.FC<IconProps> = ({ iconName, iconType = 'fas', ...rest }) => {
    const iconDefinition = findIconDefinition({ prefix: iconType, iconName });

    if (!iconDefinition) {
        console.error(
            `Ícone '${iconName}' não encontrado para o tipo '${iconType}'.`,
        );
        return null;
    }

    return <FontAwesomeIcon {...rest} icon={iconDefinition} />;
};

export default Icon;
