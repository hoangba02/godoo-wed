import { Input, Text, Textarea } from '@mantine/core';
import { GradientButton } from 'app/components/Customs/Button/GradientButton';
import { images } from 'assets/images';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { ProfilePage } from '../Loadable';
import { ProfilePageStyles } from '../ProfilePageStyles';
import { ReactComponent as Exclude } from 'assets/icons/exclude.svg';
function Description() {
  const navigate = useNavigate();
  // Local
  const { t } = useTranslation();
  const { classes } = ProfilePageStyles();
  const [intro, setIntro] = useState<string>('');
  const [counterText, setCounterText] = useState<number>(0);
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
          styles={{
            input: {
              width: '100%',
              height: '226px !important',
              fontWeight: 400,
              fontSize: 24,
              lineHeight: '30px',
              marginTop: 24,
              borderRadius: 8,
              [`@media (max-width:575px)`]: {
                fontSize: 18,
                lineHeight: '22px',
              },
            },
          }}
          value={intro}
          maxRows={4}
          maxLength={500}
          onChange={event => setIntro(event.currentTarget.value)}
          onKeyDown={e => {
            if (e.key.length === 1) {
              setCounterText(counterText + 1);
            } else if (e.key === 'Backspace' || e.key === 'Delete') {
              setCounterText(counterText - 1);
            } else if (counterText >= 500) {
              setCounterText(counterText + 0);
            }
          }}
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
          {`${counterText}`}
          <span>/500 {t('Profile.characters')}</span>
        </Text>
      </Input.Wrapper>
      <GradientButton
        type="submit"
        variant="gradient"
        className={classes.nextBtn}
        onClick={() => {
          navigate('/');
        }}
      >
        <Exclude width={34} height={34} />
      </GradientButton>
    </ProfilePage>
  );
}

export default Description;
