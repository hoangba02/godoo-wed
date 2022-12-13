import React, { useEffect, useState, useTransition } from 'react';
import {
  BackgroundImage,
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
import { useForm } from '@mantine/form';
import { IconArrowLeft } from '@tabler/icons';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { IconEyeOff, IconEye } from '@tabler/icons';
import { useInterval, useMediaQuery } from '@mantine/hooks';

import { images } from 'assets/images';
import Logo from 'app/components/Logo/Logo';
import { ForgotPassStyles } from './ForgotPassStyles';
import { ReactComponent as Mes } from 'assets/icons/mes.svg';
import { ReactComponent as Tele } from 'assets/icons/tele.svg';
import { t } from 'i18next';

function ForgotPass() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { classes } = ForgotPassStyles();
  const [next, setNext] = useState('');

  const phone = useMediaQuery('(max-width:575px)');
  const handleComeBack = () => {
    navigate(-1);
  };

  return (
    <Container>
      <div className={classes.wrapper}>
        <BackgroundImage
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
          src={phone ? images.bgLoginTopMobile : images.bgLoginTop}
        ></BackgroundImage>
        <Box className={classes.card}>
          <Logo className={classes.logo} />
          <Flex className={classes.header}>
            <button className={classes.back} onClick={handleComeBack}>
              <IconArrowLeft />
            </button>
            <Text className={classes.title}>
              {t('ForgotPage.title.Reset your password')}
            </Text>
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
  const { t } = useTranslation();
  const { classes } = ForgotPassStyles();
  const phone = useMediaQuery('(max-width:575px)');

  const form = useForm<{ name: string }>({
    initialValues: { name: '' },
    validate: values => ({
      name:
        values.name.length < 2
          ? t('ForgotPage.error.Contains only lowercase letters and numbers')
          : null,
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
            {t(
              'ForgotPage.please.Please enter you Username in order to reset your password',
            )}
          </Text>
        )}
        <TextInput
          className={classes.input}
          label={t('LoginPage.username.Username')}
          {...form.getInputProps('name')}
        />
        {!phone && (
          <Text className={classes.desc}>
            {t(
              'ForgotPage.please.Please enter you Username in order to reset your password',
            )}
          </Text>
        )}
        <Group position="center" mt="md">
          <Button type="submit" variant="gradient">
            {t('Next')}
          </Button>
        </Group>
      </form>
    </>
  );
}
export function MethodOTP({ setNext }) {
  const { t } = useTranslation();
  const { classes } = ForgotPassStyles();
  return (
    <>
      <Text mt={16} className={classes.desc}>
        {t('ForgotPage.please.Please choose one method to recieve OTP code')}
      </Text>
      <div>
        <Text className={classes.guide}>
          {t('Forgot.text.Recieve OTP code via:')}
        </Text>
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
  const { t } = useTranslation();
  const { classes } = ForgotPassStyles();
  const [seconds, setSeconds] = useState(10);
  const interval = useInterval(() => setSeconds(s => s - 1), 1000);
  const phone = useMediaQuery('(max-width:575px)');

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
        {t(
          `ForgotPage.please.Please enter OTP code just sent via your ${status}`,
        )}
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
            marginTop: 0,
            marginBottom: 2,
            [`@media (max-width:575px)`]: {
              marginTop: 0,
            },
          }}
          className={classes.desc}
        >
          {t(`ForgotPage.text.OTP code is valid in`)} ({seconds})s!
        </Text>
        <Button className={classes.senTo} variant="subtle">
          {t('ForgotPage.button.Send back!')}
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
          {t('ForgotPage.button.Next')}
        </Button>
      </Group>
    </>
  );
}

export function ChangePass() {
  const { t } = useTranslation();
  const { classes } = ForgotPassStyles();
  const form = useForm({
    initialValues: {
      password: '',
      confirmPassword: '',
    },

    validate: {
      confirmPassword: (value, values) =>
        value !== values.password
          ? t('ForgotPage.text.Password incorrect')
          : null,
    },
  });
  return (
    <Box>
      <Text mt={48}>
        {t(
          "ForgotPage.please.Please don't share this password to anyone else.",
        )}
      </Text>
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
          label={t('LoginPage.password.New password')}
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
          label={t('LoginPage.password.Confirm password')}
          placeholder={t('LoginPage.password.Confirm password')}
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
            {t('ForgotPage.button.Save')}
          </Button>
        </Group>
      </form>
    </Box>
  );
}
