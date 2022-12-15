import React, { useEffect, useState } from 'react';
import axios from 'axios';
import OtpInput from 'react-otp-input';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Flex, Group, Text } from '@mantine/core';
import { useInterval, useMediaQuery } from '@mantine/hooks';

import { UserSlice } from 'store/slice/userSlice';
import { ForgotPassStyles } from './ForgotPassStyles';
import { getUserSelector } from 'store/slice/userSlice/selectors';

interface CodeProps {
  setNext: any;
  status: 'Messenger' | 'Telegram';
}
export default function Code({ setNext, status }: CodeProps) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { actions } = UserSlice();
  const { classes } = ForgotPassStyles();
  const interval = useInterval(() => setSeconds(s => s - 1), 1000);

  const [OTP, setOTP] = useState('');
  const [errorOTP, setErrorOTP] = useState(false);
  const [seconds, setSeconds] = useState(300);

  const user = useSelector(getUserSelector);
  const phone = useMediaQuery('(max-width:575px)');

  const handleGetOTPByTele = () => {
    axios
      .post(
        'https://ttvnapi.com/v1/methodgetotp',
        {
          method: 2,
        },
        {
          headers: {
            userid: user.id,
          },
        },
      )
      .then(res => {
        console.log(res.data);
        if (res.data.error === 0) {
          setNext('codeTele');
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
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

  const handleChangeOTP = OTP => {
    setOTP(OTP);
  };

  useEffect(() => {
    if (!(OTP.length === 6)) {
      return;
    } else {
      console.log('success');
      axios
        .post(
          'https://ttvnapi.com/v1/otp/verifyotp',
          {
            otp: OTP,
          },
          {
            headers: {
              userid: user.id,
            },
          },
        )
        .then(res => {
          console.log(res.data);
          if (res.data.error === 0) {
            setNext('change');
            dispatch(
              actions.getUserForgotPass({
                id: res.data.data.userid,
                token: res.data.data.token,
              }),
            );
          } else {
            setErrorOTP(true);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [OTP]);
  return (
    <>
      <Text mt={16} className={classes.desc}>
        {t(
          `ForgotPage.please.Please enter OTP code just sent via your ${status}`,
        )}
      </Text>
      <OtpInput
        className={classes.inputCode}
        value={OTP}
        onChange={value => handleChangeOTP(value)}
        numInputs={6}
        separator={<span style={{ width: '8px' }}></span>}
        isInputNum={true}
        shouldAutoFocus={true}
        containerStyle={{
          justifyContent: 'space-between',
        }}
        inputStyle={classes.inputCode}
        focusStyle={{
          border: '1.8px solid var(--black)',
          outline: 'none',
        }}
      />
      {errorOTP && (
        <Text
          sx={{
            color: 'var(--red)',
          }}
        >
          Mã OTP không đúng
        </Text>
      )}

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
          {seconds === 0
            ? t('ForgotPage.text.OTP code has expired!')
            : `${t('ForgotPage.text.OTP code is valid in')} (${seconds})s!`}
        </Text>
        <Button
          variant="subtle"
          className={classes.senTo}
          onClick={handleGetOTPByTele}
        >
          {t('ForgotPage.button.Send back!')}
        </Button>
      </Flex>
    </>
  );
}
