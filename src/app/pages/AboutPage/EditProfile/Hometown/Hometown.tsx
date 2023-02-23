import React from 'react';
import { Text } from '@mantine/core';
import Search from 'app/components/Search/Search';

function Hometown() {
  return (
    <>
      <Text fz={20} fw={600} lh="25px" align="center" mb={18}>
        I grew up in ...
      </Text>
      <Search placeholder="Search your city" />
    </>
  );
}

export default Hometown;
