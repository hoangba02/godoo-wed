import React from 'react';
import { Box, Container, Stack, Text } from '@mantine/core';
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
    <Container fluid={true} className={classes.container}>
      <Box
        style={{
          height: '100vh',
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${
            phone ? images.bgLoginTopMobile : images.bgLoginTop
          })`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          zIndex: 2,
        }}
      ></Box>
      <Box
        sx={{
          width: '100vw',
          height: '100vh',
          position: 'absolute',
          inset: 0,
          overflowY: 'auto',
          paddingTop: '20px',
          [`@media (max-width:376px)`]: {
            overflowX: 'hidden',
          },
        }}
      >
        <Box className={classes.wrapper}>
          <Stack spacing={0} className={classes.content}>
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
