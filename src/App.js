import { Route, Routes } from 'react-router-dom';
import './App.css';
import SharedLoyout from './components/SharedLotout';
import { lazy, useEffect } from 'react';
import { getFoods } from 'redux/foods/operetions';
import { useDispatch, useSelector } from 'react-redux';
import { currentUser } from 'redux/auth/operetions';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import {
  RestrictedRoute,
  RestrictRouteSuccessOrder,
} from 'components/RestrictedRoute/RestrictedRoute';
import { selectCurrentPage} from 'redux/foods/selectors';

const ProductsPage = lazy(() => import('../src/pages/ProductsPage'));
const ProductPage = lazy(() => import('../src/pages/ProductPage'));
const CartPage = lazy(() => import('../src/pages/CartPage'));
const SuccessOrderPage = lazy(() => import('../src/pages/SuccessOrderPage'));
const RegisterPage = lazy(() => import('../src/pages/RegisterPage'));
const LoginPage = lazy(() => import('../src/pages/LoginPage'));
const UserPage = lazy(() => import('../src/pages/UserPage'));
const FavoritePage = lazy(() => import('../src/pages/FavoritePage'));

function App() {
  const page = useSelector(selectCurrentPage)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
    dispatch(getFoods({page}));
  }, [dispatch, page]);

  return (
    <Routes>
      <Route path="/" element={<SharedLoyout />}>
        <Route index element={<ProductsPage />} />
        <Route path="/:foodId" element={<ProductPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route
          path="success-order"
          element={
            <RestrictRouteSuccessOrder
              component={<SuccessOrderPage />}
              redirectTo="/"
            />
          }
        />
        <Route
          path="register"
          element={
            <RestrictedRoute component={<RegisterPage />} redirectTo="/user" />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute component={<LoginPage />} redirectTo="/user" />
          }
        />
        <Route
          path="user"
          element={
            <PrivateRoute component={<UserPage />} redirectTo="/login" />
          }
        />
        <Route path='favorite' element={<PrivateRoute component={<FavoritePage/>} redirectTo="/login"/>}/>
      </Route>
    </Routes>
  );
}

export default App;
