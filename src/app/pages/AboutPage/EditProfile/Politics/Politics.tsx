import React, { useState } from 'react';
import { Text } from '@mantine/core';
import { ChooseItem } from '../Smoking/Smoking';

const politicsMap = [
  'Conservatism',
  'Liberalism',
  'Moderates',
  'Fascism',
  'Libertarianism',
  'Monarchism',
  'Separatism',
  'Socialism',
];
function Politics() {
  const [politics, setPolitics] = useState<string>('');
  const handleSelectPolitics = item => {
    setPolitics(item);
  };
  return (
    <>
      <Text fz={20} fw={600} lh="25px" align="center" mb={18}>
        Your political ideology?
      </Text>
      <ChooseItem
        list={politicsMap}
        item={politics}
        onSelect={handleSelectPolitics}
      />
    </>
  );
}

export default Politics;
