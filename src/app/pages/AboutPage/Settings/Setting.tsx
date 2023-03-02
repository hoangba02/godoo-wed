import React, { useState } from 'react';
import {
  Box,
  Button,
  createStyles,
  Flex,
  Image,
  Stack,
  Text,
} from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as ChevronRight } from 'assets/icons/setting/chevronRight.svg';
import { ReactComponent as Globe } from 'assets/icons/setting/globe.svg';
import { ReactComponent as Notifi } from 'assets/icons/setting/noti.svg';
import { ReactComponent as Support } from 'assets/icons/setting/support.svg';
import { ReactComponent as User } from 'assets/icons/setting/user.svg';
import { UserSlice } from 'store/slice/userSlice';
import { AboutPage } from '../Loadable';
import Languages from 'app/components/Languages/Language';
import { getUserSelector } from 'store/slice/userSlice/selectors';
import ModalLayout from 'app/components/Modals/ModalLayout';
import { images } from 'assets/images';
interface Props {
  onMotion?: any;
}
function Setting({ onMotion }: Props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { actions } = UserSlice();
  const user = useSelector(getUserSelector);
  // Local
  const { classes } = makeStyles();
  const [logoutModal, setLogoutModal] = useState<boolean>(false);
  const handleLogout = () => {
    dispatch(
      actions.requestLogout({
        id: user.id,
        token: user.token,
        username: user.login.savePassword ? user.username : '',
        password: user.login.savePassword ? user.password : '',
        login: {
          savePassword: user.login.savePassword,
        },
      }),
    );
  };
  return (
    <AboutPage title="Setting" isEdit={false}>
      <Flex
        className={classes.option}
        onClick={() => {
          navigate('/about/setting/notification', {
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
          navigate('/about/setting/account');
        }}
      >
        <User />
        <Text className={classes.name}>My account</Text>
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
      <Flex
        className={classes.option}
        sx={{
          ':active': {
            transform: 'scale(1)',
          },
        }}
      >
        <Globe />
        <Text className={classes.name}>Language</Text>
        <Box className={classes.lang}>
          <Languages />
        </Box>
      </Flex>
      <Button className="aboutBtn" onClick={() => setLogoutModal(true)}>
        Log out
      </Button>
      <LogoutModal
        logoutModal={logoutModal}
        setLogoutModal={setLogoutModal}
        onLogout={handleLogout}
      />
    </AboutPage>
  );
}

export default Setting;
interface PropsModal {
  logoutModal: boolean;
  setLogoutModal: any;
  onLogout?: any;
}
export function LogoutModal({
  logoutModal,
  setLogoutModal,
  onLogout,
}: PropsModal) {
  const { classes } = makeStyles();
  return (
    <ModalLayout
      openModal={logoutModal}
      setOpenModal={setLogoutModal}
      close={true}
    >
      <Stack align="center">
        <Image width={126} height={108} src={images.logout} />
        <Text
          sx={{
            fontWeight: 400,
            fontSize: 24,
            lineHeight: '30px',
            [`@media (max-width:575px)`]: {
              fontSize: 14,
              fontWeight: 18,
            },
          }}
        >
          Are you sure you wanna log out?
        </Text>
        <Flex gap={24}>
          <Button
            className={classes.modalBtn}
            variant="filled"
            onClick={onLogout}
          >
            Yes
          </Button>
          <Button
            className={classes.modalBtn}
            variant="gradient"
            onClick={() => setLogoutModal(false)}
          >
            Cancel
          </Button>
        </Flex>
      </Stack>
    </ModalLayout>
  );
}
const makeStyles = createStyles(() => ({
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
  lang: {
    position: 'absolute',
    right: 9,
    top: '50%',
    transform: 'translateY(-50%)',
    [`@media (max-width:575px)`]: {
      transform: 'translateY(4px)',
    },
  },

  modalBtn: {
    width: 251,
    height: 52,
    [`@media (max-width:575px)`]: {
      width: 120,
    },
  },
}));
