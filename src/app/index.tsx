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
import { ConnectedRouter } from 'connected-react-router';
import { history } from 'utils/history';

export function App() {
  const { i18n } = useTranslation();
  return (
    <ConnectedRouter history={history}>
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
        <Route path="/forgot/name" element={<InputName />} />
        <Route path="/forgot/getcode" element={<GetCode />} />
        <Route path="/forgot/otp/:method" element={<InputOTP />} />
        <Route path="/forgot/newpassword/:method" element={<NewPassword />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <GlobalStyle />
    </ConnectedRouter>
  );
}
