import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1200;
`;

export const Modal = styled.div`
  padding: 20px;
  background-color: white;
  border-radius: 10px;
`;

export const ModalTitle = styled.h2`
  margin-bottom: 10px;
  text-align: center;
`;

export const ModalEditForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ModalEditField = styled(Field)`
  padding: 10px;
  font-size: 16px;
  border: none;
  background: whitesmoke;
  border-radius: 15px;
`;

export const ModalEditBtn = styled.button`
  padding: 10px;
  font-size: 16px;
  border: none;
  background-color: #1976d2;
  border-radius: 15px;
  color: white;
`;
