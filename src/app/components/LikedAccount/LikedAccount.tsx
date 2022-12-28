import React from 'react';
import {
  Box,
  Button,
  createStyles,
  Overlay,
  Paper,
  Text,
  Title,
} from '@mantine/core';
import { ReactComponent as GiftBox } from 'assets/icons/gift.svg';

interface Props {
  image?: string;
  title?: string;
  decs?: string;
}
function LikedAccount({ image, title, decs }: Props) {
  const { classes } = useStyles();
  return (
    <Paper
      shadow="md"
      radius={0}
      sx={{
        backgroundImage: `url('https://i.pinimg.com/236x/83/73/1d/83731d9481ca21511b9bb1ddd385795f.jpg')`,
      }}
      className={classes.card}
    >
      <Overlay
        sx={{
          borderRadius: 8,
          zIndex: 1,
        }}
        gradient={`linear-gradient(180deg, rgba(255, 255, 255, 0) -39.78%, rgba(255, 255, 255, 0.1) 29%, #000000 100%)`}
      />
      <Box className={classes.content}>
        <Text className={classes.category} size="xs">
          Marry, 21
        </Text>
        <Text lineClamp={2} className={classes.title}>
          Just a free soul looking for someone to hike Just a free soul looking
          for someone to hike
        </Text>
      </Box>
      <Box className={classes.gift}>
        <GiftBox />
      </Box>
    </Paper>
  );
}

export default LikedAccount;

const useStyles = createStyles(() => ({
  card: {
    minWidth: 147,
    maxWidth: 147,
    minHeight: 175,
    maxHeight: 175,
    borderRadius: 8,
    padding: '10px 8px',
    position: 'relative',
    color: 'var(--white)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    aspectRatio: '0.84',
  },
  content: {
    position: 'relative',
    zIndex: 2,
    backgroundColor: 'transparent',
  },
  title: {
    fontWeight: 400,
    lineHeight: '15px',
    fontSize: 12,
    color: 'var(--grey)',
  },

  category: {
    opacity: 0.7,
    fontWeight: 600,
    fontSize: 16,
    lineHeight: '20px',
    textTransform: 'uppercase',
  },
  gift: {
    position: 'absolute',
    top: 6,
    right: 6,
  },
}));
