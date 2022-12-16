import React, { useState } from 'react';
import { Button, Group, Text, TextInput } from '@mantine/core';
import axios from 'axios';
import { useForm } from '@mantine/form';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from '@mantine/hooks';

import { images } from 'assets/images';
import Modals from 'app/components/Modals';
import { UserSlice } from 'store/slice/userSlice';
import { ForgotPassStyles } from './ForgotPassStyles';

export default function InputName({ setNext }) {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { actions } = UserSlice();
  const { classes } = ForgotPassStyles();
  const [openModal, setOpenModal] = useState(false);
  const phone = useMediaQuery('(max-width:575px)');
  const form = useForm<{ name: string }>({
    initialValues: { name: '' },
    validate: values => ({
      name:
        values.name.length <= 0
          ? t('LoginPage.username.Username incorrect')
          : null,
    }),
  });

  const handleNext = () => {
    axios
      .post('https://ttvnapi.com/v1/forgetpasswordsendusername', {
        username: form.values.name,
      })
      .then(res => {
        console.log(res);
        if (res.data.error === 10) {
          if (res.data.data.hasOwnProperty('telegram_fullname')) {
            dispatch(
              actions.getUserForgotPass({
                id: res.data.data.id,
                telegram_fullname: res.data.data.telegram_fullname,
              }),
            );
            setNext('method');
          } else if (res.data.data.hasOwnProperty('messenger_fullname')) {
            dispatch(
              actions.getUserForgotPass({
                id: res.data.data.id,
                messenger_fullname: res.data.data.messenger_fullname,
              }),
            );
            setNext('method');
          } else {
            setOpenModal(true);
          }
        } else {
          form.setErrors({ name: t('LoginPage.username.Username incorrect') });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <>
      <Modals
        img={images.warn}
        isTitle={true}
        openModal={openModal}
        setOpenModal={setOpenModal}
        isBtn={false}
        btnFunc={true}
        textBtn="Đăng ký tài khoản mới"
        title="Rất tiếc bạn không thể lấy lại mật khẩu do chưa liên kết Messenger
        hoặc Telegram!"
      />
      <form onSubmit={form.onSubmit(() => handleNext())}>
        {phone && (
          <Text className={classes.desc}>
            {t(
              'ForgotPage.please.Please enter you Username in order to reset your password',
            )}
          </Text>
        )}
        <TextInput
          className={classes.input}
          error={form.errors.name}
          placeholder={t('LoginPage.username.Enter your username')}
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
          <Button className={classes.next} type="submit" variant="gradient">
            {t('ForgotPage.button.Next')}
          </Button>
        </Group>
      </form>
    </>
  );
}
