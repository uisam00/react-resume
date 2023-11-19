import styled from 'styled-components';

import { FixedContainer } from '../../components/FixedContainer';

export const UrlLink = styled.a`
  display: none;

  @media print {
    display: block;
  }
`;
export const FixedLinksContainer = styled(FixedContainer)`
  @media print {
    display: flex;
    flex-direction: row;
    align-items: end;
    justify-content: space-between;
    width: 100%;
  }
`;
export const Container = styled.div`
  display: flex;
  background: ${({ theme }) => theme.colors.background};


`;
