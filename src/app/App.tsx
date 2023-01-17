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
import PrivateRouter from './routes/PrivateRouter';

import Demo from 'app/pages/Demo/Demo';
import Demo2 from './pages/Demo/Demo2';
import ForgotPass from 'app/pages/ForgotPass';
import { ChatPage } from './pages/ChatPage/Loadable';
import { HomePage } from 'app/pages/HomePage/Loadable';
import { NotFoundPage } from 'app/pages/NotFoundPage/Loadable';
import { LoginPage } from 'app/pages/LoginPage/Loadable';
import { RegisterPage } from 'app/pages/RegisterPage/Loadable';
import NickName from 'app/pages/RegisterPage/RegisterProfile/NickName';
import Picture from 'app/pages/RegisterPage/RegisterProfile/Picture';
import Birth from 'app/pages/RegisterPage/RegisterProfile/Birthday';
import Gender from 'app/pages/RegisterPage/RegisterProfile/Gender';
import Desc from 'app/pages/RegisterPage/RegisterProfile/Description';
import Mode from 'app/pages/RegisterPage/RegisterProfile/Mode';
import { AboutPage } from './pages/AboutPage/Loadable';
import Settings from './pages/AboutPage/Settings/Settings';
import Notification from './pages/AboutPage/Notification/Notification';
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
        <Route element={<PrivateRouter />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about/setting" element={<Settings />} />
          <Route path="/about/notification" element={<Notification />} />
          <Route path="/register/nickname" element={<NickName />} />
          <Route path="/register/picture" element={<Picture />} />
          <Route path="/register/birthday" element={<Birth />} />
          <Route path="/register/gender" element={<Gender />} />
          <Route path="/register/description" element={<Desc />} />
          <Route path="/register/mode" element={<Mode />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot" element={<ForgotPass />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/demo2" element={<Demo2 />} />
      </Routes>

      <GlobalStyle />
    </BrowserRouter>
  );
}
