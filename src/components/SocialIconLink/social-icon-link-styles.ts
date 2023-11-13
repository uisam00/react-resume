import styled, { css } from 'styled-components';

import { SocialIconProps } from '.';

export const Link = styled.a<Omit<SocialIconProps, 'icon'>>`
  ${({ fSize }) => fSize && css` font-size: ${fSize}`}
`;
