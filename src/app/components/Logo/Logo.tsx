import { Avatar, Box, createStyles, Flex } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { images } from 'assets/images';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Languages from '../Languages/Language';

interface Props {
  className?: string;
}
function Logo({ className }: Props) {
  const { classes } = useStyles();
  const navigate = useNavigate();
  const phone = useMediaQuery('(max-width:575px)');

  return (
    <Flex
      sx={{
        position: 'relative',
        width: '100%',
        justifyContent: 'center',
        [`@media (max-width:575px)`]: {
          // position: 'static',
        },
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
      <Languages />
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
