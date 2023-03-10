import React, { useState } from 'react';
import { images } from 'assets/images';
import { ProfilePage } from '../Loadable';
import { Button, Checkbox, SimpleGrid, Text } from '@mantine/core';
import { ProfilePageStyles } from '../ProfilePageStyles';
import { useTranslation } from 'react-i18next';
import { GENDER } from 'lib/maps/GenderMap';

import { ReactComponent as IconChevronRight } from 'assets/icons/chevron-right.svg';
import { GradientButton } from 'app/components/Customs/Button/GradientButton';
import { useDispatch, useSelector } from 'react-redux';
import { selectProfile } from 'store/slice/authSlice/selectors';
import { AuthSlice } from 'store/slice/authSlice';

function Gender() {
  const dispatch = useDispatch();
  const { authActions } = AuthSlice();
  const { gender } = useSelector(selectProfile);
  // Local
  const { t } = useTranslation();
  const { classes } = ProfilePageStyles();
  const [genderSelect, setGenderSelect] = useState<string[]>([]);

  const hanldeSubmitGender = () => {
    dispatch(
      authActions.requestUpdateProfile({
        navigate: '/profile/description',
        profile: {
          gender: genderSelect,
        },
      }),
    );
  };
  return (
    <ProfilePage progress={3} image={images.gender} back="profile/birthday">
      <Text className={classes.title}>{t('Profile.Genders')}</Text>
      <Text className={classes.tutorial}>
        {t('Profile.Pick maximum 2 genders')}
      </Text>
      <SimpleGrid
        cols={2}
        sx={{
          gap: '8.5px 25px',
          marginTop: 28,
          justifyItems: 'stretch',
          [`@media (max-width:376px)`]: {
            marginTop: 0,
            padding: '20px 0',
            gap: '10px 16px',
          },
        }}
      >
        {GENDER.map((genderU, index) => {
          return (
            <Button
              key={index}
              className={gender.includes(genderU.text) ? 'active' : ''}
              sx={{
                height: 52,
                width: 'calc(200% + 25px) !important',
                maxWidth:
                  genderU.text === 'Others' ? 'calc(200% + 25px)' : '100%',
                color: genderU.color,
                backgroundColor: 'inherit',
                borderRadius: 200,
                border: `1px solid var(--white)`,

                '&::before': {
                  display: 'none',
                  borderRadius: 200,
                  backgroundColor: 'inherit',
                },
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                },
                '&.active': {
                  color: genderU.color,
                  backgroundImage: 'none',
                  backgroundColor: genderU.background,
                  border: `1px solid ${genderU.color}`,
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                },
                '&.active::before': {
                  backgroundColor: 'var(--white)',
                },
                [`@media (max-width:376px)`]: {
                  height: 42,
                },
              }}
              onClick={e => {
                if (genderU.id === index) {
                  let boolean = genderSelect.find(value => {
                    return value === genderU.text;
                  });
                  if (boolean) {
                    e.currentTarget.classList.remove('active');
                    setGenderSelect(
                      genderSelect.filter(value => {
                        return value !== boolean;
                      }),
                    );
                  } else {
                    e.currentTarget.classList.add('active');
                    setGenderSelect([...genderSelect, genderU.text]);
                  }
                }
              }}
            >
              <Text
                sx={{
                  fontSize: 24,
                  fontWeight: 500,
                  lineHeight: '30px',
                  background: 'inherit',
                  color: genderU.color,
                  [`@media (max-width:575px)`]: {
                    fontSize: 18,
                    lineHeight: '22px',
                  },
                }}
              >
                {t(`Profile.${genderU.text}`)}
              </Text>
            </Button>
          );
        })}
      </SimpleGrid>
      <Checkbox
        sx={{
          padding: '20px 0',
        }}
        classNames={{
          label: classes.checkboxLabel,
        }}
        color="orange.7"
        defaultChecked={true}
        label={t('Profile.Show on my profile')}
      />
      <GradientButton
        disabled={genderSelect.length > 2}
        variant="gradient"
        className={classes.nextBtn}
        onClick={hanldeSubmitGender}
      >
        <IconChevronRight width={34} height={34} />
      </GradientButton>
    </ProfilePage>
  );
}

export default Gender;
