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
import { handleClearSpecialCharacter } from 'app/components/ConvertLang/ConvertLang';
import Background from 'app/components/Background/Background';
import LoginLayout from 'app/components/Layout/Login/LoginLayout';
import Social from 'app/components/Social/Social';
import { useMediaQuery } from '@mantine/hooks';
import MyPassInput from 'app/components/Customs/MyPassInput/MyPassInput';

export function LoginPage() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { actions } = UserSlice();
  const { counterActions } = CounterSlice();
  const user = useSelector(getUserSelector);
  const profile = useSelector(getProfileSelector);

  const { classes } = useStyles();
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
    if (/[ `!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?~]/g.test(e.key)) {
      e.preventDefault();
    }
  };
  const handleConvertEng = e => {
    form.setValues({
      ...form.values,
      [e.target.name]:
        e.target.name === 'username'
          ? handleClearSpecialCharacter(e.target.value.toLowerCase())
          : handleClearSpecialCharacter(e.target.value),
    });
  };
  useEffect(() => {
    if (user.token !== '') {
      const isImg = profile.picture.filter(img => {
        if (img) {
          return img;
        }
      });
      if (profile.nickname === '') {
        navigate('/register/nickname');
        dispatch(counterActions.setCounter({ value: 0 }));
      } else if (profile.picture.length === 0 || isImg.length === 0) {
        navigate('/register/picture');
        dispatch(counterActions.setCounter({ value: 1 }));
      } else if (profile.date_of_birth === '') {
        navigate('/register/birthday');
        dispatch(counterActions.setCounter({ value: 2 }));
      } else if (profile.zodiac === '' || profile.gender.length === 0) {
        navigate('/register/gender');
        dispatch(counterActions.setCounter({ value: 3 }));
      } else if (profile.introduction === '') {
        navigate('/register/description');
        dispatch(counterActions.setCounter({ value: 4 }));
      } else if (profile.relationship === -1) {
        navigate('/register/mode');
        dispatch(counterActions.setCounter({ value: 5 }));
      } else {
        dispatch(
          actions.loginSuccess({
            id: user.id,
            token: user.token,
            isLogin: true,
            loading: false,
            username: form.values.username,
            password: form.values.password,
            login: { savePassword: form.values.termsOfService },
          }),
        );
      }
    } else {
      navigate('/login');
      dispatch(counterActions.setCounter({ value: 0 }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.token]);
  useEffect(() => {
    if (!user.isLogin) {
      return;
    } else {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.isLogin]);
  return (
    <Background>
      <LoginLayout islogin={true}>
        <form
          className={classes.form}
          onSubmit={form.onSubmit(handleSubmitSignIn)}
        >
          <TextInput
            name="username"
            value={user.username}
            // defaultValue={user.username}
            label={t('LoginPage.username.Username')}
            placeholder={t('LoginPage.username.Enter your username')}
            {...form.getInputProps('username')}
            onKeyDown={e => {
              handleClearSpace(e);
            }}
            onKeyUp={e => {
              handleConvertEng(e);
            }}
          />
          <MyPassInput
            form={form}
            name="password"
            label="Password"
            placeholder="Password"
            handleKeyDown={handleClearSpace}
            handleKeyUp={handleConvertEng}
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
                checked={true}
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
            marginTop: '40px',
            [`@media (max-width:575px)`]: {
              marginTop: '18px',
            },
          }}
          label={t('LoginPage.or')}
          labelPosition="center"
        />
        <Social />
      </LoginLayout>
    </Background>
  );
}

const useStyles = createStyles(() => ({
  form: {
    width: '100%',
  },
  input: {
    marginTop: '16px',
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
    marginTop: '42px',
    padding: '16px 19px 16px 19px',

    [`@media (max-width:575px)`]: {
      width: '200px',
      height: '45px',
      fontSize: '20px',
      marginTop: '26px',
    },
  },
  forgot: { textDecoration: 'underline' },
}));
