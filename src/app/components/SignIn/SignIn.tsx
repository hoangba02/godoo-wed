import React from 'react';
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
import { Link } from 'react-router-dom';
function SignIn() {
  const { classes } = useStyles();
  const form = useForm({
    initialValues: {
      name: '',
      password: '',
      confirmPassword: '',
      termsOfService: false,
    },

    validate: {
      name: value => (value.length < 2 ? 'Bao gồm chữ cái thường và số' : null),
      password: value => (value.length < 8 ? 'Tối thiểu 8 ký tự' : null),
    },
  });
  return (
    <form className={classes.form} onSubmit={form.onSubmit(console.log)}>
      <TextInput
        label="Tên đăng nhập"
        placeholder="Tên đăng nhập"
        {...form.getInputProps('name')}
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
            <IconEyeOff size={19.69} color="#000000" />
          ) : (
            <IconEye size={19.69} color="#000000" />
          )
        }
        {...form.getInputProps('password')}
      />
      <Flex justify="space-between" align="center">
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
