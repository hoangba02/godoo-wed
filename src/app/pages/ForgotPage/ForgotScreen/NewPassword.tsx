import React, { useState } from 'react';
import { ForgotPage } from '..';
import { Group, PasswordInput, Text } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { ReactComponent as IconEye } from 'assets/icons/eye.svg';
import { ReactComponent as IconEyeOff } from 'assets/icons/eye-off.svg';
import { makePublicStyles } from 'app/components/Layout/PublicLayout/PublicStyles';
import { GradientButton } from 'app/components/Customs/Button/GradientButton';
import axios from 'axios';
import { BASEDOMAIN } from 'utils/http/requests';
import { useSelector } from 'react-redux';
import { selectAuth } from 'store/slice/authSlice/selectors';
import { useQuery } from '@tanstack/react-query';
import OverlayLoading from 'app/components/Customs/OverlayLoading/OverlayLoading';
import Popup from 'app/components/Customs/Popup/Popup';
import { images } from 'assets/images';

function NewPassword() {
  const { method } = useParams();
  const auth = useSelector(selectAuth);
  const navigate = useNavigate();
  //   Local
  const { t } = useTranslation();
  const { classes } = makePublicStyles();
  const [openPopup, setOpenPopup] = useState<boolean>(false);
  const form = useForm({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validate: {
      password: value => {
        if (value.length === 0) {
          return t('Login.Please fill in this field');
        } else if (value.length > 8) {
          return t('Login.At least 8 characters');
        } else {
          return null;
        }
      },
      confirmPassword: (value, values) => {
        if (value.length === 0) {
          return t('Login.Please fill in this field');
        } else if (value !== values.password) {
          return t('Login.Password incorrect');
        } else {
          return null;
        }
      },
    },
  });

  const handleCreateNewPass = async () => {
    const param = { new_password: form.values.password };
    const { data } = await axios.post(
      `${BASEDOMAIN}/v1/createnewpassword`,
      param,
      { headers: { userid: auth.userId, token: auth.authToken } },
    );
    return data;
  };
  const { isFetching, refetch } = useQuery({
    queryKey: ['NewPassword'],
    queryFn: handleCreateNewPass,
    enabled: false,
    onSuccess(result) {
      const { error } = result;
      if (error === 0) {
        setOpenPopup(true);
      }
    },
  });

  const handleCreateSuccess = () => {
    navigate('/login');
  };
  return (
    <ForgotPage back={`forgot/otp/${method}`}>
      <OverlayLoading isLoading={isFetching} />
      <form onSubmit={form.onSubmit(() => refetch())}>
        <Text mb={16} className={classes.tutorial}>
          {t("Forgot.Please don't share this password to anyone else.")}
        </Text>
        <PasswordInput
          classNames={{
            input: classes.input,
            label: classes.inputLabel,
            error: classes.inputError,
            visibilityToggle: classes.inputIcon,
          }}
          error={form.errors.password}
          label={t('Login.New password')}
          placeholder={t('Login.Enter new password')}
          visibilityToggleIcon={({ reveal }) =>
            reveal ? <IconEye /> : <IconEyeOff />
          }
          {...form.getInputProps('password')}
        />
        <Text sx={{ color: '#929292' }} className={classes.inputError}>
          {!form.errors.password ? t('Login.At least 8 characters') : ''}
        </Text>
        <PasswordInput
          mt="sm"
          classNames={{
            input: classes.input,
            label: classes.inputLabel,
            error: classes.inputError,
            visibilityToggle: classes.inputIcon,
          }}
          error={form.errors.confirmPassword}
          label={t('Login.Confirm password')}
          placeholder={t('Login.Confirm password')}
          {...form.getInputProps('confirmPassword')}
          visibilityToggleIcon={({ reveal }) =>
            reveal ? <IconEye /> : <IconEyeOff />
          }
        />
        <Group position="center" mt="md">
          <GradientButton type="submit" className={classes.loginBtn}>
            {t('Forgot.Save')}
          </GradientButton>
        </Group>
      </form>
      <Popup
        show={openPopup}
        toggle={setOpenPopup}
        autoHide={true}
        image={images.success}
        content={t('Forgot.Update password successfully!')}
        afterHide={handleCreateSuccess}
      />
    </ForgotPage>
  );
}

export default NewPassword;
