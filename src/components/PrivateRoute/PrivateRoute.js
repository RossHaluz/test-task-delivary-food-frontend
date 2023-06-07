import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoging, selectIsRefreshing } from 'redux/auth/selectors';

const PrivateRoute = ({ component: Component, redirectTo }) => {
  const isLoging = useSelector(selectIsLoging);
  const isRefrashing = useSelector(selectIsRefreshing);
  const shouldRedirect = !isLoging && !isRefrashing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;
