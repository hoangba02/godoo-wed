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
import { images } from 'assets/images';
import { UserSlice } from 'store/slice/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getUserSelector } from 'store/slice/userSlice/selectors';

function ForgotPass() {
  const navigate = useNavigate();
  const { actions } = UserSlice();
  const dispatch = useDispatch();
  const user = useSelector(getUserSelector);
  // Local
  const { t } = useTranslation();
  const { classes } = ForgotPassStyles();
  const [next, setNext] = useState('');
  const handleComeBack = async () => {
    await dispatch(
      actions.logoutSuccess({
        username: user.login.savePassword ? user.username : '',
        password: user.login.savePassword ? user.password : '',
        login: {
          savePassword: user.login.savePassword,
        },
      }),
    );
    navigate('/login');
  };

  return (
    <Background>
      <Container>
        <div className={classes.wrapper}>
          <Box
            className={classes.card}
            sx={{
              [`@media (max-width:575px)`]: {
                width: '100%',
                height: '72%',
                margin: ' 0px',
                padding: '16px 16px 0px ',
                borderRadius: '20px 20px 0 0',
                position: 'relative',
                ':before': {
                  content: '""',
                  position: 'absolute',
                  right: 0,
                  bottom: 0,
                  width: 131,
                  height: 159,
                  backgroundImage: `url(${images.bgLoginBotMobile})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                },
              },
            }}
          >
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
