import React, { useEffect, useState } from 'react';
import { Flex, Text } from '@mantine/core';
import { useParams } from 'react-router-dom';
import { ForgotPage } from '../Loadable';
import { makePublicStyles } from 'app/components/Layout/PublicLayout/PublicStyles';
import { useTranslation } from 'react-i18next';
import OtpInput from 'react-otp-input';
import { SubtleButton } from 'app/components/Customs/Button/SubtleButton';
import { useInterval } from '@mantine/hooks';

function InputOTP() {
  const { method } = useParams();
  //   Local
  const { t } = useTranslation();
  const { cx, classes } = makePublicStyles();
  const [otpCode, setOtpCode] = useState();
  const [seconds, setSeconds] = useState(300);
  const interval = useInterval(() => setSeconds(s => s - 1), 1000);
  const handleChangeOTP = otp => {};

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
      <Text className={classes.tutorial}>
        {t(`Forgot.Please enter OTP code just sent via your ${method}`)}
      </Text>
      <OtpInput
        value={otpCode}
        numInputs={6}
        isInputNum={true}
        shouldAutoFocus={true}
        className={classes.inputCode}
        onChange={value => handleChangeOTP(value)}
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
        {t('Forgot.The OTP code is not correct')}
      </Text>
      <Flex align="center">
        <Text className={classes.otpText}>
          {seconds === 0
            ? t('Forgot.OTP code has expired!')
            : `${t('Forgot.OTP code is valid in')} (${seconds})s!`}
        </Text>
        <SubtleButton
          className={cx(classes.otpText, classes.sendBtn)}
          variant="subtle"
        >
          {t('Forgot.Send back!')}
        </SubtleButton>
      </Flex>
    </ForgotPage>
  );
}

export default InputOTP;
