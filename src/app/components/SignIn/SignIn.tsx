import React, { useEffect, useState } from 'react';
import {
  Button,
  Checkbox,
  clsx,
  createStyles,
  Divider,
  Flex,
  PasswordInput,
  Text,
  TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { UserSlice } from 'store/slice/userSlice';
import { IconEyeOff, IconEye } from '@tabler/icons';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserSelector } from 'store/slice/userSlice/selectors';
import { useTranslation } from 'react-i18next';
import { LoginPage } from 'app/pages/LoginPage/Loadable';
import { images } from 'assets/images';
import { convertLang, handleClearSpecialCharacter } from '../ConvertLang';

function SignIn() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { actions } = UserSlice();
  const { classes } = useStyles();
  const user = useSelector(getUserSelector);
  const [error, setError] = useState(false);

  const form = useForm({
    initialValues: {
      username: '',
      password: '',
      termsOfService: true,
    },
  });

  const handleSubmitSignIn = () => {
    console.log(form.values);
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
    }
  };
  const handleClearSpace = e => {
    if (/[ `!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?~]/g.test(e.key)) {
      e.preventDefault();
    }
  };

  const handleConvertEng = e => {
    console.log(e.target.value);
    form.setValues({
      ...form.values,
      [e.target.name]:
        e.target.name === 'username'
          ? handleClearSpecialCharacter(e.target.value.toLowerCase())
          : handleClearSpecialCharacter(e.target.value),
    });
  };
  useEffect(() => {
    if (
      user.login.message === 'invalid_username' ||
      user.login.message === 'invalid_password'
    ) {
      setError(true);
    } else {
      // setError(false);
      return;
    }
  }, [user.login.message]);
  useEffect(() => {
    if (user.username) {
      navigate('/');
    }
  }, [navigate, user]);
  return (
    <LoginPage islogin={true}>
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
        <PasswordInput
          styles={{
            rightSection: {
              right: 10,
            },
          }}
          name="password"
          value={user.password}
          // defaultValue={user.password}
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
          onKeyDown={e => {
            handleClearSpace(e);
          }}
          onKeyUp={e => {
            // const target = e.target as HTMLInputElement;
            handleConvertEng(e);
          }}
          {...form.getInputProps('password')}
        />
        {error && (
          <Text className={classes.error}>
            {t('LoginPage.error.Username or password incorrect')}
          </Text>
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

export default SignIn;

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
    margin: '10px 0 0 10px',
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
  social: {
    width: '100%',
    justifyContent: 'center',
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
