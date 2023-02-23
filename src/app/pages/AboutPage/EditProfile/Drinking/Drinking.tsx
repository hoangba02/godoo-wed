import React, { useState } from 'react';
import { Text } from '@mantine/core';
import { ChooseItem, habitMap } from '../Smoking/Smoking';

function Drinking() {
  const [habitDrinking, setHabitDrinking] = useState<string>('');
  const handleSelectHabitDrinking = item => {
    setHabitDrinking(item);
  };
  return (
    <>
      <Text fz={20} fw={600} lh="25px" align="center" mb={18}>
        I ... drink
      </Text>
      <ChooseItem
        list={habitMap}
        item={habitDrinking}
        onSelect={handleSelectHabitDrinking}
      />
    </>
  );
}

export default Drinking;
