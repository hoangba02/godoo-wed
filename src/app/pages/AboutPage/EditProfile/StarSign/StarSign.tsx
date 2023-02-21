import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Avatar, Center, SimpleGrid, Text } from '@mantine/core';
import { zodiacMap } from 'app/components/Zodiac/Zodiac';
import { getProfileSelector } from 'store/slice/userSlice/selectors';

function StarSign() {
  const profile = useSelector(getProfileSelector);
  const [zodiacNew, setZodiacNew] = useState<string>(profile.zodiac);
  return (
    <>
      <Text fz={20} fw={600} lh="25px" align="center" mb={18}>
        My star sign
      </Text>
      <SimpleGrid
        cols={3}
        sx={{
          gap: '8px 12px',
          width: '100%',
        }}
      >
        {zodiacMap.map((zodiac, index) => (
          <Center
            key={index}
            sx={{
              flexDirection: 'column',
              border: '1px solid #D6D6D6',
              borderRadius: 8,
              padding: '8px',
              cursor: 'pointer',
              backgroundColor:
                zodiac.name === zodiacNew ? '#E46125' : '#FFFFFF',
            }}
            onClick={() => {
              console.log('first');
              setZodiacNew(zodiac.name);
            }}
          >
            <Avatar
              size={80}
              sx={{
                borderRadius: '50%',
                backgroundColor:
                  zodiac.name === zodiacNew ? '#E46125' : '#FFE0D2',
              }}
              src={zodiac.zodiac}
            />
            <Text
              sx={{
                fontSize: 16,
                fontWeight: 600,
                lineHeight: '20px',
                color: zodiac.name === zodiacNew ? '#FFFFFF' : '#000',
              }}
            >
              {zodiac.name}
            </Text>
          </Center>
        ))}
      </SimpleGrid>
    </>
  );
}

export default StarSign;
