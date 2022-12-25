import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Card, Container, Flex } from '@mantine/core';
import React, { Fragment, useEffect, useState } from 'react';

import Tips from './Tips';
import Mode from './Mode';
import Gender from './Gender';
import Birth from './Birthday';
import Picture from './Picture';
import Desc from './Description';
import NickName from './NickName';
import { images } from 'assets/images';
import { ProfileStyle } from './ProfileStyles';
import { useMediaQuery } from '@mantine/hooks';
import { UserSlice } from 'store/slice/userSlice';
import { CounterSlice } from 'store/slice/counterSlice';
import { ReactComponent as BackBtn } from 'assets/icons/backBtn.svg';
import { getCounterSelector } from 'store/slice/counterSlice/selector';

const STEPS = [
  <NickName />,
  <Picture />,
  <Birth />,
  <Gender />,
  <Desc />,
  <Mode />,
  // <Tips />,
];

export function Profile() {
  const { classes } = ProfileStyle();
  const phone = useMediaQuery('(max-width:575px)');
  const [Order, setOrder] = useState(<Fragment />);
  // Global
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { counterActions } = CounterSlice();
  const counter = useSelector(getCounterSelector);
  useEffect(() => {
    setOrder(STEPS[counter]);
  }, [counter]);

  const handleComeBack = () => {
    dispatch(counterActions.decrease());
  };
  useEffect(() => {
    if (counter === -1) {
      navigate('/login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          <button className={classes.back} onClick={handleComeBack}>
            <BackBtn />
          </button>
          <Box className={classes.card}>
            {/* {Order} */}
            <Gender />
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
