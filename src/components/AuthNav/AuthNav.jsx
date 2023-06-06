import { NavLink } from 'react-router-dom';
import {
  AuthWrappre,
  IconCart,
  QuantityCart,
  AuthContainer,
  AuthNavigation,
} from './AuthNav.styled';
import { selectCartQuantity, selectOrders } from 'redux/orders/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCartTotal } from 'redux/orders/slice';
import UserManu from 'components/UserMenu';
import { selectIsLoging } from 'redux/auth/selectors';

const AuthNav = () => {
  const quantity = useSelector(selectCartQuantity);
  const orders = useSelector(selectOrders);
  const dispatch = useDispatch();
  const isLoging = useSelector(selectIsLoging);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [orders, dispatch]);

  return (
    <AuthContainer>
      {isLoging ? (
        <UserManu />
      ) : (
        <AuthNavigation>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Login</NavLink>
        </AuthNavigation>
      )}
      <AuthWrappre>
        <NavLink to="cart">
          <IconCart />
          <QuantityCart>{quantity}</QuantityCart>
        </NavLink>
      </AuthWrappre>
    </AuthContainer>
  );
};

export default AuthNav;
