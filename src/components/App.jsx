import Loader from './Loader/Loader';
import { Toaster } from 'react-hot-toast';
import ContactPage from 'pages/ContactPage/ContactPage';
import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from 'Layout/Layout';
import PrivateRoute from 'guards/PrivateRoute/PrivateRoute';
import PublicRoute from 'guards/PublicRoute/PublicRoute';
import { refreshThunk } from 'store/auth/thunks';
import { useDispatch } from 'react-redux';

const Login = lazy(() => import('../pages/Login/Login'));
const Registration = lazy(() => import('../pages/Registration/Registration'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <>
      <Loader />
      <Toaster />

      <Suspense fallback={'Loading.....'}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path="contacts"
              element={
                <PrivateRoute>
                  <ContactPage />
                </PrivateRoute>
              }
            />
          </Route>
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/registration"
            element={
              <PublicRoute>
                <Registration />
              </PublicRoute>
            }
          />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
