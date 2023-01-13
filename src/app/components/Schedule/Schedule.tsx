import React, { useState } from 'react';
import Lottie from 'react-lottie';
import { createPortal } from 'react-dom';

import { Button, Card, Flex, Stack, Text } from '@mantine/core';
import { ScheduleStyles } from './ScheduleStyles';
import MyOverlay from '../Layout/MyOverlay/MyOverlay';
import Calendar from '../Calendar/Calendar';
import Coming from './Coming/Coming';
import NoYetGift from 'assets/lotties/Search.json';
import { ReactComponent as ArrowLeft } from 'assets/icons/arrowLeft.svg';

function Schedule({ hide, isShowing }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: NoYetGift,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  const { classes } = ScheduleStyles();
  const [date, setDate] = useState(new Date());
  if (!isShowing) return null;
  return createPortal(
    <MyOverlay hide={hide}>
      <>
        <Flex className={classes.header}>
          <button className={classes.backBtn} onClick={hide}>
            <ArrowLeft />
          </button>
          <Text className={classes.title}>My Schedule</Text>
        </Flex>
        <Card className={classes.schedule}>
          <Card className={classes.calendar}>
            <Calendar />
          </Card>
          <Card
            sx={{
              height: 'calc(100% - 315px)',
            }}
            className={classes.coming}
          >
            <Text className={classes.text}>Upcoming</Text>
            {/* <Stack spacing={0}>
              <Coming color="#46DF9F" background="#DCFCEF" hour="20:20" />
              <Coming color="#46DF9F" background="#DCFCEF" hour="20:20" />
              <Coming color="#46DF9F" background="#DCFCEF" hour="20:20" />
              <Coming color="#46DF9F" background="#DCFCEF" hour="20:20" />
            </Stack> */}
            <Stack>
              <Lottie options={defaultOptions} />
              <Text className={classes.note}>You have no plans for today!</Text>
            </Stack>
          </Card>
        </Card>
      </>
    </MyOverlay>,
    document.body,
  );
}

export default Schedule;
