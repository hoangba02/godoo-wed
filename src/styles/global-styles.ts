import { createGlobalStyle } from 'styled-components';
import '../font.css';
export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family:  'Lexend', sans-serif;
  }

  #root {
    min-height: 100%;
    min-width: 100%;
  }

  p,div,
  label {
    font-family:  'Lexend', sans-serif;
    line-height: 1.5em;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }
`;
