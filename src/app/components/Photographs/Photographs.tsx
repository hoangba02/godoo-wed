import React from 'react';
import { Box, Flex, Stack } from '@mantine/core';

import UpLoad from 'app/components/UpLoad/UpLoad';

function Photographs({ img, setImg, isEdit }) {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
        [`@media (min-width:768px) and (max-width:991px)`]: {
          height: '58%',
        },
        [`@media (min-width:576px) and (max-width:767px)`]: {
          height: '61%',
        },

        [`@media (max-width:575px)`]: { height: 'max-content' },
        // [`@media (max-width:375px)`]: {},
      }}
    >
      <Flex
        sx={{
          width: '100%',
          height: '65.5%',
          gap: '5%',
          justifyContent: 'space-between',
          // [`@media (min-width:768px) and (max-width:991px)`]: {
          //   height: '53.5%',
          // },
          // [`@media (min-width:576px) and (max-width:767px)`]: {
          //   height: '65.5%',
          // },
          [`@media (max-width:575px)`]: {
            gap: 15,
            height: 225,
          },
        }}
      >
        <Box
          sx={{
            width: '65%',
            height: '100%',
            aspectRatio: '1 / 1',
            position: 'relative',
            zIndex: 99,
          }}
        >
          <UpLoad id="0" name="one" setImg={setImg} img={img} isEdit={isEdit} />
        </Box>
        <Stack
          sx={{
            gap: '7%',
            width: '30%',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
          }}
        >
          <UpLoad id="1" name="two" setImg={setImg} img={img} isEdit={isEdit} />
          <UpLoad
            id="2"
            name="three"
            setImg={setImg}
            img={img}
            isEdit={isEdit}
          />
        </Stack>
      </Flex>
      <Flex
        sx={{
          height: '30%',
          gap: '5%',
          marginTop: 25,
          justifyContent: 'space-between',
          // [`@media (min-width:768px) and (max-width:991px)`]: {
          //   height: '30%',
          // },
          [`@media (max-width:575px)`]: {
            gap: 0,
            height: 106,
            marginTop: 17,
            marginBottom: 20,
          },
        }}
      >
        <UpLoad id="3" name="four" setImg={setImg} img={img} isEdit={isEdit} />
        <UpLoad id="4" name="fire" setImg={setImg} img={img} isEdit={isEdit} />
        <UpLoad id="5" name="six" setImg={setImg} img={img} isEdit={isEdit} />
      </Flex>
    </Box>
  );
}

export default Photographs;
