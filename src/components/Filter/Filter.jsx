import { useState } from 'react';
import { FilterBtnWrapper, FilterBtn } from './Filter.styled';
import { useSearchParams } from 'react-router-dom';
import { getFoodsCategory } from 'redux/foods/operetions';
import { useDispatch } from 'react-redux';
import { setShopName } from 'redux/foods/slice';

const Filter = ({ current }) => {
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();
  const category = query.get('shop');
  const [categories] = useState([
    {
      id: 1,
      name: 'Kegler',
    },
    {
      id: 2,
      name: 'Green House',
    },
    {
      id: 3,
      name: 'Dioscuri Mini',
    },
    {
      id: 4,
      name: 'Cook drive',
    },
  ]);

  const onClickShop = value => {
    setQuery({ shop: value });
    dispatch(getFoodsCategory(category));
    dispatch(setShopName(value))
  };

  return (
    <FilterBtnWrapper>
      <h3>Shops</h3>
      {categories.map(({ id, name }) => {
        return (
          <FilterBtn
            key={id}
            type="button"
            style={{
              backgroundColor: category === name ? '#2196f3' : 'white',
              color: category === name ? 'white' : '#030303',
              fontWeight: category === name ? '600' : '400',
            }}
            onClick={() => onClickShop(name)}
          >
            {name}
          </FilterBtn>
        );
      })}
    </FilterBtnWrapper>
  );
};

export default Filter;
