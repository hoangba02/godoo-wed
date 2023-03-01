import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, Box, Container, Flex } from '@mantine/core';
import { images } from 'assets/images';
import Background from 'app/components/Background/Background';
import Languages from 'app/components/Languages/Language';

interface Props {
  children?: JSX.Element | JSX.Element[];
}
export default function LoginWeb({ children }: Props) {
  // Global
  const navigate = useNavigate();
  return (
    <Background>
      <Container
        fluid
        sx={{
          width: 720,
          maxWidth: '70%',
          aspectRatio: '0.78',
          borderRadius: 30,
          backgroundColor: '#FFFFFF',
          padding: '0',
          position: 'relative',

          [`@media (min-width:1536px) and (max-width:1720px)`]: {
            width: '39%',
          },
          [`@media (min-width:1440px) and (max-width:1535px)`]: {
            width: '40%',
          },
          [`@media (min-width:1200px) and (max-width:1439px)`]: {
            width: '43%',
          },
          [`@media (min-width:992px) and (max-width:1199px)`]: {
            width: '45%',
          },
          [`@media (min-width:768px) and (max-width:991px)`]: {
            maxWidth: '80%',
            padding: '30px 6%',
          },
        }}
      >
        <Box
          sx={{
            width: 132,
            height: 38,
            position: 'absolute',
            top: 0,
            right: -200,
            zIndex: 5,
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
            [`@media (min-width:768px) and (max-width:991px)`]: {
              top: -50,
              right: 0,
              width: 132,
              height: 38,
            },
            [`@media (min-width:1200px) and (max-width:1439px)`]: {
              width: 120,
              height: 30,
            },
          }}
        >
          <Languages />
        </Box>
        <Container
          fluid
          sx={{
            width: '100%',
            borderRadius: 30,
            backgroundColor: 'transparent',
            padding: '15px 2.5%',
            position: 'absolute',
            inset: 0,
            zIndex: 3,
            [`@media (min-width:1536px)`]: {
              padding: '15px 10%',
            },
            [`@media (min-width:1440px) and (max-width:1535px)`]: {
              padding: '15px 7%',
            },
            [`@media (min-width:1200px) and (max-width:1439px)`]: {
              padding: '15px 5%',
            },
            [`@media (min-width:992px) and (max-width:1199px)`]: {
              padding: '25px 5%',
            },
            [`@media (min-width:768px) and (max-width:991px)`]: {
              padding: '15px 6%',
            },
          }}
        >
          <Flex
            sx={{
              width: '100%',
              justifyContent: 'center',
            }}
          >
            <Avatar
              sx={{
                width: '20%',
                height: '20%',
                maxWidth: 150,
                maxheight: 150,
                [`@media (min-width:768px) and (max-width:991px)`]: {
                  width: '30%',
                  height: '30%',
                },
                [`@media (min-width:1536px)`]: {
                  width: '30%',
                  height: '30%',
                },
              }}
              onClick={() => {
                navigate('/login');
              }}
              src={images.logo}
            />
          </Flex>
          {children}
        </Container>
      </Container>
    </Background>
  );
}
