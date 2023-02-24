import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, createStyles, Flex, Text } from '@mantine/core';
import { ReactComponent as ArrowLeft } from 'assets/icons/arrowLeft.svg';

interface Props {
  title?: string;
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
          if (title === 'Notification') {
            navigate('/about/setting', {
              state: {
                animation: false,
              },
            });
          } else if (title === 'My account') {
            navigate('/about/setting', {
              state: {
                animation: false,
              },
            });
          } else if (title === 'Setting' || title === 'Edit profile') {
            navigate('/about/');
          } else if (title === 'Delete account') {
            navigate('/about/setting');
          } else if (title === 'More about me') {
            navigate('/about/profile');
          } else if (title === 'Gender') {
            navigate('/about/profile');
          } else if (title === 'Change password') {
            navigate('/about/setting/account');
          } else if (title === 'Link to Messenger') {
            navigate('/about/setting/account');
          }

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
      background: '#FFFFFF',
      borderRadius: 0,
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
