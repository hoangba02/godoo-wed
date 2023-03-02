import React from 'react';
import { useForm } from '@mantine/form';
import { Helmet } from 'react-helmet-async';
import PublicLayout from 'app/components/Layout/PublicLayout/PublicLayout';
import {
  Box,
  Button,
  Center,
  Checkbox,
  Flex,
  PasswordInput,
  Text,
  TextInput,
} from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { makePublicStyles } from 'app/components/Layout/PublicLayout/PublicStyles';
import { ReactComponent as IconEye } from 'assets/icons/eye.svg';
import { ReactComponent as IconEyeOff } from 'assets/icons/eye-off.svg';

export function LoginPage() {
  // Local
  const { t } = useTranslation();
  const { classes } = makePublicStyles();

  const form = useForm({
    initialValues: {
      username: '',
      password: '',
      rememberPassword: true,
    },
  });
  const handleSubmitLogin = () => {};
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
              error: classes.inputError,
            }}
            label={t('Login.Username')}
            placeholder={t('Login.Enter your username')}
            {...form.getInputProps('username')}
          />
          <PasswordInput
            classNames={{
              input: classes.input,
              label: classes.inputLabel,
              error: classes.inputError,
            }}
            label={t('Login.Password')}
            placeholder={t('Login.Enter your password')}
            visibilityToggleIcon={({ reveal }) =>
              reveal ? <IconEye /> : <IconEyeOff />
            }
            {...form.getInputProps('password')}
          />
          <Text className={classes.inputError}>
            {t('Login.Username or password incorrect')}
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
            >
              {t('Login.Forgot password')}
            </Text>
          </Flex>
          <Center>
            <Button>{t('Login.Log in')}</Button>
          </Center>
          <Flex>
            <Box />
            <Text>{t('Login.or')}</Text>
            <Box />
          </Flex>
          <Text>
            {t("Login.Don't have an account?")}{' '}
            <span>{t('Login.Sign up')}</span>
          </Text>
        </form>
      </PublicLayout>
    </>
  );
}
