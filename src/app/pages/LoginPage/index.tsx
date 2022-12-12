import React, { useState } from 'react';
import {
  Avatar,
  Button,
  Container,
  createStyles,
  Divider,
  Flex,
  Image,
  Stack,
  Text,
} from '@mantine/core';

import { images } from 'assets/images';
import Languages from 'app/components/Languages/Language';
import Register from 'app/components/Register/Register';
import SignIn from 'app/components/SignIn/SignIn';

export function LoginPage() {
  const { classes } = useStyles();
  const [login, setLogin] = useState(true);
  return (
    <Container className={classes.container}>
      <Stack spacing={0} className={classes.wrapper}>
        {/* <Languages /> */}
        <Avatar className={classes.logo} color="lime" src={images.logo} />
        {login ? <SignIn /> : <Register />}

        <Divider
          styles={{
            label: {
              fontSize: '18px',
              fontWeight: 600,
              '&::after': {
                width: '320px',
              },
            },
          }}
          mt={40}
          label="Hoặc"
          labelPosition="center"
        />
        <Flex mt={38}>
          <Button variant="subtle">
            <Image src={images.facebook} alt="facebook" />
          </Button>
          <Button variant="subtle">
            <Image src={images.google} alt="google" />
          </Button>
          <Button variant="subtle">
            <Image src={images.apple} alt="apple" />
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
      </Stack>
    </Container>
  );
}

const useStyles = createStyles(() => ({
  container: {
    maxWidth: '100vw',
    height: '100vh',
  },
  wrapper: {
    alignItems: 'center',
    width: '50%',
    maxWidth: '720px',
    height: '915px',
    margin: '42px auto  0',
    padding: '25px 75px 35px',
    border: '2px solid #000',
    borderRadius: '20px',
  },
  logo: {
    width: '150px',
    height: '150px',
  },
  registerBtn: {
    width: '269px',
    height: '52px',
    fontSize: '18px',
    fontWeight: 500,
    marginTop: '42px',
    padding: '16px 19px 16px 19px',
  },
  ques: {
    justifySelf: 'flex-end',
    marginTop: '58px',
    fontSize: '18px',
    fontWeight: 400,
    lineHeight: '22.5px',
    '& span': {
      color: 'var(--primary-1 )',
      fontWeight: 600,
      textDecoration: 'underline',
      userSelect: 'none',
      cursor: 'pointer',
    },
  },
}));
