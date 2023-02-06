import React, { useState } from 'react';
import { IconArrowLeft } from '@tabler/icons';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Box, Container, Flex, Text } from '@mantine/core';

import Code from './Code';
import InputName from './InputName';
import MethodOTP from './MethodOTP';
import ChangePass from './ChangePass';
import Logo from 'app/components/Logo/Logo';
import { ForgotPassStyles } from './ForgotPassStyles';
import Background from 'app/components/Background/Background';

function ForgotPass() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { classes } = ForgotPassStyles();
  const [next, setNext] = useState('');
  const handleComeBack = () => {
    navigate(-1);
  };

  return (
    <Background>
      <Container>
        <div className={classes.wrapper}>
          <Box className={classes.card}>
            <Logo className={classes.logo} isLang={false} />
            <Flex className={classes.header}>
              <button className={classes.back} onClick={handleComeBack}>
                <IconArrowLeft />
              </button>
              <Text className={classes.title}>
                {t('ForgotPage.title.Reset your password')}
              </Text>
            </Flex>
            {next === 'method' ? (
              <MethodOTP setNext={setNext} />
            ) : next === 'codeMess' ? (
              <Code setNext={setNext} status="Messenger" />
            ) : next === 'codeTele' ? (
              <Code setNext={setNext} status="Telegram" />
            ) : next === 'change' ? (
              <ChangePass />
            ) : (
              <InputName setNext={setNext} />
            )}
          </Box>
        </div>
      </Container>
    </Background>
  );
}

export default ForgotPass;
