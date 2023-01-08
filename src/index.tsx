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
import { App } from 'app/App';

import { HelmetProvider } from 'react-helmet-async';

import { configureAppStore } from 'store/configureStore';

import reportWebVitals from 'reportWebVitals';

// Initialize languages
import './locales/i18n';
import { ButtonStylesParams, MantineProvider } from '@mantine/core';

const store = configureAppStore();
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <Provider store={store}>
    <HelmetProvider>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          globalStyles: theme => ({
            ':root': {
              '--fz-40': '40px',
              '--border-width': '1px',
              '--border-radius': '8px',
              // Color
              '--primary-1': '#E46125',
              '--primary-2': '#D65473',
              '--primary-3':
                'linear-gradient(90deg, #E46125 -0.01%, #C91A44 50%, #A12FA3 100%)',
              '--primary-4': '#FF9565',
              '--primary-5': '#FFE0D2',
              '--primary-6': '#FFDBEF',
              '--green': '#36CA68',
              '--red': '#FF0000',
              '--brown': '#FFA800',
              '--dark-blue': '#336CFF',
              '--purple': '#36CA68',
              '--blue': '#3FC6FF',
              '--white': '#FFFFFF',
              '--white-light': '#F3F3F3',
              '--light': '#EAEAEA',
              '--grey': '#A9A9A9',
              '--grey-light': '#D6D6D6',
              '--grey-medium': '#BFBFBF',
              '--grey-dark': '#929292',
              '--grey-black': '#424242',
              '--black': '#000000',
            },
            '*, *::before, *::after': {
              margin: 0,
              padding: 0,
              boxSizing: 'border-box',
            },
            '#root': {
              height: '100%',
            },
            'html *::-webkit-scrollbar': {
              borderRadius: 0,
              width: 2,
            },
            'html *::-webkit-scrollbar-thumb': {
              borderRadius: 4,
              backgroundColor: 'rgba(0, 0, 0, 0.15)',
            },
            'html *::-webkit-scrollbar-track': {
              borderRadius: 0,
              backgroundColor: 'rgba(0, 0, 0, 0)',
            },
            body: {
              // overflow: 'hidden',
            },
            a: {
              textDecoration: 'none',
            },
          }),
          fontFamily: 'Lexend, sans-serif',
          defaultGradient: {
            from: '#E46125 -0.01%',
            to: '#A12FA3 100%',
            deg: 90,
          },
          components: {
            Button: {
              styles: (theme, params: ButtonStylesParams) => ({
                root: {
                  height: '55px',
                  width: '269px',
                  position: 'relative',
                  padding: '16px 19px 16px 19px',
                  zIndex: 1,
                  color:
                    params.variant === 'outline'
                      ? '#E46125'
                      : params.variant === 'filled'
                      ? '#C91A44'
                      : '#FFFFFF',
                  // borderWidth: params.variant === 'outline' ? 'none' : '1px',
                  border: params.variant === 'outline' ? 'none' : 'inherit',
                  borderRadius: 'var(--border-radius)',
                  backgroundColor:
                    params.variant === 'filled'
                      ? 'var(--primary-2)'
                      : params.variant === 'default'
                      ? 'var(--primary-2)'
                      : params.variant === 'outline'
                      ? '#FFFFFF'
                      : '#FFFFFF',
                  backgroundImage:
                    params.variant === 'outline'
                      ? 'var(--primary-3)'
                      : params.variant === 'gradient'
                      ? 'var(--primary-3)'
                      : 'none',
                  '::before': {
                    content: '""',
                    display:
                      params.variant === 'outline'
                        ? 'block'
                        : params.variant === 'filled'
                        ? 'block'
                        : 'none',
                    position: 'absolute',
                    top: 'var(--border-width)',
                    left: 'var(--border-width)',
                    backgroundColor: 'var(--white)',
                    borderRadius:
                      'calc(var(--border-radius) - var(--border-width))',
                    height: 'calc(100% - calc(var(--border-width)*2.2))',
                    width: 'calc(100% - calc(var(--border-width)*2))',
                    zIndex: -1,
                  },
                  ':hover': {
                    backgroundColor:
                      params.variant === 'gradient'
                        ? 'var(--primary-3)'
                        : params.variant === 'filled'
                        ? 'var(--primary-2)'
                        : params.variant === 'default'
                        ? 'var(--primary-2)'
                        : params.variant === 'outline'
                        ? '#FFFFFF'
                        : '#FFFFFF',
                    backgroundSize: '100% !important',
                  },
                  ':disabled': {
                    cursor: 'not-allowed',
                    pointerEvents: 'unset',
                  },
                  ':disabled::before': {
                    cursor: 'no-drop',
                    backgroundColor: 'var(--grey-light)',
                  },
                  '& span': {
                    overflow: 'visible',
                  },
                  [`@media (max-width:575px)`]: {
                    width: 200,
                    height: 45,
                    fontSize: 20,
                    lineHeight: 25,
                  },
                },
              }),
            },
            InputWrapper: {
              styles: () => ({
                error: {
                  color: 'var(--red)',
                  marginTop: '4px',
                },
                label: {
                  fontWeight: 600,
                  fontSize: '18px',
                  lineHeight: '22.5px',
                  [`@media (max-width:575px)`]: {
                    fontWeight: 600,
                    fontSize: '16px',
                    lineHeight: '20px',
                  },
                },
              }),
            },

            Input: {
              styles: () => ({
                input: {
                  height: '55px',
                  borderRadius: '8px',
                  marginTop: '8px',
                  fontSize: '18px',
                  '[type="password"]': {
                    width: '100%',
                    height: '100%',
                    fontSize: '18px',
                  },
                  '[type="text"]': {
                    height: '100%',
                    fontSize: '18px',
                  },
                  '&:focus, &:focus-within': {
                    borderColor: 'var(--primary-4)',
                    backgroundColor: '#FFFFFF',
                  },
                  '&:-webkit-autofill,[type="password"]:-webkit-autofill': {
                    boxShadow: '0 0 0px 1000px #FFFFFF inset',
                  },
                  [`@media (max-width:575px)`]: {
                    marginTop: '4px',
                    height: '45px',
                    '[type="text"]': {
                      height: '100%',
                      fontSize: '16px',
                    },
                    '[type="password"]': {
                      width: '100%',
                      height: '100%',
                      fontSize: '16px',
                    },
                  },
                },
                innerInput: {},
              }),
            },
          },
        }}
      >
        <App />
      </MantineProvider>
    </HelmetProvider>
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
