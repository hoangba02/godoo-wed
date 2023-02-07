import React from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery, useViewportSize } from '@mantine/hooks';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Card, Container, LoadingOverlay, Stack, Text } from '@mantine/core';

import Logo from 'app/components/Logo/Logo';
import { getUserSelector } from 'store/slice/userSlice/selectors';
import { LoginLayoutStyles } from './LoginLayoutStyles';

export default function LoginLayout({ children, islogin }) {
  const { t } = useTranslation();
  const { classes } = LoginLayoutStyles();
  const { width, height } = useViewportSize();
  // Global
  const navigate = useNavigate();
  const user = useSelector(getUserSelector);
  const phone = useMediaQuery('(max-width:575px)');

  return (
    <Container
      sx={{
        aspectRatio: '9/16',
        [`@media (max-width:575px)`]: {
          aspectRatio: `calc(${width}/${height})`,
        },
      }}
      fluid
      className={classes.container}
    >
      <LoadingOverlay visible={user.loading} overlayBlur={2} />
      {phone && <Logo className={classes.logo} isLang />}
      <Card
        sx={{
          aspectRatio: '0.78',
          overflow: 'initial',
          [`@media (min-width:768px) and (max-width:991px)`]: {
            width: 600,
            aspectRatio: '0.70',
          },
          [`@media (max-width:575px)`]: {
            overflow: 'initial',
          },
        }}
        className={classes.wrapper}
      >
        <Stack spacing={0} className={classes.content}>
          {!phone && <Logo className={classes.logo} isLang />}
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
      </Card>
    </Container>
  );
}
