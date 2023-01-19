import React from 'react';
import { useSelector } from 'react-redux';
import AboutLayout from 'app/components/Layout/About/AboutLayout';
import { getProfileSelector } from 'store/slice/userSlice/selectors';
import { createStyles, Flex, Stack, Text } from '@mantine/core';
import { ReactComponent as ChevronRight } from 'assets/icons/setting/chevronRight.svg';
import { ReactComponent as Mes } from 'assets/icons/mes.svg';
import { ReactComponent as Tele } from 'assets/icons/tele.svg';
function Account() {
  const { classes } = useStyles();
  const profile = useSelector(getProfileSelector);
  return (
    <AboutLayout title="Account">
      <Stack className={classes.container}>
        <Text className={classes.part}>Login method</Text>
        <Flex className={classes.option}>
          <Text
            sx={{
              color: '#929292',
            }}
            className={classes.name}
          >{`Username: ${profile.nickname}`}</Text>
        </Flex>
        <Flex justify="space-between" className={classes.option}>
          <Text
            sx={{
              color: '#000000',
            }}
            className={classes.name}
          >
            Change Password
          </Text>
          <ChevronRight />
        </Flex>
      </Stack>
      <Stack className={classes.container}>
        <Text className={classes.part}>Manage account</Text>
        <Flex className={classes.option}>
          <Mes />
          <Text className={classes.name}>Liên kết Messenger</Text>
        </Flex>
        <Flex className={classes.option}>
          <Tele />
          <Text className={classes.name}>Liên kết Telegram</Text>
        </Flex>
      </Stack>
    </AboutLayout>
  );
}

export default Account;

const useStyles = createStyles(() => ({
  container: {
    gap: 8,
    width: '100%',
  },
  part: {
    fontWeight: 500,
    fontSize: 18,
    lineHeight: '22px',
  },
  nickname: {
    color: '#929292',
  },
  option: {
    gap: 10,
    width: 570,
    height: 55,
    padding: '0 8px 0 16px',
    borderRadius: 8,
    alignItems: 'center',
    border: '1px solid #A9A9A9',
    transition: 'all 0.5s ease',
    ':active': {
      transform: 'scale(0.95)',
    },
    [`@media (max-width:575px)`]: {
      width: '100%',
    },
  },
  name: {
    fontWeight: 400,
    fontSize: 18,
    lineHeight: '22px',
    userSelect: 'none',
    color: '#108EE9',
  },
}));
