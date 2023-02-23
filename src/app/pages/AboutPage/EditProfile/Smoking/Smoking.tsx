import React, { useState } from 'react';
import { Center, Stack, Text } from '@mantine/core';

function Smoking() {
  const [habitSmoke, setHabitSmoke] = useState<string>('');
  const handleSelectHabitSmoke = item => {
    setHabitSmoke(item);
  };
  return (
    <>
      <Text fz={20} fw={600} lh="25px" align="center" mb={18}>
        I ... smoke
      </Text>
      <ChooseItem
        list={habitMap}
        item={habitSmoke}
        onSelect={handleSelectHabitSmoke}
      />
    </>
  );
}

export default Smoking;

export const habitMap = [
  'Usually',
  'Occasionally',
  'Frequently',
  'Rarely',
  'Never',
  'Used to',
];

interface Props {
  list: string[] | number[];
  item: string | number;
  onSelect: any;
}
export function ChooseItem({ list, item, onSelect }: Props) {
  return (
    <Stack spacing={6}>
      {list.map((value, index) => (
        <Center
          key={index}
          sx={{
            height: 45,
            border: '1px solid #A9A9A9',
            borderRadius: 8,
            backgroundColor: value === item ? '#E46125' : '#FFFFFF',
            color: value === item ? '#FFFFFF' : '#000',
            cursor: 'pointer',
          }}
          onClick={() => onSelect(value)}
        >
          <Text
            sx={{
              fontWeight: 400,
              fontSize: 18,
              lineHeight: '22px',
              userSelect: 'none',
            }}
          >
            {value}
          </Text>
        </Center>
      ))}
    </Stack>
  );
}
