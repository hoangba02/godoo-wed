import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,*::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: all 0.25s ease-in-out;
  }
  html {
    scroll-behavior: smooth; 
  }
  body {
    font-family: 'Lexend', sans-serif;
    padding-bottom: env(safe-area-inset-bottom);
  }
  #root {
    min-height: 100%;
    min-width: 100%;
  }
  input, select {
    font-family: inherit;
    font-size: inherit;
  }
`;
