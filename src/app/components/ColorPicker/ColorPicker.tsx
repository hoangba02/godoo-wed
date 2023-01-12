import React from 'react';
import { Box, Button, createStyles, Group, Stack } from '@mantine/core';

function ColorPicker({ setGbInput, setColorPicker }) {
  const { classes } = useStyles();
  const colors = [
    {
      top: '#E6C60D',
      bottom: '#FFFBE3',
    },
    {
      top: '#9340B6',
      bottom: '#F6E0FF',
    },
    {
      top: '#026AA7',
      bottom: '#E0F4FF',
    },
    {
      top: '#F11FA5',
      bottom: '#FFE4F5',
    },
    {
      top: '#00AECC',
      bottom: '#DCFAFF',
    },

    {
      top: '#46DF9F',
      bottom: '#DCFCEF',
    },
    {
      top: '#E46125',
      bottom: '#FFE9E0',
    },
  ];
  return (
    <Group className={classes.group}>
      {colors.map((color, index) => (
        <Button
          styles={{
            label: {
              flexDirection: 'column',
            },
          }}
          variant="subtle"
          key={index}
          className={classes.button}
          onClick={() => {
            setColorPicker(prev => !prev);
            setGbInput(colors[index]);
          }}
        >
          <Box
            sx={{
              width: 36,
              height: 36,
              borderRadius: '4px 4px 0 0',
              backgroundColor: color.top,
            }}
          />
          <Box
            sx={{
              width: 36,
              height: 22.5,
              borderRadius: '0 0 4px 4px ',
              backgroundColor: color.bottom,
            }}
          />
        </Button>
      ))}
    </Group>
  );
}

export default ColorPicker;

const useStyles = createStyles(() => ({
  group: {
    justifyContent: 'space-bettwen',
    flexWrap: 'nowrap',
    height: 86.5,
    padding: '16px 10px !important',
    position: 'relative',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    filter: 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.2))',
  },
  button: {
    gap: 0,
    width: 36,
    height: 58.5,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
  },
}));
