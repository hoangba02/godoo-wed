import React from 'react';
import { Global } from '@mantine/core';
function MyGlobalStyles() {
  return (
    <Global
      styles={() => ({
        ':root': {
          '--fz-40': '40px',
          '--border-width': '1.5px',
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
      })}
    />
  );
}

export default MyGlobalStyles;
