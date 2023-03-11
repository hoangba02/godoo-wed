/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { useTranslation } from 'react-i18next';

import { LoginPage } from './pages/LoginPage';
import { HomePage } from './pages/HomePage/Loadable';
import { NotFoundPage } from './pages/NotFoundPage/Loadable';
import { RegisterPage } from './pages/RegisterPage/Loadable';
import InputName from './pages/ForgotPage/ForgotScreen/InputName';
import GetCode from './pages/ForgotPage/ForgotScreen/GetCode';
import InputOTP from './pages/ForgotPage/ForgotScreen/InputOTP';
import NewPassword from './pages/ForgotPage/ForgotScreen/NewPassword';
import Nickname from './pages/ProfilePage/ProfileScreen/Nickname';
import Birthday from './pages/ProfilePage/ProfileScreen/Birthday';
import Picture from './pages/ProfilePage/ProfileScreen/Picture';
import Gender from './pages/ProfilePage/ProfileScreen/Gender';
import Description from './pages/ProfilePage/ProfileScreen/Description';
import { useMediaQuery } from '@mantine/hooks';
import { AuthSlice } from 'store/slice/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from 'store/slice/authSlice/selectors';
import Navigate from './components/Navigate/Navigate';
import DemoPage from './pages/DemoPage/DemoPage';
import OverlayLoading from './components/Customs/OverlayLoading/OverlayLoading';

export function App() {
  const { i18n } = useTranslation();
  const { authActions } = AuthSlice();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  // Local
  const mobile = useMediaQuery('(max-width:575px)');
  useEffect(() => {
    dispatch(authActions.setAccessDevice(mobile));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>
      <BrowserRouter>
        <OverlayLoading isLoading={isLoading} />
        <Navigate />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          {/* Profile Page */}
          <Route path="/profile/nickname" element={<Nickname />} />
          <Route path="/profile/picture" element={<Picture />} />
          <Route path="/profile/birthday" element={<Birthday />} />
          <Route path="/profile/gender" element={<Gender />} />
          <Route path="/profile/description" element={<Description />} />

          {/* Forgot Page */}
          <Route path="/forgot/name" element={<InputName />} />
          <Route path="/forgot/getcode" element={<GetCode />} />
          <Route path="/forgot/otp/:method" element={<InputOTP />} />
          <Route path="/forgot/newpassword/:method" element={<NewPassword />} />

          <Route path="*" element={<NotFoundPage />} />
          <Route path="/demo" element={<DemoPage />} />
        </Routes>
        <GlobalStyle />
      </BrowserRouter>
    </>
  );
}
