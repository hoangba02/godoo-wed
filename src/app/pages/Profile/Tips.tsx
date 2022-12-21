import React, { useEffect, useState } from 'react';
import { Box, Button, Center, Flex, Image, Text } from '@mantine/core';
import { ProfileStyle } from './ProfileStyles';
import { images } from 'assets/images';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from '@mantine/hooks';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { getUserSelector } from 'store/slice/userSlice/selectors';
import Modals from 'app/components/Modals';

export default function Tips() {
  const { classes } = ProfileStyle();
  const navigate = useNavigate();
  const user = useSelector(getUserSelector);
  const [openModal, setOpenModal] = useState(false);
  const phone = useMediaQuery('(max-width:575px)');

  const handleCompleteProfile = () => {
    axios
      .post(
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
      )
      .then(res => {
        setOpenModal(true);
      })
      .catch(err => {
        console.log(err);
      });
  };
  useEffect(() => {
    if (!openModal) {
      return;
    } else {
      setTimeout(function () {
        setOpenModal(false);
        navigate('/');
      }, 2000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openModal]);
  return (
    <Box className={classes.children}>
      <Modals
        btnFunc={false}
        isBtn={false}
        openModal={openModal}
        setOpenModal={setOpenModal}
        isDesc={true}
        desc="Cập nhật hồ sơ thành công. Chúc bạn có những trải nghiệm thật thú vị!"
        img={images.success}
        btnClose={false}
      />
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
