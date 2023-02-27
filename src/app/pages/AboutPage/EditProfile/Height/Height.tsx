import React, { useCallback } from 'react';
import { Select, Text } from '@mantine/core';
import { ReactComponent as ArrowDown } from 'assets/icons/arrowDown.svg';

function Height() {
  const createHeightMap = useCallback(() => {
    const heightMap: string[] = [];
    for (let i = 100; i < 251; i++) {
      if (i === 100) {
        heightMap.push(`< ${i} cm`);
      } else if (i === 250) {
        heightMap.push(`> ${i} cm`);
      } else {
        heightMap.push(`${i} cm`);
      }
    }
    return heightMap;
  }, []);
  return (
    <>
      <Text fz={20} fw={600} lh="25px" align="center" mb={30}>
        My height
      </Text>
      <Select
        rightSection={<ArrowDown />}
        defaultValue={createHeightMap()[0]}
        data={createHeightMap()}
        styles={{
          item: {
            textAlign: 'center',
            '&[data-selected]': {
              backgroundColor: '#FFE9E0',
              '&, &:hover': {
                backgroundColor: 'var(--light)',
                color: 'var(--black)',
              },
            },
            '&:hover': {
              backgroundColor: '#FFE9E0',
              color: 'var(--black)',
            },
          },
          rightSection: {
            right: 4,
            top: '50%',
            width: 24,
            height: 24,
            borderRadius: '50%',
            backgroundColor: 'var(--white)',
            transform: 'translateY(-50%)',
            [`@media (max-width:575px)`]: {
              right: 6,
            },
          },

          input: {
            textAlign: 'center',
            color: 'var(--white)',
            height: 32,
            borderRadius: 32,
            background: 'linear-gradient(90deg, #E46125 -0.01%, #C91A44 100%)',
            [`@media (max-width:575px)`]: {
              height: 38,
            },
          },
          dropdown: {
            '& > div': {
              maxHeight: '315px !important',
            },
          },
        }}
      />
    </>
  );
}

export default Height;
