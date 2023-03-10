import { Input, Text, Textarea } from '@mantine/core';
import { images } from 'assets/images';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { ProfilePage } from '../Loadable';
import { AuthSlice } from 'store/slice/authSlice';
import { ProfilePageStyles } from '../ProfilePageStyles';
import { selectProfile } from 'store/slice/authSlice/selectors';
import { ReactComponent as Exclude } from 'assets/icons/exclude.svg';
import { GradientButton } from 'app/components/Customs/Button/GradientButton';

function Description() {
  const dispatch = useDispatch();
  const { authActions } = AuthSlice();
  const { introduction } = useSelector(selectProfile);
  // Local
  const { t } = useTranslation();
  const { classes } = ProfilePageStyles();
  const [intro, setIntro] = useState<string>(introduction);

  const handleSubmitDescription = () => {
    dispatch(
      authActions.requestUpdateProfile({
        navigate: '/',
        profile: {
          introduction: intro.trim(),
        },
      }),
    );
  };
  const handleChangeIntro = e => {
    const value = e.currentTarget.value;
    if (value.length <= 500) {
      setIntro(value);
    }
  };
  return (
    <ProfilePage progress={4} image={images.description} back="profile/gender">
      <Text className={classes.title}>{t('Profile.Bio description')}</Text>
      <Text className={classes.tutorial}>
        {t('Profile.Anything you wanna say about yourself?')}
      </Text>
      <Input.Wrapper
        sx={{
          [`@media (max-width:575px)`]: {
            paddingBottom: 85,
          },
        }}
      >
        <Textarea
          classNames={{
            input: classes.inputTextarea,
          }}
          value={intro}
          maxRows={4}
          maxLength={500}
          onChange={e => handleChangeIntro(e)}
          placeholder={t('Profile.Say something...')}
        />
        <Text
          sx={{
            textAlign: 'right',
            width: '100%',
            color: '#929292',
            fontWeight: 400,
            fontSize: 16,
            lineHeight: '20px',
          }}
        >
          {`${intro.length}`}
          <span>/500 {t('Profile.characters')}</span>
        </Text>
      </Input.Wrapper>
      <GradientButton
        type="submit"
        variant="gradient"
        className={classes.nextBtn}
        onClick={handleSubmitDescription}
      >
        <Exclude width={34} height={34} />
      </GradientButton>
    </ProfilePage>
  );
}

export default Description;
