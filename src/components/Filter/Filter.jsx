import { useState } from 'react';
import { FilterBtnWrapper, FilterBtn } from './Filter.styled';

const Filter = ({ setCurrentCategory }) => {
  const [categories, setCategories] = useState([
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
      {categories.map(categorie => {
        return (
          <FilterBtn
            key={categorie.id}
            type="button"
            onClick={() => onClickShop(categorie.name)}
          >
            {categorie.name}
          </FilterBtn>
        );
      })}
    </FilterBtnWrapper>
  );
};

export default Filter;
