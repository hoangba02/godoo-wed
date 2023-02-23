import React, { useEffect, useState } from 'react';
import { useForm } from '@mantine/form';
import { IconChevronRight } from '@tabler/icons';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Text, TextInput } from '@mantine/core';

import { images } from 'assets/images';
import { CreateProfileStyles } from '../../../components/Layout/CreateProfile/CreateProfileStyles';
import { ReactComponent as FaceName } from 'assets/icons/faceName.svg';
import { CounterSlice } from 'store/slice/counterSlice';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  getProfileSelector,
  getUserSelector,
} from 'store/slice/userSlice/selectors';
import { UserSlice } from 'store/slice/userSlice';
import { ProfileLayout } from 'app/components/Layout/CreateProfile/CreateProfile';

export default function NickName() {
  const { t } = useTranslation();
  const { classes } = CreateProfileStyles();
  const [error, setError] = useState(false);
  const [disableBtn, setDisableBtn] = useState(true);
  //Global
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { counterActions } = CounterSlice();
  const { actions } = UserSlice();
  const profile = useSelector(getProfileSelector);
  const user = useSelector(getUserSelector);

  const form = useForm({
    initialValues: { nickname: '' || profile.nickname },
  });
  const handleClearSpace = e => {
    if (/[ `!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?~]/g.test(e.key)) {
      e.preventDefault();
    }
  };
  const handleNickName = () => {
    if (!form.values.nickname) {
      setError(true);
    } else {
      dispatch(
        actions.requestProfile({
          id: user.id,
          isLogin: false,
          profile: {
            nickname: form.values.nickname,
            picture: profile.picture,
            date_of_birth: profile.date_of_birth,
            zodiac: profile.zodiac,
            gender: profile.gender,
            introduction: profile.introduction,
          },
        }),
      );
      dispatch(counterActions.increase());
      // navigate('/register/picture');
    }
  };
  useEffect(() => {
    if (form.values.nickname !== '') {
      setDisableBtn(false);
    } else {
      setDisableBtn(true);
    }
  }, [form.values.nickname]);
  return (
    <ProfileLayout>
      <Box className={classes.children}>
        <Box
          sx={{
            width: 485,
            height: 214,
            position: 'absolute',
            top: '8%',
            left: '50%',
            transform: 'translateX(-50%)',
            [`@media (max-width:575px)`]: {
              width: 305,
              height: 222,
            },
          }}
        >
          <img
            className={classes.imgNickname}
            src={images.nicknamePro}
            alt="nickname"
          />
        </Box>
        <Box className={classes.box}>
          <Text className={classes.titleChild}>
            {t('Profile.title.Nickname')}
          </Text>
          <Text mb={24} className={classes.text}>
            {t(
              'Profile.text.As a GoDooer, you are free to give yourself an interesting name.',
            )}
          </Text>
          <form onSubmit={form.onSubmit(handleNickName)}>
            <Box
              sx={{
                position: 'relative',
                borderRadius: 8,
                border: error ? '1px solid var(--red)' : 'none',
                backgroundColor: 'var(--white)',
              }}
            >
              <TextInput
                styles={{
                  input: {
                    fontSize: 24,
                    fontWeight: 500,
                    lineHeight: '30px',
                    textAlign: 'right',
                    border: 'none',
                    backgroundColor: 'transparent',
                  },
                }}
                maxLength={15}
                placeholder={t('Profile.title.Nickname')}
                // onKeyDown={e => {
                //   handleClearSpace(e);
                // }}
                {...form.getInputProps('nickname')}
              />
              <FaceName className={classes.nicknameIcon} />
            </Box>
            <Button
              disabled={disableBtn}
              type="submit"
              variant="gradient"
              className={classes.nextBtn}
            >
              <IconChevronRight width={40} height={40} stroke={2.5} />
            </Button>
          </form>
        </Box>
      </Box>
    </ProfileLayout>
  );
}
