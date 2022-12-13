import React, { useEffect, useState } from 'react';
import {
  Button,
  Checkbox,
  clsx,
  createStyles,
  Flex,
  PasswordInput,
  Text,
  TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconEyeOff, IconEye } from '@tabler/icons';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { UserSlice } from 'store/slice/userSlice';
import { getUserSelector } from 'store/slice/userSlice/selectors';

function SignIn() {
  const { actions } = UserSlice();
  const { classes } = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(getUserSelector);
  const [error, setError] = useState(false);

  const form = useForm({
    initialValues: {
      username: '',
      password: '',
      termsOfService: false,
    },
  });
  const handleSubmitSignIn = () => {
    console.log(form.values);
    if (!form.values.password || !form.values.password || user.login.error) {
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

  useEffect(() => {
    if (user.username) {
      navigate('/');
    } else {
      navigate('/login');
    }
  }, [navigate, user]);
  return (
    <form className={classes.form} onSubmit={form.onSubmit(handleSubmitSignIn)}>
      <TextInput
        label="Tên đăng nhập"
        placeholder="Tên đăng nhập"
        {...form.getInputProps('username')}
      />

      <PasswordInput
        styles={{
          rightSection: {
            right: 10,
          },
        }}
        className={classes.input}
        label="Mật khẩu"
        placeholder="Mật khẩu"
        visibilityToggleIcon={({ reveal }) =>
          reveal ? (
            <IconEye size={19.69} color="#000000" />
          ) : (
            <IconEyeOff size={19.69} color="#000000" />
          )
        }
        {...form.getInputProps('password')}
      />
      {error && (
        <Text className={classes.error}>
          Tên đăng nhập hoặc mật khẩu không đúng
        </Text>
      )}

      <Flex
        justify="space-between"
        align="center"
        sx={{
          position: 'relative',
          zUndex: 2,
        }}
      >
        <Flex align="center">
          <Checkbox
            mt="md"
            color="orange.7"
            {...form.getInputProps('termsOfService', { type: 'checkbox' })}
          />
          <Text className={classes.save}>Lưu mật khẩu</Text>
        </Flex>
        <Link to="/forgot">
          <Text className={clsx(classes.forgot, classes.save)}>
            Quên mật khẩu?
          </Text>
        </Link>
      </Flex>

      <Flex justify="center">
        <Button type="submit" variant="gradient" className={classes.signinBtn}>
          Đăng nhập
        </Button>
      </Flex>
    </form>
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
}));
