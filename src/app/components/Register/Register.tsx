import React, { useEffect, useRef, useState } from 'react';
import {
  Button,
  createStyles,
  Divider,
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
import { images } from 'assets/images';
import { convertLang } from '../ConvertLang';

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const { actions } = UserSlice();
  const { classes } = useStyles();
  const userNameRef = useRef<HTMLInputElement>(null);
  const user = useSelector(getUserSelector);

  const [errName, setErrName] = useState(true);
  const [errPass, setErrPass] = useState(true);

  const form = useForm({
    initialValues: {
      username: '',
      password: '',
      confirmPassword: '',
    },
    validate: {
      username: value => {
        if (value.length === 0) {
          if (userNameRef.current !== null) {
            userNameRef.current.focus();
            setErrName(false);
          }
          return t('LoginPage.error.Please fill in this field');
        }
      },
      password: value => {
        if (value.length === 0) {
          setErrPass(false);
          return t('LoginPage.error.Please fill in this field');
        }
        if (value.length >= 1 && value.length < 8) {
          setErrPass(false);
          return t('LoginPage.password.At least 8 characters');
        }
        return null;
      },
      confirmPassword: (value, values) => {
        if (value.length === 0) {
          return t('LoginPage.error.Please fill in this field');
        } else if (value.length >= 1 && value !== values.password) {
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
    if (/[ `!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?~]/g.test(e.key)) {
      e.preventDefault();
    }
  };

  const handleConvertEng = e => {
    form.setValues({
      ...form.values,
      [e.target.name]:
        e.target.name === 'username'
          ? convertLang(e.target.value.toLowerCase())
          : convertLang(e.target.value),
    });
  };
  useEffect(() => {
    if (user.register.error === -1) {
      return;
    } else if (user.register.error === 10) {
      setErrName(false);
      form.setErrors({
        username: t('LoginPage.username.This username has already existed'),
      });
    } else if (user.register.error === 0) {
      setErrName(false);
      navigate('/profile');
    } else {
      setErrName(true);
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.register.error]);
  return (
    <LoginPage islogin={false}>
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
          onKeyDown={e => {
            handleClearSpace(e);
          }}
          onFocus={() => {
            setErrPass(true);
            setErrName(true);
            form.setErrors({ username: '' });
          }}
          onInput={() => {
            setErrName(true);
          }}
          onKeyUp={e => {
            handleConvertEng(e);
          }}
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
          name="password"
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
          onFocus={() => {
            setErrName(true);
            setErrPass(true);
            form.setErrors({ password: '' });
          }}
          onInput={() => setErrPass(true)}
          onKeyUp={e => {
            handleConvertEng(e);
          }}
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
          name="confirmPassword"
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
          onKeyUp={e => {
            handleConvertEng(e);
          }}
        />

        <Flex align="center">
          <Text className={classes.rules}>
            {t('LoginPage.text.By clicking')}{' '}
            <span style={{ cursor: 'default' }}>
              {t('LoginPage.button.Sign up')}
            </span>{' '}
            {t('LoginPage.text.you have agree with')}{' '}
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
            [`@media (max-width:575px)`]: {
              '&::after': {
                width: '250px',
              },
            },
          },
        }}
        sx={{
          marginTop: '40px',
          // [`@media (min-width:768px) and (max-width:991px)`]: {
          //   marginTop: '18px',
          // },
          // [`@media (min-width:576px) and (max-width:767px)`]: {
          //   marginTop: '14px ',
          // },
          [`@media (max-width:575px)`]: {
            marginTop: '18px',
          },
        }}
        label={t('LoginPage.or')}
        labelPosition="center"
      />
      <Flex mt={38} className={classes.social}>
        <Button variant="subtle" className={classes.socialBtn}>
          <img className={classes.img} src={images.facebook} alt="facebook" />
        </Button>
        <Button variant="subtle" mx={64} className={classes.socialBtn}>
          <img className={classes.img} src={images.google} alt="google" />
        </Button>
        <Button variant="subtle" className={classes.socialBtn}>
          <img className={classes.img} src={images.apple} alt="apple" />
        </Button>
      </Flex>
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
    margin: '6px 0 0 0',
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '20px',
    '& span': {
      fontWeight: 600,
      cursor: 'pointer',
    },
    [`@media (max-width:575px)`]: {
      margin: '10px 0 0 10px',
      fontSize: '12px',
    },
  },
  registerBtn: {
    width: '269px',
    height: '52px',
    fontSize: '18px',
    fontWeight: 500,
    marginTop: '42px',
    padding: '16px 19px 16px 19px',
    [`@media (min-width:768px) and (max-width:991px)`]: {
      marginTop: '42px',
    },
    [`@media (min-width:576px) and (max-width:767px)`]: {
      marginTop: '42px',
    },
    [`@media (max-width:575px)`]: {
      width: '200px',
      height: '45px',
      fontSize: '20px',
      marginTop: '26px',
    },
  },
  social: {
    width: '100%',
    justifyContent: 'center',
    [`@media (min-width:768px) and (max-width:991px)`]: {
      marginTop: '18px ',
    },
    [`@media (max-width:575px)`]: {
      marginTop: '18px',
    },
  },
  socialBtn: {
    width: '64px',
    height: '64px',
    padding: '0',
    borderRadius: '50%',

    [`@media (max-width:575px)`]: {
      width: '50px',
      height: '50px',
    },
  },
  img: {
    width: '100%',
    height: '100%',
  },
}));
