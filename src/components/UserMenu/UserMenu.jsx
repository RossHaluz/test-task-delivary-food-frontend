import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { UserManuWrapper, UserManuIcon } from './UserMenu.styled';
import { logout } from 'redux/auth/operetions';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const UserManu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <UserManuWrapper>
      <UserManuIcon />
      <h3>
        Welcome, <Link to="/user">{user.name}</Link>
      </h3>
      <Button
        variant="contained"
        type="button"
        onClick={() => dispatch(logout())}
      >
        Logout
      </Button>
    </UserManuWrapper>
  );
};

export default UserManu;
