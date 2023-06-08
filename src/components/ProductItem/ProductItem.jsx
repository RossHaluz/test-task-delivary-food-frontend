import { useDispatch } from 'react-redux';
import { FoodItem, FoodItemDesc, FoodItemBtn } from './ProductItem.styled';
import { addItemToCart } from 'redux/orders/slice';
import { toast } from 'react-hot-toast';
import { NavLink, useLocation } from 'react-router-dom';

const ProductItem = ({ title, img, desc, price, id, count }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const handleAddItemToCart = () => {
    dispatch(addItemToCart({ title, img, desc, price, id, count }));
    toast.success('Success add');
  };

  return (
    <>
      <FoodItem>
        <NavLink to={`/${id}`} state={{ from: location }}>
          <img src={img} alt={title} width="426" height="294px" />
          <div>
            <h2>{title}</h2>
            <FoodItemDesc>{desc}</FoodItemDesc>
          </div>
        </NavLink>
        <p>{price} UAH</p>
        <FoodItemBtn type="button" onClick={handleAddItemToCart}>
          Buy
        </FoodItemBtn>
      </FoodItem>
    </>
  );
};

export default ProductItem;
