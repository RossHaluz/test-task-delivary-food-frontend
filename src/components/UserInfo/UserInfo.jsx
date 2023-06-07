import ModalEditUserInfo from 'components/ModalEditUserInfo';
import { Formik, Field } from 'formik';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import {
  UserInfoForm,
  UserInfoLable,
  UserInfoWrapperr,
  UserInfoTitle,
} from './UserInfo.styled';

const UserInfo = () => {
  const user = useSelector(selectUser);
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(prev => !prev);
  };

  const initialValues = {
    name: user.name || '',
    email: user.email || '',
  };

  return (
    <>
      <UserInfoTitle>Information about user</UserInfoTitle>
      <UserInfoWrapperr>
        <Formik initialValues={initialValues}>
          <UserInfoForm>
            <UserInfoLable>
              Name
              <Field type="text" name="name" disabled />
            </UserInfoLable>
            <UserInfoLable>
              Email
              <Field type="email" name="email" disabled />
            </UserInfoLable>
            <button type="button" onClick={handleIsOpen}>
              Edit profile
            </button>
          </UserInfoForm>
        </Formik>
        {isOpen && <ModalEditUserInfo setIsOpen={setIsOpen} />}
      </UserInfoWrapperr>
    </>
  );
};

export default UserInfo;
