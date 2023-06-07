import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoging } from 'redux/auth/selectors';
import { selectSuccessOrder } from 'redux/orders/selectors';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoging = useSelector(selectIsLoging);

  return isLoging ? <Navigate to={redirectTo} /> : Component;
};

export const RestrictRouteSuccessOrder = ({
  component: Component,
  redirectTo = '/',
}) => {
  const successOrder = useSelector(selectSuccessOrder);

  return !successOrder ? <Navigate to={redirectTo} /> : Component;
};
