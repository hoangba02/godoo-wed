import React from 'react';
import { Avatar, Flex } from '@mantine/core';
import { images } from 'assets/images';

function Logo() {
  return (
    <Flex
      sx={{
        width: '100%',
        height: 150,
        justifyContent: 'center',
        '@media (max-width: 40em)': {
          height: 178,
          alignItems: 'flex-end',
          paddingBottom: 22,
        },
      }}
    >
      <Avatar
        sx={{
          width: 150,
          height: '100%',
          padding: '21px 37px',
          border: '1px solid #D6D6D6',
          borderRadius: 30,
          backgroundColor: '#FFFFFF',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
          '@media (max-width: 40em)': {
            width: 100,
            height: 100,
            padding: '14px 25px',
          },
        }}
        styles={{
          image: {
            objectFit: 'initial',
          },
        }}
        src={images.logo}
      />
    </Flex>
  );
}

export default Logo;
