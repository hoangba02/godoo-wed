import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Container,
  Flex,
  Group,
  NumberInput,
  PasswordInput,
  Text,
  TextInput,
} from '@mantine/core';
import { IconEyeOff, IconEye } from '@tabler/icons';
import { IconArrowLeft } from '@tabler/icons';
import { useForm } from '@mantine/form';
import { ReactComponent as Mes } from 'assets/icons/mes.svg';
import { ReactComponent as Tele } from 'assets/icons/tele.svg';
import { useNavigate } from 'react-router-dom';
import { ForgotPassStyles } from './ForgotPassStyles';
import { useInterval, useMediaQuery } from '@mantine/hooks';
import Logo from 'app/components/Logo/Logo';

function ForgotPass() {
  const { classes } = ForgotPassStyles();
  const phone = useMediaQuery('(max-width:575px)');
  const [next, setNext] = useState('');
  const navigate = useNavigate();

  const handleComeBack = () => {
    navigate(-1);
  };

  return (
    <Container>
      <div className={classes.wrapper}>
        <Box className={classes.card}>
          <Logo className={classes.logo} />
          <Flex className={classes.header}>
            <button className={classes.back} onClick={handleComeBack}>
              <IconArrowLeft />
            </button>
            <Text className={classes.title}>Đặt lại mật khẩu</Text>
          </Flex>
          {next === 'method' ? (
            <MethodOTP setNext={setNext} />
          ) : next === 'codeMess' ? (
            <Code setNext={setNext} status="Messenger" />
          ) : next === 'codeTele' ? (
            <Code setNext={setNext} status="Telegram" />
          ) : next === 'change' ? (
            <ChangePass />
          ) : (
            <InputName setNext={setNext} />
          )}
        </Box>
      </div>
    </Container>
  );
}

export default ForgotPass;

export function InputName({ setNext }) {
  const { classes } = ForgotPassStyles();
  const phone = useMediaQuery('(max-width:575px)');

  const form = useForm<{ name: string }>({
    initialValues: { name: '' },
    validate: values => ({
      name: values.name.length < 2 ? 'Tên bao gồm chữ và số' : null,
    }),
  });
  const handleNext = values => {
    console.log(values);
    if (values) {
      setNext('method');
    }
  };
  return (
    <>
      <form onSubmit={form.onSubmit(values => handleNext(values))}>
        {phone && (
          <Text className={classes.desc}>
            Vui lòng cung cấp Tên đăng nhập để lấy lại mật khẩu.
          </Text>
        )}
        <TextInput
          className={classes.input}
          label="Tên đăng nhập"
          {...form.getInputProps('name')}
        />
        {!phone && (
          <Text className={classes.desc}>
            Vui lòng cung cấp Tên đăng nhập để lấy lại mật khẩu.
          </Text>
        )}
        <Group position="center" mt="md">
          <Button type="submit" variant="gradient">
            Tiếp theo
          </Button>
        </Group>
      </form>
    </>
  );
}
export function MethodOTP({ setNext }) {
  const { classes } = ForgotPassStyles();
  return (
    <>
      <Text mt={16} className={classes.desc}>
        Vui lòng chọn cách thức nhận mã OTP.
      </Text>
      <div>
        <Text className={classes.guide}>Nhận mã OTP qua:</Text>
        <Button
          onClick={() => setNext('codeMess')}
          styles={{
            inner: {
              justifyContent: 'flex-start',
            },
          }}
          mt={16}
          className={classes.linkBtn}
          variant="outline"
        >
          <Mes />
          <Text ml={16}>Nguyễn Thư</Text>
        </Button>
        <Button
          onClick={() => setNext('codeTele')}
          styles={{
            inner: {
              justifyContent: 'flex-start',
            },
          }}
          mt={12}
          className={classes.linkBtn}
          variant="outline"
        >
          <Tele />
          <Text ml={16}>Nguyễn Anh Thư</Text>
        </Button>
      </div>
    </>
  );
}

