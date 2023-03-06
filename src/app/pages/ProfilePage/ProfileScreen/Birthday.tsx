import React from 'react';
import { useForm } from '@mantine/form';
import { DatePicker } from '@mantine/dates';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from '@mantine/hooks';
import { useNavigate } from 'react-router-dom';
import { Avatar, Center, Checkbox, Input, Text } from '@mantine/core';

import { images } from 'assets/images';
import { ProfilePage } from '../Loadable';
import { ADJECTIVE } from 'lib/map/BirthdayMap';
import { ProfilePageStyles } from '../ProfilePageStyles';
import { handleZodiac } from 'lib/functions/handleZodiac';
import { ReactComponent as Date } from 'assets/icons/birthday-date.svg';
import { GradientButton } from 'app/components/Customs/Button/GradientButton';
import { ReactComponent as IconChevronRight } from 'assets/icons/chevron-right.svg';

function Birthday() {
  const navigate = useNavigate();
  // Local
  const { t } = useTranslation();
  const { classes } = ProfilePageStyles();
  const mobile = useMediaQuery('(max-width:575px)');

  const form = useForm({
    initialValues: {
      date: '',
    },
  });
  return (
    <ProfilePage back="profile/picture" image={images.birthday} progress={2}>
      <Text className={classes.title}>{t('Profile.Birthday')}</Text>
      <Text className={classes.tutorial}>
        {t(
          'Profile.Based on the birthday given, we will find you more suitable friends',
        )}
      </Text>
      <Input.Wrapper className={classes.inputWrraper}>
        <DatePicker
          classNames={{
            root: classes.rootPicker,
            wrapper: classes.rootPicker,
            input: classes.inputPicker,
          }}
          clearable={false}
          dropdownPosition={mobile ? 'top-start' : 'bottom-start'}
          inputFormat="DD/MM/YYYY"
          placeholder="DD/MM/YYYY"
          {...form.getInputProps('date')}
        />
        <Date className={classes.birthIcon} />
      </Input.Wrapper>

      <Text
        sx={{
          textAlign: 'center',
          color: 'var(--red)',
          fontSize: 14,
          fontWeight: 400,
          marginTop: 4,
          [`@media (max-width:575px)`]: {
            fontSize: 10,
          },
        }}
      >
        {t('Profile.You have to be 15 years old or over to experience our App')}
      </Text>
      <Text
        sx={{
          fontSize: 20,
          fontWeight: 600,
          lineHeight: '25px',
          marginTop: 12,
          textAlign: 'center',
          color: 'var(--primary-1)',
          [`@media (max-width:575px)`]: {
            fontSize: 18,
            marginTop: 0,
          },
        }}
      >
        {`Oh! You are a ${ADJECTIVE[0]} ${
          handleZodiac(form.values.date)?.name
        }`}
      </Text>
      <Center
        sx={{
          width: '100%',
          marginTop: 10,
        }}
      >
        <Avatar
          src={images.Aquarius}
          sx={{
            width: 180,
            height: 180,
          }}
        />
      </Center>
      <Checkbox
        sx={{
          marginTop: 12,
          padding: '20px 0',
        }}
        classNames={{
          label: classes.checkboxLabel,
        }}
        defaultChecked={true}
        color="orange.7"
        label={t('Profile.Show on my profile')}
      />
      <GradientButton
        type="submit"
        variant="gradient"
        className={classes.nextBtn}
        onClick={() => {
          navigate('/profile/gender');
        }}
      >
        <IconChevronRight width={34} height={34} />
      </GradientButton>
    </ProfilePage>
  );
}

export default Birthday;
