import React, { Fragment, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { IconArrowLeft } from '@tabler/icons';
import { Box, Card, Container, Flex } from '@mantine/core';

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
import { UserSlice } from 'store/slice/userSlice';
import { CounterSlice } from 'store/slice/counterSlice';

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
  const dispatch = useDispatch();
  const { counterActions } = CounterSlice();
  const counter = useSelector(getCounterSelector);
  useEffect(() => {
    setOrder(STEPS[counter]);
  }, [counter]);

  const handleComeBack = () => {
    dispatch(counterActions.decrease());
  };
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
          {counter > 0 && counter < 6 ? (
            <button className={classes.back} onClick={handleComeBack}>
              <IconArrowLeft />
            </button>
          ) : null}
          <Box className={classes.card}>
            {Order}
            {/* <Picture /> */}
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
