import React from 'react';
import { useForm } from '@mantine/form';
import { useDispatch, useSelector } from 'react-redux';
import { DatePicker } from '@mantine/dates';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from '@mantine/hooks';
import { Avatar, Center, Checkbox, Input, Text } from '@mantine/core';

import { images } from 'assets/images';
import { ProfilePage } from '../Loadable';
import { ADJECTIVE } from 'lib/maps/BirthdayMap';
import { ProfilePageStyles } from '../ProfilePageStyles';
import { handleZodiac } from 'lib/functions/handleZodiac';
import { selectProfile, selectIsMobile } from 'store/slice/authSlice/selectors';
import { ReactComponent as Date } from 'assets/icons/birthday-date.svg';
import { GradientButton } from 'app/components/Customs/Button/GradientButton';
import { ReactComponent as IconChevronRight } from 'assets/icons/chevron-right.svg';
import {
  isAgeEnough,
  getFormattedDate,
  getFormattedNewDate,
} from 'lib/functions/handleFomattedDate';
import { AuthSlice } from 'store/slice/authSlice';

interface FormValues {
  date: string | number | Date;
}

export default function Birthday() {
  const dispatch = useDispatch();
  const { authActions } = AuthSlice();
  const isMobile = useSelector(selectIsMobile);
  const { date_of_birth } = useSelector(selectProfile);
  // Local
  const { t } = useTranslation();
  const { classes } = ProfilePageStyles();

  const mobile = useMediaQuery('(max-width:575px)', isMobile, {
    getInitialValueInEffect: !isMobile,
  });

  const form = useForm<FormValues>({
    validateInputOnChange: true,
    initialValues: {
      date: date_of_birth === '' ? '' : getFormattedNewDate(date_of_birth),
    },
  });

  const handleSubmitBirth = () => {
    dispatch(
      authActions.requestUpdateProfile({
        navigate: '/profile/gender',
        profile: {
          date_of_birth: getFormattedDate(form.values.date),
          zodiac: handleZodiac(form.values.date)?.name,
        },
      }),
    );
  };
  return (
    <ProfilePage back="profile/picture" image={images.birthday} progress={2}>
      <form onSubmit={form.onSubmit(handleSubmitBirth)}>
        <Text className={classes.title}>{t('Profile.Birthday')}</Text>
        <Text className={classes.tutorial}>
          {t(
            'Profile.Based on the birthday given, we will find you more suitable friends',
          )}
        </Text>
        <Input.Wrapper className={classes.inputWrapper}>
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
            height: 22,
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
          {isAgeEnough(form.values.date) === 'error' ||
          !isAgeEnough(form.values.date)
            ? ''
            : t(
                'Profile.You have to be 15 years old or over to experience our App',
              )}
        </Text>
        <Text
          sx={{
            fontSize: 20,
            fontWeight: 600,
            lineHeight: '25px',
            textAlign: 'center',
            color: 'var(--primary-1)',
            [`@media (max-width:575px)`]: {
              fontSize: 18,
              marginTop: 0,
            },
          }}
        >
          {`Oh! You are a ${ADJECTIVE[Math.floor(Math.random() * 5)]} ${
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
            src={handleZodiac(form.values.date)?.zodiac}
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
          disabled={!!isAgeEnough(form.values.date)}
          className={classes.nextBtn}
        >
          <IconChevronRight width={34} height={34} />
        </GradientButton>
      </form>
    </ProfilePage>
  );
}
