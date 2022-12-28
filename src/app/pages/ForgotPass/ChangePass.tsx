import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from '@mantine/form';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { IconEyeOff, IconEye } from '@tabler/icons';
import { useDispatch, useSelector } from 'react-redux';
import { useInterval, useMediaQuery, useTimeout } from '@mantine/hooks';
import { Box, Button, Group, PasswordInput, Text } from '@mantine/core';

import { images } from 'assets/images';
import Modals from 'app/components/Modals/Modals';
import Logo from 'app/components/Logo/Logo';
import { UserSlice } from 'store/slice/userSlice';
import { ForgotPassStyles } from './ForgotPassStyles';
import { getUserSelector } from 'store/slice/userSlice/selectors';

export default function ChangePass() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { classes } = ForgotPassStyles();
  const user = useSelector(getUserSelector);
  const [openModal, setOpenModal] = useState(false);
  const { start } = useTimeout(() => {
    setOpenModal(false);
    navigate('/login');
  }, 2000);

  const form = useForm({
    validateInputOnBlur: true,
    initialValues: {
      password: '',
      confirmPassword: '',
    },

    validate: {
      password: value =>
        value.length < 8 ? t('LoginPage.password.At least 8 characters') : null,
      confirmPassword: (value, values) =>
        value !== values.password
          ? t('ForgotPage.text.Password incorrect')
          : null,
    },
  });
  const handleSaveNewPass = values => {
    axios
      .post(
        'https://ttvnapi.com/v1/createnewpassword',
        {
          new_password: form.values.password,
        },
        {
          headers: {
            userid: user.id,
            token: user.token,
          },
        },
      )
      .then(res => {
        if (res.data.error === 0) {
          setOpenModal(true);
          start();
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  const handleClearSpace = e => {
    if (/[ `!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?~]/g.test(e.key)) {
      e.preventDefault();
    }
  };
  useEffect(() => {
    if (!openModal) {
      return;
    } else {
      setTimeout(function () {
        setOpenModal(false);
        navigate('/');
      }, 2000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openModal]);
  return (
    <Box>
      <Modals
        btnFunc={false}
        isBtn={false}
        openModal={openModal}
        setOpenModal={setOpenModal}
        isDesc={true}
        desc="Đổi mật khẩu thành công"
        img={images.success}
        btnClose={false}
      />
      <Text mt={48} mb={16}>
        {t(
          "ForgotPage.please.Please don't share this password to anyone else.",
        )}
      </Text>
      <form
        className={classes.forgotForm}
        onSubmit={form.onSubmit(values => {
          handleSaveNewPass(values);
        })}
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
          onKeyDown={e => {
            handleClearSpace(e);
          }}
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
          onKeyDown={e => {
            handleClearSpace(e);
          }}
          {...form.getInputProps('confirmPassword')}
        />

        <Group position="center" mt={48}>
          <Button className={classes.next} type="submit" variant="gradient">
            {t('ForgotPage.button.Save')}
          </Button>
        </Group>
      </form>
    </Box>
  );
}
