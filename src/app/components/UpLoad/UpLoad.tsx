import React, { useState } from 'react';
import { IconPlus } from '@tabler/icons';
import { ReactComponent as Blink } from 'assets/icons/blink.svg';
import { ReactComponent as Clear } from 'assets/icons/clear.svg';
import {
  BackgroundImage,
  Box,
  Button,
  Card,
  createStyles,
} from '@mantine/core';
import { useSelector } from 'react-redux';
import { getProfileSelector } from 'store/slice/profileSlice/selectors';
import { useTranslation } from 'react-i18next';

function UpLoad({ link, id, name, setImg, img }) {
  const { t } = useTranslation();
  const { classes } = useStyles();
  const [zIndex, setZIndex] = useState(2);
  const profile = useSelector(getProfileSelector);

  const handleUploadImage = e => {
    setImg({ ...img, [e.target.name]: URL.createObjectURL(e.target.files[0]) });
    setZIndex(4);
  };
  return (
    <Card className={classes.picCard}>
      {img[name] && (
        <button
          className={classes.clearBtn}
          onClick={e => {
            // URL.revokeObjectURL(img.one);
            setImg({ ...img, [name]: URL.revokeObjectURL(img[name]) });
            setZIndex(2);
          }}
        >
          <Clear width={20} height={20} />
        </button>
      )}
      <BackgroundImage
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: zIndex,
        }}
        src={profile.picture[id] || link}
      ></BackgroundImage>
      <Box
        sx={{
          width: '35%',
          height: '35%',
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1,
        }}
      >
        <Blink width="100%" height="100%" />
      </Box>
      <input
        name={name}
        className={classes.upImg}
        type="file"
        onChange={e => {
          handleUploadImage(e);
        }}
        id={id}
      />
      <label htmlFor={id} className={classes.label}>
        <Button
          styles={{
            leftIcon: {
              margin: 0,
            },
          }}
          component="span"
          leftIcon={<IconPlus width={18} height={18} />}
          className={classes.addBtn}
        >
          {t('Profile.text.Add')}
        </Button>
      </label>
    </Card>
  );
}

export default UpLoad;

const useStyles = createStyles(() => ({
  picCard: {
    height: '100%',
    width: '100%',
    padding: '0 !important',
    borderRadius: 30,
    position: 'relative',
    backgroundColor: 'var(--white)',
    display: 'flex',
    justifyContent: 'center',
    [`@media (max-width:575px)`]: {
      height: 106,
      width: 106,
    },
  },
  label: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: 26,
    position: 'absolute',
    bottom: '8%',
    zIndex: 3,
    [`@media (max-width:575px)`]: {
      width: '58%',
    },
  },
  addBtn: {
    width: '49%',
    height: '100%',
    color: 'var(--white)',
    padding: 0,
    backgroundColor: '#E46125',
    borderRadius: 34,
    fontWeight: 400,
    fontSize: '14px !important',
    lineHeight: '18px',
    '&::before': {
      display: 'none',
    },
    '&:hover': {
      transition: '0.5s',
      backgroundColor: '#E46125 !important',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    },
    [`@media (max-width:575px)`]: {
      width: '100%',
      height: '100%',
    },
  },
  icon: {
    // position: 'absolute',
  },
  upImg: {
    display: 'none',
  },
  clearBtn: {
    position: 'absolute',
    right: 14,
    top: 14,
    border: 'none',
    width: '15%',
    height: '15%',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    transition: 'transform 0.5s ease',
    zIndex: 5,

    '&:active': {
      transform: 'translateY(3px)',
    },
  },
}));
