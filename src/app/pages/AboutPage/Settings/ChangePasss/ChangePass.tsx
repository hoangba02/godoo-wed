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
import { useSelector } from 'react-redux';
import { getUserSelector } from 'store/slice/userSlice/selectors';

function ChangePass() {
  const navigate = useNavigate();
  const user = useSelector(getUserSelector);
  // Local
  const { t } = useTranslation();
  const { classes } = makeStyles();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [errPass, setErrPass] = useState<boolean>(false);

  const form = useForm({
    initialValues: {
      password: '',
      newPassword: '',
      confirmNewPassword: '',
    },
    validateInputOnChange: ['newPassword', 'confirmNewPassword'],
    validate: {
      password: value => {
        if (value.length === 0) {
          return t('LoginPage.error.Please fill in this field');
        } else if (value !== user.password) {
          return t('LoginPage.password.Incorrect password');
        } else {
          return null;
        }
      },
      newPassword: value => {
        const regex = /^[A-Za-z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{0,8}$/;
        if (value.length === 0) {
          setErrPass(false);
          return t('LoginPage.password.At least 8 characters');
        } else if (!regex.test(value)) {
          setErrPass(false);
          return t('LoginPage.password.At least 8 characters');
        } else {
          setErrPass(true);
          return null;
        }
      },
      confirmNewPassword: (value, values) => {
        if (value.length === 0) {
          return t('LoginPage.password.Password incorrect');
        } else if (value !== values.password) {
          return t('LoginPage.password.Password incorrect');
        } else {
          return null;
        }
      },
    },
  });
  const handleSubmitForm = () => {};
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
      <form onSubmit={form.onSubmit(handleSubmitForm)}>
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
            {errPass && (
              <Text className={classes.error}>
                {t('LoginPage.password.At least 8 characters')}
              </Text>
            )}
          </Box>
          <MyPassInput
            form={form}
            name="confirmNewPassword"
            label="Confirm new password"
            placeholder="Confirm password"
          />
        </Stack>
        <Button type="submit" variant="subtle" className={classes.updateBtn}>
          Update
        </Button>
      </form>
    </AboutPage>
  );
}

export default ChangePass;

const makeStyles = createStyles(() => ({
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
