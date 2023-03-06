/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
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
export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* Profile Page */}
        <Route path="/profile/nickname" element={<Nickname />} />
        <Route path="/profile/picture" element={<Picture />} />
        <Route path="/profile/birthday" element={<Birthday />} />
        <Route path="/profile/gender" element={<Gender />} />

        {/* Forgot Page */}
        <Route path="/forgot/name" element={<InputName />} />
        <Route path="/forgot/getcode" element={<GetCode />} />
        <Route path="/forgot/otp/:method" element={<InputOTP />} />
        <Route path="/forgot/newpassword/:method" element={<NewPassword />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}
