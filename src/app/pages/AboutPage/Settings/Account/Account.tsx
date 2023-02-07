import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createStyles, Flex, LoadingOverlay, Stack, Text } from '@mantine/core';
import {
  getProfileSelector,
  getUserSelector,
} from 'store/slice/userSlice/selectors';
import { ReactComponent as ChevronRight } from 'assets/icons/setting/chevronRight.svg';
import { ReactComponent as Mes } from 'assets/icons/mes.svg';
import { ReactComponent as Tele } from 'assets/icons/tele.svg';
import { ReactComponent as Circle } from 'assets/icons/about/circle.svg';
import { AboutPage } from '../../Loadable';
import { apiGet, apiPost } from 'utils/http/request';
import { UserSlice } from 'store/slice/userSlice';
function Account() {
  // Global
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(getUserSelector);
  const profile = useSelector(getProfileSelector);
  const { actions } = UserSlice();
  // Local
  const { classes } = useStyles();
  const [link, setLink] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const handleLinkTelegram = () => {
    setLoading(true);

    apiPost(
      `/v1/tele-link`,
      {},
      {
        userid: user.id,
        token: user.token,
      },
    )
      .then(res => {
        setLink(res.data.link);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (!link) {
      return;
    } else {
      window.open(link, '_blank');
    }
  }, [link]);

  useEffect(() => {
    apiGet(`/v1/tele-link`, {
      userid: user.id,
      token: user.token,
    })
      .then(res => {
        console.log(res);
        // actions.getUserForgotPass({
        //   telegram_fullname: res.data.data.telegram_fullname,
        // });
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <LoadingOverlay
        visible={loading}
        overlayBlur={2}
        loaderProps={{ color: '#E46125' }}
      />
      <AboutPage title="My account">
        <Stack className={classes.container}>
          <Text className={classes.part}>Login method</Text>
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
              Change Password
            </Text>
            <ChevronRight />
          </Flex>
        </Stack>
        <Stack className={classes.container}>
          <Text className={classes.part}>Manage account</Text>
          <Flex className={classes.option}>
            <Mes />
            <Text className={classes.name}>Liên kết Messenger</Text>
          </Flex>
          <Flex className={classes.option} onClick={handleLinkTelegram}>
            <Tele />
            <Text className={classes.name}>
              {user.telegram_fullname
                ? user.telegram_fullname
                : 'Liên kết Telegram'}
            </Text>
          </Flex>
        </Stack>
        <Flex
          sx={{
            width: 570,
            [`@media (max-width:575px)`]: {
              width: '100%',
            },
          }}
        >
          <Circle />
          <Text className={classes.info}>
            Link to Facebook and Telegram to protect your account and never lose
            access while you forget password
          </Text>
        </Flex>
        <button
          className="aboutBtn"
          onClick={() => {
            navigate('/about/setting/account/delete');
          }}
        >
          Delete Account
        </button>
      </AboutPage>
    </>
  );
}

export default Account;

const useStyles = createStyles(() => ({
  container: {
    gap: 8,
    width: '100%',
    alignItems: 'center',
  },
  part: {
    width: 570,
    fontWeight: 500,
    fontSize: 18,
    lineHeight: '22px',
    [`@media (max-width:575px)`]: {
      width: '100%',
    },
  },
  nickname: {
    color: '#929292',
  },
  option: {
    gap: 10,
    width: 570,
    height: 55,
    padding: '0 8px 0 16px',
    borderRadius: 8,
    alignItems: 'center',
    border: '1px solid #A9A9A9',
    transition: 'all 0.5s ease',
    ':active': {
      transform: 'scale(0.95)',
    },
    [`@media (max-width:575px)`]: {
      width: '100%',
    },
  },
  name: {
    fontWeight: 400,
    fontSize: 18,
    lineHeight: '22px',
    userSelect: 'none',
    color: '#108EE9',
  },
  info: {
    fontWeight: 400,
    fontSize: 14,
    lineHeight: '17.5px',
    userSelect: 'none',
    marginLeft: 6,
  },
}));
