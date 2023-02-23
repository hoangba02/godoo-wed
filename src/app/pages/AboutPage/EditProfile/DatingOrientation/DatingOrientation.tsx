import React, { useState } from 'react';
import { Text } from '@mantine/core';
import GendersList from 'app/components/GendersList/GendersList';

function DatingOrientation() {
  const [gender, setGender] = useState<string[]>([]);
  return (
    <>
      <Text fz={20} fw={600} lh="25px" align="center" mb={18}>
        I am attracted to ...
      </Text>
      <GendersList isTitle={false} items={gender} setItems={setGender} />
    </>
  );
}

export default DatingOrientation;
