import { Avatar, Box, Container, Flex, Stack } from '@mantine/core';
import Languages from 'app/components/Languages/Language';
import { images } from 'assets/images';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  children?: JSX.Element | JSX.Element[];
}
function LoginMobile({ children }: Props) {
  const navigate = useNavigate();
  return (
    <Container
      fluid
      sx={{
        minWidth: '100vw',
        minHeight: '100vh',
        padding: 0,
        backgroundImage: `url(${images.bgLoginMobile})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        '::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'transparent',
          backgroundImage: `url(${images.bgLoginTopMobile})`,
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
        <Flex
          sx={{
            width: '100%',
            height: 178,
            paddingBottom: 22,
            justifyContent: 'center',
            alignItems: 'end',
            position: 'relative',
          }}
        >
          <Avatar
            sx={{
              width: '100px',
              height: '100px',
            }}
            onClick={() => {
              navigate('/login');
            }}
            src={images.logo}
          />
          <Box
            sx={{
              width: 84,
              height: 28,
              position: 'absolute',
              top: 33,
              right: 20,
            }}
          >
            <Languages />
          </Box>
        </Flex>
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
              // height: 'calc(100vh - 178px)',
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
                backgroundImage: `url(${images.bgLoginBotMobile})`,
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

export default LoginMobile;
