import React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button, Stack, Text } from '@mantine/core';

import { ForgotPassStyles } from './ForgotPassStyles';
import { ReactComponent as Mes } from 'assets/icons/mes.svg';
import { ReactComponent as Tele } from 'assets/icons/tele.svg';
import { getUserSelector } from 'store/slice/userSlice/selectors';

export default function MethodOTP({ setNext }) {
  const { t } = useTranslation();
  const { classes } = ForgotPassStyles();
  const user = useSelector(getUserSelector);

  const handleGetOTP = num => {
    axios
      .post(
        'https://ttvnapi.com/v1/methodgetotp',
        {
          method: num,
        },
        {
          headers: {
            userid: user.id,
          },
        },
      )
      .then(res => {
        if (res.data.error === 0) {
          if (num === 2) {
            setNext('codeTele');
          } else {
            setNext('codeMess');
          }
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <>
      <Text mt={16} className={classes.desc}>
        {t('ForgotPage.please.Please choose one method to receive OTP code')}
      </Text>
      <Text mb={16} className={classes.guide}>
        {t('ForgotPage.title.Receive OTP code via')}:
      </Text>
      <Stack>
        <Button
          onClick={() => {
            handleGetOTP(1);
          }}
          styles={{
            inner: {
              justifyContent: 'flex-start',
            },
          }}
          disabled={user.messenger_fullname ? false : true}
          className={classes.linkBtn}
          variant="outline"
        >
          <Mes />
          <Text
            sx={{
              background:
                'linear-gradient(81.84deg,#0099ff -9.4%,#a033ff 51.57%,#ff5280 84.07%,#ff7061 90.59%)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
            className={classes.text}
          >
            {user.messenger_fullname
              ? user.messenger_fullname
              : t('ForgotPage.button.Messenger account')}
          </Text>
        </Button>
        <Button
          onClick={() => {
            handleGetOTP(2);
          }}
          styles={{
            inner: {
              justifyContent: 'flex-start',
            },
            label: {
              color: 'var(--blue)',
            },
          }}
          disabled={user.telegram_fullname ? false : true}
          className={classes.linkBtn}
          variant="outline"
        >
          <Tele />
          <Text className={classes.text}>
            {user.telegram_fullname
              ? user.telegram_fullname
              : t('ForgotPage.button.Telegram account')}
          </Text>
        </Button>
      </Stack>
    </>
  );
}
