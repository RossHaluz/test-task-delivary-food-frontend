import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { delateFavoriteItem, getFavoriteFoods } from "redux/foods/operetions";
import { selectFavoriteFoods } from "redux/foods/selectors";
import { FavoriteList, FavoriteItem, FavoriteItemImg, FavoriteItemBtn } from "./Favorite.styled";

const Favorite = () => {
const dispatch = useDispatch();
const favorites = useSelector(selectFavoriteFoods);

useEffect(() => {
    dispatch(getFavoriteFoods())
}, [dispatch])

const handleDelateFavorite = (id) => {
dispatch(delateFavoriteItem(id))
}

    return <>
    <FavoriteList>
    {!!favorites?.data?.foods && favorites?.data?.foods.length === 0 ?  <h2>No add favorite item</h2> : !!favorites?.data?.foods && favorites?.data?.foods.map(({img, _id, title, desc, price}) => {
    return <FavoriteItem key={_id}>
        <FavoriteItemImg src={img} alt={title} width="330px" height="320px"/>
        <h2>{title}</h2>
        <h3>UAH: {price}</h3>
        <p>{desc}</p>
        <FavoriteItemBtn type="button" onClick={() => handleDelateFavorite(_id)}>Delate from favorite</FavoriteItemBtn>
    </FavoriteItem>
})}
</FavoriteList></>
}

export default Favorite;