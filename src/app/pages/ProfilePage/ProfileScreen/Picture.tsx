import { Text } from '@mantine/core';
import { GradientButton } from 'app/components/Customs/Button/GradientButton';
import Photographs from 'app/components/Photographs/Photographs';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { ProfilePage } from '../Loadable';
import { ProfilePageStyles } from '../ProfilePageStyles';
import { ReactComponent as IconChevronRight } from 'assets/icons/chevron-right.svg';

function Picture() {
  const navigate = useNavigate();
  // Local
  const { t } = useTranslation();
  const { classes } = ProfilePageStyles();
  return (
    <ProfilePage progress={1} back="profile/nickname">
      <Text className={classes.title}>{t('Profile.Photo')}</Text>
      <Text className={classes.tutorial}>
        {t('Profile.Some photos so we can get to know you.')}
      </Text>
      <Photographs />
      <GradientButton
        type="submit"
        variant="gradient"
        className={classes.nextBtn}
        onClick={() => {
          navigate('/profile/picture');
        }}
      >
        <IconChevronRight />
      </GradientButton>
    </ProfilePage>
  );
}

export default Picture;
