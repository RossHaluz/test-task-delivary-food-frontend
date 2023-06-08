import { useDispatch, useSelector } from 'react-redux';
import { isLoading, selectCurrentFood } from 'redux/foods/selectors';
import { toast } from 'react-hot-toast';
import { addItemToCart } from 'redux/orders/slice';
import {
  ProductDetailsWrapper,
  ProductDetailsBtn,
  GoBack,
} from './ProductDetails.styled';
import { useLocation } from 'react-router-dom';

const ProductDetails = () => {
  const curenctFood = useSelector(selectCurrentFood);
  const isPageLoading = useSelector(isLoading);
  const dispatch = useDispatch();
  const location = useLocation();

  const hendleAddOrder = () => {
    const { title, img, desc, price, _id, count } = curenctFood;
    dispatch(addItemToCart({ title, img, desc, price, _id, count }));
    toast.success('Success add');
  };

  return (
    <>
      {curenctFood && !isPageLoading && (
        <>
          <GoBack to={location.state.from}>Go back</GoBack>
          <ProductDetailsWrapper>
            <img src={curenctFood.img} alt="Product" />
            <div>
              <h1>{curenctFood.title}</h1>
              <p>{curenctFood.desc}</p>
              <h2>{curenctFood.price} UAH</h2>
              <ProductDetailsBtn type="button" onClick={hendleAddOrder}>
                Buy
              </ProductDetailsBtn>
            </div>
          </ProductDetailsWrapper>
        </>
      )}
    </>
  );
};

export default ProductDetails;
