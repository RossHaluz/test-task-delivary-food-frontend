import { useState } from 'react';
import { FilterBtnWrapper, FilterBtn } from './Filter.styled';

const Filter = ({ setCurrentCategory, current }) => {
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
    setCurrentCategory(value);
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
              backgroundColor: current === name ? '#2196f3' : 'white',
              color: current === name ? 'white' : '#030303',
              fontWeight: current === name ? '600' : '400',
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
