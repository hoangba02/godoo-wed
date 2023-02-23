import React, { useState } from 'react';
import { Center, SimpleGrid, Text } from '@mantine/core';

const LangSpeakMap = [
  'English',
  'Vietnamese',
  'Chinese',
  'German',
  'French',
  'Indonesia',
  'Italia',
  'Japanese',
  'Korean',
  'Lao',
  'Russian',
];
function LangSpeak() {
  const [langs, setLangs] = useState<string[]>([]);
  const handleOptionsItem = value => {
    if (langs.includes(value)) {
      const newItems = langs.filter(item => value !== item);
      setLangs(newItems);
    } else {
      setLangs([...langs, value]);
    }
  };
  return (
    <>
      <Text fz={20} fw={600} lh="25px" align="center" mb={18}>
        Languages you speak
      </Text>
      <SimpleGrid
        cols={3}
        sx={{
          gap: '8px 12px',
          width: '100%',
        }}
      >
        {LangSpeakMap.map((value, index) => (
          <Center
            key={index}
            sx={{
              gap: 8,
              height: 56,
              flexDirection: 'column',
              border: '1px solid #D6D6D6',
              borderRadius: 8,
              padding: '8px',
              cursor: 'pointer',
              backgroundColor: langs.includes(value) ? '#E46125' : '#FFFFFF',
            }}
            onClick={() => {
              handleOptionsItem(value);
            }}
          >
            <Text
              sx={{
                fontSize: 16,
                fontWeight: 600,
                lineHeight: '20px',
                userSelect: 'none',
                color: langs.includes(value) ? '#FFFFFF' : '#000',
              }}
            >
              {value}
            </Text>
          </Center>
        ))}
      </SimpleGrid>
    </>
  );
}

export default LangSpeak;
