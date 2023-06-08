import ProductDetails from 'components/ProductDetails';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getFood } from 'redux/foods/operetions';

const ProductPage = () => {
  const { foodId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFood(foodId));
  }, [dispatch, foodId]);

  return <ProductDetails />;
};

export default ProductPage;
