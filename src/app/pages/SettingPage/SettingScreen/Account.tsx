import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Flex,
  Group,
  LoadingOverlay,
  Stack,
  Text,
} from '@mantine/core';

import { SettingPage } from '../Loadable';
import { AuthSlice } from 'store/slice/authSlice';
import { selectAuth } from 'store/slice/authSlice/selectors';
import { ReactComponent as Messenger } from 'assets/icons/logosmessenger.svg';
import { ReactComponent as Telegram } from 'assets/icons/logostelegram.svg';
import { ReactComponent as Circle } from 'assets/icons/info-circle.svg';
import { ReactComponent as Delete } from 'assets/icons/delete.svg';
import { ReactComponent as ChevronRight } from 'assets/icons/chevron-right.svg';
import { SettingStyles } from '../SettingStyles';
import { useTranslation } from 'react-i18next';
import { OutlineButton } from 'app/components/Customs/Button/OutlineButton';
import axios from 'axios';
import { BASEDOMAIN } from 'utils/http/requests';
import { useQuery } from '@tanstack/react-query';

function Account() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { authActions } = AuthSlice();
  const { userId, authToken, profile, telegram, messenger } =
    useSelector(selectAuth);
  // Local
  const { t } = useTranslation();
  const { cx, classes } = SettingStyles();
  const [link, setLink] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleLinkTelegram = () => {
    const response = axios.post(
      `${BASEDOMAIN}/v1/tele-link`,
      {},
      {
        headers: { userid: userId, token: authToken },
      },
    );
    return response;
  };

  const telegramQuery = useQuery({
    queryKey: ['LinkTelegram'],
    queryFn: () => handleLinkTelegram(),
    enabled: false,
    onSuccess(result) {
      const { data, error } = result.data;
      if (error === 0) {
        window.open(data.link, '_blank');
      } else {
        dispatch(
          authActions.setSystemError({
            isError: true,
          }),
        );
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
  const handleBack = () => {
    navigate('/setting');
  };
  return (
    <SettingPage screen={t('Setting.My account')} handleClick={handleBack}>
      <Container fluid className={classes.account}>
        <Stack className={classes.accountWrapper}>
          <Text className={classes.part}>{t('Setting.Login method')}</Text>
          <Flex className={classes.option}>
            <Text
              sx={{
                color: '#929292',
              }}
              className={classes.name}
            >{`Username: ${profile.nickname}`}</Text>
          </Flex>
          <Flex
            justify="space-between"
            className={classes.option}
            onClick={() => {
              navigate('/about/setting/account/changepass');
            }}
          >
            <Text
              sx={{
                color: '#000000',
              }}
              className={classes.name}
            >
              {t('Setting.Change Password')}
            </Text>
            <ChevronRight />
          </Flex>
        </Stack>
        <Stack
          sx={{
            marginTop: 32,
          }}
          className={classes.accountWrapper}
        >
          <Text className={classes.part}>{t('Setting.Manage account')}</Text>
          <Flex
            className={classes.option}
            onClick={() => navigate('/about/setting/link')}
          >
            <Messenger />
            <Text sx={{ color: '#108EE9' }} className={classes.name}>
              {t('Setting.Link to  Messenger')}
            </Text>
          </Flex>

          <Flex
            sx={{
              backgroundColor: telegram ? '#F3F3F3' : '#FFFFFF',
            }}
            className={classes.option}
            onClick={() => telegramQuery.refetch()}
          >
            <Telegram />
            <Text sx={{ color: '#108EE9' }} className={classes.name}>
              {telegram ? telegram : t('Setting.Link to Telegram')}
            </Text>
          </Flex>
          {/* {telegram && (
              <Stack className={classes.delBtn}>
                <Delete />
                <Text fz={12} fw={400} lh="15px">
                  {t('Setting.Delete')}
                </Text>
              </Stack>
            )} */}
        </Stack>
        <Flex
          sx={{
            width: 570,
            marginTop: 8,

            [`@media (max-width:575px)`]: {
              width: '100%',
            },
          }}
        >
          <Box sx={{ color: '#FF0000' }}>
            <Circle />
          </Box>
          <Text className={classes.info}>
            {t(
              'Setting.Link to Facebook and Telegram to protect your account and never lose access while you forget password',
            )}
          </Text>
        </Flex>
        <Group className={classes.wrapBtn}>
          <OutlineButton className={cx(classes.logoutBtn, classes.text)}>
            {t('Setting.Delete account')}
          </OutlineButton>
        </Group>
      </Container>
    </SettingPage>
  );
}

export default Account;
