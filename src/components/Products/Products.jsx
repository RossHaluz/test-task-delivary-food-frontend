import ProductItem from '../ProductItem';
import { FoodsList, FoodListContainer } from './Products.styled';
import Filter from '../Filter/Filter';
import { useSelector } from 'react-redux';
import { selectFoods } from 'redux/foods/selectors';
import { useState } from 'react';

const Products = () => {
  const items = useSelector(selectFoods);
  const [current, setCurrent] = useState('Cook drive');

  const setCurrentCategory = value => {
    setCurrent(value);
  };

  return (
    <FoodListContainer>
      <Filter setCurrentCategory={setCurrentCategory} />
      <FoodsList>
        {items &&
          items
            .filter(item => item.name === current)
            .map(({ title, img, desc, price, _id }) => {
              return (
                <ProductItem
                  key={_id}
                  id={_id}
                  title={title}
                  img={img}
                  desc={desc}
                  price={price}
                />
              );
            })}
      </FoodsList>
    </FoodListContainer>
  );
};

export default Products;
