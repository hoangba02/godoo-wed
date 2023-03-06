import React from 'react';
import { Flex, Box } from '@mantine/core';
interface Props {
  progress?: number | string;
}
function ProfileProgress({ progress = 0 }: Props) {
  return (
    <Flex
      sx={{
        gap: 4,
        width: '100%',
        padding: '12px 0',
        justifyContent: 'space-between',
        '@media (max-width:575px)': {
          width: '100%',
          padding: '12px 16px',
        },
      }}
    >
      {Array.from({ length: 5 }).map((item, index) => (
        <Box
          key={index}
          sx={{
            flex: 1,
            height: 9,
            borderRadius: 41,
            background: index <= progress ? '#FF9565' : '#F3F3F3',
            '@media (max-width:575px)': {
              height: 6,
            },
          }}
        />
      ))}
    </Flex>
  );
}

export default ProfileProgress;
