import React from 'react';
import { useForm } from '@mantine/form';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Center,
  Flex,
  PasswordInput,
  Text,
  TextInput,
} from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Social from 'app/components/Social/Social';
import { AuthSlice } from 'store/slice/authSlice';
import { ReactComponent as IconEye } from 'assets/icons/eye.svg';
import { selectRegister } from 'store/slice/authSlice/selectors';
import { ReactComponent as IconEyeOff } from 'assets/icons/eye-off.svg';
import PublicLayout from 'app/components/Layout/PublicLayout/PublicLayout';
import { makePublicStyles } from 'app/components/Layout/PublicLayout/PublicStyles';
import { GradientButton } from 'app/components/Customs/Button/GradientButton';

export function RegisterPage() {
  const register = useSelector(selectRegister);
  const { authActions } = AuthSlice();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Local
  const { t } = useTranslation();
  const { classes } = makePublicStyles();

  const form = useForm({
    validateInputOnChange: ['username', 'password'],
    initialValues: {
      username: '',
      password: '',
      confirmPassword: '',
    },
    validate: {
      username: value => {
        const regex = /^[a-z0-9]+$/;
        if (value.length === 0) {
          return t('Login.Please fill in this field');
        } else if (!regex.test(value)) {
          return t('Login.Username is incorrect');
        } else {
          return null;
        }
      },
      password: value => {
        if (value.length === 0) {
          return t('Login.Please fill in this field');
        } else if (value.length > 8) {
          return t('Login.At least 8 characters');
        } else {
          return null;
        }
      },
      confirmPassword: (value, values) => {
        if (value.length === 0) {
          return t('Login.Please fill in this field');
        } else if (value !== values.password) {
          return t('Login.Password incorrect');
        } else {
          return null;
        }
      },
    },
  });
  const handleClearSpace = e => {
    if (/ /g.test(e.key)) {
      e.preventDefault();
    }
  };
  const handleSubmitRegister = () => {
    dispatch(
      authActions.requestRegister({
        password: form.values.password,
        username: form.values.password,
      }),
    );
  };
  return (
    <>
      <Helmet>
        <title>RegisterPage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <PublicLayout>
        <form onSubmit={form.onSubmit(handleSubmitRegister)}>
          <TextInput
            classNames={{
              input: classes.input,
              label: classes.inputLabel,
              error: classes.inputError,
            }}
            label={t('Login.Username')}
            error={form.errors.username}
            placeholder={t('Login.Enter your username')}
            {...form.getInputProps('username')}
            onKeyDown={handleClearSpace}
          />
          <Text sx={{ color: '#929292' }} className={classes.inputError}>
            {!form.errors.username
              ? t('Login.Contains only lowercase letters and numbers')
              : ''}
          </Text>
          <PasswordInput
            classNames={{
              input: classes.input,
              label: classes.inputLabel,
              error: classes.inputError,
              visibilityToggle: classes.inputIcon,
            }}
            maxLength={50}
            error={form.errors.password}
            label={t('Login.Password')}
            placeholder={t('Login.Enter your password')}
            visibilityToggleIcon={({ reveal }) =>
              reveal ? <IconEye /> : <IconEyeOff />
            }
            {...form.getInputProps('password')}
            onKeyDown={handleClearSpace}
          />
          <Text sx={{ color: '#929292' }} className={classes.inputError}>
            {!form.errors.password ? t('Login.At least 8 characters') : ''}
          </Text>
          <PasswordInput
            mt="sm"
            classNames={{
              input: classes.input,
              label: classes.inputLabel,
              error: classes.inputError,
              visibilityToggle: classes.inputIcon,
            }}
            maxLength={50}
            label={t('Login.Confirm password')}
            placeholder={t('Login.Confirm password')}
            {...form.getInputProps('confirmPassword')}
            visibilityToggleIcon={({ reveal }) =>
              reveal ? <IconEye /> : <IconEyeOff />
            }
          />
          <Flex align="center">
            <Text className={classes.rules}>
              {t('Login.By clicking')}{' '}
              <span style={{ cursor: 'default' }}>{t('Login.Sign up')}</span>{' '}
              {t('Login.you agree with')}{' '}
              <span>{t('Login.Terms of Service')}</span> {t('Login.and')}{' '}
              <span>{t('Login.Privacy Policy')}</span> {t('Login.of GoDoo')}
            </Text>
          </Flex>
          <Center>
            <GradientButton type="submit" className={classes.loginBtn}>
              {t('Login.Sign up')}
            </GradientButton>
          </Center>
          <Flex className={classes.or}>
            <Box className={classes.line} />
            <Text className={classes.orText}>{t('Login.or')}</Text>
            <Box className={classes.line} />
          </Flex>
          <Social />
          <Text className={classes.question}>
            {t('Login.Already had an account?')}{' '}
            <span
              onClick={() => {
                navigate('/login');
              }}
            >
              {t('Login.Log in')}
            </span>
          </Text>
        </form>
      </PublicLayout>
    </>
  );
}
