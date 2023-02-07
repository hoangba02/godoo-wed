import React from 'react';
import { createStyles, Flex, Switch, Text } from '@mantine/core';
import { AboutPage } from '../../Loadable';
function Notification() {
  const notifications = [
    {
      name: 'New message',
    },
    {
      name: 'New pairing',
    },
    {
      name: 'Admirer',
    },
    {
      name: 'Transaction',
    },
  ];
  const { classes } = useStyles();
  return (
    <AboutPage title="Notification">
      {notifications.map((item, index) => (
        <Flex key={index} className={classes.switch}>
          <Text>{item.name}</Text>
          <Switch
            styles={{
              root: {
                display: 'flex',
                alignItems: 'center',
              },
            }}
            size="lg"
            color="green"
          />
        </Flex>
      ))}
    </AboutPage>
  );
}

export default Notification;

const useStyles = createStyles(() => ({
  content: {
    width: '100%',
    padding: '45px 30px 0',
    borderLeft: '1px solid #BFBFBF',
  },
  switch: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 55,
    width: 570,
    border: '1px solid #A9A9A9',
    borderRadius: 8,
    padding: '8px 16px',
    [`@media (max-width:575px)`]: {
      width: '100%',
    },
  },
}));
