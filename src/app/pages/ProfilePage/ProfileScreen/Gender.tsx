import React from 'react';
import { images } from 'assets/images';
import { ProfilePage } from '../Loadable';
import { Text } from '@mantine/core';
import { ProfilePageStyles } from '../ProfilePageStyles';
import { useTranslation } from 'react-i18next';

function Gender() {
  // Local
  const { t } = useTranslation();
  const { classes } = ProfilePageStyles();
  return (
    <ProfilePage progress={3} image={images.gender} back="profile/picture">
      <Text className={classes.title}>{t('Profile.Genders')}</Text>
      <Text className={classes.tutorial}>
        {t('Profile.Pick maximum 3 genders')}
      </Text>
    </ProfilePage>
  );
}

export default Gender;
