import { Suspense } from 'react';
import AppBar from '../AppBar';
import { Outlet } from 'react-router-dom';
import { HeaderContainer, MainContainer, Header } from './SharedLotout.styled';
import { Toaster } from 'react-hot-toast';

const SharedLoyout = () => {
  return (
    <>
      <Header>
        <HeaderContainer>
          <AppBar />
        </HeaderContainer>
      </Header>
      <MainContainer>
        <Suspense fallback={'Loading...'}>
          <Outlet />
          <Toaster position="top-center" reverseOrder={false} />
        </Suspense>
      </MainContainer>
    </>
  );
};

export default SharedLoyout;
