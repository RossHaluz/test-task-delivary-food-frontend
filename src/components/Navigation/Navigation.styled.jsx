import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const MainNavigation = styled.nav`
  display: flex;
  gap: 20px;
`;

export const MainNavigationLink = styled(NavLink)`
  color: #030303;
  font-size: 18px;
  padding: 20px 0;

  &.active {
    color: orange;
  }
`;
