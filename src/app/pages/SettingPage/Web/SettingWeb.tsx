import { Container, Flex, Stack } from '@mantine/core';
import HeaderAbout from 'app/components/Header/HeaderAbout';
import About from 'app/pages/AboutPage/AboutScreeen/About';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { SettingPageProps } from 'types';

function SettingWeb({ children, handleClick, screen }: SettingPageProps) {
  const { t } = useTranslation();
  return (
    <Container
      fluid
      sx={{
        width: '100vw',
        height: '100vh',
        padding: 0,
      }}
    >
      <Flex
        sx={{
          gap: 0,
          width: '100%',
          height: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Container
          fluid
          sx={{
            margin: 0,
            padding: '0px 0px 0px 135px',
          }}
        >
          <About />
        </Container>
        <Stack
          sx={{
            flex: 1,
            padding: '44px 135px 0 30px',
            borderLeft: '1px solid #BFBFBF',
            position: 'relative',
            [`@media (max-width:575px)`]: {
              padding: '0px',
            },
          }}
        >
          <HeaderAbout handleClick={handleClick} screen={screen} />
          {children}
        </Stack>
      </Flex>
    </Container>
  );
}

export default SettingWeb;
