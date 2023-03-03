import React from 'react';
import { Container, Stack } from '@mantine/core';
import { images } from 'assets/images';
import Logo from 'app/components/Logo/Logo';
// import Languages from 'app/components/Languages/Language';

interface Props {
  children?: JSX.Element | JSX.Element[];
}
function PublicMobile({ children }: Props) {
  return (
    <Container
      fluid
      sx={{
        minWidth: '100vw',
        minHeight: '100vh',
        padding: 0,
        backgroundColor: '#FFE0D2',
        '::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'transparent',
          backgroundImage: `url(${images.backgroundMobile})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          zIndex: 2,
        },
      }}
    >
      <Stack
        sx={{
          gap: 0,
          width: '100%',
        }}
      >
        <Logo />
        <Container
          fluid
          sx={{
            width: '100%',
            height: 'calc(100vh - 178px)',
            borderRadius: '30px 30px 0px 0px',
            backgroundColor: '#FFFFFF',
            position: 'relative',
          }}
        >
          <Container
            fluid
            sx={{
              width: '100%',
              height: 'max-content',
              minHeight: '100%',
              padding: '27px 16px 50px',
              borderRadius: '30px 30px 0px 0px',
              backgroundColor: 'transparent',
              position: 'absolute',
              inset: 0,
              zIndex: 3,
              ':before': {
                content: '""',
                position: 'absolute',
                right: 0,
                bottom: 0,
                width: 131,
                height: 159,
                zIndex: -1,
                backgroundImage: `url(${images.backgroundSideMobile})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              },
            }}
          >
            {children}
          </Container>
        </Container>
      </Stack>
    </Container>
  );
}

export default PublicMobile;
