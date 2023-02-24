import React, { useEffect, useState } from 'react';
import { useForm } from '@mantine/form';
import {
  Box,
  Button,
  createStyles,
  Flex,
  Image,
  Stack,
  Text,
} from '@mantine/core';
import MyPassInput from 'app/components/Customs/MyPassInput/MyPassInput';
import { AboutPage } from '../../Loadable';
import { useTranslation } from 'react-i18next';
import ModalLayout from 'app/components/Modals/ModalLayout';
import { images } from 'assets/images';
import { useNavigate } from 'react-router-dom';

function ChangePass() {
  const navigate = useNavigate();
  // Local
  const { t } = useTranslation();
  const { classes } = useStyles();
  const [openModal, setOpenModal] = useState(false);

  const form = useForm({
    initialValues: {
      password: '',
      newPassword: '',
      confirmNewPassword: '',
    },
  });
  useEffect(() => {
    if (!openModal) {
      return;
    } else {
      setTimeout(function () {
        setOpenModal(false);
        // navigate('/');
      }, 2000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openModal]);
  return (
    <AboutPage title="Change password" isEdit={false}>
      <ModalLayout
        openModal={openModal}
        setOpenModal={setOpenModal}
        close={false}
      >
        <Stack align="center">
          <Image width={150} height={150} src={images.success} />
          <Text className={classes.textPop}>
            Password changed successfully!
          </Text>
        </Stack>
      </ModalLayout>
      <Stack className={classes.input}>
        <MyPassInput
          form={form}
          name="password"
          label="Enter your current password"
          placeholder="Password"
        />
        <Flex className={classes.forgot} onClick={() => navigate('/forgot')}>
          <Text className={classes.forText}>Quên mật khẩu?</Text>
        </Flex>
      </Stack>
      <Stack spacing={0} className={classes.input}>
        <Box>
          <MyPassInput
            form={form}
            name="newPassword"
            label="Enter new password"
            placeholder="Confirm password"
          />
          <Text className={classes.error}>
            {t('LoginPage.password.At least 8 characters')}
          </Text>
        </Box>
        <MyPassInput
          form={form}
          name="confirmNewPassword"
          label="Confirm new password"
          placeholder="Confirm password"
        />
      </Stack>
      <Button
        variant="subtle"
        className={classes.updateBtn}
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Update
      </Button>
    </AboutPage>
  );
}

export default ChangePass;

const useStyles = createStyles(() => ({
  textPop: {
    fontWeight: 400,
    fontSize: 24,
    lineHeight: '30px',
    margin: '20px 0 40px',
  },
  input: {
    width: 570,
    '@media (max-width:575px)': {
      width: '100%',
    },
  },
  forgot: {
    gap: 4,
    width: '100%',
    justifyContent: 'flex-end',
  },
  forText: {
    fontWeight: 500,
    fontSize: 16,
    lineHeight: '20px',
    color: '#000000',
    textDecoration: 'underline',
    cursor: 'pointer',
  },
  error: {
    fontSize: '12px',
    lineHeight: 1.2,
    display: 'block',
    color: 'var(--grey-dark)',
    marginTop: '4px',
  },
  updateBtn: {
    width: 570,
    borderRadius: 8,
    fontWeight: 600,
    fontSize: 20,
    lineHeight: '25px',
    position: 'absolute',
    bottom: '17%',
    background: 'linear-gradient(90deg, #C91A44 -0.01%, #A12FA3 100%)',
    '@media (max-width:575px)': {
      width: 'calc(100% - 32px)',
      bottom: '24px',
    },
  },
}));
