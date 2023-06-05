import { NavLink } from 'react-router-dom';
import { AuthWrappre, IconCart, QuantityCart } from './AuthNav.styled';
import { selectCartQuantity, selectOrders } from 'redux/orders/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCartTotal } from 'redux/orders/slice';

const AuthNav = () => {
  const quantity = useSelector(selectCartQuantity);
  const orders = useSelector(selectOrders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [orders, dispatch]);

  return (
    <AuthWrappre>
      <NavLink to="cart">
        <IconCart />
        <QuantityCart>{quantity}</QuantityCart>
      </NavLink>
    </AuthWrappre>
  );
};

export default AuthNav;
