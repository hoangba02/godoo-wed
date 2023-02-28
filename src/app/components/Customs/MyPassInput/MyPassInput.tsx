import React from 'react';
import { createStyles, PasswordInput } from '@mantine/core';
import { IconEyeOff, IconEye } from '@tabler/icons';
import { useTranslation } from 'react-i18next';

interface Props {
  form: any;
  label: string;
  name: string;
  handleKeyDown?: any;
  handleKeyUp?: any;
  handleFocus?: any;
  handleInput?: any;
  placeholder: string;
}
function MyPassInput({
  name,
  label,
  form,
  handleKeyDown,
  handleKeyUp,
  handleFocus,
  handleInput,
  placeholder,
}: Props) {
  const { t } = useTranslation();
  const { classes } = makeStyles();

  return (
    <PasswordInput
      styles={{
        rightSection: {
          right: 10,
        },
      }}
      className={classes.input}
      mt="sm"
      name={name}
      label={t(`LoginPage.password.${label}`)}
      placeholder={t(`LoginPage.password.${placeholder}`)}
      visibilityToggleIcon={({ reveal }) =>
        reveal ? (
          <IconEye stroke={2.5} size={21} color="#000000" />
        ) : (
          <IconEyeOff stroke={2.5} size={21} color="#000000" />
        )
      }
      {...form.getInputProps(name)}
      onKeyDown={e => {
        handleKeyDown(e);
      }}
      onKeyUp={e => {
        handleKeyUp(e);
      }}
      onFocus={handleFocus}
      onInput={handleInput}
    />
  );
}

export default MyPassInput;

const makeStyles = createStyles(() => ({
  input: {
    marginTop: '16px',
  },
}));
