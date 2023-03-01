import React, { useEffect, useState } from 'react';
import {
  Button,
  Checkbox,
  clsx,
  createStyles,
  Divider,
  Flex,
  Text,
  TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { UserSlice } from 'store/slice/userSlice';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  getProfileSelector,
  getUserSelector,
} from 'store/slice/userSlice/selectors';
import { useTranslation } from 'react-i18next';
import { CounterSlice } from 'store/slice/counterSlice';
import Social from 'app/components/Social/Social';
import { useMediaQuery } from '@mantine/hooks';
import MyPassInput from 'app/components/Customs/MyPassInput/MyPassInput';
import LoginLayout from 'app/components/Layout/Login/LoginLayout';
export const LoginPage = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { actions } = UserSlice();
  const { counterActions } = CounterSlice();
  const user = useSelector(getUserSelector);
  const profile = useSelector(getProfileSelector);

  const { classes } = makeStyles();
  const [error, setError] = useState(false);
  const phone = useMediaQuery('(max-width: 575px)');
  const form = useForm({
    initialValues: {
      username: user.login.savePassword ? user.username : '',
      password: user.login.savePassword ? user.password : '',
      termsOfService: user.login.savePassword,
    },
  });
  const handleSubmitSignIn = () => {
    if (!form.values.username || !form.values.password) {
      setError(true);
    } else {
      setError(false);
      dispatch(
        actions.requestLogin({
          username: form.values.username,
          password: form.values.password,
          login: { savePassword: form.values.termsOfService },
        }),
      );
      dispatch(actions.setDevice({ device: phone }));
    }
  };
  const handleClearSpace = e => {
    if (/ /g.test(e.key)) {
      e.preventDefault();
    }
  };
  const handleFocusInput = () => {
    dispatch(
      actions.loginFail({
        login: {
          error: -1,
          message: '',
          savePassword: form.values.termsOfService,
        },
      }),
    );
  };
  useEffect(() => {
    if (user.token !== '') {
      const checkImg = profile.picture.filter(pic => pic !== '');
      if (!profile.nickname) {
        navigate('/register/nickname');
        dispatch(counterActions.setCounter({ value: 0 }));
      } else if (profile.picture.length === 0 || checkImg.length === 0) {
        navigate('/register/picture');
        dispatch(counterActions.setCounter({ value: 1 }));
      } else if (!profile.date_of_birth) {
        navigate('/register/birthday');
        dispatch(counterActions.setCounter({ value: 2 }));
      } else if (profile.gender.length === 0) {
        navigate('/register/gender');
        dispatch(counterActions.setCounter({ value: 3 }));
      } else if (!profile.introduction) {
        navigate('/register/description');
        dispatch(counterActions.setCounter({ value: 4 }));
      } else {
        navigate('/');
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.token]);
  return (
    <LoginLayout>
      <form
        className={classes.form}
        onSubmit={form.onSubmit(handleSubmitSignIn)}
      >
        <TextInput
          name="username"
          value={user.username}
          label={t('LoginPage.username.Username')}
          placeholder={t('LoginPage.username.Enter your username')}
          {...form.getInputProps('username')}
          onKeyDown={e => {
            handleClearSpace(e);
          }}
          onFocus={handleFocusInput}
        />
        <MyPassInput
          form={form}
          name="password"
          label="Password"
          placeholder="Password"
          handleKeyDown={handleClearSpace}
          handleFocus={handleFocusInput}
        />
        {error || user.login.error > 0 ? (
          <Text className={classes.error}>
            {t('LoginPage.error.Username or password incorrect')}
          </Text>
        ) : (
          <></>
        )}

        <Flex
          justify="space-between"
          align="center"
          sx={{
            position: 'relative',
            zIndex: 2,
          }}
        >
          <Flex align="center">
            <Checkbox
              checked={false}
              mt="md"
              color="orange.7"
              {...form.getInputProps('termsOfService', { type: 'checkbox' })}
            />
            <Text className={classes.save}>
              {t('LoginPage.password.Remember me')}
            </Text>
          </Flex>
          <Link to="/forgot">
            <Text className={clsx(classes.forgot, classes.save)}>
              {t('LoginPage.password.Forgot password')}
            </Text>
          </Link>
        </Flex>

        <Flex justify="center">
          <Button
            type="submit"
            variant="gradient"
            className={classes.signinBtn}
          >
            {t('LoginPage.button.Log in')}
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
          marginTop: '4%',
          [`@media (max-width:575px)`]: {
            marginTop: '18px',
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
          marginTop: '5%',
          fontSize: '18px',
          fontWeight: 400,
          lineHeight: '22.5px',
          position: 'relative',
          '& span': {
            color: 'var(--primary-1 )',
            fontWeight: 600,
            textDecoration: 'underline',
            userSelect: 'none',
            cursor: 'pointer',
          },
        }}
      >
        {t("LoginPage.question.Don't have an account?")}{' '}
        <span
          onClick={() => {
            navigate('/register');
          }}
        >
          {t('LoginPage.button.Sign up')}
        </span>
      </Text>
    </LoginLayout>
  );
};

const makeStyles = createStyles(() => ({
  form: {
    width: '100%',
  },
  error: {
    color: 'var(--red)',
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '15px',
    marginTop: '4px',
  },
  save: {
    color: 'var(--black)',
    margin: '10px 0 0 2px',
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '20px',
  },
  signinBtn: {
    width: '269px',
    height: '52px',
    fontSize: '18px',
    fontWeight: 500,
    marginTop: '5%',
    padding: '16px 19px 16px 19px',
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
    [`@media (max-width:575px)`]: {
      width: '200px',
      height: '45px',
      fontSize: '20px',
      marginTop: '26px',
    },
  },
  forgot: { textDecoration: 'underline' },
}));
