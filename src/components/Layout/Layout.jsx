import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import { useEffect } from 'react';
import { refreshThunk } from 'store/auth/authThunks';
import { useDispatch } from 'react-redux';

const Layout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
