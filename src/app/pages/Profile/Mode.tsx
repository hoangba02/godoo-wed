import React, { useEffect, useState } from 'react';
import { Box, Button, Image, Stack, Text } from '@mantine/core';
import { ProfileStyle } from './ProfileStyles';
import { images } from 'assets/images';
import { IconChevronRight } from '@tabler/icons';
import { UserSlice } from 'store/slice/userSlice';
import { useDispatch } from 'react-redux';
import { CounterSlice } from 'store/slice/counterSlice';

export default function Mode() {
  const { classes } = ProfileStyle();
  const dispatch = useDispatch();
  const { actions } = UserSlice();
  const { counterActions } = CounterSlice();

  const [mode, setMode] = useState(-1);
  const [disableBtn, setDisableBtn] = useState(true);

  const handleSelectMode = () => {
    dispatch(
      actions.createProfile({
        relationship: mode,
      }),
    );
    dispatch(counterActions.increase());
  };
  useEffect(() => {
    if (mode !== -1) {
      setDisableBtn(false);
    }
  }, [mode]);
  return (
    <Box className={classes.children}>
      <img className={classes.imgMode} src={images.modePro} alt="nickname" />
      <Box
        sx={{
          [`@media (max-width:575px)`]: {
            height: '60%',
          },
        }}
        className={classes.box}
      >
        <Text className={classes.titleChild}>
          What’re you looking for in GoDoo?
        </Text>
        <Stack align="center" mt={28}>
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
              Friends
            </Text>
          </Button>
          <Button
            variant={mode === 1 ? 'default' : 'filled'}
            className={classes.optionBtn}
            onClick={() => setMode(1)}
          >
            Someone to date
          </Button>
        </Stack>
        <Button
          disabled={disableBtn}
          onClick={() => handleSelectMode()}
          variant="gradient"
          className={classes.nextBtn}
        >
          <IconChevronRight width={40} height={40} stroke={2.5} />
        </Button>
      </Box>
    </Box>
  );
}
