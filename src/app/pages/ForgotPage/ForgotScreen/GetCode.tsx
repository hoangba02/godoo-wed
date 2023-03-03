import React from 'react';
import { Stack, Text } from '@mantine/core';
import { OutlineButton } from 'app/components/Customs/Button/OutlineButton';
import { makePublicStyles } from 'app/components/Layout/PublicLayout/PublicStyles';
import { useTranslation } from 'react-i18next';
import { ForgotPage } from '../Loadable';
import { ReactComponent as Messenger } from 'assets/icons/logosmessenger.svg';
import { ReactComponent as Telegram } from 'assets/icons/logostelegram.svg';
import { useNavigate } from 'react-router-dom';

function GetCode() {
  const navigate = useNavigate();
  // Local
  const { t } = useTranslation();
  const { cx, classes } = makePublicStyles();
  return (
    <ForgotPage back="forgot/name">
      <Text className={classes.tutorial}>
        {t('Forgot.Please choose one method to receive OTP code')}
      </Text>
      <Text
        sx={{
          fontWeight: 600,
          fontSize: 18,
          lineHeight: '22px',
          [`@media (max-width: 575px)`]: {
            fontWeight: 600,
            fontSize: 16,
            lineHeight: '20px',
          },
        }}
      >
        {t('Forgot.Receive OTP code via')}:
      </Text>
      <Stack mt={12} spacing={12}>
        <OutlineButton
          classNames={{
            inner: classes.buttonInner,
            label: classes.buttonLabel,
          }}
          onClick={() => {
            navigate(`/forgot/otp/Messenger`);
          }}
        >
          <Messenger />
          <Text className={cx(classes.message, classes.via)}>
            {t('Forgot.Messenger account')}
          </Text>
        </OutlineButton>
        <OutlineButton
          classNames={{
            inner: classes.buttonInner,
            label: classes.buttonLabel,
          }}
          onClick={() => {
            navigate(`/forgot/otp/Telegram`);
          }}
        >
          <Telegram />
          <Text
            className={classes.via}
            sx={{
              color: '#108EE9',
            }}
          >
            {t('Forgot.Telegram account')}
          </Text>
        </OutlineButton>
      </Stack>
    </ForgotPage>
  );
}

export default GetCode;
