import styled from 'styled-components';

import { FixedContainerProps } from '.';

interface PositionStyles {
    [key: string]: string;
}

const positionStyles: PositionStyles = {
    topLeft: `
    top: 0;
    left: 0;
  `,
    bottomLeft: `
    bottom: 0;
    left: 0;
  `,
    topRight: `
    top: 0;
    right: 0;
  `,
    bottomRight: `
    bottom: 0;
    right: 0;
  `,
};

export const FixedContainer = styled.div<FixedContainerProps>`
  position: fixed;
  z-index: 1030;

  ${({ position }) => positionStyles[position] || ''}
`;
