import React from 'react';
import { Container, Image, Box, Stack, Avatar } from '@mantine/core';
import ProfileProgress from 'app/components/Progress/ProfileProgress';
import { SubtleButton } from 'app/components/Customs/Button/SubtleButton';
import { ReactComponent as Back } from 'assets/icons/back-arrow-gradient.svg';
import { ProfilePageProps } from 'types';
import { useNavigate } from 'react-router-dom';

function ProfileMobile({ children, image, progress, back }: ProfilePageProps) {
  const navigate = useNavigate();
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
          onClick={() => navigate(`/${back}`)}
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
          }}
        >
          <Avatar
            sx={{
              width: '100%',
              height: '100%',
            }}
            styles={{
              image: {
                objectFit: 'contain',
              },
            }}
            src={image}
          />
        </Box>
      )}

      <Stack
        sx={{
          flex: 1,
          gap: 0,
          width: '100%',
          minHeight: 'max-content',
          background: '#FFE0D2',
          borderRadius: '30px 30px 0 0',
        }}
      >
        <Container
          fluid
          sx={{
            width: '100%',
            height: '100%',
          }}
        >
          {children}
        </Container>
        <ProfileProgress progress={progress} />
      </Stack>
    </Stack>
  );
}

export default ProfileMobile;
