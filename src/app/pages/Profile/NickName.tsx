import React, { useEffect, useState } from 'react';
import { useForm } from '@mantine/form';
import { IconChevronRight } from '@tabler/icons';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Text, TextInput } from '@mantine/core';

import { images } from 'assets/images';
import { ProfileStyle } from './ProfileStyles';
import { ReactComponent as FaceName } from 'assets/icons/faceName.svg';
import { CounterSlice } from 'store/slice/counterSlice';
import { UserSlice } from 'store/slice/userSlice';
import { getUserSelector } from 'store/slice/userSlice/selectors';

export default function NickName() {
  const { classes } = ProfileStyle();
  const [error, setError] = useState(false);
  const [disableBtn, setDisableBtn] = useState(true);
  //Global
  const dispatch = useDispatch();
  const { actions } = UserSlice();
  const { counterActions } = CounterSlice();
  const user = useSelector(getUserSelector);

  const form = useForm({
    initialValues: { nickname: '' || user.nickname },
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
          profile: {
            nickname: form.values.nickname,
            picture: user.picture,
            data_of_birth: user.data_of_birth,
            zodiac: user.zodiac,
            introduction: user.introduction,
            relationship: user.relationship,
          },
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
                  position: 'relative',
                  fontSize: 24,
                  fontWeight: 500,
                  lineHeight: '30px',
                  textAlign: 'right',
                  border: 'none',
                  backgroundColor: 'transparent',
                  zIndex: 2,
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
