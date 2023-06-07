import styled from '@emotion/styled';
import { Form } from 'formik';

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
