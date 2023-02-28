import { createStyles, Paper, Text, Title } from '@mantine/core';
import React from 'react';

interface Props {
  data: any;
  toggle?: any;
}
function Bio({ data, toggle }: Props) {
  const { classes } = makeStyles();
  return (
    <Paper className={classes.paper} onClick={toggle}>
      <Text className={classes.nickname}>{data.nickname}, 24</Text>
      <Title order={3} className={classes.title}>
        {data.description}
      </Title>
    </Paper>
  );
}

export default Bio;

const makeStyles = createStyles(() => ({
  paper: {
    color: 'var(--white)',
    background: 'transparent',
  },
  title: {
    width: 251,
    fontWeight: 400,
    lineHeight: '18px',
    fontSize: 14,
    marginTop: 2,
    userSelect: 'none',
  },

  nickname: {
    fontWeight: 600,
    fontSize: 32,
    lineHeight: '40px',
    userSelect: 'none',
    cursor: 'pointer',
  },
}));
