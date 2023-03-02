import { PasswordInput, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import PublicLayout from 'app/components/Layout/PublicLayout/PublicLayout';
import { makePublicStyles } from 'app/components/Layout/PublicLayout/PublicStyles';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

export function RegisterPage() {
  // Local
  const { t } = useTranslation();
  const { classes } = makePublicStyles();

  const form = useForm({
    initialValues: {
      username: '',
      password: '',
      confirmpassword: '',
    },
  });

  const handleSubmitRegister = () => {};
  return (
    <>
      <Helmet>
        <title>RegisterPage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <PublicLayout>
        <form onSubmit={form.onSubmit(handleSubmitRegister)}>
          <TextInput
            classNames={{ input: classes.input, label: classes.inputLabel }}
            label={t('Login.Username')}
            placeholder={t('Login.Enter your username')}
            {...form.getInputProps('username')}
          />
          <PasswordInput
            classNames={{ input: classes.input, label: classes.inputLabel }}
            label={t('Login.Password')}
            placeholder={t('Login.Enter your password')}
            {...form.getInputProps('password')}
          />
          <PasswordInput
            mt="sm"
            classNames={{ input: classes.input, label: classes.inputLabel }}
            label={t('Login.Confirm password')}
            placeholder={t('Login.Confirm password')}
            {...form.getInputProps('confirmPassword')}
          />
        </form>
      </PublicLayout>
    </>
  );
}
