import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const UserInfoWrapperr = styled.div`
  display: flex;
  justify-content: center;
`;

export const UserInfoForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 350px;
  margin-top: 30px;
`;

export const UserInfoLable = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const UserInfoTitle = styled.h2`
  text-align: center;
  margin-top: 30px;
  font-size: 27px;
`;

export const UserInfoField = styled(Field)`
  padding: 20px;
  font-size: 16px;
  border-radius: 15px;
  border: none;
  background-color: whitesmoke;
`;

export const UserInfoBtn = styled.button`
  background-color: #1976d2;
  font-size: 16px;
  color: white;
  padding: 20px;
  border: none;
  border-radius: 15px;
`;
