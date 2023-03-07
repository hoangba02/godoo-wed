import React from 'react';
import { Container, Stack, Box, Image, Avatar } from '@mantine/core';
import PublicWeb from 'app/components/Layout/PublicLayout/PublicWeb';
import { ReactComponent as Back } from 'assets/icons/back-arrow-gradient.svg';
import { SubtleButton } from 'app/components/Customs/Button/SubtleButton';
import ProfileProgress from 'app/components/Progress/ProfileProgress';
import { ProfilePageProps } from 'types';
import { useNavigate } from 'react-router-dom';

function ProfileWeb({ children, image, progress, back }: ProfilePageProps) {
  const navigate = useNavigate();
  return (
    <PublicWeb padding="30px 32px 0">
      <Stack
        sx={{
          gap: 0,
          width: '100%',
          height: 'calc(100% - 32px)',
          padding: 0,
          marginTop: 32,
        }}
      >
        {progress !== 0 && (
          <SubtleButton
            sx={{
              position: 'absolute',
              top: 20,
              left: 0,
              zIndex: 99,
            }}
            onClick={() => {
              navigate(`/${back}`);
            }}
          >
            <Back />
          </SubtleButton>
        )}
        {image && (
          <Box
            sx={{
              width: '73%',
              height: 250,
              maxHeight: 250,
              margin: '0 auto',
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
        <Container
          fluid
          sx={{
            flex: 1,
            width: '100%',
            // height: 'calc(100% - 313px)',
            minHeight: 'max-content',
            background: '#FFE0D2',
            borderRadius: 30,
            position: 'relative',
            padding: '0 43px 30px',
          }}
        >
          {children}
        </Container>
        <ProfileProgress progress={progress} />
      </Stack>
    </PublicWeb>
  );
}

export default ProfileWeb;
