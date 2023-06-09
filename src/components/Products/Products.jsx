import ProductItem from '../ProductItem';
import { FoodsList, FoodListContainer } from './Products.styled';
import Filter from '../Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import {
  isLoading,
  selectCurrentPage,
  selectCurrentPageCategory,
  selectCurrentShop,
  selectFoods,
  selectPageQtyCategory,
  selectTotalPage,
} from 'redux/foods/selectors';
import { Oval } from 'react-loader-spinner';
import { Pagination, Stack, PaginationItem } from '@mui/material';
import {
  changeCurrentPage,
  changeCurrentPageCategory,
} from 'redux/foods/slice';
import { getFoodsCategory } from 'redux/foods/operetions';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Products = props => {
  const items = useSelector(selectFoods).foods;
  const isLoadingPage = useSelector(isLoading);
  const page = useSelector(selectCurrentPage);
  const pageQty = useSelector(selectTotalPage);
  const currentShop = useSelector(selectCurrentShop);
  const pageCategory = useSelector(selectCurrentPageCategory);
  const pageQtyCategory = useSelector(selectPageQtyCategory);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentShop === '') {
      return;
    }

    dispatch(getFoodsCategory({ pageCategory, currentShop }));
  }, [dispatch, pageCategory, currentShop]);

  return (
    <>
      {' '}
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
            items.map(({ title, img, desc, price, _id, count, favorite }) => {
              return (
                <ProductItem
                  key={_id}
                  id={_id}
                  title={title}
                  img={img}
                  desc={desc}
                  price={price}
                  count={count}
                  favorite={favorite}
                />
              );
            })
          )}
        </FoodsList>
      </FoodListContainer>
      <Stack m="0 auto" mt={5} mb={5}>
        {!!pageQty && currentShop === '' ? (
          <Pagination
            count={pageQty}
            page={page}
            onChange={(_, num) => dispatch(changeCurrentPage(num))}
            renderItem={item => {
              return (
                <PaginationItem
                  component={Link}
                  to={`/?page=${item.page}`}
                  {...item}
                />
              );
            }}
            showFirstButton
            showLastButton
          />
        ) : (
          <Pagination
            count={pageQtyCategory}
            page={pageCategory}
            onChange={(_, num) => dispatch(changeCurrentPageCategory(num))}
            renderItem={item => {
              return (
                <PaginationItem
                  component={Link}
                  to={`/?shop=${currentShop}&page=${item.page}`}
                  {...item}
                />
              );
            }}
            showFirstButton
            showLastButton
          />
        )}
      </Stack>
    </>
  );
};

export default Products;
