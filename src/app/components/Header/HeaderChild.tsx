import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, createStyles, Flex, Text } from '@mantine/core';
import { ReactComponent as ArrowLeft } from 'assets/icons/arrowLeft.svg';
import { ReactComponent as Detail } from 'assets/icons/detail.svg';

interface Props {
  title: string;
  onMotion?: any;
  children?: JSX.Element;
}
function HeaderChild({ title, children, onMotion }: Props) {
  const navigate = useNavigate();
  const { classes } = useStyles();
  return (
    <Flex className={classes.header}>
      <button
        className={classes.backBtn}
        onClick={() => {
          navigate(-1);
          if (onMotion) {
            onMotion();
          }
        }}
      >
        <ArrowLeft />
      </button>
      <Text className={classes.title}>{title}</Text>
      <Box>{children}</Box>
    </Flex>
  );
}

export default HeaderChild;

const useStyles = createStyles(() => ({
  header: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '2px solid #FF9565',
    paddingBottom: 12,
    [`@media (max-width:575px)`]: {
      height: 74,
      alignItems: 'flex-end',
      padding: '0 10px 12px',
      background: '#FF9565',
      borderRadius: '0px 0px 20px 20px',
    },
  },
  backBtn: {
    width: '32px',
    height: '32px',
    padding: 0,
    background: 'transparent',
    ':before': {
      display: 'none',
    },
  },
  title: {
    fontSize: 24,
    fontWeight: 600,
    lineHeight: '30px',
  },
}));
