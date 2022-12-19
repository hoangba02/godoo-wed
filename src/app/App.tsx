/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { useTranslation } from 'react-i18next';
import { routes } from './routes';
import Layout from './Layout';
import NullLayout from './Layout/NullLayout';

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
        {routes.map(function (route, index) {
          const Page = route.component;
          let element = (
            <Layout>
              <Page />
            </Layout>
          );

          if (!route.layout) {
            element = (
              <NullLayout>
                <Page />
              </NullLayout>
            );
          }
          return <Route key={index} path={route.path} element={element} />;
        })}
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}
