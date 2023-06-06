import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { UserManuWrapper, UserManuIcon } from './UserMenu.styled';

const UserManu = () => {
  const user = useSelector(selectUser);
  console.log(user);

  return (
    <UserManuWrapper>
      <UserManuIcon />
      <h3>Welcome, {user.name}</h3>
    </UserManuWrapper>
  );
};

export default UserManu;
