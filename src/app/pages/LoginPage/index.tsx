import React from 'react';
import {
  BackgroundImage,
  Box,
  Button,
  Container,
  Flex,
  Stack,
  Text,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useTranslation } from 'react-i18next';

import { images } from 'assets/images';
import { LoginPageStyles } from './LoginPageStyles';
import Languages from 'app/components/Languages/Language';
import Logo from 'app/components/Logo/Logo';
import { useSelector } from 'react-redux';
import { getUserSelector } from 'store/slice/userSlice/selectors';
import { useNavigate } from 'react-router-dom';

export function LoginPage({ children, islogin }) {
  const { t } = useTranslation();
  const { classes } = LoginPageStyles();
  const user = useSelector(getUserSelector);
  const navigate = useNavigate();
  const phone = useMediaQuery('(max-width:575px)');
  return (
    <Container className={classes.container}>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          // display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center',
        }}
      >
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
              width: '60%',
              height: '85%',
            },
            [`@media (min-width:576px) and (max-width:767px)`]: {
              width: '80%',
              height: '82%',
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
            <Languages />
            <Logo className={classes.logo} />
            {children}
            {islogin ? (
              <Text className={classes.ques}>
                {t("LoginPage.question.Don't have an account?")}{' '}
                <span
                  onClick={() => {
                    navigate('/register');
                  }}
                >
                  {t('LoginPage.button.Sign up')}
                </span>
              </Text>
            ) : (
              <Text
                sx={{
                  [`@media (min-width:768px) and (max-width:991px)`]: {
                    marginTop: '18px ',
                  },
                  [`@media (min-width:576px) and (max-width:767px)`]: {
                    marginTop: '14px ',
                  },
                }}
                className={classes.ques}
              >
                {t('LoginPage.question.Already had an account?')}{' '}
                <span
                  onClick={() => {
                    navigate('/login');
                  }}
                >
                  {t('LoginPage.button.Log in')}
                </span>
              </Text>
            )}
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}
