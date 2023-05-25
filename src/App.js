import { Route, Routes } from 'react-router-dom';
import './App.css';
import SharedLoyout from './components/SharedLotout';
import { lazy, useEffect } from 'react';
import { getFoods } from 'redux/foods/operetions';
import { useDispatch } from 'react-redux';

const ProductsPage = lazy(() => import('../src/pages/ProductsPage'));
const CartPage = lazy(() => import('../src/pages/CartPage'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFoods());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedLoyout />}>
        <Route index element={<ProductsPage />} />
        <Route path="cart" element={<CartPage />} />
      </Route>
    </Routes>
  );
}

export default App;
