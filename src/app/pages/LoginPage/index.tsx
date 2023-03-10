import React, { useEffect } from 'react';
import { useForm } from '@mantine/form';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PublicLayout from 'app/components/Layout/PublicLayout/PublicLayout';
import {
  Box,
  Center,
  Checkbox,
  Flex,
  PasswordInput,
  Text,
  TextInput,
} from '@mantine/core';
import { AuthSlice } from 'store/slice/authSlice';
import Social from 'app/components/Social/Social';
import { ReactComponent as IconEye } from 'assets/icons/eye.svg';
import { ReactComponent as IconEyeOff } from 'assets/icons/eye-off.svg';
import { makePublicStyles } from 'app/components/Layout/PublicLayout/PublicStyles';
import { GradientButton } from 'app/components/Customs/Button/GradientButton';
import { selectAuth, selectLogin } from 'store/slice/authSlice/selectors';

export function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { authActions } = AuthSlice();
  const { currentUser } = useSelector(selectAuth);
  const { error, remember } = useSelector(selectLogin);
  // Local
  const { t } = useTranslation();
  const { classes } = makePublicStyles();

  const form = useForm({
    initialValues: {
      username: currentUser?.username,
      password: currentUser?.password,
      rememberPassword: remember,
    },
    validate: {
      username: value => {
        const regex = /^[a-z0-9]+$/;
        if (value.length === 0) {
          return 1;
        } else if (!regex.test(value)) {
          return t('Login.Username is incorrect');
        } else {
          return null;
        }
      },
      password: value => {
        if (value.length === 0) {
          return t('Login.Username or password incorrect');
        }
      },
    },
  });
  const handleClearSpace = e => {
    if (/ /g.test(e.key)) {
      e.preventDefault();
    }
  };
  const handleSubmitLogin = () => {
    dispatch(
      authActions.requestLogin({
        username: form.values.username,
        password: form.values.password,
        remember: form.values.rememberPassword,
      }),
    );
  };
  useEffect(() => {
    dispatch(authActions.resetLogin());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Helmet>
        <title>LoginPage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <PublicLayout>
        <form onSubmit={form.onSubmit(handleSubmitLogin)}>
          <TextInput
            classNames={{
              root: classes.root,
              input: classes.input,
              label: classes.inputLabel,
              error: classes.errorLogin,
            }}
            label={t('Login.Username')}
            placeholder={t('Login.Enter your username')}
            {...form.getInputProps('username')}
            onKeyDown={handleClearSpace}
          />
          <PasswordInput
            classNames={{
              input: classes.input,
              label: classes.inputLabel,
              error: classes.inputError,
              visibilityToggle: classes.inputIcon,
            }}
            label={t('Login.Password')}
            placeholder={t('Login.Enter your password')}
            visibilityToggleIcon={({ reveal }) =>
              reveal ? <IconEye /> : <IconEyeOff />
            }
            {...form.getInputProps('password')}
            onKeyDown={handleClearSpace}
          />
          <Text className={classes.inputError}>
            {error > 9 && t('Login.Username or password incorrect')}
          </Text>
          <Flex className={classes.save}>
            <Checkbox
              classNames={{ label: classes.forgot }}
              color="orange.7"
              label={t('Login.Remember me')}
              {...form.getInputProps('rememberPassword', { type: 'checkbox' })}
            />
            <Text
              sx={{ textDecoration: 'underline' }}
              className={classes.forgot}
              onClick={() => {
                navigate('/forgot/name');
              }}
            >
              {t('Login.Forgot password')}
            </Text>
          </Flex>
          <Center>
            <GradientButton type="submit" className={classes.loginBtn}>
              {t('Login.Log in')}
            </GradientButton>
          </Center>
          <Flex className={classes.or}>
            <Box className={classes.line} />
            <Text className={classes.orText}>{t('Login.or')}</Text>
            <Box className={classes.line} />
          </Flex>
          <Social />
          <Text className={classes.question}>
            {t("Login.Don't have an account?")}{' '}
            <span
              onClick={() => {
                navigate('/register');
              }}
            >
              {t('Login.Sign up')}
            </span>
          </Text>
        </form>
      </PublicLayout>
    </>
  );
}
