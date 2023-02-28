import { Avatar, createStyles, Flex } from '@mantine/core';
import { images } from 'assets/images';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Languages from '../Languages/Language';

interface Props {
  className?: string;
  isLang?: boolean;
}
function Logo({ className, isLang }: Props) {
  const { classes } = makeStyles();
  const navigate = useNavigate();

  return (
    <Flex
      sx={{
        position: 'relative',
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
      {isLang && <Languages />}
    </Flex>
  );
}

export default Logo;

const makeStyles = createStyles(() => ({
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
