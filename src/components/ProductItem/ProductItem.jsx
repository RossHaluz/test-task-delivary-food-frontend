import { useDispatch, useSelector } from 'react-redux';
import { FoodItem, FoodItemDesc, FoodItemBtn, FavoriteIcon, FoodItemWraperr, FavoriteBtnIcon, SelectFavoriteIcon } from './ProductItem.styled';
import { addItemToCart } from 'redux/orders/slice';
import { toast } from 'react-hot-toast';
import { NavLink, useLocation } from 'react-router-dom';
import { delateFavoriteItem, setFavoriteFood } from 'redux/foods/operetions';
import { selectIsLoging, selectUser } from 'redux/auth/selectors';
import { useState } from 'react';


const ProductItem = ({ title, img, desc, price, id, count, favorite }) => {
  const dispatch = useDispatch();
  const location = useLocation();
const {_id: userId} = useSelector(selectUser)
  const isLogin = useSelector(selectIsLoging);
  const [isFavorite, setIsFavorite] = useState(favorite.includes(userId))


  const toggleFavoriteItem = (foodId) => {
    if(isLogin){
      if(!isFavorite){
      dispatch(setFavoriteFood(foodId))
      setIsFavorite(!isFavorite)
      toast.success('Add item to favorite')
      }else{
        dispatch(delateFavoriteItem(foodId))
        setIsFavorite(!isFavorite)
        toast.success("Remove item from favorite")
      }
    }else{
      toast.error('You should be autorization')
    }
  }

  const handleAddItemToCart = () => {
    dispatch(addItemToCart({ title, img, desc, price, id, count }));
    toast.success('Success add');
  };

  return (
    <FoodItemWraperr>
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
      <FavoriteBtnIcon type='button' onClick={() => toggleFavoriteItem(id)}>
        {isFavorite ? <FavoriteIcon/> :<SelectFavoriteIcon/>  }
      </FavoriteBtnIcon>
    </FoodItemWraperr>
  );
};

export default ProductItem;
