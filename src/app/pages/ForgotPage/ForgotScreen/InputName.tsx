import React from 'react';
import { Group, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useTranslation } from 'react-i18next';
import { GradientButton } from 'app/components/Customs/Button/GradientButton';
import { makePublicStyles } from 'app/components/Layout/PublicLayout/PublicStyles';
import { useNavigate } from 'react-router-dom';
import { ForgotPage } from '../Loadable';

function InputName() {
  const navigate = useNavigate();
  // Local
  const { t } = useTranslation();
  const { classes } = makePublicStyles();
  const form = useForm<{ name: string }>({
    initialValues: { name: '' },
  });

  const handleInputName = () => {
    navigate('/forgot/getcode');
  };
  return (
    <ForgotPage back="login">
      <form
        className={classes.inputName}
        onSubmit={form.onSubmit(handleInputName)}
      >
        <Text className={classes.tutorial}>
          {t(
            'Forgot.Please enter you username in order to reset your password',
          )}
        </Text>
        <TextInput
          classNames={{
            root: classes.root,
            input: classes.input,
            label: classes.inputLabel,
            error: classes.inputError,
          }}
          error={form.errors.name}
          placeholder={t('Login.Enter your username')}
          label={t('Login.Username')}
          {...form.getInputProps('name')}
        />
        <Group position="center" mt="md">
          <GradientButton className={classes.loginBtn} type="submit">
            {t('Forgot.Next')}
          </GradientButton>
        </Group>
      </form>
    </ForgotPage>
  );
}

export default InputName;
