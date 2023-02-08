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
  FileButton,
  FileInput,
  Group,
  Image,
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
  img: any;
  setImg: any;
  isEdit?: boolean;
}
function UpLoad({ id, name, setImg, img, isEdit }: Props) {
  // Global
  const profile = useSelector(getProfileSelector);
  // Local
  const ImgFile = new FormData();
  const { t } = useTranslation();
  const { classes } = useStyles();
  const [zIndex, setZIndex] = useState(() => {
    if (profile.picture[id]) return 4;
    return 2;
  });
  const [file, setFile] = useState<File | null>(null);
  const handleClearImg = url => {
    setImg({ ...img, [name]: '' });
    setZIndex(2);
  };

  useEffect(() => {
    if (file) {
      ImgFile.append('file', file);
      apiPost('/v1/uploadgeturl', ImgFile, {
        'content-type': 'multipart/form-data',
      })
        .then(res => {
          setImg({
            ...img,
            [name]: `https://ttvnapi.com/v1/getfile/${res.data[0].filename}`,
          });
          setZIndex(4);
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      return;
    }
  }, [file]);
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
        <>
          <button
            className={classes.clearBtn}
            onClick={() => {
              handleClearImg(img[name]);
            }}
          >
            <Clear width={20} height={20} />
          </button>
          <Image
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              inset: 0,
              zIndex: zIndex,
              objectFit: 'cover',
            }}
            src={profile.picture[id]}
          />
        </>
      )}

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
      <Group position="center">
        <FileButton
          name={name}
          // resetRef={resetRef}
          onChange={setFile}
          accept="image/png,image/jpeg"
        >
          {props => <Button {...props}>Upload image</Button>}
        </FileButton>
      </Group>
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
