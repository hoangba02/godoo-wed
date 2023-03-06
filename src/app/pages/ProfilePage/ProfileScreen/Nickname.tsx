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
      <Input.Wrapper className={classes.inputWrraper}>
        <TextInput
          classNames={{
            root: classes.rootName,
            wrapper: classes.rootName,
            input: classes.inputName,
          }}
          maxLength={15}
          placeholder={t('Profile.Nickname')}
        />
        <Box className={classes.inputIcon}>
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
        <IconChevronRight width={34} height={34} />
      </GradientButton>
    </ProfilePage>
  );
}

export default Nickname;
