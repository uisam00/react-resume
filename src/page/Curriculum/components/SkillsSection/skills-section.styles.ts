import styled from 'styled-components';

export const Container = styled.div``;

export const ListIconItem = styled.li<{ iconColor: string }>`
  svg [fill]:not([fill="none"]):not([fill="#ffffff"]):not([fill="#fff"]):not([fill="white"]) {
    fill: ${({ iconColor }) => iconColor};
  }
  svg {
    fill: ${({ iconColor }) => iconColor};
  }
`;
