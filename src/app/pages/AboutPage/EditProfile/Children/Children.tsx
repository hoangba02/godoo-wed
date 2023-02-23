import React, { useState } from 'react';
import { Text } from '@mantine/core';
import { ChooseItem } from '../Smoking/Smoking';

const childrenMap = [
  'Someday',
  'Have & want more',
  'Have & definitely no more',
  'Don’t know yet',
  'Definitely not',
];
function Children() {
  const [children, setChildren] = useState<string>('');
  const handleSelectChildren = item => {
    setChildren(item);
  };
  return (
    <>
      <Text fz={20} fw={600} lh="25px" align="center" mb={18}>
        Your plan for children?
      </Text>
      <ChooseItem
        list={childrenMap}
        item={children}
        onSelect={handleSelectChildren}
      />
    </>
  );
}

export default Children;
