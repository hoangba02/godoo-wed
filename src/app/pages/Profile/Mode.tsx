import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, Text } from '@mantine/core';
import { ProfileStyle } from './ProfileStyles';
import { images } from 'assets/images';
import { IconCheck } from '@tabler/icons';
import { useDispatch, useSelector } from 'react-redux';
import { CounterSlice } from 'store/slice/counterSlice';
import { ProfileSlice } from 'store/slice/profileSlice';
import { getProfileSelector } from 'store/slice/profileSlice/selectors';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { getUserSelector } from 'store/slice/userSlice/selectors';
import { UserSlice } from 'store/slice/userSlice';
import { useTranslation } from 'react-i18next';

export default function Mode() {
  // Global
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { actions } = UserSlice();
  const { counterActions } = CounterSlice();
  const { profileActions } = ProfileSlice();
  const profile = useSelector(getProfileSelector);
  const user = useSelector(getUserSelector);

  const { t } = useTranslation();
  const { classes } = ProfileStyle();
  const [mode, setMode] = useState(profile.relationship);
  const [disableBtn, setDisableBtn] = useState(true);

  const handleSelectMode = () => {
    dispatch(
      profileActions.requestProfile({
        id: user.id,
        token: user.token,
        nickname: profile.nickname,
        picture: profile.picture,
        date_of_birth: profile.date_of_birth,
        zodiac: profile.zodiac,
        gender: profile.gender,
        relationship: mode,
        introduction: profile.introduction,
      }),
    );
  };
  useEffect(() => {
    if (mode !== -1) {
      setDisableBtn(false);
    }
  }, [mode]);
  return (
    <Box className={classes.children}>
      <img className={classes.imgMode} src={images.modePro} alt="mode" />
      <Box className={classes.box}>
        <Text className={classes.titleChild}>
          {t('Profile.text.What’re you looking for in GoDoo?')}
        </Text>
        <Stack align="center" mt={14}>
          <Button
            variant={mode === 0 ? 'gradient' : 'outline'}
            className={classes.optionBtn}
            onClick={() => setMode(0)}
          >
            <Text
              sx={{
                background: 'var(--primary-3)',
                WebkitBackgroundClip: 'text',
                color: mode === 0 ? 'var(--white)' : 'transparent',
              }}
            >
              {t('Profile.title.Friends')}
            </Text>
          </Button>
          <Button
            variant={mode === 1 ? 'default' : 'filled'}
            className={classes.optionBtn}
            onClick={() => setMode(1)}
          >
            {t('Profile.text.Looking for my destiny')}
          </Button>
        </Stack>
        <Button
          disabled={disableBtn}
          onClick={() => handleSelectMode()}
          variant="gradient"
          className={classes.nextBtn}
        >
          <IconCheck width={40} height={40} stroke={2.5} />
        </Button>
      </Box>
    </Box>
  );
}
