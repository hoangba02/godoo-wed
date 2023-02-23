import React, { useEffect, useState } from 'react';

import { Box, Button, Text, Textarea } from '@mantine/core';
import { CreateProfileStyles } from '../../../components/Layout/CreateProfile/CreateProfileStyles';
import { images } from 'assets/images';
import { CounterSlice } from 'store/slice/counterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { IconCheck } from '@tabler/icons';
import { useTranslation } from 'react-i18next';
import {
  getProfileSelector,
  getUserSelector,
} from 'store/slice/userSlice/selectors';
import { UserSlice } from 'store/slice/userSlice';
import { useNavigate } from 'react-router-dom';
import { ProfileLayout } from 'app/components/Layout/CreateProfile/CreateProfile';

export default function Desc() {
  const dispatch = useDispatch();
  const { counterActions } = CounterSlice();
  const { actions } = UserSlice();
  const profile = useSelector(getProfileSelector);
  const user = useSelector(getUserSelector);

  const { t } = useTranslation();
  const navigate = useNavigate();
  const { classes } = CreateProfileStyles();
  const [intro, setIntro] = useState(profile.introduction);
  const [couterText, setCouterText] = useState(0);

  const handleCreateIntro = () => {
    dispatch(
      actions.requestProfile({
        id: user.id,
        token: user.token,
        isLogin: true,
        profile: {
          nickname: profile.nickname,
          picture: profile.picture,
          date_of_birth: profile.date_of_birth,
          zodiac: profile.zodiac,
          gender: profile.gender,
          introduction: intro,
        },
      }),
    );
    dispatch(counterActions.increase());
    // navigate('/register/mode');
  };
  // useEffect(() => {
  //   if (couterText >= 500) {
  //     setCouterText(500);
  //   } else if (couterText <= 0) {
  //     setCouterText(0);
  //   }
  // }, [couterText]);
  useEffect(() => {
    if (!user.isLogin) {
      return;
    } else {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.isLogin]);
  return (
    <ProfileLayout>
      <Box className={classes.children}>
        <img className={classes.imgDecs} src={images.descPro} alt="hi" />
        <Box
          sx={{
            [`@media (max-width:375px)`]: {
              height: '70%',
            },
          }}
          className={classes.box}
        >
          <Text className={classes.titleChild}>
            {t('Profile.title.Bio description')}
          </Text>
          <Text fz={18} className={classes.text}>
            {t('Profile.text.Anything you wanna say about yourself?')}
          </Text>
          <Textarea
            styles={{
              input: {
                width: '100%',
                height: '226px !important',
                fontWeight: 400,
                fontSize: 24,
                lineHeight: '30px',
                marginTop: 24,
                [`@media (max-width:376px)`]: {
                  height: '200px !important',
                },
              },
            }}
            value={intro}
            maxRows={4}
            maxLength={500}
            onChange={event => setIntro(event.currentTarget.value)}
            onKeyDown={e => {
              if (e.key.length === 1) {
                setCouterText(couterText + 1);
              } else if (e.key === 'Backspace' || e.key === 'Delete') {
                setCouterText(couterText - 1);
              } else if (couterText >= 500) {
                setCouterText(couterText + 0);
              }
            }}
            placeholder="Say something..."
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
            {`${couterText}`}
            <span>/500 {t('Profile.text.characters')}</span>
          </Text>
          <Button
            // disabled={couterText > 1 ? false : true}+
            onClick={() => handleCreateIntro()}
            variant="gradient"
            className={classes.nextBtn}
          >
            <IconCheck width={40} height={40} stroke={2.5} />
          </Button>
        </Box>
      </Box>
    </ProfileLayout>
  );
}
