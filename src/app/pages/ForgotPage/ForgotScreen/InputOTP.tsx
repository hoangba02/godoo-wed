import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import OtpInput from 'react-otp-input';
import { Flex, Text } from '@mantine/core';
import { useInterval } from '@mantine/hooks';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { ForgotPage } from '../Loadable';
import { BASEDOMAIN } from 'utils/http/requests';
import { AuthSlice } from 'store/slice/authSlice';
import { selectAuth } from 'store/slice/authSlice/selectors';
import { makePublicStyles } from 'app/components/Layout/PublicLayout/PublicStyles';
import { SubtleButton } from 'app/components/Customs/Button/SubtleButton';
import OverlayLoading from 'app/components/Customs/OverlayLoading/OverlayLoading';
import { handleGetOtpCode } from './GetCode';

function InputOTP() {
  const { method } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { authActions } = AuthSlice();
  const auth = useSelector(selectAuth);
  //   Local
  const { t } = useTranslation();
  const { cx, classes } = makePublicStyles();
  const [otpCode, setOtpCode] = useState<string>('');
  const [seconds, setSeconds] = useState<number>(300);
  const [isError, setIsError] = useState<boolean>(false);
  const interval = useInterval(() => setSeconds(s => s - 1), 1000);

  const selectMethod = useCallback(() => {
    const result = method === 'Telegram' ? 2 : method === 'Messenger' ? 1 : 0;
    return result;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChangeOTP = async otp => {
    setIsError(false);
    const param = { otp: otp };
    const { data } = await axios.post(`${BASEDOMAIN}/v1/otp/verifyotp`, param, {
      headers: { userid: auth.userId },
    });
    return data;
  };
  const otpQuery = useQuery({
    queryKey: ['InputOTP', otpCode],
    queryFn: () => handleChangeOTP(otpCode),
    enabled: otpCode.length > 5,
    onSuccess(result) {
      console.log(result);
      const { error, data } = result;
      if (error === 0) {
        dispatch(
          authActions.setAuthenticationUser({
            userId: data.userid,
            authToken: data.token,
          }),
        );
        navigate(`/forgot/newpassword/${method}`);
      } else if (error === 10) {
        setIsError(true);
      }
    },
    onError() {
      dispatch(
        authActions.setSystemError({
          isError: true,
        }),
      );
    },
  });

  const backQuery = useQuery({
    queryKey: ['SendBackOTP'],
    queryFn: () => handleGetOtpCode(selectMethod(), auth.userId),
    enabled: false,
  });
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
    <ForgotPage back="forgot/getcode">
      <OverlayLoading isLoading={otpQuery.isFetching} />
      <Text className={classes.tutorial}>
        {t(`Forgot.Please enter OTP code just sent via your ${method}`)}
      </Text>
      <OtpInput
        value={otpCode}
        numInputs={6}
        isInputNum={true}
        shouldAutoFocus={true}
        className={classes.inputCode}
        onChange={value => setOtpCode(value)}
        separator={<span style={{ width: '8px' }}></span>}
        containerStyle={{
          justifyContent: 'space-between',
        }}
        inputStyle={classes.inputCode}
        focusStyle={{
          border: '1.8px solid var(--black)',
          outline: 'none',
        }}
      />
      <Text
        sx={{
          fontSize: 14,
          color: '#FF0000',
        }}
        className={classes.tutorial}
      >
        {isError ? t('Forgot.The OTP code is not correct') : ''}
      </Text>
      <Flex align="center">
        <Text className={classes.otpText}>
          {seconds === 0
            ? t('Forgot.OTP code has expired!')
            : `${t('Forgot.OTP code is valid in')} (${seconds})s!`}
        </Text>
        <SubtleButton
          variant="subtle"
          className={cx(classes.otpText, classes.sendBtn)}
          onClick={() => backQuery.refetch()}
        >
          {t('Forgot.Send back!')}
        </SubtleButton>
      </Flex>
    </ForgotPage>
  );
}

export default InputOTP;
