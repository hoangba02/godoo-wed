import React from 'react';
import { useForm } from '@mantine/form';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Text, Input, TextInput, Box } from '@mantine/core';
import { images } from 'assets/images';
import { ProfilePage } from '../Loadable';
import { AuthSlice } from 'store/slice/authSlice';
import { ProfilePageStyles } from '../ProfilePageStyles';
import { ReactComponent as Face } from 'assets/icons/face-nickname.svg';
import { ReactComponent as IconChevronRight } from 'assets/icons/chevron-right.svg';
import { GradientButton } from 'app/components/Customs/Button/GradientButton';
import { selectAuth } from 'store/slice/authSlice/selectors';

function Nickname() {
  console.log('first');
  const dispatch = useDispatch();
  const { authActions } = AuthSlice();
  const { userId, authToken, currentProfile } = useSelector(selectAuth);
  // Local
  const { t } = useTranslation();
  const { classes } = ProfilePageStyles();
  const form = useForm({
    initialValues: {
      nickname: currentProfile?.nickname || '',
    },
  });

  const handleSubmitNickname = async () => {
    await dispatch(
      authActions.requestProfile({
        userId: userId,
        authToken: authToken,
        currentProfile: {
          nickname: form.values.nickname,
        },
      }),
    );
  };
  return (
    <ProfilePage image={images.nickname} progress={0}>
      <form onSubmit={form.onSubmit(handleSubmitNickname)}>
        <Text className={classes.title}>{t('Profile.Nickname')}</Text>
        <Text className={classes.tutorial}>
          {t(
            'Profile.As a GoDooer, you are free to give yourself an interesting name.',
          )}
        </Text>
        <Input.Wrapper className={classes.inputWrapper}>
          <TextInput
            classNames={{
              root: classes.rootName,
              wrapper: classes.rootName,
              input: classes.inputName,
            }}
            maxLength={15}
            placeholder={t('Profile.Nickname')}
            {...form.getInputProps('nickname')}
          />
          <Box className={classes.inputIcon}>
            <Face />
          </Box>
        </Input.Wrapper>
        <GradientButton
          disabled={!form.values.nickname}
          type="submit"
          variant="gradient"
          className={classes.nextBtn}
        >
          <IconChevronRight width={34} height={34} />
        </GradientButton>
      </form>
    </ProfilePage>
  );
}

export default Nickname;
