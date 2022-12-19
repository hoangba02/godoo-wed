import React, { useEffect, useState } from 'react';
import { useForm } from '@mantine/form';
import { IconChevronRight } from '@tabler/icons';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Text, TextInput } from '@mantine/core';

import { images } from 'assets/images';
import { ProfileStyle } from './ProfileStyles';
import { ReactComponent as FaceName } from 'assets/icons/faceName.svg';
import { CounterSlice } from 'store/slice/counterSlice';
import { getCounterSelector } from 'store/slice/counterSlice/selector';
import { UserSlice } from 'store/slice/userSlice';

export default function NickName() {
  const { classes } = ProfileStyle();
  const [error, setError] = useState(false);
  const [disableBtn, setDisableBtn] = useState(true);
  //Global
  const dispatch = useDispatch();
  const { counterActions } = CounterSlice();
  const { actions } = UserSlice();

  const form = useForm({
    initialValues: { nickname: '' },
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
        actions.createProfile({
          nickname: form.values.nickname,
        }),
      );
      dispatch(counterActions.increase());
    }
  };
  useEffect(() => {
    if (form.values.nickname.length > 0) {
      setDisableBtn(false);
    } else {
      setDisableBtn(true);
    }
  }, [form.values.nickname.length]);
  return (
    <Box className={classes.children}>
      <img
        className={classes.imgNickname}
        src={images.nicknamePro}
        alt="nickname"
      />
      <Box
        sx={{
          height: 283,
        }}
        className={classes.box}
      >
        <Text className={classes.titleChild}>NickName</Text>
        <form onSubmit={form.onSubmit(handleNickName)}>
          <Box
            sx={{
              position: 'relative',
            }}
          >
            <TextInput
              styles={{
                input: {
                  fontSize: 24,
                  fontWeight: 500,
                  lineHeight: '30px',
                  textAlign: 'right',
                  borderRadius: 8,
                  border: error ? '1px solid var(--red)' : 'none',
                },
              }}
              maxLength={15}
              placeholder="NickName"
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
