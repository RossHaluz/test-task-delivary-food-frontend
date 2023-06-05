import { useDispatch } from 'react-redux';
import { FoodItem, FoodItemDesc, FoodItemBtn } from './ProductItem.styled';
import { addItemToCart } from 'redux/orders/slice';
import { toast } from 'react-hot-toast';

const ProductItem = ({ title, img, desc, price, id, count }) => {
  const dispatch = useDispatch();

  const handleAddItemToCart = () => {
    dispatch(addItemToCart({ title, img, desc, price, id, count }));
    toast.success('Success add');
  };

  return (
    <>
      <FoodItem>
        <img src={img} alt={title} width="426" height="294px" />
        <div>
          <h2>{title}</h2>
          <FoodItemDesc>{desc}</FoodItemDesc>
        </div>
        <p>{price}</p>
        <FoodItemBtn type="button" onClick={handleAddItemToCart}>
          Купити
        </FoodItemBtn>
      </FoodItem>
    </>
  );
};

export default ProductItem;
