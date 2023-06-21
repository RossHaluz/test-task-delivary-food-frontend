// import ModalEditUserInfo from 'components/ModalEditUserInfo';
// import { Formik } from 'formik';
// import { useRef, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectAvatar, selectUser } from 'redux/auth/selectors';
// import {
//   UserInfoForm,
//   UserInfoLable,
//   UserInfoWrapperr,
//   UserInfoTitle,
//   UserInfoField,
//   UserInfoBtn,
//   UserImgWrapper,
//   UserInfoEditPhoto,
//   UserInfoEditPhotoIcon,
//   UserInfoEditPhotoText
// } from './UserInfo.styled';
// import { updateAvatar } from 'redux/auth/operetions';
// import defaultAvatar from '../../default-avatar.jpeg'

// const UserInfo = () => {
//   const user = useSelector(selectUser);
//   const avatar = useSelector(selectAvatar);
//   const [isOpen, setIsOpen] = useState(false);
//   const dispatch = useDispatch();
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [isEditingPhoto, setIsEditingPhoto] = useState(false);
//   const fileInputRef = useRef(null);


//   const handleIsOpen = () => {
//     setIsOpen(prev => !prev);
//   };

//   const initialValues = {
//     name: user.name || '',
//     email: user.email || '',
//   };

//   const handleChange = e => {
//     setSelectedFile(e.target.files[0]);

//     const formData = new FormData();
//     formData.append('avatar', selectedFile);
//     dispatch(updateAvatar(formData));
//   };

// const handleEditPhoto = () => {
// setIsEditingPhoto(true);
// fileInputRef.current.click();
// }

//   const handleUpload = () => {
//     if (!selectedFile) {
//       alert('Please select a file');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('avatar', selectedFile);
//     dispatch(updateAvatar(formData));
//   };

//   return (
//     <>
//       <UserInfoTitle>Information about user</UserInfoTitle>
//       <UserImgWrapper>
//       {selectedFile ? (
//           <img src={URL.createObjectURL(selectedFile)} alt="" width="200" />
//         ) : (
//           <img src={avatar || defaultAvatar} alt="" width="200" />
//         )}
//        <UserInfoEditPhoto> <UserInfoEditPhotoIcon onClick={handleEditPhoto}/> <UserInfoEditPhotoText onClick={handleEditPhoto}>Edit photo</UserInfoEditPhotoText></UserInfoEditPhoto>
//       <input
//           type="file"
//           ref={fileInputRef}
//           style={{display: 'none'}}
//           accept="image/*,.png,.jpg,.web"
//           onChange={handleChange}
//         />
//         </UserImgWrapper>
//       <UserInfoWrapperr>
//         <Formik initialValues={initialValues}>
//           <UserInfoForm>
//             <UserInfoLable>
//               Name
//               <UserInfoField type="text" name="name" disabled />
//             </UserInfoLable>
//             <UserInfoLable>
//               Email
//               <UserInfoField type="email" name="email" disabled />
//             </UserInfoLable>
//             <UserInfoBtn type="button" onClick={handleIsOpen}>
//               Edit profile
//             </UserInfoBtn>
//           </UserInfoForm>
//         </Formik>
//         {isOpen && <ModalEditUserInfo setIsOpen={setIsOpen} />}
//       </UserInfoWrapperr>
//     </>
//   );
// };

// export default UserInfo;
