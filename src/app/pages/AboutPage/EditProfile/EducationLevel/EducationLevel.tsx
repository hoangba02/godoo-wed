import React, { useState } from 'react';
import { Center, Stack, Text } from '@mantine/core';

const EDUCATIONS = [
  'Ph.D',
  'Master',
  'University',
  'Junior college',
  'High school',
  'Middle school',
  'Primary school',
  'Pre - school',
];
function EducationLevel() {
  const [edu, setEdu] = useState<string>(EDUCATIONS[0]);
  return (
    <>
      <Text fz={20} fw={600} lh="25px" align="center" mb={18}>
        Education level
      </Text>
      <Stack
        sx={{
          gap: 6,
        }}
      >
        {EDUCATIONS.map((education, index) => (
          <Center
            key={index}
            sx={{
              height: 45,
              borderRadius: 8,
              border: '1px solid #A9A9A9',
              color: education === edu ? '#FFFFFF' : '#000',
              backgroundColor: education === edu ? '#E46125' : '#FFFFFF',
            }}
            onClick={() => {
              setEdu(education);
            }}
          >
            <Text
              sx={{
                fontWeight: 400,
                fontSize: 18,
                lineHeight: '22px',
              }}
            >
              {education}
            </Text>
          </Center>
        ))}
      </Stack>
    </>
  );
}

export default EducationLevel;
