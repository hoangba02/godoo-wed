import React, { useEffect, useState } from 'react';
import { IconPlus } from '@tabler/icons';
import { ReactComponent as Blink } from 'assets/icons/blink.svg';
import {
  BackgroundImage,
  Box,
  Button,
  Card,
  createStyles,
} from '@mantine/core';

function UpLoad({ width, height, children }) {
  const { classes } = useStyles();
  const [urlImg, setUrlImg] = useState('');

  const handleUploadImage = e => {
    setUrlImg(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <Card h={170} w={170} className={classes.picCard}>
      <BackgroundImage
        sx={{
          position: 'absolute',
          inset: 0,
        }}
        src={''}
      ></BackgroundImage>
      <Box mt={42.5}>
        <Blink />
      </Box>
      <input
        className={classes.upImg}
        type="file"
        onChange={e => {
          handleUploadImage(e);
        }}
        id="fileBtn"
      />
      <label htmlFor="fileBtn" className={classes.label}>
        <Button
          styles={{
            leftIcon: {
              margin: 0,
            },
          }}
          component="span"
          leftIcon={<IconPlus width={18} height={18} />}
          className={classes.button}
        >
          Add
        </Button>
      </label>
    </Card>
  );
}

export default UpLoad;

const useStyles = createStyles(() => ({
  picCard: {
    padding: '0 !important',
    borderRadius: 30,
    position: 'relative',
    backgroundColor: 'var(--white-light)',
    display: 'flex',
    justifyContent: 'center',
  },
  label: {
    position: 'absolute',
    bottom: 21.5,
  },
  button: {
    width: 84,
    height: 26,
    color: 'var(--white)',
    padding: 0,
    background: '#E46125',
    borderRadius: 34,
    fontWeight: 400,
    fontSize: 14,
    lineHeight: '18px',
    '&::before': {
      display: 'none',
    },
  },
  icon: {
    // position: 'absolute',
  },
  upImg: {
    display: 'none',
  },
}));
