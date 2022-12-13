import React from 'react';
import {
  Button,
  createStyles,
  Flex,
  PasswordInput,
  Text,
  TextInput,
} from '@mantine/core';

import { useForm } from '@mantine/form';
import { useMediaQuery } from '@mantine/hooks';
import { IconEyeOff, IconEye } from '@tabler/icons';
import { useTranslation } from 'react-i18next';
function Register() {
  const { t } = useTranslation();
  const { classes } = useStyles();
  const phone = useMediaQuery('(max-width: 575px)');
  const form = useForm({
    initialValues: {
      name: '',
      password: '',
      confirmPassword: '',
      termsOfService: false,
    },

    validate: {
      name: value => {
        if (value.length < 2) {
          return t(
            'LoginPage.username.Contains only lowercase letters and numbers',
          );
        }
      },
      // value.length < 2
      //   ? t('LoginPage.username.Contains only lowercase letters and numbers')
      //   : null,
      password: value =>
        value.length < 8 ? t('LoginPage.error.At least 8 characters') : null,
      confirmPassword: (value, values) =>
        value !== values.password
          ? t('LoginPage.password.Password incorrect')
          : null,
    },
  });
  return (
    <form className={classes.form} onSubmit={form.onSubmit(console.log)}>
      <TextInput
        maxLength={16}
        label={t('LoginPage.username.Username')}
        placeholder={t('LoginPage.username.Username')}
        {...form.getInputProps('name')}
      />

      <PasswordInput
        styles={{
          rightSection: {
            right: 10,
          },
        }}
        className={classes.input}
        label={t('LoginPage.password.Password')}
        placeholder={t('LoginPage.password.Password')}
        visibilityToggleIcon={({ reveal }) =>
          reveal ? (
            <IconEye size={19.69} color="#000000" />
          ) : (
            <IconEyeOff size={19.69} color="#000000" />
          )
        }
        {...form.getInputProps('password')}
      />

      <PasswordInput
        styles={{
          rightSection: {
            right: 10,
          },
        }}
        className={classes.input}
        mt="sm"
        label={t('LoginPage.password.Confirm password')}
        placeholder={t('LoginPage.password.Confirm password')}
        visibilityToggleIcon={({ reveal }) =>
          reveal ? (
            <IconEye size={19.69} color="#000000" />
          ) : (
            <IconEyeOff size={19.69} color="#000000" />
          )
        }
        {...form.getInputProps('confirmPassword')}
      />
      <Flex align="center">
        <Text className={classes.rules}>
          {t('LoginPage.text.By clicking')}{' '}
          <span>{t('LoginPage.button.Sign up')}</span>{' '}
          {t('LoginPage.text.you have agreed with')}{' '}
          <span>{t('LoginPage.text.Terms of Service')}</span>{' '}
          {t('LoginPage.text.and')}{' '}
          <span>{t('LoginPage.text.Privacy Policy')}</span>{' '}
          {t('LoginPage.text.of GoDoo')}
        </Text>
      </Flex>

      <Flex justify="center">
        <Button
          type="submit"
          variant="gradient"
          className={classes.registerBtn}
        >
          {t('LoginPage.button.Register')}
        </Button>
      </Flex>
    </form>
  );
}

export default Register;

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
  form: {
    width: '100%',
  },
  input: {
    marginTop: '16px',
  },
  rules: {
    margin: '6px 0 0 10px',
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '20px',
    '& span': {
      fontWeight: 600,
      cursor: 'pointer',
    },
    [`@media (max-width:575px)`]: {
      margin: '10px 0 0 10px',
    },
  },
  registerBtn: {
    width: '269px',
    height: '52px',
    fontSize: '18px',
    fontWeight: 500,
    marginTop: '42px',
    padding: '16px 19px 16px 19px',
    [`@media (max-width:575px)`]: {
      width: '200px',
      height: '45px',
      fontSize: '20px',
      marginTop: '26px',
    },
  },
}));
