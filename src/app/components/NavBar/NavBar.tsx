import React from 'react';
import { Avatar, Container, Flex, Stack, Text, Box } from '@mantine/core';
import { ReactComponent as Square } from 'assets/icons/square.svg';
import { NavBarStyles } from './NavBarStyles';
import Search from './Search';
import NewMatch from './NewMatch';
import ImgAccount from './ImgAccount';
import { motion } from 'framer-motion';

function Navbar() {
  const { classes } = NavBarStyles();
  return (
    <Container fluid className={classes.container}>
      <Box className={classes.wrapper}>
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
              <Box
                sx={{
                  position: 'absolute',
                  right: 0,
                  cursor: 'pointer',
                }}
              >
                <Square />
              </Box>
            </Stack>
          </Flex>
        </motion.div>
        <Search />
        <ImgAccount />
        <NewMatch />
      </Box>
    </Container>
  );
}

export default Navbar;
