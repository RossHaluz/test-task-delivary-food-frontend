import { Suspense } from "react";
import AppBar from "../AppBar";
import { Outlet } from "react-router-dom";
import { HeaderContainer, MainContainer, Header } from "./SharedLotout.styled";

const SharedLoyout = () => {
  return (
    <>
      <Header>
        <HeaderContainer>
          <AppBar />
        </HeaderContainer>
      </Header>
      <MainContainer>
        <Suspense fallback={"Loading..."}>
          <Outlet />
        </Suspense>
      </MainContainer>
    </>
  );
};

export default SharedLoyout;
