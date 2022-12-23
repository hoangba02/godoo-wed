import React, { useEffect, useState } from 'react';
import { Box, Button, Image, Stack, Text } from '@mantine/core';
import { ProfileStyle } from './ProfileStyles';
import { images } from 'assets/images';
import { IconChevronRight } from '@tabler/icons';
import { UserSlice } from 'store/slice/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { CounterSlice } from 'store/slice/counterSlice';
import { getUserSelector } from 'store/slice/userSlice/selectors';

export default function Mode() {
  const user = useSelector(getUserSelector);
  const { classes } = ProfileStyle();
  const dispatch = useDispatch();
  const { actions } = UserSlice();
  const { counterActions } = CounterSlice();

  const [mode, setMode] = useState(user.relationship);
  const [disableBtn, setDisableBtn] = useState(true);

  const handleSelectMode = () => {
    dispatch(
      actions.createProfile({
        profile: {
          nickname: user.nickname,
          picture: user.picture,
          data_of_birth: user.data_of_birth,
          zodiac: user.zodiac,
          relationship: mode,
          introduction: user.introduction,
        },
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
      <img className={classes.imgMode} src={images.modePro} alt="mode" />
      <Box
        sx={{
          height: 'calc(95% - 272px)',
          [`@media (min-width:768px) and (max-width:991px)`]: {
            height: 'calc(95% - 252px)',
          },
          [`@media (min-width:576px) and (max-width:767px)`]: {
            height: 'calc(95% - 252px)',
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
