import styled from '@emotion/styled';
import { FaShoppingCart } from 'react-icons/fa';
import { MdFavorite } from 'react-icons/md';

export const AuthContainer = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;
  gap: 30px;
`;

export const AuthNavigation = styled.nav`
  display: flex;
  gap: 15px;
`;

export const AuthWrappre = styled.div`
  position: relative;
  display: flex;
  gap: 30px;
`;

export const IconCart = styled(FaShoppingCart)`
  color: #030303;
  font-size: 27px;
`;

export const QuantityCart = styled.div`
  position: absolute;
  top: 13px;
  left: 18px;
  background-color: orange;
  border-radius: 50%;
  padding: 5px;
  width: 8px;
  font-size: 14px;
  height: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 600;
`;


export const AuthNavigationWrapp = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`

export const AuthNavFavoriteIcon = styled(MdFavorite)`
  color: orange;
  font-size: 27px;

  &:hover{
    transform: scale(1.5);
  }
`