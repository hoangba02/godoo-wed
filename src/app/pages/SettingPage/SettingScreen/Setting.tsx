import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Flex, Group, Stack, Text } from '@mantine/core';

import { images } from 'assets/images';
import { SettingPage } from '../Loadable';
import { SettingStyles } from '../SettingStyles';
import { AuthSlice } from 'store/slice/authSlice';
import Popup from 'app/components/Customs/Popup/Popup';
import { selectAuth } from 'store/slice/authSlice/selectors';
import { ReactComponent as User } from 'assets/icons/user.svg';
import { ReactComponent as Notifi } from 'assets/icons/noti.svg';
import { ReactComponent as Global } from 'assets/icons/global.svg';
import { ReactComponent as Support } from 'assets/icons/support.svg';
import { ReactComponent as ChevronRight } from 'assets/icons/chevron-right.svg';
import { OutlineButton } from 'app/components/Customs/Button/OutlineButton';
import { GradientButton } from 'app/components/Customs/Button/GradientButton';

function Setting() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { authActions } = AuthSlice();
  const { currentUser, login } = useSelector(selectAuth);
  // Local
  const { t } = useTranslation();
  const { cx, classes } = SettingStyles();
  const [logoutPopup, setLogoutPopup] = useState<boolean>(false);

  const handleLogout = () => {
    console.log('first');
    setLogoutPopup(false);
    dispatch(
      authActions.requestLogout({
        username: currentUser.username,
        password: currentUser.password,
        remember: login.remember,
        isError: false,
      }),
    );
  };
  const handleBack = () => {
    navigate('/about');
  };
  return (
    <SettingPage screen={t('Setting.Setting')} handleClick={handleBack}>
      <Stack className={classes.wrapper}>
        <Flex className={classes.option}>
          <Notifi />
          <Text className={classes.name}>{t('Setting.Notification')}</Text>
          <Box className={classes.icon}>
            <ChevronRight />
          </Box>
        </Flex>
        <Flex
          className={classes.option}
          onClick={() => navigate('/setting/account')}
        >
          <User />
          <Text className={classes.name}>{t('Setting.My account')}</Text>
          <Box className={classes.icon}>
            <ChevronRight />
          </Box>
        </Flex>

        <Flex className={classes.option}>
          <Support />
          <Text className={classes.name}>{t('Setting.Support')}</Text>
          <Box className={classes.icon}>
            <ChevronRight />
          </Box>
        </Flex>
        <Flex className={classes.option}>
          <Global />
          <Text className={classes.name}>{t('Setting.Language')}</Text>
        </Flex>

        <Group className={classes.wrapBtn}>
          <OutlineButton
            className={cx(classes.logoutBtn, classes.text)}
            onClick={() => setLogoutPopup(true)}
          >
            {t('Setting.Log out')}
          </OutlineButton>
        </Group>
      </Stack>
      <Popup
        isClose
        show={logoutPopup}
        toggle={setLogoutPopup}
        image={images.logout}
        content={t('Setting.Are you sure you wanna log out?')}
      >
        <Flex
          sx={{
            gap: 24,
            width: '100%',
            justifyContent: 'space-around',
          }}
        >
          <OutlineButton
            className={cx(classes.modalBtn, classes.text)}
            onClick={handleLogout}
          >
            Yes
          </OutlineButton>
          <GradientButton
            className={classes.modalBtn}
            onClick={() => setLogoutPopup(false)}
          >
            Cancel
          </GradientButton>
        </Flex>
      </Popup>
    </SettingPage>
  );
}

export default Setting;
