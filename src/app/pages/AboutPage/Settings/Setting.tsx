import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  createStyles,
  Flex,
  Stack,
  Text,
} from '@mantine/core';
import { useDispatch } from 'react-redux';
import { useMediaQuery } from '@mantine/hooks';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as ArrowLeft } from 'assets/icons/arrowLeft.svg';
import { ReactComponent as ChevronRight } from 'assets/icons/setting/chevronRight.svg';
import { ReactComponent as Globe } from 'assets/icons/setting/globe.svg';
import { ReactComponent as Notifi } from 'assets/icons/setting/noti.svg';
import { ReactComponent as Support } from 'assets/icons/setting/support.svg';
import { ReactComponent as User } from 'assets/icons/setting/user.svg';
import { UserSlice } from 'store/slice/userSlice';

interface Props {
  onMotion?: any;
}
function Setting({ onMotion }: Props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { actions } = UserSlice();
  const { classes } = useStyles();
  const phone = useMediaQuery('(max-width: 575px)');

  return (
    <Container fluid className={classes.setting}>
      <Flex className={classes.header}>
        <button
          className={classes.backBtn}
          onClick={() => {
            console.log('left');
            if (phone) {
              navigate('/about');
            }
            if (onMotion) {
              onMotion(false);
            }
          }}
        >
          <ArrowLeft />
        </button>
        <Text className={classes.title}>Setting</Text>
        <Box />
      </Flex>
      <Stack className={classes.options}>
        <Flex
          className={classes.option}
          onClick={() => {
            navigate('/about/notification', {
              state: {
                motion: true,
              },
            });
          }}
        >
          <Notifi />
          <Text className={classes.name}>Notification</Text>
          <Box className={classes.icon}>
            <ChevronRight />
          </Box>
        </Flex>
        <Flex
          className={classes.option}
          onClick={() => {
            navigate('/about/account');
          }}
        >
          <User />
          <Text className={classes.name}>My account</Text>
          <Box className={classes.icon}>
            <ChevronRight />
          </Box>
        </Flex>
        <Flex className={classes.option}>
          <Globe />
          <Text className={classes.name}>Language</Text>
          <Box className={classes.icon}>
            <ChevronRight />
          </Box>
        </Flex>
        <Flex className={classes.option}>
          <Support />
          <Text className={classes.name}>Support</Text>
          <Box className={classes.icon}>
            <ChevronRight />
          </Box>
        </Flex>
        <Button
          className={classes.logout}
          onClick={() => {
            dispatch(actions.logoutSuccess());
          }}
        >
          Log out
        </Button>
      </Stack>
    </Container>
  );
}

export default Setting;

const useStyles = createStyles(() => ({
  setting: {
    height: '100%',
    padding: '45px 30px 0',
    borderLeft: '1px solid #BFBFBF',
    [`@media (max-width:575px)`]: {
      width: '100%',
      padding: 0,
      margin: 0,
    },
  },
  wrapper: {
    minWidth: 378,
    display: 'flex',
    justifyContent: 'center',
  },
  about: {
    width: '100%',
  },

  header: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '2px solid #FF9565',
    paddingBottom: 12,
    [`@media (max-width:575px)`]: {
      height: 74,
      alignItems: 'flex-end',
      padding: '0 10px 12px',
      background: '#FFFFFF',
      borderRadius: 0,
    },
  },
  backBtn: {
    width: '32px',
    height: '32px',
    padding: 0,
    background: 'transparent',
    ':before': {
      display: 'none',
    },
  },
  title: {
    fontSize: 24,
    fontWeight: 600,
    lineHeight: '30px',
  },
  options: {
    gap: 8,
    height: 667,
    paddingTop: 24,
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'relative',
    cursor: 'pointer',
    [`@media (max-width:575px)`]: {
      height: 'calc(100% - 74px)',
      padding: '24px 16px 0',
    },
  },
  option: {
    gap: 10,
    alignItems: 'center',
    width: 570,
    height: 55,
    padding: '0 16px',
    borderRadius: 8,
    border: '1px solid #A9A9A9',
    position: 'relative',
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
  },
  icon: {
    position: 'absolute',
    right: 8,
  },
  logout: {
    width: '343px !important',
    height: '52px !important',
    color: '#E46125',
    fontWeight: 600,
    fontSize: 20,
    lineHeight: '25px',
    background: '#FFFFFF',
    border: '0.5px solid #E46125',
    position: 'absolute',
    bottom: 0,
    ':hover': {
      background: '#FFFFFF',
    },
    ':before': {
      display: 'none',
    },

    [`@media (max-width:575px)`]: {
      bottom: 24,
    },
  },
}));
