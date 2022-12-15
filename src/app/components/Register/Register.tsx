import React, { useEffect, useState } from 'react';
import {
  Button,
  createStyles,
  Flex,
  PasswordInput,
  Text,
  TextInput,
} from '@mantine/core';

import { useForm } from '@mantine/form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { IconEyeOff, IconEye } from '@tabler/icons';
import { useDispatch, useSelector } from 'react-redux';

import { UserSlice } from 'store/slice/userSlice';
import { LoginPage } from 'app/pages/LoginPage/Loadable';
import { getUserSelector } from 'store/slice/userSlice/selectors';

const REG_USERNAME = /^[a-z0-9]+$/;
function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const { actions } = UserSlice();
  const { classes } = useStyles();
  const user = useSelector(getUserSelector);

  const [errName, setErrName] = useState(true);
  const [errPass, setErrPass] = useState(true);

  const form = useForm({
    // validateInputOnBlur: true,
    initialValues: {
      username: '',
      password: '',
      confirmPassword: '',
    },
    validate: {
      username: value => {
        if (value.length === 0) {
          setErrName(false);
          return t('LoginPage.username.Username incorrect');
        }
        return null;
      },
      password: value => {
        if (value.length === 0) {
          setErrPass(false);
          return t('LoginPage.password.At least 8 characters');
        }
        return null;
      },
      confirmPassword: (value, values) =>
        value !== values.password
          ? t('LoginPage.password.Password incorrect')
          : null,
    },
  });
  // const errorUserName = () => {
  //   if (user.register.message === 'user_exist') {
  //     form.setErrors({
  //       username: t('LoginPage.username.This username has already existed'),
  //     });
  //   }
  // };
  const handleBlurUser = () => {
    // setErrPass(false);
    form.setValues({ username: form.values.username.toLowerCase() });
    if (!REG_USERNAME.test(form.values.username)) {
      setErrName(false);
      form.setErrors({ username: t('LoginPage.username.Username incorrect') });
    }
  };
  const handleBlurPass = () => {
    // setErrName(false);
    if (form.values.password.length < 8) {
      setErrPass(false);
      form.setErrors({
        password: t('LoginPage.password.At least 8 characters'),
      });
    }
  };
  const handleRegisterUser = () => {
    console.log(form.errors);
    dispatch(
      actions.requestRegister({
        username: form.values.username,
        password: form.values.password,
      }),
    );
  };
  const handleClearSpace = e => {
    if (/[ `!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?~]/g.test(e.key)) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    console.log(101, user.register.message);
    if (user.register.message === 'user_exist') {
      setErrName(false);
      form.setErrors({
        username: t('LoginPage.username.This username has already existed'),
      });
    } else {
      setErrName(true);
      return;
    }
  }, [user]);
  return (
    <LoginPage islogin={false}>
      <form
        className={classes.form}
        onSubmit={form.onSubmit(handleRegisterUser)}
      >
        <TextInput
          maxLength={16}
          label={t('LoginPage.username.Username')}
          placeholder={t('LoginPage.username.Enter your username')}
          error={form.errors.username}
          {...form.getInputProps('username')}
          onKeyDown={e => {
            handleClearSpace(e);
          }}
          onBlur={() => {
            handleBlurUser();
          }}
          onFocus={() => {
            setErrPass(true);
            setErrName(true);
            form.setErrors({ username: '' });
          }}
          onInput={() => setErrName(true)}
        />
        {errName && (
          <Text className={classes.error}>
            {t(
              'LoginPage.username.Contains only lowercase letters and numbers',
            )}
          </Text>
        )}

        <PasswordInput
          styles={{
            rightSection: {
              right: 10,
            },
          }}
          className={classes.input}
          label={t('LoginPage.password.Password')}
          placeholder={t('LoginPage.password.Enter your password')}
          visibilityToggleIcon={({ reveal }) =>
            reveal ? (
              <IconEye stroke={2.5} size={21} color="#000000" />
            ) : (
              <IconEyeOff stroke={2.5} size={21} color="#000000" />
            )
          }
          {...form.getInputProps('password')}
          onKeyDown={e => {
            handleClearSpace(e);
          }}
          onBlur={() => {
            handleBlurPass();
          }}
          onFocus={() => {
            setErrName(true);
            setErrPass(true);
            form.setErrors({ password: '' });
          }}
          onInput={() => setErrPass(true)}
        />
        {errPass && (
          <Text className={classes.error}>
            {t('LoginPage.password.At least 8 characters')}
          </Text>
        )}

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
              <IconEye stroke={2.5} size={21} color="#000000" />
            ) : (
              <IconEyeOff stroke={2.5} size={21} color="#000000" />
            )
          }
          {...form.getInputProps('confirmPassword')}
          onKeyDown={e => {
            handleClearSpace(e);
          }}
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
            // onClick={() => handleRegisterUser}
            type="submit"
            variant="gradient"
            className={classes.registerBtn}
          >
            {t('LoginPage.button.Sign up')}
          </Button>
        </Flex>
      </form>
    </LoginPage>
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
  error: {
    fontSize: '12px',
    lineHeight: 1.2,
    display: 'block',
    color: 'var(--grey-dark)',
    marginTop: '4px',
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
