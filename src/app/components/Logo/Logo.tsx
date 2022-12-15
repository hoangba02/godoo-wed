import { Avatar, createStyles, Flex } from '@mantine/core';
import { images } from 'assets/images';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  className?: string;
}
function Logo({ className }: Props) {
  const { classes } = useStyles();
  const navigate = useNavigate();

  return (
    <Flex
      sx={{
        width: '100%',
        justifyContent: 'center',
      }}
      className={className}
    >
      <Avatar
        onClick={() => {
          navigate('/login');
        }}
        className={classes.logo}
        color="lime"
        src={images.logo}
      />
    </Flex>
  );
}

export default Logo;

const useStyles = createStyles(() => ({
  logo: {
    width: '150px',
    height: '150px',
    cursor: 'pointer',
    [`@media (max-width:575px)`]: {
      width: '100px',
      height: '100px',
    },
  },
}));
