import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  createStyles,
  Flex,
  LoadingOverlay,
  Stack,
  Text,
} from '@mantine/core';
import {
  getProfileSelector,
  getUserSelector,
} from 'store/slice/userSlice/selectors';
import { ReactComponent as Mes } from 'assets/icons/mes.svg';
import { ReactComponent as Tele } from 'assets/icons/tele.svg';
import { ReactComponent as Circle } from 'assets/icons/about/circle.svg';
import { ReactComponent as Delete } from 'assets/icons/about/delete.svg';
import { ReactComponent as ChevronRight } from 'assets/icons/setting/chevronRight.svg';
import { AboutPage } from '../../Loadable';
import { apiGet, apiPost } from 'utils/http/request';
import { UserSlice } from 'store/slice/userSlice';
function Account() {
  // Global
  const { actions } = UserSlice();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(getUserSelector);
  const profile = useSelector(getProfileSelector);
  // Local
  const { classes } = makeStyles();
  const [link, setLink] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleLinkTelegram = () => {
    if (!user.telegram_fullname) {
      setLoading(true);
      apiPost(
        `/v1/tele-link`,
        {},
        {
          userid: user.id,
          token: user.token,
        },
      ).then(res => {
        setLink(res.data.link);
        setLoading(false);
      });
    }
  };
  const handleDeleteLinkTelegram = () => {
    apiPost(
      `/v1/tele/deletelink`,
      {},
      {
        userid: user.id,
        token: user.token,
      },
    ).then(res => {
      if (res.error === 0) {
        dispatch(
          actions.setTelegramFullName({
            telegram_fullname: '',
          }),
        );
      }
    });
  };
  useEffect(() => {
    if (!link) {
      return;
    } else {
      window.open(link, '_blank');
      navigate(-1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [link]);

  useEffect(() => {
    if (!user.telegram_fullname) {
      apiGet('/v1/tele/checklinktelegram', {
        userid: user.id,
        token: user.token,
      }).then(res => {
        if (res.error === 0) {
          dispatch(
            actions.setTelegramFullName({
              telegram_fullname: res.data.telegram_info,
            }),
          );
        }
      });
    } else {
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <LoadingOverlay
        visible={loading}
        overlayBlur={2}
        loaderProps={{ color: '#E46125' }}
      />
      <AboutPage title="My account" isEdit={false}>
        <Container fluid className={classes.wrapper}>
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
          <Stack
            sx={{
              marginTop: 32,
            }}
            className={classes.container}
          >
            <Text className={classes.part}>Manage account</Text>
            <Flex
              className={classes.option}
              onClick={() => navigate('/about/setting/link')}
            >
              <Mes />
              <Text className={classes.name}>Liên kết Messenger</Text>
            </Flex>
            <Flex
              sx={{
                gap: 8,
                width: '100%',
              }}
            >
              <Flex
                sx={{
                  backgroundColor: user.telegram_fullname
                    ? '#F3F3F3'
                    : '#FFFFFF',
                }}
                className={classes.option}
                onClick={handleLinkTelegram}
              >
                <Tele />
                <Text className={classes.name}>
                  {user.telegram_fullname
                    ? user.telegram_fullname
                    : 'Liên kết Telegram'}
                </Text>
              </Flex>
              {user.telegram_fullname && (
                <Stack
                  className={classes.delBtn}
                  onClick={handleDeleteLinkTelegram}
                >
                  <Delete />
                  <Text fz={12} fw={400} lh="15px">
                    Delete
                  </Text>
                </Stack>
              )}
            </Flex>
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
            <Circle />
            <Text className={classes.info}>
              Link to Facebook and Telegram to protect your account and never
              lose access while you forget password
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
        </Container>
      </AboutPage>
    </>
  );
}

export default Account;

const makeStyles = createStyles(() => ({
  wrapper: {
    padding: 0,
    maxWidth: 570,
  },
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
    width: '100%',
    height: 55,
    padding: '0 8px 0 16px',
    borderRadius: 8,
    alignItems: 'center',
    border: '1px solid #A9A9A9',
    transition: 'all 0.5s ease',
    ':active': {
      transform: 'scale(0.95)',
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
  delBtn: {
    gap: 0,
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
}));
