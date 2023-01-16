import React, { useState } from 'react';
import {
  Avatar,
  Button,
  Center,
  Container,
  Flex,
  Stack,
  Text,
} from '@mantine/core';
import { useSelector } from 'react-redux';
import { AboutStyles } from './AboutStyles';
import { motion } from 'framer-motion';

import { ReactComponent as ArrowLeft } from 'assets/icons/arrowLeft.svg';
import { ReactComponent as Settings } from 'assets/icons/about/settings.svg';
import { ReactComponent as Gift } from 'assets/icons/about/gift.svg';
import { ReactComponent as Wallet } from 'assets/icons/about/wallet.svg';
import { getProfileSelector } from 'store/slice/userSlice/selectors';
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();
  const { classes } = AboutStyles();
  const [drawer, setDrawer] = useState(true);

  // Global
  const profile = useSelector(getProfileSelector);

  const after = {
    width: 338,
  };

  const before = {
    width: '100%',
  };
  return (
    <motion.div
      animate={drawer ? before : after}
      transition={{ duration: 2 }}
      onAnimationComplete={() => {
        navigate('/chat/setting');
      }}
      className={classes.wrapper}
    >
      <Container className={classes.container}>
        <Flex className={classes.header}>
          <Button variant="subtle" className={classes.aboutBtn}>
            <ArrowLeft />
          </Button>
          <Stack align="center" spacing={0}>
            <Center
              sx={{
                position: 'relative',
                width: 166,
                height: 166,
                borderRadius: '50%',
                background: 'linear-gradient(90deg, #E46125 0%, #C91A44 100%)',
                '::before': {
                  content: '""',
                  position: 'absolute',
                  width: 158,
                  height: 158,
                  borderRadius: '50%',
                  background: 'var(--white)',
                },
              }}
            >
              <Avatar size={150} radius={9999} src={profile.picture[0]} />
            </Center>
            <Text className={classes.nickname}>{profile.nickname}</Text>
            <Button variant="subtle" className={classes.editBtn}>
              edit my profile
            </Button>
          </Stack>
          <Button
            variant="subtle"
            className={classes.aboutBtn}
            onClick={() => {
              setDrawer(false);
            }}
          >
            <Settings />
          </Button>
        </Flex>
        <Flex className={classes.wallet}>
          <Stack
            sx={{
              background:
                'linear-gradient(90deg, #E46125 -0.01%, #C91A44 100%)',
            }}
            className={classes.moneyBtn}
          >
            <Gift />
            <Text className={classes.textWallet}>Gift Box</Text>
          </Stack>
          <Stack
            sx={{
              background:
                'linear-gradient(90deg, #E46125 -0.01%, #C91A44 100%)',
            }}
            className={classes.moneyBtn}
          >
            <Wallet />
            <Text className={classes.textWallet}>Wallet</Text>
          </Stack>
        </Flex>
      </Container>
    </motion.div>
  );
}

export default About;
