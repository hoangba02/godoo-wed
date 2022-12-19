import React from 'react';
import { Box, Button, Center, Flex, Image, Text } from '@mantine/core';
import { ProfileStyle } from './ProfileStyles';
import { images } from 'assets/images';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from '@mantine/hooks';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { getUserSelector } from 'store/slice/userSlice/selectors';

export default function Tips() {
  const { classes } = ProfileStyle();
  const navigate = useNavigate();
  const user = useSelector(getUserSelector);
  const phone = useMediaQuery('(max-width:575px)');

  const handleCompleteProfile = () => {
    axios.post(
      ' https://ttvnapi.com/v1/godoo/profile/compulsoryinfo',
      {
        nickname: user.nickname,
        picture: user.picture,
        date_of_birth: user.date_of_birth,
        zodiac: user.zodiac,
        gender: user.gender,
        introduction: user.introduction,
        relationship: user.relationship,
      },
      {
        headers: {
          userid: user.id,
          token: user.token,
        },
      },
    );
  };
  return (
    <Box className={classes.children}>
      <Button
        variant="subtle"
        className={classes.thanksBtn}
        onClick={handleCompleteProfile}
      >
        No thanks
      </Button>
      <Center pt={100}>
        <Image
          width={phone ? 315 : 529}
          height={phone ? 290 : 489}
          src={images.tips}
          alt="tips"
        />
      </Center>
      <Text pt={48} mx={phone ? 16 : 0} className={classes.text}>
        Adding more details can make you look more interesting and get more
        matches.
      </Text>
      <Flex justify="center">
        <Button mt={40} variant="gradient" className={classes.addNow}>
          Add now
        </Button>
      </Flex>
    </Box>
  );
}
