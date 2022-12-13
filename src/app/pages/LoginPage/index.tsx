import React, { useState } from 'react';
import {
  BackgroundImage,
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Stack,
  Text,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useTranslation } from 'react-i18next';

import { images } from 'assets/images';
import { LoginPageStyles } from './LoginPageStyles';
import Languages from 'app/components/Languages/Language';
import Register from 'app/components/Register/Register';
import SignIn from 'app/components/SignIn/SignIn';
import Logo from 'app/components/Logo/Logo';

export function LoginPage() {
  const { t } = useTranslation();
  const { classes } = LoginPageStyles();
  const [login, setLogin] = useState(true);
  const phone = useMediaQuery('(max-width:575px)');
  return (
    <Container className={classes.container}>
      <Languages />
      <Box
        sx={{
          width: '50%',
          maxWidth: '720px',
          borderRadius: '20px',
          backgroundColor: 'var(--white)',
          [`@media (min-width:1200px) and (max-width:1439px)`]: {
            width: '60%',
          },
          [`@media (min-width:992px) and (max-width:1199px)`]: {
            width: '60%',
          },
          [`@media (min-width:768px) and (max-width:991px)`]: {
            width: '80%',
            height: 'max-content',
          },
          [`@media (min-width:576px) and (max-width:767px)`]: {
            width: '80%',
          },
          [`@media (max-width:575px)`]: {
            width: '100%',
            height: '76%',
            borderRadius: '20px 20px 0 0',
            padding: '25px 16px 35px',
          },
        }}
      >
        <BackgroundImage
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
          src={phone ? images.bgLoginTopMobile : images.bgLoginTop}
        ></BackgroundImage>
        <Stack spacing={0} className={classes.wrapper}>
          <Logo className={classes.logo} />
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
            label={t('LoginPage.or')}
            labelPosition="center"
          />
          <Flex mt={38} className={classes.social}>
            <Button variant="subtle" className={classes.socialBtn}>
              <img
                className={classes.img}
                src={images.facebook}
                alt="facebook"
              />
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
              {t("LoginPage.question.Don't have an accouint?")}
              <span
                onClick={() => {
                  setLogin(false);
                }}
              >
                {t('LoginPage.button.Sign up')}
              </span>
            </Text>
          ) : (
            <Text className={classes.ques}>
              {t('LoginPage.question.Already had an account?')}
              <span
                onClick={() => {
                  setLogin(true);
                }}
              >
                {t('LoginPage.button.Log in')}
              </span>
            </Text>
          )}
        </Stack>
      </Box>
    </Container>
  );
}
