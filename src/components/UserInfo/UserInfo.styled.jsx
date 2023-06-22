import styled from '@emotion/styled';
import { Form, Field } from 'formik';
import { BiCamera } from 'react-icons/bi';

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

export const UserImgWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 15px;
margin: 0 auto;
align-items: center;
`


export const UserInfoEditPhoto = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`
export const UserInfoEditPhotoIcon = styled(BiCamera)`
font-size: 24px;
color: #1976d2;
cursor: pointer;
`
export const  UserInfoEditPhotoText = styled.p`
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`

export const UserImgCover = styled.div`
 display: flex;
 justify-content: center;
 border-radius: 50%;
 overflow: hidden;
 margin-top: 15px;
`

export const ImgAvatar = styled.img`
    display: block;
    width: 182px;
    height: 182px;
    border-radius: 40px;
    background-color: rgb(235, 235, 235);
    object-fit: cover;
`