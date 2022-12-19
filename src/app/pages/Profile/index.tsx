import React, { Fragment, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import { BackgroundImage, Box, Card, Container, Flex } from '@mantine/core';

import Tips from './Tips';
import Mode from './Mode';
import Gender from './Gender';
import Birth from './Birthday';
import Picture from './Picture';
import Desc from './Description';
import NickName from './NickName';
import { ProfileStyle } from './ProfileStyles';
import { getCounterSelector } from 'store/slice/counterSlice/selector';
import { images } from 'assets/images';
import { useMediaQuery } from '@mantine/hooks';

const STEPS = [
  <NickName />,
  <Picture />,
  <Birth />,
  <Gender />,
  <Desc />,
  <Mode />,
  <Tips />,
];

export function Profile() {
  const { classes } = ProfileStyle();
  const phone = useMediaQuery('(max-width:575px)');
  const [Order, setOrder] = useState(<Fragment />);
  // Global
  const counter = useSelector(getCounterSelector);
  useEffect(() => {
    setOrder(STEPS[counter]);
  }, [counter]);
  return (
    <>
      <Helmet>
        <title>Profile</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Container className={classes.container}>
        <Box
          style={{
            height: '100vh',
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${
              phone ? images.bgLoginTopMobile : images.bgLoginTop
            })`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            zIndex: 2,
          }}
        ></Box>
        <Card className={classes.wrapper}>
          <Box className={classes.card}>
            {/* {Order} */}
            <Birth />
            <Flex className={classes.progress}>
              {STEPS.map((step, index) => {
                return (
                  <Box
                    sx={{
                      backgroundColor:
                        index <= counter
                          ? 'var(--primary-4)'
                          : 'var(--white-light)',
                    }}
                    key={index}
                    className={classes.step}
                  ></Box>
                );
              })}
            </Flex>
          </Box>
        </Card>
      </Container>
    </>
  );
}
