import React, { useState } from 'react';

import { Box, Button, Image, Text, Textarea } from '@mantine/core';
import { ProfileStyle } from './ProfileStyles';
import { images } from 'assets/images';
import { UserSlice } from 'store/slice/userSlice';
import { CounterSlice } from 'store/slice/counterSlice';
import { useDispatch } from 'react-redux';
import { IconChevronRight } from '@tabler/icons';

export default function Desc() {
  const { classes } = ProfileStyle();

  const dispatch = useDispatch();
  const { counterActions } = CounterSlice();
  const { actions } = UserSlice();

  const [intro, setIntro] = useState('');
  const [couterText, setCouterText] = useState(0);

  const handleCreateIntro = () => {
    dispatch(
      actions.createProfile({
        introduction: intro,
      }),
    );
    dispatch(counterActions.increase());
  };
  return (
    <Box className={classes.children}>
      <img className={classes.imgDecs} src={images.descPro} alt="hi" />
      <Box
        sx={{
          height: 479,
        }}
        className={classes.box}
      >
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
            },
          }}
          value={intro}
          maxRows={4}
          maxLength={200}
          onChange={event => setIntro(event.currentTarget.value)}
          onKeyDown={e => {
            console.log(e.key);
            if (e.key.length === 1) {
              setCouterText(couterText + 1);
            } else if (e.key === 'Backspace' || e.key === 'Delete') {
              setCouterText(couterText - 1);
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
          <span>/200 characters</span>
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
