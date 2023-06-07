import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoging } from 'redux/auth/selectors';

const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoging = useSelector(selectIsLoging);

  return isLoging ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;
