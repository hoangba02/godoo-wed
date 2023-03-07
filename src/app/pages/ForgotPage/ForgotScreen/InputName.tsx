import React, { useRef } from 'react';
import axios from 'axios';
import { useForm } from '@mantine/form';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import { Group, Text, TextInput } from '@mantine/core';

import { ForgotPage } from '../Loadable';
import { BASEDOMAIN } from 'utils/http/requests';
import { GradientButton } from 'app/components/Customs/Button/GradientButton';
import { makePublicStyles } from 'app/components/Layout/PublicLayout/PublicStyles';
import OverlayLoading from 'app/components/Customs/OverlayLoading/OverlayLoading';
import { ReactComponent as XCircle } from 'assets/icons/x-circle.svg';
import { SubtleButton } from 'app/components/Customs/Button/SubtleButton';
function InputName() {
  const navigate = useNavigate();
  // Local
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { t } = useTranslation();
  const { classes } = makePublicStyles();
  const form = useForm<{ name: string }>({
    initialValues: { name: '' },
    validate: {
      name: value => {
        if (value.length === 0) {
          return t('Login.Username is incorrect');
        }
      },
    },
  });
  const handleClearInputName = () => {
    form.setValues({ name: '' });
    inputRef.current?.focus();
  };
  const handleInputName = () => {
    const data = { username: form.values.name };
    return axios
      .post(`${BASEDOMAIN}/v1/forgetpasswordsendusername`, data)
      .then(res => res.data);
  };
  const { isError, isFetching, refetch } = useQuery({
    queryKey: ['forgetpasswordsendusername'],
    queryFn: handleInputName,
    enabled: false,
    retry: 1,
    retryDelay: 2000,
    onSuccess(data) {
      if (data.error === 2) {
        form.setErrors({ name: t('Login.Username is incorrect') });
      } else if (data.error === 10) {
      }
    },
  });

  return (
    <ForgotPage back="login">
      <OverlayLoading isLoading={isFetching} />
      <form
        className={classes.inputName}
        onSubmit={form.onSubmit(() => refetch())}
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
            rightSection: classes.rightIcon,
          }}
          ref={inputRef}
          error={form.errors.name}
          placeholder={t('Login.Enter your username')}
          label={t('Login.Username')}
          {...form.getInputProps('name')}
          rightSection={
            form.values.name ? (
              <SubtleButton onClick={handleClearInputName}>
                <XCircle />
              </SubtleButton>
            ) : (
              <></>
            )
          }
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
