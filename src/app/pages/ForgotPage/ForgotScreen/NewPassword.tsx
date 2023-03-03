import React from 'react';
import { ForgotPage } from '..';
import { PasswordInput, Text } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { ReactComponent as IconEye } from 'assets/icons/eye.svg';
import { ReactComponent as IconEyeOff } from 'assets/icons/eye-off.svg';
import { makePublicStyles } from 'app/components/Layout/PublicLayout/PublicStyles';

function NewPassword() {
  const { method } = useParams();

  //   Local
  const { t } = useTranslation();
  const { classes } = makePublicStyles();
  const form = useForm({
    validateInputOnBlur: true,
    initialValues: {
      password: '',
      confirmPassword: '',
    },
  });
  return (
    <ForgotPage back={`forgot/otp/${method}`}>
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
        label={t('Login.New password')}
        placeholder={t('Login.Enter new password')}
        visibilityToggleIcon={({ reveal }) =>
          reveal ? <IconEye /> : <IconEyeOff />
        }
        {...form.getInputProps('password')}
      />
      <Text sx={{ color: '#929292' }} className={classes.inputError}>
        {t('Login.At least 8 characters')}
      </Text>
      <PasswordInput
        mt="sm"
        classNames={{
          input: classes.input,
          label: classes.inputLabel,
          error: classes.inputError,
          visibilityToggle: classes.inputIcon,
        }}
        label={t('Login.Confirm password')}
        placeholder={t('Login.Confirm password')}
        {...form.getInputProps('confirmPassword')}
        visibilityToggleIcon={({ reveal }) =>
          reveal ? <IconEye /> : <IconEyeOff />
        }
      />
    </ForgotPage>
  );
}

export default NewPassword;
