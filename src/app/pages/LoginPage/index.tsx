import React from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from '@mantine/hooks';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Box, Container, LoadingOverlay, Stack, Text } from '@mantine/core';

import { LoginPageStyles } from './LoginPageStyles';
import Languages from 'app/components/Languages/Language';
import Logo from 'app/components/Logo/Logo';
import { getUserSelector } from 'store/slice/userSlice/selectors';

export function LoginPage({ children, islogin }) {
  const { t } = useTranslation();
  const { classes } = LoginPageStyles();
  // Global
  const navigate = useNavigate();
  const user = useSelector(getUserSelector);
  const phone = useMediaQuery('(max-width:575px)');

  return (
    <Container fluid={true} className={classes.container}>
      <LoadingOverlay visible={user.loading} overlayBlur={2} />
      <Box
        sx={{
          width: '100vw',
          height: '100vh',
          position: 'absolute',
          inset: 0,
          overflowY: 'auto',
          paddingTop: '20px',
          display: 'flex',
          [`@media (max-width:376px)`]: {
            overflowX: 'hidden',
          },
        }}
      >
        {phone && <Logo className={classes.logo} />}
        <Box className={classes.wrapper}>
          <Stack spacing={0} className={classes.content}>
            {!phone && <Logo className={classes.logo} />}
            {!phone && <Languages />}
            {children}
            {islogin ? (
              <Text className={classes.ques}>
                {t("LoginPage.question.Don't have an account?")}{' '}
                <span
                  onClick={() => {
                    navigate('/register');
                  }}
                >
                  {' '}
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
