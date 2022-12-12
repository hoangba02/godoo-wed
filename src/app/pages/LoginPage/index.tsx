import React, { useState } from 'react';
import {
  Avatar,
  Button,
  Container,
  Divider,
  Flex,
  Stack,
  Text,
} from '@mantine/core';
import { images } from 'assets/images';
import { LoginPageStyles } from './LoginPageStyles';
import Languages from 'app/components/Languages/Language';
import Register from 'app/components/Register/Register';
import SignIn from 'app/components/SignIn/SignIn';
import Logo from 'app/components/Logo/Logo';

export function LoginPage() {
  const { classes } = LoginPageStyles();
  const [login, setLogin] = useState(false);
  return (
    <Container
      sx={{
        backgroundImage: `url(${images.gbLogin})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      className={classes.container}
    >
      <img className={classes.big} src={images.gbLoginBig} alt="none" />

      <Stack spacing={0} className={classes.wrapper}>
        <Logo />
        {login ? <SignIn /> : <Register />}

        <Divider
          styles={{
            label: {
              fontSize: '18px',
              fontWeight: 600,
              '&::after': {
                width: '320px',
              },
              [`@media (max-width:575px)`]: {
                '&::after': {
                  width: '250px',
                },
              },
            },
          }}
          sx={{
            marginTop: '40px',
            [`@media (max-width:575px)`]: {
              marginTop: '18px',
            },
          }}
          label="Hoặc"
          labelPosition="center"
        />
        <Flex mt={38} className={classes.social}>
          <Button variant="subtle" className={classes.socialBtn}>
            <img className={classes.img} src={images.facebook} alt="facebook" />
          </Button>
          <Button variant="subtle" mx={20} className={classes.socialBtn}>
            <img className={classes.img} src={images.google} alt="google" />
          </Button>
          <Button variant="subtle" className={classes.socialBtn}>
            <img className={classes.img} src={images.apple} alt="apple" />
          </Button>
        </Flex>
        {login ? (
          <Text className={classes.ques}>
            Bạn chưa có tài khoản?{' '}
            <span
              onClick={() => {
                setLogin(false);
              }}
            >
              Đăng ký
            </span>
          </Text>
        ) : (
          <Text className={classes.ques}>
            Bạn đã có tài khoản?{' '}
            <span
              onClick={() => {
                setLogin(true);
              }}
            >
              Đăng nhập
            </span>
          </Text>
        )}
        <img className={classes.under} src={images.gbLoginUnder} alt="none" />
      </Stack>
    </Container>
  );
}
