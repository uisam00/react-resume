import styled from 'styled-components';

export const Container = styled.div``;

export const ListIconItem = styled.li<{ iconColor: string }>`
  svg {
    fill: ${({ iconColor }) => iconColor};
  }
  svg [fill="main"] {
    fill: ${({ iconColor }) => iconColor};
  }

  svg [stroke="main"] {
    stroke: ${({ iconColor }) => iconColor};
  }

  svg [fill="neutral"] {
    fill: ${({ theme }) => theme.colors.background};
  }

  svg [stopColor="main"] {
    stopColor: ${({ theme }) => theme.colors.background};
  }


`;
