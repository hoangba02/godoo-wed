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
import { motion } from 'framer-motion';
import About from 'app/components/About/About';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as ArrowLeft } from 'assets/icons/arrowLeft.svg';
import { ReactComponent as CaretDown } from 'assets/icons/setting/caretDown.svg';
import { ReactComponent as ChevronRight } from 'assets/icons/setting/chevronRight.svg';
import { ReactComponent as Globe } from 'assets/icons/setting/globe.svg';
import { ReactComponent as Notifi } from 'assets/icons/setting/noti.svg';
import { ReactComponent as Support } from 'assets/icons/setting/support.svg';
import { ReactComponent as User } from 'assets/icons/setting/user.svg';
import { useDispatch } from 'react-redux';
import { UserSlice } from 'store/slice/userSlice';

function Settings() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { actions } = UserSlice();
  const { classes } = useStyles();
  const [settingMotion, setSettingMotion] = useState(true);

  const handleMotionAbout = () => {
    setSettingMotion(false);
  };

  return (
    <Flex className={classes.container}>
      <motion.div
        initial={{ width: '100%' }}
        animate={settingMotion ? { width: '32%' } : { width: '100%' }}
        transition={{ duration: 1.5 }}
        onAnimationComplete={() => {
          if (!settingMotion) {
            navigate('/about');
          }
        }}
        className={classes.wrapper}
      >
        <About />
      </motion.div>
      <motion.div
        initial={{
          x: '100vw',
          width: '0%',
        }}
        animate={
          settingMotion
            ? { x: 0, width: '100%' }
            : {
                x: '100vw',
                width: '0%',
              }
        }
        transition={{ duration: 1.5 }}
      >
        <Container fluid className={classes.setting}>
          <Flex className={classes.header}>
            <button
              className={classes.backBtn}
              onClick={() => {
                setSettingMotion(false);
              }}
            >
              <ArrowLeft />
            </button>
            <Text className={classes.title}>Setting</Text>
            <Box />
          </Flex>
          <Stack className={classes.options}>
            <Flex className={classes.option}>
              <Notifi />
              <Text className={classes.name}>Notification</Text>
              <Box className={classes.icon}>
                <ChevronRight />
              </Box>
            </Flex>
            <Flex className={classes.option}>
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
      </motion.div>
    </Flex>
  );
}

export default Settings;

const useStyles = createStyles(() => ({
  container: {
    width: '100%',
    height: '100%',
    padding: '0 135px',
  },
  wrapper: {
    minWidth: 378,
    display: 'flex',
    justifyContent: 'center',
  },
  setting: {
    height: '100%',
    // width: 'calc(100% - 338px)',
    padding: '45px 30px 0',
    borderLeft: '1px solid #BFBFBF',
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
      background: '#FF9565',
      borderRadius: '0px 0px 20px 20px',
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
  },
}));
