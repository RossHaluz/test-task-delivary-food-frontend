import ProductItem from '../ProductItem';
import { FoodsList, FoodListContainer } from './Products.styled';
import Filter from '../Filter/Filter';
import { useSelector } from 'react-redux';
import { isLoading, selectFoods } from 'redux/foods/selectors';
import { useState } from 'react';
import { Oval } from 'react-loader-spinner';

const Products = () => {
  const items = useSelector(selectFoods);
  const isLoadingPage = useSelector(isLoading);
  const [current, setCurrent] = useState('Cook drive');

  const setCurrentCategory = value => {
    setCurrent(value);
  };

  return (
    <FoodListContainer>
      <Filter setCurrentCategory={setCurrentCategory} />
      <FoodsList>
        {isLoadingPage ? (
          <Oval
            height={80}
            width={80}
            color="#2196f3"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#2196f3"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        ) : (
          items
            .filter(item => item.name === current)
            .map(({ title, img, desc, price, _id, count }) => {
              return (
                <ProductItem
                  key={_id}
                  id={_id}
                  title={title}
                  img={img}
                  desc={desc}
                  price={price}
                  count={count}
                />
              );
            })
        )}
      </FoodsList>
    </FoodListContainer>
  );
};

export default Products;
