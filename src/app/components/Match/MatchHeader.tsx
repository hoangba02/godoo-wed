import React from 'react';
import { Avatar, Flex, Stack, Text, createStyles, Group } from '@mantine/core';
import { ReactComponent as Square } from 'assets/icons/square.svg';
import { motion } from 'framer-motion';

function MatchHeader() {
  const { classes } = useStyles();
  return (
    <motion.div
      initial={{ y: -150, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.1, duration: 0.5 }}
    >
      <Flex align="center">
        <Avatar
          size={50}
          radius="xl"
          src="https://i.pinimg.com/236x/47/10/93/471093fa6583930714506215fd25a78d.jpg"
          alt="it's me"
        />
        <Stack className={classes.user}>
          <Text
            sx={{
              fontWeight: 500,
              fontSize: 18,
              lineHeight: '22px',
            }}
          >
            John sayhi!
          </Text>
          <Group
            sx={{
              position: 'absolute',
              right: 0,
              cursor: 'pointer',
            }}
          >
            <Square />
          </Group>
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
