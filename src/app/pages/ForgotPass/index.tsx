import React, { useState } from 'react';
import { IconArrowLeft } from '@tabler/icons';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from '@mantine/hooks';
import { BackgroundImage, Box, Container, Flex, Text } from '@mantine/core';

import Code from './Code';
import InputName from './InputName';
import MethodOTP from './MethodOTP';
import ChangePass from './ChangePass';
import { images } from 'assets/images';
import Logo from 'app/components/Logo/Logo';
import { ForgotPassStyles } from './ForgotPassStyles';

function ForgotPass() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { classes } = ForgotPassStyles();
  const [next, setNext] = useState('');

  const phone = useMediaQuery('(max-width:575px)');
  const handleComeBack = () => {
    navigate(-1);
  };

  return (
    <Container>
      <div className={classes.wrapper}>
        <BackgroundImage
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
          src={phone ? images.bgLoginTopMobile : images.bgLoginTop}
        ></BackgroundImage>
        <Box className={classes.card}>
          <Logo className={classes.logo} />
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
  );
}

export default ForgotPass;
