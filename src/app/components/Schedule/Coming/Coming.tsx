import React from 'react';
import { Avatar, Card, createStyles, Flex, Stack, Text } from '@mantine/core';
import { ReactComponent as MapPin } from 'assets/icons/mapPin.svg';

interface Props {
  background: string;
  color: string;
  hour: string;
}
function Coming({ background, color, hour }: Props) {
  const { classes } = useStyles();
  return (
    <Flex className={classes.container}>
      <Text
        sx={{
          margin: '8px 12px 0 0',
        }}
        className={classes.time}
      >
        {hour}
      </Text>
      <Stack
        spacing={5.5}
        sx={{
          width: '100%',
          borderRadius: 5,
          padding: '8px 14px!important',
          backgroundColor: background,
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            left: 0,
            top: 0,
            width: 7,
            height: '100%',
            borderRadius: '5px 0 0 5px',
            backgroundColor: color,
          },
        }}
      >
        <Text
          sx={{
            color: color,
            fontWeight: 500,
            fontSize: 18,
            linHeight: '22px',
          }}
        >
          Cafe Dating
        </Text>
        <Text className={classes.time}>Có làm người yêu em không thì bảo</Text>
        <Flex align="center">
          <MapPin />
          <Text className={classes.location}>Kayla Cafe - 101 Cầu Giấy</Text>
        </Flex>
        <Flex>
          <Avatar
            size={24}
            radius="lg"
            src="https://i.pinimg.com/236x/fe/d7/93/fed793198a515471a728c4dba8397f56.jpg"
          />
          <Text className={classes.location}>Anna</Text>
        </Flex>
      </Stack>
    </Flex>
  );
}

export default Coming;

const useStyles = createStyles(() => ({
  container: {
    width: '100%',
    margin: '12px 0',
  },
  time: {
    fontWeight: 400,
    fontSize: 14,
    lineHeight: '18px',
  },
  location: {
    fontWeight: 400,
    fontSize: 12,
    lineHeight: '15px',
    marginLeft: '5px',
  },
}));
