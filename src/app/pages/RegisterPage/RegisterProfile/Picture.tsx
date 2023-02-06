import React, { useEffect, useState } from 'react';
import {
  BackgroundImage,
  Box,
  Button,
  Card,
  Flex,
  Stack,
  Text,
} from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { IconPlus, IconChevronRight } from '@tabler/icons';

import UpLoad from 'app/components/UpLoad/UpLoad';
import { CreateProfileStyles } from '../../../components/Layout/CreateProfile/CreateProfileStyles';
import { CounterSlice } from 'store/slice/counterSlice';
import { ReactComponent as Clear } from 'assets/icons/clear.svg';
import { ReactComponent as Blink } from 'assets/icons/blink.svg';
import { useTranslation } from 'react-i18next';
import {
  getProfileSelector,
  getUserSelector,
} from 'store/slice/userSlice/selectors';
import { UserSlice } from 'store/slice/userSlice';
import { useNavigate } from 'react-router-dom';
import { ProfileLayout } from 'app/components/Layout/CreateProfile/CreateProfile';
import { apiPost } from 'utils/http/request';

export default function Picture() {
  // const ImgFile = new FormData();
  // Global
  const dispatch = useDispatch();
  const { counterActions } = CounterSlice();
  const { actions } = UserSlice();
  const profile = useSelector(getProfileSelector);
  const user = useSelector(getUserSelector);

  // Local
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { classes } = CreateProfileStyles();
  const [img, setImg] = useState({
    one: profile.picture[0],
    two: profile.picture[1],
    three: profile.picture[2],
    four: profile.picture[3],
    fire: profile.picture[4],
    six: profile.picture[5],
  });
  const [zIndex, setZIndex] = useState(2);
  const [disableBtn, setDisableBtn] = useState(true);
  const [selectedFile, setSelectedFile] = useState({ name: '', filename: '' });

  const handleUploadImage = e => {
    setSelectedFile({ name: e.target.name, filename: e.target.files[0] });
  };
  const handleCreatePicture = () => {
    dispatch(counterActions.increase());
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
          relationship: profile.relationship,
        },
      }),
    );
  };
  useEffect(() => {
    dispatch(
      actions.createProfile({
        profile: {
          nickname: profile.nickname,
          picture: [img.one, img.two, img.three, img.four, img.fire, img.six],
          date_of_birth: profile.date_of_birth,
          zodiac: profile.zodiac,
          gender: profile.gender,
          introduction: profile.introduction,
          relationship: profile.relationship,
        },
      }),
    );
    if (img.one) {
      setDisableBtn(false);
    } else {
      setDisableBtn(true);
    }
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
              position: 'relative',
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
            <Flex
              sx={{
                width: '100%',
                height: '65.5%',
                gap: '5%',
                justifyContent: 'space-between',
                // [`@media (min-width:768px) and (max-width:991px)`]: {
                //   height: '53.5%',
                // },
                // [`@media (min-width:576px) and (max-width:767px)`]: {
                //   height: '65.5%',
                // },
                [`@media (max-width:575px)`]: {
                  gap: 15,
                  height: 225,
                },
              }}
            >
              <Box
                sx={{
                  width: '65%',
                  height: '100%',
                  aspectRatio: '1 / 1',
                  position: 'relative',
                  zIndex: 99,
                }}
              >
                <UpLoad
                  link={img.one}
                  id="0"
                  name="one"
                  setImg={setImg}
                  img={img}
                />
              </Box>
              <Stack
                sx={{
                  gap: '7%',
                  width: '30%',
                  alignItems: 'flex-end',
                  justifyContent: 'space-between',
                }}
              >
                <UpLoad
                  link={img.two}
                  id="1"
                  name="two"
                  setImg={setImg}
                  img={img}
                />
                <UpLoad
                  link={img.three}
                  id="2"
                  name="three"
                  setImg={setImg}
                  img={img}
                />
              </Stack>
            </Flex>
            <Flex
              sx={{
                height: '30%',
                gap: '5%',
                marginTop: 25,
                justifyContent: 'space-between',
                // [`@media (min-width:768px) and (max-width:991px)`]: {
                //   height: '30%',
                // },
                [`@media (max-width:575px)`]: {
                  gap: 0,
                  height: 106,
                  marginTop: 17,
                  marginBottom: 20,
                },
              }}
            >
              <UpLoad
                link={img.four}
                id="3"
                name="four"
                setImg={setImg}
                img={img}
              />
              <UpLoad
                link={img.fire}
                id="4"
                name="fire"
                setImg={setImg}
                img={img}
              />
              <UpLoad
                link={img.six}
                id="5"
                name="six"
                setImg={setImg}
                img={img}
              />
            </Flex>
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
