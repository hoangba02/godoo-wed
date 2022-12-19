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
import { converLang } from 'app/components/ConvertLang';

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
        if (res.data.error === 2) {
          form.setErrors({ name: t('LoginPage.username.Username incorrect') });
        } else if (res.data.error === 12) {
          setOpenModal(true);
        } else {
          dispatch(
            actions.getUserForgotPass({
              id: res.data.data.id,
              telegram_fullname: res.data.data.telegram_fullname,
              messenger_fullname: res.data.data.messenger_fullname,
            }),
          );
          setNext('method');
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

  const handleConvertEng = e => {
    form.setValues({
      ...form.values,
      [e.target.name]: converLang(e.target.value.toLowerCase()),
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
          name="name"
          className={classes.input}
          error={form.errors.name}
          placeholder={t('LoginPage.username.Enter your username')}
          label={t('LoginPage.username.Username')}
          {...form.getInputProps('name')}
          onKeyDown={e => {
            handleClearSpace(e);
          }}
          onKeyUp={e => {
            handleConvertEng(e);
          }}
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
