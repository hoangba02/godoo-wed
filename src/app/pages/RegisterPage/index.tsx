import React, { useEffect, useRef, useState } from 'react';
import {
  Button,
  createStyles,
  Divider,
  Flex,
  Text,
  TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { UserSlice } from 'store/slice/userSlice';
import { getUserSelector } from 'store/slice/userSlice/selectors';
import Social from 'app/components/Social/Social';
import MyPassInput from 'app/components/Customs/MyPassInput/MyPassInput';
import LoginLayout from 'app/components/Layout/Login/LoginLayout';

export function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const { actions } = UserSlice();
  const { classes } = makeStyles();
  const userNameRef = useRef<HTMLInputElement>(null);
  const user = useSelector(getUserSelector);

  const [errName, setErrName] = useState(true);
  const [errPass, setErrPass] = useState(true);

  const form = useForm({
    validateInputOnChange: true,
    initialValues: {
      username: '',
      password: '',
      confirmPassword: '',
    },
    validate: {
      username: value => {
        const regex = /^[a-z0-9]+$/;
        if (value.length === 0) {
          setErrName(false);
          return t('LoginPage.error.Please fill in this field');
        } else if (!regex.test(value)) {
          setErrName(false);
          return t(
            'LoginPage.username.Contains only lowercase letters and numbers',
          );
        } else {
          setErrName(true);
          dispatch(
            actions.registerFail({
              register: {
                error: -1,
                message: '',
              },
            }),
          );
          return null;
        }
      },
      password: value => {
        const regex = /^[A-Za-z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{0,8}$/;
        if (value.length === 0) {
          setErrPass(false);
          return t('LoginPage.password.At least 8 characters');
        } else if (!regex.test(value)) {
          setErrPass(false);
          return t('LoginPage.password.At least 8 characters');
        } else {
          setErrPass(true);
          return null;
        }
      },
      confirmPassword: (value, values) => {
        if (value.length === 0) {
          return t('LoginPage.password.Password incorrect');
        } else if (value !== values.password) {
          return t('LoginPage.password.Password incorrect');
        } else {
          return null;
        }
      },
    },
  });

  const handleRegisterUser = () => {
    dispatch(
      actions.requestRegister({
        username: form.values.username,
        password: form.values.password,
      }),
    );
  };
  const handleClearSpace = e => {
    if (/ /g.test(e.key)) {
      e.preventDefault();
    }
  };
  return (
    <LoginLayout>
      <form
        className={classes.form}
        onSubmit={form.onSubmit(handleRegisterUser)}
      >
        <TextInput
          maxLength={16}
          name="username"
          label={t('LoginPage.username.Username')}
          placeholder={t('LoginPage.username.Enter your username')}
          error={form.errors.username}
          ref={userNameRef}
          {...form.getInputProps('username')}
          onKeyDown={handleClearSpace}
        />
        {errName && (
          <Text className={classes.error}>
            {t(
              'LoginPage.username.Contains only lowercase letters and numbers',
            )}
          </Text>
        )}

        <MyPassInput
          form={form}
          name="password"
          label="Password"
          placeholder="Password"
          handleKeyDown={handleClearSpace}
        />
        {errPass && (
          <Text className={classes.error}>
            {t('LoginPage.password.At least 8 characters')}
          </Text>
        )}
        <MyPassInput
          form={form}
          name="confirmPassword"
          label="Confirm password"
          placeholder="Confirm password"
          handleKeyDown={handleClearSpace}
        />

        <Flex align="center">
          <Text className={classes.rules}>
            {t('LoginPage.text.By clicking')}{' '}
            <span style={{ cursor: 'default' }}>
              {t('LoginPage.button.Sign up')}
            </span>{' '}
            {t('LoginPage.text.you agree with')}{' '}
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
            {t('LoginPage.button.Sign up')}
          </Button>
        </Flex>
      </form>
      <Divider
        styles={{
          label: {
            fontSize: '18px',
            fontWeight: 600,
            '&::after': {
              width: '320px',
            },
          },
        }}
        sx={{
          marginTop: '2%',
          [`@media (min-width:1536px)`]: {
            marginTop: '6%',
          },
          [`@media (min-width:1440px) and (max-width:1535px)`]: {
            marginTop: '4%',
          },
          '@media (max-width:575px)': {
            marginTop: 18,
          },
        }}
        label={t('LoginPage.or')}
        labelPosition="center"
      />
      <Social />
      <Text
        sx={{
          textAlign: 'center',
          justifySelf: 'flex-end',
          marginTop: '2%',
          fontSize: '18px',
          fontWeight: 400,
          lineHeight: '22.5px',
          position: 'relative',
          zIndex: 2,
          '& span': {
            color: 'var(--primary-1 )',
            fontWeight: 600,
            textDecoration: 'underline',
            userSelect: 'none',
            cursor: 'pointer',
          },
          [`@media (min-width:1536px)`]: {
            marginTop: '8%',
          },
          [`@media (min-width:1440px) and (max-width:1535px)`]: {
            marginTop: '4%',
          },
          [`@media (min-width:992px) and (max-width:1199px)`]: {
            marginTop: '2%',
          },
          [`@media (min-width:768px) and (max-width:991px)`]: {
            marginTop: '3%',
          },
          '@media (max-width:575px)': {
            marginTop: 18,
          },
        }}
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
    </LoginLayout>
  );
}

const makeStyles = createStyles(() => ({
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
    margin: '6px 0 0 0',
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '20px',
    '& span': {
      fontWeight: 600,
      cursor: 'pointer',
    },
  },
  registerBtn: {
    width: '269px',
    height: '52px',
    fontSize: '18px',
    fontWeight: 500,
    marginTop: '4%',
    padding: '16px 19px 16px 19px',
    [`@media (min-width:1536px)`]: {
      marginTop: '7%',
    },
    [`@media (min-width:1200px) and (max-width:1439px)`]: {
      width: '240px',
      height: '45px',
    },
    [`@media (min-width:992px) and (max-width:1199px)`]: {
      width: '240px',
      height: '45px',
    },
    [`@media (min-width:768px) and (max-width:991px)`]: {
      width: '240px',
      height: '45px',
    },
    '@media (max-width:575px)': {
      marginTop: 18,
    },
  },
}));
