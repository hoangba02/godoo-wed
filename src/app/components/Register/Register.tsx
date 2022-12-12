import React from 'react';
import {
  Button,
  Checkbox,
  createStyles,
  Flex,
  PasswordInput,
  Text,
  TextInput,
} from '@mantine/core';

import { useForm } from '@mantine/form';
import { IconEyeOff, IconEye } from '@tabler/icons';
import { useMediaQuery } from '@mantine/hooks';
function Register() {
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
      name: value => (value.length < 2 ? 'Bao gồm chữ cái thường và số' : null),
      password: value => (value.length < 8 ? 'Tối thiểu 8 ký tự' : null),
      confirmPassword: (value, values) =>
        value !== values.password ? 'Mật khẩu không trùng khớp' : null,
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
        label="Xác nhận mật khẩu"
        placeholder="Xác nhận mật khẩu"
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
        <Checkbox
          mt={phone ? '7px' : 'md'}
          color="orange.7"
          {...form.getInputProps('termsOfService', { type: 'checkbox' })}
        />
        <Text className={classes.rules}>
          Đồng ý với <span>Điều khoản dịch vụ</span> và{' '}
          <span>Chính sách bảo mật</span>
        </Text>
      </Flex>

      <Flex justify="center">
        <Button
          type="submit"
          variant="gradient"
          className={classes.registerBtn}
        >
          Đăng ký
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
      textDecoration: 'underline',
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
