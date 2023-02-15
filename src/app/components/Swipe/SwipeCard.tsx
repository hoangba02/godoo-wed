import React from 'react';
import { createStyles, Paper } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserSelector } from 'store/slice/userSlice/selectors';

interface Props {
  image: string;
  radius: number;
  data?: any;
}
export default function SwipeCard({ data, image, radius }: Props) {
  const user = useSelector(getUserSelector);
  // Local
  const navigate = useNavigate();
  const { classes } = useStyles();
  const handleNavigateChatPage = () => {
    if (data) {
      navigate(`/chat/${data.userId}`);
    }
  };
  return (
    <Paper
      shadow="md"
      radius={radius}
      sx={{
        backgroundImage: `url(${image})`,
      }}
      className={classes.card}
      onClick={handleNavigateChatPage}
    />
  );
}

const useStyles = createStyles(theme => ({
  card: {
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    objectFit: 'fill',
    // backdropFilter: 'blur(22px)',
    imageRendering: 'pixelated',
    objectPosition: 'center',
    cursor: 'pointer',
  },
}));
