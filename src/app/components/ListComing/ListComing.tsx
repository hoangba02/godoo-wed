import React from 'react';
import Lottie from 'react-lottie';
import { createStyles, Stack, Text } from '@mantine/core';
import Coming from '../Schedule/Coming/Coming';
import NoYetGift from 'assets/lotties/Search.json';

function ListComing({ comings }) {
  const { classes } = useStyles();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: NoYetGift,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  if (comings) {
    return (
      <Stack spacing={0}>
        {comings.map((coming, index) => (
          <Coming
            key={index}
            title={coming.title}
            content={coming.content}
            address={coming.address}
            avatar={coming.avatar}
            people={coming.people}
            color={coming.color}
            background={coming.background}
            hour={coming.hour}
          />
        ))}
      </Stack>
    );
  } else {
    return (
      <Stack>
        <Lottie options={defaultOptions} />
        <Text className={classes.note}>You have no plans for today!</Text>
      </Stack>
    );
  }
}

export default ListComing;

const useStyles = createStyles(() => ({
  note: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: '20px',
    textAlign: 'center',
    color: '#929292',
  },
}));
