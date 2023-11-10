import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0 30px;

  ${({ theme }) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.text};
  `}
`;
