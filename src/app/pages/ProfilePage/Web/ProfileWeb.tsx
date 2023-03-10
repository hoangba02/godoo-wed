import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Stack, Box, Avatar } from '@mantine/core';

import { ProfilePageProps } from 'types';
import PublicWeb from 'app/components/Layout/PublicLayout/PublicWeb';
import ProfileProgress from 'app/components/Progress/ProfileProgress';
import { SubtleButton } from 'app/components/Customs/Button/SubtleButton';
import { ReactComponent as Back } from 'assets/icons/back-arrow-gradient.svg';

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
              top: 10,
              left: 10,
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
              width: '100%',
              height: 250,
              maxHeight: 250,
              position: 'relative',
            }}
          >
            <Avatar
              sx={{
                position: 'absolute',
                top: -100,
                width: '100%',
                height: '150%',
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
