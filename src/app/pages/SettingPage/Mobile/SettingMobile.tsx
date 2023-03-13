import React from 'react';

import { SettingPageProps } from 'types';
import { Container, Stack } from '@mantine/core';
import HeaderAbout from 'app/components/Header/HeaderAbout';

function SettingMobile({ children, handleClick, screen }: SettingPageProps) {
  return (
    <Container
      fluid
      sx={{
        width: '100vw',
        height: '100vh',
        padding: '0px',
      }}
    >
      <Stack>
        <HeaderAbout screen={screen} handleClick={handleClick} />
        {children}
      </Stack>
    </Container>
  );
}

export default SettingMobile;
