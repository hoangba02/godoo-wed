import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Card, Container, Flex } from '@mantine/core';

import { CounterSlice } from 'store/slice/counterSlice';
import { ReactComponent as BackBtn } from 'assets/icons/backBtn.svg';
import { getCounterSelector } from 'store/slice/counterSlice/selector';
import Background from 'app/components/Background/Background';
import { ProfileLayoutStyle } from './ProfileLayoutStyle';

const STEPS = [
  'nickname',
  'picture',
  'birthday',
  'gender',
  'description',
  'mode',
];

export function ProfileLayout({ children }) {
  const { classes } = ProfileLayoutStyle();
  // Global
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { counterActions } = CounterSlice();
  const counter = useSelector(getCounterSelector);

  const handleComeBack = () => {
    dispatch(counterActions.decrease());
    navigate(-1);
  };
  return (
    <>
      <Helmet>
        <title>Profile</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Background>
        <Container fluid className={classes.container}>
          <Card className={classes.wrapper}>
            {counter > 0 && (
              <button className={classes.back} onClick={handleComeBack}>
                <BackBtn />
              </button>
            )}
            <Box className={classes.card}>
              {children}
              <Flex className={classes.progress}>
                {STEPS.map((step, index) => {
                  return (
                    <Box
                      sx={{
                        cursor: 'pointer',
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
      </Background>
    </>
  );
}
