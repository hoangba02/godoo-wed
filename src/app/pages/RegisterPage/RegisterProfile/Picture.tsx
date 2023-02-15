import React, { useEffect, useState } from 'react';
import { Box, Button, Text } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { IconChevronRight } from '@tabler/icons';

import { CreateProfileStyles } from '../../../components/Layout/CreateProfile/CreateProfileStyles';
import { CounterSlice } from 'store/slice/counterSlice';
import { useTranslation } from 'react-i18next';
import {
  getProfileSelector,
  getUserSelector,
} from 'store/slice/userSlice/selectors';
import { UserSlice } from 'store/slice/userSlice';
import { ProfileLayout } from 'app/components/Layout/CreateProfile/CreateProfile';
import Photographs from 'app/components/Photographs/Photographs';
import Demo from 'app/pages/Demo/Demo';

export default function Picture() {
  // Global
  const dispatch = useDispatch();
  const { counterActions } = CounterSlice();
  const { actions } = UserSlice();
  const profile = useSelector(getProfileSelector);
  const user = useSelector(getUserSelector);

  // Local
  const { t } = useTranslation();
  const { classes } = CreateProfileStyles();
  const [img, setImg] = useState({
    one: profile.picture[0],
    two: profile.picture[1],
    three: profile.picture[2],
    four: profile.picture[3],
    fire: profile.picture[4],
    six: profile.picture[5],
  });
  const [disableBtn, setDisableBtn] = useState(true);
  const handleCreatePicture = () => {
    dispatch(counterActions.increase());
  };
  useEffect(() => {
    dispatch(
      actions.requestProfile({
        id: user.id,
        isLogin: false,
        token: user.token,
        profile: {
          nickname: profile.nickname,
          picture: [img.one, img.two, img.three, img.four, img.fire, img.six],
          date_of_birth: profile.date_of_birth,
          zodiac: profile.zodiac,
          gender: profile.gender,
          introduction: profile.introduction,
        },
      }),
    );
    if (img.one) {
      setDisableBtn(false);
    } else {
      setDisableBtn(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [img]);
  return (
    <ProfileLayout>
      <Box className={classes.children}>
        <Box
          sx={{
            height: '93%',
            [`@media (max-width:575px)`]: {
              height: '90%',
            },
          }}
          className={classes.box}
        >
          <Text className={classes.titleChild}>{t('Profile.title.Photo')}</Text>
          <Text mb={24} className={classes.text}>
            {t('Profile.text.Some photos so we can get to know you')}
          </Text>
          <Box
            sx={{
              width: '100%',
              height: '71%',
              [`@media (min-width:768px) and (max-width:991px)`]: {
                height: '58%',
              },
              [`@media (min-width:576px) and (max-width:767px)`]: {
                height: '61%',
              },

              [`@media (max-width:575px)`]: { height: 'max-content' },
              // [`@media (max-width:375px)`]: {},
            }}
          >
            <Photographs img={img} setImg={setImg} isEdit={false} />
          </Box>
          <Text
            sx={{
              fontWeight: 400,
              fontSize: 16,
              lineHeight: '20px',
              color: '#929292',
              marginTop: 12,
              paddingRight: '25%',
              [`@media (min-width:768px) and (max-width:991px)`]: {
                paddingRight: 0,
              },
              [`@media (max-width:575px)`]: {
                paddingRight: 100,
              },
            }}
          >
            {t(
              'Profile.text.Upload at least one photo. Hold & drag photos to change the order',
            )}
          </Text>
          <Button
            disabled={disableBtn}
            variant="gradient"
            className={classes.nextBtn}
            onClick={handleCreatePicture}
          >
            <IconChevronRight width={40} height={40} stroke={2.5} />
          </Button>
        </Box>
      </Box>
    </ProfileLayout>
  );
}
