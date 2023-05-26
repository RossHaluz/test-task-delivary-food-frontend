import { useDispatch } from 'react-redux';
import { FoodItem, FoodItemDesc, FoodItemBtn } from './ProductItem.styled';
import { addItemToCart } from 'redux/orders/slice';

const ProductItem = ({ title, img, desc, price, id }) => {
  const dispatch = useDispatch();
let amount = 1

  return (
    <FoodItem>
      <img src={img} alt={title} width="426" height="294px" />
      <div>
        <h2>{title}</h2>
        <FoodItemDesc>{desc}</FoodItemDesc>
      </div>
      <p>{price}</p>
      <FoodItemBtn
        type="button"
        onClick={() => dispatch(addItemToCart({ title, img, desc, price, id, amount }))}
      >
        Купити
      </FoodItemBtn>
    </FoodItem>
  );
};

export default ProductItem;
