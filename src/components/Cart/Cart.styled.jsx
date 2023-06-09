import styled from '@emotion/styled';

export const CartContainer = styled.div`
  display: flex;
  gap: 40px;
  margin: 0 auto;
  margin-top: 30px;
`;

export const CartOrdersList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const CartOrderItem = styled.li`
  display: flex;
  gap: 20px;
  max-width: 150px;
`;

export const OrderDesc = styled.p`
  margin-top: auto;
`;

export const CartOrderDesc = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  width: 200px;
`;

export const CartOrderDescContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
export const CartOrderDescWrrapper = styled.div`
  display: flex;
`;

export const BtnDeleteOrder = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: #030303;

  :hover,
  :focus {
    transform: scale(1.2);
  }
`;


export const TotalPrice = styled.h3`
      margin-left: auto;
    margin-top: 35px;
`