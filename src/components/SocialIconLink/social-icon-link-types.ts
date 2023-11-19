import { DetailedHTMLProps, AnchorHTMLAttributes } from 'react';

import { IconProps } from '../Icon';

export interface SocialIconProps
    extends DetailedHTMLProps<
        AnchorHTMLAttributes<HTMLAnchorElement>,
        HTMLAnchorElement
    > {
    fSize?: string;
    icon: IconProps;
}
