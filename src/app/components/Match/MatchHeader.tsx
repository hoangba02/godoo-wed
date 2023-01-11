import React from 'react';
import { Avatar, Flex, Stack, Text, createStyles, Group } from '@mantine/core';
import { ReactComponent as Square } from 'assets/icons/square.svg';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileSelector } from 'store/slice/userSlice/selectors';
import { UserSlice } from 'store/slice/userSlice';
import useModal from 'hooks/useModal';
import Schedule from '../Schedule/Schedule';

function MatchHeader() {
  const { classes } = useStyles();
  const { isShowing, toggle } = useModal();

  // Global
  const dispatch = useDispatch();
  const { actions } = UserSlice();
  const profile = useSelector(getProfileSelector);
  return (
    <motion.div
      initial={{ y: -150, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.1, duration: 0.5 }}
    >
      <Flex align="center">
        <Avatar size={50} radius="xl" src={profile.picture[0]} alt="it's me" />
        <Stack className={classes.user}>
          <Text
            sx={{
              fontWeight: 500,
              fontSize: 18,
              lineHeight: '22px',
            }}
            onClick={() => {
              dispatch(actions.logoutSuccess());
            }}
          >
            {profile.nickname}
          </Text>
          <Group
            sx={{
              position: 'absolute',
              right: 0,
              cursor: 'pointer',
            }}
            onClick={toggle}
          >
            <Square />
          </Group>
          <Schedule hide={toggle} isShowing={isShowing} />
        </Stack>
      </Flex>
    </motion.div>
  );
}

export default MatchHeader;

const useStyles = createStyles(() => ({
  user: {
    position: 'relative',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    marginLeft: 8,
    borderBottom: '1px solid #FFE0D2',
  },
}));
