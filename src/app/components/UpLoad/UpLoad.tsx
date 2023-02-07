import React, { useEffect, useState } from 'react';
import { IconPlus } from '@tabler/icons';
import { ReactComponent as Blink } from 'assets/icons/blink.svg';
import { ReactComponent as Clear } from 'assets/icons/clear.svg';
import {
  BackgroundImage,
  Box,
  Button,
  Card,
  createStyles,
  Input,
} from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getProfileSelector } from 'store/slice/userSlice/selectors';
import { apiPost } from 'utils/http/request';
import { CounterSlice } from 'store/slice/counterSlice';
import { UserSlice } from 'store/slice/userSlice';

interface Props {
  id: string;
  name: string;
  link: string;
  img: any;
  setImg: any;
  isEdit?: boolean;
}
function UpLoad({ link, id, name, setImg, img, isEdit }: Props) {
  const ImgFile = new FormData();
  // Local
  const { t } = useTranslation();
  const { classes } = useStyles();
  const [zIndex, setZIndex] = useState(() => {
    if (link) return 4;
    return 2;
  });
  const [selectedFile, setSelectedFile] = useState({ name: '', filename: '' });
  // Global
  const dispatch = useDispatch();
  const { counterActions } = CounterSlice();
  const { actions } = UserSlice();
  const profile = useSelector(getProfileSelector);

  const handleUploadImage = e => {
    setSelectedFile({ name: e.target.name, filename: e.target.files[0] });
  };

  const handleClearImg = url => {
    apiPost(
      '/v1/deletefile',
      {
        url: url,
      },
      {},
    )
      .then(res => {
        if (res.error === 0) {
          setImg({ ...img, [name]: '' });
          setZIndex(2);
        }
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
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
  console.log(img);
  return (
    <Card
      sx={{
        backgroundColor: isEdit ? '#F3F3F3' : '#FFFFFF',
        [`@media (max-width:575px)`]: {
          height: id === '0' ? '100%' : 106,
          width: id === '0' ? '100%' : 106,
        },
      }}
      className={classes.picCard}
    >
      {img[name] && (
        <button
          className={classes.clearBtn}
          onClick={() => {
            handleClearImg(img[name]);
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
        <Blink
          width="100%"
          height="100%"
          color={isEdit ? '#D6D6D6' : '#F3F3F3'}
        />
      </Box>
      <Input
        id={id}
        name={name}
        type={id === '0' ? 'file' : img.one ? 'file' : 'text'}
        // accept="image/*"
        capture
        className={classes.upImg}
        onChange={e => {
          handleUploadImage(e);
        }}
      />
      <label
        htmlFor={id}
        style={{ height: id === '0' ? 42 : 26 }}
        className={classes.label}
      >
        <Button
          styles={{
            leftIcon: {
              margin: 0,
            },
            root: {
              fontSize: id === '0' ? 32 : 14,
              [`@media (max-width:575px)`]: {
                fontSize: id === '0' ? 24 : 14,
              },
            },
          }}
          component="span"
          disabled={!img.one}
          leftIcon={
            <IconPlus
              width={id === '0' ? 29 : 18}
              height={id === '0' ? 29 : 18}
            />
          }
          sx={{
            width: '49%',
            height: '100%',
            color: 'var(--white)',
            padding: 0,
            backgroundColor: '#E46125',
            borderRadius: 34,
            fontSize: 14,
            fontWeight: 400,
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
              cursor: id === '0' ? 'default' : 'no-drop',
              color: 'var(--white) !important',
              backgroundColor: id === '0' ? '#E46125' : '#BFBFBF',
            },
            [`@media (max-width:575px)`]: {
              width: '100%',
              height: '100%',
            },
          }}
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
  },
  label: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
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
