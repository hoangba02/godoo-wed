import React from 'react';
import { Container, Image, Box, Stack } from '@mantine/core';
import ProfileProgress from 'app/components/Progress/ProfileProgress';
import { SubtleButton } from 'app/components/Customs/Button/SubtleButton';
import { ReactComponent as Back } from 'assets/icons/back-arrow-gradient.svg';
import { ProfilePageProps } from 'types';

function ProfileMobile({ children, image, progress }: ProfilePageProps) {
  return (
    <Stack
      sx={{
        gap: 0,
        width: '100vw',
        height: '100vh',
        maxWidth: '100%',
        padding: '45px 0 0 0  ',
        position: 'relative',
      }}
    >
      {progress !== 0 && (
        <SubtleButton
          sx={{
            position: 'absolute',
            top: 10,
            left: 0,
            zIndex: 99,
          }}
        >
          <Back />
        </SubtleButton>
      )}
      {image && (
        <Box
          sx={{
            width: '100%',
            height: 250,
            maxHeight: 250,
            padding: '0 20px',
          }}
        >
          <Image src={image} />
        </Box>
      )}
      <Container
        fluid
        sx={{
          flex: 1,
          width: '100%',
          minHeight: '65%',
          background: '#FFE0D2',
          borderRadius: '30px 30px 0 0',
        }}
      >
        {children}
      </Container>
      <ProfileProgress progress={progress} />
    </Stack>
  );
}

export default ProfileMobile;
