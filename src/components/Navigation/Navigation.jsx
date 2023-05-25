// import { NavLink } from "react-router-dom";
import { MainNavigation, MainNavigationLink } from './Navigation.styled';

const Navigation = () => {
  return (
    <MainNavigation>
      <MainNavigationLink to="/">Catalog</MainNavigationLink>
      <MainNavigationLink to="cart">Cart</MainNavigationLink>
    </MainNavigation>
  );
};

export default Navigation;
