import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Stack, Text } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';

import { ForgotPage } from '../Loadable';
import { BASEDOMAIN } from 'utils/http/requests';
import { selectAuth } from 'store/slice/authSlice/selectors';
import { OutlineButton } from 'app/components/Customs/Button/OutlineButton';
import { ReactComponent as Telegram } from 'assets/icons/logostelegram.svg';
import { ReactComponent as Messenger } from 'assets/icons/logosmessenger.svg';
import { makePublicStyles } from 'app/components/Layout/PublicLayout/PublicStyles';
import OverlayLoading from 'app/components/Customs/OverlayLoading/OverlayLoading';

function GetCode() {
  const navigate = useNavigate();
  const auth = useSelector(selectAuth);
  // Local
  const { t } = useTranslation();
  const { cx, classes } = makePublicStyles();
  const [selectMethod, setSelectMethod] = useState<number>(0);

  const { isFetching } = useQuery({
    queryKey: ['GetCode', selectMethod],
    queryFn: () => handleGetOtpCode(selectMethod, auth.userId),
    enabled: selectMethod !== 0,
    onSuccess() {
      if (selectMethod === 1) {
        navigate('/forgot/otp/Messenger');
      } else if (selectMethod === 2) {
        navigate('/forgot/otp/Telegram');
      }
    },
  });
  return (
    <ForgotPage back="forgot/name">
      <OverlayLoading isLoading={isFetching} />
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
          disabled={!auth.messenger}
          classNames={{
            root: !auth.messenger ? classes.buttonDisable : undefined,
            inner: classes.buttonInner,
            label: classes.buttonLabel,
          }}
          onClick={() => {
            setSelectMethod(1);
          }}
        >
          <Messenger />
          <Text className={cx(classes.message, classes.via)}>
            {auth.messenger ? auth.messenger : t('Forgot.Messenger account')}
          </Text>
        </OutlineButton>
        <OutlineButton
          disabled={!auth.telegram}
          classNames={{
            root: !auth.telegram ? classes.buttonDisable : undefined,
            inner: classes.buttonInner,
            label: classes.buttonLabel,
          }}
          onClick={() => {
            setSelectMethod(2);
          }}
        >
          <Telegram />
          <Text
            className={classes.via}
            sx={{
              color: '#108EE9',
            }}
          >
            {auth.telegram ? auth.telegram : t('Forgot.Telegram account')}
          </Text>
        </OutlineButton>
      </Stack>
    </ForgotPage>
  );
}

export default GetCode;

export const handleGetOtpCode = async (method: number, id: number) => {
  const param = {
    method: method,
  };
  const { data } = await axios.post(`${BASEDOMAIN}/v1/methodgetotp`, param, {
    headers: { userid: id },
  });
  return data;
};
