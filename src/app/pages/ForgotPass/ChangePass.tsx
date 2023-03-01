import React, { useEffect, useState } from 'react';
import { useForm } from '@mantine/form';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { IconEyeOff, IconEye } from '@tabler/icons';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Group, PasswordInput, Text } from '@mantine/core';

import { images } from 'assets/images';
import { ForgotPassStyles } from './ForgotPassStyles';
import { getUserSelector } from 'store/slice/userSlice/selectors';
import AutoModal from 'app/components/Modals/AutoModal';
import { UserSlice } from 'store/slice/userSlice';
import { apiPost } from 'utils/http/request';

export default function ChangePass() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { actions } = UserSlice();
  const user = useSelector(getUserSelector);
  // Local
  const { classes } = ForgotPassStyles();
  const [autoModal, setAutoModal] = useState(false);

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
  const handleSaveNewPass = () => {
    apiPost(
      '/v1/createnewpassword',
      {
        new_password: form.values.password,
      },
      {
        userid: user.id,
        token: user.token,
      },
    )
      .then(res => {
        console.log(res);
        if (res.error === 0) {
          setAutoModal(true);
          console.log(res);
        } else if (res.error === 3) {
          form.setErrors({
            password: t('The new password is the same as the current one'),
          });
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
  const handleNavigate = async () => {
    await dispatch(
      actions.logoutSuccess({
        username: user.login.savePassword ? user.username : '',
        password: user.login.savePassword ? user.password : '',
        login: {
          savePassword: user.login.savePassword,
        },
      }),
    );
    navigate('/login');
  };
  useEffect(() => {
    let timer;
    if (autoModal) {
      timer = setTimeout(() => {
        handleNavigate();
      }, 2000);
    }
    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoModal]);
  return (
    <Box>
      <AutoModal
        image={images.success}
        autoModal={autoModal}
        notification="Đổi mật khẩu thành công"
        setAutoModal={setAutoModal}
        translateX="0%"
      />
      <Text mt={38} mb={16}>
        {t(
          "ForgotPage.please.Please don't share this password to anyone else.",
        )}
      </Text>
      <form
        className={classes.forgotForm}
        onSubmit={form.onSubmit(() => {
          handleSaveNewPass();
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

        <Group position="center" mt={38}>
          <Button className={classes.next} type="submit" variant="gradient">
            {t('ForgotPage.button.Save')}
          </Button>
        </Group>
      </form>
    </Box>
  );
}
