import * as React from 'react';
import {
  Avatar,
  Card,
  Center,
  Container,
  createStyles,
  Flex,
} from '@mantine/core';
import { images } from 'assets/images';

export default function LoginWeb() {
  return (
    <Container
      fluid
      sx={{
        width: '100vw',
        height: '100vh',
        padding: 0,
        backgroundImage: `url(${images.background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        overflow: 'hidden',
        position: 'relative',
        ':before': {
          content: "''",
          position: 'absolute',
          width: '100%',
          height: '100%',
          left: '0',
          top: '0',
          // top: -100,
          backgroundImage: `url(${images.backgroundSide})`,
        },
      }}
    >
      <Center
        sx={{
          width: '100%',
          height: '100%',
        }}
      >
        <Card
          sx={{
            width: '70%',
            height: '90%',
            maxWidth: 720,
            maxHeight: 915,
            borderRadius: 30,
            padding: '30px 75px !important',
            backgroundColor: 'rgba(255,255,255,0.9)',
          }}
        >
          <Flex
            sx={{
              width: '100%',
              height: 150,
              justifyContent: 'center',
            }}
          >
            <Avatar
              sx={{
                width: 150,
                height: '100%',
                padding: '21px 37px',
                border: '1px solid #D6D6D6',
                borderRadius: 30,
                backgroundColor: '#FFFFFF',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
              }}
              styles={{
                image: {
                  objectFit: 'initial',
                },
              }}
              src={images.logo}
            />
          </Flex>
        </Card>
      </Center>
    </Container>
  );
}

const makeStyles = createStyles(() => ({}));
