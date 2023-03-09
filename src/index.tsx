/**
 * index.tsx
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

// Use consistent styling
import 'sanitize.css/sanitize.css';

// Import root app
import './locales/i18n';
import reportWebVitals from 'reportWebVitals';
import MyGlobalStyles from 'styles/MyGlobalStyles';

import { App } from 'app';
import { MantineProvider } from '@mantine/core';
import { HelmetProvider } from 'react-helmet-async';
import { persistor, store } from 'store/configureStore';
import { PersistGate } from 'redux-persist/integration/react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const client = new QueryClient();
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <QueryClientProvider client={client}>
        <HelmetProvider>
          <MantineProvider>
            <MyGlobalStyles />
            <App />
          </MantineProvider>
        </HelmetProvider>
      </QueryClientProvider>
    </PersistGate>
  </Provider>,
);

// Hot reloadable translation json files
if (module.hot) {
  module.hot.accept(['./locales/i18n'], () => {
    // No need to render the App again because i18next works with the hooks
  });
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
