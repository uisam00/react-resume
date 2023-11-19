import styled from 'styled-components';

export const SectionContainer = styled.section`

  @media print {
    page-break-before: always;
  }

  display: flex;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 5rem;
  padding-bottom: 5rem;
  max-width: 75rem;

  @media (min-width: 768px) {
    min-height: 100vh;
  }
  @media (min-width: 992px) {
    padding-left: 3rem;
    padding-right: 3rem;
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
`;

export const SectionContent = styled.div`
  width: 100%;
`;
