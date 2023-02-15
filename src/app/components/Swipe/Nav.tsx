import React from 'react';
import { Box, Flex } from '@mantine/core';

function Nav({ active, data }) {
  const listPicture = data.picture.filter(value => {
    if (value) return value;
  });
  return (
    <Flex
      gap={6}
      sx={{
        height: 34,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        zIndex: 7,
      }}
    >
      {Array.from({ length: listPicture.length }).map((value, index) => (
        <Box
          key={index}
          className={index === active ? 'active' : ''}
          sx={{
            width: 10,
            height: 10,
            borderRadius: '50%',
            backgroundColor: 'var(--grey-light)',
            transition: 'all 0.5s ease',
            '&.active': {
              width: 30,
              borderRadius: 8,
              backgroundColor: 'rgba(228, 97, 37, 0.6)',
            },
          }}
        ></Box>
      ))}
    </Flex>
  );
}

export default Nav;
