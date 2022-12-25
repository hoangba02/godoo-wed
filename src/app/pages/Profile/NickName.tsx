import React, { useEffect, useState } from 'react';
import { useForm } from '@mantine/form';
import { IconChevronRight } from '@tabler/icons';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Text, TextInput } from '@mantine/core';

import { images } from 'assets/images';
import { ProfileStyle } from './ProfileStyles';
import { ReactComponent as FaceName } from 'assets/icons/faceName.svg';
import { CounterSlice } from 'store/slice/counterSlice';
import { ProfileSlice } from 'store/slice/profileSlice';
import { getProfileSelector } from 'store/slice/profileSlice/selectors';

export default function NickName() {
  const { classes } = ProfileStyle();
  const [error, setError] = useState(false);
  const [disableBtn, setDisableBtn] = useState(true);
  //Global
  const dispatch = useDispatch();
  const { profileActions } = ProfileSlice();
  const { counterActions } = CounterSlice();
  const profile = useSelector(getProfileSelector);

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
        profileActions.createProfile({
          nickname: form.values.nickname,
          picture: profile.picture,
          data_of_birth: profile.data_of_birth,
          zodiac: profile.zodiac,
          introduction: profile.introduction,
          relationship: profile.relationship,
        }),
      );
      dispatch(counterActions.increase());
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
        <Text className={classes.titleChild}>Nickname</Text>
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
              placeholder="Nickname"
              onKeyDown={e => {
                handleClearSpace(e);
              }}
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
        <Text className={classes.text}>
          As a GoDooer, you are free to give yourself an interesting name.
        </Text>
      </Box>
    </Box>
  );
}
