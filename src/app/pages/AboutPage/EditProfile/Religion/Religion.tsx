import React, { useState } from 'react';
import { Text } from '@mantine/core';
import { ChooseItem, habitMap } from '../Smoking/Smoking';

const religionMap = [
  'Christianity',
  'Islam',
  'Hinduism',
  'Buddhism',
  'Folk religions',
];
function Religion() {
  const [habitReligion, setReligion] = useState<string>('');
  const handleSelectReligion = item => {
    setReligion(item);
  };
  return (
    <>
      <Text fz={20} fw={600} lh="25px" align="center" mb={18}>
        Your religion
      </Text>
      <ChooseItem
        list={religionMap}
        item={habitReligion}
        onSelect={handleSelectReligion}
      />
    </>
  );
}

export default Religion;
