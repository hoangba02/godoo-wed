import React, { useEffect, useRef } from 'react';
import useModal from 'hooks/useModal';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { Avatar, Flex, Stack, Text, createStyles, Group } from '@mantine/core';

import { ReactComponent as Square } from 'assets/icons/square.svg';
import { getProfileSelector } from 'store/slice/userSlice/selectors';
import Schedule from '../Schedule/Schedule';
import { useNavigate } from 'react-router-dom';

function MatchHeader() {
  const headerRef = useRef<any>(null);
  const { classes } = useStyles();
  const { isShowing, toggle } = useModal();

  // Global
  const navigate = useNavigate();
  const profile = useSelector(getProfileSelector);
  return (
    <motion.div
      ref={headerRef}
      initial={{ y: -150, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.1, duration: 0.5 }}
    >
      <Flex align="center">
        <Avatar
          size={50}
          radius="xl"
          src={profile.picture[0]}
          alt="it's me"
          onClick={() => {
            navigate('/about');
          }}
        />
        <Stack className={classes.user}>
          <Text
            sx={{
              fontWeight: 500,
              fontSize: 18,
              lineHeight: '22px',
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
