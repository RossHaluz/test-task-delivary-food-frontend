// import { NavLink } from "react-router-dom";
import { MainNavigation, MainNavigationLink } from './Navigation.styled';

const Navigation = () => {
  return (
    <MainNavigation>
      <MainNavigationLink to="/">Catalog</MainNavigationLink>
    </MainNavigation>
  );
};

export default Navigation;
