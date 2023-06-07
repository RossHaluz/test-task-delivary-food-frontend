import { Route, Routes } from 'react-router-dom';
import './App.css';
import SharedLoyout from './components/SharedLotout';
import { lazy, useEffect } from 'react';
import { getFoods } from 'redux/foods/operetions';
import { useDispatch } from 'react-redux';
import { currentUser } from 'redux/auth/operetions';

const ProductsPage = lazy(() => import('../src/pages/ProductsPage'));
const CartPage = lazy(() => import('../src/pages/CartPage'));
const SuccessOrderPage = lazy(() => import('../src/pages/SuccessOrderPage'));
const RegisterPage = lazy(() => import('../src/pages/RegisterPage'));
const LoginPage = lazy(() => import('../src/pages/LoginPage'));
const UserPage = lazy(() => import('../src/pages/UserPage'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
    dispatch(getFoods());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedLoyout />}>
        <Route index element={<ProductsPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="success-order" element={<SuccessOrderPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="user" element={<UserPage />} />
      </Route>
    </Routes>
  );
}

export default App;
