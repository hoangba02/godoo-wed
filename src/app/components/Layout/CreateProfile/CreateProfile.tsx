import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Card, Container, Flex } from '@mantine/core';

import { CounterSlice } from 'store/slice/counterSlice';
import { ReactComponent as BackBtn } from 'assets/icons/backBtn.svg';
import { getCounterSelector } from 'store/slice/counterSlice/selector';
import Background from 'app/components/Background/Background';
import { CreateProfileStyles } from './CreateProfileStyles';
import { getUserSelector } from 'store/slice/userSlice/selectors';
import { UserSlice } from 'store/slice/userSlice';

const STEPS = [
  'nickname',
  'picture',
  'birthday',
  'gender',
  'description',
  'mode',
];

export function ProfileLayout({ children }) {
  const { classes } = CreateProfileStyles();
  // Global
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { actions } = UserSlice();
  const { counterActions } = CounterSlice();
  const counter = useSelector(getCounterSelector);
  const user = useSelector(getUserSelector);

  const handleComeBack = () => {
    dispatch(counterActions.decrease());
  };
  useEffect(() => {
    if (user.token !== '') {
      if (counter === 0) {
        navigate('/register/nickname');
      } else if (counter === 1) {
        navigate('/register/picture');
      } else if (counter === 2) {
        navigate('/register/birthday');
      } else if (counter === 3) {
        navigate('/register/gender');
      } else if (counter === 4) {
        navigate('/register/description');
      } else if (counter === 5) {
        navigate('/register/mode');
      }
    } else {
      return;
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);

  useEffect(() => {
    window.addEventListener('beforeunload', () =>
      dispatch(actions.logoutSuccess()),
    );
  }, []);
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
