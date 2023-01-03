import { Flex, Tooltip } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import React from 'react';
import { SwipeStyles } from './SwipeStyles';
import { ReactComponent as NavLeft } from 'assets/icons/narrowLeft.svg';
import { ReactComponent as NavUp } from 'assets/icons/narrowUp.svg';
import { ReactComponent as NavRight } from 'assets/icons/narrowRight.svg';

const ARROW = [
  {
    icon: <NavLeft />,
    label: 'Nope',
  },
  {
    icon: <NavUp />,
    label: 'Scroll',
  },
  {
    icon: <NavRight />,
    label: 'Like',
  },
];
function SwipeTotorial() {
  const { classes } = SwipeStyles();
  const tablet = useMediaQuery('(max-width:799px)');

  return (
    <Flex
      sx={{
        display: tablet ? 'none' : 'flex',
      }}
      className={classes.tutorial}
    >
      {ARROW.map((arrow, index) => {
        return (
          <Tooltip
            key={index}
            sx={{
              width: 45,
              height: 20,
              fontWeight: 400,
              fontSize: 12,
              lineHeight: '12px',
              background: '#424242',
            }}
            position={index === 0 ? 'left' : index === 1 ? 'bottom' : 'right'}
            label={arrow.label}
            arrowSize={6}
            radius={32}
            withArrow
          >
            <div className={classes.arrow}>{arrow.icon}</div>
          </Tooltip>
        );
      })}
    </Flex>
  );
}

export default SwipeTotorial;
