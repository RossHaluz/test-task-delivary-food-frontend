import ModalEditUserInfo from 'components/ModalEditUserInfo';
import { Formik } from 'formik';
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import {
  UserInfoForm,
  UserInfoLable,
  UserInfoWrapperr,
  UserInfoTitle,
  UserInfoField,
  UserInfoBtn,
  UserImgWrapper,
  UserInfoEditPhoto,
  UserInfoEditPhotoIcon,
  UserInfoEditPhotoText,
  UserImgCover,
  ImgAvatar
} from './UserInfo.styled';
import defaultAvatar from '../../default-avatar.jpeg';
import { editUser } from 'redux/auth/operetions';

const UserInfo = () => {
  const user = useSelector(selectUser);
  const { avatarUrl } = useSelector(selectUser);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const [selectedFile, setSelectedFile] = useState(null);
  const [isEditingPhoto, setIsEditingPhoto] = useState(false);
  const fileInputRef = useRef(null);


  const handleIsOpen = () => {
    setIsOpen(prev => !prev);
  };

  const initialValues = {
    name: user.name || '',
    email: user.email || '',
  };

  const handleChange = e => {
    setSelectedFile(e.target.files[0]);
    setIsEditingPhoto(false);
    const formData = new FormData();
    formData.append('avatar', selectedFile);
    dispatch(editUser(formData));
  };

  console.log(avatarUrl);

  const handleEditPhoto = () => {
    setIsEditingPhoto(true);
    fileInputRef.current.click();
  };

  return (
    <>
      <UserInfoTitle>Information about user</UserInfoTitle>
      <UserImgWrapper>
        <UserImgCover>
        {selectedFile && isEditingPhoto ? (
          <ImgAvatar src={URL.createObjectURL(selectedFile)} alt="Avatar" />
        ) : (
          <ImgAvatar src={`https://fooddelivery-y6s0.onrender.com/${avatarUrl}` || defaultAvatar} alt="Avatar" />
        )}
        </UserImgCover>
        <UserInfoEditPhoto>
          <UserInfoEditPhotoIcon onClick={handleEditPhoto} />
          <UserInfoEditPhotoText onClick={handleEditPhoto}>
            Edit photo
          </UserInfoEditPhotoText>
        </UserInfoEditPhoto>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          accept="image/*,.png,.jpg,.web"
          onChange={handleChange}
        />
      </UserImgWrapper>
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
