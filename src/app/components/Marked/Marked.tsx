import { Box, createStyles, Flex, Stack } from '@mantine/core';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  comings?: any;
}
function Marked({ children, comings }: Props) {
  const { classes } = useStyles();

  return (
    <Stack
      sx={{
        position: 'relative',
        display: 'block',
      }}
    >
      {children}
      <Flex className={classes.dots}>
        {comings?.map((item, index) => (
          <Box
            key={index}
            className={classes.dot}
            sx={{ backgroundColor: item.color }}
          />
        ))}
      </Flex>
    </Stack>
  );
}

export default Marked;

const useStyles = createStyles(() => ({
  dots: {
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translate(-50%, 50%)',
  },
  dot: {
    width: 4,
    height: 4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontsize: 12,
    paddingLeft: 0,
    paddingRight: 0,
    margin: '0 1px',
    borderRadius: 1000,
    color: '#FFFFFF',
    whiteSpace: 'nowrap',
    zIndex: 100,
  },
}));
