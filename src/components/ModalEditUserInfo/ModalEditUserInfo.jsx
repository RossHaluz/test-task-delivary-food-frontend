import React from 'react';
import { Backdrop, Modal } from './ModalEditUserInfo.styled';
import { Field, Form, Formik } from 'formik';
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
        <Formik
          initialValues={initialValues}
          onSubmit={value => {
            dispatch(editUser(value));
            setIsOpen(false);
          }}
        >
          <Form>
            <Field type="text" name="name" />
            <Field type="email" name="email" />
            <button type="submit">Edit</button>
          </Form>
        </Formik>
      </Modal>
    </Backdrop>
  );
};

export default ModalEditUserInfo;