interface CodeProps {
  setNext: any;
  status: 'Messenger' | 'Telegram';
}
export function Code({ setNext, status }: CodeProps) {
  const { classes } = ForgotPassStyles();
  const phone = useMediaQuery('(max-width:575px)');
  const [seconds, setSeconds] = useState(10);
  const interval = useInterval(() => setSeconds(s => s - 1), 1000);

  useEffect(() => {
    if (seconds === 0) {
      return () => {
        interval.stop();
      };
    }
    interval.start();
    return () => {
      interval.stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seconds]);
  return (
    <>
      <Text mt={16} className={classes.desc}>
        Nhập mã OTP vừa được gửi qua {status} của bạn:
      </Text>
      <Flex justify="space-between" my={16}>
        <NumberInput
          styles={{
            wrapper: {
              height: '100%',
              width: '100%',
            },
            input: {
              fontSize: '40px',
              margin: 0,
              height: '100%',
              width: '100%',
              border: 'none',
              background: 'inherit',
              textAlign: 'center',
            },
          }}
          maxLength={1}
          className={classes.inputCode}
          hideControls
        />
        <NumberInput
          styles={{
            wrapper: {
              height: '100%',
              width: '100%',
            },
            input: {
              fontSize: '40px',
              margin: 0,
              height: '100%',
              width: '100%',
              border: 'none',
              background: 'inherit',
              textAlign: 'center',
            },
          }}
          maxLength={1}
          className={classes.inputCode}
          hideControls
        />
        <NumberInput
          styles={{
            wrapper: {
              height: '100%',
              width: '100%',
            },
            input: {
              fontSize: '40px',
              margin: 0,
              height: '100%',
              width: '100%',
              border: 'none',
              background: 'inherit',
              textAlign: 'center',
            },
          }}
          maxLength={1}
          className={classes.inputCode}
          hideControls
        />
        <NumberInput
          styles={{
            wrapper: {
              height: '100%',
              width: '100%',
            },
            input: {
              fontSize: '40px',
              margin: 0,
              height: '100%',
              width: '100%',
              border: 'none',
              background: 'inherit',
              textAlign: 'center',
            },
          }}
          maxLength={1}
          className={classes.inputCode}
          hideControls
        />
        <NumberInput
          styles={{
            wrapper: {
              height: '100%',
              width: '100%',
            },
            input: {
              fontSize: '40px',
              margin: 0,
              height: '100%',
              width: '100%',
              border: 'none',
              background: 'inherit',
              textAlign: 'center',
            },
          }}
          maxLength={1}
          className={classes.inputCode}
          hideControls
        />
        <NumberInput
          styles={{
            wrapper: {
              height: '100%',
              width: '100%',
            },
            input: {
              fontSize: '40px',
              margin: 0,
              height: '100%',
              width: '100%',
              border: 'none',
              background: 'inherit',
              textAlign: 'center',
            },
          }}
          maxLength={1}
          className={classes.inputCode}
          hideControls
        />
      </Flex>
      <Flex align="center" justify={phone ? 'center' : 'flex-start'}>
        <Text
          sx={{
            [`@media (max-width:575px)`]: {
              marginTop: 0,
            },
          }}
          className={classes.desc}
        >
          Mã OTP có hiệu lực trong ({seconds})s!
        </Text>
        <Button className={classes.senTo} variant="subtle">
          Gửi lại
        </Button>
      </Flex>
      <Group position="center" mt="md">
        <Button
          type="submit"
          variant="gradient"
          onClick={() => {
            setNext('change');
          }}
        >
          Tiếp theo
        </Button>
      </Group>
    </>
  );
}

export function ChangePass() {
  const { classes } = ForgotPassStyles();
  const form = useForm({
    initialValues: {
      password: '',
      confirmPassword: '',
    },

    validate: {
      confirmPassword: (value, values) =>
        value !== values.password ? 'Mật khẩu không trùng khớp' : null,
    },
  });
  return (
    <Box>
      <Text mt={48}>Vui lòng không chia sẻ mật khẩu mới cho bất kỳ ai.</Text>
      <form
        className={classes.forgotForm}
        onSubmit={form.onSubmit(values => console.log(values))}
      >
        <PasswordInput
          styles={{
            rightSection: {
              right: 10,
            },
          }}
          label="Mật khẩu mới"
          placeholder="Nhập mật khẩu"
          visibilityToggleIcon={({ reveal }) =>
            reveal ? (
              <IconEyeOff size={19.69} color="#000000" />
            ) : (
              <IconEye size={19.69} color="#000000" />
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
          mt="sm"
          label="Xác nhận mật khẩu"
          placeholder="Xác nhận mật khẩu"
          visibilityToggleIcon={({ reveal }) =>
            reveal ? (
              <IconEyeOff size={19.69} color="#000000" />
            ) : (
              <IconEye size={19.69} color="#000000" />
            )
          }
          {...form.getInputProps('confirmPassword')}
        />

        <Group position="center" mt={48}>
          <Button type="submit" variant="gradient">
            Lưu
          </Button>
        </Group>
      </form>
    </Box>
  );
}
