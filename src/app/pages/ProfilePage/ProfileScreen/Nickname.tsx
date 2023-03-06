import React from 'react';
import { images } from 'assets/images';
import { ProfilePage } from '../Loadable';
import { Text, Input, TextInput, Box } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { ProfilePageStyles } from '../ProfilePageStyles';
import { ReactComponent as Face } from 'assets/icons/face-nickname.svg';
import { ReactComponent as IconChevronRight } from 'assets/icons/chevron-right.svg';
import { GradientButton } from 'app/components/Customs/Button/GradientButton';
import { useNavigate } from 'react-router-dom';
function Nickname() {
  const navigate = useNavigate();
  // Local
  const { t } = useTranslation();
  const { classes } = ProfilePageStyles();
  return (
    <ProfilePage image={images.nickname} progress={0}>
      <Text className={classes.title}>{t('Profile.Nickname')}</Text>
      <Text className={classes.tutorial}>
        {t(
          'Profile.As a GoDooer, you are free to give yourself an interesting name.',
        )}
      </Text>
      <Input.Wrapper
        sx={{
          height: '55px !important',
          marginTop: 24,
          position: 'relative',
          backgroundColor: '#FFFFFF',
          borderRadius: 8,
        }}
      >
        <TextInput
          styles={{
            root: {
              height: '100%',
            },
            wrapper: {
              height: '100%',
            },
            input: {
              fontSize: 24,
              fontWeight: 500,
              lineHeight: '30px',
              textAlign: 'right',
              border: 'none',
              borderRadius: 8,
              backgroundColor: 'transparent',
              position: 'absolute',
              width: '100%',
              height: '100% !important',
              zIndex: 2,
            },
          }}
          maxLength={15}
          placeholder={t('Profile.Nickname')}
        />
        <Box
          sx={{
            position: 'absolute',
            left: 10,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 1,
          }}
        >
          <Face />
        </Box>
      </Input.Wrapper>
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

export default Nickname;
