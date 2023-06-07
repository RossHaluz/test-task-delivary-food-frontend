import React from 'react';
import {
  Backdrop,
  Modal,
  ModalTitle,
  ModalEditForm,
  ModalEditField,
  ModalEditBtn,
} from './ModalEditUserInfo.styled';
import { Formik } from 'formik';
import { selectUser } from 'redux/auth/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { editUser } from 'redux/auth/operetions';

const ModalEditUserInfo = ({ setIsOpen }) => {
  const dispatch = useDispatch();
  const { name, email } = useSelector(selectUser);

  const initialValues = {
    name: name,
    email: email,
  };

  const onCloseEditModal = e => {
    if (e.currentTarget === e.target) {
      setIsOpen(false);
    }
  };

  return (
    <Backdrop onClick={onCloseEditModal}>
      <Modal>
        <ModalTitle>Edit profile</ModalTitle>
        <Formik
          initialValues={initialValues}
          onSubmit={value => {
            setIsOpen(false);
            dispatch(editUser(value));
          }}
        >
          <ModalEditForm>
            <ModalEditField type="text" name="name" />
            <ModalEditField type="email" name="email" />
            <ModalEditBtn type="submit">Edit</ModalEditBtn>
          </ModalEditForm>
        </Formik>
      </Modal>
    </Backdrop>
  );
};

export default ModalEditUserInfo;
