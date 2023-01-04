import React from 'react';
import { Box, Flex } from '@mantine/core';

function Nav({ active, lengths }) {
  return (
    <Flex
      gap={6}
      sx={{
        height: 34,
        [`@media (max-width:799px)`]: {
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}
    >
      {Array.from({ length: lengths }).map((value, index) => (
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
