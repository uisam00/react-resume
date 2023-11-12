import styled from 'styled-components';

export const NavContainer = styled.nav.attrs({
    className: 'navbar navbar-expand-lg navbar-dark fixed-top',
})`
  background-color: ${({ theme }) => theme.colors.primary} !important;
`;
