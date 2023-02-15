import React from 'react';
import {
  Button,
  createStyles,
  Flex,
  Paper,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { ReactComponent as Gift } from 'assets/icons/home/giftBig.svg';
import { ReactComponent as Heart } from 'assets/icons/home/heart.svg';
import Profile from '../Profile/Profile';
import useModal from 'hooks/useModal';
interface DescProps {
  data: any;
  drawer?: any;
  onLike?: any;
}
export default function Bio({ data, drawer, onLike }: DescProps) {
  const { classes } = BioStyles();
  const { isShowing, toggle } = useModal();

  return (
    <>
      <Profile
        fullHalf
        height={566}
        width={470}
        hide={toggle}
        isSlide={false}
        status="likedyou"
        isShowing={isShowing}
        profile={data}
        translateX={drawer ? '0%' : '40%'}
      />
      <Flex className={classes.container}>
        <Paper className={classes.paper} onClick={toggle}>
          <Text className={classes.nickname}>{data.nickname}, 24</Text>
          <Title order={3} className={classes.title}>
            {data.description}
          </Title>
        </Paper>
        <Stack>
          <Button
            variant="subtle"
            className={classes.swipeBtn}
            onClick={onLike}
          >
            <Heart />
          </Button>
          <Button variant="subtle" className={classes.swipeBtn}>
            <Gift />
          </Button>
        </Stack>
      </Flex>
    </>
  );
}
const BioStyles = createStyles(() => ({
  container: {
    gap: 18,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    position: 'absolute',
    padding: '0 16px',
    bottom: 30,
    zIndex: 7,
    [`@media (max-width:799px)`]: {
      bottom: 50,
    },
    [`@media (max-width:575px)`]: {
      bottom: 20,
    },
  },
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
  swipeBtn: {
    width: 'max-content',
    height: 'max-content',
    padding: 0,
    backgroundColor: 'initial',
    ':hover': {
      backgroundColor: 'initial',
    },
  },
}));
