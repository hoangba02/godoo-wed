import React, { useEffect, useState } from 'react';
import { IconPlus } from '@tabler/icons';
import { ReactComponent as Blink } from 'assets/icons/blink.svg';
import { ReactComponent as Clear } from 'assets/icons/clear.svg';
import {
  BackgroundImage,
  Box,
  Button,
  Card,
  clsx,
  createStyles,
} from '@mantine/core';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getProfileSelector } from 'store/slice/userSlice/selectors';
import { apiPost } from 'utils/http/request';

function UpLoad({ link, id, name, setImg, img }) {
  const ImgFile = new FormData();
  // Local
  const { t } = useTranslation();
  const { classes } = useStyles();
  const [zIndex, setZIndex] = useState(2);
  const [selectedFile, setSelectedFile] = useState({ name: '', filename: '' });
  // Global
  const profile = useSelector(getProfileSelector);

  const handleUploadImage = e => {
    setSelectedFile({ name: e.target.name, filename: e.target.files[0] });
  };
  useEffect(() => {
    ImgFile.append('file', selectedFile.filename);
    if (selectedFile.filename) {
      apiPost('/v1/uploadgeturl', ImgFile, {
        'content-type': 'multipart/form-data',
      })
        .then(res => {
          setImg({
            ...img,
            [selectedFile.name]: `https://ttvnapi.com/v1/getfile/${res.data[0].filename}`,
          });
          setZIndex(4);
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      return;
    }
  }, [selectedFile]);
  return (
    <Card className={classes.picCard}>
      {img[name] && (
        <button
          className={classes.clearBtn}
          onClick={e => {
            // URL.revokeObjectURL(img.one);
            setImg({ ...img, [name]: '' });
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
        id={id}
        name={name}
        type="file"
        accept="image/*"
        className={classes.upImg}
        onChange={e => {
          handleUploadImage(e);
        }}
      />
      <label
        htmlFor={img.one ? id : ''}
        className={clsx(classes.label, img.one ? '' : 'disable')}
      >
        <Button
          styles={{
            leftIcon: {
              margin: 0,
            },
          }}
          component="span"
          disabled={!img.one}
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
    userSelect: 'none',
    '&.disable': {
      cursor: 'no-drop',
    },
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
    '&[data-disabled]': {
      cursor: 'no-drop',
      color: 'var(--white) !important',
      backgroundColor: '#BFBFBF',
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
