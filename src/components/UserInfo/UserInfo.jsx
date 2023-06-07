import ModalEditUserInfo from 'components/ModalEditUserInfo';
import { Formik } from 'formik';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import {
  UserInfoForm,
  UserInfoLable,
  UserInfoWrapperr,
  UserInfoTitle,
  UserInfoField,
  UserInfoBtn,
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
              <UserInfoField type="text" name="name" disabled />
            </UserInfoLable>
            <UserInfoLable>
              Email
              <UserInfoField type="email" name="email" disabled />
            </UserInfoLable>
            <UserInfoBtn type="button" onClick={handleIsOpen}>
              Edit profile
            </UserInfoBtn>
          </UserInfoForm>
        </Formik>
        {isOpen && <ModalEditUserInfo setIsOpen={setIsOpen} />}
      </UserInfoWrapperr>
    </>
  );
};

export default UserInfo;
