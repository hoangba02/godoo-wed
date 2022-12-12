import React from 'react';
import { Global } from '@mantine/core';

function GlobalStyles() {
  return (
    <Global
      styles={[
        {
          '@font-face': {
            fontFamily: 'Lexend Semibold',
            src: `url(../../../assets/fonts/Lexend-SemiBold.ttf) format("ttf")`,
            fontWeight: 600,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Lexend Semibold',
            src: `url(../../../assets/fonts/Lexend-SemiBold.ttf) format("ttf")`,
            fontWeight: 500,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Lexend Semibold',
            src: `url(../../../assets/fonts/Lexend-SemiBold.ttf) format("ttf")`,
            fontWeight: 400,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Lexend Medium',
            src: `url(../../../assets/fonts/Lexend-Medium.ttf) format("ttf")`,
            fontWeight: 600,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Lexend Medium',
            src: `url(../../../assets/fonts/Lexend-Medium.ttf) format("ttf")`,
            fontWeight: 500,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Lexend Medium',
            src: `url(../../../assets/fonts/Lexend-Medium.ttf) format("ttf")`,
            fontWeight: 400,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Lexend Regular',
            src: `url(../../../assets/fonts/Lexend-Regular.ttf) format("ttf")`,
            fontWeight: 600,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Lexend Regular',
            src: `url(../../../assets/fonts/Lexend-Regular.ttf) format("ttf")`,
            fontWeight: 500,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Lexend Regular',
            src: `url(../../../assets/fonts/Lexend-Regular.ttf) format("ttf")`,
            fontWeight: 400,
            fontStyle: 'normal',
          },
        },
      ]}
    />
  );
}
export default GlobalStyles;
