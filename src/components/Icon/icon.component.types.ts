import { IconName } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

export interface IconProps extends Omit<FontAwesomeIconProps, 'icon'> {
    iconName: IconName;
    iconType?: 'fas' | 'far' | 'fab';
}
