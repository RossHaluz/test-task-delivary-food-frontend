import ProductItem from '../ProductItem';
import { FoodsList, FoodListContainer } from './Products.styled';
import Filter from '../Filter/Filter';
import { useSelector } from 'react-redux';
import { isLoading, selectFoods } from 'redux/foods/selectors';
import { Oval } from 'react-loader-spinner';

const Products = () => {
  const items = useSelector(selectFoods).foods;
  const isLoadingPage = useSelector(isLoading);

  return (
    <FoodListContainer>
      <Filter />
      <FoodsList>
        {isLoadingPage && !items ? (
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
          items.map(({ title, img, desc, price, _id, count }) => {
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
