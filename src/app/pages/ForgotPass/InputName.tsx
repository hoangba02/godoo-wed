import React, { useState } from 'react';
import { Button, Group, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from '@mantine/hooks';

import { images } from 'assets/images';
import Modals from 'app/components/Modals/Modals';
import { UserSlice } from 'store/slice/userSlice';
import { ForgotPassStyles } from './ForgotPassStyles';
import { apiPost } from 'utils/http/request';

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

  const handleNext = async () => {
    await apiPost(
      '/v1/forgetpasswordsendusername',
      { username: form.values.name },
      {},
    )
      .then(res => {
        console.log(res);
        if (res.error === 2 || res.error === 1) {
          form.setErrors({ name: t('LoginPage.username.Username incorrect') });
        } else if (res.error === 12) {
          setOpenModal(true);
        } else {
          dispatch(
            actions.getUserForgotPass({
              id: res.data.id,
              telegram_fullname: res.data.telegram_fullname,
              messenger_fullname: res.data.messenger_fullname,
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

  return (
    <>
      <Modals
        img={images.warn}
        isTitle={true}
        openModal={openModal}
        setOpenModal={setOpenModal}
        isBtn={false}
        btnFunc={true}
        textBtn="????ng k?? t??i kho???n m???i"
        title="R???t ti???c b???n kh??ng th??? l???y l???i m???t kh???u do ch??a li??n k???t Messenger
        ho???c Telegram!"
      />
      <form onSubmit={form.onSubmit(() => handleNext())}>
        {phone && (
          <Text className={classes.desc}>
            {t(
              'ForgotPage.please.Please enter you username in order to reset your password',
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
