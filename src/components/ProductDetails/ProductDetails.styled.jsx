import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const ProductDetailsWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 30px;
  align-items: flex-start;
`;

export const ProductDetailsBtn = styled.button`
  margin-top: 15px;
  background: none;
  border: none;
  font-size: 16px;
  background-color: #1976d2;
  width: 100px;
  padding: 10px;
  border-radius: 10px;
  color: white;
  cursor: pointer;
`;

export const GoBack = styled(NavLink)`
  margin-top: 30px;
  color: #030303;
  font-size: 18px;
  font-weight: 600;
`;
