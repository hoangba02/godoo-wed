import React from 'react';
import { useSelector } from 'react-redux';
import AboutLayout from 'app/components/Layout/About/AboutLayout';
import { getProfileSelector } from 'store/slice/userSlice/selectors';
import { Box, Container, createStyles, Flex, Stack, Text } from '@mantine/core';
import { ReactComponent as ChevronRight } from 'assets/icons/setting/chevronRight.svg';
import { ReactComponent as Mes } from 'assets/icons/mes.svg';
import { ReactComponent as Tele } from 'assets/icons/tele.svg';
function Account() {
  const { classes } = useStyles();
  const profile = useSelector(getProfileSelector);
  return (
    <AboutLayout title="Account">
      <Stack className={classes.container}>
        <Stack spacing={8}>
          <Text className={classes.part}>Login method</Text>
          <Flex className={classes.option}>
            <Text>{`Username: ${profile.nickname}`}</Text>
          </Flex>
          <Flex justify="space-between" className={classes.option}>
            <Text className={classes.name}>Language</Text>
            <ChevronRight />
          </Flex>
        </Stack>
        <Stack spacing={8}>
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
      </Stack>
    </AboutLayout>
  );
}

export default Account;

const useStyles = createStyles(() => ({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  part: {},
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
  },
  name: {
    fontWeight: 400,
    fontSize: 18,
    lineHeight: '22px',
    userSelect: 'none',
  },
}));
