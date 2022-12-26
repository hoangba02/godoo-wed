import React, { useEffect, useState } from 'react';

import { Box, Button, Text, Textarea } from '@mantine/core';
import { ProfileStyle } from './ProfileStyles';
import { images } from 'assets/images';
import { CounterSlice } from 'store/slice/counterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { IconChevronRight } from '@tabler/icons';
import { ProfileSlice } from 'store/slice/profileSlice';
import { getProfileSelector } from 'store/slice/profileSlice/selectors';

export default function Desc() {
  const dispatch = useDispatch();
  const { counterActions } = CounterSlice();
  const { profileActions } = ProfileSlice();
  const profile = useSelector(getProfileSelector);

  const { classes } = ProfileStyle();
  const [intro, setIntro] = useState(profile.introduction);
  const [couterText, setCouterText] = useState(0);

  const handleCreateIntro = () => {
    dispatch(
      profileActions.createProfile({
        nickname: profile.nickname,
        picture: profile.picture,
        date_of_birth: profile.date_of_birth,
        zodiac: profile.zodiac,
        gender: profile.gender,
        introduction: intro,
        relationship: profile.relationship,
      }),
    );
    dispatch(counterActions.increase());
  };
  useEffect(() => {
    if (couterText >= 500) {
      setCouterText(500);
    }
  }, [couterText]);
  return (
    <Box className={classes.children}>
      <img className={classes.imgDecs} src={images.descPro} alt="hi" />
      <Box className={classes.box}>
        <Text className={classes.titleChild}>Bio description</Text>
        <Text className={classes.text}>
          Anything you wanna say about yourself?
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
          maxLength={200}
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
          <span>/500 characters</span>
        </Text>
        <Button
          onClick={() => handleCreateIntro()}
          variant="gradient"
          className={classes.nextBtn}
        >
          <IconChevronRight width={40} height={40} stroke={2.5} />
        </Button>
      </Box>
    </Box>
  );
}
