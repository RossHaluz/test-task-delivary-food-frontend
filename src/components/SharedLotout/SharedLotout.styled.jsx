import styled from '@emotion/styled';

export const HeaderContainer = styled.div`
  display: flex;
  width: 480px;
  margin: 0 auto;
  align-items: center;

  @media (min-width: 768px) {
    width: 768px;
  }

  @media (min-width: 1280px) {
    width: 1280px;
  }
`;

export const MainContainer = styled.div`
  width: 480px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 768px;
  }
  @media (min-width: 1280px) {
    display: flex;
    width: 1280px;
  }
`;

export const Header = styled.header`
  border-bottom: 1px solid #030303;
`;
