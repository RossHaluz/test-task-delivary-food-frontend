import styled from '@emotion/styled';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';

export const FoodItemWraperr = styled.div`
  position: relative;
`

export const FavoriteBtnIcon = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
`

export const FavoriteIcon = styled(MdFavorite)`
  color: orange;

  &:hover {
    transform: scale(1.5);
  }
`

export const SelectFavoriteIcon = styled(MdFavoriteBorder)`
  color: orange;

&:hover {
  transform: scale(1.5);
}
`

export const FoodItem = styled.li`
  flex-basis: calc((100% - 30px * (1 - 1)) / 1);

  @media (min-width: 768px) {
    flex-basis: calc((100% - 30px * (2 - 1)) / 2);
  }
  @media (min-width: 1280px) {
    flex-basis: calc((100% - 30px * (3 - 1)) / 3);
  }
`;

export const FoodItemDesc = styled.p`
  max-width: 440px;
`;

export const FoodItemBtn = styled.button`
  background: none;
  border: none;
  background-color: #2196f3;
  padding: 10px;
  border-radius: 10px;
  margin-top: 10px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;
